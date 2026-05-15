let i;
n.r(t), n.d(t, { default: () => lA });
var s,
    l = n(627968),
    a = n(64700),
    o = n(337836),
    r = n(17928),
    d = n(373495),
    c = n(318009),
    u = n(638421),
    h = n(196492),
    p = n(663413),
    A = n(404374),
    g = n(573435),
    m = n(750506),
    f = n(267102),
    E = n(17159),
    y = n(565058);
n(142703);
var S = n(503698),
    x = n.n(S),
    v = n(735438),
    C = n.n(v),
    I = n(258873),
    _ = n(622242),
    N = n(731738),
    T = n(941426),
    O = n(43990),
    j = n(939249),
    D = n(684013),
    R = n(996308),
    b = n(807393),
    L = n(789645),
    w = n(825484),
    M = n(821609),
    k = n(97808),
    P = n(778712),
    V = n(646862);
function G(e) {
    let { keybind: t, separator: n = "+", className: i } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.map((e, s) =>
            (0, l.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, l.jsx)("span", { className: x()(V.E, i), children: e }),
                        s === t.length - 1 ? void 0 : n,
                    ],
                },
                s,
            ),
        ),
    });
}
var U = n(375708),
    z = n(352828),
    H = n(818050);
let W = (e) => e.stopPropagation(),
    K = () => (0, l.jsx)("div", { className: z.tR, onClick: W, onMouseEnter: W, onMouseOver: W }),
    B = () => (0, l.jsx)("div", { className: z.yF }),
    F = (e, t, n) =>
        (0, l.jsx)("div", {
            className: z.qD,
            children: U.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) => (0, l.jsx)(G, { keybind: t, className: z.P }, n),
            }),
        });
class Y extends a.PureComponent {
    static defaultProps = { maxBodyLines: void 0, expand: !1, disabled: !1 };
    static getDerivedStateFromProps(e, t) {
        let { expand: n } = e,
            { expanded: i } = t;
        return !i && n ? { expanded: !0 } : null;
    }
    constructor(e) {
        super(e);
        const { expand: t } = e;
        this.state = { expanded: t };
    }
    componentDidMount() {
        let { onNotificationShow: e } = this.props;
        e?.();
    }
    componentDidUpdate(e) {
        let { onNotificationShow: t } = this.props;
        null != t && null == e.onNotificationShow && t();
    }
    handleDismiss = (e) => {
        e.stopPropagation();
        let { onDismissClick: t } = this.props;
        t?.(e);
    };
    handleConfirmClick = (e) => {
        e.stopPropagation();
        let { onConfirmClick: t } = this.props;
        t?.(e);
    };
    handleCancelClick = (e) => {
        e.stopPropagation();
        let { onCancelClick: t } = this.props;
        t?.(e);
    };
    handleMouseEnter = () => {
        this.props.disabled || this.setState({ expanded: !0 });
    };
    renderCloseButton() {
        return "function" == typeof this.props.title
            ? null
            : (0, l.jsx)(j.D, {
                  onClick: this.handleDismiss,
                  className: z.r,
                  "aria-label": U.intl.string(U.t.LnEgqX),
                  children: (0, l.jsx)(L.P, { size: "xs", color: "currentColor", className: z.MW }),
              });
    }
    renderHint() {
        let {
            props: { hint: e, locked: t },
            state: { expanded: n },
        } = this;
        if (null == e) return null;
        if ("function" == typeof e) {
            let i = e(n, t);
            return null != i ? (0, l.jsxs)(a.Fragment, { children: [(0, l.jsx)(B, {}), i] }, "hint-custom") : null;
        }
        return (0, l.jsxs)(
            a.Fragment,
            {
                children: [
                    (0, l.jsx)(B, {}),
                    (0, l.jsx)("div", { className: "string" == typeof e ? z.dx : void 0, children: e }, "hint-text"),
                ],
            },
            "hint-text",
        );
    }
    renderFooter() {
        let {
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: i, hint: s },
            state: { expanded: o },
        } = this;
        if (!o) return null != s ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(o);
            return null != e
                ? (0, l.jsxs)(a.Fragment, { children: [(0, l.jsx)(B, {}), e] }, "footer-custom-content")
                : null;
        }
        return null != n || null != i
            ? (0, l.jsxs)(
                  a.Fragment,
                  {
                      children: [
                          (0, l.jsx)(B, {}),
                          (0, l.jsxs)(w.e, {
                              fullWidth: !0,
                              children: [
                                  null != n
                                      ? (0, l.jsx)(M.$, {
                                            variant: "active",
                                            size: "sm",
                                            text: t ?? U.intl.string(U.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != i
                                      ? (0, l.jsx)(M.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: e ?? U.intl.string(U.t["ETE/oC"]),
                                            onClick: this.handleCancelClick,
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  },
                  "footer-button-content",
              )
            : this.renderHint();
    }
    renderIcon() {
        let { icon: e } = this.props;
        return null == e
            ? null
            : "string" == typeof e
              ? (0, l.jsx)(k.eu, { src: e, size: P._3.SIZE_40, className: z.my, "aria-hidden": !0 })
              : (0, l.jsx)("div", { className: z.my, children: e });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, l.jsxs)("div", {
            className: z.Qs,
            children: [
                this.renderIcon(),
                (0, l.jsxs)("div", {
                    className: z.zH,
                    children: [
                        (0, l.jsx)("div", {
                            className: z.DD,
                            children: "function" == typeof t ? t(this.handleDismiss) : t,
                        }),
                        null != e
                            ? (0, l.jsx)("div", {
                                  className: x()(z.rf, H.a5),
                                  style: { WebkitLineClamp: n, lineClamp: n },
                                  children: e,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
    render() {
        let {
                props: { onNotificationClick: e, disabled: t },
                state: { expanded: n },
            } = this,
            i = null != e ? j.D : "div";
        return (0, l.jsxs)(i, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: e ?? void 0,
            className: x()(z.kL, { [z.gr]: !0, [z.vk]: null != e && !t }),
            children: [
                this.renderCloseButton(),
                this.renderContent(),
                this.renderFooter(),
                t ? (0, l.jsx)(K, {}) : null,
            ],
        });
    }
}
var Z = n(976860),
    X = n(144400),
    J = n(927813),
    Q = n(9302),
    q = n(777334),
    $ = n(41984),
    ee = n(621466),
    et = n(52133),
    en = n(451988),
    ei = n(773371),
    es = n(899699),
    el = n(456797),
    ea = n(723702);
let eo = { x: 0, y: 0 },
    er = !1;
function ed(e) {
    let { clientX: t, clientY: n } = e;
    (er = !0), (eo.x = t), (eo.y = n);
}
let ec = new Map();
function eu(e, t) {
    if (null == t) ec.delete(e), 0 === ec.size && (window.removeEventListener("mousemove", ed), (er = !1));
    else {
        let n = ec.get(e);
        if (null != n && (0, et.A)(n.zone, t.zone)) return;
        0 === ec.size && window.addEventListener("mousemove", ed), ec.set(e, t);
    }
    if (ea.isPlatformEmbedded)
        if (ei.default.isCurrentPidOutOfProcess()) {
            let e = Array.from(ec.values()).map((e) => {
                let { zone: t } = e;
                return {
                    name: t.name,
                    left: t.left / window.innerWidth,
                    top: t.top / window.innerHeight,
                    right: t.right / window.innerWidth,
                    bottom: (t.bottom / window.innerHeight) * 1.5,
                };
            });
            D.A.setClickZones(e);
        } else {
            var n;
            let e = (0, es.m)();
            if (null == e) return;
            e.broadcastCommand({
                message: "set_click_zones",
                zones: Array.from(ec.values()).map((e) => {
                    let { zone: t } = e;
                    return t;
                }),
            }),
                (n = e),
                eh ||
                    (n.setClickZoneCallback((e, t, n) => {
                        let i = ec.get(e);
                        null != i && (er || ((eo.x = t), (eo.y = n)), i.instance.click());
                    }),
                    (eh = !0));
        }
}
let eh = !1;
class ep extends a.PureComponent {
    static defaultProps = { observe: !0, observeInterval: 1e3 };
    zone = C().uniqueId("ClickArea");
    interval = new en.IX();
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), eu(this.zone, null);
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return a.Children.only(this.props.children);
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone);
    }
    updateZone = () => {
        let e = this.props.contentDomRef.current;
        if ((0, ee.vq)(e)) {
            let { left: t, top: n, right: i, bottom: s } = e.getBoundingClientRect();
            eu(this.zone, {
                instance: this,
                zone: {
                    name: this.zone,
                    left: Math.floor(t),
                    top: Math.floor(n),
                    right: Math.ceil(i),
                    bottom: Math.ceil(s),
                },
            });
        }
    };
    click() {
        let e = (0, el._)("click", eo.x, eo.y);
        (0, el.K)(e, eo.x, eo.y);
    }
}
var eA = n(133977),
    eg = n.n(eA),
    em = n(990078),
    ef = n(364522),
    eE = n(652215),
    ey = n(960063);
let eS = eE.UVF.DEFAULT,
    ex = a.createContext({ type: eS, opacity: 1 }),
    ev = a.createContext(void 0),
    eC = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, l.jsx)(ex.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, l.jsx)(ev.Consumer, {
                    children: (e) =>
                        (0, l.jsx)("div", { className: x()(ey.bar, ey[eg()(s)], n), style: e, ...i, children: t }),
                });
            },
        });
    };
class eI extends a.PureComponent {
    static defaultProps = { disableScroll: !1 };
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, l.jsx)(ev.Consumer, {
            children: (i) =>
                (0, l.jsx)(ex.Consumer, {
                    children: (s) => {
                        let a = x()(ey.body, ey[eg()(s.type)], n);
                        return e
                            ? (0, l.jsx)("div", { className: a, style: i, children: t })
                            : (0, l.jsx)(ef.Ip, { fade: !0, className: a, children: t });
                    },
                }),
        });
    }
}
let e_ = (e) => {
        let { type: t = eS, width: n, height: i, children: s, className: a, opacity: o = 1, onClick: r } = e;
        return (0, l.jsx)(ex.Provider, {
            value: { type: t, opacity: o },
            children: (0, l.jsx)("div", {
                className: x()(ey.widget, ey[eg()(t)], a),
                style: { width: n, height: i },
                onClick: r,
                children: s,
            }),
        });
    },
    eN = (e) => {
        let { children: t, className: n, dynamicSize: i = !1 } = e;
        return (0, l.jsx)(ev.Consumer, {
            children: (e) =>
                (0, l.jsx)("div", { className: x()(ey.content, { [ey.staticSize]: !i }, n), style: e, children: t }),
        });
    };
(e_.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [eC, eI, eN];
    return (0, l.jsx)(ex.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                o = { backgroundColor: `rgba(54, 57, 63, ${"" + (n ?? s)})` };
            if ("string" == typeof t.type) return a.cloneElement(t, { style: o });
            {
                if (i.includes(t.type)) return (0, l.jsx)(ev.Provider, { value: o, children: t });
                let e = t.type.displayName;
                throw Error(
                    `Widget.Background cannot be wrapped around ${e}. Pass a DOM node or one of ${i.map((e) => "Widget." + e.name).join(",")}`,
                );
            }
        },
    });
}),
    (e_.Body = eI),
    (e_.Content = eN),
    (e_.Icon = (e) => {
        let {
            ref: t,
            icon: n,
            label: i,
            onClick: s,
            tooltipPosition: a = "top",
            isTutorial: o = !1,
            isActive: r,
            size: d = 20,
        } = e;
        return (0, l.jsx)(em.m, {
            __unsupportedReactNodeAsText: o ? (0, l.jsx)("div", { className: ey.tutorialTip, children: i }) : i,
            "aria-label": i,
            position: a,
            forceOpen: o,
            children: (0, l.jsx)(j.D, {
                onClick: s,
                className: x()(ey.icon, { [ey.toggledIconOn]: r }),
                innerRef: t,
                "aria-label": i,
                children: (0, l.jsx)(n, { color: "currentColor", size: "custom", width: d, height: d, role: "img" }),
            }),
        });
    }),
    (e_.Bar = eC);
var eT = n(672396),
    eO = n(744315);
let ej = 10 * J.A.Millis.SECOND,
    eD = new T.Vy("LegacyOverlayErrorBoundary");
