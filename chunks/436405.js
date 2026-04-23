let i;
n.r(t), n.d(t, { default: () => l_ });
var s,
    l = n(627968),
    a = n(64700),
    o = n(337836),
    r = n(17928),
    d = n(373495),
    c = n(318009),
    u = n(638421),
    h = n(196492),
    p = n(949666),
    _ = n(404374),
    f = n(573435),
    A = n(750506),
    g = n(267102),
    m = n(17159),
    E = n(565058);
n(142703);
var y = n(503698),
    x = n.n(y),
    v = n(735438),
    S = n.n(v),
    C = n(258873),
    I = n(622242),
    N = n(731738),
    T = n(118356),
    O = n(43990),
    b = n(939249),
    D = n(684013),
    j = n(996308),
    L = n(831062),
    w = n(789645),
    R = n(825484),
    k = n(821609),
    M = n(97808),
    P = n(778712),
    G = n(646862);
function V(e) {
    let { keybind: t, separator: n = "+", className: i } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.map((e, s) =>
            (0, l.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, l.jsx)("span", { className: x()(G.E, i), children: e }),
                        s === t.length - 1 ? void 0 : n,
                    ],
                },
                s,
            ),
        ),
    });
}
var U = n(985018),
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
                keybindHook: (e, n) => (0, l.jsx)(V, { keybind: t, className: z.P }, n),
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
            : (0, l.jsx)(b.D, {
                  onClick: this.handleDismiss,
                  className: z.r,
                  "aria-label": U.intl.string(U.t.LnEgqX),
                  children: (0, l.jsx)(w.P, { size: "xs", color: "currentColor", className: z.MW }),
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
                          (0, l.jsxs)(R.e, {
                              fullWidth: !0,
                              children: [
                                  null != n
                                      ? (0, l.jsx)(k.$, {
                                            variant: "active",
                                            size: "sm",
                                            text: t ?? U.intl.string(U.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != i
                                      ? (0, l.jsx)(k.$, {
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
              ? (0, l.jsx)(M.eu, { src: e, size: P._3.SIZE_40, className: z.my, "aria-hidden": !0 })
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
            i = null != e ? b.D : "div";
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
    zone = S().uniqueId("ClickArea");
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
var e_ = n(133977),
    ef = n.n(e_),
    eA = n(990078),
    eg = n(364522),
    em = n(652215),
    eE = n(960063);
let ey = em.UVF.DEFAULT,
    ex = a.createContext({ type: ey, opacity: 1 }),
    ev = a.createContext(void 0),
    eS = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, l.jsx)(ex.Consumer, {
            children: (e) => {
                let { type: s } = e;
                return (0, l.jsx)(ev.Consumer, {
                    children: (e) =>
                        (0, l.jsx)("div", { className: x()(eE.bar, eE[ef()(s)], n), style: e, ...i, children: t }),
                });
            },
        });
    };
class eC extends a.PureComponent {
    static defaultProps = { disableScroll: !1 };
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, l.jsx)(ev.Consumer, {
            children: (i) =>
                (0, l.jsx)(ex.Consumer, {
                    children: (s) => {
                        let a = x()(eE.body, eE[ef()(s.type)], n);
                        return e
                            ? (0, l.jsx)("div", { className: a, style: i, children: t })
                            : (0, l.jsx)(eg.Ip, { fade: !0, className: a, children: t });
                    },
                }),
        });
    }
}
let eI = (e) => {
        let { type: t = ey, width: n, height: i, children: s, className: a, opacity: o = 1, onClick: r } = e;
        return (0, l.jsx)(ex.Provider, {
            value: { type: t, opacity: o },
            children: (0, l.jsx)("div", {
                className: x()(eE.widget, eE[ef()(t)], a),
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
                (0, l.jsx)("div", { className: x()(eE.content, { [eE.staticSize]: !i }, n), style: e, children: t }),
        });
    };
(eI.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [eS, eC, eN];
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
    (eI.Body = eC),
    (eI.Content = eN),
    (eI.Icon = (e) => {
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
        return (0, l.jsx)(eA.m, {
            __unsupportedReactNodeAsText: o ? (0, l.jsx)("div", { className: eE.tutorialTip, children: i }) : i,
            "aria-label": i,
            position: a,
            forceOpen: o,
            children: (0, l.jsx)(b.D, {
                onClick: s,
                className: x()(eE.icon, { [eE.toggledIconOn]: r }),
                innerRef: t,
                "aria-label": i,
                children: (0, l.jsx)(n, { color: "currentColor", size: "custom", width: d, height: d, role: "img" }),
            }),
        });
    }),
    (eI.Bar = eS);
var eT = n(672396),
    eO = n(744315);
let eb = 10 * J.A.Millis.SECOND,
    eD = new T.Vy("LegacyOverlayErrorBoundary");
function ej() {
    let e = (0, Q.getPID)(),
        t = (0, Q.getRPCAuthToken)();
    (0, j.tN)({
        type: em.kGV.DISPATCH,
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
        (this.notificationTimer = setTimeout(this.hideNotification, eb)),
            D.A.track(em.HAw.NOTIFICATION_VIEWED, { notif_type: eT.KS.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    hideNotification = () => {
        ej();
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e), (this.notificationTimer = null);
    };
    handleReload = (e) => {
        this.setState({ busy: !0 }),
            ej(),
            D.A.track(em.HAw.NOTIFICATION_CLICKED, { notif_type: eT.KS.OverlayCrashed, action_type: "reload" }, !0),
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
                      theme: em.NJ8.DARK,
                      children: (i) =>
                          (0, l.jsxs)(b.D, {
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
                                      ? (0, l.jsxs)(eI, {
                                            className: eO.a2,
                                            children: [
                                                (0, l.jsx)(eI.Bar, { children: "Error Details" }),
                                                (0, l.jsx)(eI.Content, {
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
let ew = S().throttle(
    () => {
        L.A.increment({ name: N.K.APP_CRASHED, tags: [`reason:${C.J.UNHANDLED_JS_ERROR}`, `level:${I.k.FATAL}`] }, !0);
    },
    100,
    { trailing: !1 },
);
class eR extends a.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let n = (0, Z.JK)().location;
        this.setState({ error: e, info: t }),
            eD.error(`ErrorBoundary caught error: ${e.message}`, { error: e, info: t });
        let i = (0, Q.getPID)(),
            s = (0, Q.getRPCAuthToken)();
        (0, j.tN)({
            type: em.kGV.DISPATCH,
            pid: (0, Q.getPID)(),
            token: s,
            payloads: [
                { type: "OVERLAY_CRASHED", error: e.message, pid: i },
                { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
        }),
            setImmediate(() => window.addEventListener("click", ej));
        let l = (0, q.St)(e, $.Ue.Hook, { extra: t });
        D.A.track(em.HAw.APP_CRASHED, {
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
    eM = n.n(ek),
    eP = n(111956),
    eG = n.n(eP),
    eV = n(33851),
    eU = n.n(eV),
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
var eJ = n(328153),
    eQ = n(880144),
    eq = n(905552),
    e$ = n(913765),
    e0 = n(453314),
    e1 = n(616356),
    e9 = n(734057),
    e3 = n(71393),
    e7 = n(38502),
    e8 = n(969341),
    e5 = n(309010),
    e2 = n(70142),
    e4 = n(157257),
    e6 = n(712687),
    te = n(532624),
    tt = n(256415),
    tn = n(531685),
    ti = n(19575),
    ts = n(316501),
    tl = n(350535),
    ta = n(589051),
    to = n(223251),
    tr = n(284009),
    td = n.n(tr),
    tc = n(132500),
    tu = n(228366),
    th = n(780907),
    tp = n(938005);
function t_(e, t) {
    return {
        trackView() {
            let n = tt.default.isInstanceLocked() ? em.ThZ.LOCKED_OVERLAY : em.ThZ.UNLOCKED_OVERLAY;
            D.A.track(em.HAw.NOTIFICATION_VIEWED, { ...t, location: n }), D.A.notificationEvent(e, eT.uj.Viewed);
        },
        trackClick(n) {
            let i = tt.default.isInstanceLocked() ? em.ThZ.LOCKED_OVERLAY : em.ThZ.UNLOCKED_OVERLAY;
            D.A.track(em.HAw.NOTIFICATION_CLICKED, { ...t, location: i, action_type: n }),
                D.A.notificationEvent(e, eT.uj.Clicked);
        },
    };
}
function tf() {
    let e = te.Ay.getOverlayKeybind();
    return null != e ? (0, tl.dI)(e.shortcut, !0).split(" + ") : ["???"];
}
var tA = n(486020),
    tg = n(231723),
    tm = n(833551),
    tE = n(287809),
    ty = n(277888);
function tx() {
    return (0, l.jsx)("div", {
        className: ty.q,
        children: (0, l.jsx)(k.$, { variant: "active", size: "sm", text: U.intl.string(U.t.U76Ft2), fullWidth: !0 }),
    });
}
var tv = n(387755),
    tS = n(956793),
    tC = n(571694),
    tI = n(47167),
    tN = n(621436),
    tT = n(994500),
    tO = n(308368),
    tb = n(334738),
    tD = n(400492),
    tj = n(530789);
let tL = (e) => F(e, tf(), U.t["z8/sgJ"]);
var tw = n(274372),
    tR = n(475358),
    tk = n(176781),
    tM = n(572164);
function tP(e) {
    let { trackView: t, trackClick: n } = t_(eT.KS.ClipsNotification, { notif_type: eT.KS.ClipsNotification });
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
    tV = n(253932),
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
        let i = t ? em.yFH.TIMED_OUT : em.yFH.DISMISSED;
        return setTimeout(() => D.A.updateNotificationStatus(e, i), null != n ? n : tY);
    };
function t$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.yFH.DISMISSED;
    if (null == e) return !1;
    let n = tQ.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = tQ[n];
    clearTimeout(i.timerId), (tQ = [...tQ]), t === em.yFH.DISMISSED ? tQ.splice(n, 1) : (tQ[n] = { ...i, status: t });
}
function t0(e) {
    let t = tQ.length;
    return (tQ = tQ.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function t1(e) {
    let t = tQ.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function t9(e, t) {
    let n = { ...tJ, ...t };
    if (2 !== n.priority && !tt.default.isInstanceFocused()) return null;
    let i = (0, tc.A)(),
        s = { id: i, status: em.yFH.ACTIVE, timerId: tq(i, n.expirationExternallyManaged, n.duration), props: e, ...n },
        l = (tQ = [...tQ]).findIndex((e) => e.priority <= n.priority);
    return -1 === l ? tQ.push(s) : tQ.splice(l, 0, s), tQ.length > 10 && clearTimeout(tQ.pop().timerId), i;
}
function t3(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = t1(t);
    if (!Object.keys(n).includes(tz.default.getId())) return t$(i);
    if (null != i) return !1;
    let s = e9.A.getChannel(t);
    if (
        null == s ||
        !s.isRingable() ||
        ("GUILD_RING_START" === e.type &&
            !tU.A.getCurrentConfig({ guildId: e.guildId, location: "OverlayStartRinging" }).enabled) ||
        tK.A.getStatus() === em.clD.DND ||
        tV.NO.getSetting()
    )
        return !1;
    let l = tQ.find((e) => 1 === e.type && e.channelId === t && e.messageType === em.lAJ.CALL);
    null != l && t$(l.id),
        t9(
            (function (e) {
                let t = (0, tI.m1)(e, tE.default, tT.A),
                    n = U.intl.string(U.t.ssrVzG),
                    i = (0, tC.Y)(e),
                    s = (0, tN.A)(e),
                    { trackView: l, trackClick: a } = t_(eT.KS.IncomingCall, {
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
                    hint: (e) => F(e, tf(), U.t.Odi54y),
                    confirmText: U.intl.string(U.t["0D/6Rz"]),
                    cancelText: U.intl.string(U.t.BVN4pL),
                    onNotificationShow: () => {
                        l();
                    },
                    onConfirmClick: () => {
                        if (em.kvI.CALLABLE.has(e.type)) D.A.callPrivateChannel(e.id);
                        else {
                            if (e.type !== em.rbe.GUILD_VOICE) return;
                            tS.default.selectVoiceChannel(e.id);
                        }
                        a("join"),
                            D.A.track(em.HAw.VOICE_CHANNEL_SELECTED, {
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
class t7 extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            tz.default,
            e9.A,
            tw.A,
            tH.A,
            ei.default,
            tm.default,
            e4.A,
            tG.A,
            tt.default,
            tW.A,
            e5.A,
            tK.A,
            tB.A,
            tE.default,
        );
    }
    getNotifications() {
        return tQ;
    }
}
let t8 = new t7(
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
                  if (tm.default.hasChangedRenderMode(ei.default.getFocusedPID() ?? (0, Q.getPID)()))
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
                                              { trackView: s, trackClick: a } = t_(eT.KS.GoLiveNudge, {
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
                                                  let s = tm.default.isOverlayOOPEnabledForPid(i);
                                                  if (
                                                      (s ? D.A.setInputLocked(!1, i) : D.A.setInstanceLocked(!1),
                                                      null == tE.default.getCurrentUser())
                                                  )
                                                      return;
                                                  let o = s ? { contextKey: tg.KX } : void 0;
                                                  (0, ez.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("27713"),
                                                          n.e("45150"),
                                                      ]).then(n.bind(n, 301400));
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
                                              { trackView: i, trackClick: s } = t_(eT.KS.GoLiveNonVoiceNudge, {
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
                                                  let a = tm.default.isOverlayOOPEnabledForPid(i);
                                                  a ? D.A.setInputLocked(!1, i) : D.A.setInstanceLocked(!1);
                                                  let o = a ? { contextKey: tg.KX } : void 0;
                                                  (0, ez.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("27713"),
                                                          n.e("45150"),
                                                      ]).then(n.bind(n, 301400));
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
                                          hint: tL,
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
                                      { trackView: c, trackClick: u } = t_(d, { notif_type: d });
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
                                              tm.default.isOverlayOOPEnabledForPid((0, Q.getPID)())
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
                  null != s && t9(s, { priority: 2, duration: tZ });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  tQ = tQ.map((e) =>
                      e.status === em.yFH.ACTIVE
                          ? (clearTimeout(e.timerId), { ...e, timerId: tq(e.id, e.expirationExternallyManaged) })
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: n } = e,
                      i = e9.A.getChannel(t),
                      s = tE.default.getUser(n.author?.id);
                  if (null == i || null == s) return !1;
                  if (n.activity?.type === em.xL.JOIN || n.activity?.type === em.xL.JOIN_REQUEST) {
                      if (!(0, tp.lx)(n, t, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, s;
                          if ((td()(null != t.activity, "received null message activity"), n.id === tz.default.getId()))
                              return !1;
                          let l = e4.A.getGame();
                          if (null == l) return !1;
                          switch (t.activity.type) {
                              case em.xL.JOIN:
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
                                          { trackView: c, trackClick: u } = t_(eT.KS.ActivityInvite, {
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
                                          hint: (e) => F(e, tf(), U.t.aB5xLy),
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
                              case em.xL.JOIN_REQUEST:
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
                                          { trackView: o, trackClick: r } = t_(eT.KS.ActivityInvite, {
                                              notif_type: eT.KS.ActivityInvite,
                                              notif_user_id: t.id,
                                              activity_type: em.xL.JOIN_REQUEST,
                                              activity_name: n.name,
                                          });
                                      return {
                                          icon: a,
                                          title: s,
                                          body: l,
                                          hint: (e) => F(e, tf(), U.t.Odi54y),
                                          confirmText: U.intl.string(U.t["fgP/wX"]),
                                          cancelText: U.intl.string(U.t["tpXzJ+"]),
                                          onNotificationShow: () => {
                                              o();
                                          },
                                          onConfirmClick: (t, n) => {
                                              tO.A.sendActivityInvite({
                                                  channelId: e.id,
                                                  type: em.xL.JOIN,
                                                  activity: i,
                                                  location: tt.default.isInstanceLocked()
                                                      ? em.ThZ.LOCKED_OVERLAY
                                                      : em.ThZ.UNLOCKED_OVERLAY,
                                              }),
                                                  r("join"),
                                                  D.A.updateNotificationStatus(n);
                                          },
                                          onCancelClick: (t, n) => {
                                              (0, tb.ack)(
                                                  e.id,
                                                  {
                                                      section: em.JJy.OVERLAY,
                                                      object: em.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                                      objectType: em.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
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
                          let a = t9(s, { priority: 2, expirationExternallyManaged: !0, channelId: e.id });
                          return null != a && tq(a, !1, tX), !0;
                      })(i, n, s);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!tt.default.isInstanceLocked() || tt.default.isPinned(em.uss.TEXT)) &&
                          t === e5.A.getChannelId()) ||
                      tG.A.isNotificationDisabled(eT.KS.TextChat) ||
                      tB.A.disableNotifications ||
                      !(0, tp.lx)(n, t)
                  )
                      return !1;
                  t9(
                      (function (e, t, n, i) {
                          let { icon: s, title: a, body: o } = (0, tp.TB)(e, t, n),
                              { trackView: r, trackClick: d } = t_(eT.KS.TextChat, {
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
                                  i && (0, tD.Ak)(tj.cH, tj.pD), r();
                              },
                              onNotificationClick: () => {
                                  if (tm.default.isOverlayOOPEnabledForPid((0, Q.getPID)())) {
                                      let n = (0, Q.getPID)();
                                      tt.default.isInstanceLocked()
                                          ? (d("unlock"), D.A.setInputLocked(!1, n))
                                          : (d("jump"),
                                            (0, Z.pX)(em.BVt.CHANNEL(e.guild_id, e.id, t.id)),
                                            ea.isPlatformEmbedded && ti.Ay.focus());
                                  } else
                                      (0, Z.pX)(em.BVt.CHANNEL(e.guild_id, e.id)),
                                          d("jump"),
                                          tt.default.isInstanceLocked() && D.A.setInstanceLocked(!1);
                              },
                              onDismissClick: () => {
                                  d("dismiss");
                              },
                          };
                      })(i, n, s, !tH.A.isSoundDisabled(tj.cH)),
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
              CALL_CREATE: t3,
              CALL_UPDATE: t3,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  t$(t1(t));
              },
              GUILD_RING_START: t3,
              GUILD_RING_STOP: function (e) {
                  let { channelId: t, guildId: n, ringing: i } = e;
                  if (!tU.A.getCurrentConfig({ guildId: n, location: "OverlayStopRinging" }).enabled) return !1;
                  i.includes(tz.default.getId()) && t$(t1(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: s } = e,
                      a = e4.A.getGame();
                  return (
                      null != a &&
                      a.id === s &&
                      (n === em.xL.JOIN &&
                          (t = (function (e, t) {
                              let n = e.username,
                                  i = U.intl.format(U.t["Yk+uYG"], { username: "" }),
                                  s = (0, tA.ku)(e),
                                  { trackView: a, trackClick: o } = t_(eT.KS.ActivityUserJoin, {
                                      notif_type: eT.KS.ActivityUserJoin,
                                      notif_user_id: e.id,
                                      activity_type: em.xL.JOIN,
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
                      null != t && void t9(t, { priority: 2, type: 0 }))
                  );
              },
              CLIPS_SAVE_CLIP_START: function (e) {
                  "manual" === e.clipMethod && t9(tP(U.intl.string(U.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  t9(tP(U.intl.string(U.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (function () {
                      let { trackView: e, trackClick: t } = t_(eT.KS.ClipsReminderNotification, {
                              notif_type: eT.KS.ClipsReminderNotification,
                          }),
                          n = te.Ay.getKeybindForAction(em.hCu.SAVE_CLIP),
                          i = (0, tM.TD)();
                      if (null == n || !i) return null;
                      let s = tl.dI(n.shortcut, !0);
                      return {
                          title: U.intl.format(U.t.S5uhCN, {
                              keybind: s,
                              keybindHook: () =>
                                  (0, l.jsx)("span", {
                                      style: { display: "inline-block" },
                                      children: (0, l.jsx)(tR.e, { shortcut: s }),
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
                  null != t && t9(t);
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
            case em.G6Q.TOP_LEFT:
            case em.G6Q.BOTTOM_LEFT:
                e = 0;
                break;
            default:
                t = 0;
        }
        switch (s) {
            case em.G6Q.BOTTOM_LEFT:
            case em.G6Q.BOTTOM_RIGHT:
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
var t2 = n(761935);
function t4(e) {
    let { locked: t, keybind: n } = e,
        i = a.useRef(null),
        s = (0, r.yK)([t8], () => t8.getNotifications()),
        o = (0, r.bG)([tt.default], () => tt.default.getNotificationPositionMode());
    if ((0, r.bG)([tG.A], () => tG.A.isNotificationDisabled(eT.KS.TextChat)) || o === em.G6Q.DISABLED) return null;
    let d = s.filter((e) => !t || e.status !== em.yFH.TIMED_OUT),
        c = (0, v.groupBy)(d, (e) => e.type);
    return (0, l.jsx)(ep, {
        contentDomRef: i,
        observeInterval: 200,
        children: (0, l.jsx)("div", {
            ref: i,
            className: x()(t2.container, t2[o]),
            children: Object.entries(c).map((e) => {
                let [i, s] = e;
                return 0 === s.length
                    ? null
                    : (0, l.jsx)(t6, { locked: t, keybind: n, position: o, notification: s[0] }, i);
            }),
        }),
    });
}
function t6(e) {
    let { notification: t, position: n, keybind: i, locked: s } = e;
    return (0, l.jsx)("div", {
        className: t2.notificationGroup,
        children: (0, l.jsx)(t5, { zIndex: 100, position: n, notification: t, keybind: i, locked: s }, t.id),
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
        null != n && e.button === em.hE4.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY);
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
        let { width: _, height: f } = nd(n, this.size),
            A = t - h,
            g = e - u,
            m = (0, nn.fh)((0, nn.Ly)({ top: A, left: g, bottom: void 0, right: void 0 }, s, l, _, f)),
            E = c ? (0, nn.h1)(m) : nc("RESIZE_SOUTH_EAST", m);
        this.setDOMPositions(E),
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
            { startX: h, startY: p, offsetWidth: _, offsetHeight: f } = this.dragState,
            A = 0,
            g = 0;
        if (null != c) {
            switch (((e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), o)), c)) {
                case "RESIZE_EAST":
                case "RESIZE_SOUTH_EAST":
                case "RESIZE_NORTH_EAST":
                    A -= h - e;
                    break;
                case "RESIZE_WEST":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_NORTH_WEST":
                    A += h - e;
            }
            switch (c) {
                case "RESIZE_SOUTH":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_SOUTH_EAST":
                    g -= p - t;
                    break;
                case "RESIZE_NORTH":
                case "RESIZE_NORTH_WEST":
                case "RESIZE_NORTH_EAST":
                    g += p - t;
            }
            (_ = Math.max(_ + A, i.width)),
                (f = Math.max(f + g, i.height)),
                this.setDOMSize({ width: _, height: f }),
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
var nh = n(43201),
    np = n(967198),
    n_ = n(419354),
    nf = n(922016),
    nA = n(625903),
    ng = n(685399),
    nm = n(508654),
    nE = n(885631),
    ny = n(849380),
    nx = n(420344),
    nv = n(846930),
    nS = n(302505),
    nC = n(366811),
    nI = n(924985),
    nN = n(945886),
    nT = n(72314),
    nO = n(769765),
    nb = n(808728),
    nD = n(458294),
    nj = n(576705),
    nL = n(584569),
    nw = n(763827),
    nR = n(543465),
    nk = n(607567),
    nM = n(534514),
    nP = n(408278),
    nG = n(761508),
    nV = n(689175),
    nU = n(683071),
    nz = n(270003),
    nH = n(452027),
    nW = n(243721),
    nK = n(331322),
    nB = n(144228),
    nF = n(691885),
    nY = n(305866),
    nZ = n(187322),
    nX = n(428678),
    nJ = n(834730),
    nQ = n(110649);
let nq = 0,
    n$ = (e) => {
        switch (e) {
            case em.G6Q.TOP_LEFT:
                return U.intl.string(U.t.xlchpU);
            case em.G6Q.TOP_RIGHT:
                return U.intl.string(U.t["4uHRHH"]);
            case em.G6Q.BOTTOM_LEFT:
                return U.intl.string(U.t.ovWFnD);
            case em.G6Q.BOTTOM_RIGHT:
                return U.intl.string(U.t["M/9V75"]);
            default:
                return U.intl.string(U.t.AlY4Za);
        }
    },
    n0 = [em.G6Q.DISABLED, em.G6Q.TOP_LEFT, em.G6Q.TOP_RIGHT, em.G6Q.BOTTOM_LEFT, em.G6Q.BOTTOM_RIGHT];
function n1(e) {
    let { position: t, onChange: n } = e,
        [i] = a.useState(() => `notification-position-selector-${nq++}`),
        s =
            t === em.G6Q.DISABLED
                ? U.intl.string(U.t.R6LxVf)
                : U.intl.formatToPlainString(U.t["XXHDM/"], { position: n$(t) });
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(nZ.vN, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)("div", {
                    className: x()(nQ.iE, { [nQ.wX]: t === em.G6Q.DISABLED }),
                    children: n0.map((e) =>
                        (0, l.jsxs)(
                            "label",
                            {
                                className: x()({
                                    [nQ.wH]: e === t,
                                    [nQ.r9]: e === em.G6Q.DISABLED,
                                    [nQ.O3]: e === em.G6Q.TOP_RIGHT,
                                    [nQ.lA]: e === em.G6Q.TOP_LEFT,
                                    [nQ.oF]: e === em.G6Q.BOTTOM_RIGHT,
                                    [nQ.RV]: e === em.G6Q.BOTTOM_LEFT,
                                }),
                                children: [
                                    n$(e),
                                    e === em.G6Q.DISABLED
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
n1.Positions = em.G6Q;
var n9 = n(540999),
    n3 = n(93465),
    n7 = n(14552);
function n8() {
    let e = tt.default.getNotificationPositionMode(),
        t = e !== em.G6Q.DISABLED,
        n = te.Ay.getOverlayKeybind(),
        i = te.Ay.getOverlayChatKeybind();
    D.A.track(em.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: tG.A.isNotificationDisabled(eT.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: tt.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, tl.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, tl.dI)(i.shortcut) : null,
    });
}
class n5 extends a.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        D.A.track(em.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        D.A.setNotificationDisabledSetting(n3.M.TEXT_CHAT, !this.props.textChatDisabled), n8();
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        D.A.setNotificationDisabledSetting(n3.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        D.A.setNotificationPositionMode(t), n8();
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
            className: n7.wx,
            children: [
                (0, l.jsxs)(eX.A, {
                    children: [
                        (0, l.jsx)(nM.D, {
                            variant: "heading-md/semibold",
                            className: n7.qd,
                            children: U.intl.string(U.t["35G2Mq"]),
                        }),
                        (0, l.jsx)("div", {
                            className: n7.Q7,
                            children: (0, l.jsx)(nP.K, {
                                variant: "icon-only",
                                size: "md",
                                icon: w.P,
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
            t = n9.A.isDeveloper
                ? (0, l.jsx)(nG.V.Item, { id: "DEVELOPER", className: n7.YU, children: "Developer" })
                : null;
        return (0, l.jsxs)(nG.V, {
            selectedItem: e,
            type: "top",
            className: n7.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, l.jsx)(nG.V.Item, { id: "GENERAL", className: n7.YU, children: U.intl.string(U.t["0FYxxw"]) }),
                (0, l.jsx)(nG.V.Item, { id: "VOICE", className: n7.YU, children: U.intl.string(U.t["3WeSiE"]) }),
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
            nV.Ch,
            {
                className: n7.Qs,
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
            n = !tG.A.isNotificationDisabled(eT.KS.TextChat),
            i = e !== em.G6Q.DISABLED;
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
                        { value: em.OSZ.LARGE, name: U.intl.string(U.t.YcOxtr) },
                        { value: em.OSZ.SMALL, name: U.intl.string(U.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, l.jsx)(nB.z, {
                    label: U.intl.string(U.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: em.pwA.ALWAYS, name: U.intl.string(U.t.nBmDrT) },
                        { value: em.pwA.ONLY_WHILE_SPEAKING, name: U.intl.string(U.t["2OvIZY"]) },
                        { value: em.pwA.NEVER, name: U.intl.string(U.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, l.jsx)(nB.z, {
                    label: U.intl.string(U.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: em.f5z.ALWAYS, name: U.intl.string(U.t.nBmDrT) },
                        { value: em.f5z.ONLY_WHILE_SPEAKING, name: U.intl.string(U.t["2OvIZY"]) },
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
            className: n7.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
}
function n2(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatDisabled: o,
            shouldShowInviteNotification: d,
        } = (0, r.cf)([tt.default, tG.A], () => ({
            avatarSizeMode: tt.default.getAvatarSizeMode(),
            displayNameMode: tt.default.getDisplayNameMode(),
            displayUserMode: tt.default.getDisplayUserMode(),
            notificationPositionMode: tt.default.getNotificationPositionMode(),
            textChatDisabled: tG.A.isNotificationDisabled(eT.KS.TextChat),
            shouldShowInviteNotification: !tG.A.isNotificationDisabled(eT.KS.ActivityInvite),
        })),
        c = (0, ta.Mn)("OverlaySettingsPopout"),
        u = (0, r.bG)([tB.A], () => tB.A.enabled);
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
let n6 = function (e) {
    let t,
        { title: n, header: i, children: s, renderSettings: o, onDragStart: r } = e,
        d = a.useRef(null);
    return (
        (t =
            null != n
                ? (0, l.jsxs)(eI.Bar, {
                      className: x()(n4.wx, n4.bl),
                      onMouseDown: r,
                      children: [
                          (0, l.jsx)(eI.Content, { className: x()(n4.qd, n4.bl), dynamicSize: !0, children: n }),
                          (0, l.jsx)(eI.Content, {
                              children: (0, l.jsx)(nf.Y, {
                                  targetElementRef: d,
                                  position: "right",
                                  renderPopout: o ?? em.tEg,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, l.jsx)(eI.Icon, {
                                          ...e,
                                          icon: nA.Z,
                                          label: U.intl.string(U.t["3D5yo/"]),
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
var ie = n(349828),
    it = n(602679);
class ii extends a.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    settingsIconRef = a.createRef();
    state = {
        controller: new n_.Controller({ value: 1, immediate: !0 }),
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
        return (0, l.jsx)(n2, { onClose: t });
    }
    handleScroll = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, nE.A)(t);
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
            r = n?.id === ie.Vc ? ny.T : ny.B;
        return (0, l.jsxs)(n6, {
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
                          children: (0, l.jsx)(nf.Y, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, l.jsx)(eI.Icon, {
                                      ref: this.settingsIconRef,
                                      icon: nA.Z,
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
                        children: (0, l.jsx)(nS.A, { guildId: n.id }),
                    }),
            ],
        });
    }
}
function is(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([e3.A], () => e3.A.getGuild(t)),
        i = (0, r.bG)([nb.Ay], () => nb.Ay.getChannels(t)),
        s = (0, r.bG)([nO.A], () => nO.A.getCategories(t)),
        { mutedChannels: a, collapseMuted: o } = (0, r.cf)([nR.Ay], () => ({
            mutedChannels: nR.Ay.getMutedChannels(t),
            collapseMuted: nR.Ay.isGuildCollapsed(t),
        })),
        d = (0, r.bG)([nk.Ay], () => nk.Ay.getVoiceStates(t)),
        c = (0, r.bG)([nN.A], () => nN.A.getCollapsed()),
        { scrollTo: u } = (0, r.bG)([nT.A], () => nT.A.getGuildDimensions(t)),
        h = (0, nC.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        p = (0, r.bG)([e5.A], () => e5.A.getVoiceChannelId()),
        _ = (0, r.bG)([nj.A], () => nj.A.getGuildVersion(t)),
        f = (0, r.bG)([nI.A], () => nI.A.version),
        A = (0, r.bG)([nD.default], () => nD.default.getGuildChangeSentinel(t)),
        g = (0, ng.a1)(n?.id),
        m = (0, nm.vj)(n?.id),
        E = n?.features.has(em.GuildFeatures.COMMUNITY) ?? !1,
        y = (0, r.bG)([nw.A], () => nw.A.getChannelId()),
        x = (0, r.bG)([nL.A], () => nL.A.desyncedVoiceStatesCount);
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
        rtcConnectedChannelId: y,
        rtcDesyncedVoiceStatesCount: x,
        collapsedChannels: c,
        collapseMuted: o,
        guildReadStateSentinel: A,
        permissionVersion: _,
        categoryCollapseVersion: f,
        embeddedAppsByChannel: g,
        activeEventsByChannel: m,
        showNewUnreadsBar: E,
        optInEnabled: !1,
    });
}
var il = n(58923),
    ia = n(793322),
    io = n(481171);
let ir = () => (0, ia.WU)("DM_SEARCH"),
    id = a.memo(function () {
        let e = (0, r.bG)([tt.default], () => (tt.default.isLocked((0, Q.getPID)()) ? "true" : "false")),
            t = (0, nC.A)((e) => {
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
                (0, l.jsx)(il.A, { padding: 8, theme: em.NJ8.DARK, version: e, selectedChannelId: t }),
                (0, l.jsx)("section", {
                    className: io.C3,
                    "aria-label": U.intl.string(U.t.StREWK),
                    children: (0, l.jsx)(nS.A, { guildId: null }),
                }),
            ],
        });
    });
var ic = n(929284);
function iu(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)(n2, { onClose: t });
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
                    : (0, l.jsx)(n6, {
                          title: U.intl.string(U.t.YUU0RF),
                          renderSettings: iu,
                          onDragStart: this.onDragStart,
                          children: (0, l.jsx)(id, {}),
                      }),
            a = n ? "div" : eI;
        return (0, l.jsxs)(a, {
            className: x()(ic.E, { [ic.H]: !n }, i),
            children: [(0, l.jsx)(nh.A, { isOverlay: !0, disableAppDownload: !0, isVisible: !t }), s],
        });
    }
}
let ip = r.Ay.connectStores([np.A], () => ({ selectedGuildId: np.A.getGuildId() }))(ih);
var i_ = n(465532),
    iA = n(720149),
    ig = n(414798),
    im = n(748934),
    iE = n(480870),
    iy = n(878431),
    ix = n(128783),
    iv = n(578434),
    iS = n(80683),
    iC = n(355622),
    iI = n(408018),
    iN = n(192829),
    iT = n(201349),
    iO = n(692051),
    ib = n(451909),
    iD = n(926262),
    ij = n(186168),
    iL = n(118517),
    iw = n(853145),
    iR = n(522556),
    ik = n(31717),
    iM = n(517019),
    iP = n(232835),
    iG = n(625494),
    iV = n(806150),
    iU = n(799808),
    iz = n(978940),
    iH = n(960027),
    iW = n(115354),
    iK = n(609731),
    iB = n(788120),
    iF = n(772838),
    iY = n(742589),
    iZ = n(683442),
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
    i9 = (0, iq.Ld)();
class i3 extends a.PureComponent {
    initialValue = 100 * this.props.opacity;
    handleUpdateBackgroundOpacity(e) {
        D.A.setTextWidgetOpacity(i$(e / 100)), D.A.track(em.HAw.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
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
                    onMarkerRender: em.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": i9,
                }),
            }),
        });
    }
}
let i7 = r.Ay.connectStores([tt.default], () => ({ opacity: tt.default.getTextWidgetOpacity() }))(i3);
var i8 = n(798805);
class i5 extends a.Component {
    state = { showOpacitySlider: !1 };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    handleClickCall = (e) => {
        let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
        if (i) n ? tS.default.selectVoiceChannel(null) : D.A.callPrivateChannel(t.id, !1);
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
            ? (0, l.jsxs)(eI.Bar, {
                  className: i8.dl,
                  children: [
                      (0, l.jsx)(i7, {}),
                      (0, l.jsx)(iY.A.Icon, {
                          icon: w.P,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: U.intl.string(U.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, l.jsx)(eI.Background, {
                  opacityOverride: n || d ? null : 1,
                  children: (0, l.jsx)("div", {
                      className: x()(e, t, i8.N1),
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
                                        className: x()(i8.co, t),
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
function i2(e) {
    let { channel: t, ...n } = e,
        i = (0, r.bG)([e5.A, e9.A], () => {
            let e = e5.A.getVoiceChannelId();
            return e9.A.getChannel(e);
        }),
        s = (0, r.bG)([e3.A], () => e3.A.getGuild(t.guild_id)),
        a = (0, r.bG)([iJ.A], () => iJ.A.isCallActive(t.id)),
        o = (0, tI.Ay)(t),
        d = (0, r.bG)([tT.A], () => !!t.isDM() && null != t.getRecipientId() && tT.A.isBlocked(t.getRecipientId()));
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
    i6 = n(650583),
    se = n(463912);
let st = eT.Li.TOP;
class sn extends a.Component {
    textAreaRef = a.createRef();
    constructor(e) {
        super(e), ik.A.addChangeListener(this.draftDidChange);
        const t = ik.A.getDraft(e.channel.id, ik.C.ChannelMessage);
        (this.state = { ...(0, iI.ur)(t), focused: !1, contentWarningProps: null }),
            iG._.subscribe(em.jej.TEXTAREA_FOCUS, this.focusInput),
            iG._.subscribe(em.jej.TEXTAREA_BLUR, this.blurInput);
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 });
    }
    componentWillUnmount() {
        ik.A.removeChangeListener(this.draftDidChange),
            iG._.unsubscribe(em.jej.TEXTAREA_FOCUS, this.focusInput),
            iG._.unsubscribe(em.jej.TEXTAREA_BLUR, this.blurInput);
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = ik.A.getDraft(t.channel.id, ik.C.ChannelMessage);
            n !== i && "" === i && e.setState((0, iI.ur)(i));
        };
    })();
    handleTextareaKeyDown = (e) => {
        if (
            e.key === i6.dh.ARROW_UP &&
            !e.shiftKey &&
            !e.altKey &&
            !e.ctrlKey &&
            !e.metaKey &&
            0 === this.state.textValue.length
        ) {
            e.preventDefault();
            let { channel: t } = this.props,
                n = iP.A.getLastEditableMessage(t.id);
            null != n && iA.A.startEditMessageRecord(t.id, n);
        }
    };
    handleTextareaChange = (e, t, n) => {
        let {
            channel: { id: i },
        } = this.props;
        i_.A.changeDraft(i, this.state.textValue, ik.C.ChannelMessage),
            "" !== t ? ig.A.startTyping(i) : ig.A.stopTyping(i),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, iV.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: iC.oU.OVERLAY,
                  content: t,
                  channel: n,
              }).then((e) => {
                  let { valid: l, failureReason: a } = e;
                  if (!l)
                      return a === em.X8x.SLOWMODE_COOLDOWN
                          ? (iG._.dispatch(em.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let o = iA.A.getSendMessageOptionsForReply(i);
                  return (iA.A.sendMessage(n.id, ib.Ay.parse(n, t), !0, { ...o, location: i4.Hx.OVERLAY }),
                  this.setState((0, iI.N3)()),
                  (0, iL.Jx)(n.id),
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
            draftType: ik.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, iI.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: i, textValue: s, contentWarningProps: a, richValue: o } = this.state,
            r = (0, l.jsx)(nf.Y, {
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
                        type: iC.oU.OVERLAY,
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
            : (0, l.jsx)(iS.A, { channel: e, children: r }, e.id);
    }
}
class si extends a.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        (0, iU.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                D.A.track(em.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id });
    }
    componentDidMount() {
        (0, iU.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        D.A.track(em.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: em.uss.TEXT,
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
        let _ = o || u,
            f = (0, tI.m1)(t, tE.default, tT.A),
            A = !i && null != t && t.isNSFW(),
            g = !_ || r;
        return (
            (e =
                A && null != s
                    ? (0, l.jsx)(iR.A, { guild: s, channelId: t.id })
                    : (0, l.jsx)(
                          ij.A,
                          {
                              channel: t,
                              className: se.Wk,
                              forceCompact: c,
                              showNewMessagesBar: !_,
                              scrollerClassName: c ? se.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, l.jsx)(iO.Y.Provider, {
                value: { disableInteractions: c && o && !r, disableAnimations: c && _ && !r },
                children: (0, l.jsxs)(a.Fragment, {
                    children: [
                        !o && !u && (0, l.jsx)(ix.A, { channel: t, guild: s }),
                        (0, l.jsx)(eI.Background, {
                            opacityOverride: o || u ? null : st,
                            children: (0, l.jsx)("div", {
                                className: x()(se.MJ, { [se.Id]: h, [se.$p]: c && o && !r }),
                                children: e,
                            }),
                        }),
                        A
                            ? null
                            : (0, l.jsx)("div", {
                                  children: g
                                      ? (0, l.jsx)(eI.Background, {
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
                                                        children: (0, l.jsx)(im.Ay, {
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
                                            children: (0, l.jsx)(eI.Background, {
                                                opacityOverride: eT.Li.LOWER,
                                                children: (0, l.jsx)("div", {
                                                    className: x()(se.ew, se.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != f && f.length > 0
                                                            ? U.intl.formatToPlainString(U.t["9TkYMO"], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? f : `#${f}`,
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
                let { default: e } = await Promise.all([n.e("97262"), n.e("84442"), n.e("39778"), n.e("44031")]).then(
                    n.bind(n, 385913),
                );
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
            r = em.UVF.UNPINNED;
        i ? (r = em.UVF.IN_GAME_ACTIVE) : (n && t) || s ? (r = em.UVF.IN_GAME_TEXT) : n && (r = em.UVF.PINNED);
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
        return (0, l.jsx)(eI, {
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
                (0, l.jsx)(i2, {
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
        s = (0, r.bG)([e5.A], () => e5.A.getChannelId(i)),
        a = (0, r.bG)([e9.A], () => e9.A.getChannel(s)),
        o = (0, r.bG)([te.Ay], () => te.Ay.getOverlayChatKeybind()),
        d = null != o ? (0, tl.dI)(o.shortcut, !0) : "]",
        [c, u, h] = (0, r.yK)([tt.default], () => [
            tt.default.getTextWidgetOpacity(),
            tt.default.getActiveRegions(),
            !t && tt.default.isPreviewingInGame(),
        ]),
        p = (0, r.bG)([e3.A], () => e3.A.getGuild(i)),
        _ = (0, r.bG)([iM.A], () => null != i && iM.A.didAgree(i)),
        f = null != a && a.isPrivate() ? a.getRecipientId() : null,
        A = (0, r.bG)([iw.A], () => (null != s ? iw.A.getPendingReply(s) : void 0)),
        g = (0, r.bG)([tE.default], () => (null != f ? tE.default.getUser(f) : null)),
        { placeholder: m } = (0, iE.A)({ channel: a });
    return null != a && null != p && em.kvI.GUILD_THREADS_ONLY.has(a.type)
        ? (0, l.jsx)(iy.A, {})
        : (0, l.jsx)(si, {
              guild: p,
              channel: a,
              user: g,
              opacity: c,
              nsfwAgree: _,
              chatKeybind: d,
              activated: u.has(em.ajI.TEXT_WIDGET),
              isPreviewingInGame: h,
              pendingReply: A,
              contained: t,
              placeholder: m,
              widget: em.uss.TEXT,
              ...n,
          });
}
var sl = n(946912);
function sa(e) {
    let { dragStart: t, dragging: n, pinned: i, locked: s, className: a } = e;
    return (0, l.jsxs)(eI, {
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
    s_ = n(137177),
    sf = n(652896),
    sA = n(277680),
    sg = n(118277),
    sm = n(22705),
    sE = n(994314),
    sy = n(63995),
    sx = n(69407),
    sv = n(520006),
    sS = n(344548),
    sC = n(481947),
    sI = n(760751),
    sN = n(485296),
    sT = n(996439),
    sO = n(427262),
    sb = n(936504),
    sD = n(83107),
    sj = n(831544),
    sL = n(990836),
    sw = n(597601),
    sR = n(827343),
    sk = n(951001),
    sM = n(42473),
    sP = n(830618),
    sG = n(999751),
    sV = n(977997),
    sU = n(572487),
    sz = n(864653),
    sH = n(395766);
class sW extends a.PureComponent {
    rtcConnectionStatusRef = a.createRef();
    handleToggleSelfMute = () => {
        let { context: e } = this.props;
        sR.A.toggleSelfMute({ context: e, location: "Overlay Controls" });
    };
    handleToggleSelfDeaf = () => {
        let { context: e } = this.props;
        sR.A.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
    };
    handleDisconnect() {
        tS.default.selectVoiceChannel(null);
    }
    renderPopout = (e) => {
        let { lobbyId: t } = this.props;
        return (0, l.jsx)(sP.A, { channelId: e, lobbyId: t, isOverlay: !0 });
    };
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, tI.m1)(e, tE.default, tT.A),
            i = null != t ? `${n} / ${t.name}` : n,
            s = null != t ? t.id : em.ME;
        return (0, l.jsx)(sb.N_, {
            to: em.BVt.CHANNEL(s),
            onClick: (t) => {
                t.stopPropagation(), sk.A.channelListScrollTo(s, e.id);
            },
            children: (0, l.jsx)(sE.A, { className: sH.Ix, children: i }),
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
            : (0, l.jsx)(eI.Bar, {
                  className: x()(e, sz.ne, { [sz.CW]: !n }),
                  children: (0, l.jsxs)(eI.Content, {
                      className: x()(t, sz.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, l.jsx)("div", {
                              className: sH.vW,
                              children: (0, l.jsx)(nf.Y, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, l.jsx)(b.D, {
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
                          (0, l.jsxs)(eX.A, {
                              grow: 0,
                              children: [
                                  (0, l.jsx)(sM.A, {
                                      tooltipText: u ? U.intl.string(U.t.YqAjXy) : U.intl.string(U.t.w4m945),
                                      icon: u ? sD.z : sj.c,
                                      iconForeground: u ? sz.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, l.jsx)(sM.A, {
                                      tooltipText: c ? U.intl.string(U.t["2US872"]) : U.intl.string(U.t.wjcRFX),
                                      icon: c ? sL.c : sw.L,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: c ? sz.of : null,
                                  }),
                                  null == i &&
                                      (0, l.jsx)(sM.A, {
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
        a = (0, r.bG)([e3.A], () => e3.A.getGuild(i?.getGuildId())),
        o = (0, r.bG)([sV.A], () => null != i && sV.A.hasVideo(i.id)),
        [d, c] = (0, r.yK)([e8.Ay], () => [
            e8.Ay.isSelfMute(t) || e8.Ay.isSelfMutedTemporarily(t),
            e8.Ay.isSelfDeaf(t),
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
            size: c = em.OSZ.LARGE,
            onClick: u,
            onContextMenu: h,
            context: p,
            guildId: _,
            voiceState: f,
        } = e,
        A = (0, r.bG)([e8.Ay], () => e8.Ay.isLocalMute(i.id)),
        g = (0, r.bG)([e1.A], () => e1.A.getCurrentUserActiveStream()),
        m = (0, r.yK)([e1.A], () => (null != g ? e1.A.getViewerIds(g) : [])),
        E = (0, sh.A)({ userId: i.id, context: p }),
        y = (0, r.bG)([sN.A], () => sN.A.isPrioritySpeaker(i.id, p)),
        v = (0, r.bG)([e1.A], () => null != e1.A.getStreamForUser(i.id, _)),
        S = a.useMemo(() => null != g && g.ownerId !== i.id && m.includes(i.id), [g, i.id, m]);
    if (d === em.f5z.ONLY_WHILE_SPEAKING && n && !E) return null;
    let { mute: C, selfMute: I, suppress: N, deaf: T, selfDeaf: O } = f;
    return (0, l.jsx)(sC.Ay, {
        guildId: _,
        onClick: n ? void 0 : (e) => u?.(e, i),
        onContextMenu: n ? void 0 : (e) => h?.(e, i),
        className: x()(sF.TX, { [sF.zj]: !E, [sF.bG]: !n }),
        user: i,
        nick: s,
        speaking: !1,
        flipped: t,
        isStreaming: v,
        iconClassName: x()(sF.Ow, { [sF.xt]: n }),
        isWatching: S,
        isOverlay: !0,
        size: c,
        priority: y,
        mute: C || I || A,
        localMute: A,
        serverMute: C || N,
        deaf: T || O,
        serverDeaf: T,
        userNameClassName: x()(sF.Xh, {
            [sF.xt]: n,
            [sF.R]: n && (o === em.pwA.NEVER || (!E && o === em.pwA.ONLY_WHILE_SPEAKING)),
        }),
    });
}
class sZ extends a.PureComponent {
    static defaultProps = { context: sB.x.DEFAULT };
    handleUserContextMenu = (e, t) => {
        let { context: i } = this.props;
        (0, eH.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(n.bind(n, 668569));
            return (n) => (0, l.jsx)(e, { ...n, user: t, showMediaItems: !0, mediaEngineContext: i });
        });
    };
    handleOpenVoiceSettings = () => {
        let { context: e, channel: t, title: i } = this.props;
        (0, ez.openModalLazy)(async () => {
            let { default: s } = await n.e("18912").then(n.bind(n, 880510));
            return (n) => (0, l.jsx)(s, { ...n, mediaEngineContext: e, subtitle: null != t ? void 0 : i });
        });
    };
    handlePin = () => {
        let e = !this.props.pinned;
        D.A.track(em.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: em.uss.VOICE,
        });
        let { id: t } = this.props;
        (0, ne.v0)(t);
    };
    handleStopStream = () => {
        let { stream: e } = this.props;
        null != e && su.vN((0, sf._z)(e));
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
        return (0, l.jsx)(eI.Body, {
            className: x()({ [sr.A.VOICE_WIDGET_TOP_MARGIN]: s, [sF.mn]: s }),
            children: (0, l.jsx)(sC.Wr, { className: sF.tA, children: u }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, l.jsxs)(eI.Bar, {
            className: x()(sF.bl, { [sF.VH]: n }),
            children: [
                (0, l.jsxs)(eI.Content, {
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
                    : (0, l.jsx)(eI.Icon, {
                          icon: nA.Z,
                          label: U.intl.string(U.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, l.jsx)(eI.Icon, {
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
        let { sanitizedTitle: d, title: c } = (0, sA.A)(a);
        return (0, l.jsx)(eI.Bar, {
            className: x()(sF.Wm, { [sF.R]: n, [sF.CW]: !t }),
            children: (0, l.jsxs)(eI.Content, {
                className: sF.Vb,
                dynamicSize: !0,
                children: [
                    (0, l.jsxs)("div", {
                        className: sF.gk,
                        children: [
                            o?.id != null && o.id === s?.id
                                ? (0, l.jsx)(s_.A, { className: sF.Gt, game: s })
                                : (0, l.jsx)(sg.A, { title: d }),
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
                                    (0, l.jsx)(sE.A, { children: o?.name ?? c }),
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
                                    appContext: em.BRT.OVERLAY,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: sF.yf,
                                children: (0, l.jsx)(sS.A, { stream: r, appContext: em.BRT.OVERLAY }),
                            }),
                            (0, l.jsx)("div", {
                                className: sF.yf,
                                children: (0, l.jsx)(eA.m, {
                                    asContainer: !0,
                                    text: U.intl.string(U.t.S5anIc),
                                    children: (0, l.jsx)(b.D, {
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
        let o = em.UVF.UNPINNED;
        return (
            i && (o = em.UVF.PINNED),
            s && (o = em.UVF.IN_GAME_PREVIEW),
            n && (o = em.UVF.IN_GAME),
            (0, l.jsxs)(eI, {
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
    let t = (0, r.bG)([e5.A, e9.A], () => e9.A.getChannel(e5.A.getVoiceChannelId())),
        n = (0, tI.Ay)(t),
        i = (function () {
            let [e] = (0, r.bG)(
                [nk.Ay, sy.A, e5.A, e9.A],
                () => {
                    let e = e9.A.getChannel(e5.A.getVoiceChannelId());
                    return null == e
                        ? [[], -1]
                        : e.isGuildStageVoice()
                          ? [sy.A.getMutableParticipants(e.id, sx.ip.SPEAKER), sy.A.getParticipantsVersion(e.id)]
                          : [nk.Ay.getVoiceStatesForChannel(e), nk.Ay.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                sT.D,
            );
            return e;
        })(),
        s = (0, r.bG)([e1.A], () => e1.A.getStreamerActiveStreamMetadata()),
        a = (0, r.bG)([eJ.Ay, e4.A, sI.A], () => {
            let e = (0, eq.A)(eJ.Ay, e4.A);
            return null != e ? sI.A.findGame(e)?.id : null;
        }),
        o = (0, sp.h)(a),
        d = (0, r.cf)([eJ.Ay, e4.A, e1.A, tt.default], () => {
            let e = (0, eq.A)(eJ.Ay, e4.A),
                t = e1.A.getCurrentUserActiveStream();
            return {
                displayUserMode: tt.default.getDisplayUserMode(),
                displayNameMode: tt.default.getDisplayNameMode(),
                avatarSizeMode: tt.default.getAvatarSizeMode(),
                streamApplication: s?.pid === (0, Q.getPID)() ? (0, sm.A)(e) : null,
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
    [em.uss.TEXT](e) {
        let { dragging: t, locked: n, pinned: i, dragStart: s, className: a } = e;
        return (0, l.jsx)(ss, { dragStart: s, locked: n, pinned: i, dragging: t, className: a });
    },
    [em.uss.GUILDS](e) {
        let { locked: t, dragStart: n, className: i } = e;
        return (0, l.jsx)(ip, { dragStart: n, locked: t, className: i });
    },
    [em.uss.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: i, locked: s, pinned: a } = e;
        return (0, l.jsx)(sX, { anchor: n, id: t, locked: s, pinned: a, widget: em.uss.VOICE, isPreviewingInGame: i });
    },
    [em.uss.GUILDS_TEXT](e) {
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
            (D.A.track(em.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
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
                widget_type: e7.A.getWidgetType(t),
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
            _ = (0, nn.Nv)(u, n),
            { resizeX: f, resizeY: A, dragAnywhere: g } = t,
            m = (0, iU.AE)({ locked: i, isPreviewingInGame: s, pinned: r }),
            E = { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
            y = this.renderWidget(e, _, p);
        return null == y
            ? null
            : (0, l.jsx)(nu, {
                  id: o,
                  size: p,
                  anchor: _,
                  container: E,
                  minSize: h,
                  hidden: !m,
                  resizeX: f,
                  resizeY: A,
                  style: { zIndex: d },
                  dragAnywhere: g,
                  active: !i || a,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: y,
              });
    }
}
let sq = r.Ay.connectStores([e7.A, tt.default], (e) => {
    let { widgetId: t } = e,
        n = e7.A.getWidget(t),
        i = tt.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? e7.A.getWidgetConfig(n.type) : null,
        locked: tt.default.isInstanceLocked(),
        isPreviewingInGame: tt.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === em.uss.TEXT && i.has(em.ajI.TEXT_WIDGET),
    };
})(sQ);
function s$(e, t) {
    return (0, l.jsx)(sq, { widgetId: e, layoutSize: t }, e);
}
let s0 = r.Ay.connectStores([e7.A, tn.A], () => ({
    layout: e7.A.getLayout(Q.OVERLAY_LAYOUT_ID) ?? void 0,
    layoutSize: tn.A.windowSize(),
    renderWidget: s$,
}))(nt);
var s1 = n(873263),
    s9 = n(686956),
    s3 = n(549711),
    s7 = n(463347);
class s8 extends a.Component {
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
            return { guildId: null != t && "" !== t ? t : em.ME, channelId: n, messageId: i };
        })(e);
        (0, s7.nn)(t) && (0, s7.ts)(n)
            ? (s9.A.selectGuild(t), tS.default.selectChannel({ guildId: t, channelId: n, messageId: i }))
            : (0, Z.bG)(em.BVt.ME);
    }
    render() {
        return null;
    }
}
let s5 = () =>
    (0, l.jsxs)(s1.dO, {
        children: [
            (0, l.jsx)(s3.A, {
                path: em.BVt.CHANNEL(s7.pv.guildId(), s7.pv.channelId({ optional: !0 }), ":messageId?"),
                component: s8,
            }),
            (0, l.jsx)(s3.A, { component: s8 }),
        ],
    });
var s2 = n(528772),
    s4 = n(944775),
    s6 = n(317084),
    le = n(427603),
    lt = n(980504),
    ln = n(402622);
function li() {
    let [e, t] = (0, r.yK)([s2.A], () => [s2.A.enabled, s2.A.keepOpen]),
        n = (0, r.bG)([e5.A], () => e5.A.getVoiceChannelId()),
        i = (0, r.bG)([e9.A], () => e9.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, l.jsx)("div", {
              className: ln.H,
              children: (0, l.jsx)(s6.A, {
                  width: lt.ed.width,
                  height: lt.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, le.A)();
                      null != e && (0, s4.Lk)(e);
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
            a = s ? b.D : "div";
        return (0, l.jsx)(a, {
            className: x()(ls.LK, { [ls.Zo]: !s, [ls.vZ]: s, [ls.Az]: !s && i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === em.hE4.PRIMARY && t === i && n();
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
        const t = e.locked && tt.default.isPinned(em.uss.TEXT);
        eB.A.setLayout(t ? eK.dY : eK.CJ), t && eB.A.enable();
    }
    handleLock() {
        (0, ez.hasAnyModalOpen)() || e6.A.isOpen() || D.A.setInputLocked(!0, (0, Q.getPID)());
    }
    handleDeactivate() {
        D.A.deactivateAllRegions();
    }
    debouncedForceUpdate = eG()(() => {
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
                    D.A.track(em.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (ll = null);
                }
                eB.A.disable(),
                    (this.activeKeyEventShapes = []),
                    tt.default.isPinned(em.uss.TEXT) && (eB.A.setLayout(eK.dY), eB.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", la, !1),
                    null == ll && ((ll = Date.now()), D.A.track(em.HAw.OVERLAY_UNLOCKED)),
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
        D.A.track(em.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: tt.default.isPinned(em.uss.TEXT),
            overlay_render_method: $.Ue[$.Ue.Hook],
            unpinned_widget_types: e7.A.getAllUnpinnedPinnedWidgets(Q.OVERLAY_LAYOUT_ID),
        });
        let c = s && !a && null != d,
            u = t && null != o && null != r,
            h = tG.A.isNotificationDisabled(eT.KS.WelcomeNudge),
            p = tG.A.isNotificationDisabled(eT.KS.GoLiveNudge);
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
                    D.A.track(em.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * J.A.Millis.MINUTE })),
                ti.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    tt.default.getDisableExternalLinkAlert() || t === e2.A.getLastURL()
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
        t.keyCode === eM().codes.esc && s && l.has(em.ajI.TEXT_WIDGET) && D.A.deactivateAllRegions();
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
                (0, l.jsx)(s5, {}),
                a && (0, l.jsx)("header", { className: ls.tk, children: U.intl.string(U.t.iOq96m) }),
                i,
                (!e || o.has(em.ajI.TEXT_WIDGET)) &&
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
                (0, l.jsx)(t4, { locked: u, keybind: t }),
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
        c = (0, r.bG)([e5.A], () => e5.A.getVoiceChannelId()),
        u = (0, r.bG)([e9.A], () => e9.A.getChannel(c)),
        h = (0, r.bG)([e3.A], () => (null != u ? e3.A.getGuild(u.guild_id) : null)),
        p = (0, r.bG)([eJ.Ay, e4.A], () => (0, eq.A)(eJ.Ay, e4.A)),
        _ = (0, r.bG)([e8.Ay], () => (0, eQ.A)(e8.Ay)),
        f = (0, r.bG)([e1.A], () => null != e1.A.getCurrentUserActiveStream()),
        { analyticsLocations: A } = (0, eZ.Ay)(eY.A.OVERLAY);
    return (
        a.useEffect(() => {
            t && (0, ta.E)();
        }, [t]),
        (0, l.jsx)(eZ.f5, {
            value: A,
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
                canGoLive: _,
                isStreaming: f,
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
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 200330));
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
    n(937982),
    __OVERLAY__ &&
        tu.h.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
            let { guildId: t, channelId: n, messageId: i } = e;
            (0, Z.bG)({ pathname: em.BVt.CHANNEL(t, n, i) });
        }),
    n(921955),
    r.Ay.initialize();
let l_ = function () {
    return (
        a.useEffect(
            () => (
                m.A.initialize(),
                h.A.initialize(),
                E.A.init(),
                () => {
                    m.A.terminate(), h.A.terminate();
                }
            ),
            [],
        ),
        (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(p.A, {}),
                (0, l.jsx)(u.N, {
                    children: (0, l.jsxs)(eR, {
                        children: [
                            (0, l.jsx)(f.Al, {}),
                            (0, l.jsx)(_.Ay, {}),
                            (0, l.jsx)(g.Wr, {
                                appContext: em.BRT.OVERLAY,
                                renderWindow: window,
                                children: (0, l.jsxs)(A.Yf, {
                                    children: [
                                        (0, l.jsx)(lu, {}),
                                        (0, l.jsx)(d.b, {}),
                                        (0, l.jsx)(c.A, {}),
                                        (0, l.jsx)(o.P, {}),
                                        (0, l.jsx)(A.C8, {}),
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
