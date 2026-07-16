let i;
n.r(t), n.d(t, { default: () => lg });
var s,
    l = n(627968),
    a = n(64700),
    o = n(337836),
    r = n(17928),
    d = n(638495),
    c = n(318009),
    u = n(638421),
    h = n(697138),
    p = n(196492),
    A = n(663413),
    g = n(404374),
    m = n(573435),
    f = n(750506),
    E = n(267102),
    y = n(17159),
    S = n(565058);
n(142703);
var x = n(503698),
    v = n.n(x),
    C = n(435558),
    I = n.n(C),
    _ = n(258873),
    N = n(622242),
    T = n(731738),
    O = n(941426),
    j = n(43990),
    D = n(939249),
    R = n(684013),
    b = n(996308),
    L = n(807393),
    w = n(789645),
    M = n(825484),
    k = n(821609),
    P = n(97808),
    V = n(778712),
    G = n(646862);
function U(e) {
    let { keybind: t, separator: n = "+", className: i } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.map((e, s) =>
            (0, l.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, l.jsx)("span", { className: v()(G.E, i), children: e }),
                        s === t.length - 1 ? void 0 : n,
                    ],
                },
                s,
            ),
        ),
    });
}
var z = n(375708),
    H = n(352828),
    W = n(818050);
function K(e) {
    return e.stopPropagation();
}
let B = () => (0, l.jsx)("div", { className: H.tR, onClick: K, onMouseEnter: K, onMouseOver: K });
function F() {
    return (0, l.jsx)("div", { className: H.yF });
}
function Y(e, t, n) {
    return (0, l.jsx)("div", {
        className: H.qD,
        children: z.intl.format(n, {
            keybind: t,
            keybindHook: (e, n) => (0, l.jsx)(U, { keybind: t, className: H.P }, n),
        }),
    });
}
class Z extends a.PureComponent {
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
            : (0, l.jsx)(D.D, {
                  onClick: this.handleDismiss,
                  className: H.r,
                  "aria-label": z.intl.string(z.t.LnEgqX),
                  children: (0, l.jsx)(w.P, { size: "xs", color: "currentColor", className: H.MW }),
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
            return null != i ? (0, l.jsxs)(a.Fragment, { children: [(0, l.jsx)(F, {}), i] }, "hint-custom") : null;
        }
        return (0, l.jsxs)(
            a.Fragment,
            {
                children: [
                    (0, l.jsx)(F, {}),
                    (0, l.jsx)("div", { className: "string" == typeof e ? H.dx : void 0, children: e }, "hint-text"),
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
                ? (0, l.jsxs)(a.Fragment, { children: [(0, l.jsx)(F, {}), e] }, "footer-custom-content")
                : null;
        }
        return null != n || null != i
            ? (0, l.jsxs)(
                  a.Fragment,
                  {
                      children: [
                          (0, l.jsx)(F, {}),
                          (0, l.jsxs)(M.e, {
                              fullWidth: !0,
                              children: [
                                  null != n
                                      ? (0, l.jsx)(k.$, {
                                            variant: "active",
                                            size: "sm",
                                            text: t ?? z.intl.string(z.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != i
                                      ? (0, l.jsx)(k.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: e ?? z.intl.string(z.t["ETE/oC"]),
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
              ? (0, l.jsx)(P.eu, { src: e, size: V._3.SIZE_40, className: H.my, "aria-hidden": !0 })
              : (0, l.jsx)("div", { className: H.my, children: e });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, l.jsxs)("div", {
            className: H.Qs,
            children: [
                this.renderIcon(),
                (0, l.jsxs)("div", {
                    className: H.zH,
                    children: [
                        (0, l.jsx)("div", {
                            className: H.DD,
                            children: "function" == typeof t ? t(this.handleDismiss) : t,
                        }),
                        null != e
                            ? (0, l.jsx)("div", {
                                  className: v()(H.rf, W.a5),
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
            i = null != e ? D.D : "div";
        return (0, l.jsxs)(i, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: e ?? void 0,
            className: v()(H.kL, { [H.gr]: !0, [H.vk]: null != e && !t }),
            children: [
                this.renderCloseButton(),
                this.renderContent(),
                this.renderFooter(),
                t ? (0, l.jsx)(B, {}) : null,
            ],
        });
    }
}
var X = n(976860),
    J = n(144400),
    Q = n(927813),
    q = n(9302),
    $ = n(777334),
    ee = n(41984),
    et = n(621466),
    en = n(52133),
    ei = n(451988),
    es = n(773371),
    el = n(899699),
    ea = n(456797),
    eo = n(723702);
let er = { x: 0, y: 0 },
    ed = !1;
function ec(e) {
    let { clientX: t, clientY: n } = e;
    (ed = !0), (er.x = t), (er.y = n);
}
let eu = new Map();
function eh(e, t) {
    if (null == t) eu.delete(e), 0 === eu.size && (window.removeEventListener("mousemove", ec), (ed = !1));
    else {
        let n = eu.get(e);
        if (null != n && (0, en.A)(n.zone, t.zone)) return;
        0 === eu.size && window.addEventListener("mousemove", ec), eu.set(e, t);
    }
    if (eo.isPlatformEmbedded)
        if (es.default.isCurrentPidOutOfProcess()) {
            let e = Array.from(eu.values()).map((e) => {
                let { zone: t } = e;
                return {
                    name: t.name,
                    left: t.left / window.innerWidth,
                    top: t.top / window.innerHeight,
                    right: t.right / window.innerWidth,
                    bottom: (t.bottom / window.innerHeight) * 1.5,
                };
            });
            R.A.setClickZones(e);
        } else {
            var n;
            let e = (0, el.m)();
            if (null == e) return;
            e.broadcastCommand({
                message: "set_click_zones",
                zones: Array.from(eu.values()).map((e) => {
                    let { zone: t } = e;
                    return t;
                }),
            }),
                (n = e),
                ep ||
                    (n.setClickZoneCallback(function (e, t, n) {
                        let i = eu.get(e);
                        null != i && (ed || ((er.x = t), (er.y = n)), i.instance.click());
                    }),
                    (ep = !0));
        }
}
let ep = !1;
class eA extends a.PureComponent {
    static defaultProps = { observe: !0, observeInterval: 1e3 };
    zone = I().uniqueId("ClickArea");
    interval = new ei.IX();
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        this.interval.stop(), eh(this.zone, null);
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
        if ((0, et.vq)(e)) {
            let { left: t, top: n, right: i, bottom: s } = e.getBoundingClientRect();
            eh(this.zone, {
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
        let e = (0, ea._)("click", er.x, er.y);
        (0, ea.K)(e, er.x, er.y);
    }
}
var eg = n(914609),
    em = n.n(eg),
    ef = n(364522),
    eE = n(866665),
    ey = n(652215),
    eS = n(960063);
let ex = ey.UVF.DEFAULT,
    ev = a.createContext({ type: ex, opacity: 1 }),
    eC = a.createContext(void 0);
function eI(e) {
    let { children: t, className: n, ...i } = e;
    return (0, l.jsx)(ev.Consumer, {
        children: (e) => {
            let { type: s } = e;
            return (0, l.jsx)(eC.Consumer, {
                children: (e) =>
                    (0, l.jsx)("div", { className: v()(eS.bar, eS[em()(s)], n), style: e, ...i, children: t }),
            });
        },
    });
}
class e_ extends a.PureComponent {
    static defaultProps = { disableScroll: !1 };
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, l.jsx)(eC.Consumer, {
            children: (i) =>
                (0, l.jsx)(ev.Consumer, {
                    children: (s) => {
                        let a = v()(eS.body, eS[em()(s.type)], n);
                        return e
                            ? (0, l.jsx)("div", { className: a, style: i, children: t })
                            : (0, l.jsx)(ef.Ip, { fade: !0, className: a, children: t });
                    },
                }),
        });
    }
}
let eN = (e) => {
    let { type: t = ex, width: n, height: i, children: s, className: a, opacity: o = 1, onClick: r } = e;
    return (0, l.jsx)(ev.Provider, {
        value: { type: t, opacity: o },
        children: (0, l.jsx)("div", {
            className: v()(eS.widget, eS[em()(t)], a),
            style: { width: n, height: i },
            onClick: r,
            children: s,
        }),
    });
};
function eT(e) {
    let { children: t, className: n, dynamicSize: i = !1 } = e;
    return (0, l.jsx)(eC.Consumer, {
        children: (e) =>
            (0, l.jsx)("div", { className: v()(eS.content, { [eS.staticSize]: !i }, n), style: e, children: t }),
    });
}
(eN.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [eI, e_, eT];
    return (0, l.jsx)(ev.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                o = { backgroundColor: `rgba(54, 57, 63, ${"" + (n ?? s)})` };
            if ("string" == typeof t.type) return a.cloneElement(t, { style: o });
            {
                if (i.includes(t.type)) return (0, l.jsx)(eC.Provider, { value: o, children: t });
                let e = t.type.displayName;
                throw Error(
                    `Widget.Background cannot be wrapped around ${e}. Pass a DOM node or one of ${i.map((e) => "Widget." + e.name).join(",")}`,
                );
            }
        },
    });
}),
    (eN.Body = e_),
    (eN.Content = eT),
    (eN.Icon = function (e) {
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
        return (0, l.jsx)(eE.m, {
            __unsupportedReactNodeAsText: o ? (0, l.jsx)("div", { className: eS.tutorialTip, children: i }) : i,
            "aria-label": i,
            position: a,
            forceOpen: o,
            children: (0, l.jsx)(D.D, {
                onClick: s,
                className: v()(eS.icon, { [eS.toggledIconOn]: r }),
                innerRef: t,
                "aria-label": i,
                children: (0, l.jsx)(n, { color: "currentColor", size: "custom", width: d, height: d, role: "img" }),
            }),
        });
    }),
    (eN.Bar = eI);
var eO = n(672396),
    ej = n(744315);
let eD = 10 * Q.A.Millis.SECOND,
    eR = new O.Vy("LegacyOverlayErrorBoundary");
function eb() {
    let e = (0, q.getPID)(),
        t = (0, q.getRPCAuthToken)();
    (0, b.tN)({
        type: ey.kGV.DISPATCH,
        pid: e,
        token: t,
        payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
    });
}
class eL extends a.PureComponent {
    state = { showTrace: !1, busy: !1 };
    notificationTimer;
    contentDomRef = a.createRef();
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, eD)),
            R.A.track(ey.HAw.NOTIFICATION_VIEWED, { notif_type: eO.KS.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    hideNotification = () => {
        eb();
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e), (this.notificationTimer = null);
    };
    handleReload = (e) => {
        this.setState({ busy: !0 }),
            eb(),
            R.A.track(ey.HAw.NOTIFICATION_CLICKED, { notif_type: eO.KS.OverlayCrashed, action_type: "reload" }, !0),
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
            : (0, l.jsx)(eA, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, l.jsx)(j.N, {
                      theme: ey.NJ8.DARK,
                      children: (i) =>
                          (0, l.jsxs)(D.D, {
                              innerRef: this.contentDomRef,
                              className: v()(i, ej.kL),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, l.jsx)(Z, {
                                      expand: !0,
                                      icon: (0, l.jsx)(J.A, { width: 40, height: 40, className: ej.Lo }),
                                      title: z.intl.string(z.t.U38qZj),
                                      confirmText: z.intl.string(z.t.TzAl1a),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, l.jsxs)(eN, {
                                            className: ej.a2,
                                            children: [
                                                (0, l.jsx)(eN.Bar, { children: "Error Details" }),
                                                (0, l.jsx)(eN.Content, {
                                                    className: ej.Xh,
                                                    children: (0, l.jsx)("code", {
                                                        className: ej.aY,
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
let ew = I().throttle(
    () => {
        L.A.increment({ name: T.K.APP_CRASHED, tags: [`reason:${_.J.UNHANDLED_JS_ERROR}`, `level:${N.k.FATAL}`] }, !0);
    },
    100,
    { trailing: !1 },
);
class eM extends a.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let n = (0, X.JK)().location;
        this.setState({ error: e, info: t }),
            eR.error(`ErrorBoundary caught error: ${e.message}`, { error: e, info: t });
        let i = (0, q.getPID)(),
            s = (0, q.getRPCAuthToken)();
        (0, b.tN)({
            type: ey.kGV.DISPATCH,
            pid: (0, q.getPID)(),
            token: s,
            payloads: [
                { type: "OVERLAY_CRASHED", error: e.message, pid: i },
                { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
        }),
            setImmediate(() => window.addEventListener("click", eb));
        let l = (0, $.St)(e, ee.Ue.Hook, { extra: t });
        R.A.track(ey.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: "fatal",
        }),
            ew();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: i } = this.state;
        return null != n ? (0, l.jsx)(eL, { error: n, info: i }) : (0, l.jsx)("div", { className: t, children: e });
    }
}
n(321073);
var ek = n(695497),
    eP = n.n(ek),
    eV = n(649852),
    eG = n.n(eV),
    eU = n(811315),
    ez = n.n(eU),
    eH = n(192308),
    eW = n(442433),
    eK = n(684136),
    eB = n(116305),
    eF = n(775121),
    eY = n(836753),
    eZ = n(793574),
    eX = n(688810),
    eJ = n(235986);
n(607470);
var eQ = n(952818),
    eq = n(880144),
    e$ = n(905552),
    e0 = n(913765),
    e1 = n(453314),
    e6 = n(616356),
    e3 = n(734057),
    e8 = n(71393),
    e2 = n(38502),
    e9 = n(186295),
    e5 = n(309010),
    e7 = n(70142),
    e4 = n(157257),
    te = n(712687),
    tt = n(532624),
    tn = n(184809),
    ti = n(531685),
    ts = n(19575),
    tl = n(316501),
    ta = n(350535),
    to = n(589051),
    tr = n(223251),
    td = n(284009),
    tc = n.n(td),
    tu = n(132500),
    th = n(228366),
    tp = n(780907),
    tA = n(944043);
function tg(e, t) {
    return {
        trackView() {
            let n = tn.default.isInstanceLocked() ? ey.ThZ.LOCKED_OVERLAY : ey.ThZ.UNLOCKED_OVERLAY;
            R.A.track(ey.HAw.NOTIFICATION_VIEWED, { ...t, location: n }), R.A.notificationEvent(e, eO.uj.Viewed);
        },
        trackClick(n) {
            let i = tn.default.isInstanceLocked() ? ey.ThZ.LOCKED_OVERLAY : ey.ThZ.UNLOCKED_OVERLAY;
            R.A.track(ey.HAw.NOTIFICATION_CLICKED, { ...t, location: i, action_type: n }),
                R.A.notificationEvent(e, eO.uj.Clicked);
        },
    };
}
function tm() {
    let e = tt.Ay.getOverlayKeybind();
    return null != e ? (0, ta.dI)(e.shortcut, !0).split(" + ") : ["???"];
}
var tf = n(486020),
    tE = n(231723),
    ty = n(296027),
    tS = n(287809),
    tx = n(277888);
function tv() {
    return (0, l.jsx)("div", {
        className: tx.q,
        children: (0, l.jsx)(k.$, { variant: "active", size: "sm", text: z.intl.string(z.t.U76Ft2), fullWidth: !0 }),
    });
}
var tC = n(387755),
    tI = n(730852),
    t_ = n(571694),
    tN = n(47167),
    tT = n(621436),
    tO = n(994500),
    tj = n(308368),
    tD = n(334738),
    tR = n(400492),
    tb = n(530789);
function tL(e) {
    return Y(e, tm(), z.t["z8/sgJ"]);
}
var tw = n(915725),
    tM = n(475358),
    tk = n(176781),
    tP = n(572164);
function tV(e) {
    let { trackView: t, trackClick: n } = tg(eO.KS.ClipsNotification, { notif_type: eO.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, l.jsx)(tk.x, { size: "xs", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
var tG = n(592598),
    tU = n(885386),
    tz = n(164891),
    tH = n(280450),
    tW = n(803224),
    tK = n(290863),
    tB = n(461213),
    tF = n(351906);
let tY = new O.Vy("LegacyOverlayNotificationsStore"),
    tZ = 5 * Q.A.Millis.SECOND,
    tX = 8 * Q.A.Millis.SECOND,
    tJ = 30 * Q.A.Millis.SECOND,
    tQ = Object.freeze({ priority: 0, duration: tZ, expirationExternallyManaged: !1, type: 0 }),
    tq = [],
    t$ = (e, t, n) => {
        let i = t ? ey.yFH.TIMED_OUT : ey.yFH.DISMISSED;
        return setTimeout(() => R.A.updateNotificationStatus(e, i), null != n ? n : tZ);
    };
function t0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.yFH.DISMISSED;
    if (null == e) return !1;
    let n = tq.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = tq[n];
    clearTimeout(i.timerId), (tq = [...tq]), t === ey.yFH.DISMISSED ? tq.splice(n, 1) : (tq[n] = { ...i, status: t });
}
function t1(e) {
    let t = tq.length;
    return (tq = tq.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function t6(e) {
    let t = tq.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function t3(e, t) {
    let n = { ...tQ, ...t };
    if (2 !== n.priority && !tn.default.isInstanceFocused()) return null;
    let i = (0, tu.A)(),
        s = { id: i, status: ey.yFH.ACTIVE, timerId: t$(i, n.expirationExternallyManaged, n.duration), props: e, ...n },
        l = (tq = [...tq]).findIndex((e) => e.priority <= n.priority);
    return -1 === l ? tq.push(s) : tq.splice(l, 0, s), tq.length > 10 && clearTimeout(tq.pop().timerId), i;
}
function t8(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = t6(t);
    if (!Object.keys(n).includes(tH.default.getId())) return t0(i);
    if (null != i) return !1;
    let s = e3.A.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !tz.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayStartRinging" }).enabled) ||
        tB.A.getStatus() === ey.clD.DND ||
        tU.NO.getSetting()
    )
        return !1;
    let l = tq.find((e) => 1 === e.type && e.channelId === t && e.messageType === ey.lAJ.CALL);
    null != l && t0(l.id),
        t3(
            (function (e) {
                let t = (0, tN.m1)(e, tS.default, tO.A),
                    n = z.intl.string(z.t.ssrVzG),
                    i = (0, t_.Y)(e),
                    s = (0, tT.A)(e),
                    { trackView: l, trackClick: a } = tg(eO.KS.IncomingCall, {
                        notif_type: eO.KS.IncomingCall,
                        notif_user_id: s,
                        guild_id: e.guild_id,
                        channel_id: e.id,
                        channel_type: e.type,
                    });
                return {
                    icon: i,
                    title: t,
                    body: n,
                    hint: function (e) {
                        return Y(e, tm(), z.t.Odi54y);
                    },
                    confirmText: z.intl.string(z.t["0D/6Rz"]),
                    cancelText: z.intl.string(z.t.BVN4pL),
                    onNotificationShow: () => {
                        l();
                    },
                    onConfirmClick: () => {
                        if (ey.kvI.CALLABLE.has(e.type)) R.A.callPrivateChannel(e.id);
                        else {
                            if (e.type !== ey.rbe.GUILD_VOICE) return;
                            tI.default.selectVoiceChannel(e.id);
                        }
                        a("join"),
                            R.A.track(ey.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: e.guild_id,
                                channel_id: e.id,
                                video_enabled: !1,
                            });
                    },
                    onCancelClick: () => {
                        tC.A.stopRinging(e.id), a("decline");
                    },
                    onDismissClick: () => {
                        a("dismiss");
                    },
                };
            })(s),
            { priority: 1, expirationExternallyManaged: !0, type: 2, channelId: s.id },
        );
}
class t2 extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            tH.default,
            e3.A,
            tw.Ay,
            tW.A,
            es.default,
            ty.default,
            e4.A,
            tG.A,
            tn.default,
            tK.A,
            e5.A,
            tB.A,
            tF.A,
            tS.default,
        );
    }
    getNotifications() {
        return tq;
    }
}
let t9 = new t2(
    th.h,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  t0(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  let { nudges: t } = e;
                  if (ty.default.hasChangedRenderMode(es.default.getFocusedPID() ?? (0, q.getPID)()))
                      return void tY.info("Overlay mounted, but render modes have changed", { nudges: t });
                  let i = t[0];
                  if ((tY.info("Overlay mounted", { nudges: t, selectedNudge: i }), null == i)) return;
                  let s = (function (e) {
                      switch (e.type) {
                          case eO.Jr.GO_LIVE_VOICE:
                          case eO.Jr.GO_LIVE_NON_VOICE:
                              return (function (e) {
                                  switch (e.type) {
                                      case eO.Jr.GO_LIVE_VOICE: {
                                          let { game: t, voiceGuild: i } = e,
                                              { trackView: s, trackClick: a } = tg(eO.KS.GoLiveNudge, {
                                                  notif_type: eO.KS.GoLiveNudge,
                                              });
                                          return {
                                              icon: n(334260),
                                              title: null,
                                              body: z.intl.formatToPlainString(z.t.z9znpa, {
                                                  game: t.name,
                                                  server: i.name,
                                              }),
                                              hint: () => (0, l.jsx)(tv, {}),
                                              renderFooter: () => (0, l.jsx)(tv, {}),
                                              onNotificationShow: () => {
                                                  s();
                                              },
                                              onNotificationClick: (e, t) => {
                                                  a("unlock");
                                                  let i = (0, q.getPID)();
                                                  R.A.updateNotificationStatus(t);
                                                  let s = ty.default.isOverlayOOPEnabledForPid(i);
                                                  if (
                                                      (s ? R.A.setInputLocked(!1, i) : R.A.setInstanceLocked(!1),
                                                      null == tS.default.getCurrentUser())
                                                  )
                                                      return;
                                                  let o = s ? { contextKey: tE.KX } : void 0;
                                                  (0, eH.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("64379"),
                                                          n.e("17918"),
                                                          n.e("76171"),
                                                          n.e("38601"),
                                                          n.e("36946"),
                                                          n.e("44727"),
                                                          n.e("6565"),
                                                          n.e("14304"),
                                                          n.e("76229"),
                                                      ]).then(n.bind(n, 477156));
                                                      return (t) =>
                                                          (0, l.jsx)(e, {
                                                              ...t,
                                                              sourcePID: i,
                                                              selectSource: !1,
                                                              analyticsLocations: [eZ.A.OVERLAY_NUDGE],
                                                          });
                                                  }, o);
                                              },
                                              onDismissClick: () => {
                                                  a("dismiss");
                                              },
                                          };
                                      }
                                      case eO.Jr.GO_LIVE_NON_VOICE: {
                                          let { game: t } = e,
                                              { trackView: i, trackClick: s } = tg(eO.KS.GoLiveNonVoiceNudge, {
                                                  notif_type: eO.KS.GoLiveNonVoiceNudge,
                                              });
                                          return {
                                              icon: n(334260),
                                              title: null,
                                              body: z.intl.formatToPlainString(z.t["0SVWgF"], { game: t.name }),
                                              hint: () => (0, l.jsx)(tv, {}),
                                              renderFooter: () => (0, l.jsx)(tv, {}),
                                              onNotificationShow: () => {
                                                  i();
                                              },
                                              onNotificationClick: (e, t) => {
                                                  s("unlock");
                                                  let i = (0, q.getPID)();
                                                  R.A.updateNotificationStatus(t);
                                                  let a = ty.default.isOverlayOOPEnabledForPid(i);
                                                  a ? R.A.setInputLocked(!1, i) : R.A.setInstanceLocked(!1);
                                                  let o = a ? { contextKey: tE.KX } : void 0;
                                                  (0, eH.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("64379"),
                                                          n.e("17918"),
                                                          n.e("76171"),
                                                          n.e("38601"),
                                                          n.e("36946"),
                                                          n.e("44727"),
                                                          n.e("6565"),
                                                          n.e("14304"),
                                                          n.e("76229"),
                                                      ]).then(n.bind(n, 477156));
                                                      return (t) =>
                                                          (0, l.jsx)(e, {
                                                              ...t,
                                                              sourcePID: i,
                                                              selectSource: !1,
                                                              analyticsLocations: [eZ.A.OVERLAY_NUDGE],
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
                          case eO.Jr.NEWS:
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
                                          title: z.intl.string(z.t.pkXAeG),
                                          body: null,
                                          hint: tL,
                                          notifType: eO.KS.WelcomeNudge,
                                      }),
                                      e.type === eO.Jr.NEWS
                                          ? {
                                                icon: e.news?.icon ?? t.icon,
                                                title: e.news?.title ?? t.title,
                                                body: e.news?.body ?? t.body,
                                                hint: e.news?.hint ?? t.hint,
                                                notifType: null != e.news ? eO.KS.NewsNudge : t.notifType,
                                            }
                                          : t),
                                      { trackView: c, trackClick: u } = tg(d, { notif_type: d });
                                  return {
                                      icon: s,
                                      title: a,
                                      body: o,
                                      hint: r,
                                      renderFooter: () =>
                                          (0, l.jsx)("div", {
                                              style: { textAlign: "center", padding: 2 },
                                              children: z.intl.string(z.t["9MyuT0"]),
                                          }),
                                      onNotificationShow: () => {
                                          c();
                                      },
                                      onNotificationClick: (e, t) => {
                                          u("unlock"),
                                              i === eO.Jr.NEWS && R.A.updateNotificationStatus(t),
                                              ty.default.isOverlayOOPEnabledForPid((0, q.getPID)())
                                                  ? R.A.setInputLocked(!1, (0, q.getPID)())
                                                  : tn.default.isInstanceLocked() && R.A.setInstanceLocked(!1);
                                      },
                                      onDismissClick: () => {
                                          u("dismiss");
                                      },
                                  };
                              })(e);
                      }
                  })(i);
                  null != s && t3(s, { priority: 2, duration: tX });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  tq = tq.map((e) =>
                      e.status === ey.yFH.ACTIVE
                          ? (clearTimeout(e.timerId), { ...e, timerId: t$(e.id, e.expirationExternallyManaged) })
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: n } = e,
                      i = e3.A.getChannel(t),
                      s = tS.default.getUser(n.author?.id);
                  if (null == i || null == s) return !1;
                  if (n.activity?.type === ey.xL.JOIN || n.activity?.type === ey.xL.JOIN_REQUEST) {
                      if (!(0, tA.lx)(n, t, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, s;
                          if ((tc()(null != t.activity, "received null message activity"), n.id === tH.default.getId()))
                              return !1;
                          let l = e4.A.getGame();
                          if (null == l) return !1;
                          switch (t.activity.type) {
                              case ey.xL.JOIN:
                                  if (
                                      null == (i = tK.A.getApplicationActivity(n.id, l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  s = (function (e, t, n, i, s) {
                                      if (null == t.activity) return null;
                                      let l = t.activity.type,
                                          a = s.session_id;
                                      if (null == a) return null;
                                      let { icon: o, title: r, body: d } = (0, tA.TB)(e, t, n),
                                          { trackView: c, trackClick: u } = tg(eO.KS.ActivityInvite, {
                                              notif_type: eO.KS.ActivityInvite,
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
                                          hint: function (e) {
                                              return Y(e, tm(), z.t.aB5xLy);
                                          },
                                          onNotificationShow: () => {
                                              c();
                                          },
                                          confirmText: z.intl.string(z.t.VJlc0S),
                                          onConfirmClick: (s, l) => {
                                              tp.Ay.join({
                                                  userId: n.id,
                                                  sessionId: a,
                                                  applicationId: i.id,
                                                  channelId: e.id,
                                                  messageId: t.id,
                                              }),
                                                  R.A.updateNotificationStatus(l),
                                                  u("join");
                                          },
                                          onDismissClick: () => {
                                              u("dismiss");
                                          },
                                      };
                                  })(e, t, n, l, i);
                                  break;
                              case ey.xL.JOIN_REQUEST:
                                  if (
                                      null == (i = tB.A.getApplicationActivity(l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  s = (function (e, t, n, i) {
                                      let s = t.username,
                                          l = z.intl.format(z.t.VDODnv, { username: "", game: n.name }),
                                          a = t.getAvatarURL(e.guild_id, 80),
                                          { trackView: o, trackClick: r } = tg(eO.KS.ActivityInvite, {
                                              notif_type: eO.KS.ActivityInvite,
                                              notif_user_id: t.id,
                                              activity_type: ey.xL.JOIN_REQUEST,
                                              activity_name: n.name,
                                          });
                                      return {
                                          icon: a,
                                          title: s,
                                          body: l,
                                          hint: function (e) {
                                              return Y(e, tm(), z.t.Odi54y);
                                          },
                                          confirmText: z.intl.string(z.t["fgP/wX"]),
                                          cancelText: z.intl.string(z.t["tpXzJ+"]),
                                          onNotificationShow: () => {
                                              o();
                                          },
                                          onConfirmClick: (t, n) => {
                                              tj.A.sendActivityInvite({
                                                  channelId: e.id,
                                                  type: ey.xL.JOIN,
                                                  activity: i,
                                                  location: tn.default.isInstanceLocked()
                                                      ? ey.ThZ.LOCKED_OVERLAY
                                                      : ey.ThZ.UNLOCKED_OVERLAY,
                                              }),
                                                  r("join"),
                                                  R.A.updateNotificationStatus(n);
                                          },
                                          onCancelClick: (t, n) => {
                                              (0, tD.ack)(
                                                  e.id,
                                                  {
                                                      section: ey.JJy.OVERLAY,
                                                      object: ey.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                                      objectType: ey.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                                  },
                                                  !0,
                                                  !0,
                                              ),
                                                  R.A.updateNotificationStatus(n),
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
                          return null != a && t$(a, !1, tJ), !0;
                      })(i, n, s);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!tn.default.isInstanceLocked() || tn.default.isPinned(ey.uss.TEXT)) &&
                          t === e5.A.getChannelId()) ||
                      tG.A.isNotificationDisabled(eO.KS.TextChat) ||
                      tF.A.disableNotifications ||
                      !(0, tA.lx)(n, t)
                  )
                      return !1;
                  t3(
                      (function (e, t, n, i) {
                          let { icon: s, title: a, body: o } = (0, tA.TB)(e, t, n),
                              { trackView: r, trackClick: d } = tg(eO.KS.TextChat, {
                                  notif_type: eO.KS.TextChat,
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
                                            children: z.intl.string(z.t["+MJm3w"]),
                                        })
                                      : null,
                              maxBodyLines: 2,
                              onNotificationShow: () => {
                                  i && (0, tR.Ak)(tb.cH, tb.pD, void 0, void 0, { trackNotificationFailure: !0 }), r();
                              },
                              onNotificationClick: () => {
                                  if (ty.default.isOverlayOOPEnabledForPid((0, q.getPID)())) {
                                      let n = (0, q.getPID)();
                                      tn.default.isInstanceLocked()
                                          ? (d("unlock"), R.A.setInputLocked(!1, n))
                                          : (d("jump"),
                                            (0, X.pX)(ey.BVt.CHANNEL(e.guild_id, e.id, t.id)),
                                            eo.isPlatformEmbedded && ts.Ay.focus());
                                  } else
                                      (0, X.pX)(ey.BVt.CHANNEL(e.guild_id, e.id)),
                                          d("jump"),
                                          tn.default.isInstanceLocked() && R.A.setInstanceLocked(!1);
                              },
                              onDismissClick: () => {
                                  d("dismiss");
                              },
                          };
                      })(i, n, s, !tW.A.isSoundDisabled(tb.cH)),
                      { type: 1, channelId: i.id, messageType: n.type },
                  );
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && t1(t);
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return t1(t);
              },
              CALL_CREATE: t8,
              CALL_UPDATE: t8,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  t0(t6(t));
              },
              GUILD_RING_START: t8,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (!tz.A.getCurrentConfig({ guildId: n, location: "OverlayStopRinging" }).enabled) return !1;
                  i.includes(tH.default.getId()) && t0(t6(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: s } = e,
                      a = e4.A.getGame();
                  return (
                      null != a &&
                      a.id === s &&
                      (n === ey.xL.JOIN &&
                          (t = (function (e, t) {
                              let n = e.username,
                                  i = z.intl.format(z.t["Yk+uYG"], { username: "" }),
                                  s = (0, tf.ku)(e),
                                  { trackView: a, trackClick: o } = tg(eO.KS.ActivityUserJoin, {
                                      notif_type: eO.KS.ActivityUserJoin,
                                      notif_user_id: e.id,
                                      activity_type: ey.xL.JOIN,
                                      activity_name: t.name,
                                  });
                              return {
                                  icon: s,
                                  title: n,
                                  body: i,
                                  hint: function (e) {
                                      var t;
                                      return (
                                          (t = z.intl.string(z.t.WRj1Wn)),
                                          (0, l.jsx)("div", { className: H.g2, children: t })
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
                  "manual" === e.clipMethod && t3(tV(z.intl.string(z.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  t3(tV(z.intl.string(z.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (function () {
                      let { trackView: e, trackClick: t } = tg(eO.KS.ClipsReminderNotification, {
                              notif_type: eO.KS.ClipsReminderNotification,
                          }),
                          n = tt.Ay.getKeybindForAction(ey.hCu.SAVE_CLIP),
                          i = (0, tP.TD)();
                      if (null == n || !i) return null;
                      let s = ta.dI(n.shortcut, !0);
                      return {
                          title: z.intl.format(z.t.S5uhCN, {
                              keybind: s,
                              keybindHook: () =>
                                  (0, l.jsx)("span", {
                                      style: { display: "inline-block" },
                                      children: (0, l.jsx)(tM.e, { shortcut: s }),
                                  }),
                          }),
                          icon: (0, l.jsx)(tk.x, { size: "xs", color: "currentColor" }),
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
class t5 extends a.Component {
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
        R.A.updateNotificationStatus(t), n?.(e, t);
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
            case ey.G6Q.TOP_LEFT:
            case ey.G6Q.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case ey.G6Q.BOTTOM_LEFT:
            case ey.G6Q.BOTTOM_RIGHT:
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
        return (0, l.jsx)(Z, {
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
var t7 = n(761935);
function t4(e) {
    let { locked: t, keybind: n } = e,
        i = a.useRef(null),
        s = (0, r.yK)([t9], () => t9.getNotifications()),
        o = (0, r.bG)([tn.default], () => tn.default.getNotificationPositionMode());
    if ((0, r.bG)([tG.A], () => tG.A.isNotificationDisabled(eO.KS.TextChat)) || o === ey.G6Q.DISABLED) return null;
    let d = s.filter((e) => !t || e.status !== ey.yFH.TIMED_OUT),
        c = (0, C.groupBy)(d, (e) => e.type);
    return (0, l.jsx)(eA, {
        contentDomRef: i,
        observeInterval: 200,
        children: (0, l.jsx)("div", {
            ref: i,
            className: v()(t7.container, t7[o]),
            children: Object.entries(c).map((e) => {
                let [i, s] = e;
                return 0 === s.length
                    ? null
                    : (0, l.jsx)(ne, { locked: t, keybind: n, position: o, notification: s[0] }, i);
            }),
        }),
    });
}
function ne(e) {
    let { notification: t, position: n, keybind: i, locked: s } = e;
    return (0, l.jsx)("div", {
        className: t7.notificationGroup,
        children: (0, l.jsx)(t5, { zIndex: 100, position: n, notification: t, keybind: i, locked: s }, t.id),
    });
}
var nt = n(391973);
let nn = a.memo(function (e) {
    let { layout: t, layoutSize: n, className: i, renderWidget: s } = e;
    return null != t
        ? (0, l.jsx)("div", {
              className: i,
              style: { width: n.width, height: n.height },
              children: t.widgets.map((e) => s(e, n)),
          })
        : null;
});
var ni = n(5463),
    ns = n(129694),
    nl =
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
let na = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);
function no(e, t, n) {
    let { width: i, height: s } = e;
    return { width: "auto" === i ? "auto" : Math.max(t, i), height: "auto" === s ? "auto" : Math.max(n, s) };
}
function nr(e) {
    let { top: t, left: n, bottom: i, right: s } = e;
    return (
        null == n && null == s && (n = 0), null == t && null == i && (t = 0), { top: t, left: n, bottom: i, right: s }
    );
}
function nd(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`;
}
function nc(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}
function nu(e, t) {
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
class nh extends a.Component {
    static Operations = nl;
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
        super(e), (this.anchor = nr(e.anchor)), (this.size = no(e.size, e.minSize.width, e.minSize.height));
    }
    shouldComponentUpdate(e, t) {
        return (
            !(0, en.A)(t, this.state) ||
            !(0, en.A)(e, this.props, ["anchor", "size", "minSize", "container"]) ||
            !(0, en.A)(e.anchor, this.props.anchor) ||
            !(0, en.A)(e.size, this.props.size) ||
            !(0, en.A)(e.minSize, this.props.minSize) ||
            !(0, en.A)(e.container, this.props.container)
        );
    }
    componentDidUpdate(e, t) {
        null == t.operation &&
            ((0, en.A)(this.props.anchor, e.anchor) || this.setDOMPositions(nr(this.props.anchor)),
            (0, en.A)(this.props.size, e.size) ||
                this.setDOMSize(no(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd();
    }
    handleMouseDown = (e) => {
        e.stopPropagation();
        let { dragAnywhere: t } = this.props,
            { current: n } = this.ref;
        null != n && e.button === ey.hE4.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY);
    };
    handleMouseMove = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { clientX: t, clientY: n } = e,
            {
                dragState: { startX: i, startY: s },
                state: { operation: l, operationStarted: a },
            } = this;
        !(null == l || (!a && Math.pow(i - t, 2) + Math.pow(s - n, 2) < 3)) &&
            ("MOVE" === l ? this.handleDragMove(t, n) : na.has(l) && this.handleResizeMove(t, n));
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
        let { width: r, height: d } = nc(i, this.size),
            c = (0, ni.Ly)(this.anchor, a, o, r, d);
        if ("MOVE" === e) {
            let { x: e, y: i } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(c);
            this.dragState = { ...this.dragState, startX: t, startY: n, offsetX: t - e, offsetY: n - i };
        } else {
            let i = nu(e, c);
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
        let { width: A, height: g } = nc(n, this.size),
            m = t - h,
            f = e - u,
            E = (0, ni.fh)((0, ni.Ly)({ top: m, left: f, bottom: void 0, right: void 0 }, s, l, A, g)),
            y = c ? (0, ni.h1)(E) : nu("RESIZE_SOUTH_EAST", E);
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
                  t(e, n, this.anchor, this.size, nc(this.ref.current, this.size));
              }
            : void 0;
        if (t) {
            let { maxX: e, maxY: t } = this.props.container,
                { width: n, height: s } = nc(this.ref.current, this.size),
                l = (0, ni.Ly)(this.anchor, e, t, n, s),
                a = (0, ni.h1)(l);
            this.setDOMPositions(a), this.setDOMSize({ width: n, height: s }), null != i && i();
        }
        this.setState({ operation: null, operationStarted: !1 }, s);
    };
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: s } = e,
            { current: l } = this.ref;
        (this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != l &&
                ((l.style.top = nd(t)), (l.style.bottom = nd(i)), (l.style.left = nd(n)), (l.style.right = nd(s)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            { current: i } = this.ref;
        (t = "auto" === this.size.width ? "auto" : t),
            (n = "auto" === this.size.height ? "auto" : n),
            (this.size = { width: t, height: n }),
            null != i && ((i.style.width = nd(t)), (i.style.height = nd(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(a.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: v()(ns.M$, { [ns.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(ns.Q8, { [ns.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: v()(ns.cz, { [ns.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(ns._J, { [ns.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: v()(ns.DS, { [ns.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(ns.Bc, { [ns.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(ns.rL, { [ns.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(ns.Rl, { [ns.Ke]: n }),
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
            className: v()({ [ns.iE]: !0, [ns.MQ]: d }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()],
        });
    }
}
var np = n(689035),
    nA = n(967198),
    ng = n(580929),
    nm = n(922016),
    nf = n(625903),
    nE = n(685399),
    ny = n(508654),
    nS = n(885631),
    nx = n(156867),
    nv = n(83297),
    nC = n(846930),
    nI = n(433371),
    n_ = n(366811),
    nN = n(924985),
    nT = n(945886),
    nO = n(72314),
    nj = n(769765),
    nD = n(808728),
    nR = n(458294),
    nb = n(576705),
    nL = n(584569),
    nw = n(763827),
    nM = n(543465),
    nk = n(607567),
    nP = n(297264),
    nV = n(408278),
    nG = n(761508),
    nU = n(689175),
    nz = n(683071),
    nH = n(270003),
    nW = n(452027),
    nK = n(243721),
    nB = n(331322),
    nF = n(144228),
    nY = n(691885),
    nZ = n(305866),
    nX = n(187322),
    nJ = n(428678),
    nQ = n(834730),
    nq = n(110649);
let n$ = 0;
function n0(e) {
    switch (e) {
        case ey.G6Q.TOP_LEFT:
            return z.intl.string(z.t.xlchpU);
        case ey.G6Q.TOP_RIGHT:
            return z.intl.string(z.t["4uHRHH"]);
        case ey.G6Q.BOTTOM_LEFT:
            return z.intl.string(z.t.ovWFnD);
        case ey.G6Q.BOTTOM_RIGHT:
            return z.intl.string(z.t["M/9V75"]);
        default:
            return z.intl.string(z.t.AlY4Za);
    }
}
let n1 = [ey.G6Q.DISABLED, ey.G6Q.TOP_LEFT, ey.G6Q.TOP_RIGHT, ey.G6Q.BOTTOM_LEFT, ey.G6Q.BOTTOM_RIGHT];
function n6(e) {
    let { position: t, onChange: n } = e,
        [i] = a.useState(() => `notification-position-selector-${n$++}`),
        s =
            t === ey.G6Q.DISABLED
                ? z.intl.string(z.t.R6LxVf)
                : z.intl.formatToPlainString(z.t["XXHDM/"], { position: n0(t) });
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(nX.vN, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)("div", {
                    className: v()(nq.iE, { [nq.wX]: t === ey.G6Q.DISABLED }),
                    children: n1.map((e) =>
                        (0, l.jsxs)(
                            "label",
                            {
                                className: v()({
                                    [nq.wH]: e === t,
                                    [nq.r9]: e === ey.G6Q.DISABLED,
                                    [nq.O3]: e === ey.G6Q.TOP_RIGHT,
                                    [nq.lA]: e === ey.G6Q.TOP_LEFT,
                                    [nq.oF]: e === ey.G6Q.BOTTOM_RIGHT,
                                    [nq.RV]: e === ey.G6Q.BOTTOM_LEFT,
                                }),
                                children: [
                                    n0(e),
                                    e === ey.G6Q.DISABLED
                                        ? (0, l.jsx)(nJ.K, { size: "md", color: "currentColor", className: nq.WO })
                                        : null,
                                    (0, l.jsx)("input", {
                                        type: "radio",
                                        name: i,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: nq.hH,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(nQ.E, { variant: "text-sm/normal", className: W.Ot, children: s }),
        ],
    });
}
n6.Positions = ey.G6Q;
var n3 = n(540999),
    n8 = n(93465),
    n2 = n(14552);
function n9() {
    let e = tn.default.getNotificationPositionMode(),
        t = e !== ey.G6Q.DISABLED,
        n = tt.Ay.getOverlayKeybind(),
        i = tt.Ay.getOverlayChatKeybind();
    R.A.track(ey.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: tG.A.isNotificationDisabled(eO.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: tn.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, ta.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, ta.dI)(i.shortcut) : null,
    });
}
class n5 extends a.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        R.A.track(ey.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        R.A.setNotificationDisabledSetting(n8.M.TEXT_CHAT, !this.props.textChatDisabled), n9();
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        R.A.setNotificationDisabledSetting(n8.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        R.A.setNotificationPositionMode(t), n9();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        R.A.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        R.A.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        R.A.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, l.jsxs)(eJ.A, {
            direction: eJ.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: n2.wx,
            children: [
                (0, l.jsxs)(eJ.A, {
                    children: [
                        (0, l.jsx)(nP.D, {
                            variant: "heading-md/semibold",
                            className: n2.qd,
                            children: z.intl.string(z.t["35G2Mq"]),
                        }),
                        (0, l.jsx)("div", {
                            className: n2.Q7,
                            children: (0, l.jsx)(nV.K, {
                                variant: "icon-only",
                                size: "md",
                                icon: w.P,
                                onClick: this.props.onClose,
                                "aria-label": z.intl.string(z.t.cpT0Cq),
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
                ? (0, l.jsx)(nG.V.Item, { id: "DEVELOPER", className: n2.YU, children: "Developer" })
                : null;
        return (0, l.jsxs)(nG.V, {
            selectedItem: e,
            type: "top",
            className: n2.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, l.jsx)(nG.V.Item, { id: "GENERAL", className: n2.YU, children: z.intl.string(z.t["0FYxxw"]) }),
                (0, l.jsx)(nG.V.Item, { id: "VOICE", className: n2.YU, children: z.intl.string(z.t["3WeSiE"]) }),
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
            nU.Ch,
            {
                className: n2.Qs,
                children: [
                    this.props.streamerModeEnabled &&
                        (0, l.jsx)(nz.w, { type: "warning", children: z.intl.string(z.t["1CC/lX"]) }),
                    e,
                ],
            },
            t,
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowInviteNotification: t } = this.props,
            n = !tG.A.isNotificationDisabled(eO.KS.TextChat),
            i = e !== ey.G6Q.DISABLED;
        return (0, l.jsxs)(nH.n, {
            children: [
                (0, l.jsx)(nW.D, {
                    label: z.intl.string(z.t.IQv8Eo),
                    children: (0, l.jsx)(n6, { position: e, onChange: this.handleChangeNotificationPositionMode }),
                }),
                (0, l.jsx)(nK.d, {
                    label: z.intl.string(z.t.Fy5kPp),
                    checked: n && i,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !i,
                }),
                (0, l.jsx)(nK.d, {
                    label: z.intl.string(z.t["f+c48/"]),
                    description: z.intl.string(z.t.W9DVVf),
                    checked: t,
                    onChange: this.handleToggleInviteNotification,
                }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, l.jsxs)(nB.B, {
            gap: 20,
            children: [
                (0, l.jsx)(nF.z, {
                    label: z.intl.string(z.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        { value: ey.OSZ.LARGE, name: z.intl.string(z.t.YcOxtr) },
                        { value: ey.OSZ.SMALL, name: z.intl.string(z.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, l.jsx)(nF.z, {
                    label: z.intl.string(z.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: ey.pwA.ALWAYS, name: z.intl.string(z.t.nBmDrT) },
                        { value: ey.pwA.ONLY_WHILE_SPEAKING, name: z.intl.string(z.t["2OvIZY"]) },
                        { value: ey.pwA.NEVER, name: z.intl.string(z.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, l.jsx)(nF.z, {
                    label: z.intl.string(z.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: ey.f5z.ALWAYS, name: z.intl.string(z.t.nBmDrT) },
                        { value: ey.f5z.ONLY_WHILE_SPEAKING, name: z.intl.string(z.t["2OvIZY"]) },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, l.jsx)("div", {
            className: W.SX,
            children: (0, l.jsx)(nY.l, {
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
                onSelectionChange: (e) => null != e && ts.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    }
    render() {
        return (0, l.jsxs)(nZ.l, {
            "aria-label": z.intl.string(z.t["35G2Mq"]),
            className: n2.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
}
function n7(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatDisabled: o,
            shouldShowInviteNotification: d,
        } = (0, r.cf)([tn.default, tG.A], () => ({
            avatarSizeMode: tn.default.getAvatarSizeMode(),
            displayNameMode: tn.default.getDisplayNameMode(),
            displayUserMode: tn.default.getDisplayUserMode(),
            notificationPositionMode: tn.default.getNotificationPositionMode(),
            textChatDisabled: tG.A.isNotificationDisabled(eO.KS.TextChat),
            shouldShowInviteNotification: !tG.A.isNotificationDisabled(eO.KS.ActivityInvite),
        })),
        c = (0, to.Mn)("OverlaySettingsPopout"),
        u = (0, r.bG)([tF.A], () => tF.A.enabled);
    return (0, l.jsx)(n5, {
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
var n4 = n(609360);
let ie = function (e) {
    let t,
        { title: n, header: i, children: s, renderSettings: o, onDragStart: r } = e,
        d = a.useRef(null);
    return (
        (t =
            null != n
                ? (0, l.jsxs)(eN.Bar, {
                      className: v()(n4.wx, n4.bl),
                      onMouseDown: r,
                      children: [
                          (0, l.jsx)(eN.Content, { className: v()(n4.qd, n4.bl), dynamicSize: !0, children: n }),
                          (0, l.jsx)(eN.Content, {
                              children: (0, l.jsx)(nm.Y, {
                                  targetElementRef: d,
                                  position: "right",
                                  renderPopout: o ?? ey.tEg,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, l.jsx)(eN.Icon, {
                                          ...e,
                                          icon: nf.Z,
                                          label: z.intl.string(z.t["3D5yo/"]),
                                          ref: d,
                                      }),
                              }),
                          }),
                      ],
                  })
                : i),
        (0, l.jsxs)("div", { className: n4.pz, children: [t, (0, l.jsx)("div", { className: n4.Y_, children: s })] })
    );
};
var it = n(349828),
    ii = n(602679);
class is extends a.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    settingsIconRef = a.createRef();
    state = {
        controller: new ng.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
    };
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = nO.A.getGuildDimensions(e);
        this.setAnimatedValue(t ?? 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = nO.A.getGuildDimensions(n);
            this.setAnimatedValue(e ?? 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, l.jsx)(n7, { onClose: t });
    }
    handleScroll = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, nS.A)(t);
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
            r = n?.id === it.Vc ? nx.T : nx.B;
        return (0, l.jsxs)(ie, {
            header:
                null != n
                    ? (0, l.jsx)(nv.Ay, {
                          guild: n,
                          controller: i,
                          renderBanner: s,
                          bannerVisible: a,
                          className: ii.F,
                          headerClassName: ii.D8,
                          onMouseDown: e,
                          disableBannerAnimation: !1,
                          communityInfoVisible: o,
                          children: (0, l.jsx)(nm.Y, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, l.jsx)(eN.Icon, {
                                      ref: this.settingsIconRef,
                                      icon: nf.Z,
                                      label: z.intl.string(z.t["3D5yo/"]),
                                      ...e,
                                  }),
                          }),
                      })
                    : null,
            children: [
                (0, l.jsx)("div", {
                    className: ii.o5,
                    children:
                        null != n
                            ? (0, l.jsx)(r, {
                                  ...t,
                                  guild: n,
                                  disableManageChannels: !0,
                                  onScroll: null != n && null != n.banner ? this.handleScroll : null,
                              })
                            : (0, l.jsx)(nC.A, { withBannerPadding: !1 }),
                }),
                null != n &&
                    (0, l.jsx)("section", {
                        className: ii.C3,
                        "aria-label": z.intl.string(z.t.StREWK),
                        children: (0, l.jsx)(nI.A, { guildId: n.id }),
                    }),
            ],
        });
    }
}
function il(e) {
    let { guildId: t, onDragStart: n } = e,
        i = (0, r.bG)([e8.A], () => e8.A.getGuild(t)),
        s = (0, r.bG)([nD.Ay], () => nD.Ay.getChannels(t)),
        a = (0, r.bG)([nj.A], () => nj.A.getCategories(t)),
        { mutedChannels: o, collapseMuted: d } = (0, r.cf)([nM.Ay], () => ({
            mutedChannels: nM.Ay.getMutedChannels(t),
            collapseMuted: nM.Ay.isGuildCollapsed(t),
        })),
        c = (0, r.bG)([nk.Ay], () => nk.Ay.getVoiceStates(t)),
        u = (0, r.bG)([nT.A], () => nT.A.getCollapsed()),
        { scrollTo: h } = (0, r.bG)([nO.A], () => nO.A.getGuildDimensions(t)),
        p = (0, n_.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        A = (0, r.bG)([e5.A], () => e5.A.getVoiceChannelId()),
        g = (0, r.bG)([nb.A], () => nb.A.getGuildVersion(t)),
        m = (0, r.bG)([nN.A], () => nN.A.version),
        f = (0, r.bG)([nR.default], () => nR.default.getGuildChangeSentinel(t)),
        E = (0, nE.a1)(i?.id),
        y = (0, ny.vj)(i?.id),
        S = i?.features.has(ey.GuildFeatures.COMMUNITY) ?? !1,
        x = (0, r.bG)([nw.A], () => nw.A.getChannelId()),
        v = (0, r.bG)([nL.A], () => nL.A.desyncedVoiceStatesCount);
    return (0, l.jsx)(is, {
        guildId: t,
        guild: i,
        onDragStart: n,
        channels: s,
        categories: a,
        mutedChannels: o,
        scrollToChannel: h,
        selectedChannelId: p,
        selectedVoiceChannelId: A,
        voiceStates: c,
        rtcConnectedChannelId: x,
        rtcDesyncedVoiceStatesCount: v,
        collapsedChannels: u,
        collapseMuted: d,
        guildReadStateSentinel: f,
        permissionVersion: g,
        categoryCollapseVersion: m,
        embeddedAppsByChannel: E,
        activeEventsByChannel: y,
        showNewUnreadsBar: S,
        optInEnabled: !1,
    });
}
var ia = n(58923),
    io = n(793322),
    ir = n(481171);
function id() {
    return (0, io.WU)("DM_SEARCH");
}
let ic = a.memo(function () {
    let e = (0, r.bG)([tn.default], () => (tn.default.isLocked((0, q.getPID)()) ? "true" : "false")),
        t = (0, n_.A)((e) => {
            let { channelId: t } = e;
            return t;
        });
    return (0, l.jsxs)("div", {
        className: ir.AB,
        children: [
            (0, l.jsx)("div", {
                className: ir.ON,
                children: (0, l.jsx)("button", {
                    type: "button",
                    className: ir.lU,
                    onClick: id,
                    children: z.intl.string(z.t.LzcpeZ),
                }),
            }),
            (0, l.jsx)(ia.A, { padding: 8, theme: ey.NJ8.DARK, version: e, selectedChannelId: t }),
            (0, l.jsx)("section", {
                className: ir.C3,
                "aria-label": z.intl.string(z.t.StREWK),
                children: (0, l.jsx)(nI.A, { guildId: null }),
            }),
        ],
    });
});
var iu = n(929284);
function ih(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)(n7, { onClose: t });
}
class ip extends a.PureComponent {
    static defaultProps = { contained: !1 };
    onDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(nl.MOVE, e.clientX, e.clientY);
    };
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            s =
                null != e
                    ? (0, l.jsx)(il, { guildId: e, onDragStart: this.onDragStart }, e)
                    : (0, l.jsx)(ie, {
                          title: z.intl.string(z.t.YUU0RF),
                          renderSettings: ih,
                          onDragStart: this.onDragStart,
                          children: (0, l.jsx)(ic, {}),
                      }),
            a = n ? "div" : eN;
        return (0, l.jsxs)(a, {
            className: v()(iu.E, { [iu.H]: !n }, i),
            children: [(0, l.jsx)(np.A, { isOverlay: !0, disableAppDownload: !0, isVisible: !t }), s],
        });
    }
}
let iA = r.Ay.connectStores([nA.A], () => ({ selectedGuildId: nA.A.getGuildId() }))(ip);
var ig = n(465532),
    im = n(493336),
    iE = n(414798),
    iy = n(119031),
    iS = n(480870),
    ix = n(681747),
    iv = n(128783),
    iC = n(578434),
    iI = n(80683),
    i_ = n(355622),
    iN = n(408018),
    iT = n(703966),
    iO = n(138617),
    ij = n(692051),
    iD = n(451909),
    iR = n(926262),
    ib = n(243783),
    iL = n(118517),
    iw = n(853145),
    iM = n(522556),
    ik = n(31717),
    iP = n(517019),
    iV = n(232835),
    iG = n(625494),
    iU = n(806150),
    iz = n(799808),
    iH = n(978940),
    iW = n(960027),
    iK = n(115354),
    iB = n(609731),
    iF = n(788120),
    iY = n(772838),
    iZ = n(742589),
    iX = n(353428),
    iJ = n(95701),
    iQ = n(470710),
    iq = n(106236),
    i$ = n(915089);
function i0(e) {
    switch (e) {
        case eO.Li.BOTTOM:
            return eO.Li.BOTTOM;
        case eO.Li.LOWER:
            return eO.Li.LOWER;
        case eO.Li.UPPER:
            return eO.Li.UPPER;
        default:
            return eO.Li.TOP;
    }
}
var i1 = n(956998);
let i6 = Object.values(eO.Li).map((e) => 100 * e),
    i3 = (0, i$.Ld)();
class i8 extends a.PureComponent {
    initialValue = 100 * this.props.opacity;
    handleUpdateBackgroundOpacity(e) {
        R.A.setTextWidgetOpacity(i0(e / 100)), R.A.track(ey.HAw.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        R.A.setTextWidgetOpacity(i0(e / 100));
    }
    render() {
        return (0, l.jsx)("div", {
            className: i1.kL,
            children: (0, l.jsx)("div", {
                className: i1.xJ,
                children: (0, l.jsx)(iq.A, {
                    label: z.intl.string(z.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: i6[0],
                    maxValue: i6[i6.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: i6,
                    onMarkerRender: ey.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": i3,
                }),
            }),
        });
    }
}
let i2 = r.Ay.connectStores([tn.default], () => ({ opacity: tn.default.getTextWidgetOpacity() }))(i8);
var i9 = n(798805);
class i5 extends a.Component {
    state = { showOpacitySlider: !1 };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    handleClickCall = (e) => {
        let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
        if (i) n ? tI.default.selectVoiceChannel(null) : R.A.callPrivateChannel(t.id, !1);
        else {
            let n = !e.shiftKey;
            R.A.callPrivateChannel(t.id, n);
        }
    };
    handleOpenOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !0 }), e && R.A.setPreviewInGameMode(!0);
    };
    handleCloseOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !1 }), e && R.A.setPreviewInGameMode(!1);
    };
    handleMouseDown = (e) => {
        let { onMouseDown: t } = this.props;
        null != t && t(e);
    };
    renderCallButton() {
        let e,
            { channel: t, channelHasActiveCall: n, userIsInChannelCall: i, isBlocked: s } = this.props;
        if (!(0, iJ.Gw)(t.type)) return null;
        let a = iH._,
            o = !1;
        return (
            n
                ? i
                    ? ((e = z.intl.string(z.t["4ry6yi"])), (a = iW.z))
                    : (e = z.intl.string(z.t["0D/6Rz"]))
                : s
                  ? ((e = z.intl.string(z.t.PHzjvX)), (o = !0))
                  : (e = z.intl.string(z.t.focH1t)),
            (0, l.jsx)(iZ.A.Icon, { icon: a, tooltip: e, onClick: this.handleClickCall, disabled: o })
        );
    }
    renderWidgetButtons = () => {
        let { locked: e, handlePin: t, pinned: n } = this.props,
            i = n ? z.intl.string(z.t.cSu80j) : z.intl.string(z.t.cM8Vnm);
        return e
            ? null
            : (0, l.jsxs)(a.Fragment, {
                  children: [
                      this.renderCallButton(),
                      n
                          ? (0, l.jsx)(iZ.A.Icon, {
                                icon: iK.O,
                                tooltip: z.intl.string(z.t.OVovCb),
                                onClick: this.handleOpenOpacitySettings,
                            })
                          : null,
                      (0, l.jsx)(iZ.A.Icon, { icon: n ? iB.h : iF.q, tooltip: i, selected: n, onClick: t }),
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
            ? (0, l.jsxs)(eN.Bar, {
                  className: i9.dl,
                  children: [
                      (0, l.jsx)(i2, {}),
                      (0, l.jsx)(iZ.A.Icon, {
                          icon: w.P,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: z.intl.string(z.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, l.jsx)(eN.Background, {
                  opacityOverride: n || d ? null : 1,
                  children: (0, l.jsx)("div", {
                      className: v()(e, t, i9.N1),
                      onMouseDown: o,
                      onContextMenu: r,
                      children: (0, l.jsxs)(iZ.A, {
                          guildId: i.guild_id,
                          channelId: i.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              d || n || c
                                  ? null
                                  : (0, l.jsx)(iY.W, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: v()(i9.co, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, iX.zF)({ channel: i, channelName: s }),
                              n ? null : (0, iX.EP)(i, a),
                          ],
                      }),
                  }),
              });
    }
}
function i7(e) {
    let { channel: t, ...n } = e,
        i = (0, r.bG)([e5.A, e3.A], () => {
            let e = e5.A.getVoiceChannelId();
            return e3.A.getChannel(e);
        }),
        s = (0, r.bG)([e8.A], () => e8.A.getGuild(t.guild_id)),
        a = (0, r.bG)([iQ.A], () => iQ.A.isCallActive(t.id)),
        o = (0, tN.Ay)(t),
        d = (0, r.bG)([tO.A], () => !!t.isDM() && null != t.getRecipientId() && tO.A.isBlocked(t.getRecipientId()));
    return (0, l.jsx)(i5, {
        channel: t,
        channelName: o,
        guild: s,
        channelHasActiveCall: a,
        userIsInChannelCall: null != i && i.id === t.id,
        isBlocked: d,
        ...n,
    });
}
var i4 = n(381941),
    se = n(650583),
    st = n(463912);
let sn = eO.Li.TOP;
class si extends a.Component {
    textAreaRef = a.createRef();
    constructor(e) {
        super(e), ik.A.addChangeListener(this.draftDidChange);
        const t = ik.A.getDraft(e.channel.id, ik.C.ChannelMessage);
        (this.state = { ...(0, iN.ur)(t), focused: !1, contentWarningProps: null }),
            iG._.subscribe(ey.jej.TEXTAREA_FOCUS, this.focusInput),
            iG._.subscribe(ey.jej.TEXTAREA_BLUR, this.blurInput);
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        ik.A.removeChangeListener(this.draftDidChange),
            iG._.unsubscribe(ey.jej.TEXTAREA_FOCUS, this.focusInput),
            iG._.unsubscribe(ey.jej.TEXTAREA_BLUR, this.blurInput);
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = ik.A.getDraft(t.channel.id, ik.C.ChannelMessage);
            n !== i && "" === i && e.setState((0, iN.ur)(i));
        };
    })();
    handleTextareaKeyDown = (e) => {
        if (
            e.key === se.dh.ARROW_UP &&
            !e.shiftKey &&
            !e.altKey &&
            !e.ctrlKey &&
            !e.metaKey &&
            0 === this.state.textValue.length
        ) {
            e.preventDefault();
            let { channel: t } = this.props,
                n = iV.A.getLastEditableMessage(t.id);
            null != n && im.A.startEditMessageRecord(t.id, n);
        }
    };
    handleTextareaChange = (e, t, n) => {
        let {
            channel: { id: i },
        } = this.props;
        ig.A.changeDraft(i, this.state.textValue, ik.C.ChannelMessage),
            "" !== t ? iE.A.startTyping(i) : iE.A.stopTyping(i),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, iU.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: i_.oU.OVERLAY,
                  content: t,
                  channel: n,
              }).then((e) => {
                  let { valid: l, failureReason: a } = e;
                  if (!l)
                      return a === ey.X8x.SLOWMODE_COOLDOWN
                          ? (iG._.dispatch(ey.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let o = im.A.getSendMessageOptionsForReply(i);
                  return (im.A.sendMessage(n.id, iD.Ay.parse(n, t), !0, { ...o, location: i4.Hx.OVERLAY }),
                  this.setState((0, iN.N3)()),
                  (0, iL.Jx)(n.id),
                  s)
                      ? (R.A.deactivateAllRegions(), { shouldClear: !1, shouldRefocus: !1 })
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
        (0, l.jsx)(iT.A, {
            className: t,
            channel: this.props.channel,
            draftType: ik.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, iN.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: i, textValue: s, contentWarningProps: a, richValue: o } = this.state,
            r = (0, l.jsx)(nm.Y, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    a?.onCancel?.(), this.setState({ contentWarningProps: null });
                },
                shouldShow: null != a,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        tc()(
                            null != a,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, l.jsx)(iR.A, { onClose: t, ...a })
                    );
                },
                children: () =>
                    (0, l.jsx)(iO.Ay, {
                        ...n,
                        ref: this.textAreaRef,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: i_.oU.OVERLAY,
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
            ? (0, l.jsx)(iC.A, { channel: e, children: r }, e.id)
            : (0, l.jsx)(iI.A, { channel: e, children: r }, e.id);
    }
}
class ss extends a.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, iz.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                R.A.track(ey.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }
    componentDidMount() {
        (0, iz.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        R.A.track(ey.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: ey.uss.TEXT,
        }),
            R.A.setPinChat(e);
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
            g = (0, tN.m1)(t, tS.default, tO.A),
            m = !i && null != t && t.isNSFW(),
            f = !A || r;
        return (
            (e =
                m && null != s
                    ? (0, l.jsx)(iM.A, { guild: s, channelId: t.id })
                    : (0, l.jsx)(
                          ib.A,
                          {
                              channel: t,
                              className: st.Wk,
                              forceCompact: c,
                              showNewMessagesBar: !A,
                              scrollerClassName: c ? st.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, l.jsx)(ij.Y.Provider, {
                value: { disableInteractions: c && o && !r, disableAnimations: c && A && !r },
                children: (0, l.jsxs)(a.Fragment, {
                    children: [
                        !o && !u && (0, l.jsx)(iv.A, { channel: t, guild: s }),
                        (0, l.jsx)(eN.Background, {
                            opacityOverride: o || u ? null : sn,
                            children: (0, l.jsx)("div", {
                                className: v()(st.MJ, { [st.Id]: h, [st.$p]: c && o && !r }),
                                children: e,
                            }),
                        }),
                        m
                            ? null
                            : (0, l.jsx)("div", {
                                  children: f
                                      ? (0, l.jsx)(eN.Background, {
                                            opacityOverride: o || u ? null : sn,
                                            children: (0, l.jsxs)("div", {
                                                className: st.z8,
                                                children: [
                                                    (0, l.jsx)(si, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: r,
                                                        pendingReply: p,
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: st.V_,
                                                        children: (0, l.jsx)(iy.Ay, {
                                                            channel: t,
                                                            className: st.IW,
                                                            isInTextChannel: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, l.jsx)("div", {
                                            className: st.Zl,
                                            children: (0, l.jsx)(eN.Background, {
                                                opacityOverride: eO.Li.LOWER,
                                                children: (0, l.jsx)("div", {
                                                    className: v()(st.ew, st.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != g && g.length > 0
                                                            ? z.intl.formatToPlainString(z.t["9TkYMO"], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? g : `#${g}`,
                                                              })
                                                            : z.intl.formatToPlainString(z.t["hxz/4E"], { keybind: d }),
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
            (0, eW.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("94881"),
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("38730"),
                    n.e("89673"),
                    n.e("82073"),
                    n.e("97558"),
                    n.e("91994"),
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
                    n.e("17244"),
                    n.e("98199"),
                    n.e("41175"),
                    n.e("39778"),
                ]).then(n.bind(n, 385913));
                return (n) => (0, l.jsx)(e, { ...n, user: i, channelSelected: !0, channel: t });
            });
    };
    moveDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(nl.MOVE, e.clientX, e.clientY);
    };
    resizeDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(nl.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
    };
    renderWidgetWrapper(e) {
        let { locked: t, pinned: n, activated: i, isPreviewingInGame: s, opacity: a, className: o } = this.props,
            r = ey.UVF.UNPINNED;
        i ? (r = ey.UVF.IN_GAME_ACTIVE) : (n && t) || s ? (r = ey.UVF.IN_GAME_TEXT) : n && (r = ey.UVF.PINNED);
        let d = (t && !i) || s,
            c = n && (d || i),
            u = n && i,
            h = n && d && !i,
            p = (function (e) {
                switch (e) {
                    case eO.Li.BOTTOM:
                        return eO.Kv.LOW;
                    case eO.Li.LOWER:
                        return eO.Kv.MEDIUM;
                    case eO.Li.UPPER:
                        return eO.Kv.HIGH;
                    case eO.Li.TOP:
                        return eO.Kv.FULL;
                    default:
                        return;
                }
            })(a);
        return (0, l.jsx)(eN, {
            className: v()(
                p,
                { [st.yw]: !n, [st.CP]: n, [st.xt]: h, [st.iM]: c, [st.ip]: u, [st.dp]: n, "overlay-unlocked": !t },
                o,
            ),
            type: r,
            opacity: a,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, l.jsx)("div", { className: st.k_, children: e });
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
                (0, l.jsx)(i7, {
                    draggableClassName: st.bl,
                    className: st.fB,
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
                e || i ? null : (0, l.jsx)("div", { className: st.cB, onMouseDown: this.resizeDragStart }),
            ],
        });
        return s ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o);
    }
}
function sl(e) {
    let { contained: t = !1, ...n } = e,
        i = (0, r.bG)([nA.A], () => nA.A.getGuildId()),
        s = (0, r.bG)([e5.A], () => e5.A.getChannelId(i)),
        a = (0, r.bG)([e3.A], () => e3.A.getChannel(s)),
        o = (0, r.bG)([tt.Ay], () => tt.Ay.getOverlayChatKeybind()),
        d = null != o ? (0, ta.dI)(o.shortcut, !0) : "]",
        [c, u, h] = (0, r.yK)([tn.default], () => [
            tn.default.getTextWidgetOpacity(),
            tn.default.getActiveRegions(),
            !t && tn.default.isPreviewingInGame(),
        ]),
        p = (0, r.bG)([e8.A], () => e8.A.getGuild(i)),
        A = (0, r.bG)([iP.A], () => null != i && iP.A.didAgree(i)),
        g = null != a && a.isPrivate() ? a.getRecipientId() : null,
        m = (0, r.bG)([iw.A], () => (null != s ? iw.A.getPendingReply(s) : void 0)),
        f = (0, r.bG)([tS.default], () => (null != g ? tS.default.getUser(g) : null)),
        { placeholder: E } = (0, iS.A)({ channel: a });
    return null != a && null != p && ey.kvI.GUILD_THREADS_ONLY.has(a.type)
        ? (0, l.jsx)(ix.default, {})
        : (0, l.jsx)(ss, {
              guild: p,
              channel: a,
              user: f,
              opacity: c,
              nsfwAgree: A,
              chatKeybind: d,
              activated: u.has(ey.ajI.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: m,
              contained: t,
              placeholder: E,
              widget: ey.uss.TEXT,
              ...n,
          });
}
var sa = n(946912);
function so(e) {
    let { dragStart: t, dragging: n, pinned: i, locked: s, className: a } = e;
    return (0, l.jsxs)(eN, {
        className: v()(sa.i, a),
        children: [
            (0, l.jsx)(iA, { contained: !0, dragStart: t, locked: s }),
            (0, l.jsx)(sl, { dragStart: t, locked: s, pinned: i, dragging: n, contained: !0 }),
        ],
    });
}
var sr = n(661531),
    sd = n(319060),
    sc = n(983851),
    su = n(959988),
    sh = n(401843),
    sp = n(717558),
    sA = n(429913),
    sg = n(769015),
    sm = n(652896),
    sf = n(277680),
    sE = n(118277),
    sy = n(22705),
    sS = n(994314),
    sx = n(63995),
    sv = n(518769),
    sC = n(520006),
    sI = n(352018),
    s_ = n(481947),
    sN = n(760751),
    sT = n(485296),
    sO = n(996439),
    sj = n(427262),
    sD = n(936504),
    sR = n(83107),
    sb = n(831544),
    sL = n(990836),
    sw = n(597601),
    sM = n(827343),
    sk = n(951001),
    sP = n(42473),
    sV = n(978171),
    sG = n(999751),
    sU = n(977997),
    sz = n(572487),
    sH = n(864653),
    sW = n(395766);
class sK extends a.PureComponent {
    rtcConnectionStatusRef = a.createRef();
    handleToggleSelfMute = () => {
        let { context: e } = this.props;
        sM.A.toggleSelfMute({ context: e, location: "Overlay Controls" });
    };
    handleToggleSelfDeaf = () => {
        let { context: e } = this.props;
        sM.A.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
    };
    handleDisconnect() {
        tI.default.selectVoiceChannel(null);
    }
    renderPopout = (e) => {
        let { lobbyId: t } = this.props;
        return (0, l.jsx)(sV.A, { channelId: e, lobbyId: t, isOverlay: !0 });
    };
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, tN.m1)(e, tS.default, tO.A),
            i = null != t ? `${n} / ${t.name}` : n,
            s = null != t ? t.id : ey.ME;
        return (0, l.jsx)(sD.N_, {
            to: ey.BVt.CHANNEL(s),
            onClick: (t) => {
                t.stopPropagation(), sk.A.channelListScrollTo(s, e.id);
            },
            children: (0, l.jsx)(sS.A, { className: sW.Ix, children: i }),
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
            : (0, l.jsx)(eN.Bar, {
                  className: v()(e, sH.ne, { [sH.CW]: !n }),
                  children: (0, l.jsxs)(eN.Content, {
                      className: v()(t, sH.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, l.jsx)("div", {
                              className: sW.vW,
                              children: (0, l.jsx)(nm.Y, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, l.jsx)(D.D, {
                                          ...e,
                                          innerRef: this.rtcConnectionStatusRef,
                                          children: (0, l.jsx)(sG.A, {
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
                          (0, l.jsxs)(eJ.A, {
                              grow: 0,
                              children: [
                                  (0, l.jsx)(sP.A, {
                                      tooltipText: u ? z.intl.string(z.t.YqAjXy) : z.intl.string(z.t.w4m945),
                                      icon: u ? sR.z : sb.c,
                                      iconForeground: u ? sH.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, l.jsx)(sP.A, {
                                      tooltipText: c ? z.intl.string(z.t["2US872"]) : z.intl.string(z.t.wjcRFX),
                                      icon: c ? sL.c : sw.L,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: c ? sH.of : null,
                                  }),
                                  null == i &&
                                      (0, l.jsx)(sP.A, {
                                          tooltipText: z.intl.string(z.t["6vrfgt"]),
                                          onClick: this.handleDisconnect,
                                          icon: iW.z,
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function sB(e) {
    let { context: t, lobbyId: n, channel: i, ...s } = e,
        a = (0, r.bG)([e8.A], () => e8.A.getGuild(i?.getGuildId())),
        o = (0, r.bG)([sU.A], () => null != i && sU.A.hasVideo(i.id)),
        [d, c] = (0, r.yK)([e9.Ay], () => [
            e9.Ay.isSelfMute(t) || e9.Ay.isSelfMutedTemporarily(t),
            e9.Ay.isSelfDeaf(t),
        ]),
        [u, h, p] = (0, r.yK)([sz.A], () => [sz.A.getConnectionState(n), sz.A.getLastPing(n), sz.A.getQuality(n)]);
    return (0, l.jsx)(sK, {
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
var sF = n(731854),
    sY = n(899177);
function sZ(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: i,
            nick: s,
            displayNameMode: o,
            displayUserMode: d,
            size: c = ey.OSZ.LARGE,
            onClick: u,
            onContextMenu: h,
            context: p,
            guildId: A,
            voiceState: g,
        } = e,
        m = (0, r.bG)([e9.Ay], () => e9.Ay.isLocalMute(i.id)),
        f = (0, r.bG)([e6.A], () => e6.A.getCurrentUserActiveStream()),
        E = (0, r.yK)([e6.A], () => (null != f ? e6.A.getViewerIds(f) : [])),
        y = (0, sp.A)({ userId: i.id, context: p }),
        S = (0, r.bG)([sT.A], () => sT.A.isPrioritySpeaker(i.id, p)),
        x = (0, r.bG)([e6.A], () => null != e6.A.getStreamForUser(i.id, A)),
        C = a.useMemo(() => null != f && f.ownerId !== i.id && E.includes(i.id), [f, i.id, E]);
    if (d === ey.f5z.ONLY_WHILE_SPEAKING && n && !y) return null;
    let { mute: I, selfMute: _, suppress: N, deaf: T, selfDeaf: O } = g;
    return (0, l.jsx)(s_.Ay, {
        guildId: A,
        onClick: n ? void 0 : (e) => u?.(e, i),
        onContextMenu: n ? void 0 : (e) => h?.(e, i),
        className: v()(sY.TX, { [sY.zj]: !y, [sY.bG]: !n }),
        user: i,
        nick: s,
        speaking: !1,
        flipped: t,
        isStreaming: x,
        iconClassName: v()(sY.Ow, { [sY.xt]: n }),
        isWatching: C,
        isOverlay: !0,
        size: c,
        priority: S,
        mute: I || _ || m,
        localMute: m,
        serverMute: I || N,
        deaf: T || O,
        serverDeaf: T,
        userNameClassName: v()(sY.Xh, {
            [sY.xt]: n,
            [sY.R]: n && (o === ey.pwA.NEVER || (!y && o === ey.pwA.ONLY_WHILE_SPEAKING)),
        }),
    });
}
class sX extends a.PureComponent {
    static defaultProps = { context: sF.x.DEFAULT };
    handleUserContextMenu = (e, t) => {
        let { context: i } = this.props;
        (0, eW.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("94881"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("89673"),
                n.e("82073"),
                n.e("97558"),
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
        (0, eH.openModalLazy)(async () => {
            let { default: s } = await Promise.all([
                n.e("14144"),
                n.e("64345"),
                n.e("97162"),
                n.e("46327"),
                n.e("25246"),
                n.e("96531"),
            ]).then(n.bind(n, 880510));
            return (n) => (0, l.jsx)(s, { ...n, mediaEngineContext: e, subtitle: null != t ? void 0 : i });
        });
    };
    handlePin = () => {
        let e = !this.props.pinned;
        R.A.track(ey.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: ey.uss.VOICE,
        });
        let { id: t } = this.props;
        (0, nt.v0)(t);
    };
    handleStopStream = () => {
        let { stream: e } = this.props;
        null != e && sh.vN((0, sm._z)(e));
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
                    sZ,
                    {
                        guildId: o?.guild_id,
                        user: r,
                        nick: h?.nick ?? sj.Ay.getName(r),
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
        return (0, l.jsx)(eN.Body, {
            className: v()({ [sd.A.VOICE_WIDGET_TOP_MARGIN]: s, [sY.mn]: s }),
            children: (0, l.jsx)(s_.Wr, { className: sY.tA, children: u }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, l.jsxs)(eN.Bar, {
            className: v()(sY.bl, { [sY.VH]: n }),
            children: [
                (0, l.jsxs)(eN.Content, {
                    dynamicSize: !0,
                    className: v()(sY.Qs, { [sY.R]: n }),
                    children: [
                        (0, l.jsx)(iY.W, {
                            size: "custom",
                            color: sr.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: v()(sY.Kk, sY.zj, sY.co),
                        }),
                        (0, l.jsx)(sc.H, {
                            size: "custom",
                            color: sr.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: v()(sY.Kk, sY.zj, sY.Xk),
                        }),
                        (0, l.jsx)(nQ.E, {
                            variant: "text-md/normal",
                            style: { color: sr.A.unsafe_rawColors.PRIMARY_200.css },
                            className: sY.DD,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, l.jsx)(eN.Icon, {
                          icon: nf.Z,
                          label: z.intl.string(z.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, l.jsx)(eN.Icon, {
                          icon: e ? iB.h : iF.q,
                          label: e ? z.intl.string(z.t.cSu80j) : z.intl.string(z.t.cM8Vnm),
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
        let { sanitizedTitle: d, title: c } = (0, sf.A)(a);
        return (0, l.jsx)(eN.Bar, {
            className: v()(sY.Wm, { [sY.R]: n, [sY.CW]: !t }),
            children: (0, l.jsxs)(eN.Content, {
                className: sY.Vb,
                dynamicSize: !0,
                children: [
                    (0, l.jsxs)("div", {
                        className: sY.gk,
                        children: [
                            o?.id != null && o.id === s?.id
                                ? (0, l.jsx)(sg.A, { className: sY.Gt, game: s })
                                : (0, l.jsx)(sE.A, { title: d }),
                            (0, l.jsxs)(eJ.A, {
                                direction: eJ.A.Direction.VERTICAL,
                                justify: eJ.A.Justify.BETWEEN,
                                className: sY.gA,
                                children: [
                                    (0, l.jsx)(nQ.E, {
                                        className: sY.$A,
                                        variant: "text-sm/normal",
                                        children: z.intl.string(z.t.XKYej5),
                                    }),
                                    (0, l.jsx)(sS.A, { children: o?.name ?? c }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsxs)(eJ.A, {
                        grow: 0,
                        children: [
                            (0, l.jsx)("div", {
                                className: sY.yf,
                                children: (0, l.jsx)(sC.A, {
                                    stream: r,
                                    iconClassName: sY.Nd,
                                    appContext: ey.BRT.OVERLAY,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: sY.yf,
                                children: (0, l.jsx)(sI.A, { stream: r, appContext: ey.BRT.OVERLAY }),
                            }),
                            (0, l.jsx)("div", {
                                className: sY.yf,
                                children: (0, l.jsx)(eE.m, {
                                    asContainer: !0,
                                    text: z.intl.string(z.t.S5anIc),
                                    children: (0, l.jsx)(D.D, {
                                        onClick: this.handleStopStream,
                                        "aria-label": z.intl.string(z.t.S5anIc),
                                        children: (0, l.jsx)(su.G, {
                                            size: "md",
                                            color: "currentColor",
                                            className: sY.Nd,
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
        (0, iz.j_)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, iz.Mw)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: l } = e;
        return 0 !== s.length && null != t && null != l && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: s, channel: a } = this.props;
        if (null == a || null == e || !this.shouldDisplay()) return null;
        let o = ey.UVF.UNPINNED;
        return (
            i && (o = ey.UVF.PINNED),
            s && (o = ey.UVF.IN_GAME_PREVIEW),
            n && (o = ey.UVF.IN_GAME),
            (0, l.jsxs)(eN, {
                type: o,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, l.jsx)(sB, {
                              className: v()({ [sY.VH]: s }),
                              contentClassName: v()({ [sY.R]: s }),
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
function sJ(e) {
    let t = (0, r.bG)([e5.A, e3.A], () => e3.A.getChannel(e5.A.getVoiceChannelId())),
        n = (0, tN.Ay)(t),
        i = (function () {
            let [e] = (0, r.bG)(
                [nk.Ay, sx.A, e5.A, e3.A],
                () => {
                    let e = e3.A.getChannel(e5.A.getVoiceChannelId());
                    return null == e
                        ? [[], -1]
                        : e.isGuildStageVoice()
                          ? [sx.A.getMutableParticipants(e.id, sv.ip.SPEAKER), sx.A.getParticipantsVersion(e.id)]
                          : [nk.Ay.getVoiceStatesForChannel(e), nk.Ay.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                sO.D,
            );
            return e;
        })(),
        s = (0, r.bG)([e6.A], () => e6.A.getStreamerActiveStreamMetadata()),
        a = (0, r.bG)([eQ.Ay, e4.A, sN.A], () => {
            let e = (0, e$.A)(eQ.Ay, e4.A);
            return null != e ? sN.A.findGame(e)?.id : null;
        }),
        o = (0, sA.h)(a),
        d = (0, r.cf)([eQ.Ay, e4.A, e6.A, tn.default], () => {
            let e = (0, e$.A)(eQ.Ay, e4.A),
                t = e6.A.getCurrentUserActiveStream();
            return {
                displayUserMode: tn.default.getDisplayUserMode(),
                displayNameMode: tn.default.getDisplayNameMode(),
                avatarSizeMode: tn.default.getAvatarSizeMode(),
                streamApplication: s?.pid === (0, q.getPID)() ? (0, sy.A)(e) : null,
                stream: t,
            };
        });
    return (0, l.jsx)(sX, {
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
let sQ = {
    [ey.uss.TEXT](e) {
        let { dragging: t, locked: n, pinned: i, dragStart: s, className: a } = e;
        return (0, l.jsx)(sl, { dragStart: s, locked: n, pinned: i, dragging: t, className: a });
    },
    [ey.uss.GUILDS](e) {
        let { locked: t, dragStart: n, className: i } = e;
        return (0, l.jsx)(iA, { dragStart: n, locked: t, className: i });
    },
    [ey.uss.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: i, locked: s, pinned: a } = e;
        return (0, l.jsx)(sJ, { anchor: n, id: t, locked: s, pinned: a, widget: ey.uss.VOICE, isPreviewingInGame: i });
    },
    [ey.uss.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: i, className: s } = e;
        return (0, l.jsx)(so, { dragStart: i, dragging: t, locked: n, pinned: !1, className: s });
    },
};
class sq extends a.PureComponent {
    state = { lastLayoutUpdate: null, dragging: !1 };
    componentDidUpdate(e) {
        this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (R.A.track(ey.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    handleUpdate = (e, t, n, i, s) => {
        let {
            props: { layoutSize: l },
            state: { lastLayoutUpdate: a },
        } = this;
        if (!(0, q.validResolution)(l)) return;
        let o = (0, ni.NO)(n, l),
            r = (0, ni.R9)(i, l);
        (0, nt.uD)(t), (0, nt.Ju)({ widgetId: t, anchor: o, size: r });
        let d = e === nl.MOVE,
            c = (0, ni.Ly)(n, l.width, l.height, s.width, s.height);
        this.setState({
            lastLayoutUpdate: {
                was_resized: (null != a && a.was_resized) || !d,
                was_dragged: (null != a && a.was_dragged) || d,
                widget_type: e2.A.getWidgetType(t),
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
        (0, q.validResolution)(t) && (0, nt.uD)(e);
    };
    handleDragStart = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && R.A.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
    };
    handleDragEnd = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && R.A.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
    };
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: l },
            } = this,
            a = sQ[e.type];
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
            p = (0, ni.fd)(c, n),
            A = (0, ni.Nv)(u, n),
            { resizeX: g, resizeY: m, dragAnywhere: f } = t,
            E = (0, iz.AE)({ locked: i, isPreviewingInGame: s, pinned: r }),
            y = { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
            S = this.renderWidget(e, A, p);
        return null == S
            ? null
            : (0, l.jsx)(nh, {
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
let s$ = r.Ay.connectStores([e2.A, tn.default], (e) => {
    let { widgetId: t } = e,
        n = e2.A.getWidget(t),
        i = tn.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? e2.A.getWidgetConfig(n.type) : null,
        locked: tn.default.isInstanceLocked(),
        isPreviewingInGame: tn.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === ey.uss.TEXT && i.has(ey.ajI.TEXT_WIDGET),
    };
})(sq);
function s0(e, t) {
    return (0, l.jsx)(s$, { widgetId: e, layoutSize: t }, e);
}
let s1 = r.Ay.connectStores([e2.A, ti.A], () => ({
    layout: e2.A.getLayout(q.OVERLAY_LAYOUT_ID) ?? void 0,
    layoutSize: ti.A.windowSize(),
    renderWidget: s0,
}))(nn);
var s6 = n(873263),
    s3 = n(66834),
    s8 = n(549711),
    s2 = n(463347);
class s9 extends a.Component {
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
            return { guildId: null != t && "" !== t ? t : ey.ME, channelId: n, messageId: i };
        })(e);
        (0, s2.nn)(t) && (0, s2.ts)(n)
            ? (s3.A.selectGuild(t), tI.default.selectChannel({ guildId: t, channelId: n, messageId: i }))
            : (0, X.bG)(ey.BVt.ME);
    }
    render() {
        return null;
    }
}
let s5 = function () {
    return (0, l.jsxs)(s6.dO, {
        children: [
            (0, l.jsx)(s8.A, {
                path: ey.BVt.CHANNEL(s2.pv.guildId(), s2.pv.channelId({ optional: !0 }), ":messageId?"),
                component: s9,
            }),
            (0, l.jsx)(s8.A, { component: s9 }),
        ],
    });
};
var s7 = n(528772),
    s4 = n(944775),
    le = n(317084),
    lt = n(427603),
    ln = n(980504),
    li = n(402622);
function ls() {
    let [e, t] = (0, r.yK)([s7.A], () => [s7.A.enabled, s7.A.keepOpen]),
        n = (0, r.bG)([e5.A], () => e5.A.getVoiceChannelId()),
        i = (0, r.bG)([e3.A], () => e3.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, l.jsx)("div", {
              className: li.H,
              children: (0, l.jsx)(le.A, {
                  width: ln.ed.width,
                  height: ln.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, lt.A)();
                      null != e && (0, s4.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
n(644434);
var ll = n(610291);
(r.Ay.PersistedStore.disableWrites = __OVERLAY__), r.Ay.initialize();
let la = null;
function lo(e) {
    e.preventDefault();
}
function lr(e) {
    (0, eW.L3)(e, async () => {
        let { default: e } = await n.e("92843").then(n.bind(n, 254790));
        return (t) => (0, l.jsx)(e, { ...t, version: 0 });
    });
}
function ld(e) {
    let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
        a = s ? D.D : "div";
    return (0, l.jsx)(a, {
        className: v()(ll.LK, { [ll.Zo]: !s, [ll.vZ]: s, [ll.Az]: !s && i }),
        onMouseDown: (e) => {
            let { currentTarget: t, target: i, button: s } = e;
            s === ey.hE4.PRIMARY && t === i && n();
        },
        onContextMenu: lr,
        children: s
            ? null
            : (0, l.jsx)("div", {
                  className: ll.G3,
                  children: (0, l.jsx)(eK.A, { variant: eK.A.Variants.BOLD, keybind: t, closeAction: n }),
              }),
    });
}
function lc(e) {
    let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l };
}
eo.isPlatformEmbedded;
class lu extends a.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && tn.default.isPinned(ey.uss.TEXT);
        eF.A.setLayout(t ? eB.dY : eB.CJ), t && eF.A.enable();
    }
    handleLock() {
        (0, eH.hasAnyModalOpen)() || te.A.isOpen() || R.A.setInputLocked(!0, (0, q.getPID)());
    }
    handleDeactivate() {
        R.A.deactivateAllRegions();
    }
    debouncedForceUpdate = eG()(() => {
        this.forceUpdate();
    }, 500);
    handleWindowResize = () => {
        es.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
    };
    componentDidMount() {
        R.A.startSession(), e0.A.initialize(), eY.A.initialize(), e1.A.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (!this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", lo, !1), null != la)) {
                    let e = Date.now() - la;
                    R.A.track(ey.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (la = null);
                }
                eF.A.disable(),
                    (this.activeKeyEventShapes = []),
                    tn.default.isPinned(ey.uss.TEXT) && (eF.A.setLayout(eB.dY), eF.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", lo, !1),
                    null == la && ((la = Date.now()), R.A.track(ey.HAw.OVERLAY_UNLOCKED)),
                    eF.A.disable(),
                    (this.activeKeyEventShapes = []),
                    eF.A.setLayout(eB.CJ),
                    eF.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, ta.pi)(this.props.keybindKeyCodes));
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
        R.A.track(ey.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: tn.default.isPinned(ey.uss.TEXT),
            overlay_render_method: ee.Ue[ee.Ue.Hook],
            unpinned_widget_types: e2.A.getAllUnpinnedPinnedWidgets(q.OVERLAY_LAYOUT_ID),
        });
        let c = s && !a && null != d,
            u = t && null != o && null != r,
            h = tG.A.isNotificationDisabled(eO.KS.WelcomeNudge),
            p = tG.A.isNotificationDisabled(eO.KS.GoLiveNudge);
        if (
            (h || (e = { type: eO.Jr.WELCOME }),
            c && u && !p
                ? (e = { type: eO.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: r, voiceGuild: o })
                : c && !p && (e = { type: eO.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                await (0, tl.pF)(), null != e ? R.A.overlayMounted(e) : R.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", lo, !1),
            eo.isPlatformEmbedded)
        ) {
            let e = (0, el.m)();
            if (null == e) return;
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    R.A.track(ey.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * Q.A.Millis.MINUTE })),
                ts.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    tn.default.getDisableExternalLinkAlert() || t === e7.A.getLastURL()
                        ? ts.Ay.send("OPEN_EXTERNAL_URL", t)
                        : (0, eH.openModalLazy)(async () => {
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
            this.props.locked && window.removeEventListener("contextmenu", lo, !1),
            e0.A.terminate(),
            eY.A.terminate(),
            e1.A.terminate();
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, ta.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => ez()(t, e));
    onKeyDownGlobal = (e) => {
        let t = lc(e),
            n = this.getActiveKeyEventIndex(t) > -1,
            i = [16, 17, 18, 91].includes(e.keyCode);
        n || i || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => ez()(e, t))) &&
                (e.preventDefault(), e.stopPropagation());
        let { locked: s, activeRegions: l } = this.props;
        t.keyCode === eP().codes.esc && s && l.has(ey.ajI.TEXT_WIDGET) && R.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = lc(e),
            n = this.getActiveKeyEventIndex(t);
        n > -1 && this.activeKeyEventShapes.splice(n, 1);
    };
    renderInvalidSizeMessage() {
        return (0, l.jsx)(eJ.A, {
            justify: eJ.A.Justify.CENTER,
            align: eJ.A.Align.CENTER,
            className: ll.rU,
            children: (0, l.jsx)("div", {
                className: ll.JV,
                children: z.intl.format(z.t.ketnW0, q.OVERLAY_MIN_RESOLUTION),
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
            className: ll.Lw,
            children: [
                (0, l.jsx)(s5, {}),
                a && (0, l.jsx)("header", { className: ll.tk, children: z.intl.string(z.t.iOq96m) }),
                i,
                (!e || o.has(ey.ajI.TEXT_WIDGET)) &&
                    (0, l.jsx)(ld, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a,
                    }),
                (0, q.validResolution)(r)
                    ? (0, l.jsx)(s1, { className: v()({ [ll.ZK]: e, [ll.al]: !e }) })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, l.jsx)(ls, {}),
                (0, l.jsx)(t4, { locked: u, keybind: t }),
                (0, l.jsx)(tr.A, {}),
                (0, l.jsx)("div", { className: ll._C }),
            ],
        });
    }
}
function lh() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s,
        } = (0, r.cf)([tn.default], () => ({
            locked: tn.default.isLocked((0, q.getPID)()),
            initialized: tn.default.initialized,
            incompatibleApp: tn.default.incompatibleApp,
            activeRegions: tn.default.getActiveRegions(),
            isPreviewingInGame: tn.default.isPreviewingInGame(),
        })),
        o = (0, r.bG)([ti.A], () => ti.A.windowSize()),
        d = (0, r.bG)([tt.Ay], () => tt.Ay.getOverlayKeybind()),
        c = (0, r.bG)([e5.A], () => e5.A.getVoiceChannelId()),
        u = (0, r.bG)([e3.A], () => e3.A.getChannel(c)),
        h = (0, r.bG)([e8.A], () => (null != u ? e8.A.getGuild(u.guild_id) : null)),
        p = (0, r.bG)([eQ.Ay, e4.A], () => (0, e$.A)(eQ.Ay, e4.A)),
        A = (0, r.bG)([e9.Ay], () => (0, eq.A)(e9.Ay)),
        g = (0, r.bG)([e6.A], () => null != e6.A.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, eX.Ay)(eZ.A.OVERLAY);
    return (
        a.useEffect(() => {
            t && (0, to.E)();
        }, [t]),
        (0, l.jsx)(eX.f5, {
            value: m,
            children: (0, l.jsx)(lu, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: s,
                windowSize: o,
                keybind: null != d ? (0, ta.dI)(d.shortcut, !0) : "???",
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
var lp = n(136722),
    lA = n(488926);
__OVERLAY__ &&
    th.h.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: i, permissions: s, ...a },
            } = e,
            o = `OAuth2Authorize_${t}_${a.guildId}_${a.channelId}`;
        function r(e) {
            let { location: n } = e;
            th.h.dispatch({ type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE", clientId: t, location: n });
        }
        let d = lA.x3;
        try {
            d = lp.iu(s ?? 0);
        } catch (e) {}
        (0, eH.openModalLazy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 887909));
                return (t) => (0, l.jsx)(e, { ...t, ...a, authorizations: new Map(i), permissions: d, callback: r });
            },
            {
                modalKey: o,
                onCloseRequest: () => {
                    (0, eH.closeModal)(o), r({});
                },
            },
        );
    }),
    n(939857),
    n(40876),
    __OVERLAY__ &&
        th.h.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
            let { guildId: t, channelId: n, messageId: i } = e;
            (0, X.bG)({ pathname: ey.BVt.CHANNEL(t, n, i) });
        }),
    n(921955),
    r.Ay.initialize();
let lg = function () {
    return (
        a.useEffect(
            () => (
                y.A.initialize(),
                p.A.initialize(),
                S.A.init(),
                () => {
                    y.A.terminate(), p.A.terminate();
                }
            ),
            [],
        ),
        (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(A.A, {}),
                (0, l.jsx)(u.N, {
                    children: (0, l.jsxs)(eM, {
                        children: [
                            (0, l.jsx)(m.Al, {}),
                            (0, l.jsx)(g.Ay, {}),
                            (0, l.jsx)(E.Wr, {
                                appContext: ey.BRT.OVERLAY,
                                renderWindow: window,
                                children: (0, l.jsx)(h.A, {
                                    children: (0, l.jsxs)(f.Yf, {
                                        children: [
                                            (0, l.jsx)(lh, {}),
                                            (0, l.jsx)(d.b, {}),
                                            (0, l.jsx)(c.A, {}),
                                            (0, l.jsx)(o.P, {}),
                                            (0, l.jsx)(f.C8, {}),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