function eR() {
    let e = (0, Q.getPID)(),
        t = (0, Q.getRPCAuthToken)();
    (0, R.tN)({
        type: eE.kGV.DISPATCH,
        pid: e,
        token: t,
        payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
    });
}
class eb extends a.PureComponent {
    state = { showTrace: !1, busy: !1 };
    notificationTimer;
    contentDomRef = a.createRef();
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, ej)),
            D.A.track(eE.HAw.NOTIFICATION_VIEWED, { notif_type: eT.KS.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    hideNotification = () => {
        eR();
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e), (this.notificationTimer = null);
    };
    handleReload = (e) => {
        this.setState({ busy: !0 }),
            eR(),
            D.A.track(eE.HAw.NOTIFICATION_CLICKED, { notif_type: eT.KS.OverlayCrashed, action_type: "reload" }, !0),
            e.stopPropagation(),
            setTimeout(() => location.reload(!0), 200);
    };
    handleNotificationClick = (e) => {
        e.stopPropagation();
        let { notificationTimer: t } = this;
        null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
    };
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: i } = this;
        return null == i
            ? null
            : (0, l.jsx)(ep, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, l.jsx)(O.N, {
                      theme: eE.NJ8.DARK,
                      children: (i) =>
                          (0, l.jsxs)(j.D, {
                              innerRef: this.contentDomRef,
                              className: x()(i, eO.kL),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, l.jsx)(Y, {
                                      expand: !0,
                                      icon: (0, l.jsx)(X.A, { width: 40, height: 40, className: eO.Lo }),
                                      title: U.intl.string(U.t.U38qZj),
                                      confirmText: U.intl.string(U.t.TzAl1a),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, l.jsxs)(e_, {
                                            className: eO.a2,
                                            children: [
                                                (0, l.jsx)(e_.Bar, { children: "Error Details" }),
                                                (0, l.jsx)(e_.Content, {
                                                    className: eO.Xh,
                                                    children: (0, l.jsx)("code", {
                                                        className: eO.aY,
                                                        children: (0, l.jsx)("pre", { children: t.stack }),
                                                    }),
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                  }),
              });
    }
}
let eL = C().throttle(
    () => {
        b.A.increment({ name: N.K.APP_CRASHED, tags: [`reason:${I.J.UNHANDLED_JS_ERROR}`, `level:${_.k.FATAL}`] }, !0);
    },
    100,
    { trailing: !1 },
);
class ew extends a.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let n = (0, Z.JK)().location;
        this.setState({ error: e, info: t }),
            eD.error(`ErrorBoundary caught error: ${e.message}`, { error: e, info: t });
        let i = (0, Q.getPID)(),
            s = (0, Q.getRPCAuthToken)();
        (0, R.tN)({
            type: eE.kGV.DISPATCH,
            pid: (0, Q.getPID)(),
            token: s,
            payloads: [
                { type: "OVERLAY_CRASHED", error: e.message, pid: i },
                { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
        }),
            setImmediate(() => window.addEventListener("click", eR));
        let l = (0, q.St)(e, $.Ue.Hook, { extra: t });
        D.A.track(eE.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: "fatal",
        }),
            eL();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: i } = this.state;
        return null != n ? (0, l.jsx)(eb, { error: n, info: i }) : (0, l.jsx)("div", { className: t, children: e });
    }
}
n(321073);
var eM = n(695497),
    ek = n.n(eM),
    eP = n(111956),
    eV = n.n(eP),
    eG = n(33851),
    eU = n.n(eG),
    ez = n(192308),
    eH = n(442433),
    eW = n(684136),
    eK = n(116305),
    eB = n(775121),
    eF = n(836753),
    eY = n(793574),
    eZ = n(688810),
    eX = n(235986);
n(607470);
var eJ = n(952818),
    eQ = n(880144),
    eq = n(905552),
    e$ = n(913765),
    e0 = n(453314),
    e1 = n(616356),
    e3 = n(734057),
    e8 = n(71393),
    e6 = n(38502),
    e2 = n(235058),
    e9 = n(309010),
    e5 = n(70142),
    e7 = n(157257),
    e4 = n(712687),
    te = n(532624),
    tt = n(184809),
    tn = n(531685),
    ti = n(19575),
    ts = n(316501),
    tl = n(350535),
    ta = n(589051),
    to = n(223251),
    tr = n(284009),
    td = n.n(tr),
    tc = n(835245),
    tu = n(228366),
    th = n(780907),
    tp = n(938005);
function tA(e, t) {
    return {
        trackView() {
            let n = tt.default.isInstanceLocked() ? eE.ThZ.LOCKED_OVERLAY : eE.ThZ.UNLOCKED_OVERLAY;
            D.A.track(eE.HAw.NOTIFICATION_VIEWED, { ...t, location: n }), D.A.notificationEvent(e, eT.uj.Viewed);
        },
        trackClick(n) {
            let i = tt.default.isInstanceLocked() ? eE.ThZ.LOCKED_OVERLAY : eE.ThZ.UNLOCKED_OVERLAY;
            D.A.track(eE.HAw.NOTIFICATION_CLICKED, { ...t, location: i, action_type: n }),
                D.A.notificationEvent(e, eT.uj.Clicked);
        },
    };
}
function tg() {
    let e = te.Ay.getOverlayKeybind();
    return null != e ? (0, tl.dI)(e.shortcut, !0).split(" + ") : ["???"];
}
var tm = n(486020),
    tf = n(231723),
    tE = n(296027),
    ty = n(287809),
    tS = n(277888);
function tx() {
    return (0, l.jsx)("div", {
        className: tS.q,
        children: (0, l.jsx)(M.$, { variant: "active", size: "sm", text: U.intl.string(U.t.U76Ft2), fullWidth: !0 }),
    });
}
var tv = n(387755),
    tC = n(730852),
    tI = n(571694),
    t_ = n(47167),
    tN = n(621436),
    tT = n(994500),
    tO = n(308368),
    tj = n(334738),
    tD = n(400492),
    tR = n(530789);
let tb = (e) => F(e, tg(), U.t["z8/sgJ"]);
var tL = n(274372),
    tw = n(475358),
    tM = n(176781),
    tk = n(572164);
function tP(e) {
    let { trackView: t, trackClick: n } = tA(eT.KS.ClipsNotification, { notif_type: eT.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, l.jsx)(tM.x, { size: "xs", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
var tV = n(592598),
    tG = n(885386),
    tU = n(164891),
    tz = n(495544),
    tH = n(803224),
    tW = n(290863),
    tK = n(461213),
    tB = n(351906);
let tF = new T.Vy("LegacyOverlayNotificationsStore"),
    tY = 5 * J.A.Millis.SECOND,
    tZ = 8 * J.A.Millis.SECOND,
    tX = 30 * J.A.Millis.SECOND,
    tJ = Object.freeze({ priority: 0, duration: tY, expirationExternallyManaged: !1, type: 0 }),
    tQ = [],
    tq = (e, t, n) => {
        let i = t ? eE.yFH.TIMED_OUT : eE.yFH.DISMISSED;
        return setTimeout(() => D.A.updateNotificationStatus(e, i), null != n ? n : tY);
    };
function t$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.yFH.DISMISSED;
    if (null == e) return !1;
    let n = tQ.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = tQ[n];
    clearTimeout(i.timerId), (tQ = [...tQ]), t === eE.yFH.DISMISSED ? tQ.splice(n, 1) : (tQ[n] = { ...i, status: t });
}
function t0(e) {
    let t = tQ.length;
    return (tQ = tQ.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function t1(e) {
    let t = tQ.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function t3(e, t) {
    let n = { ...tJ, ...t };
    if (2 !== n.priority && !tt.default.isInstanceFocused()) return null;
    let i = (0, tc.A)(),
        s = { id: i, status: eE.yFH.ACTIVE, timerId: tq(i, n.expirationExternallyManaged, n.duration), props: e, ...n },
        l = (tQ = [...tQ]).findIndex((e) => e.priority <= n.priority);
    return -1 === l ? tQ.push(s) : tQ.splice(l, 0, s), tQ.length > 10 && clearTimeout(tQ.pop().timerId), i;
}
function t8(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = t1(t);
    if (!Object.keys(n).includes(tz.default.getId())) return t$(i);
    if (null != i) return !1;
    let s = e3.A.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !tU.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayStartRinging" }).enabled) ||
        tK.A.getStatus() === eE.clD.DND ||
        tG.NO.getSetting()
    )
        return !1;
    let l = tQ.find((e) => 1 === e.type && e.channelId === t && e.messageType === eE.lAJ.CALL);
    null != l && t$(l.id),
        t3(
            (function (e) {
                let t = (0, t_.m1)(e, ty.default, tT.A),
                    n = U.intl.string(U.t.ssrVzG),
                    i = (0, tI.Y)(e),
                    s = (0, tN.A)(e),
                    { trackView: l, trackClick: a } = tA(eT.KS.IncomingCall, {
                        notif_type: eT.KS.IncomingCall,
                        notif_user_id: s,
                        guild_id: e.guild_id,
                        channel_id: e.id,
                        channel_type: e.type,
                    });
                return {
                    icon: i,
                    title: t,
                    body: n,
                    hint: (e) => F(e, tg(), U.t.Odi54y),
                    confirmText: U.intl.string(U.t["0D/6Rz"]),
                    cancelText: U.intl.string(U.t.BVN4pL),
                    onNotificationShow: () => {
                        l();
                    },
                    onConfirmClick: () => {
                        if (eE.kvI.CALLABLE.has(e.type)) D.A.callPrivateChannel(e.id);
                        else {
                            if (e.type !== eE.rbe.GUILD_VOICE) return;
                            tC.default.selectVoiceChannel(e.id);
                        }
                        a("join"),
                            D.A.track(eE.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: e.guild_id,
                                channel_id: e.id,
                                video_enabled: !1,
                            });
                    },
                    onCancelClick: () => {
                        tv.A.stopRinging(e.id), a("decline");
                    },
                    onDismissClick: () => {
                        a("dismiss");
                    },
                };
            })(s),
            { priority: 1, expirationExternallyManaged: !0, type: 2, channelId: s.id },
        );
}
class t6 extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            tz.default,
            e3.A,
            tL.A,
            tH.A,
            ei.default,
            tE.default,
            e7.A,
            tV.A,
            tt.default,
            tW.A,
            e9.A,
            tK.A,
            tB.A,
            ty.default,
        );
    }
    getNotifications() {
        return tQ;
    }
}
let t2 = new t6(
    tu.h,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  t$(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  let { nudges: t } = e;
                  if (tE.default.hasChangedRenderMode(ei.default.getFocusedPID() ?? (0, Q.getPID)()))
                      return void tF.info("Overlay mounted, but render modes have changed", { nudges: t });
                  let i = t[0];
                  if ((tF.info("Overlay mounted", { nudges: t, selectedNudge: i }), null == i)) return;
                  let s = (function (e) {
                      switch (e.type) {
                          case eT.Jr.GO_LIVE_VOICE:
                          case eT.Jr.GO_LIVE_NON_VOICE:
                              return (function (e) {
                                  switch (e.type) {
                                      case eT.Jr.GO_LIVE_VOICE: {
                                          let { game: t, voiceGuild: i } = e,
                                              { trackView: s, trackClick: a } = tA(eT.KS.GoLiveNudge, {
                                                  notif_type: eT.KS.GoLiveNudge,
                                              });
                                          return {
                                              icon: n(334260),
                                              title: null,
                                              body: U.intl.formatToPlainString(U.t.z9znpa, {
                                                  game: t.name,
                                                  server: i.name,
                                              }),
                                              hint: () => (0, l.jsx)(tx, {}),
                                              renderFooter: () => (0, l.jsx)(tx, {}),
                                              onNotificationShow: () => {
                                                  s();
                                              },
                                              onNotificationClick: (e, t) => {
                                                  a("unlock");
                                                  let i = (0, Q.getPID)();
                                                  D.A.updateNotificationStatus(t);
                                                  let s = tE.default.isOverlayOOPEnabledForPid(i);
                                                  if (
                                                      (s ? D.A.setInputLocked(!1, i) : D.A.setInstanceLocked(!1),
                                                      null == ty.default.getCurrentUser())
                                                  )
                                                      return;
                                                  let o = s ? { contextKey: tf.KX } : void 0;
                                                  (0, ez.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("80203"),
                                                          n.e("17918"),
                                                          n.e("76171"),
                                                          n.e("38601"),
                                                          n.e("36946"),
                                                          n.e("44727"),
                                                          n.e("6565"),
                                                          n.e("14304"),
                                                          n.e("82001"),
                                                      ]).then(n.bind(n, 266536));
                                                      return (t) =>
                                                          (0, l.jsx)(e, {
                                                              ...t,
                                                              sourcePID: i,
                                                              selectSource: !1,
                                                              analyticsLocations: [eY.A.OVERLAY_NUDGE],
                                                          });
                                                  }, o);
                                              },
                                              onDismissClick: () => {
                                                  a("dismiss");
                                              },
                                          };
                                      }
                                      case eT.Jr.GO_LIVE_NON_VOICE: {
                                          let { game: t } = e,
                                              { trackView: i, trackClick: s } = tA(eT.KS.GoLiveNonVoiceNudge, {
                                                  notif_type: eT.KS.GoLiveNonVoiceNudge,
                                              });
                                          return {
                                              icon: n(334260),
                                              title: null,
                                              body: U.intl.formatToPlainString(U.t["0SVWgF"], { game: t.name }),
                                              hint: () => (0, l.jsx)(tx, {}),
                                              renderFooter: () => (0, l.jsx)(tx, {}),
                                              onNotificationShow: () => {
                                                  i();
                                              },
                                              onNotificationClick: (e, t) => {
                                                  s("unlock");
                                                  let i = (0, Q.getPID)();
                                                  D.A.updateNotificationStatus(t);
                                                  let a = tE.default.isOverlayOOPEnabledForPid(i);
                                                  a ? D.A.setInputLocked(!1, i) : D.A.setInstanceLocked(!1);
                                                  let o = a ? { contextKey: tf.KX } : void 0;
                                                  (0, ez.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("80203"),
                                                          n.e("17918"),
                                                          n.e("76171"),
                                                          n.e("38601"),
                                                          n.e("36946"),
                                                          n.e("44727"),
                                                          n.e("6565"),
                                                          n.e("14304"),
                                                          n.e("82001"),
                                                      ]).then(n.bind(n, 266536));
                                                      return (t) =>
                                                          (0, l.jsx)(e, {
                                                              ...t,
                                                              sourcePID: i,
                                                              selectSource: !1,
                                                              analyticsLocations: [eY.A.OVERLAY_NUDGE],
                                                          });
                                                  }, o);
                                              },
                                              onDismissClick: () => {
                                                  s("dismiss");
                                              },
                                          };
                                      }
                                  }
                              })(e);
                          case eT.Jr.NEWS:
                          default:
                              return (function (e) {
                                  var t;
                                  let { type: i } = e,
                                      {
                                          icon: s,
                                          title: a,
                                          body: o,
                                          hint: r,
                                          notifType: d,
                                      } = ((t = {
                                          icon: n(513653),
                                          title: U.intl.string(U.t.pkXAeG),
                                          body: null,
                                          hint: tb,
                                          notifType: eT.KS.WelcomeNudge,
                                      }),
                                      e.type === eT.Jr.NEWS
                                          ? {
                                                icon: e.news?.icon ?? t.icon,
                                                title: e.news?.title ?? t.title,
                                                body: e.news?.body ?? t.body,
                                                hint: e.news?.hint ?? t.hint,
                                                notifType: null != e.news ? eT.KS.NewsNudge : t.notifType,
                                            }
                                          : t),
                                      { trackView: c, trackClick: u } = tA(d, { notif_type: d });
                                  return {
                                      icon: s,
                                      title: a,
                                      body: o,
                                      hint: r,
                                      renderFooter: () =>
                                          (0, l.jsx)("div", {
                                              style: { textAlign: "center", padding: 2 },
                                              children: U.intl.string(U.t["9MyuT0"]),
                                          }),
                                      onNotificationShow: () => {
                                          c();
                                      },
                                      onNotificationClick: (e, t) => {
                                          u("unlock"),
                                              i === eT.Jr.NEWS && D.A.updateNotificationStatus(t),
                                              tE.default.isOverlayOOPEnabledForPid((0, Q.getPID)())
                                                  ? D.A.setInputLocked(!1, (0, Q.getPID)())
                                                  : tt.default.isInstanceLocked() && D.A.setInstanceLocked(!1);
                                      },
                                      onDismissClick: () => {
                                          u("dismiss");
                                      },
                                  };
                              })(e);
                      }
                  })(i);
                  null != s && t3(s, { priority: 2, duration: tZ });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  tQ = tQ.map((e) =>
                      e.status === eE.yFH.ACTIVE
                          ? (clearTimeout(e.timerId), { ...e, timerId: tq(e.id, e.expirationExternallyManaged) })
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: n } = e,
                      i = e3.A.getChannel(t),
                      s = ty.default.getUser(n.author?.id);
                  if (null == i || null == s) return !1;
                  if (n.activity?.type === eE.xL.JOIN || n.activity?.type === eE.xL.JOIN_REQUEST) {
                      if (!(0, tp.lx)(n, t, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, s;
                          if ((td()(null != t.activity, "received null message activity"), n.id === tz.default.getId()))
                              return !1;
                          let l = e7.A.getGame();
                          if (null == l) return !1;
                          switch (t.activity.type) {
                              case eE.xL.JOIN:
                                  if (
                                      null == (i = tW.A.getApplicationActivity(n.id, l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  s = (function (e, t, n, i, s) {
                                      if (null == t.activity) return null;
                                      let l = t.activity.type,
                                          a = s.session_id;
                                      if (null == a) return null;
                                      let { icon: o, title: r, body: d } = (0, tp.TB)(e, t, n),
                                          { trackView: c, trackClick: u } = tA(eT.KS.ActivityInvite, {
                                              notif_type: eT.KS.ActivityInvite,
                                              notif_user_id: n.id,
                                              message_id: t.id,
                                              message_type: t.type,
                                              guild_id: e.guild_id,
                                              channel_id: e.id,
                                              channel_type: e.type,
                                              activity_type: l,
                                              activity_name: s.name,
                                          });
                                      return {
                                          icon: o,
                                          title: r,
                                          body: d,
                                          hint: (e) => F(e, tg(), U.t.aB5xLy),
                                          onNotificationShow: () => {
                                              c();
                                          },
                                          confirmText: U.intl.string(U.t.VJlc0S),
                                          onConfirmClick: (s, l) => {
                                              th.Ay.join({
                                                  userId: n.id,
                                                  sessionId: a,
                                                  applicationId: i.id,
                                                  channelId: e.id,
                                                  messageId: t.id,
                                              }),
                                                  D.A.updateNotificationStatus(l),
                                                  u("join");
                                          },
                                          onDismissClick: () => {
                                              u("dismiss");
                                          },
                                      };
                                  })(e, t, n, l, i);
                                  break;
                              case eE.xL.JOIN_REQUEST:
                                  if (
                                      null == (i = tK.A.getApplicationActivity(l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  s = (function (e, t, n, i) {
                                      let s = t.username,
                                          l = U.intl.format(U.t.VDODnv, { username: "", game: n.name }),
                                          a = t.getAvatarURL(e.guild_id, 80),
                                          { trackView: o, trackClick: r } = tA(eT.KS.ActivityInvite, {
                                              notif_type: eT.KS.ActivityInvite,
                                              notif_user_id: t.id,
                                              activity_type: eE.xL.JOIN_REQUEST,
                                              activity_name: n.name,
                                          });
                                      return {
                                          icon: a,
                                          title: s,
                                          body: l,
                                          hint: (e) => F(e, tg(), U.t.Odi54y),
                                          confirmText: U.intl.string(U.t["fgP/wX"]),
                                          cancelText: U.intl.string(U.t["tpXzJ+"]),
                                          onNotificationShow: () => {
                                              o();
                                          },
                                          onConfirmClick: (t, n) => {
                                              tO.A.sendActivityInvite({
                                                  channelId: e.id,
                                                  type: eE.xL.JOIN,
                                                  activity: i,
                                                  location: tt.default.isInstanceLocked()
                                                      ? eE.ThZ.LOCKED_OVERLAY
                                                      : eE.ThZ.UNLOCKED_OVERLAY,
                                              }),
                                                  r("join"),
                                                  D.A.updateNotificationStatus(n);
                                          },
                                          onCancelClick: (t, n) => {
                                              (0, tj.ack)(
                                                  e.id,
                                                  {
                                                      section: eE.JJy.OVERLAY,
                                                      object: eE.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                                      objectType: eE.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                                  },
                                                  !0,
                                                  !0,
                                              ),
                                                  D.A.updateNotificationStatus(n),
                                                  r("decline");
                                          },
                                          onDismissClick: () => {
                                              r("dismiss");
                                          },
                                      };
                                  })(e, n, l, i);
                          }
                          if (null == s) return !1;
                          let a = t3(s, { priority: 2, expirationExternallyManaged: !0, channelId: e.id });
                          return null != a && tq(a, !1, tX), !0;
                      })(i, n, s);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!tt.default.isInstanceLocked() || tt.default.isPinned(eE.uss.TEXT)) &&
                          t === e9.A.getChannelId()) ||
                      tV.A.isNotificationDisabled(eT.KS.TextChat) ||
                      tB.A.disableNotifications ||
                      !(0, tp.lx)(n, t)
                  )
                      return !1;
                  t3(
                      (function (e, t, n, i) {
                          let { icon: s, title: a, body: o } = (0, tp.TB)(e, t, n),
                              { trackView: r, trackClick: d } = tA(eT.KS.TextChat, {
                                  notif_type: eT.KS.TextChat,
                                  notif_user_id: t.author?.id,
                                  message_id: t.id,
                                  message_type: t.type,
                                  guild_id: e.guild_id,
                                  channel_id: e.id,
                                  channel_type: e.type,
                              });
                          return {
                              icon: s,
                              title: a,
                              body: o,
                              renderFooter: (e) =>
                                  e
                                      ? (0, l.jsx)("div", {
                                            style: { textAlign: "center" },
                                            children: U.intl.string(U.t["+MJm3w"]),
                                        })
                                      : null,
                              maxBodyLines: 2,
                              onNotificationShow: () => {
                                  i && (0, tD.Ak)(tR.cH, tR.pD), r();
                              },
                              onNotificationClick: () => {
                                  if (tE.default.isOverlayOOPEnabledForPid((0, Q.getPID)())) {
                                      let n = (0, Q.getPID)();
                                      tt.default.isInstanceLocked()
                                          ? (d("unlock"), D.A.setInputLocked(!1, n))
                                          : (d("jump"),
                                            (0, Z.pX)(eE.BVt.CHANNEL(e.guild_id, e.id, t.id)),
                                            ea.isPlatformEmbedded && ti.Ay.focus());
                                  } else
                                      (0, Z.pX)(eE.BVt.CHANNEL(e.guild_id, e.id)),
                                          d("jump"),
                                          tt.default.isInstanceLocked() && D.A.setInstanceLocked(!1);
                              },
                              onDismissClick: () => {
                                  d("dismiss");
                              },
                          };
                      })(i, n, s, !tH.A.isSoundDisabled(tR.cH)),
                      { type: 1, channelId: i.id, messageType: n.type },
                  );
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && t0(t);
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return t0(t);
              },
              CALL_CREATE: t8,
              CALL_UPDATE: t8,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  t$(t1(t));
              },
              GUILD_RING_START: t8,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (!tU.A.getCurrentConfig({ guildId: n, location: "OverlayStopRinging" }).enabled) return !1;
                  i.includes(tz.default.getId()) && t$(t1(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: s } = e,
                      a = e7.A.getGame();
                  return (
                      null != a &&
                      a.id === s &&
                      (n === eE.xL.JOIN &&
                          (t = (function (e, t) {
                              let n = e.username,
                                  i = U.intl.format(U.t["Yk+uYG"], { username: "" }),
                                  s = (0, tm.ku)(e),
                                  { trackView: a, trackClick: o } = tA(eT.KS.ActivityUserJoin, {
                                      notif_type: eT.KS.ActivityUserJoin,
                                      notif_user_id: e.id,
                                      activity_type: eE.xL.JOIN,
                                      activity_name: t.name,
                                  });
                              return {
                                  icon: s,
                                  title: n,
                                  body: i,
                                  hint: (e) => {
                                      let t;
                                      return (
                                          (t = U.intl.string(U.t.WRj1Wn)),
                                          (0, l.jsx)("div", { className: z.g2, children: t })
                                      );
                                  },
                                  onNotificationShow: () => {
                                      a();
                                  },
                                  onDismissClick: () => {
                                      o("dismiss");
                                  },
                              };
                          })(i, a)),
                      null != t && void t3(t, { priority: 2, type: 0 }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function (e) {
                  "manual" === e.clipMethod && t3(tP(U.intl.string(U.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  t3(tP(U.intl.string(U.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (function () {
                      let { trackView: e, trackClick: t } = tA(eT.KS.ClipsReminderNotification, {
                              notif_type: eT.KS.ClipsReminderNotification,
                          }),
                          n = te.Ay.getKeybindForAction(eE.hCu.SAVE_CLIP),
                          i = (0, tk.TD)();
                      if (null == n || !i) return null;
                      let s = tl.dI(n.shortcut, !0);
                      return {
                          title: U.intl.format(U.t.S5uhCN, {
                              keybind: s,
                              keybindHook: () =>
                                  (0, l.jsx)("span", {
                                      style: { display: "inline-block" },
                                      children: (0, l.jsx)(tw.e, { shortcut: s }),
                                  }),
                          }),
                          icon: (0, l.jsx)(tM.x, { size: "xs", color: "currentColor" }),
                          onNotificationShow: () => {
                              e();
                          },
                          onDismissClick: () => {
                              t("dismiss");
                          },
                      };
                  })();
                  null != t && t3(t);
              },
          },
);
class t9 extends a.Component {
    handleNotificationShow = () => {
        let {
            id: e,
            props: { onNotificationShow: t },
        } = this.props.notification;
        t(e);
    };
    handleDismissClick = (e) => {
        let {
            id: t,
            props: { onDismissClick: n },
        } = this.props.notification;
        D.A.updateNotificationStatus(t), n?.(e, t);
    };
    handleNotificationClick = (e) => {
        let {
            id: t,
            props: { onNotificationClick: n },
        } = this.props.notification;
        null != n && n(e, t);
    };
    handleConfirmClick = (e) => {
        let {
            id: t,
            props: { onConfirmClick: n },
        } = this.props.notification;
        null != n && n(e, t);
    };
    handleCancelClick = (e) => {
        let {
            id: t,
            props: { onCancelClick: n },
        } = this.props.notification;
        null != n && n(e, t);
    };
    renderFooter = (e) => {
        let {
                id: t,
                props: { renderFooter: n },
            } = this.props.notification,
            i = this.props.locked;
        return null != n ? n(e, t, i) : null;
    };
    getStyle() {
        let e,
            t,
            n,
            i,
            {
                props: { position: s, zIndex: l },
            } = this;
        switch (s) {
            case eE.G6Q.TOP_LEFT:
            case eE.G6Q.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case eE.G6Q.BOTTOM_LEFT:
            case eE.G6Q.BOTTOM_RIGHT:
                n = 0;
                break;
            default:
                i = 0;
        }
        return { left: e, right: t, bottom: n, top: i, zIndex: l };
    }
    render() {
        let {
            props: {
                locked: e,
                notification: {
                    props: {
                        renderFooter: t,
                        onNotificationShow: n,
                        onDismissClick: i,
                        onNotificationClick: s,
                        onConfirmClick: a,
                        onCancelClick: o,
                        ...r
                    },
                },
            },
        } = this;
        return (0, l.jsx)(Y, {
            ...r,
            locked: e,
            onNotificationShow: this.handleNotificationShow,
            onDismissClick: null != i ? this.handleDismissClick : void 0,
            onNotificationClick: null != s ? this.handleNotificationClick : null,
            onConfirmClick: null != a ? this.handleConfirmClick : null,
            onCancelClick: null != o ? this.handleCancelClick : null,
            renderFooter: this.renderFooter,
            expand: !e,
        });
    }
}
var t5 = n(761935);
function t7(e) {
    let { locked: t, keybind: n } = e,
        i = a.useRef(null),
        s = (0, r.yK)([t2], () => t2.getNotifications()),
        o = (0, r.bG)([tt.default], () => tt.default.getNotificationPositionMode());
    if ((0, r.bG)([tV.A], () => tV.A.isNotificationDisabled(eT.KS.TextChat)) || o === eE.G6Q.DISABLED) return null;
    let d = s.filter((e) => !t || e.status !== eE.yFH.TIMED_OUT),
        c = (0, v.groupBy)(d, (e) => e.type);
    return (0, l.jsx)(ep, {
        contentDomRef: i,
        observeInterval: 200,
        children: (0, l.jsx)("div", {
            ref: i,
            className: x()(t5.container, t5[o]),
            children: Object.entries(c).map((e) => {
                let [i, s] = e;
                return 0 === s.length
                    ? null
                    : (0, l.jsx)(t4, { locked: t, keybind: n, position: o, notification: s[0] }, i);
            }),
        }),
    });
}
function t4(e) {
    let { notification: t, position: n, keybind: i, locked: s } = e;
    return (0, l.jsx)("div", {
        className: t5.notificationGroup,
        children: (0, l.jsx)(t9, { zIndex: 100, position: n, notification: t, keybind: i, locked: s }, t.id),
    });
}
var ne = n(391973);
let nt = a.memo(function (e) {
    let { layout: t, layoutSize: n, className: i, renderWidget: s } = e;
    return null != t
        ? (0, l.jsx)("div", {
              className: i,
              style: { width: n.width, height: n.height },
              children: t.widgets.map((e) => s(e, n)),
          })
        : null;
});
var nn = n(5463),
    ni = n(129694),
    ns =
        (((s = {}).MOVE = "MOVE"),
        (s.RESIZE_NORTH = "RESIZE_NORTH"),
        (s.RESIZE_WEST = "RESIZE_WEST"),
        (s.RESIZE_EAST = "RESIZE_EAST"),
        (s.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (s.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (s.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (s.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (s.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST"),
        s);
let nl = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);
function na(e, t, n) {
    let { width: i, height: s } = e;
    return { width: "auto" === i ? "auto" : Math.max(t, i), height: "auto" === s ? "auto" : Math.max(n, s) };
}
function no(e) {
    let { top: t, left: n, bottom: i, right: s } = e;
    return (
        null == n && null == s && (n = 0), null == t && null == i && (t = 0), { top: t, left: n, bottom: i, right: s }
    );
}
function nr(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`;
}
function nd(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}
function nc(e, t) {
    let { top: n, left: i, bottom: s, right: l } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return { bottom: s, left: i, right: void 0, top: void 0 };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return { bottom: s, right: l, left: void 0, top: void 0 };
        case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return { top: n, right: l, bottom: void 0, left: void 0 };
        default:
            throw Error(`getOrientedCoords: Invalid orientation: ${e}`);
    }
}
class nu extends a.Component {
    static Operations = ns;
    static defaultProps = {
        snapOrientation: !0,
        minSize: { width: 0, height: 0 },
        container: { minX: 0, minY: 0, maxX: 1 / 0, maxY: 1 / 0 },
        resizeX: !0,
        resizeY: !0,
        hidden: !1,
        dragAnywhere: !0,
        active: !0,
        targetWindow: window,
    };
    anchor;
    size;
    ref = a.createRef();
    dragState = { startX: 0, startY: 0, offsetX: 0, offsetY: 0, offsetWidth: 0, offsetHeight: 0 };
    state = { operation: null, operationStarted: !1 };
    constructor(e) {
        super(e), (this.anchor = no(e.anchor)), (this.size = na(e.size, e.minSize.width, e.minSize.height));
    }
    shouldComponentUpdate(e, t) {
        return (
            !(0, et.A)(t, this.state) ||
            !(0, et.A)(e, this.props, ["anchor", "size", "minSize", "container"]) ||
            !(0, et.A)(e.anchor, this.props.anchor) ||
            !(0, et.A)(e.size, this.props.size) ||
            !(0, et.A)(e.minSize, this.props.minSize) ||
            !(0, et.A)(e.container, this.props.container)
        );
    }
    componentDidUpdate(e, t) {
        null == t.operation &&
            ((0, et.A)(this.props.anchor, e.anchor) || this.setDOMPositions(no(this.props.anchor)),
            (0, et.A)(this.props.size, e.size) ||
                this.setDOMSize(na(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd();
    }
    handleMouseDown = (e) => {
        e.stopPropagation();
        let { dragAnywhere: t } = this.props,
            { current: n } = this.ref;
        null != n && e.button === eE.hE4.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY);
    };
    handleMouseMove = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { clientX: t, clientY: n } = e,
            {
                dragState: { startX: i, startY: s },
                state: { operation: l, operationStarted: a },
            } = this;
        !(null == l || (!a && Math.pow(i - t, 2) + Math.pow(s - n, 2) < 3)) &&
            ("MOVE" === l ? this.handleDragMove(t, n) : nl.has(l) && this.handleResizeMove(t, n));
    };
    handleResizeMouseDown(e, t) {
        let { clientX: n, clientY: i } = e;
        e.stopPropagation(), this.handleOperationStart(t, n, i);
    }
    handleOperationStart = (e, t, n) => {
        let {
            ref: { current: i },
            props: {
                targetWindow: s,
                active: l,
                container: { maxX: a, maxY: o },
            },
        } = this;
        if (null == i || !l) return;
        let { width: r, height: d } = nd(i, this.size),
            c = (0, nn.Ly)(this.anchor, a, o, r, d);
        if ("MOVE" === e) {
            let { x: e, y: i } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(c);
            this.dragState = { ...this.dragState, startX: t, startY: n, offsetX: t - e, offsetY: n - i };
        } else {
            let i = nc(e, c);
            this.setDOMPositions(i),
                (this.dragState = { ...this.dragState, startX: t, startY: n, offsetWidth: r, offsetHeight: d });
        }
        this.setState({ operation: e, operationStarted: !1 }, () => {
            s.addEventListener("mousemove", this.handleMouseMove),
                s.addEventListener("mouseup", this.handleOperationEnd);
        });
    };
    handleDragMove(e, t) {
        let {
            ref: { current: n },
            props: {
                id: i,
                container: { maxX: s, maxY: l, minX: a, minY: o },
                onDragStart: r,
                onDrag: d,
                snapOrientation: c,
            },
            dragState: { offsetX: u, offsetY: h },
            state: { operationStarted: p },
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), o));
        let { width: A, height: g } = nd(n, this.size),
            m = t - h,
            f = e - u,
            E = (0, nn.fh)((0, nn.Ly)({ top: m, left: f, bottom: void 0, right: void 0 }, s, l, A, g)),
            y = c ? (0, nn.h1)(E) : nc("RESIZE_SOUTH_EAST", E);
        this.setDOMPositions(y),
            p || (null != r && r(), this.setState({ operationStarted: !0 })),
            null != d && d(i, "MOVE", this.anchor, this.size);
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: s, maxY: l, minX: a, minY: o },
                    onDragStart: r,
                    onDrag: d,
                },
                state: { operation: c, operationStarted: u },
            } = this,
            { startX: h, startY: p, offsetWidth: A, offsetHeight: g } = this.dragState,
            m = 0,
            f = 0;
        if (null != c) {
            switch (((e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), o)), c)) {
                case "RESIZE_EAST":
                case "RESIZE_SOUTH_EAST":
                case "RESIZE_NORTH_EAST":
                    m -= h - e;
                    break;
                case "RESIZE_WEST":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_NORTH_WEST":
                    m += h - e;
            }
            switch (c) {
                case "RESIZE_SOUTH":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_SOUTH_EAST":
                    f -= p - t;
                    break;
                case "RESIZE_NORTH":
                case "RESIZE_NORTH_WEST":
                case "RESIZE_NORTH_EAST":
                    f += p - t;
            }
            (A = Math.max(A + m, i.width)),
                (g = Math.max(g + f, i.height)),
                this.setDOMSize({ width: A, height: g }),
                u || (null != r && r(), this.setState({ operationStarted: !0 })),
                null != d && d(n, c, this.anchor, this.size);
        }
    }
    handleOperationEnd = () => {
        let { operation: e, operationStarted: t } = this.state,
            { targetWindow: n, onDragEnd: i } = this.props;
        n.removeEventListener("mousemove", this.handleMouseMove),
            n.removeEventListener("mouseup", this.handleOperationEnd);
        let s = t
            ? () => {
                  let { onUpdate: t, id: n } = this.props;
                  t(e, n, this.anchor, this.size, nd(this.ref.current, this.size));
              }
            : void 0;
        if (t) {
            let { maxX: e, maxY: t } = this.props.container,
                { width: n, height: s } = nd(this.ref.current, this.size),
                l = (0, nn.Ly)(this.anchor, e, t, n, s),
                a = (0, nn.h1)(l);
            this.setDOMPositions(a), this.setDOMSize({ width: n, height: s }), null != i && i();
        }
        this.setState({ operation: null, operationStarted: !1 }, s);
    };
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: s } = e,
            { current: l } = this.ref;
        (this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != l &&
                ((l.style.top = nr(t)), (l.style.bottom = nr(i)), (l.style.left = nr(n)), (l.style.right = nr(s)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            { current: i } = this.ref;
        (t = "auto" === this.size.width ? "auto" : t),
            (n = "auto" === this.size.height ? "auto" : n),
            (this.size = { width: t, height: n }),
            null != i && ((i.style.width = nr(t)), (i.style.height = nr(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(a.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: x()(ni.M$, { [ni.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, l.jsx)("div", {
                                  className: x()(ni.Q8, { [ni.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: x()(ni.cz, { [ni.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: x()(ni._J, { [ni.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: x()(ni.DS, { [ni.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: x()(ni.Bc, { [ni.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: x()(ni.rL, { [ni.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: x()(ni.Rl, { [ni.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    render() {
        let {
            props: { children: e, hidden: t, onClick: n, id: i, style: s },
            size: a,
            anchor: o,
            state: { operation: r, operationStarted: d },
        } = this;
        return (0, l.jsxs)("div", {
            ref: this.ref,
            style: {
                ...o,
                ...a,
                ...s,
                ...(null != r ? { zIndex: 1e3 } : void 0),
                ...(t ? { visibility: "hidden" } : void 0),
            },
            className: x()({ [ni.iE]: !0, [ni.MQ]: d }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()],
        });
    }
}
var nh = n(254472),
    np = n(967198),
    nA = n(873174),
    ng = n(922016),
    nm = n(625903),
    nf = n(685399),
    nE = n(508654),
    ny = n(885631),
    nS = n(849380),
    nx = n(83297),
    nv = n(846930),
    nC = n(985668),
    nI = n(366811),
    n_ = n(924985),
    nN = n(945886),
    nT = n(72314),
    nO = n(769765),
    nj = n(808728),
    nD = n(458294),
    nR = n(576705),
    nb = n(584569),
    nL = n(763827),
    nw = n(543465),
    nM = n(607567),
    nk = n(534514),
    nP = n(408278),
    nV = n(761508),
    nG = n(689175),
    nU = n(683071),
    nz = n(270003),
    nH = n(452027),
    nW = n(243721),
    nK = n(331322),
    nB = n(773812),
    nF = n(691885),
    nY = n(305866),
    nZ = n(187322),
    nX = n(428678),
    nJ = n(834730),
    nQ = n(110649);
let nq = 0,
    n$ = (e) => {
        switch (e) {
            case eE.G6Q.TOP_LEFT:
                return U.intl.string(U.t.xlchpU);
            case eE.G6Q.TOP_RIGHT:
                return U.intl.string(U.t["4uHRHH"]);
            case eE.G6Q.BOTTOM_LEFT:
                return U.intl.string(U.t.ovWFnD);
            case eE.G6Q.BOTTOM_RIGHT:
                return U.intl.string(U.t["M/9V75"]);
            default:
                return U.intl.string(U.t.AlY4Za);
        }
    },
    n0 = [eE.G6Q.DISABLED, eE.G6Q.TOP_LEFT, eE.G6Q.TOP_RIGHT, eE.G6Q.BOTTOM_LEFT, eE.G6Q.BOTTOM_RIGHT];
function n1(e) {
    let { position: t, onChange: n } = e,
        [i] = a.useState(() => `notification-position-selector-${nq++}`),
        s =
            t === eE.G6Q.DISABLED
                ? U.intl.string(U.t.R6LxVf)
                : U.intl.formatToPlainString(U.t["XXHDM/"], { position: n$(t) });
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(nZ.vN, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)("div", {
                    className: x()(nQ.iE, { [nQ.wX]: t === eE.G6Q.DISABLED }),
                    children: n0.map((e) =>
                        (0, l.jsxs)(
                            "label",
                            {
                                className: x()({
                                    [nQ.wH]: e === t,
                                    [nQ.r9]: e === eE.G6Q.DISABLED,
                                    [nQ.O3]: e === eE.G6Q.TOP_RIGHT,
                                    [nQ.lA]: e === eE.G6Q.TOP_LEFT,
                                    [nQ.oF]: e === eE.G6Q.BOTTOM_RIGHT,
                                    [nQ.RV]: e === eE.G6Q.BOTTOM_LEFT,
                                }),
                                children: [
                                    n$(e),
                                    e === eE.G6Q.DISABLED
                                        ? (0, l.jsx)(nX.K, { size: "md", color: "currentColor", className: nQ.WO })
                                        : null,
                                    (0, l.jsx)("input", {
                                        type: "radio",
                                        name: i,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: nQ.hH,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(nJ.E, { variant: "text-sm/normal", className: H.Ot, children: s }),
        ],
    });
}
n1.Positions = eE.G6Q;
var n3 = n(540999),
    n8 = n(93465),
    n6 = n(14552);
function n2() {
    let e = tt.default.getNotificationPositionMode(),
        t = e !== eE.G6Q.DISABLED,
        n = te.Ay.getOverlayKeybind(),
        i = te.Ay.getOverlayChatKeybind();
    D.A.track(eE.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: tV.A.isNotificationDisabled(eT.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: tt.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, tl.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, tl.dI)(i.shortcut) : null,
    });
}
class n9 extends a.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        D.A.track(eE.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        D.A.setNotificationDisabledSetting(n8.M.TEXT_CHAT, !this.props.textChatDisabled), n2();
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        D.A.setNotificationDisabledSetting(n8.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        D.A.setNotificationPositionMode(t), n2();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        D.A.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        D.A.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        D.A.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, l.jsxs)(eX.A, {
            direction: eX.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: n6.wx,
            children: [
                (0, l.jsxs)(eX.A, {
                    children: [
                        (0, l.jsx)(nk.D, {
                            variant: "heading-md/semibold",
                            className: n6.qd,
                            children: U.intl.string(U.t["35G2Mq"]),
                        }),
                        (0, l.jsx)("div", {
                            className: n6.Q7,
                            children: (0, l.jsx)(nP.K, {
                                variant: "icon-only",
                                size: "md",
                                icon: L.P,
                                onClick: this.props.onClose,
                                "aria-label": U.intl.string(U.t.cpT0Cq),
                            }),
                        }),
                    ],
                }),
                this.renderTabBar(),
            ],
        });
    }
    renderTabBar() {
        let { selectedSection: e } = this.state,
            t = n3.A.isDeveloper
                ? (0, l.jsx)(nV.V.Item, { id: "DEVELOPER", className: n6.YU, children: "Developer" })
                : null;
        return (0, l.jsxs)(nV.V, {
            selectedItem: e,
            type: "top",
            className: n6.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, l.jsx)(nV.V.Item, { id: "GENERAL", className: n6.YU, children: U.intl.string(U.t["0FYxxw"]) }),
                (0, l.jsx)(nV.V.Item, { id: "VOICE", className: n6.YU, children: U.intl.string(U.t["3WeSiE"]) }),
                t,
            ],
        });
    }
    renderBody() {
        let e,
            { selectedSection: t } = this.state;
        switch (t) {
            case "DEVELOPER":
                e = this.renderDeveloperSettings();
                break;
            case "VOICE":
                e = this.renderVoiceSettings();
                break;
            default:
                e = this.renderGeneralSettings();
        }
        return (0, l.jsxs)(
            nG.Ch,
            {
                className: n6.Qs,
                children: [
                    this.props.streamerModeEnabled &&
                        (0, l.jsx)(nU.w, { type: "warning", children: U.intl.string(U.t["1CC/lX"]) }),
                    e,
                ],
            },
            t,
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowInviteNotification: t } = this.props,
            n = !tV.A.isNotificationDisabled(eT.KS.TextChat),
            i = e !== eE.G6Q.DISABLED;
        return (0, l.jsxs)(nz.n, {
            children: [
                (0, l.jsx)(nH.D, {
                    label: U.intl.string(U.t.IQv8Eo),
                    children: (0, l.jsx)(n1, { position: e, onChange: this.handleChangeNotificationPositionMode }),
                }),
                (0, l.jsx)(nW.d, {
                    label: U.intl.string(U.t.Fy5kPp),
                    checked: n && i,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !i,
                }),
                (0, l.jsx)(nW.d, {
                    label: U.intl.string(U.t["f+c48/"]),
                    description: U.intl.string(U.t.W9DVVf),
                    checked: t,
                    onChange: this.handleToggleInviteNotification,
                }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, l.jsxs)(nK.B, {
            gap: 20,
            children: [
                (0, l.jsx)(nB.z, {
                    label: U.intl.string(U.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        { value: eE.OSZ.LARGE, name: U.intl.string(U.t.YcOxtr) },
                        { value: eE.OSZ.SMALL, name: U.intl.string(U.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, l.jsx)(nB.z, {
                    label: U.intl.string(U.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: eE.pwA.ALWAYS, name: U.intl.string(U.t.nBmDrT) },
                        { value: eE.pwA.ONLY_WHILE_SPEAKING, name: U.intl.string(U.t["2OvIZY"]) },
                        { value: eE.pwA.NEVER, name: U.intl.string(U.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, l.jsx)(nB.z, {
                    label: U.intl.string(U.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: eE.f5z.ALWAYS, name: U.intl.string(U.t.nBmDrT) },
                        { value: eE.f5z.ONLY_WHILE_SPEAKING, name: U.intl.string(U.t["2OvIZY"]) },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, l.jsx)("div", {
            className: H.SX,
            children: (0, l.jsx)(nF.l, {
                label: "Crashes",
                value: void 0,
                options: [
                    { id: "native-crash", value: void 0, label: "Native crash" },
                    { id: "abort", value: 0, label: "Abort()" },
                    { id: "sigsegv", value: 1, label: "SIGSEGV()" },
                    { id: "exception-access-violation", value: 2, label: "EXCEPTION_ACCESS_VIOLATION" },
                    { id: "raise-fail-fast-exception", value: 3, label: "RaiseFailFastException" },
                    { id: "out-of-memory", value: 4, label: "Out of Memory" },
                ],
                onSelectionChange: (e) => null != e && ti.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    }
    render() {
        return (0, l.jsxs)(nY.l, {
            "aria-label": U.intl.string(U.t["35G2Mq"]),
            className: n6.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
}
function n5(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatDisabled: o,
            shouldShowInviteNotification: d,
        } = (0, r.cf)([tt.default, tV.A], () => ({
            avatarSizeMode: tt.default.getAvatarSizeMode(),
            displayNameMode: tt.default.getDisplayNameMode(),
            displayUserMode: tt.default.getDisplayUserMode(),
            notificationPositionMode: tt.default.getNotificationPositionMode(),
            textChatDisabled: tV.A.isNotificationDisabled(eT.KS.TextChat),
            shouldShowInviteNotification: !tV.A.isNotificationDisabled(eT.KS.ActivityInvite),
        })),
        c = (0, ta.Mn)("OverlaySettingsPopout"),
        u = (0, r.bG)([tB.A], () => tB.A.enabled);
    return (0, l.jsx)(n9, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: i,
        displayUserMode: s,
        notificationPositionMode: a,
        textChatDisabled: o,
        shouldShowInviteNotification: d,
        streamerModeEnabled: c && u,
    });
}
var n7 = n(609360);
let n4 = function (e) {
    let t,
        { title: n, header: i, children: s, renderSettings: o, onDragStart: r } = e,
        d = a.useRef(null);
    return (
        (t =
            null != n
                ? (0, l.jsxs)(e_.Bar, {
                      className: x()(n7.wx, n7.bl),
                      onMouseDown: r,
                      children: [
                          (0, l.jsx)(e_.Content, { className: x()(n7.qd, n7.bl), dynamicSize: !0, children: n }),
                          (0, l.jsx)(e_.Content, {
                              children: (0, l.jsx)(ng.Y, {
                                  targetElementRef: d,
                                  position: "right",
                                  renderPopout: o ?? eE.tEg,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, l.jsx)(e_.Icon, {
                                          ...e,
                                          icon: nm.Z,
                                          label: U.intl.string(U.t["3D5yo/"]),
                                          ref: d,
                                      }),
                              }),
                          }),
                      ],
                  })
                : i),
        (0, l.jsxs)("div", { className: n7.pz, children: [t, (0, l.jsx)("div", { className: n7.Y_, children: s })] })
    );
};
var ie = n(349828),
    it = n(602679);
class ii extends a.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    settingsIconRef = a.createRef();
    state = {
        controller: new nA.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
    };
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = nT.A.getGuildDimensions(e);
        this.setAnimatedValue(t ?? 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = nT.A.getGuildDimensions(n);
            this.setAnimatedValue(e ?? 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, l.jsx)(n5, { onClose: t });
    }
    handleScroll = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, ny.A)(t);
        null != t &&
            (null != t.banner || n) &&
            (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e));
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: s } = this.state;
        ((e >= 54 && i) || (e < 54 && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, communityInfoVisible: n }),
            s.update({ value: Math.min(1, Math.max(0, 1 - e / 78)), immediate: !0 }).start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start();
    }
    render() {
        let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            { controller: i, renderBanner: s, bannerVisible: a, communityInfoVisible: o } = this.state,
            r = n?.id === ie.Vc ? nS.T : nS.B;
        return (0, l.jsxs)(n4, {
            header:
                null != n
                    ? (0, l.jsx)(nx.Ay, {
                          guild: n,
                          controller: i,
                          renderBanner: s,
                          bannerVisible: a,
                          className: it.F,
                          headerClassName: it.D8,
                          onMouseDown: e,
                          disableBannerAnimation: !1,
                          communityInfoVisible: o,
                          children: (0, l.jsx)(ng.Y, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, l.jsx)(e_.Icon, {
                                      ref: this.settingsIconRef,
                                      icon: nm.Z,
                                      label: U.intl.string(U.t["3D5yo/"]),
                                      ...e,
                                  }),
                          }),
                      })
                    : null,
            children: [
                (0, l.jsx)("div", {
                    className: it.o5,
                    children:
                        null != n
                            ? (0, l.jsx)(r, {
                                  ...t,
                                  guild: n,
                                  disableManageChannels: !0,
                                  onScroll: null != n && null != n.banner ? this.handleScroll : null,
                              })
                            : (0, l.jsx)(nv.A, { withBannerPadding: !1 }),
                }),
                null != n &&
                    (0, l.jsx)("section", {
                        className: it.C3,
                        "aria-label": U.intl.string(U.t.StREWK),
                        children: (0, l.jsx)(nC.A, { guildId: n.id }),
                    }),
            ],
        });
    }
}
function is(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([e8.A], () => e8.A.getGuild(t)),
        i = (0, r.bG)([nj.Ay], () => nj.Ay.getChannels(t)),
        s = (0, r.bG)([nO.A], () => nO.A.getCategories(t)),
        { mutedChannels: a, collapseMuted: o } = (0, r.cf)([nw.Ay], () => ({
            mutedChannels: nw.Ay.getMutedChannels(t),
            collapseMuted: nw.Ay.isGuildCollapsed(t),
        })),
        d = (0, r.bG)([nM.Ay], () => nM.Ay.getVoiceStates(t)),
        c = (0, r.bG)([nN.A], () => nN.A.getCollapsed()),
        { scrollTo: u } = (0, r.bG)([nT.A], () => nT.A.getGuildDimensions(t)),
        h = (0, nI.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        p = (0, r.bG)([e9.A], () => e9.A.getVoiceChannelId()),
        A = (0, r.bG)([nR.A], () => nR.A.getGuildVersion(t)),
        g = (0, r.bG)([n_.A], () => n_.A.version),
        m = (0, r.bG)([nD.default], () => nD.default.getGuildChangeSentinel(t)),
        f = (0, nf.a1)(n?.id),
        E = (0, nE.vj)(n?.id),
        y = n?.features.has(eE.GuildFeatures.COMMUNITY) ?? !1,
        S = (0, r.bG)([nL.A], () => nL.A.getChannelId()),
        x = (0, r.bG)([nb.A], () => nb.A.desyncedVoiceStatesCount);
    return (0, l.jsx)(ii, {
        guildId: t,
        guild: n,
        channels: i,
        categories: s,
        mutedChannels: a,
        scrollToChannel: u,
        selectedChannelId: h,
        selectedVoiceChannelId: p,
        voiceStates: d,
        rtcConnectedChannelId: S,
        rtcDesyncedVoiceStatesCount: x,
        collapsedChannels: c,
        collapseMuted: o,
        guildReadStateSentinel: m,
        permissionVersion: A,
        categoryCollapseVersion: g,
        embeddedAppsByChannel: f,
        activeEventsByChannel: E,
        showNewUnreadsBar: y,
        optInEnabled: !1,
    });
}
var il = n(58923),
    ia = n(793322),
    io = n(481171);
let ir = () => (0, ia.WU)("DM_SEARCH"),
    id = a.memo(function () {
        let e = (0, r.bG)([tt.default], () => (tt.default.isLocked((0, Q.getPID)()) ? "true" : "false")),
            t = (0, nI.A)((e) => {
                let { channelId: t } = e;
                return t;
            });
        return (0, l.jsxs)("div", {
            className: io.AB,
            children: [
                (0, l.jsx)("div", {
                    className: io.ON,
                    children: (0, l.jsx)("button", {
                        type: "button",
                        className: io.lU,
                        onClick: ir,
                        children: U.intl.string(U.t.LzcpeZ),
                    }),
                }),
                (0, l.jsx)(il.A, { padding: 8, theme: eE.NJ8.DARK, version: e, selectedChannelId: t }),
                (0, l.jsx)("section", {
                    className: io.C3,
                    "aria-label": U.intl.string(U.t.StREWK),
                    children: (0, l.jsx)(nC.A, { guildId: null }),
                }),
            ],
        });
    });
var ic = n(929284);
function iu(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)(n5, { onClose: t });
}
class ih extends a.PureComponent {
    static defaultProps = { contained: !1 };
    onDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(ns.MOVE, e.clientX, e.clientY);
    };
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            s =
                null != e
                    ? (0, l.jsx)(is, { guildId: e, onDragStart: this.onDragStart }, e)
                    : (0, l.jsx)(n4, {
                          title: U.intl.string(U.t.YUU0RF),
                          renderSettings: iu,
                          onDragStart: this.onDragStart,
                          children: (0, l.jsx)(id, {}),
                      }),
            a = n ? "div" : e_;
        return (0, l.jsxs)(a, {
            className: x()(ic.E, { [ic.H]: !n }, i),
            children: [(0, l.jsx)(nh.A, { isOverlay: !0, disableAppDownload: !0, isVisible: !t }), s],
        });
    }
}
let ip = r.Ay.connectStores([np.A], () => ({ selectedGuildId: np.A.getGuildId() }))(ih);
var iA = n(465532),
    ig = n(720149),
    im = n(414798),
    iE = n(119031),
    iy = n(480870),
    iS = n(878431),
    ix = n(128783),
    iv = n(578434),
    iC = n(80683),
    iI = n(355622),
    i_ = n(408018),
    iN = n(415210),
    iT = n(201349),
    iO = n(692051),
    ij = n(451909),
    iD = n(926262),
    iR = n(501440),
    ib = n(118517),
    iL = n(853145),
    iw = n(522556),
    iM = n(31717),
    ik = n(517019),
    iP = n(232835),
    iV = n(625494),
    iG = n(806150),
    iU = n(799808),
    iz = n(978940),
    iH = n(960027),
    iW = n(115354),
    iK = n(609731),
    iB = n(788120),
    iF = n(772838),
    iY = n(742589),
    iZ = n(353428),
    iX = n(95701),
    iJ = n(470710),
    iQ = n(106236),
    iq = n(915089);
function i$(e) {
    switch (e) {
        case eT.Li.BOTTOM:
            return eT.Li.BOTTOM;
        case eT.Li.LOWER:
            return eT.Li.LOWER;
        case eT.Li.UPPER:
            return eT.Li.UPPER;
        default:
            return eT.Li.TOP;
    }
}
var i0 = n(956998);
let i1 = Object.values(eT.Li).map((e) => 100 * e),
    i3 = (0, iq.Ld)();
class i8 extends a.PureComponent {
    initialValue = 100 * this.props.opacity;
    handleUpdateBackgroundOpacity(e) {
        D.A.setTextWidgetOpacity(i$(e / 100)), D.A.track(eE.HAw.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        D.A.setTextWidgetOpacity(i$(e / 100));
    }
    render() {
        return (0, l.jsx)("div", {
            className: i0.kL,
            children: (0, l.jsx)("div", {
                className: i0.xJ,
                children: (0, l.jsx)(iQ.A, {
                    label: U.intl.string(U.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: i1[0],
                    maxValue: i1[i1.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: i1,
                    onMarkerRender: eE.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": i3,
                }),
            }),
        });
    }
}
let i6 = r.Ay.connectStores([tt.default], () => ({ opacity: tt.default.getTextWidgetOpacity() }))(i8);
var i2 = n(798805);
class i9 extends a.Component {
    state = { showOpacitySlider: !1 };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    handleClickCall = (e) => {
        let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
        if (i) n ? tC.default.selectVoiceChannel(null) : D.A.callPrivateChannel(t.id, !1);
        else {
            let n = !e.shiftKey;
            D.A.callPrivateChannel(t.id, n);
        }
    };
    handleOpenOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !0 }), e && D.A.setPreviewInGameMode(!0);
    };
    handleCloseOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !1 }), e && D.A.setPreviewInGameMode(!1);
    };
    handleMouseDown = (e) => {
        let { onMouseDown: t } = this.props;
        null != t && t(e);
    };
    renderCallButton() {
        let e,
            { channel: t, channelHasActiveCall: n, userIsInChannelCall: i, isBlocked: s } = this.props;
        if (!(0, iX.Gw)(t.type)) return null;
        let a = iz._,
            o = !1;
        return (
            n
                ? i
                    ? ((e = U.intl.string(U.t["4ry6yi"])), (a = iH.z))
                    : (e = U.intl.string(U.t["0D/6Rz"]))
                : s
                  ? ((e = U.intl.string(U.t.PHzjvX)), (o = !0))
                  : (e = U.intl.string(U.t.focH1t)),
            (0, l.jsx)(iY.A.Icon, { icon: a, tooltip: e, onClick: this.handleClickCall, disabled: o })
        );
    }
    renderWidgetButtons = () => {
        let { locked: e, handlePin: t, pinned: n } = this.props,
            i = n ? U.intl.string(U.t.cSu80j) : U.intl.string(U.t.cM8Vnm);
        return e
            ? null
            : (0, l.jsxs)(a.Fragment, {
                  children: [
                      this.renderCallButton(),
                      n
                          ? (0, l.jsx)(iY.A.Icon, {
                                icon: iW.O,
                                tooltip: U.intl.string(U.t.OVovCb),
                                onClick: this.handleOpenOpacitySettings,
                            })
                          : null,
                      (0, l.jsx)(iY.A.Icon, { icon: n ? iK.h : iB.q, tooltip: i, selected: n, onClick: t }),
                  ],
              });
    };
    render() {
        let {
                className: e,
                draggableClassName: t,
                locked: n,
                channel: i,
                channelName: s,
                guild: a,
                onMouseDown: o,
                onContextMenu: r,
                isPreviewingInGame: d,
                disableDragIndicator: c,
            } = this.props,
            { showOpacitySlider: u } = this.state;
        return u && !n
            ? (0, l.jsxs)(e_.Bar, {
                  className: i2.dl,
                  children: [
                      (0, l.jsx)(i6, {}),
                      (0, l.jsx)(iY.A.Icon, {
                          icon: L.P,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: U.intl.string(U.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, l.jsx)(e_.Background, {
                  opacityOverride: n || d ? null : 1,
                  children: (0, l.jsx)("div", {
                      className: x()(e, t, i2.N1),
                      onMouseDown: o,
                      onContextMenu: r,
                      children: (0, l.jsxs)(iY.A, {
                          guildId: i.guild_id,
                          channelId: i.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              d || n || c
                                  ? null
                                  : (0, l.jsx)(iF.W, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: x()(i2.co, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, iZ.zF)({ channel: i, channelName: s }),
                              n ? null : (0, iZ.EP)(i, a),
                          ],
                      }),
                  }),
              });
    }
}
function i5(e) {
    let { channel: t, ...n } = e,
        i = (0, r.bG)([e9.A, e3.A], () => {
            let e = e9.A.getVoiceChannelId();
            return e3.A.getChannel(e);
        }),
        s = (0, r.bG)([e8.A], () => e8.A.getGuild(t.guild_id)),
        a = (0, r.bG)([iJ.A], () => iJ.A.isCallActive(t.id)),
        o = (0, t_.Ay)(t),
        d = (0, r.bG)([tT.A], () => !!t.isDM() && null != t.getRecipientId() && tT.A.isBlocked(t.getRecipientId()));
    return (0, l.jsx)(i9, {
        channel: t,
        channelName: o,
        guild: s,
        channelHasActiveCall: a,
        userIsInChannelCall: null != i && i.id === t.id,
        isBlocked: d,
        ...n,
    });
}
var i7 = n(381941),
    i4 = n(650583),
    se = n(463912);
let st = eT.Li.TOP;
class sn extends a.Component {
    textAreaRef = a.createRef();
    constructor(e) {
        super(e), iM.A.addChangeListener(this.draftDidChange);
        const t = iM.A.getDraft(e.channel.id, iM.C.ChannelMessage);
        (this.state = { ...(0, i_.ur)(t), focused: !1, contentWarningProps: null }),
            iV._.subscribe(eE.jej.TEXTAREA_FOCUS, this.focusInput),
            iV._.subscribe(eE.jej.TEXTAREA_BLUR, this.blurInput);
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        iM.A.removeChangeListener(this.draftDidChange),
            iV._.unsubscribe(eE.jej.TEXTAREA_FOCUS, this.focusInput),
            iV._.unsubscribe(eE.jej.TEXTAREA_BLUR, this.blurInput);
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = iM.A.getDraft(t.channel.id, iM.C.ChannelMessage);
            n !== i && "" === i && e.setState((0, i_.ur)(i));
        };
    })();
    handleTextareaKeyDown = (e) => {
        if (
            e.key === i4.dh.ARROW_UP &&
            !e.shiftKey &&
            !e.altKey &&
            !e.ctrlKey &&
            !e.metaKey &&
            0 === this.state.textValue.length
        ) {
            e.preventDefault();
            let { channel: t } = this.props,
                n = iP.A.getLastEditableMessage(t.id);
            null != n && ig.A.startEditMessageRecord(t.id, n);
        }
    };
    handleTextareaChange = (e, t, n) => {
        let {
            channel: { id: i },
        } = this.props;
        iA.A.changeDraft(i, this.state.textValue, iM.C.ChannelMessage),
            "" !== t ? im.A.startTyping(i) : im.A.stopTyping(i),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, iG.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: iI.oU.OVERLAY,
                  content: t,
                  channel: n,
              }).then((e) => {
                  let { valid: l, failureReason: a } = e;
                  if (!l)
                      return a === eE.X8x.SLOWMODE_COOLDOWN
                          ? (iV._.dispatch(eE.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let o = ig.A.getSendMessageOptionsForReply(i);
                  return (ig.A.sendMessage(n.id, ij.Ay.parse(n, t), !0, { ...o, location: i7.Hx.OVERLAY }),
                  this.setState((0, i_.N3)()),
                  (0, ib.Jx)(n.id),
                  s)
                      ? (D.A.deactivateAllRegions(), { shouldClear: !1, shouldRefocus: !1 })
                      : { shouldClear: !0, shouldRefocus: !0 };
              });
    };
    focusInput = () => {
        this.setState({ focused: !0 });
    };
    blurInput = () => {
        this.setState({ focused: !1 });
    };
    renderAttachButton = (e, t) =>
        (0, l.jsx)(iN.A, {
            className: t,
            channel: this.props.channel,
            draftType: iM.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, i_.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: i, textValue: s, contentWarningProps: a, richValue: o } = this.state,
            r = (0, l.jsx)(ng.Y, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    a?.onCancel?.(), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != a,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        td()(
                            null != a,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, l.jsx)(iD.A, { onClose: t, ...a })
                    );
                },
                children: () =>
                    (0, l.jsx)(iT.Ay, {
                        ...n,
                        ref: this.textAreaRef,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: iI.oU.OVERLAY,
                        onFocus: () => this.setState({ focused: !0 }),
                        onBlur: () => this.setState({ focused: !1 }),
                        placeholder: t,
                        textValue: s,
                        richValue: o,
                        onSubmit: this.handleSendMessage,
                        onChange: this.handleTextareaChange,
                        onKeyDown: this.handleTextareaKeyDown,
                        focused: i,
                    }),
            });
        return e.isPrivate()
            ? (0, l.jsx)(iv.A, { channel: e, children: r }, e.id)
            : (0, l.jsx)(iC.A, { channel: e, children: r }, e.id);
    }
}
class si extends a.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, iU.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                D.A.track(eE.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }
    componentDidMount() {
        (0, iU.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        D.A.track(eE.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: eE.uss.TEXT,
        }),
            D.A.setPinChat(e);
    };
    getOpacity() {
        let { locked: e, activated: t, opacity: n, isPreviewingInGame: i } = this.props;
        return (e && !t) || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : 1;
    }
    renderContent() {
        let e,
            {
                channel: t,
                placeholder: n,
                nsfwAgree: i,
                guild: s,
                locked: o,
                activated: r,
                chatKeybind: d,
                pinned: c,
                isPreviewingInGame: u,
                dragging: h,
                pendingReply: p,
            } = this.props;
        if (null == t) return null;
        let A = o || u,
            g = (0, t_.m1)(t, ty.default, tT.A),
            m = !i && null != t && t.isNSFW(),
            f = !A || r;
        return (
            (e =
                m && null != s
                    ? (0, l.jsx)(iw.A, { guild: s, channelId: t.id })
                    : (0, l.jsx)(
                          iR.A,
                          {
                              channel: t,
                              className: se.Wk,
                              forceCompact: c,
                              showNewMessagesBar: !A,
                              scrollerClassName: c ? se.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, l.jsx)(iO.Y.Provider, {
                value: { disableInteractions: c && o && !r, disableAnimations: c && A && !r },
                children: (0, l.jsxs)(a.Fragment, {
                    children: [
                        !o && !u && (0, l.jsx)(ix.A, { channel: t, guild: s }),
                        (0, l.jsx)(e_.Background, {
                            opacityOverride: o || u ? null : st,
                            children: (0, l.jsx)("div", {
                                className: x()(se.MJ, { [se.Id]: h, [se.$p]: c && o && !r }),
                                children: e,
                            }),
                        }),
                        m
                            ? null
                            : (0, l.jsx)("div", {
                                  children: f
                                      ? (0, l.jsx)(e_.Background, {
                                            opacityOverride: o || u ? null : st,
                                            children: (0, l.jsxs)("div", {
                                                className: se.z8,
                                                children: [
                                                    (0, l.jsx)(sn, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: r,
                                                        pendingReply: p,
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: se.V_,
                                                        children: (0, l.jsx)(iE.Ay, {
                                                            channel: t,
                                                            className: se.IW,
                                                            isInTextChannel: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, l.jsx)("div", {
                                            className: se.Zl,
                                            children: (0, l.jsx)(e_.Background, {
                                                opacityOverride: eT.Li.LOWER,
                                                children: (0, l.jsx)("div", {
                                                    className: x()(se.ew, se.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != g && g.length > 0
                                                            ? U.intl.formatToPlainString(U.t["9TkYMO"], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? g : `#${g}`,
                                                              })
                                                            : U.intl.formatToPlainString(U.t["hxz/4E"], { keybind: d }),
                                                }),
                                            }),
                                        }),
                              }),
                    ],
                }),
            })
        );
    }
    handleContextMenu = (e) => {
        let { channel: t, user: i } = this.props;
        null != t &&
            null != i &&
            (0, eH.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("12697"),
                    n.e("74389"),
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("89673"),
                    n.e("60195"),
                    n.e("97558"),
                    n.e("94000"),
                    n.e("91994"),
                    n.e("38730"),
                    n.e("76665"),
                    n.e("34971"),
                    n.e("45996"),
                    n.e("792"),
                    n.e("92822"),
                    n.e("23427"),
                    n.e("29422"),
                    n.e("9291"),
                    n.e("7059"),
                    n.e("42339"),
                    n.e("98199"),
                    n.e("41175"),
                    n.e("39778"),
                ]).then(n.bind(n, 385913));
                return (n) => (0, l.jsx)(e, { ...n, user: i, channelSelected: !0, channel: t });
            });
    };
    moveDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(ns.MOVE, e.clientX, e.clientY);
    };
    resizeDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(ns.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
    };
    renderWidgetWrapper(e) {
        let { locked: t, pinned: n, activated: i, isPreviewingInGame: s, opacity: a, className: o } = this.props,
            r = eE.UVF.UNPINNED;
        i ? (r = eE.UVF.IN_GAME_ACTIVE) : (n && t) || s ? (r = eE.UVF.IN_GAME_TEXT) : n && (r = eE.UVF.PINNED);
        let d = (t && !i) || s,
            c = n && (d || i),
            u = n && i,
            h = n && d && !i,
            p = (function (e) {
                switch (e) {
                    case eT.Li.BOTTOM:
                        return eT.Kv.LOW;
                    case eT.Li.LOWER:
                        return eT.Kv.MEDIUM;
                    case eT.Li.UPPER:
                        return eT.Kv.HIGH;
                    case eT.Li.TOP:
                        return eT.Kv.FULL;
                    default:
                        return;
                }
            })(a);
        return (0, l.jsx)(e_, {
            className: x()(
                p,
                { [se.yw]: !n, [se.CP]: n, [se.xt]: h, [se.iM]: c, [se.ip]: u, [se.dp]: n, "overlay-unlocked": !t },
                o,
            ),
            type: r,
            opacity: a,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, l.jsx)("div", { className: se.k_, children: e });
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return null != e.channel;
    }
    render() {
        let { locked: e, channel: t, pinned: n, isPreviewingInGame: i, contained: s } = this.props;
        if (null == t || !this.shouldDisplay()) return null;
        let o = (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(i5, {
                    draggableClassName: se.bl,
                    className: se.fB,
                    channel: t,
                    locked: e,
                    pinned: n,
                    disableDragIndicator: s,
                    isPreviewingInGame: i,
                    handlePin: this.handlePin,
                    onContextMenu: this.handleContextMenu,
                    onMouseDown: this.moveDragStart,
                }),
                this.renderContent(),
                e || i ? null : (0, l.jsx)("div", { className: se.cB, onMouseDown: this.resizeDragStart }),
            ],
        });
        return s ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o);
    }
}
function ss(e) {
    let { contained: t = !1, ...n } = e,
        i = (0, r.bG)([np.A], () => np.A.getGuildId()),
        s = (0, r.bG)([e9.A], () => e9.A.getChannelId(i)),
        a = (0, r.bG)([e3.A], () => e3.A.getChannel(s)),
        o = (0, r.bG)([te.Ay], () => te.Ay.getOverlayChatKeybind()),
        d = null != o ? (0, tl.dI)(o.shortcut, !0) : "]",
        [c, u, h] = (0, r.yK)([tt.default], () => [
            tt.default.getTextWidgetOpacity(),
            tt.default.getActiveRegions(),
            !t && tt.default.isPreviewingInGame(),
        ]),
        p = (0, r.bG)([e8.A], () => e8.A.getGuild(i)),
        A = (0, r.bG)([ik.A], () => null != i && ik.A.didAgree(i)),
        g = null != a && a.isPrivate() ? a.getRecipientId() : null,
        m = (0, r.bG)([iL.A], () => (null != s ? iL.A.getPendingReply(s) : void 0)),
        f = (0, r.bG)([ty.default], () => (null != g ? ty.default.getUser(g) : null)),
        { placeholder: E } = (0, iy.A)({ channel: a });
    return null != a && null != p && eE.kvI.GUILD_THREADS_ONLY.has(a.type)
        ? (0, l.jsx)(iS.default, {})
        : (0, l.jsx)(si, {
              guild: p,
              channel: a,
              user: f,
              opacity: c,
              nsfwAgree: A,
              chatKeybind: d,
              activated: u.has(eE.ajI.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: m,
              contained: t,
              placeholder: E,
              widget: eE.uss.TEXT,
              ...n,
          });
}
var sl = n(946912);
function sa(e) {
    let { dragStart: t, dragging: n, pinned: i, locked: s, className: a } = e;
    return (0, l.jsxs)(e_, {
        className: x()(sl.i, a),
        children: [
            (0, l.jsx)(ip, { contained: !0, dragStart: t, locked: s }),
            (0, l.jsx)(ss, { dragStart: t, locked: s, pinned: i, dragging: n, contained: !0 }),
        ],
    });
}
var so = n(661531),
    sr = n(319060),
    sd = n(983851),
    sc = n(959988),
    su = n(401843),
    sh = n(717558),
    sp = n(429913),
    sA = n(137177),
    sg = n(652896),
    sm = n(277680),
    sf = n(118277),
    sE = n(22705),
    sy = n(994314),
    sS = n(63995),
    sx = n(518769),
    sv = n(520006),
    sC = n(352018),
    sI = n(481947),
    s_ = n(760751),
    sN = n(485296),
    sT = n(996439),
    sO = n(427262),
    sj = n(936504),
    sD = n(83107),
    sR = n(831544),
    sb = n(990836),
    sL = n(597601),
    sw = n(827343),
    sM = n(951001),
    sk = n(42473),
    sP = n(830618),
    sV = n(999751),
    sG = n(977997),
    sU = n(572487),
    sz = n(864653),
    sH = n(395766);
class sW extends a.PureComponent {
    rtcConnectionStatusRef = a.createRef();
    handleToggleSelfMute = () => {
        let { context: e } = this.props;
        sw.A.toggleSelfMute({ context: e, location: "Overlay Controls" });
    };
    handleToggleSelfDeaf = () => {
        let { context: e } = this.props;
        sw.A.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
    };
    handleDisconnect() {
        tC.default.selectVoiceChannel(null);
    }
    renderPopout = (e) => {
        let { lobbyId: t } = this.props;
        return (0, l.jsx)(sP.A, { channelId: e, lobbyId: t, isOverlay: !0 });
    };
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, t_.m1)(e, ty.default, tT.A),
            i = null != t ? `${n} / ${t.name}` : n,
            s = null != t ? t.id : eE.ME;
        return (0, l.jsx)(sj.N_, {
            to: eE.BVt.CHANNEL(s),
            onClick: (t) => {
                t.stopPropagation(), sM.A.channelListScrollTo(s, e.id);
            },
            children: (0, l.jsx)(sy.A, { className: sH.Ix, children: i }),
        });
    }
    render() {
        let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: i,
            channel: s,
            quality: a,
            lastPing: o,
            hasVideo: r,
            connectionState: d,
            deaf: c,
            mute: u,
        } = this.props;
        return null == s
            ? null
            : (0, l.jsx)(e_.Bar, {
                  className: x()(e, sz.ne, { [sz.CW]: !n }),
                  children: (0, l.jsxs)(e_.Content, {
                      className: x()(t, sz.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, l.jsx)("div", {
                              className: sH.vW,
                              children: (0, l.jsx)(ng.Y, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, l.jsx)(j.D, {
                                          ...e,
                                          innerRef: this.rtcConnectionStatusRef,
                                          children: (0, l.jsx)(sV.A, {
                                              channelId: s.id,
                                              quality: a,
                                              lastPing: o,
                                              hasVideo: r,
                                              state: d,
                                              children: this.renderChannelLink(s),
                                          }),
                                      }),
                              }),
                          }),
                          (0, l.jsxs)(eX.A, {
                              grow: 0,
                              children: [
                                  (0, l.jsx)(sk.A, {
                                      tooltipText: u ? U.intl.string(U.t.YqAjXy) : U.intl.string(U.t.w4m945),
                                      icon: u ? sD.z : sR.c,
                                      iconForeground: u ? sz.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, l.jsx)(sk.A, {
                                      tooltipText: c ? U.intl.string(U.t["2US872"]) : U.intl.string(U.t.wjcRFX),
                                      icon: c ? sb.c : sL.L,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: c ? sz.of : null,
                                  }),
                                  null == i &&
                                      (0, l.jsx)(sk.A, {
                                          tooltipText: U.intl.string(U.t["6vrfgt"]),
                                          onClick: this.handleDisconnect,
                                          icon: iH.z,
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function sK(e) {
    let { context: t, lobbyId: n, channel: i, ...s } = e,
        a = (0, r.bG)([e8.A], () => e8.A.getGuild(i?.getGuildId())),
        o = (0, r.bG)([sG.A], () => null != i && sG.A.hasVideo(i.id)),
        [d, c] = (0, r.yK)([e2.Ay], () => [
            e2.Ay.isSelfMute(t) || e2.Ay.isSelfMutedTemporarily(t),
            e2.Ay.isSelfDeaf(t),
        ]),
        [u, h, p] = (0, r.yK)([sU.A], () => [sU.A.getConnectionState(n), sU.A.getLastPing(n), sU.A.getQuality(n)]);
    return (0, l.jsx)(sW, {
        ...s,
        context: t,
        lobbyId: n,
        channel: i,
        guild: a,
        hasVideo: o,
        mute: d,
        deaf: c,
        connectionState: u,
        lastPing: h,
        quality: p,
    });
}
var sB = n(731854),
    sF = n(899177);
function sY(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: i,
            nick: s,
            displayNameMode: o,
            displayUserMode: d,
            size: c = eE.OSZ.LARGE,
            onClick: u,
            onContextMenu: h,
            context: p,
            guildId: A,
            voiceState: g,
        } = e,
        m = (0, r.bG)([e2.Ay], () => e2.Ay.isLocalMute(i.id)),
        f = (0, r.bG)([e1.A], () => e1.A.getCurrentUserActiveStream()),
        E = (0, r.yK)([e1.A], () => (null != f ? e1.A.getViewerIds(f) : [])),
        y = (0, sh.A)({ userId: i.id, context: p }),
        S = (0, r.bG)([sN.A], () => sN.A.isPrioritySpeaker(i.id, p)),
        v = (0, r.bG)([e1.A], () => null != e1.A.getStreamForUser(i.id, A)),
        C = a.useMemo(() => null != f && f.ownerId !== i.id && E.includes(i.id), [f, i.id, E]);
    if (d === eE.f5z.ONLY_WHILE_SPEAKING && n && !y) return null;
    let { mute: I, selfMute: _, suppress: N, deaf: T, selfDeaf: O } = g;
    return (0, l.jsx)(sI.Ay, {
        guildId: A,
        onClick: n ? void 0 : (e) => u?.(e, i),
        onContextMenu: n ? void 0 : (e) => h?.(e, i),
        className: x()(sF.TX, { [sF.zj]: !y, [sF.bG]: !n }),
        user: i,
        nick: s,
        speaking: !1,
        flipped: t,
        isStreaming: v,
        iconClassName: x()(sF.Ow, { [sF.xt]: n }),
        isWatching: C,
        isOverlay: !0,
        size: c,
        priority: S,
        mute: I || _ || m,
        localMute: m,
        serverMute: I || N,
        deaf: T || O,
        serverDeaf: T,
        userNameClassName: x()(sF.Xh, {
            [sF.xt]: n,
            [sF.R]: n && (o === eE.pwA.NEVER || (!y && o === eE.pwA.ONLY_WHILE_SPEAKING)),
        }),
    });
}
class sZ extends a.PureComponent {
    static defaultProps = { context: sB.x.DEFAULT };
    handleUserContextMenu = (e, t) => {
        let { context: i } = this.props;
        (0, eH.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("74389"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("89673"),
                n.e("60195"),
                n.e("97558"),
                n.e("94000"),
                n.e("91994"),
                n.e("76665"),
                n.e("24198"),
                n.e("32418"),
            ]).then(n.bind(n, 668569));
            return (n) => (0, l.jsx)(e, { ...n, user: t, showMediaItems: !0, mediaEngineContext: i });
        });
    };
    handleOpenVoiceSettings = () => {
        let { context: e, channel: t, title: i } = this.props;
        (0, ez.openModalLazy)(async () => {
            let { default: s } = await Promise.all([
                n.e("3633"),
                n.e("80203"),
                n.e("97162"),
                n.e("46327"),
                n.e("96531"),
            ]).then(n.bind(n, 880510));
            return (n) => (0, l.jsx)(s, { ...n, mediaEngineContext: e, subtitle: null != t ? void 0 : i });
        });
    };
    handlePin = () => {
        let e = !this.props.pinned;
        D.A.track(eE.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: eE.uss.VOICE,
        });
        let { id: t } = this.props;
        (0, ne.v0)(t);
    };
    handleStopStream = () => {
        let { stream: e } = this.props;
        null != e && su.vN((0, sg._z)(e));
    };
    renderVoiceUsers() {
        let {
                context: e,
                sortedVoiceStates: t,
                displayNameMode: n,
                displayUserMode: i,
                locked: s,
                isPreviewingInGame: a,
                channel: o,
                anchor: r,
                avatarSizeMode: d,
            } = this.props,
            c = null != r.right,
            u = t.map((t) => {
                let { user: r, voiceState: u, member: h } = t;
                if (null == r || null == o || null == e) return null;
                let p = s || a;
                return (0, l.jsx)(
                    sY,
                    {
                        guildId: o?.guild_id,
                        user: r,
                        nick: h?.nick ?? sO.Ay.getName(r),
                        flipped: c,
                        voiceState: u,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: d,
                        locked: p,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e,
                    },
                    r.id,
                );
            });
        return (0, l.jsx)(e_.Body, {
            className: x()({ [sr.A.VOICE_WIDGET_TOP_MARGIN]: s, [sF.mn]: s }),
            children: (0, l.jsx)(sI.Wr, { className: sF.tA, children: u }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, l.jsxs)(e_.Bar, {
            className: x()(sF.bl, { [sF.VH]: n }),
            children: [
                (0, l.jsxs)(e_.Content, {
                    dynamicSize: !0,
                    className: x()(sF.Qs, { [sF.R]: n }),
                    children: [
                        (0, l.jsx)(iF.W, {
                            size: "custom",
                            color: so.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: x()(sF.Kk, sF.zj, sF.co),
                        }),
                        (0, l.jsx)(sd.H, {
                            size: "custom",
                            color: so.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: x()(sF.Kk, sF.zj, sF.Xk),
                        }),
                        (0, l.jsx)(nJ.E, {
                            variant: "text-md/normal",
                            style: { color: so.A.unsafe_rawColors.PRIMARY_200.css },
                            className: sF.DD,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, l.jsx)(e_.Icon, {
                          icon: nm.Z,
                          label: U.intl.string(U.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, l.jsx)(e_.Icon, {
                          icon: e ? iK.h : iB.q,
                          label: e ? U.intl.string(U.t.cSu80j) : U.intl.string(U.t.cM8Vnm),
                          onClick: this.handlePin,
                          tooltipPosition: "left",
                          size: 18,
                          isActive: e,
                      }),
            ],
        });
    }
    renderStreamerSettings() {
        let {
            locked: e,
            pinned: t,
            isPreviewingInGame: n,
            channel: i,
            application: s,
            streamMetadata: a,
            streamApplication: o,
            stream: r,
        } = this.props;
        if (e || null == r || null == i) return null;
        let { sanitizedTitle: d, title: c } = (0, sm.A)(a);
        return (0, l.jsx)(e_.Bar, {
            className: x()(sF.Wm, { [sF.R]: n, [sF.CW]: !t }),
            children: (0, l.jsxs)(e_.Content, {
                className: sF.Vb,
                dynamicSize: !0,
                children: [
                    (0, l.jsxs)("div", {
                        className: sF.gk,
                        children: [
                            o?.id != null && o.id === s?.id
                                ? (0, l.jsx)(sA.A, { className: sF.Gt, game: s })
                                : (0, l.jsx)(sf.A, { title: d }),
                            (0, l.jsxs)(eX.A, {
                                direction: eX.A.Direction.VERTICAL,
                                justify: eX.A.Justify.BETWEEN,
                                className: sF.gA,
                                children: [
                                    (0, l.jsx)(nJ.E, {
                                        className: sF.$A,
                                        variant: "text-sm/normal",
                                        children: U.intl.string(U.t.XKYej5),
                                    }),
                                    (0, l.jsx)(sy.A, { children: o?.name ?? c }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsxs)(eX.A, {
                        grow: 0,
                        children: [
                            (0, l.jsx)("div", {
                                className: sF.yf,
                                children: (0, l.jsx)(sv.A, {
                                    stream: r,
                                    iconClassName: sF.Nd,
                                    appContext: eE.BRT.OVERLAY,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: sF.yf,
                                children: (0, l.jsx)(sC.A, { stream: r, appContext: eE.BRT.OVERLAY }),
                            }),
                            (0, l.jsx)("div", {
                                className: sF.yf,
                                children: (0, l.jsx)(em.m, {
                                    asContainer: !0,
                                    text: U.intl.string(U.t.S5anIc),
                                    children: (0, l.jsx)(j.D, {
                                        onClick: this.handleStopStream,
                                        "aria-label": U.intl.string(U.t.S5anIc),
                                        children: (0, l.jsx)(sc.G, {
                                            size: "md",
                                            color: "currentColor",
                                            className: sF.Nd,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    componentDidMount() {
        (0, iU.j_)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, iU.Mw)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: l } = e;
        return 0 !== s.length && null != t && null != l && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: s, channel: a } = this.props;
        if (null == a || null == e || !this.shouldDisplay()) return null;
        let o = eE.UVF.UNPINNED;
        return (
            i && (o = eE.UVF.PINNED),
            s && (o = eE.UVF.IN_GAME_PREVIEW),
            n && (o = eE.UVF.IN_GAME),
            (0, l.jsxs)(e_, {
                type: o,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, l.jsx)(sK, {
                              className: x()({ [sF.VH]: s }),
                              contentClassName: x()({ [sF.R]: s }),
                              channel: a,
                              lobbyId: t,
                              context: e,
                              pinned: i,
                          }),
                ],
            })
        );
    }
}
function sX(e) {
    let t = (0, r.bG)([e9.A, e3.A], () => e3.A.getChannel(e9.A.getVoiceChannelId())),
        n = (0, t_.Ay)(t),
        i = (function () {
            let [e] = (0, r.bG)(
                [nM.Ay, sS.A, e9.A, e3.A],
                () => {
                    let e = e3.A.getChannel(e9.A.getVoiceChannelId());
                    return null == e
                        ? [[], -1]
                        : e.isGuildStageVoice()
                          ? [sS.A.getMutableParticipants(e.id, sx.ip.SPEAKER), sS.A.getParticipantsVersion(e.id)]
                          : [nM.Ay.getVoiceStatesForChannel(e), nM.Ay.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                sT.D,
            );
            return e;
        })(),
        s = (0, r.bG)([e1.A], () => e1.A.getStreamerActiveStreamMetadata()),
        a = (0, r.bG)([eJ.Ay, e7.A, s_.A], () => {
            let e = (0, eq.A)(eJ.Ay, e7.A);
            return null != e ? s_.A.findGame(e)?.id : null;
        }),
        o = (0, sp.h)(a),
        d = (0, r.cf)([eJ.Ay, e7.A, e1.A, tt.default], () => {
            let e = (0, eq.A)(eJ.Ay, e7.A),
                t = e1.A.getCurrentUserActiveStream();
            return {
                displayUserMode: tt.default.getDisplayUserMode(),
                displayNameMode: tt.default.getDisplayNameMode(),
                avatarSizeMode: tt.default.getAvatarSizeMode(),
                streamApplication: s?.pid === (0, Q.getPID)() ? (0, sE.A)(e) : null,
                stream: t,
            };
        });
    return (0, l.jsx)(sZ, {
        ...d,
        application: o,
        ...e,
        sortedVoiceStates: i,
        channel: t,
        title: n ?? "",
        streamMetadata: s,
        streamApplication: d.streamApplication ?? { id: null, name: s?.sourceName },
    });
}
let sJ = {
    [eE.uss.TEXT](e) {
        let { dragging: t, locked: n, pinned: i, dragStart: s, className: a } = e;
        return (0, l.jsx)(ss, { dragStart: s, locked: n, pinned: i, dragging: t, className: a });
    },
    [eE.uss.GUILDS](e) {
        let { locked: t, dragStart: n, className: i } = e;
        return (0, l.jsx)(ip, { dragStart: n, locked: t, className: i });
    },
    [eE.uss.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: i, locked: s, pinned: a } = e;
        return (0, l.jsx)(sX, { anchor: n, id: t, locked: s, pinned: a, widget: eE.uss.VOICE, isPreviewingInGame: i });
    },
    [eE.uss.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: i, className: s } = e;
        return (0, l.jsx)(sa, { dragStart: i, dragging: t, locked: n, pinned: !1, className: s });
    },
};
class sQ extends a.PureComponent {
    state = { lastLayoutUpdate: null, dragging: !1 };
    componentDidUpdate(e) {
        this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (D.A.track(eE.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    handleUpdate = (e, t, n, i, s) => {
        let {
            props: { layoutSize: l },
            state: { lastLayoutUpdate: a },
        } = this;
        if (!(0, Q.validResolution)(l)) return;
        let o = (0, nn.NO)(n, l),
            r = (0, nn.R9)(i, l);
        (0, ne.uD)(t), (0, ne.Ju)({ widgetId: t, anchor: o, size: r });
        let d = e === ns.MOVE,
            c = (0, nn.Ly)(n, l.width, l.height, s.width, s.height);
        this.setState({
            lastLayoutUpdate: {
                was_resized: (null != a && a.was_resized) || !d,
                was_dragged: (null != a && a.was_dragged) || d,
                widget_type: e6.A.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: s.width,
                widget_height: s.height,
                widget_left: c.left,
                widget_top: c.top,
            },
        });
    };
    handleFocus = (e) => {
        let { layoutSize: t } = this.props;
        (0, Q.validResolution)(t) && (0, ne.uD)(e);
    };
    handleDragStart = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && D.A.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
    };
    handleDragEnd = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && D.A.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
    };
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: l },
            } = this,
            a = sJ[e.type];
        return null == a
            ? null
            : (o) =>
                  a({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: l,
                      isPreviewingInGame: s,
                      anchor: t,
                      size: n,
                      dragStart: o,
                  });
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: i,
            isPreviewingInGame: s,
            isActiveRegion: a,
        } = this.props;
        if (null == e || null == t) return null;
        let { id: o, pinned: r, zIndex: d, size: c, anchor: u, minSize: h } = e,
            p = (0, nn.fd)(c, n),
            A = (0, nn.Nv)(u, n),
            { resizeX: g, resizeY: m, dragAnywhere: f } = t,
            E = (0, iU.AE)({ locked: i, isPreviewingInGame: s, pinned: r }),
            y = { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
            S = this.renderWidget(e, A, p);
        return null == S
            ? null
            : (0, l.jsx)(nu, {
                  id: o,
                  size: p,
                  anchor: A,
                  container: y,
                  minSize: h,
                  hidden: !E,
                  resizeX: g,
                  resizeY: m,
                  style: { zIndex: d },
                  dragAnywhere: f,
                  active: !i || a,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: S,
              });
    }
}
let sq = r.Ay.connectStores([e6.A, tt.default], (e) => {
    let { widgetId: t } = e,
        n = e6.A.getWidget(t),
        i = tt.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? e6.A.getWidgetConfig(n.type) : null,
        locked: tt.default.isInstanceLocked(),
        isPreviewingInGame: tt.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === eE.uss.TEXT && i.has(eE.ajI.TEXT_WIDGET),
    };
})(sQ);
function s$(e, t) {
    return (0, l.jsx)(sq, { widgetId: e, layoutSize: t }, e);
}
let s0 = r.Ay.connectStores([e6.A, tn.A], () => ({
    layout: e6.A.getLayout(Q.OVERLAY_LAYOUT_ID) ?? void 0,
    layoutSize: tn.A.windowSize(),
    renderWidget: s$,
}))(nt);
var s1 = n(873263),
    s3 = n(66834),
    s8 = n(549711),
    s6 = n(463347);
class s2 extends a.Component {
    componentDidUpdate(e) {
        let { location: t } = this.props;
        t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel();
    }
    checkGuildAndChannel() {
        let { match: e } = this.props;
        if (null == e) return;
        let {
            guildId: t,
            channelId: n,
            messageId: i,
        } = (function (e) {
            let { guildId: t, channelId: n, messageId: i } = e.params;
            return { guildId: null != t && "" !== t ? t : eE.ME, channelId: n, messageId: i };
        })(e);
        (0, s6.nn)(t) && (0, s6.ts)(n)
            ? (s3.A.selectGuild(t), tC.default.selectChannel({ guildId: t, channelId: n, messageId: i }))
            : (0, Z.bG)(eE.BVt.ME);
    }
    render() {
        return null;
    }
}
let s9 = () =>
    (0, l.jsxs)(s1.dO, {
        children: [
            (0, l.jsx)(s8.A, {
                path: eE.BVt.CHANNEL(s6.pv.guildId(), s6.pv.channelId({ optional: !0 }), ":messageId?"),
                component: s2,
            }),
            (0, l.jsx)(s8.A, { component: s2 }),
        ],
    });
var s5 = n(528772),
    s7 = n(944775),
    s4 = n(317084),
    le = n(427603),
    lt = n(980504),
    ln = n(402622);
function li() {
    let [e, t] = (0, r.yK)([s5.A], () => [s5.A.enabled, s5.A.keepOpen]),
        n = (0, r.bG)([e9.A], () => e9.A.getVoiceChannelId()),
        i = (0, r.bG)([e3.A], () => e3.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, l.jsx)("div", {
              className: ln.H,
              children: (0, l.jsx)(s4.A, {
                  width: lt.ed.width,
                  height: lt.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, le.A)();
                      null != e && (0, s7.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
n(644434);
var ls = n(610291);
(r.Ay.PersistedStore.disableWrites = __OVERLAY__), r.Ay.initialize();
let ll = null;
function la(e) {
    e.preventDefault();
}
function lo(e) {
    (0, eH.L3)(e, async () => {
        let { default: e } = await n.e("92843").then(n.bind(n, 254790));
        return (t) => (0, l.jsx)(e, { ...t, version: 0 });
    });
}
ea.isPlatformEmbedded;
let lr = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            a = s ? j.D : "div";
        return (0, l.jsx)(a, {
            className: x()(ls.LK, { [ls.Zo]: !s, [ls.vZ]: s, [ls.Az]: !s && i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === eE.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: lo,
            children: s
                ? null
                : (0, l.jsx)("div", {
                      className: ls.G3,
                      children: (0, l.jsx)(eW.A, { variant: eW.A.Variants.BOLD, keybind: t, closeAction: n }),
                  }),
        });
    },
    ld = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l } = e;
        return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l };
    };
class lc extends a.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && tt.default.isPinned(eE.uss.TEXT);
        eB.A.setLayout(t ? eK.dY : eK.CJ), t && eB.A.enable();
    }
    handleLock() {
        (0, ez.hasAnyModalOpen)() || e4.A.isOpen() || D.A.setInputLocked(!0, (0, Q.getPID)());
    }
    handleDeactivate() {
        D.A.deactivateAllRegions();
    }
    debouncedForceUpdate = eV()(() => {
        this.forceUpdate();
    }, 500);
    handleWindowResize = () => {
        ei.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
    };
    componentDidMount() {
        D.A.startSession(), e$.A.initialize(), eF.A.initialize(), e0.A.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (!this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", la, !1), null != ll)) {
                    let e = Date.now() - ll;
                    D.A.track(eE.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (ll = null);
                }
                eB.A.disable(),
                    (this.activeKeyEventShapes = []),
                    tt.default.isPinned(eE.uss.TEXT) && (eB.A.setLayout(eK.dY), eB.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", la, !1),
                    null == ll && ((ll = Date.now()), D.A.track(eE.HAw.OVERLAY_UNLOCKED)),
                    eB.A.disable(),
                    (this.activeKeyEventShapes = []),
                    eB.A.setLayout(eK.CJ),
                    eB.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, tl.pi)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: i,
                canGoLive: s,
                isStreaming: a,
                voiceGuild: o,
                voiceChannelId: r,
                game: d,
            } = this.props;
        D.A.track(eE.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: tt.default.isPinned(eE.uss.TEXT),
            overlay_render_method: $.Ue[$.Ue.Hook],
            unpinned_widget_types: e6.A.getAllUnpinnedPinnedWidgets(Q.OVERLAY_LAYOUT_ID),
        });
        let c = s && !a && null != d,
            u = t && null != o && null != r,
            h = tV.A.isNotificationDisabled(eT.KS.WelcomeNudge),
            p = tV.A.isNotificationDisabled(eT.KS.GoLiveNudge);
        if (
            (h || (e = { type: eT.Jr.WELCOME }),
            c && u && !p
                ? (e = { type: eT.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: r, voiceGuild: o })
                : c && !p && (e = { type: eT.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                await (0, ts.pF)(), null != e ? D.A.overlayMounted(e) : D.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", la, !1),
            ea.isPlatformEmbedded)
        ) {
            let e = (0, es.m)();
            if (null == e) return;
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    D.A.track(eE.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * J.A.Millis.MINUTE })),
                ti.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    tt.default.getDisableExternalLinkAlert() || t === e5.A.getLastURL()
                        ? ti.Ay.send("OPEN_EXTERNAL_URL", t)
                        : (0, ez.openModalLazy)(async () => {
                              let { default: e } = await n.e("30582").then(n.bind(n, 613429));
                              return (n) => (0, l.jsx)(e, { ...n, url: t });
                          });
                });
        }
        window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked && window.removeEventListener("contextmenu", la, !1),
            e$.A.terminate(),
            eF.A.terminate(),
            e0.A.terminate();
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, tl.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => eU()(t, e));
    onKeyDownGlobal = (e) => {
        let t = ld(e),
            n = this.getActiveKeyEventIndex(t) > -1,
            i = [16, 17, 18, 91].includes(e.keyCode);
        n || i || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => eU()(e, t))) &&
                (e.preventDefault(), e.stopPropagation());
        let { locked: s, activeRegions: l } = this.props;
        t.keyCode === ek().codes.esc && s && l.has(eE.ajI.TEXT_WIDGET) && D.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = ld(e),
            n = this.getActiveKeyEventIndex(t);
        n > -1 && this.activeKeyEventShapes.splice(n, 1);
    };
    renderInvalidSizeMessage() {
        return (0, l.jsx)(eX.A, {
            justify: eX.A.Justify.CENTER,
            align: eX.A.Align.CENTER,
            className: ls.rU,
            children: (0, l.jsx)("div", {
                className: ls.JV,
                children: U.intl.format(U.t.ketnW0, Q.OVERLAY_MIN_RESOLUTION),
            }),
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: s,
                isPreviewingInGame: a,
                activeRegions: o,
                windowSize: r,
            } = this.props,
            { width: d, height: c } = r;
        if (0 === d || 0 === c || n || !s) return null;
        let u = e || a;
        return (0, l.jsxs)("div", {
            className: ls.Lw,
            children: [
                (0, l.jsx)(s9, {}),
                a && (0, l.jsx)("header", { className: ls.tk, children: U.intl.string(U.t.iOq96m) }),
                i,
                (!e || o.has(eE.ajI.TEXT_WIDGET)) &&
                    (0, l.jsx)(lr, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a,
                    }),
                (0, Q.validResolution)(r)
                    ? (0, l.jsx)(s0, { className: x()({ [ls.ZK]: e, [ls.al]: !e }) })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, l.jsx)(li, {}),
                (0, l.jsx)(t7, { locked: u, keybind: t }),
                (0, l.jsx)(to.A, {}),
                (0, l.jsx)("div", { className: ls._C }),
            ],
        });
    }
}
function lu() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s,
        } = (0, r.cf)([tt.default], () => ({
            locked: tt.default.isLocked((0, Q.getPID)()),
            initialized: tt.default.initialized,
            incompatibleApp: tt.default.incompatibleApp,
            activeRegions: tt.default.getActiveRegions(),
            isPreviewingInGame: tt.default.isPreviewingInGame(),
        })),
        o = (0, r.bG)([tn.A], () => tn.A.windowSize()),
        d = (0, r.bG)([te.Ay], () => te.Ay.getOverlayKeybind()),
        c = (0, r.bG)([e9.A], () => e9.A.getVoiceChannelId()),
        u = (0, r.bG)([e3.A], () => e3.A.getChannel(c)),
        h = (0, r.bG)([e8.A], () => (null != u ? e8.A.getGuild(u.guild_id) : null)),
        p = (0, r.bG)([eJ.Ay, e7.A], () => (0, eq.A)(eJ.Ay, e7.A)),
        A = (0, r.bG)([e2.Ay], () => (0, eQ.A)(e2.Ay)),
        g = (0, r.bG)([e1.A], () => null != e1.A.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, eZ.Ay)(eY.A.OVERLAY);
    return (
        a.useEffect(() => {
            t && (0, ta.E)();
        }, [t]),
        (0, l.jsx)(eZ.f5, {
            value: m,
            children: (0, l.jsx)(lc, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: s,
                windowSize: o,
                keybind: null != d ? (0, tl.dI)(d.shortcut, !0) : "???",
                keybindKeyCodes: null != d ? d.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != u ? u.id : null,
                voiceGuild: h,
                game: p,
                canGoLive: A,
                isStreaming: g,
            }),
        })
    );
}
var lh = n(136722),
    lp = n(488926);
__OVERLAY__ &&
    tu.h.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: i, permissions: s, ...a },
            } = e,
            o = `OAuth2Authorize_${t}_${a.guildId}_${a.channelId}`;
        function r(e) {
            let { location: n } = e;
            tu.h.dispatch({ type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE", clientId: t, location: n });
        }
        let d = lp.x3;
        try {
            d = lh.iu(s ?? 0);
        } catch (e) {}
        (0, ez.openModalLazy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 887909));
                return (t) => (0, l.jsx)(e, { ...t, ...a, authorizations: new Map(i), permissions: d, callback: r });
            },
            {
                modalKey: o,
                onCloseRequest: () => {
                    (0, ez.closeModal)(o), r({});
                },
            },
        );
    }),
    n(939857),
    n(40876),
    __OVERLAY__ &&
        tu.h.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
            let { guildId: t, channelId: n, messageId: i } = e;
            (0, Z.bG)({ pathname: eE.BVt.CHANNEL(t, n, i) });
        }),
    n(921955),
    r.Ay.initialize();
let lA = function () {
    return (
        a.useEffect(
            () => (
                E.A.initialize(),
                h.A.initialize(),
                y.A.init(),
                () => {
                    E.A.terminate(), h.A.terminate();
                }
            ),
            [],
        ),
        (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(p.A, {}),
                (0, l.jsx)(u.N, {
                    children: (0, l.jsxs)(ew, {
                        children: [
                            (0, l.jsx)(g.Al, {}),
                            (0, l.jsx)(A.Ay, {}),
                            (0, l.jsx)(f.Wr, {
                                appContext: eE.BRT.OVERLAY,
                                renderWindow: window,
                                children: (0, l.jsxs)(m.Yf, {
                                    children: [
                                        (0, l.jsx)(lu, {}),
                                        (0, l.jsx)(d.b, {}),
                                        (0, l.jsx)(c.A, {}),
                                        (0, l.jsx)(o.P, {}),
                                        (0, l.jsx)(m.C8, {}),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
