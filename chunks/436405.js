let i;
(n.r(t), n.d(t, { default: () => lS }));
var s,
    l = n(477900),
    a = n(582128),
    o = n(337836),
    r = n(17928),
    d = n(638495),
    c = n(318009),
    u = n(638421),
    h = n(697138),
    p = n(196492),
    g = n(663413),
    A = n(404374),
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
    R = n(996308),
    b = n(807393),
    L = n(789645),
    w = n(825484),
    M = n(821609),
    k = n(97808),
    P = n(778712),
    V = n(969651);
function G(e) {
    let { keybind: t, separator: n = "+", className: i } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.map((e, s) =>
            (0, l.jsxs)(
                a.Fragment,
                {
                    children: [
                        (0, l.jsx)("span", { className: v()(V.E, i), children: e }),
                        s === t.length - 1 ? void 0 : n,
                    ],
                },
                s,
            ),
        ),
    });
}
var U = n(105292),
    z = n(305513),
    H = n(221851);
function W(e) {
    return e.stopPropagation();
}
let K = () => (0, l.jsx)("div", { className: z.tR, onClick: W, onMouseEnter: W, onMouseOver: W });
function B() {
    return (0, l.jsx)("div", { className: z.yF });
}
function F(e, t, n) {
    return (0, l.jsx)("div", {
        className: z.qD,
        children: U.intl.format(n, {
            keybind: t,
            keybindHook: (e, n) => (0, l.jsx)(G, { keybind: t, className: z.P }, n),
        }),
    });
}
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
            : (0, l.jsx)(D.D, {
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
                                  className: v()(z.rf, H.a5),
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
            className: v()(z.kL, { [z.gr]: !0, [z.vk]: null != e && !t }),
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
    ei = n(684013),
    es = n(773371),
    el = n(899699),
    ea = n(456797),
    eo = n(723702);
let er = { x: 0, y: 0 },
    ed = !1;
function ec(e) {
    let { clientX: t, clientY: n } = e;
    ((ed = !0), (er.x = t), (er.y = n));
}
let eu = new Map();
function eh(e, t) {
    if (null == t) (eu.delete(e), 0 === eu.size && (window.removeEventListener("mousemove", ec), (ed = !1)));
    else {
        let n = eu.get(e);
        if (null != n && (0, et.A)(n.zone, t.zone)) return;
        (0 === eu.size && window.addEventListener("mousemove", ec), eu.set(e, t));
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
            ei.A.setClickZones(e);
        } else {
            var n;
            let e = (0, el.m)();
            if (null == e) return;
            (e.broadcastCommand({
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
                    (ep = !0)));
        }
}
let ep = !1;
class eg extends a.PureComponent {
    static defaultProps = { observe: !0, observeInterval: 1e3 };
    zone = I().uniqueId("ClickArea");
    interval = new en.IX();
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone();
    }
    componentWillUnmount() {
        (this.interval.stop(), eh(this.zone, null));
    }
    componentDidUpdate(e) {
        let { observe: t } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop());
    }
    render() {
        return a.Children.only(this.props.children);
    }
    observeZone() {
        (this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone));
    }
    updateZone = () => {
        let e = this.props.contentDomRef.current;
        if ((0, ee.vq)(e)) {
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
var eA = n(136990),
    em = n.n(eA),
    ef = n(364522),
    eE = n(866665),
    ey = n(652215),
    eS = n(116610);
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
    let { type: t = ex, width: n, height: i, children: s, className: o, opacity: r = 1, onClick: d } = e,
        c = a.useMemo(() => ({ type: t, opacity: r }), [t, r]);
    return (0, l.jsx)(ev.Provider, {
        value: c,
        children: (0, l.jsx)("div", {
            className: v()(eS.widget, eS[em()(t)], o),
            style: { width: n, height: i },
            onClick: d,
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
function eO(e) {
    let { backgroundColor: t, children: n } = e,
        i = a.useMemo(() => ({ backgroundColor: t }), [t]);
    return (0, l.jsx)(eC.Provider, { value: i, children: n });
}
((eN.Background = function (e) {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let i = [eI, e_, eT];
    return (0, l.jsx)(ev.Consumer, {
        children: (e) => {
            let { opacity: s } = e,
                o = { backgroundColor: `rgba(54, 57, 63, ${"" + (n ?? s)})` };
            if ("string" == typeof t.type) return a.cloneElement(t, { style: o });
            {
                if (i.includes(t.type)) return (0, l.jsx)(eO, { backgroundColor: o.backgroundColor, children: t });
                let e = "displayName" in t.type ? t.type.displayName : t.type.name;
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
    (eN.Bar = eI));
var ej = n(870373),
    eD = n(672396),
    eR = n(388636);
let eb = 10 * J.A.Millis.SECOND,
    eL = new O.Vy("LegacyOverlayErrorBoundary");
function ew() {
    let e = (0, Q.getPID)(),
        t = (0, Q.getRPCAuthToken)();
    (0, R.tN)({
        type: ey.kGV.DISPATCH,
        pid: e,
        token: t,
        payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
    });
}
class eM extends a.PureComponent {
    state = { showTrace: !1, busy: !1 };
    notificationTimer;
    contentDomRef = a.createRef();
    componentDidMount() {
        ((this.notificationTimer = setTimeout(this.hideNotification, eb)),
            (0, ej.g)(ey.HAw.NOTIFICATION_VIEWED, { notif_type: eD.KS.OverlayCrashed }));
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    hideNotification = () => {
        ew();
        let { notificationTimer: e } = this;
        (null != e && clearTimeout(e), (this.notificationTimer = null));
    };
    handleReload = (e) => {
        (this.setState({ busy: !0 }),
            ew(),
            (0, ej.g)(ey.HAw.NOTIFICATION_CLICKED, { notif_type: eD.KS.OverlayCrashed, action_type: "reload" }, !0),
            e.stopPropagation(),
            setTimeout(() => location.reload(!0), 200));
    };
    handleNotificationClick = (e) => {
        e.stopPropagation();
        let { notificationTimer: t } = this;
        (null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 }));
    };
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: i } = this;
        return null == i
            ? null
            : (0, l.jsx)(eg, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, l.jsx)(j.N, {
                      theme: ey.NJ8.DARK,
                      children: (i) =>
                          (0, l.jsxs)(D.D, {
                              innerRef: this.contentDomRef,
                              className: v()(i, eR.kL),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, l.jsx)(Y, {
                                      expand: !0,
                                      icon: (0, l.jsx)(X.A, { width: 40, height: 40, className: eR.Lo }),
                                      title: U.intl.string(U.t.U38qZj),
                                      confirmText: U.intl.string(U.t.TzAl1a),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, l.jsxs)(eN, {
                                            className: eR.a2,
                                            children: [
                                                (0, l.jsx)(eN.Bar, { children: "Error Details" }),
                                                (0, l.jsx)(eN.Content, {
                                                    className: eR.Xh,
                                                    children: (0, l.jsx)("code", {
                                                        className: eR.aY,
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
let ek = I().throttle(
    () => {
        b.A.increment({ name: T.K.APP_CRASHED, tags: [`reason:${_.J.UNHANDLED_JS_ERROR}`, `level:${N.k.FATAL}`] }, !0);
    },
    100,
    { trailing: !1 },
);
class eP extends a.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let n = (0, Z.JK)().location;
        (this.setState({ error: e, info: t }),
            eL.error(`ErrorBoundary caught error: ${e.message}`, { error: e, info: t }));
        let i = (0, Q.getPID)(),
            s = (0, Q.getRPCAuthToken)();
        ((0, R.tN)({
            type: ey.kGV.DISPATCH,
            pid: (0, Q.getPID)(),
            token: s,
            payloads: [
                { type: "OVERLAY_CRASHED", error: e.message, pid: i },
                { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
        }),
            setImmediate(() => window.addEventListener("click", ew)));
        let l = (0, q.St)(e, $.Ue.Hook, { extra: t });
        ((0, ej.g)(ey.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: "fatal",
        }),
            ek());
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: i } = this.state;
        return null != n ? (0, l.jsx)(eM, { error: n, info: i }) : (0, l.jsx)("div", { className: t, children: e });
    }
}
n(321073);
var eV = n(695497),
    eG = n.n(eV),
    eU = n(649852),
    ez = n.n(eU),
    eH = n(811315),
    eW = n.n(eH),
    eK = n(192308),
    eB = n(442433),
    eF = n(684136),
    eY = n(116305),
    eZ = n(775121),
    eX = n(836753),
    eJ = n(793574),
    eQ = n(688810),
    eq = n(235986);
n(607470);
var e$ = n(952818),
    e0 = n(880144),
    e1 = n(905552),
    e5 = n(913765),
    e2 = n(453314),
    e3 = n(616356),
    e8 = n(734057),
    e6 = n(71393),
    e9 = n(32584),
    e4 = n(360906),
    e7 = n(309010),
    te = n(70142),
    tt = n(157257),
    tn = n(712687),
    ti = n(532624),
    ts = n(532294),
    tl = n(531685),
    ta = n(19575),
    to = n(316501),
    tr = n(350535),
    td = n(589051),
    tc = n(223251),
    tu = n(284009),
    th = n.n(tu),
    tp = n(132500),
    tg = n(73153),
    tA = n(452295),
    tm = n(176154);
function tf(e, t) {
    return {
        trackView() {
            let n = ts.default.isInstanceLocked() ? ey.ThZ.LOCKED_OVERLAY : ey.ThZ.UNLOCKED_OVERLAY;
            ((0, ej.g)(ey.HAw.NOTIFICATION_VIEWED, { ...t, location: n }), ei.A.notificationEvent(e, eD.uj.Viewed));
        },
        trackClick(n) {
            let i = ts.default.isInstanceLocked() ? ey.ThZ.LOCKED_OVERLAY : ey.ThZ.UNLOCKED_OVERLAY;
            ((0, ej.g)(ey.HAw.NOTIFICATION_CLICKED, { ...t, location: i, action_type: n }),
                ei.A.notificationEvent(e, eD.uj.Clicked));
        },
    };
}
function tE() {
    let e = ti.Ay.getOverlayKeybind();
    return null != e ? (0, tr.dI)(e.shortcut, !0).split(" + ") : ["???"];
}
var ty = n(486020),
    tS = n(231723),
    tx = n(296027),
    tv = n(287809),
    tC = n(531329);
function tI() {
    return (0, l.jsx)("div", {
        className: tC.q,
        children: (0, l.jsx)(M.$, { variant: "active", size: "sm", text: U.intl.string(U.t.U76Ft2), fullWidth: !0 }),
    });
}
var t_ = n(387755),
    tN = n(730852),
    tT = n(571694),
    tO = n(47167),
    tj = n(621436),
    tD = n(994500),
    tR = n(308368),
    tb = n(334738),
    tL = n(400492),
    tw = n(592329);
function tM(e) {
    return F(e, tE(), U.t["z8/sgJ"]);
}
var tk = n(274372),
    tP = n(475358),
    tV = n(176781),
    tG = n(572164);
function tU(e) {
    let { trackView: t, trackClick: n } = tf(eD.KS.ClipsNotification, { notif_type: eD.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, l.jsx)(tV.x, { size: "xs", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
var tz = n(592598),
    tH = n(253932),
    tW = n(280450),
    tK = n(803224),
    tB = n(290863),
    tF = n(461213),
    tY = n(351906);
let tZ = new O.Vy("LegacyOverlayNotificationsStore"),
    tX = 5 * J.A.Millis.SECOND,
    tJ = 8 * J.A.Millis.SECOND,
    tQ = 30 * J.A.Millis.SECOND,
    tq = Object.freeze({ priority: 0, duration: tX, expirationExternallyManaged: !1, type: 0 }),
    t$ = [];
function t0(e, t, n) {
    let i = t ? ey.yFH.TIMED_OUT : ey.yFH.DISMISSED;
    return setTimeout(() => ei.A.updateNotificationStatus(e, i), null != n ? n : tX);
}
function t1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.yFH.DISMISSED;
    if (null == e) return !1;
    let n = t$.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = t$[n];
    (clearTimeout(i.timerId), (t$ = [...t$]), t === ey.yFH.DISMISSED ? t$.splice(n, 1) : (t$[n] = { ...i, status: t }));
}
function t5(e) {
    let t = t$.length;
    return (t$ = t$.filter((t) => 1 !== t.type || t.channelId !== e)).length !== t;
}
function t2(e) {
    let t = t$.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function t3(e, t) {
    let n = { ...tq, ...t };
    if (2 !== n.priority && !ts.default.isInstanceFocused()) return null;
    let i = (0, tp.A)(),
        s = { id: i, status: ey.yFH.ACTIVE, timerId: t0(i, n.expirationExternallyManaged, n.duration), props: e, ...n },
        l = (t$ = [...t$]).findIndex((e) => e.priority <= n.priority);
    return (-1 === l ? t$.push(s) : t$.splice(l, 0, s), t$.length > 10 && clearTimeout(t$.pop().timerId), i);
}
function t8(e) {
    let { channelId: t, ongoingRings: n } = e,
        i = t2(t);
    if (!Object.keys(n).includes(tW.default.getId())) return t1(i);
    if (null != i) return !1;
    let s = e8.A.getChannel(t);
    if (null == s || !s.isRingable() || tF.A.getStatus() === ey.clD.DND || tH.NO.getSetting()) return !1;
    let l = t$.find((e) => 1 === e.type && e.channelId === t && e.messageType === ey.lAJ.CALL);
    (null != l && t1(l.id),
        t3(
            (function (e) {
                let t = (0, tO.m1)(e, tv.default, tD.A),
                    n = U.intl.string(U.t.ssrVzG),
                    i = (0, tT.Y)(e),
                    s = (0, tj.A)(e),
                    { trackView: l, trackClick: a } = tf(eD.KS.IncomingCall, {
                        notif_type: eD.KS.IncomingCall,
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
                        return F(e, tE(), U.t.Odi54y);
                    },
                    confirmText: U.intl.string(U.t["0D/6Rz"]),
                    cancelText: U.intl.string(U.t.BVN4pL),
                    onNotificationShow: () => {
                        l();
                    },
                    onConfirmClick: () => {
                        if (ey.kvI.CALLABLE.has(e.type)) ei.A.callPrivateChannel(e.id);
                        else {
                            if (e.type !== ey.rbe.GUILD_VOICE) return;
                            tN.default.selectVoiceChannel(e.id);
                        }
                        (a("join"),
                            (0, ej.g)(ey.HAw.VOICE_CHANNEL_SELECTED, {
                                location: "Overlay Notificaiton",
                                guild_id: e.guild_id,
                                channel_id: e.id,
                                video_enabled: !1,
                            }));
                    },
                    onCancelClick: () => {
                        (t_.A.stopRinging(e.id), a("decline"));
                    },
                    onDismissClick: () => {
                        a("dismiss");
                    },
                };
            })(s),
            { priority: 1, expirationExternallyManaged: !0, type: 2, channelId: s.id },
        ));
}
class t6 extends r.Ay.Store {
    static displayName = "OverlayNotificationsStore";
    initialize() {
        this.waitFor(
            tW.default,
            e8.A,
            tk.Ay,
            tK.A,
            es.default,
            tx.default,
            tt.A,
            tz.A,
            ts.default,
            tB.A,
            e7.Ay,
            tF.A,
            tY.A,
            tv.default,
        );
    }
    getNotifications() {
        return t$;
    }
}
let t9 = new t6(
    tg.h,
    !__OVERLAY__
        ? {}
        : {
              OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                  let { notificationId: t, status: n } = e;
                  t1(t, n);
              },
              OVERLAY_MOUNTED: function (e) {
                  let { nudges: t } = e;
                  if (tx.default.hasChangedRenderMode(es.default.getFocusedPID() ?? (0, Q.getPID)()))
                      return void tZ.info("Overlay mounted, but render modes have changed", { nudges: t });
                  let i = t[0];
                  if ((tZ.info("Overlay mounted", { nudges: t, selectedNudge: i }), null == i)) return;
                  let s = (function (e) {
                      switch (e.type) {
                          case eD.Jr.GO_LIVE_VOICE:
                          case eD.Jr.GO_LIVE_NON_VOICE:
                              return (function (e) {
                                  switch (e.type) {
                                      case eD.Jr.GO_LIVE_VOICE: {
                                          let { game: t, voiceGuild: i } = e,
                                              { trackView: s, trackClick: a } = tf(eD.KS.GoLiveNudge, {
                                                  notif_type: eD.KS.GoLiveNudge,
                                              });
                                          return {
                                              icon: n(334260),
                                              title: null,
                                              body: U.intl.formatToPlainString(U.t.z9znpa, {
                                                  game: t.name,
                                                  server: i.name,
                                              }),
                                              hint: () => (0, l.jsx)(tI, {}),
                                              renderFooter: () => (0, l.jsx)(tI, {}),
                                              onNotificationShow: () => {
                                                  s();
                                              },
                                              onNotificationClick: (e, t) => {
                                                  a("unlock");
                                                  let i = (0, Q.getPID)();
                                                  ei.A.updateNotificationStatus(t);
                                                  let s = tx.default.isOverlayOOPEnabledForPid(i);
                                                  if (
                                                      (s ? ei.A.setInputLocked(!1, i) : ei.A.setInstanceLocked(!1),
                                                      null == tv.default.getCurrentUser())
                                                  )
                                                      return;
                                                  let o = s ? { contextKey: tS.KX } : void 0;
                                                  (0, eK.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("249169"),
                                                          n.e("473782"),
                                                          n.e("553464"),
                                                          n.e("130662"),
                                                          n.e("498552"),
                                                          n.e("338601"),
                                                          n.e("944727"),
                                                          n.e("118577"),
                                                          n.e("39404"),
                                                          n.e("82001"),
                                                      ]).then(n.bind(n, 266536));
                                                      return (t) =>
                                                          (0, l.jsx)(e, {
                                                              ...t,
                                                              sourcePID: i,
                                                              selectSource: !1,
                                                              analyticsLocations: [eJ.A.OVERLAY_NUDGE],
                                                          });
                                                  }, o);
                                              },
                                              onDismissClick: () => {
                                                  a("dismiss");
                                              },
                                          };
                                      }
                                      case eD.Jr.GO_LIVE_NON_VOICE: {
                                          let { game: t } = e,
                                              { trackView: i, trackClick: s } = tf(eD.KS.GoLiveNonVoiceNudge, {
                                                  notif_type: eD.KS.GoLiveNonVoiceNudge,
                                              });
                                          return {
                                              icon: n(334260),
                                              title: null,
                                              body: U.intl.formatToPlainString(U.t["0SVWgF"], { game: t.name }),
                                              hint: () => (0, l.jsx)(tI, {}),
                                              renderFooter: () => (0, l.jsx)(tI, {}),
                                              onNotificationShow: () => {
                                                  i();
                                              },
                                              onNotificationClick: (e, t) => {
                                                  s("unlock");
                                                  let i = (0, Q.getPID)();
                                                  ei.A.updateNotificationStatus(t);
                                                  let a = tx.default.isOverlayOOPEnabledForPid(i);
                                                  a ? ei.A.setInputLocked(!1, i) : ei.A.setInstanceLocked(!1);
                                                  let o = a ? { contextKey: tS.KX } : void 0;
                                                  (0, eK.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          n.e("249169"),
                                                          n.e("473782"),
                                                          n.e("553464"),
                                                          n.e("130662"),
                                                          n.e("498552"),
                                                          n.e("338601"),
                                                          n.e("944727"),
                                                          n.e("118577"),
                                                          n.e("39404"),
                                                          n.e("82001"),
                                                      ]).then(n.bind(n, 266536));
                                                      return (t) =>
                                                          (0, l.jsx)(e, {
                                                              ...t,
                                                              sourcePID: i,
                                                              selectSource: !1,
                                                              analyticsLocations: [eJ.A.OVERLAY_NUDGE],
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
                          case eD.Jr.NEWS:
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
                                          hint: tM,
                                          notifType: eD.KS.WelcomeNudge,
                                      }),
                                      e.type === eD.Jr.NEWS
                                          ? {
                                                icon: e.news?.icon ?? t.icon,
                                                title: e.news?.title ?? t.title,
                                                body: e.news?.body ?? t.body,
                                                hint: e.news?.hint ?? t.hint,
                                                notifType: null != e.news ? eD.KS.NewsNudge : t.notifType,
                                            }
                                          : t),
                                      { trackView: c, trackClick: u } = tf(d, { notif_type: d });
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
                                          (u("unlock"),
                                              i === eD.Jr.NEWS && ei.A.updateNotificationStatus(t),
                                              tx.default.isOverlayOOPEnabledForPid((0, Q.getPID)())
                                                  ? ei.A.setInputLocked(!1, (0, Q.getPID)())
                                                  : ts.default.isInstanceLocked() && ei.A.setInstanceLocked(!1));
                                      },
                                      onDismissClick: () => {
                                          u("dismiss");
                                      },
                                  };
                              })(e);
                      }
                  })(i);
                  null != s && t3(s, { priority: 2, duration: tJ });
              },
              OVERLAY_SET_INPUT_LOCKED: function (e) {
                  let { locked: t } = e;
                  if (t) return !1;
                  t$ = t$.map((e) =>
                      e.status === ey.yFH.ACTIVE
                          ? (clearTimeout(e.timerId), { ...e, timerId: t0(e.id, e.expirationExternallyManaged) })
                          : e,
                  );
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: n } = e,
                      i = e8.A.getChannel(t),
                      s = tv.default.getUser(n.author?.id);
                  if (null == i || null == s) return !1;
                  if (n.activity?.type === ey.xL.JOIN || n.activity?.type === ey.xL.JOIN_REQUEST) {
                      if (!(0, tm.lx)(n, t, !0, !0)) return !1;
                      let e = (function (e, t, n) {
                          let i, s;
                          if ((th()(null != t.activity, "received null message activity"), n.id === tW.default.getId()))
                              return !1;
                          let l = tt.A.getGame();
                          if (null == l) return !1;
                          switch (t.activity.type) {
                              case ey.xL.JOIN:
                                  if (
                                      null == (i = tB.A.getApplicationActivity(n.id, l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  s = (function (e, t, n, i, s) {
                                      if (null == t.activity) return null;
                                      let l = t.activity.type,
                                          a = s.session_id;
                                      if (null == a) return null;
                                      let { icon: o, title: r, body: d } = (0, tm.TB)(e, t, n),
                                          { trackView: c, trackClick: u } = tf(eD.KS.ActivityInvite, {
                                              notif_type: eD.KS.ActivityInvite,
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
                                              return F(e, tE(), U.t.aB5xLy);
                                          },
                                          onNotificationShow: () => {
                                              c();
                                          },
                                          confirmText: U.intl.string(U.t.VJlc0S),
                                          onConfirmClick: (s, l) => {
                                              (tA.A.join({
                                                  userId: n.id,
                                                  sessionId: a,
                                                  applicationId: i.id,
                                                  channelId: e.id,
                                                  messageId: t.id,
                                              }),
                                                  ei.A.updateNotificationStatus(l),
                                                  u("join"));
                                          },
                                          onDismissClick: () => {
                                              u("dismiss");
                                          },
                                      };
                                  })(e, t, n, l, i);
                                  break;
                              case ey.xL.JOIN_REQUEST:
                                  if (
                                      null == (i = tF.A.getApplicationActivity(l.id)) ||
                                      null == i.party ||
                                      i.party.id !== t.activity.party_id
                                  )
                                      return !1;
                                  s = (function (e, t, n, i) {
                                      let s = t.username,
                                          l = U.intl.format(U.t.VDODnv, { username: "", game: n.name }),
                                          a = t.getAvatarURL(e.guild_id, 80),
                                          { trackView: o, trackClick: r } = tf(eD.KS.ActivityInvite, {
                                              notif_type: eD.KS.ActivityInvite,
                                              notif_user_id: t.id,
                                              activity_type: ey.xL.JOIN_REQUEST,
                                              activity_name: n.name,
                                          });
                                      return {
                                          icon: a,
                                          title: s,
                                          body: l,
                                          hint: function (e) {
                                              return F(e, tE(), U.t.Odi54y);
                                          },
                                          confirmText: U.intl.string(U.t["fgP/wX"]),
                                          cancelText: U.intl.string(U.t["tpXzJ+"]),
                                          onNotificationShow: () => {
                                              o();
                                          },
                                          onConfirmClick: (t, n) => {
                                              (tR.A.sendActivityInvite({
                                                  channelId: e.id,
                                                  type: ey.xL.JOIN,
                                                  activity: i,
                                                  location: ts.default.isInstanceLocked()
                                                      ? ey.ThZ.LOCKED_OVERLAY
                                                      : ey.ThZ.UNLOCKED_OVERLAY,
                                              }),
                                                  r("join"),
                                                  ei.A.updateNotificationStatus(n));
                                          },
                                          onCancelClick: (t, n) => {
                                              ((0, tb.ack)(
                                                  e.id,
                                                  {
                                                      section: ey.JJy.OVERLAY,
                                                      object: ey.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                                                      objectType: ey.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                                  },
                                                  !0,
                                                  !0,
                                              ),
                                                  ei.A.updateNotificationStatus(n),
                                                  r("decline"));
                                          },
                                          onDismissClick: () => {
                                              r("dismiss");
                                          },
                                      };
                                  })(e, n, l, i);
                          }
                          if (null == s) return !1;
                          let a = t3(s, { priority: 2, expirationExternallyManaged: !0, channelId: e.id });
                          return (null != a && t0(a, !1, tQ), !0);
                      })(i, n, s);
                      if (!1 !== e) return e;
                  }
                  if (
                      ((!ts.default.isInstanceLocked() || ts.default.isPinned(ey.uss.TEXT)) &&
                          t === e7.Ay.getChannelId()) ||
                      tz.A.isNotificationDisabled(eD.KS.TextChat) ||
                      tY.A.disableNotifications ||
                      !(0, tm.lx)(n, t)
                  )
                      return !1;
                  t3(
                      (function (e, t, n, i) {
                          let { icon: s, title: a, body: o } = (0, tm.TB)(e, t, n),
                              { trackView: r, trackClick: d } = tf(eD.KS.TextChat, {
                                  notif_type: eD.KS.TextChat,
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
                                  (i && (0, tL.Ak)(tw.cH, tw.pD, void 0, void 0, { trackNotificationFailure: !0 }),
                                      r());
                              },
                              onNotificationClick: () => {
                                  if (tx.default.isOverlayOOPEnabledForPid((0, Q.getPID)())) {
                                      let n = (0, Q.getPID)();
                                      ts.default.isInstanceLocked()
                                          ? (d("unlock"), ei.A.setInputLocked(!1, n))
                                          : (d("jump"),
                                            (0, Z.pX)(ey.BVt.CHANNEL(e.guild_id, e.id, t.id)),
                                            eo.isPlatformEmbedded && ta.Ay.focus());
                                  } else
                                      ((0, Z.pX)(ey.BVt.CHANNEL(e.guild_id, e.id)),
                                          d("jump"),
                                          ts.default.isInstanceLocked() && ei.A.setInstanceLocked(!1));
                              },
                              onDismissClick: () => {
                                  d("dismiss");
                              },
                          };
                      })(i, n, s, !tK.A.isSoundDisabled(tw.cH)),
                      { type: 1, channelId: i.id, messageType: n.type },
                  );
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && t5(t);
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return t5(t);
              },
              CALL_CREATE: t8,
              CALL_UPDATE: t8,
              CALL_DELETE: function (e) {
                  let { channelId: t } = e;
                  t1(t2(t));
              },
              ACTIVITY_USER_ACTION: function (e) {
                  let t,
                      { actionType: n, user: i, applicationId: s } = e,
                      a = tt.A.getGame();
                  return (
                      null != a &&
                      a.id === s &&
                      (n === ey.xL.JOIN &&
                          (t = (function (e, t) {
                              let n = e.username,
                                  i = U.intl.format(U.t["Yk+uYG"], { username: "" }),
                                  s = (0, ty.ku)(e),
                                  { trackView: a, trackClick: o } = tf(eD.KS.ActivityUserJoin, {
                                      notif_type: eD.KS.ActivityUserJoin,
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
                  "manual" === e.clipMethod && t3(tU(U.intl.string(U.t.NBMK9m)));
              },
              CLIPS_SAVE_CLIP_ERROR: function () {
                  t3(tU(U.intl.string(U.t["1ZbZuh"])));
              },
              STREAM_START: function (e) {
                  let t = (function () {
                      let { trackView: e, trackClick: t } = tf(eD.KS.ClipsReminderNotification, {
                              notif_type: eD.KS.ClipsReminderNotification,
                          }),
                          n = ti.Ay.getKeybindForAction(ey.hCu.SAVE_CLIP),
                          i = (0, tG.T)();
                      if (null == n || !i) return null;
                      let s = tr.dI(n.shortcut, !0);
                      return {
                          title: U.intl.format(U.t.S5uhCN, {
                              keybind: s,
                              keybindHook: () =>
                                  (0, l.jsx)("span", {
                                      style: { display: "inline-block" },
                                      children: (0, l.jsx)(tP.e, { shortcut: s }),
                                  }),
                          }),
                          icon: (0, l.jsx)(tV.x, { size: "xs", color: "currentColor" }),
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
class t4 extends a.Component {
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
        (ei.A.updateNotificationStatus(t), n?.(e, t));
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
var t7 = n(479588);
function ne(e) {
    let { locked: t, keybind: n } = e,
        i = a.useRef(null),
        s = (0, r.yK)([t9], () => t9.getNotifications()),
        o = (0, r.bG)([ts.default], () => ts.default.getNotificationPositionMode());
    if ((0, r.bG)([tz.A], () => tz.A.isNotificationDisabled(eD.KS.TextChat)) || o === ey.G6Q.DISABLED) return null;
    let d = s.filter((e) => !t || e.status !== ey.yFH.TIMED_OUT),
        c = (0, C.groupBy)(d, (e) => e.type);
    return (0, l.jsx)(eg, {
        contentDomRef: i,
        observeInterval: 200,
        children: (0, l.jsx)("div", {
            ref: i,
            className: v()(t7.container, t7[o]),
            children: Object.entries(c).map((e) => {
                let [i, s] = e;
                return 0 === s.length
                    ? null
                    : (0, l.jsx)(nt, { locked: t, keybind: n, position: o, notification: s[0] }, i);
            }),
        }),
    });
}
function nt(e) {
    let { notification: t, position: n, keybind: i, locked: s } = e;
    return (0, l.jsx)("div", {
        className: t7.notificationGroup,
        children: (0, l.jsx)(t4, { zIndex: 100, position: n, notification: t, keybind: i, locked: s }, t.id),
    });
}
var nn = n(391973);
let ni = a.memo(function (e) {
    let { layout: t, layoutSize: n, className: i, renderWidget: s } = e;
    return null != t
        ? (0, l.jsx)("div", {
              className: i,
              style: { width: n.width, height: n.height },
              children: t.widgets.map((e) => s(e, n)),
          })
        : null;
});
var ns = n(5463),
    nl = n(930377),
    na =
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
let no = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);
function nr(e, t, n) {
    let { width: i, height: s } = e;
    return { width: "auto" === i ? "auto" : Math.max(t, i), height: "auto" === s ? "auto" : Math.max(n, s) };
}
function nd(e) {
    let { top: t, left: n, bottom: i, right: s } = e;
    return (
        null == n && null == s && (n = 0), null == t && null == i && (t = 0), { top: t, left: n, bottom: i, right: s }
    );
}
function nc(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`;
}
function nu(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}
function nh(e, t) {
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
class np extends a.Component {
    static Operations = na;
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
        (super(e), (this.anchor = nd(e.anchor)), (this.size = nr(e.size, e.minSize.width, e.minSize.height)));
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
            ((0, et.A)(this.props.anchor, e.anchor) || this.setDOMPositions(nd(this.props.anchor)),
            (0, et.A)(this.props.size, e.size) ||
                this.setDOMSize(nr(this.props.size, this.props.minSize.width, this.props.minSize.height)));
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
        (e.preventDefault(), e.stopPropagation());
        let { clientX: t, clientY: n } = e,
            {
                dragState: { startX: i, startY: s },
                state: { operation: l, operationStarted: a },
            } = this;
        !(null == l || (!a && Math.pow(i - t, 2) + Math.pow(s - n, 2) < 3)) &&
            ("MOVE" === l ? this.handleDragMove(t, n) : no.has(l) && this.handleResizeMove(t, n));
    };
    handleResizeMouseDown(e, t) {
        let { clientX: n, clientY: i } = e;
        (e.stopPropagation(), this.handleOperationStart(t, n, i));
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
        let { width: r, height: d } = nu(i, this.size),
            c = (0, ns.Ly)(this.anchor, a, o, r, d);
        if ("MOVE" === e) {
            let { x: e, y: i } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(c);
            this.dragState = { ...this.dragState, startX: t, startY: n, offsetX: t - e, offsetY: n - i };
        } else {
            let i = nh(e, c);
            (this.setDOMPositions(i),
                (this.dragState = { ...this.dragState, startX: t, startY: n, offsetWidth: r, offsetHeight: d }));
        }
        this.setState({ operation: e, operationStarted: !1 }, () => {
            (s.addEventListener("mousemove", this.handleMouseMove),
                s.addEventListener("mouseup", this.handleOperationEnd));
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
        ((e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), o)));
        let { width: g, height: A } = nu(n, this.size),
            m = t - h,
            f = e - u,
            E = (0, ns.fh)((0, ns.Ly)({ top: m, left: f, bottom: void 0, right: void 0 }, s, l, g, A)),
            y = c ? (0, ns.h1)(E) : nh("RESIZE_SOUTH_EAST", E);
        (this.setDOMPositions(y),
            p || (null != r && r(), this.setState({ operationStarted: !0 })),
            null != d && d(i, "MOVE", this.anchor, this.size));
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
            { startX: h, startY: p, offsetWidth: g, offsetHeight: A } = this.dragState,
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
            ((g = Math.max(g + m, i.width)),
                (A = Math.max(A + f, i.height)),
                this.setDOMSize({ width: g, height: A }),
                u || (null != r && r(), this.setState({ operationStarted: !0 })),
                null != d && d(n, c, this.anchor, this.size));
        }
    }
    handleOperationEnd = () => {
        let { operation: e, operationStarted: t } = this.state,
            { targetWindow: n, onDragEnd: i } = this.props;
        (n.removeEventListener("mousemove", this.handleMouseMove),
            n.removeEventListener("mouseup", this.handleOperationEnd));
        let s = t
            ? () => {
                  let { onUpdate: t, id: n } = this.props;
                  t(e, n, this.anchor, this.size, nu(this.ref.current, this.size));
              }
            : void 0;
        if (t) {
            let { maxX: e, maxY: t } = this.props.container,
                { width: n, height: s } = nu(this.ref.current, this.size),
                l = (0, ns.Ly)(this.anchor, e, t, n, s),
                a = (0, ns.h1)(l);
            (this.setDOMPositions(a), this.setDOMSize({ width: n, height: s }), null != i && i());
        }
        this.setState({ operation: null, operationStarted: !1 }, s);
    };
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: s } = e,
            { current: l } = this.ref;
        ((this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != l &&
                ((l.style.top = nc(t)), (l.style.bottom = nc(i)), (l.style.left = nc(n)), (l.style.right = nc(s))));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            { current: i } = this.ref;
        ((t = "auto" === this.size.width ? "auto" : t),
            (n = "auto" === this.size.height ? "auto" : n),
            (this.size = { width: t, height: n }),
            null != i && ((i.style.width = nc(t)), (i.style.height = nc(n))));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(a.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: v()(nl.M$, { [nl.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(nl.Q8, { [nl.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: v()(nl.cz, { [nl.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(nl._J, { [nl.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: v()(nl.DS, { [nl.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(nl.Bc, { [nl.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(nl.rL, { [nl.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: v()(nl.Rl, { [nl.Ke]: n }),
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
            className: v()({ [nl.iE]: !0, [nl.MQ]: d }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()],
        });
    }
}
var ng = n(684770),
    nA = n(967198),
    nm = n(399513),
    nf = n(265872),
    nE = n(625903),
    ny = n(685399),
    nS = n(5180),
    nx = n(826320),
    nv = n(508654),
    nC = n(885631),
    nI = n(263857),
    n_ = n(420344),
    nN = n(846930),
    nT = n(115486),
    nO = n(366811),
    nj = n(924985),
    nD = n(945886),
    nR = n(72314),
    nb = n(769765),
    nL = n(808728),
    nw = n(458294),
    nM = n(576705),
    nk = n(584569),
    nP = n(763827),
    nV = n(543465),
    nG = n(607567),
    nU = n(297264),
    nz = n(408278),
    nH = n(761508),
    nW = n(689175),
    nK = n(683071),
    nB = n(270003),
    nF = n(452027),
    nY = n(193249),
    nZ = n(331322),
    nX = n(144228),
    nJ = n(691885),
    nQ = n(305866),
    nq = n(559106),
    n$ = n(428678),
    n0 = n(834730),
    n1 = n(220540);
let n5 = 0;
function n2(e) {
    switch (e) {
        case ey.G6Q.TOP_LEFT:
            return U.intl.string(U.t.xlchpU);
        case ey.G6Q.TOP_RIGHT:
            return U.intl.string(U.t["4uHRHH"]);
        case ey.G6Q.BOTTOM_LEFT:
            return U.intl.string(U.t.ovWFnD);
        case ey.G6Q.BOTTOM_RIGHT:
            return U.intl.string(U.t["M/9V75"]);
        default:
            return U.intl.string(U.t.AlY4Za);
    }
}
let n3 = [ey.G6Q.DISABLED, ey.G6Q.TOP_LEFT, ey.G6Q.TOP_RIGHT, ey.G6Q.BOTTOM_LEFT, ey.G6Q.BOTTOM_RIGHT];
function n8(e) {
    let { position: t, onChange: n } = e,
        [i] = a.useState(() => `notification-position-selector-${n5++}`),
        s =
            t === ey.G6Q.DISABLED
                ? U.intl.string(U.t.R6LxVf)
                : U.intl.formatToPlainString(U.t["XXHDM/"], { position: n2(t) });
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(nq.vN, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)("div", {
                    className: v()(n1.iE, { [n1.wX]: t === ey.G6Q.DISABLED }),
                    children: n3.map((e) =>
                        (0, l.jsxs)(
                            "label",
                            {
                                className: v()({
                                    [n1.wH]: e === t,
                                    [n1.r9]: e === ey.G6Q.DISABLED,
                                    [n1.O3]: e === ey.G6Q.TOP_RIGHT,
                                    [n1.lA]: e === ey.G6Q.TOP_LEFT,
                                    [n1.oF]: e === ey.G6Q.BOTTOM_RIGHT,
                                    [n1.RV]: e === ey.G6Q.BOTTOM_LEFT,
                                }),
                                children: [
                                    n2(e),
                                    e === ey.G6Q.DISABLED
                                        ? (0, l.jsx)(n$.K, { size: "md", color: "currentColor", className: n1.WO })
                                        : null,
                                    (0, l.jsx)("input", {
                                        type: "radio",
                                        name: i,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: n1.hH,
                                    }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(n0.E, { variant: "text-sm/normal", className: H.Ot, children: s }),
        ],
    });
}
n8.Positions = ey.G6Q;
var n6 = n(540999),
    n9 = n(93465),
    n4 = n(222407),
    n7 = n(55979);
function ie() {
    let e = ts.default.getNotificationPositionMode(),
        t = e !== ey.G6Q.DISABLED,
        n = ti.Ay.getOverlayKeybind(),
        i = ti.Ay.getOverlayChatKeybind();
    (0, ej.g)(ey.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: tz.A.isNotificationDisabled(eD.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: ts.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, tr.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, tr.dI)(i.shortcut) : null,
    });
}
class it extends a.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        (0, ej.g)(ey.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        ((0, n4.I)(n9.M.TEXT_CHAT, !this.props.textChatDisabled), ie());
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        (0, n4.I)(n9.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        (ei.A.setNotificationPositionMode(t), ie());
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        ei.A.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        ei.A.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        ei.A.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, l.jsxs)(eq.A, {
            direction: eq.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: n7.wx,
            children: [
                (0, l.jsxs)(eq.A, {
                    children: [
                        (0, l.jsx)(nU.D, {
                            variant: "heading-md/semibold",
                            className: n7.qd,
                            children: U.intl.string(U.t["35G2Mq"]),
                        }),
                        (0, l.jsx)("div", {
                            className: n7.Q7,
                            children: (0, l.jsx)(nz.K, {
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
            t = n6.A.isDeveloper
                ? (0, l.jsx)(nH.V.Item, { id: "DEVELOPER", className: n7.YU, children: "Developer" })
                : null;
        return (0, l.jsxs)(nH.V, {
            selectedItem: e,
            type: "top",
            className: n7.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, l.jsx)(nH.V.Item, { id: "GENERAL", className: n7.YU, children: U.intl.string(U.t["0FYxxw"]) }),
                (0, l.jsx)(nH.V.Item, { id: "VOICE", className: n7.YU, children: U.intl.string(U.t["3WeSiE"]) }),
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
            nW.Ch,
            {
                className: n7.Qs,
                children: [
                    this.props.streamerModeEnabled &&
                        (0, l.jsx)(nK.w, { type: "warning", message: U.intl.string(U.t["1CC/lX"]), role: "status" }),
                    e,
                ],
            },
            t,
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowInviteNotification: t } = this.props,
            n = !tz.A.isNotificationDisabled(eD.KS.TextChat),
            i = e !== ey.G6Q.DISABLED;
        return (0, l.jsxs)(nB.n, {
            children: [
                (0, l.jsx)(nF.D, {
                    label: U.intl.string(U.t.IQv8Eo),
                    children: (0, l.jsx)(n8, { position: e, onChange: this.handleChangeNotificationPositionMode }),
                }),
                (0, l.jsx)(nY.d, {
                    label: U.intl.string(U.t.Fy5kPp),
                    checked: n && i,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !i,
                }),
                (0, l.jsx)(nY.d, {
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
        return (0, l.jsxs)(nZ.B, {
            gap: 20,
            children: [
                (0, l.jsx)(nX.z, {
                    label: U.intl.string(U.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        { value: ey.OSZ.LARGE, name: U.intl.string(U.t.YcOxtr) },
                        { value: ey.OSZ.SMALL, name: U.intl.string(U.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, l.jsx)(nX.z, {
                    label: U.intl.string(U.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: ey.pwA.ALWAYS, name: U.intl.string(U.t.nBmDrT) },
                        { value: ey.pwA.ONLY_WHILE_SPEAKING, name: U.intl.string(U.t["2OvIZY"]) },
                        { value: ey.pwA.NEVER, name: U.intl.string(U.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, l.jsx)(nX.z, {
                    label: U.intl.string(U.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: ey.f5z.ALWAYS, name: U.intl.string(U.t.nBmDrT) },
                        { value: ey.f5z.ONLY_WHILE_SPEAKING, name: U.intl.string(U.t["2OvIZY"]) },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, l.jsx)("div", {
            className: H.SX,
            children: (0, l.jsx)(nJ.l, {
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
                onSelectionChange: (e) => null != e && ta.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    }
    render() {
        return (0, l.jsxs)(nQ.l, {
            "aria-label": U.intl.string(U.t["35G2Mq"]),
            className: n7.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
}
function ii(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatDisabled: o,
            shouldShowInviteNotification: d,
        } = (0, r.cf)([ts.default, tz.A], () => ({
            avatarSizeMode: ts.default.getAvatarSizeMode(),
            displayNameMode: ts.default.getDisplayNameMode(),
            displayUserMode: ts.default.getDisplayUserMode(),
            notificationPositionMode: ts.default.getNotificationPositionMode(),
            textChatDisabled: tz.A.isNotificationDisabled(eD.KS.TextChat),
            shouldShowInviteNotification: !tz.A.isNotificationDisabled(eD.KS.ActivityInvite),
        })),
        c = (0, td.Mn)("OverlaySettingsPopout"),
        u = (0, r.bG)([tY.A], () => tY.A.enabled);
    return (0, l.jsx)(it, {
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
var is = n(138747);
let il = function (e) {
    let t,
        { title: n, header: i, children: s, renderSettings: o, onDragStart: r } = e,
        d = a.useRef(null);
    return (
        (t =
            null != n
                ? (0, l.jsxs)(eN.Bar, {
                      className: v()(is.wx, is.bl),
                      onMouseDown: r,
                      children: [
                          (0, l.jsx)(eN.Content, { className: v()(is.qd, is.bl), dynamicSize: !0, children: n }),
                          (0, l.jsx)(eN.Content, {
                              children: (0, l.jsx)(nf.Y, {
                                  targetElementRef: d,
                                  position: "right",
                                  renderPopout: o ?? ey.tEg,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, l.jsx)(eN.Icon, {
                                          ...e,
                                          icon: nE.SettingsIcon,
                                          label: U.intl.string(U.t["3D5yo/"]),
                                          ref: d,
                                      }),
                              }),
                          }),
                      ],
                  })
                : i),
        (0, l.jsxs)("div", { className: is.pz, children: [t, (0, l.jsx)("div", { className: is.Y_, children: s })] })
    );
};
var ia = n(107226);
class io extends a.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    settingsIconRef = a.createRef();
    state = {
        controller: new nm.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
    };
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = nR.A.getGuildDimensions(e);
        this.setAnimatedValue(t ?? 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = nR.A.getGuildDimensions(n);
            this.setAnimatedValue(e ?? 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, l.jsx)(ii, { onClose: t });
    }
    handleScroll = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, nC.A)(t);
        null != t &&
            (null != t.banner || n) &&
            (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e));
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: s } = this.state;
        (((e >= 54 && i) || (e < 54 && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, communityInfoVisible: n }),
            s.update({ value: Math.min(1, Math.max(0, 1 - e / 78)), immediate: !0 }).start());
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        (((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start());
    }
    render() {
        let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            { controller: i, renderBanner: s, bannerVisible: a, communityInfoVisible: o } = this.state,
            r = (0, nS.ai)(n?.id) ? nx.A : nI.B;
        return (0, l.jsxs)(il, {
            header:
                null != n
                    ? (0, l.jsx)(n_.Ay, {
                          guild: n,
                          controller: i,
                          renderBanner: s,
                          bannerVisible: a,
                          className: ia.F,
                          headerClassName: ia.D8,
                          onMouseDown: e,
                          disableBannerAnimation: !1,
                          communityInfoVisible: o,
                          children: (0, l.jsx)(nf.Y, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, l.jsx)(eN.Icon, {
                                      ref: this.settingsIconRef,
                                      icon: nE.SettingsIcon,
                                      label: U.intl.string(U.t["3D5yo/"]),
                                      ...e,
                                  }),
                          }),
                      })
                    : null,
            children: [
                (0, l.jsx)("div", {
                    className: ia.o5,
                    children:
                        null != n
                            ? (0, l.jsx)(r, {
                                  ...t,
                                  guild: n,
                                  disableManageChannels: !0,
                                  onScroll: null != n && null != n.banner ? this.handleScroll : null,
                              })
                            : (0, l.jsx)(nN.A, { withBannerPadding: !1 }),
                }),
                null != n &&
                    (0, l.jsx)("section", {
                        className: ia.C3,
                        "aria-label": U.intl.string(U.t.StREWK),
                        children: (0, l.jsx)(nT.A, { guildId: n.id }),
                    }),
            ],
        });
    }
}
function ir(e) {
    let { guildId: t, onDragStart: n } = e,
        i = (0, r.bG)([e6.A], () => e6.A.getGuild(t)),
        s = (0, r.bG)([nL.Ay], () => nL.Ay.getChannels(t)),
        a = (0, r.bG)([nb.A], () => nb.A.getCategories(t)),
        { mutedChannels: o, collapseMuted: d } = (0, r.cf)([nV.Ay], () => ({
            mutedChannels: nV.Ay.getMutedChannels(t),
            collapseMuted: nV.Ay.isGuildCollapsed(t),
        })),
        c = (0, r.bG)([nG.Ay], () => nG.Ay.getVoiceStates(t)),
        u = (0, r.bG)([nD.A], () => nD.A.getCollapsed()),
        { scrollTo: h } = (0, r.bG)([nR.A], () => nR.A.getGuildDimensions(t)),
        p = (0, nO.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        g = (0, r.bG)([e7.Ay], () => e7.Ay.getVoiceChannelId()),
        A = (0, r.bG)([nM.A], () => nM.A.getGuildVersion(t)),
        m = (0, r.bG)([nj.A], () => nj.A.version),
        f = (0, r.bG)([nw.default], () => nw.default.getGuildChangeSentinel(t)),
        E = (0, ny.a1)(i?.id),
        y = (0, nv.vj)(i?.id),
        S = i?.features.has(ey.GuildFeatures.COMMUNITY) ?? !1,
        x = (0, r.bG)([nP.A], () => nP.A.getChannelId()),
        v = (0, r.bG)([nk.A], () => nk.A.desyncedVoiceStatesCount);
    return (0, l.jsx)(io, {
        guildId: t,
        guild: i,
        onDragStart: n,
        channels: s,
        categories: a,
        mutedChannels: o,
        scrollToChannel: h,
        selectedChannelId: p,
        selectedVoiceChannelId: g,
        voiceStates: c,
        rtcConnectedChannelId: x,
        rtcDesyncedVoiceStatesCount: v,
        collapsedChannels: u,
        collapseMuted: d,
        guildReadStateSentinel: f,
        permissionVersion: A,
        categoryCollapseVersion: m,
        embeddedAppsByChannel: E,
        activeEventsByChannel: y,
        showNewUnreadsBar: S,
        optInEnabled: !1,
    });
}
var id = n(593065),
    ic = n(793322),
    iu = n(95119);
function ih() {
    return (0, ic.WU)("DM_SEARCH");
}
let ip = a.memo(function () {
    let e = (0, r.bG)([ts.default], () => (ts.default.isLocked((0, Q.getPID)()) ? "true" : "false")),
        t = (0, nO.A)((e) => {
            let { channelId: t } = e;
            return t;
        });
    return (0, l.jsxs)("div", {
        className: iu.AB,
        children: [
            (0, l.jsx)("div", {
                className: iu.ON,
                children: (0, l.jsx)("button", {
                    type: "button",
                    className: iu.lU,
                    onClick: ih,
                    children: U.intl.string(U.t.LzcpeZ),
                }),
            }),
            (0, l.jsx)(id.A, { padding: 8, theme: ey.NJ8.DARK, version: e, selectedChannelId: t }),
            (0, l.jsx)("section", {
                className: iu.C3,
                "aria-label": U.intl.string(U.t.StREWK),
                children: (0, l.jsx)(nT.A, { guildId: null }),
            }),
        ],
    });
});
var ig = n(529416);
function iA(e) {
    let { closePopout: t } = e;
    return (0, l.jsx)(ii, { onClose: t });
}
class im extends a.PureComponent {
    static defaultProps = { contained: !1 };
    onDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(na.MOVE, e.clientX, e.clientY);
    };
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            s =
                null != e
                    ? (0, l.jsx)(ir, { guildId: e, onDragStart: this.onDragStart }, e)
                    : (0, l.jsx)(il, {
                          title: U.intl.string(U.t.YUU0RF),
                          renderSettings: iA,
                          onDragStart: this.onDragStart,
                          children: (0, l.jsx)(ip, {}),
                      }),
            a = n ? "div" : eN;
        return (0, l.jsxs)(a, {
            className: v()(ig.E, { [ig.H]: !n }, i),
            children: [(0, l.jsx)(ng.A, { isOverlay: !0, disableAppDownload: !0, isVisible: !t }), s],
        });
    }
}
let iE = r.Ay.connectStores([nA.A], () => ({ selectedGuildId: nA.A.getGuildId() }))(im);
var iy = n(465532),
    iS = n(148494),
    ix = n(414798),
    iv = n(119031),
    iC = n(480870),
    iI = n(527053),
    i_ = n(128783),
    iN = n(578434),
    iT = n(80683),
    iO = n(355622),
    ij = n(408018),
    iD = n(588158),
    iR = n(845207),
    ib = n(692051),
    iL = n(451909),
    iw = n(926262),
    iM = n(425812),
    ik = n(118517),
    iP = n(853145),
    iV = n(522556),
    iG = n(31717),
    iU = n(517019),
    iz = n(232835),
    iH = n(625494),
    iW = n(806150),
    iK = n(799808),
    iB = n(978940),
    iF = n(960027),
    iY = n(115354),
    iZ = n(609731),
    iX = n(788120),
    iJ = n(772838),
    iQ = n(742589),
    iq = n(353428),
    i$ = n(95701),
    i0 = n(470710),
    i1 = n(205513),
    i5 = n(915089);
function i2(e) {
    switch (e) {
        case eD.Li.BOTTOM:
            return eD.Li.BOTTOM;
        case eD.Li.LOWER:
            return eD.Li.LOWER;
        case eD.Li.UPPER:
            return eD.Li.UPPER;
        default:
            return eD.Li.TOP;
    }
}
var i3 = n(620505);
let i8 = Object.values(eD.Li).map((e) => 100 * e),
    i6 = (0, i5.Ld)();
class i9 extends a.PureComponent {
    initialValue = 100 * this.props.opacity;
    handleUpdateBackgroundOpacity(e) {
        (ei.A.setTextWidgetOpacity(i2(e / 100)),
            (0, ej.g)(ey.HAw.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e }));
    }
    handlePreviewBackgroundOpacity(e) {
        ei.A.setTextWidgetOpacity(i2(e / 100));
    }
    render() {
        return (0, l.jsx)("div", {
            className: i3.kL,
            children: (0, l.jsx)("div", {
                className: i3.xJ,
                children: (0, l.jsx)(i1.G, {
                    label: U.intl.string(U.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: i8[0],
                    maxValue: i8[i8.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: i8,
                    onMarkerRender: ey.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": i6,
                }),
            }),
        });
    }
}
let i4 = r.Ay.connectStores([ts.default], () => ({ opacity: ts.default.getTextWidgetOpacity() }))(i9);
var i7 = n(431052);
class se extends a.Component {
    state = { showOpacitySlider: !1 };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    handleClickCall = (e) => {
        let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
        if (i) n ? tN.default.selectVoiceChannel(null) : ei.A.callPrivateChannel(t.id, !1);
        else {
            let n = !e.shiftKey;
            ei.A.callPrivateChannel(t.id, n);
        }
    };
    handleOpenOpacitySettings = () => {
        let { pinned: e } = this.props;
        (this.setState({ showOpacitySlider: !0 }), e && ei.A.setPreviewInGameMode(!0));
    };
    handleCloseOpacitySettings = () => {
        let { pinned: e } = this.props;
        (this.setState({ showOpacitySlider: !1 }), e && ei.A.setPreviewInGameMode(!1));
    };
    handleMouseDown = (e) => {
        let { onMouseDown: t } = this.props;
        null != t && t(e);
    };
    renderCallButton() {
        let e,
            { channel: t, channelHasActiveCall: n, userIsInChannelCall: i, isBlocked: s } = this.props;
        if (!(0, i$.Gw)(t.type)) return null;
        let a = iB._,
            o = !1;
        return (
            n
                ? i
                    ? ((e = U.intl.string(U.t["4ry6yi"])), (a = iF.z))
                    : (e = U.intl.string(U.t["0D/6Rz"]))
                : s
                  ? ((e = U.intl.string(U.t.PHzjvX)), (o = !0))
                  : (e = U.intl.string(U.t.focH1t)),
            (0, l.jsx)(iQ.A.Icon, { icon: a, tooltip: e, onClick: this.handleClickCall, disabled: o })
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
                          ? (0, l.jsx)(iQ.A.Icon, {
                                icon: iY.O,
                                tooltip: U.intl.string(U.t.OVovCb),
                                onClick: this.handleOpenOpacitySettings,
                            })
                          : null,
                      (0, l.jsx)(iQ.A.Icon, { icon: n ? iZ.h : iX.q, tooltip: i, selected: n, onClick: t }),
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
                  className: i7.dl,
                  children: [
                      (0, l.jsx)(i4, {}),
                      (0, l.jsx)(iQ.A.Icon, {
                          icon: L.P,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: U.intl.string(U.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, l.jsx)(eN.Background, {
                  opacityOverride: n || d ? null : 1,
                  children: (0, l.jsx)("div", {
                      className: v()(e, t, i7.N1),
                      onMouseDown: o,
                      onContextMenu: r,
                      children: (0, l.jsxs)(iQ.A, {
                          guildId: i.guild_id,
                          channelId: i.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              d || n || c
                                  ? null
                                  : (0, l.jsx)(iJ.W, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: v()(i7.co, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, iq.zF)({ channel: i, channelName: s }),
                              n ? null : (0, iq.EP)(i, a),
                          ],
                      }),
                  }),
              });
    }
}
function st(e) {
    let { channel: t, ...n } = e,
        i = (0, r.bG)([e7.Ay, e8.A], () => {
            let e = e7.Ay.getVoiceChannelId();
            return e8.A.getChannel(e);
        }),
        s = (0, r.bG)([e6.A], () => e6.A.getGuild(t.guild_id)),
        a = (0, r.bG)([i0.A], () => i0.A.isCallActive(t.id)),
        o = (0, tO.Ay)(t),
        d = (0, r.bG)([tD.A], () => !!t.isDM() && null != t.getRecipientId() && tD.A.isBlocked(t.getRecipientId()));
    return (0, l.jsx)(se, {
        channel: t,
        channelName: o,
        guild: s,
        channelHasActiveCall: a,
        userIsInChannelCall: null != i && i.id === t.id,
        isBlocked: d,
        ...n,
    });
}
var sn = n(381941),
    si = n(650583),
    ss = n(732753);
let sl = eD.Li.TOP;
class sa extends a.Component {
    textAreaRef = a.createRef();
    constructor(e) {
        (super(e), iG.A.addChangeListener(this.draftDidChange));
        const t = iG.A.getDraft(e.channel.id, iG.C.ChannelMessage);
        ((this.state = { ...(0, ij.ur)(t), focused: !1, contentWarningProps: null }),
            iH._.subscribe(ey.jej.TEXTAREA_FOCUS, this.focusInput),
            iH._.subscribe(ey.jej.TEXTAREA_BLUR, this.blurInput));
    }
    componentDidUpdate(e) {
        (e.channel.id !== this.props.channel.id && this.draftDidChange(this.props),
            (this.props.channel !== e.channel || (this.props.isTemporarilyActive && !e.isTemporarilyActive)) &&
                this.setState({ focused: !0 }));
    }
    componentWillUnmount() {
        (iG.A.removeChangeListener(this.draftDidChange),
            iH._.unsubscribe(ey.jej.TEXTAREA_FOCUS, this.focusInput),
            iH._.unsubscribe(ey.jej.TEXTAREA_BLUR, this.blurInput));
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = iG.A.getDraft(t.channel.id, iG.C.ChannelMessage);
            n !== i && "" === i && e.setState((0, ij.ur)(i));
        };
    })();
    handleTextareaKeyDown = (e) => {
        if (
            e.key === si.dh.ARROW_UP &&
            !e.shiftKey &&
            !e.altKey &&
            !e.ctrlKey &&
            !e.metaKey &&
            0 === this.state.textValue.length
        ) {
            e.preventDefault();
            let { channel: t } = this.props,
                n = iz.A.getLastEditableMessage(t.id);
            null != n && iS.A.startEditMessageRecord(t.id, n);
        }
    };
    handleTextareaChange = (e, t, n) => {
        let {
            channel: { id: i },
        } = this.props;
        (iy.A.changeDraft(i, this.state.textValue, iG.C.ChannelMessage),
            "" !== t ? ix.A.startTyping(i) : ix.A.stopTyping(i),
            this.setState({ textValue: t, richValue: n }));
    };
    handleSendMessage = (e) => {
        let { value: t } = e,
            { channel: n, pendingReply: i, isTemporarilyActive: s } = this.props;
        return 0 === t.length
            ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            : (0, iW.i)({
                  openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
                  type: iO.oU.OVERLAY,
                  content: t,
                  channel: n,
              }).then((e) => {
                  let { valid: l, failureReason: a } = e;
                  if (!l)
                      return a === ey.X8x.SLOWMODE_COOLDOWN
                          ? (iH._.dispatch(ey.jej.EMPHASIZE_SLOWMODE_COOLDOWN), { shouldClear: !1, shouldRefocus: !0 })
                          : { shouldClear: !1, shouldRefocus: !1 };
                  let o = iS.A.getSendMessageOptionsForReply(i);
                  return (iS.A.sendMessage(n.id, iL.Ay.parse(n, t), !0, { ...o, location: sn.Hx.OVERLAY }),
                  this.setState((0, ij.N3)()),
                  (0, ik.Jx)(n.id),
                  s)
                      ? (ei.A.deactivateAllRegions(), { shouldClear: !1, shouldRefocus: !1 })
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
        (0, l.jsx)(iD.A, {
            className: t,
            channel: this.props.channel,
            draftType: iG.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: (e) => this.handleTextareaChange(null, e, (0, ij.x7)(e)),
            canOnlyUseTextCommands: e,
        });
    render() {
        let { channel: e, placeholder: t, ...n } = this.props,
            { focused: i, textValue: s, contentWarningProps: a, richValue: o } = this.state,
            r = (0, l.jsx)(nf.Y, {
                targetElementRef: this.textAreaRef,
                position: "top",
                onRequestClose: () => {
                    (a?.onCancel?.(), this.setState({ contentWarningProps: null }));
                },
                shouldShow: null != a,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        th()(
                            null != a,
                            "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null",
                        ),
                        (0, l.jsx)(iw.A, { onClose: t, ...a })
                    );
                },
                children: () =>
                    (0, l.jsx)(iR.Ay, {
                        ...n,
                        ref: this.textAreaRef,
                        renderAttachButton: this.renderAttachButton,
                        channel: e,
                        type: iO.oU.OVERLAY,
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
            ? (0, l.jsx)(iN.A, { channel: e, children: r }, e.id)
            : (0, l.jsx)(iT.A, { channel: e, children: r }, e.id);
    }
}
function so(e) {
    let { disableInteractions: t, disableAnimations: n, children: i } = e,
        s = a.useMemo(() => ({ disableInteractions: t, disableAnimations: n }), [t, n]);
    return (0, l.jsx)(ib.Y.Provider, { value: s, children: i });
}
class sr extends a.PureComponent {
    componentDidUpdate(e) {
        let { channel: t, activated: n } = this.props;
        ((0, iK.Mw)(e, this.props, this.shouldDisplay),
            null != t &&
                n &&
                !e.activated &&
                (0, ej.g)(ey.HAw.OVERLAY_UNLOCKED, { channel_id: t.id, channel_type: t.type, guild_id: t.guild_id }));
    }
    componentDidMount() {
        (0, iK.j_)(this.props, this.shouldDisplay());
    }
    handlePin = () => {
        let e = !this.props.pinned;
        ((0, ej.g)(ey.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: ey.uss.TEXT,
        }),
            ei.A.setPinChat(e));
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
        let g = o || u,
            A = (0, tO.m1)(t, tv.default, tD.A),
            m = !i && null != t && t.isNSFW(),
            f = !g || r;
        return (
            (e =
                m && null != s
                    ? (0, l.jsx)(iV.A, { guild: s, channelId: t.id })
                    : (0, l.jsx)(
                          iM.A,
                          {
                              channel: t,
                              className: ss.Wk,
                              forceCompact: c,
                              showNewMessagesBar: !g,
                              scrollerClassName: c ? ss.XG : void 0,
                              showingQuarantineBanner: !1,
                          },
                          t.id,
                      )),
            (0, l.jsx)(so, {
                disableInteractions: c && o && !r,
                disableAnimations: c && g && !r,
                children: (0, l.jsxs)(a.Fragment, {
                    children: [
                        !o && !u && (0, l.jsx)(i_.A, { channel: t, guild: s }),
                        (0, l.jsx)(eN.Background, {
                            opacityOverride: o || u ? null : sl,
                            children: (0, l.jsx)("div", {
                                className: v()(ss.MJ, { [ss.Id]: h, [ss.$p]: c && o && !r }),
                                children: e,
                            }),
                        }),
                        m
                            ? null
                            : (0, l.jsx)("div", {
                                  children: f
                                      ? (0, l.jsx)(eN.Background, {
                                            opacityOverride: o || u ? null : sl,
                                            children: (0, l.jsxs)("div", {
                                                className: ss.z8,
                                                children: [
                                                    (0, l.jsx)(sa, {
                                                        channel: t,
                                                        placeholder: n,
                                                        isTemporarilyActive: r,
                                                        pendingReply: p,
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: ss.V_,
                                                        children: (0, l.jsx)(iv.Ay, {
                                                            channel: t,
                                                            className: ss.IW,
                                                            isInTextChannel: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                      : (0, l.jsx)("div", {
                                            className: ss.Zl,
                                            children: (0, l.jsx)(eN.Background, {
                                                opacityOverride: eD.Li.LOWER,
                                                children: (0, l.jsx)("div", {
                                                    className: v()(ss.ew, ss.__invalid_mediumBackgroundOpacity),
                                                    children:
                                                        null != A && A.length > 0
                                                            ? U.intl.formatToPlainString(U.t["9TkYMO"], {
                                                                  keybind: d,
                                                                  channelName: t.isMultiUserDM() ? A : `#${A}`,
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
            (0, eB.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("463317"),
                    n.e("926132"),
                    n.e("893190"),
                    n.e("146652"),
                    n.e("189673"),
                    n.e("882073"),
                    n.e("797558"),
                    n.e("955557"),
                    n.e("691994"),
                    n.e("576665"),
                    n.e("947502"),
                    n.e("245996"),
                    n.e("700792"),
                    n.e("965789"),
                    n.e("592822"),
                    n.e("529422"),
                    n.e("823427"),
                    n.e("307059"),
                    n.e("309291"),
                    n.e("198415"),
                    n.e("17244"),
                    n.e("298199"),
                    n.e("864464"),
                    n.e("439778"),
                ]).then(n.bind(n, 385913));
                return (n) => (0, l.jsx)(e, { ...n, user: i, channelSelected: !0, channel: t });
            });
    };
    moveDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(na.MOVE, e.clientX, e.clientY);
    };
    resizeDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(na.RESIZE_SOUTH_EAST, e.clientX, e.clientY);
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
                    case eD.Li.BOTTOM:
                        return eD.Kv.LOW;
                    case eD.Li.LOWER:
                        return eD.Kv.MEDIUM;
                    case eD.Li.UPPER:
                        return eD.Kv.HIGH;
                    case eD.Li.TOP:
                        return eD.Kv.FULL;
                    default:
                        return;
                }
            })(a);
        return (0, l.jsx)(eN, {
            className: v()(
                p,
                { [ss.yw]: !n, [ss.CP]: n, [ss.xt]: h, [ss.iM]: c, [ss.ip]: u, [ss.dp]: n, "overlay-unlocked": !t },
                o,
            ),
            type: r,
            opacity: a,
            children: e,
        });
    }
    renderContainedWrapper(e) {
        return (0, l.jsx)("div", { className: ss.k_, children: e });
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
                (0, l.jsx)(st, {
                    draggableClassName: ss.bl,
                    className: ss.fB,
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
                e || i ? null : (0, l.jsx)("div", { className: ss.cB, onMouseDown: this.resizeDragStart }),
            ],
        });
        return s ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o);
    }
}
function sd(e) {
    let { contained: t = !1, ...n } = e,
        i = (0, r.bG)([nA.A], () => nA.A.getGuildId()),
        s = (0, r.bG)([e7.Ay], () => e7.Ay.getChannelId(i)),
        a = (0, r.bG)([e8.A], () => e8.A.getChannel(s)),
        o = (0, r.bG)([ti.Ay], () => ti.Ay.getOverlayChatKeybind()),
        d = null != o ? (0, tr.dI)(o.shortcut, !0) : "]",
        [c, u, h] = (0, r.yK)([ts.default], () => [
            ts.default.getTextWidgetOpacity(),
            ts.default.getActiveRegions(),
            !t && ts.default.isPreviewingInGame(),
        ]),
        p = (0, r.bG)([e6.A], () => e6.A.getGuild(i)),
        g = (0, r.bG)([iU.A], () => null != i && iU.A.didAgree(i)),
        A = null != a && a.isPrivate() ? a.getRecipientId() : null,
        m = (0, r.bG)([iP.A], () => (null != s ? iP.A.getPendingReply(s) : void 0)),
        f = (0, r.bG)([tv.default], () => (null != A ? tv.default.getUser(A) : null)),
        { placeholder: E } = (0, iC.A)({ channel: a });
    return null != a && null != p && ey.kvI.GUILD_THREADS_ONLY.has(a.type)
        ? (0, l.jsx)(iI.default, {})
        : (0, l.jsx)(sr, {
              guild: p,
              channel: a,
              user: f,
              opacity: c,
              nsfwAgree: g,
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
var sc = n(42853);
function su(e) {
    let { dragStart: t, dragging: n, pinned: i, locked: s, className: a } = e;
    return (0, l.jsxs)(eN, {
        className: v()(sc.i, a),
        children: [
            (0, l.jsx)(iE, { contained: !0, dragStart: t, locked: s }),
            (0, l.jsx)(sd, { dragStart: t, locked: s, pinned: i, dragging: n, contained: !0 }),
        ],
    });
}
var sh = n(661531),
    sp = n(319060),
    sg = n(983851),
    sA = n(959988),
    sm = n(401843),
    sf = n(717558),
    sE = n(429913),
    sy = n(769015),
    sS = n(652896),
    sx = n(277680),
    sv = n(118277),
    sC = n(22705),
    sI = n(994314),
    s_ = n(209932),
    sN = n(63995),
    sT = n(518769),
    sO = n(520006),
    sj = n(352018),
    sD = n(936520),
    sR = n(760751),
    sb = n(485296),
    sL = n(996439),
    sw = n(427262),
    sM = n(561028),
    sk = n(83107),
    sP = n(831544),
    sV = n(990836),
    sG = n(597601),
    sU = n(827343),
    sz = n(951001),
    sH = n(42473),
    sW = n(978171),
    sK = n(999751),
    sB = n(977997),
    sF = n(572487),
    sY = n(73620),
    sZ = n(187529);
class sX extends a.PureComponent {
    rtcConnectionStatusRef = a.createRef();
    handleToggleSelfMute = () => {
        let { context: e } = this.props;
        sU.default.toggleSelfMute({ context: e, location: "Overlay Controls" });
    };
    handleToggleSelfDeaf = () => {
        let { context: e } = this.props;
        sU.default.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
    };
    handleDisconnect() {
        tN.default.selectVoiceChannel(null);
    }
    renderPopout = (e) => {
        let { lobbyId: t } = this.props;
        return (0, l.jsx)(sW.A, { channelId: e, lobbyId: t, isOverlay: !0 });
    };
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, tO.m1)(e, tv.default, tD.A),
            i = null != t ? `${n} / ${t.name}` : n,
            s = null != t ? t.id : ey.ME;
        return (0, l.jsx)(sM.N_, {
            to: ey.BVt.CHANNEL(s),
            onClick: (t) => {
                (t.stopPropagation(), sz.A.channelListScrollTo(s, e.id));
            },
            children: (0, l.jsx)(sI.A, { className: sZ.Ix, children: i }),
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
                  className: v()(e, sY.ne, { [sY.CW]: !n }),
                  children: (0, l.jsxs)(eN.Content, {
                      className: v()(t, sY.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, l.jsx)("div", {
                              className: sZ.vW,
                              children: (0, l.jsx)(nf.Y, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, l.jsx)(D.D, {
                                          ...e,
                                          innerRef: this.rtcConnectionStatusRef,
                                          children: (0, l.jsx)(sK.A, {
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
                          (0, l.jsxs)(eq.A, {
                              grow: 0,
                              children: [
                                  (0, l.jsx)(sH.A, {
                                      tooltipText: u ? U.intl.string(U.t.YqAjXy) : U.intl.string(U.t.w4m945),
                                      icon: u ? sk.z : sP.MicrophoneIcon,
                                      iconForeground: u ? sY.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, l.jsx)(sH.A, {
                                      tooltipText: c ? U.intl.string(U.t["2US872"]) : U.intl.string(U.t.wjcRFX),
                                      icon: c ? sV.c : sG.L,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: c ? sY.of : null,
                                  }),
                                  null == i &&
                                      (0, l.jsx)(sH.A, {
                                          tooltipText: U.intl.string(U.t["6vrfgt"]),
                                          onClick: this.handleDisconnect,
                                          icon: iF.z,
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function sJ(e) {
    let { context: t, lobbyId: n, channel: i, ...s } = e,
        a = (0, r.bG)([e6.A], () => e6.A.getGuild(i?.getGuildId())),
        o = (0, r.bG)([sB.A], () => null != i && sB.A.hasVideo(i.id)),
        [d, c] = (0, r.yK)([e4.Ay], () => [
            e4.Ay.isSelfMute(t) || e4.Ay.isSelfMutedTemporarily(t),
            e4.Ay.isSelfDeaf(t),
        ]),
        [u, h, p] = (0, r.yK)([sF.A], () => [sF.A.getConnectionState(n), sF.A.getLastPing(n), sF.A.getQuality(n)]);
    return (0, l.jsx)(sX, {
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
var sQ = n(731854),
    sq = n(639822);
function s$(e) {
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
            guildId: g,
            voiceState: A,
        } = e,
        m = (0, r.bG)([e4.Ay], () => e4.Ay.isLocalMute(i.id)),
        f = (0, r.bG)([e3.A], () => e3.A.getCurrentUserActiveStream()),
        E = (0, r.yK)([e3.A], () => (null != f ? e3.A.getViewerIds(f) : [])),
        y = (0, sf.A)({ userId: i.id, context: p }),
        S = (0, r.bG)([s_.A], () => s_.A.isUserPlayingSounds(i.id)),
        x = y || S,
        C = (0, r.bG)([sb.A], () => sb.A.isPrioritySpeaker(i.id, p)),
        I = (0, r.bG)([e3.A], () => null != e3.A.getStreamForUser(i.id, g)),
        _ = a.useMemo(() => null != f && f.ownerId !== i.id && E.includes(i.id), [f, i.id, E]);
    if (d === ey.f5z.ONLY_WHILE_SPEAKING && n && !x) return null;
    let { mute: N, selfMute: T, suppress: O, deaf: j, selfDeaf: D } = A;
    return (0, l.jsx)(sD.Ay, {
        guildId: g,
        onClick: n ? void 0 : (e) => u?.(e, i),
        onContextMenu: n ? void 0 : (e) => h?.(e, i),
        className: v()(sq.TX, { [sq.zj]: !x, [sq.bG]: !n }),
        user: i,
        nick: s,
        speaking: !1,
        playingSoundboard: !1,
        flipped: t,
        isStreaming: I,
        iconClassName: v()(sq.Ow, { [sq.xt]: n }),
        isWatching: _,
        isOverlay: !0,
        size: c,
        priority: C,
        mute: N || T || m,
        localMute: m,
        serverMute: N || O,
        deaf: j || D,
        serverDeaf: j,
        userNameClassName: v()(sq.Xh, {
            [sq.xt]: n,
            [sq.R]: n && (o === ey.pwA.NEVER || (!x && o === ey.pwA.ONLY_WHILE_SPEAKING)),
        }),
    });
}
class s0 extends a.PureComponent {
    static defaultProps = { context: sQ.x.DEFAULT };
    handleUserContextMenu = (e, t) => {
        let { context: i } = this.props;
        (0, eB.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("463317"),
                n.e("893190"),
                n.e("189673"),
                n.e("882073"),
                n.e("797558"),
                n.e("691994"),
                n.e("576665"),
                n.e("624198"),
                n.e("532418"),
            ]).then(n.bind(n, 668569));
            return (n) => (0, l.jsx)(e, { ...n, user: t, showMediaItems: !0, mediaEngineContext: i });
        });
    };
    handleOpenVoiceSettings = () => {
        let { context: e, channel: t, title: i } = this.props;
        (0, eK.openModalLazy)(async () => {
            let { default: s } = await Promise.all([n.e("161411"), n.e("846327"), n.e("725246"), n.e("796531")]).then(
                n.bind(n, 880510),
            );
            return (n) => (0, l.jsx)(s, { ...n, mediaEngineContext: e, subtitle: null != t ? void 0 : i });
        });
    };
    handlePin = () => {
        let e = !this.props.pinned;
        (0, ej.g)(ey.HAw.OVERLAY_PIN_TOGGLED, {
            pinned: e,
            guild_id: this.props.channel?.guild_id,
            channel_id: this.props.channel?.id,
            channel_type: this.props.channel?.type,
            widget_type: ey.uss.VOICE,
        });
        let { id: t } = this.props;
        (0, nn.v0)(t);
    };
    handleStopStream = () => {
        let { stream: e } = this.props;
        null != e && sm.vN((0, sS._z)(e));
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
                    s$,
                    {
                        guildId: o?.guild_id,
                        user: r,
                        nick: h?.nick ?? sw.Ay.getName(r),
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
            className: v()({ [sp.A.VOICE_WIDGET_TOP_MARGIN]: s, [sq.mn]: s }),
            children: (0, l.jsx)(sD.Wr, { className: sq.tA, children: u }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, l.jsxs)(eN.Bar, {
            className: v()(sq.bl, { [sq.VH]: n }),
            children: [
                (0, l.jsxs)(eN.Content, {
                    dynamicSize: !0,
                    className: v()(sq.Qs, { [sq.R]: n }),
                    children: [
                        (0, l.jsx)(iJ.W, {
                            size: "custom",
                            color: sh.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: v()(sq.Kk, sq.zj, sq.co),
                        }),
                        (0, l.jsx)(sg.H, {
                            size: "custom",
                            color: sh.A.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: v()(sq.Kk, sq.zj, sq.Xk),
                        }),
                        (0, l.jsx)(n0.E, {
                            variant: "text-md/normal",
                            style: { color: sh.A.unsafe_rawColors.PRIMARY_200.css },
                            className: sq.DD,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, l.jsx)(eN.Icon, {
                          icon: nE.SettingsIcon,
                          label: U.intl.string(U.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, l.jsx)(eN.Icon, {
                          icon: e ? iZ.h : iX.q,
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
        let { sanitizedTitle: d, title: c } = (0, sx.A)(a);
        return (0, l.jsx)(eN.Bar, {
            className: v()(sq.Wm, { [sq.R]: n, [sq.CW]: !t }),
            children: (0, l.jsxs)(eN.Content, {
                className: sq.Vb,
                dynamicSize: !0,
                children: [
                    (0, l.jsxs)("div", {
                        className: sq.gk,
                        children: [
                            o?.id != null && o.id === s?.id
                                ? (0, l.jsx)(sy.A, { className: sq.Gt, game: s })
                                : (0, l.jsx)(sv.A, { title: d }),
                            (0, l.jsxs)(eq.A, {
                                direction: eq.A.Direction.VERTICAL,
                                justify: eq.A.Justify.BETWEEN,
                                className: sq.gA,
                                children: [
                                    (0, l.jsx)(n0.E, {
                                        className: sq.$A,
                                        variant: "text-sm/normal",
                                        children: U.intl.string(U.t.XKYej5),
                                    }),
                                    (0, l.jsx)(sI.A, { children: o?.name ?? c }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsxs)(eq.A, {
                        grow: 0,
                        children: [
                            (0, l.jsx)("div", {
                                className: sq.yf,
                                children: (0, l.jsx)(sO.A, {
                                    stream: r,
                                    iconClassName: sq.Nd,
                                    appContext: ey.BRT.OVERLAY,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: sq.yf,
                                children: (0, l.jsx)(sj.A, { stream: r, appContext: ey.BRT.OVERLAY }),
                            }),
                            (0, l.jsx)("div", {
                                className: sq.yf,
                                children: (0, l.jsx)(eE.m, {
                                    asContainer: !0,
                                    text: U.intl.string(U.t.S5anIc),
                                    children: (0, l.jsx)(D.D, {
                                        onClick: this.handleStopStream,
                                        "aria-label": U.intl.string(U.t.S5anIc),
                                        children: (0, l.jsx)(sA.G, {
                                            size: "md",
                                            color: "currentColor",
                                            className: sq.Nd,
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
        (0, iK.j_)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, iK.Mw)(e, this.props, this.shouldDisplay);
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
                        : (0, l.jsx)(sJ, {
                              className: v()({ [sq.VH]: s }),
                              contentClassName: v()({ [sq.R]: s }),
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
function s1(e) {
    let t = (0, r.bG)([e7.Ay, e8.A], () => e8.A.getChannel(e7.Ay.getVoiceChannelId())),
        n = (0, tO.Ay)(t),
        i = (function () {
            let [e] = (0, r.bG)(
                [nG.Ay, sN.A, e7.Ay, e8.A],
                () => {
                    let e = e8.A.getChannel(e7.Ay.getVoiceChannelId());
                    return null == e
                        ? [[], -1]
                        : e.isGuildStageVoice()
                          ? [sN.A.getMutableParticipants(e.id, sT.ip.SPEAKER), sN.A.getParticipantsVersion(e.id)]
                          : [nG.Ay.getVoiceStatesForChannel(e), nG.Ay.getVoiceStateVersion(e.getGuildId())];
                },
                [],
                sL.D,
            );
            return e;
        })(),
        s = (0, r.bG)([e3.A], () => e3.A.getStreamerActiveStreamMetadata()),
        a = (0, r.bG)([e$.Ay, tt.A, sR.A], () => {
            let e = (0, e1.A)(e$.Ay, tt.A);
            return null != e ? sR.A.findGame(e)?.id : null;
        }),
        o = (0, sE.h)(a),
        d = (0, r.cf)([e$.Ay, tt.A, e3.A, ts.default], () => {
            let e = (0, e1.A)(e$.Ay, tt.A),
                t = e3.A.getCurrentUserActiveStream();
            return {
                displayUserMode: ts.default.getDisplayUserMode(),
                displayNameMode: ts.default.getDisplayNameMode(),
                avatarSizeMode: ts.default.getAvatarSizeMode(),
                streamApplication: s?.pid === (0, Q.getPID)() ? (0, sC.A)(e) : null,
                stream: t,
            };
        });
    return (0, l.jsx)(s0, {
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
let s5 = {
    [ey.uss.TEXT](e) {
        let { dragging: t, locked: n, pinned: i, dragStart: s, className: a } = e;
        return (0, l.jsx)(sd, { dragStart: s, locked: n, pinned: i, dragging: t, className: a });
    },
    [ey.uss.GUILDS](e) {
        let { locked: t, dragStart: n, className: i } = e;
        return (0, l.jsx)(iE, { dragStart: n, locked: t, className: i });
    },
    [ey.uss.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: i, locked: s, pinned: a } = e;
        return (0, l.jsx)(s1, { anchor: n, id: t, locked: s, pinned: a, widget: ey.uss.VOICE, isPreviewingInGame: i });
    },
    [ey.uss.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: i, className: s } = e;
        return (0, l.jsx)(su, { dragStart: i, dragging: t, locked: n, pinned: !1, className: s });
    },
};
class s2 extends a.PureComponent {
    state = { lastLayoutUpdate: null, dragging: !1 };
    componentDidUpdate(e) {
        this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            ((0, ej.g)(ey.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    handleUpdate = (e, t, n, i, s) => {
        let {
            props: { layoutSize: l },
            state: { lastLayoutUpdate: a },
        } = this;
        if (!(0, Q.validResolution)(l)) return;
        let o = (0, ns.NO)(n, l),
            r = (0, ns.R9)(i, l);
        ((0, nn.uD)(t), (0, nn.Ju)({ widgetId: t, anchor: o, size: r }));
        let d = e === na.MOVE,
            c = (0, ns.Ly)(n, l.width, l.height, s.width, s.height);
        this.setState({
            lastLayoutUpdate: {
                was_resized: (null != a && a.was_resized) || !d,
                was_dragged: (null != a && a.was_dragged) || d,
                widget_type: e9.A.getWidgetType(t),
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
        (0, Q.validResolution)(t) && (0, nn.uD)(e);
    };
    handleDragStart = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && ei.A.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
    };
    handleDragEnd = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && ei.A.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
    };
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: l },
            } = this,
            a = s5[e.type];
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
            p = (0, ns.fd)(c, n),
            g = (0, ns.Nv)(u, n),
            { resizeX: A, resizeY: m, dragAnywhere: f } = t,
            E = (0, iK.AE)({ locked: i, isPreviewingInGame: s, pinned: r }),
            y = { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
            S = this.renderWidget(e, g, p);
        return null == S
            ? null
            : (0, l.jsx)(np, {
                  id: o,
                  size: p,
                  anchor: g,
                  container: y,
                  minSize: h,
                  hidden: !E,
                  resizeX: A,
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
let s3 = r.Ay.connectStores([e9.A, ts.default], (e) => {
    let { widgetId: t } = e,
        n = e9.A.getWidget(t),
        i = ts.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? e9.A.getWidgetConfig(n.type) : null,
        locked: ts.default.isInstanceLocked(),
        isPreviewingInGame: ts.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === ey.uss.TEXT && i.has(ey.ajI.TEXT_WIDGET),
    };
})(s2);
function s8(e, t) {
    return (0, l.jsx)(s3, { widgetId: e, layoutSize: t }, e);
}
let s6 = r.Ay.connectStores([e9.A, tl.A], () => ({
    layout: e9.A.getLayout(Q.OVERLAY_LAYOUT_ID) ?? void 0,
    layoutSize: tl.A.windowSize(),
    renderWidget: s8,
}))(ni);
var s9 = n(806163),
    s4 = n(66834),
    s7 = n(549711),
    le = n(463347);
class lt extends a.Component {
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
        (0, le.nn)(t) && (0, le.ts)(n)
            ? (s4.A.selectGuild(t), tN.default.selectChannel({ guildId: t, channelId: n, messageId: i }))
            : (0, Z.bG)(ey.BVt.ME);
    }
    render() {
        return null;
    }
}
let ln = function () {
    return (0, l.jsxs)(s9.dO, {
        children: [
            (0, l.jsx)(s7.A, {
                path: ey.BVt.CHANNEL(le.pv.guildId(), le.pv.channelId({ optional: !0 }), ":messageId?"),
                component: lt,
            }),
            (0, l.jsx)(s7.A, { component: lt }),
        ],
    });
};
var li = n(528772),
    ls = n(944775),
    ll = n(317084),
    la = n(427603),
    lo = n(980504),
    lr = n(308143);
function ld() {
    let [e, t] = (0, r.yK)([li.A], () => [li.A.enabled, li.A.keepOpen]),
        n = (0, r.bG)([e7.Ay], () => e7.Ay.getVoiceChannelId()),
        i = (0, r.bG)([e8.A], () => e8.A.getChannel(n), [n]),
        s = i?.getGuildId();
    return e && null != i
        ? (0, l.jsx)("div", {
              className: lr.H,
              children: (0, l.jsx)(ll.A, {
                  width: lo.ed.width,
                  height: lo.ed.height,
                  guildId: s,
                  channel: i,
                  keepOpen: t,
                  onClose: function () {
                      let e = (0, la.A)();
                      null != e && (0, ls.Lk)(e);
                  },
                  analyticsSource: "overlay",
              }),
          })
        : null;
}
n(644434);
var lc = n(743040);
((r.Ay.PersistedStore.disableWrites = __OVERLAY__), r.Ay.initialize());
let lu = null;
function lh(e) {
    e.preventDefault();
}
function lp(e) {
    (0, eB.L3)(e, async () => {
        let { default: e } = await n.e("392843").then(n.bind(n, 254790));
        return (t) => (0, l.jsx)(e, { ...t, version: 0 });
    });
}
function lg(e) {
    let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
        a = s ? D.D : "div";
    return (0, l.jsx)(a, {
        className: v()(lc.LK, { [lc.Zo]: !s, [lc.vZ]: s, [lc.Az]: !s && i }),
        onMouseDown: (e) => {
            let { currentTarget: t, target: i, button: s } = e;
            s === ey.hE4.PRIMARY && t === i && n();
        },
        onContextMenu: lp,
        children: s
            ? null
            : (0, l.jsx)("div", {
                  className: lc.G3,
                  children: (0, l.jsx)(eF.A, { variant: eF.A.Variants.BOLD, keybind: t, closeAction: n }),
              }),
    });
}
function lA(e) {
    let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l };
}
eo.isPlatformEmbedded;
class lm extends a.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && ts.default.isPinned(ey.uss.TEXT);
        (eZ.A.setLayout(t ? eY.dY : eY.CJ), t && eZ.A.enable());
    }
    handleLock() {
        (0, eK.hasAnyModalOpen)() || tn.A.isOpen() || ei.A.setInputLocked(!0, (0, Q.getPID)());
    }
    handleDeactivate() {
        ei.A.deactivateAllRegions();
    }
    debouncedForceUpdate = ez()(() => {
        this.forceUpdate();
    }, 500);
    handleWindowResize = () => {
        es.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
    };
    componentDidMount() {
        (ei.A.startSession(), e5.A.initialize(), eX.A.initialize(), e2.A.initialize());
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (!this.didUpdate) {
                ((this.didUpdate = !0), this.initialSetup());
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", lh, !1), null != lu)) {
                    let e = Date.now() - lu;
                    ((0, ej.g)(ey.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (lu = null));
                }
                (eZ.A.disable(),
                    (this.activeKeyEventShapes = []),
                    ts.default.isPinned(ey.uss.TEXT) && (eZ.A.setLayout(eY.dY), eZ.A.enable()));
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", lh, !1),
                    null == lu && ((lu = Date.now()), (0, ej.g)(ey.HAw.OVERLAY_UNLOCKED)),
                    eZ.A.disable(),
                    (this.activeKeyEventShapes = []),
                    eZ.A.setLayout(eY.CJ),
                    eZ.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, tr.pi)(this.props.keybindKeyCodes));
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
        (0, ej.g)(ey.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: ts.default.isPinned(ey.uss.TEXT),
            overlay_render_method: $.Ue[$.Ue.Hook],
            unpinned_widget_types: e9.A.getAllUnpinnedPinnedWidgets(Q.OVERLAY_LAYOUT_ID),
        });
        let c = s && !a && null != d,
            u = t && null != o && null != r,
            h = tz.A.isNotificationDisabled(eD.KS.WelcomeNudge),
            p = tz.A.isNotificationDisabled(eD.KS.GoLiveNudge);
        if (
            (h || (e = { type: eD.Jr.WELCOME }),
            c && u && !p
                ? (e = { type: eD.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: r, voiceGuild: o })
                : c && !p && (e = { type: eD.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                (await (0, to.pF)(), null != e ? ei.A.overlayMounted(e) : ei.A.overlayMounted());
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", lh, !1),
            eo.isPlatformEmbedded)
        ) {
            let e = (0, el.m)();
            if (null == e) return;
            (void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    (0, ej.g)(ey.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * J.A.Millis.MINUTE })),
                ta.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    ts.default.getDisableExternalLinkAlert() || t === te.A.getLastURL()
                        ? ta.Ay.send("OPEN_EXTERNAL_URL", t)
                        : (0, eK.openModalLazy)(async () => {
                              let { default: e } = await n.e("730582").then(n.bind(n, 613429));
                              return (n) => (0, l.jsx)(e, { ...n, url: t });
                          });
                }));
        }
        (window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0));
    }
    componentWillUnmount() {
        (window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked && window.removeEventListener("contextmenu", lh, !1),
            e5.A.terminate(),
            eX.A.terminate(),
            e2.A.terminate());
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, tr.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => eW()(t, e));
    onKeyDownGlobal = (e) => {
        let t = lA(e),
            n = this.getActiveKeyEventIndex(t) > -1,
            i = [16, 17, 18, 91].includes(e.keyCode);
        (n || i || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => eW()(e, t))) &&
                (e.preventDefault(), e.stopPropagation()));
        let { locked: s, activeRegions: l } = this.props;
        t.keyCode === eG().codes.esc && s && l.has(ey.ajI.TEXT_WIDGET) && ei.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = lA(e),
            n = this.getActiveKeyEventIndex(t);
        n > -1 && this.activeKeyEventShapes.splice(n, 1);
    };
    renderInvalidSizeMessage() {
        return (0, l.jsx)(eq.A, {
            justify: eq.A.Justify.CENTER,
            align: eq.A.Align.CENTER,
            className: lc.rU,
            children: (0, l.jsx)("div", {
                className: lc.JV,
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
            className: lc.Lw,
            children: [
                (0, l.jsx)(ln, {}),
                a && (0, l.jsx)("header", { className: lc.tk, children: U.intl.string(U.t.iOq96m) }),
                i,
                (!e || o.has(ey.ajI.TEXT_WIDGET)) &&
                    (0, l.jsx)(lg, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a,
                    }),
                (0, Q.validResolution)(r)
                    ? (0, l.jsx)(s6, { className: v()({ [lc.ZK]: e, [lc.al]: !e }) })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, l.jsx)(ld, {}),
                (0, l.jsx)(ne, { locked: u, keybind: t }),
                (0, l.jsx)(tc.A, {}),
                (0, l.jsx)("div", { className: lc._C }),
            ],
        });
    }
}
function lf() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s,
        } = (0, r.cf)([ts.default], () => ({
            locked: ts.default.isLocked((0, Q.getPID)()),
            initialized: ts.default.initialized,
            incompatibleApp: ts.default.incompatibleApp,
            activeRegions: ts.default.getActiveRegions(),
            isPreviewingInGame: ts.default.isPreviewingInGame(),
        })),
        o = (0, r.bG)([tl.A], () => tl.A.windowSize()),
        d = (0, r.bG)([ti.Ay], () => ti.Ay.getOverlayKeybind()),
        c = (0, r.bG)([e7.Ay], () => e7.Ay.getVoiceChannelId()),
        u = (0, r.bG)([e8.A], () => e8.A.getChannel(c)),
        h = (0, r.bG)([e6.A], () => (null != u ? e6.A.getGuild(u.guild_id) : null)),
        p = (0, r.bG)([e$.Ay, tt.A], () => (0, e1.A)(e$.Ay, tt.A)),
        g = (0, r.bG)([e4.Ay], () => (0, e0.A)(e4.Ay)),
        A = (0, r.bG)([e3.A], () => null != e3.A.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, eQ.Ay)(eJ.A.OVERLAY);
    return (
        a.useEffect(() => {
            t && (0, td.E)();
        }, [t]),
        (0, l.jsx)(eQ.f5, {
            value: m,
            children: (0, l.jsx)(lm, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: s,
                windowSize: o,
                keybind: null != d ? (0, tr.dI)(d.shortcut, !0) : "???",
                keybindKeyCodes: null != d ? d.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != u ? u.id : null,
                voiceGuild: h,
                game: p,
                canGoLive: g,
                isStreaming: A,
            }),
        })
    );
}
var lE = n(136722),
    ly = n(488926);
(__OVERLAY__ &&
    tg.h.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
        let {
                clientId: t,
                authorizeProps: { authorizations: i, permissions: s, ...a },
            } = e,
            o = `OAuth2Authorize_${t}_${a.guildId}_${a.channelId}`;
        function r(e) {
            let { location: n } = e;
            tg.h.dispatch({ type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE", clientId: t, location: n });
        }
        let d = ly.x3;
        try {
            d = lE.iu(s ?? 0);
        } catch (e) {}
        (0, eK.openModalLazy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 887909));
                return (t) => (0, l.jsx)(e, { ...t, ...a, authorizations: new Map(i), permissions: d, callback: r });
            },
            {
                modalKey: o,
                onCloseRequest: () => {
                    ((0, eK.closeModal)(o), r({}));
                },
            },
        );
    }),
    n(939857),
    n(40876),
    __OVERLAY__ &&
        tg.h.subscribe("OVERLAY_OPEN_MESSAGE", function (e) {
            let { guildId: t, channelId: n, messageId: i } = e;
            (0, Z.bG)({ pathname: ey.BVt.CHANNEL(t, n, i) });
        }),
    n(921955),
    r.Ay.initialize());
let lS = function () {
    return (
        a.useEffect(
            () => (
                y.A.initialize(),
                p.A.initialize(),
                S.A.init(),
                () => {
                    (y.A.terminate(), p.A.terminate());
                }
            ),
            [],
        ),
        (0, l.jsxs)(a.Fragment, {
            children: [
                (0, l.jsx)(g.A, {}),
                (0, l.jsx)(u.N, {
                    children: (0, l.jsxs)(eP, {
                        children: [
                            (0, l.jsx)(m.Al, {}),
                            (0, l.jsx)(A.Ay, {}),
                            (0, l.jsx)(E.Wr, {
                                appContext: ey.BRT.OVERLAY,
                                renderWindow: window,
                                children: (0, l.jsx)(h.A, {
                                    children: (0, l.jsxs)(f.Yf, {
                                        children: [
                                            (0, l.jsx)(lf, {}),
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
