"use strict";
let i, r;
n.d(t, { A: () => t$ });
var s = n(627968),
    a = n(64700),
    o = n(17928),
    l = n(31728),
    d = n(933958),
    _ = n(216418),
    u = n(969151),
    c = n(108959),
    E = n(503698),
    h = n.n(E),
    m = n(289873),
    f = n(228366),
    g = n(367513),
    p = n(951001),
    A = n(398590),
    I = n(793574),
    T = n(688810),
    S = n(429913),
    N = n(568598),
    C = n(313961),
    R = n(976860),
    O = n(272812),
    y = n(461782),
    v = n(334463),
    D = n(309010),
    L = n(287809),
    b = n(795816),
    w = n(851907),
    P = n(536246),
    k = n(395678),
    M = n(847374),
    U = n(939249),
    x = n(365199),
    G = n(827343),
    V = n(525788),
    F = n(384059),
    B = n(47167),
    H = n(235986),
    j = n(267102),
    W = n(574172),
    Y = n(704877),
    K = n(222692),
    z = n(447404),
    $ = n(73939),
    q = n(477155),
    X = n(534514),
    Z = n(615300),
    Q = n(451988),
    J = n(652215),
    ee = n(507252);
let et = {
    [J.DUB.NORMAL]: ee.qb,
    [J.DUB.MINIMUM]: ee.Bp,
    [J.DUB.NO_CHAT]: ee.Oo,
    [J.DUB.FULL_SCREEN]: ee.iy,
    [J.DUB.HAVEN]: ee.VT,
};
class en extends a.PureComponent {
    constructor(e) {
        super(e), (this.state = { animation: new Z.A.Value(0) });
    }
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: t } = this.state;
        t.setValue(0), Z.A.spring(t, { toValue: 1, overshootClamping: !0 }).start(e);
    }
    componentWillLeave(e) {
        Z.A.spring(this.state.animation, { toValue: 0, overshootClamping: !0 }).start(e);
    }
    render() {
        return (0, s.jsx)(Z.A.div, {
            className: h()(ee.$c, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children,
        });
    }
}
class ei extends a.PureComponent {
    static defaultProps = { layout: J.DUB.MINIMUM, animated: !0 };
    _timeout = new Q.Ep();
    constructor(e) {
        super(e), (this.state = { idle: !1, backgroundAnimation: new Z.A.Value(0), layoutProp: e.layout });
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleMouseEvent, !0),
            document.addEventListener("mousemove", this.handleMouseEvent, !0);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleMouseEvent, !0),
            document.removeEventListener("mousemove", this.handleMouseEvent, !0),
            this._timeout.stop();
    }
    static getDerivedStateFromProps(e, t) {
        return e.layout !== t.layoutProp
            ? t.idle
                ? { idle: !1, layoutProp: e.layout }
                : { layoutProp: e.layout }
            : null;
    }
    componentDidUpdate(e) {
        this.props.layout !== e.layout && this._timeout.stop();
    }
    handleMouseEvent = () => {
        let { layout: e } = this.props;
        (e === J.DUB.FULL_SCREEN || e === J.DUB.NO_CHAT) &&
            (this._timeout.start(3e3, () => this.setState({ idle: !0 })),
            this.state.idle && this.setState({ idle: !1 }));
    };
    renderBackground() {
        let { background: e, backgroundKey: t, layout: n } = this.props,
            i = `${n}-${t ?? ""}`;
        return (0, s.jsx)($.F, { className: ee.yG, component: "div", children: (0, s.jsx)(en, { children: e }, i) });
    }
    renderContents() {
        let { top: e, center: t, bottom: n, layout: i, focused: r } = this.props,
            { idle: a } = this.state;
        return (0, s.jsx)(H.A, {
            className: h()(ee.Ki, et[i], { [ee.N7]: a }),
            direction: H.A.Direction.VERTICAL,
            justify: H.A.Justify.CENTER,
            children: (0, s.jsxs)(H.A, {
                className: ee.tN,
                direction: H.A.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, s.jsxs)(H.A, {
                        className: h()(ee.IR, { [ee.in]: r }),
                        direction: H.A.Direction.VERTICAL,
                        justify: H.A.Justify.BETWEEN,
                        children: [
                            (0, s.jsx)(H.A, { className: ee.JV, grow: 0, children: e }),
                            (0, s.jsx)(H.A, { className: ee.R2, children: t }),
                            (0, s.jsx)(H.A, { className: ee.ZJ, grow: 0, children: n }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { layout: e, className: t, animated: n } = this.props;
        return (0, s.jsx)("div", { className: h()(ee.hP, et[e], t, { [ee.CS]: n }), children: this.renderContents() });
    }
}
var er = n(763827);
n(321073);
var es = n(661531),
    ea = n(477782),
    eo = n(550079),
    el = n(922016),
    ed = n(530005),
    e_ = n(587895),
    eu = n(616356),
    ec = n(806931),
    eE = n(985018),
    eh = n(27600);
function em(e) {
    let t,
        n,
        { closePopout: i, idle: r, pipWindows: a, voiceChannelId: _, onSelect: u } = e;
    r && i();
    let c = (0, o.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        E = (0, o.bG)([v.A], () => v.A.pipWindow),
        h = (0, o.bG)([C.A], () => C.A.getSelectedParticipant(_)),
        m = (0, o.bG)([C.A], () => C.A.getStreamParticipants(_));
    return (0, s.jsx)(eo.W, {
        "data-menu-migrated": !0,
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: i,
        onSelect: u,
        children: ((t = []),
        null != (n = a.find((e) => e.component === J.o1q.VIDEO)) &&
            m.forEach((e) => {
                let i = eu.A.getActiveStreamForApplicationStream(e.stream),
                    r = e.id === h?.id && E?.id === n.id;
                null == i || r || t.push({ pipWindow: n, participant: e, stream: i });
            }),
        t).map(function (e) {
            let t = e.pipWindow.id,
                n = e.participant?.id,
                i = (function (e) {
                    if (e.pipWindow.component === J.o1q.ACTIVITY && null != c) {
                        let e = e_.A.getApplication(c.applicationId)?.name;
                        return null == e
                            ? eE.intl.string(eE.t["8raC1P"])
                            : eE.intl.formatToPlainString(eE.t["a9+V+V"], { activityName: e });
                    }
                    return null == e.participant || e.participant.type !== ec.lp.STREAM
                        ? eE.intl.string(eE.t["ng/Kwl"])
                        : eE.intl.formatToPlainString(eE.t.sqmFRg, { username: e.participant.userNick });
                })(e),
                r = `${t}${n ?? ""}`;
            return (0, s.jsx)(
                ea.Dr,
                {
                    id: r,
                    label: i,
                    action: () => {
                        let t;
                        return (
                            E?.id !== e.pipWindow.id && (0, l.mf)(e.pipWindow.id),
                            void (
                                null != (t = e.participant) &&
                                t.type !== ec.lp.ACTIVITY &&
                                g.A.selectParticipant(_, t.id)
                            )
                        );
                    },
                },
                r,
            );
        }),
    });
}
let ef = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        i = a.useRef(null),
        r = Array.from((0, o.bG)([v.A], () => v.A.pipWindows).values()).filter((e) => e.component !== J.o1q.ACTIVITY),
        l = (0, o.yK)([eu.A], () => eu.A.getAllActiveStreamsForChannel(t)).filter(
            (e) => e.ownerId !== L.default.getCurrentUser()?.id && e.channelId === t,
        ),
        d = (1 === r.length && r[0].component === J.o1q.ACTIVITY) || 0 === l.length,
        _ = 1 === r.length && l.length <= 1;
    return d || _
        ? null
        : (0, s.jsx)(el.Y, {
              targetElementRef: i,
              position: "bottom",
              renderPopout: (e) => (0, s.jsx)(em, { voiceChannelId: t, pipWindows: r, idle: n, ...e }),
              children: (e) =>
                  (0, s.jsx)(U.D, {
                      className: eh.ro,
                      ...e,
                      innerRef: i,
                      children: (0, s.jsx)(ed.F, { size: "md", color: es.A.unsafe_rawColors.WHITE.css }),
                  }),
          });
};
var eg = n(919706);
function ep(e) {
    let { title: t, onJumpToChannel: n, idle: i, preventIdleComponent: r } = e,
        a = (0, o.bG)([er.A], () => er.A.getChannelId()),
        l = null != a ? (0, s.jsx)(ef, { voiceChannelId: a, idle: i }) : null;
    return (0, s.jsxs)(r, {
        className: eh.Nc,
        children: [
            (0, s.jsxs)(U.D, {
                className: eh.qd,
                onClick: n,
                children: [
                    (0, s.jsx)(q.r, {
                        size: "custom",
                        color: "currentColor",
                        "aria-label": eE.intl.string(eE.t.mSfLs0),
                        className: eh.Gv,
                        width: 20,
                        height: 20,
                    }),
                    (0, s.jsx)(X.D, {
                        variant: "heading-md/normal",
                        className: eh.TK,
                        color: "always-white",
                        children: t,
                    }),
                ],
            }),
            l,
        ],
    });
}
function eA(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: i,
        backgroundKey: r,
        onActive: a,
        onForceIdle: o,
        renderBottomLeftControls: l,
        renderBottomRightControls: d,
        screenMessage: _,
        hideControls: u = !1,
        className: c,
        innerClassName: E,
        videoControlsClassName: m,
        ...f
    } = e;
    return (0, s.jsxs)("div", {
        onMouseMove: a,
        onMouseDown: a,
        onMouseLeave: o,
        className: h()(eh.Hu, { [eh.N7]: n }, c),
        onDoubleClick: i,
        children: [
            (0, s.jsx)($.F, { children: (0, s.jsx)(en, { className: E, children: t }, r) }),
            null != _ ? (0, s.jsx)(eg.A, { size: "small", ..._ }) : null,
            !u &&
                (0, s.jsxs)("div", {
                    className: h()(eh._v, m, "theme-dark"),
                    children: [
                        (0, s.jsx)("div", {
                            className: eh.K1,
                            children: (0, s.jsx)(ep, { idle: n, onJumpToChannel: i, ...f }),
                        }),
                        (0, s.jsxs)("div", {
                            className: eh.q6,
                            children: [
                                (0, s.jsx)(H.A, {
                                    grow: 0,
                                    shrink: 1,
                                    basis: "50%",
                                    align: H.A.Align.CENTER,
                                    className: eh.Px,
                                    children: l?.(),
                                }),
                                (0, s.jsx)(H.A, {
                                    grow: 0,
                                    shrink: 1,
                                    justify: H.A.Justify.END,
                                    basis: "50%",
                                    align: H.A.Align.CENTER,
                                    children: d?.(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var eI = n(709562),
    eT = n(383831),
    eS = n(128286),
    eN = n(80051),
    eC = n(970636),
    eR = n(969341),
    eO = n(646865),
    ey = n(104171),
    ev = n(47294),
    eD = n(818348),
    eL = n(196436);
function eb(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, s.jsx)(eI.A, {
        iconClassName: h()(eL.D6, { [eL.S7]: n }),
        onClick: t,
        iconComponent: M.a,
        label: n ? eE.intl.string(eE.t["2TiKgS"]) : eE.intl.string(eE.t.oN8bqe),
    });
}
function ew(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: r,
            onMouseLeave: a,
            onJumpToChannel: l,
            idle: d,
            selectedParticipant: _,
            embeddedActivity: u,
        } = e,
        c = (0, j.Us)() === J.BRT.POPOUT,
        E = (0, o.bG)([eR.Ay], () => eR.Ay.isVideoEnabled()),
        h = (0, o.bG)([eR.Ay], () => Object.values(eR.Ay.getVideoDevices())[0]),
        m = !1 === (h?.disabled ?? !0),
        f = (0, S.A)([n])[0],
        g = (0, B.Ay)(t),
        p = (0, Y.A)(t),
        { parentAnalyticsLocation: A } = (0, T.Ay)(),
        I = (e) => {
            (0, F.X)(A, F.O.CAMERA, e), G.A.setVideoEnabled(e);
        };
    return (0, s.jsxs)("div", {
        className: eh._v,
        onMouseMove: r,
        onMouseDown: i,
        onMouseLeave: a,
        children: [
            (0, s.jsx)("div", {
                className: eh.K1,
                children: (0, s.jsx)(ep, {
                    idle: d,
                    title: f?.name ?? g ?? "",
                    onJumpToChannel: l,
                    preventIdleComponent: z.A,
                }),
            }),
            (0, s.jsxs)("div", {
                className: eh.q6,
                children: [
                    (0, s.jsxs)(H.A, {
                        grow: 0,
                        shrink: 1,
                        basis: "50%",
                        align: H.A.Align.CENTER,
                        children: [
                            (0, s.jsx)(eC.A, {
                                className: eL.Oc,
                                enabled: E,
                                cameraUnavailable: !m,
                                hasPermission: p,
                                onChange: I,
                                onCameraUnavailable: () => {
                                    m ? I(!0) : (0, K.A)();
                                },
                            }),
                            null != t &&
                                (0, s.jsx)(z.A, {
                                    children: (0, s.jsx)(V.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: eh.__invalid_leftTrayIcon,
                                        participant: _,
                                        compact: !0,
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsxs)(H.A, {
                        grow: 0,
                        shrink: 1,
                        justify: H.A.Justify.END,
                        basis: "50%",
                        align: H.A.Align.CENTER,
                        children: [
                            c || (0, eO.f)()
                                ? null
                                : (0, s.jsx)(eS.A, {
                                      className: eL.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, F.X)(A, F.O.POPOUT, !0),
                                              null != t &&
                                                  (0, ev.A)({
                                                      onConfirm: async () => {
                                                          await (0, b.od)(n, t.id), W.openChannelCallPopout(t);
                                                      },
                                                  });
                                      },
                                      onClosePopout: eD.FX,
                                  }),
                            (0, s.jsx)(eT.A, { applicationId: n, location: u.location, className: eL.BD }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eP(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: r,
            onMouseLeave: a,
            onJumpToChannel: o,
            idle: l,
            users: d,
            embeddedActivity: _,
        } = e,
        u = (0, S.A)([n])[0],
        c = (0, B.Ay)(t);
    return (0, s.jsxs)(U.D, {
        className: h()(eh._v, eh.ob),
        onMouseMove: r,
        onMouseDown: i,
        onMouseLeave: a,
        onDoubleClick: o,
        children: [
            (0, s.jsx)("div", {
                className: eh.K1,
                children: (0, s.jsx)(ep, {
                    idle: l,
                    title: u?.name ?? c ?? "",
                    onJumpToChannel: o,
                    preventIdleComponent: z.A,
                }),
            }),
            (0, s.jsxs)("div", {
                className: eh.q6,
                children: [
                    (0, s.jsx)(ey.Ay, {
                        renderIcon: !1,
                        users: d,
                        size: 24,
                        max: 3,
                        className: eL.__invalid_userSummaryContainer,
                    }),
                    (0, s.jsx)(eT.A, { applicationId: n, location: _.location, iconClassName: eL.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function ek(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i ? (0, s.jsx)(eN.A, { channelId: t, isParticipantsOpen: n, className: eL.N9 }) : null;
}
function eM(e) {
    let {
            onMouseDown: t,
            onMouseMove: n,
            onMouseLeave: i,
            showControls: r,
            applicationId: a,
            channel: o,
            onJumpToChannel: l,
            onToggleHeight: d,
            isExpanded: _,
            hideExpandedButton: u,
            embeddedActivity: c,
        } = e,
        E = (0, S.A)([a])[0],
        m = (0, B.Ay)(o);
    return (0, s.jsx)("div", {
        className: eL.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: i,
        children: (0, s.jsxs)("div", {
            className: h()(eh.K1, eL.eA, { [eL.eo]: r }),
            children: [
                !r && (0, s.jsx)(x.j, { size: "xxs", color: "currentColor", className: eL.ro }),
                r &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(ep, {
                                idle: !r,
                                title: E?.name ?? m ?? "",
                                onJumpToChannel: l,
                                preventIdleComponent: z.A,
                            }),
                            (0, s.jsxs)("div", {
                                className: eL.QS,
                                children: [
                                    u ? null : (0, s.jsx)(eb, { isExpanded: _, onClick: d }),
                                    (0, s.jsx)(eT.A, { applicationId: a, location: c.location, iconClassName: eL.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var eU = n(360469),
    ex = n(5867),
    eG = n(970682),
    eV = n(604949);
function eF(e) {
    let { channel: t, isLoading: n } = e,
        [i, r] = a.useState(!1),
        l = (0, o.bG)([d.Ay], () => d.Ay.getCurrentEmbeddedActivity()),
        _ = l?.applicationId,
        u = (0, o.bG)([d.Ay], () => null != _ && d.Ay.isProxyTicketRefreshing(_), [_]),
        E = (0, o.bG)([d.Ay], () => d.Ay.getActivityPanelMode()),
        I = (0, S.h)(_),
        T = l?.launchId,
        M = (0, o.bG)([D.A], () => D.A.getChannelId() === t?.id),
        { dockedRect: U, isHidden: x } = (0, o.cf)([v.A], () => {
            let e = v.A.pipWindow;
            return { dockedRect: null != e ? v.A.getDockedRect(e.id) : null, isHidden: v.A.isEmbeddedActivityHidden() };
        }),
        G = (0, w.xi)({ channelId: t?.id }),
        {
            activityParticipant: V,
            selectedParticipant: F,
            participantsOpen: B,
        } = (0, o.cf)([C.A], () => ({
            activityParticipant:
                null != l && null != t
                    ? C.A.getParticipant(
                          t.id,
                          (0, N.Qt)({ applicationId: l.applicationId, instanceId: l.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? C.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && C.A.getParticipantsOpen(t.id),
        })),
        H = M || null != G,
        j = (0, c.A)(t?.id),
        W = j && F?.type !== ec.lp.ACTIVITY,
        Y = !j && E === ex.Gd.PIP,
        K = (!H || (H && (W || Y) && null == U)) && !x,
        z = K && null != v.A.pipVideoWindow && null != v.A.pipActivityWindow;
    function $() {
        if (null != t) {
            null != l &&
                g.A.selectParticipant(
                    t.id,
                    (0, N.Qt)({ applicationId: l.applicationId, instanceId: l.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? J.ME;
            p.A.channelListScrollTo(e, t.id), (0, R.uh)(e, t.id);
        }
        null == G && (0, A.bz)();
    }
    function q() {
        r(!i);
    }
    if (
        (a.useEffect(() => {
            if (null != _) {
                let e = K ? eU.bN.PIP : eU.bN.FOCUSED;
                f.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: _ });
            }
        }, [_, K]),
        null == l || null == T || ((0, c.A)(t?.id) && null == V) || null == I)
    )
        return null;
    let X = Array.from(l.userIds)
            .map((e) => L.default.getUser(e))
            .filter((e) => null != e),
        Z = {
            instance_id: l.compositeInstanceId ?? l.launchId ?? "",
            location_id: l.location?.id,
            launch_id: l.launchId,
            referrer_id: l.referrerId,
            custom_id: l.customId,
        };
    return (
        null != l.proxyTicket && (Z.discord_proxy_ticket = l.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (Z.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (Z.channel_id = t.id),
        (0, s.jsx)(y.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: a, onForceIdle: o } = e;
                return (0, s.jsxs)(O.A, {
                    className: h()(eG.zr, {
                        [eG.NW]: K,
                        [eV.a8]: K,
                        [eh.N7]: r && !l.config?.useInteractivePIP,
                        [eG.p0]: K && !i,
                        [eG.ST]: K && i,
                        [eG.R]: x,
                        [eG.Gq]: z,
                    }),
                    noBorder: !K,
                    children: [
                        (0, s.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: r, idle: a, isActivityInTextChannel: o, users: d } = e;
                                return K && null != l && (V?.type === ec.lp.ACTIVITY || o)
                                    ? l.config?.useInteractivePIP
                                        ? (0, s.jsx)(eM, {
                                              onJumpToChannel: $,
                                              applicationId: l.applicationId,
                                              channel: t,
                                              showControls: !a,
                                              onMouseDown: n,
                                              onMouseMove: n,
                                              onMouseLeave: r,
                                              onToggleHeight: q,
                                              isExpanded: i,
                                              hideExpandedButton: o,
                                              embeddedActivity: l,
                                          })
                                        : o
                                          ? (0, s.jsx)(eP, {
                                                idle: a,
                                                onMouseMove: n,
                                                onMouseDown: n,
                                                onMouseLeave: r,
                                                onJumpToChannel: () => {
                                                    $(), (0, b.gk)(ex.Gd.PANEL);
                                                },
                                                channel: t,
                                                applicationId: l.applicationId,
                                                users: d,
                                                embeddedActivity: l,
                                            })
                                          : null == V
                                            ? null
                                            : (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)("div", {
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          className: eG.OB,
                                                          onDoubleClick: $,
                                                      }),
                                                      (0, s.jsx)(ew, {
                                                          idle: a,
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          onJumpToChannel: $,
                                                          channel: t,
                                                          applicationId: l.applicationId,
                                                          selectedParticipant: V,
                                                          embeddedActivity: l,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: a, onForceIdle: o, idle: r, isActivityInTextChannel: Y, users: X }),
                        }),
                        n || u
                            ? (0, s.jsx)(m.y, { className: h()(eG.pU, { [eG.p0]: K && !i, [eG.ST]: K && i }) })
                            : (0, s.jsx)(k.o, {
                                  allowPopups: (0, P.b)(I),
                                  referrerPolicy: "origin",
                                  url: l.url,
                                  queryParams: Z,
                                  className: h()(eG.pU, {
                                      [eG.p0]: K && !i,
                                      [eG.ST]: K && i,
                                      [eG.v8]: K && !l.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !K && M,
                              }),
                        !K &&
                            null != t &&
                            (0, s.jsx)(ek, { participantsOpen: B, showToggleParticipants: !1, channelId: t.id }),
                    ],
                });
            },
        })
    );
}
var eB = n(71855),
    eH = n(91242),
    ej = n(869146),
    eW = n(625180),
    eY = n(789645);
function eK(e) {
    let { applicationId: t, centerButton: n = !1, ...i } = e,
        r = a.useCallback(() => {
            eW.A.stopFrame({ applicationId: t });
        }, [t]),
        o = n ? eI.l : eI.A;
    return (0, s.jsx)(o, {
        ...i,
        isTrayButton: !1,
        onClick: r,
        iconComponent: eY.P,
        label: eE.intl.string(eE.t.cpT0Cq),
    });
}
function ez(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: i, onMouseLeave: r, onFocus: a, idle: o } = e,
        l = (0, S.h)(t),
        d = (0, j.Us)() === J.BRT.POPOUT,
        { parentAnalyticsLocation: _ } = (0, T.Ay)();
    return (0, s.jsxs)("div", {
        className: eh._v,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: r,
        children: [
            (0, s.jsx)("div", {
                className: eh.K1,
                children: (0, s.jsx)(ep, {
                    idle: o,
                    title: l?.name ?? "",
                    onJumpToChannel: a,
                    preventIdleComponent: z.A,
                }),
            }),
            (0, s.jsx)("div", {
                className: eh.q6,
                children: (0, s.jsxs)(H.A, {
                    grow: 1,
                    shrink: 1,
                    justify: H.A.Justify.END,
                    align: H.A.Align.CENTER,
                    children: [
                        d || (0, eO.f)()
                            ? null
                            : (0, s.jsx)(eS.A, {
                                  className: eL.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: () => {
                                      (0, F.X)(_, F.O.POPOUT, !0),
                                          (0, ev.A)({
                                              onConfirm: async () => {
                                                  await eW.A.refreshProxyTicket({ applicationId: t }), (0, b.jp)();
                                              },
                                          });
                                  },
                                  onClosePopout: J.FXj,
                              }),
                        (0, s.jsx)(eK, { applicationId: t, className: eL.BD }),
                    ],
                }),
            }),
        ],
    });
}
var e$ = n(165610);
function eq(e) {
    let { isLoading: t } = e,
        n = (0, o.bG)([eH.A], () => eH.A.getConnectedFrame()),
        i = (0, o.bG)([eH.A], () => eH.A.getFrameLayoutMode()),
        r = (0, S.h)(n?.applicationId),
        a = (0, o.bG)([eH.A], () => null != r && eH.A.isProxyTicketRefreshing(r.id), [r]),
        l = (0, o.bG)([ej.A], () => ej.A.getWindowOpen(J.MLl.ACTIVITY_POPOUT)),
        d = (0, o.bG)([v.A], () => v.A.isFrameHidden()),
        _ = i === e$.y.PIP && !d && !l,
        u = _ && null != v.A.pipVideoWindow && null != v.A.pipFrameWindow;
    if (null == n || null == r || l) return null;
    let c = { instance_id: "example-cl-instance", platform: eU.vu.DESKTOP };
    return (
        null != n.proxyTicket && (c.discord_proxy_ticket = n.proxyTicket),
        (0, s.jsx)(y.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: l } = e;
                return (0, s.jsxs)(O.A, {
                    className: h()(eG.zr, { [eG.NW]: _, [eV.a8]: _, [eh.N7]: i, [eG.p0]: _, [eG.R]: d, [eG.Gq]: u }),
                    noBorder: !_,
                    children: [
                        (0, s.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: t, onForceIdle: i, idle: r } = e;
                                return _ && null != n
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("div", {
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: i,
                                                  className: eG.OB,
                                              }),
                                              (0, s.jsx)(ez, {
                                                  idle: r,
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: i,
                                                  onFocus: () => {
                                                      eW.A.updateFrameLayoutMode({
                                                          applicationId: n.applicationId,
                                                          layoutMode: e$.y.FOCUSED,
                                                      });
                                                  },
                                                  applicationId: n.applicationId,
                                              }),
                                          ],
                                      })
                                    : null;
                            })({ onActive: o, onForceIdle: l, idle: i }),
                        }),
                        t || a
                            ? (0, s.jsx)(m.y, { className: h()(eG.pU, { [eG.p0]: _ }) })
                            : (0, s.jsx)(k.o, {
                                  allowPopups: (0, P.b)(r),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: c,
                                  className: h()(eG.pU, { [eG.p0]: _, [eG.v8]: _ }),
                                  shouldRefocus: !_,
                              }),
                    ],
                });
            },
        })
    );
}
var eX = n(770178),
    eZ = n(994500),
    eQ = n(732777),
    eJ = n(222446),
    e0 = n(683807),
    e1 = n(161148),
    e2 = n(205297),
    e3 = n(699426),
    e6 = n(979186),
    e4 = n(363195),
    e7 = n(964404),
    e5 = n(284009),
    e8 = n.n(e5),
    e9 = n(735438),
    te = n.n(e9),
    tt = n(205693),
    tn = n(834730),
    ti = n(778712),
    tr = n(58149),
    ts = n(520698),
    ta = n(958713),
    to = n(525505),
    tl = n(652896),
    td = n(880144),
    t_ = n(638480),
    tu = n(338771),
    tc = n(334557),
    tE = n(905216),
    th = n(416696);
function tm(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: i, onMouseLeave: r, ...a } = e,
        o = n ? eI.l : eI.A,
        { Component: l, events: d } = (0, th.c)("disable");
    return (0, s.jsx)(o, {
        label: t ? eE.intl.string(eE.t.S5anIc) : eE.intl.string(eE.t.q3O3J8),
        isTrayButton: !1,
        iconComponent: l,
        onMouseEnter: (e) => {
            i?.(e), d.onMouseEnter();
        },
        onMouseLeave: (e) => {
            r?.(e), d.onMouseLeave();
        },
        ...a,
    });
}
var tf = n(344548),
    tg = n(495544),
    tp = n(485296);
function tA() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) e = null;
    else {
        null != (e = C.A.getSelectedParticipantId(i)) && C.A.isParticipantPoppedOut(i, e) && (e = null);
        let t = eu.A.getLastActiveStream(),
            n = null != e ? C.A.getParticipant(i, e) : null;
        if (
            ((n?.type !== ec.lp.ACTIVITY && (n?.type !== ec.lp.USER || n.voiceState?.selfVideo)) || (e = null),
            null != t && null == e)
        ) {
            let n = C.A.getParticipant(i, (0, tl._z)(t))?.id;
            null == n || C.A.isParticipantPoppedOut(i, n) || (e = n);
        }
        if (null == e) {
            let t = tg.default.getId(),
                n = te()(C.A.getVideoParticipants(i)).filter(
                    (e) =>
                        e.type === ec.lp.USER &&
                        e.user.id !== t &&
                        !eR.Ay.isLocalVideoDisabled(e.user.id) &&
                        !C.A.isParticipantPoppedOut(i, e.id),
                ),
                s = n.map((e) => e.user.id),
                a = Date.now();
            null ==
                (e = n
                    .map((e) => [e.user.id, tp.A.getSpeakingDuration(e.user.id, a)])
                    .filter((e) => {
                        let [t, n] = e;
                        return 0 !== n;
                    })
                    .maxBy((e) => {
                        let [t, n] = e;
                        return -n;
                    })?.[0]) && (e = null != r && s.has(r) ? r : n.first()?.user?.id);
        }
    }
    r !== e && ((r = e), t && tN.emitChange());
}
let tI = te().throttle(tA, 300, { trailing: !0 });
function tT() {
    return tI(), !1;
}
class tS extends o.Ay.Store {
    static displayName = "VideoSpeakerStore";
    initialize() {
        this.waitFor(C.A, tg.default, tp.A, eu.A, eR.Ay), this.syncWith([C.A, eu.A], tT);
    }
    getSpeaker(e) {
        return i !== e && ((i = e), tA(!1)), r ?? tg.default.getId();
    }
}
let tN = new tS(f.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: tT });
var tC = n(803301),
    tR = n(531685),
    tO = n(954571),
    ty = n(562153),
    tv = n(427262),
    tD = n(34904);
class tL extends a.PureComponent {
    static defaultProps = { paused: !0 };
    state = { aStreamId: null, aReady: !1, bStreamId: this.props.streamId, bReady: !0 };
    handleReady = () => {
        this.state.aReady
            ? this.setState({ bReady: !0, aStreamId: null, aReady: !1 })
            : this.setState({ aReady: !0, bStreamId: null, bReady: !1 });
    };
    static getDerivedStateFromProps(e, t) {
        let { streamId: n } = e;
        if (t.aReady) {
            if (n !== t.aStreamId)
                if (null == n) return { bStreamId: n, bReady: !0, aStreamId: null, aReady: !1 };
                else return { bStreamId: n, bReady: !1 };
        } else if (n !== t.bStreamId)
            if (null == n) return { aStreamId: n, aReady: !0, bStreamId: null, bReady: !1 };
            else return { aStreamId: n, aReady: !1 };
        return null;
    }
    renderVideo(e, t) {
        let { children: n, mirror: i, paused: r, component: o } = this.props;
        if (null == e) {
            if (null == n) return null;
            let e = a.Children.only(n);
            return a.cloneElement(e, { style: { display: t && !i ? void 0 : "none" }, ...e.props });
        }
        return (0, s.jsx)(o, { paused: r, className: tD.$_, streamId: e, onReady: t ? null : this.handleReady });
    }
    render() {
        let { mirror: e, className: t } = this.props;
        return (0, s.jsxs)("div", {
            className: h()(tD.Ki, t, { [tD.e7]: e }),
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            children: [
                this.renderVideo(this.state.aStreamId, this.state.aReady),
                this.renderVideo(this.state.bStreamId, this.state.bReady),
            ],
        });
    }
    handleDoubleClick = (e) => {
        let { onDoubleClick: t, id: n } = this.props;
        t?.(e, n);
    };
    handleContextMenu = (e) => {
        let { onContextMenu: t, id: n } = this.props;
        t?.(e, n);
    };
}
var tb = n(566331),
    tw = n(768088),
    tP = n(256195),
    tk = n(200749),
    tM = n(202992);
let tU = n(913516);
function tx(e) {
    let { width: t, noArt: n = !1, selected: i = !1 } = e;
    return (0, s.jsx)("div", {
        className: h()(tM.Qs, tM.FY),
        children: (0, s.jsx)(tk.A, {
            className: tM.FP,
            artURL: tU,
            noArt: n,
            selected: i,
            size: (0, tk.J)(t),
            header: eE.intl.string(eE.t.wxbmeJ),
            description: eE.intl.string(eE.t.odF9WI),
        }),
    });
}
var tG = n(566566),
    tV = n(82850);
class tF extends a.PureComponent {
    state = { screensharePopoutOpen: !1 };
    _ref = a.createRef();
    get viewProperties() {
        let { participantOnScreen: e, currentUserId: t, channel: n } = this.props,
            i = (0, ec.Ay)(e),
            r = null != e && e.type !== ec.lp.ACTIVITY && e.user.id === t;
        return {
            canPopout: i && !r,
            canSettings: i && r,
            canStopStream: i,
            canSeeViewers: i,
            canSeeParticipantName: (e?.type === ec.lp.STREAM || e?.type === ec.lp.USER) && n.type !== J.rbe.DM,
            canDisconnect: !i,
            isSelf: r,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, tl._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ec.Ay)(e) ? t.find((t) => (0, tl._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ec.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, t_.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        tO.default.track(J.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, tr.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        tO.default.track(J.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: C.A.getLayout(e.id), ...(0, tr.QS)(e.id) });
    }
    handleVideo = (e) => {
        G.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, K.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, A.bz)();
        let t = e.getGuildId() ?? J.ME;
        (0, R.uh)(t, e.id), p.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && g.A.selectParticipant(n.channelId, (0, tl._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        e8()((0, ec.Ay)(e), "cannot stop stream for non streamer"),
            (0, F.X)(I.A.VIDEO_PIP, F.O.STREAM, !1),
            (0, tu.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, F.X)(I.A.VIDEO_PIP, F.O.POPOUT, !0), W.openChannelCallPopout(e);
    };
    renderBottomLeftControls = () => {
        let { canSeeParticipantName: e } = this.viewProperties;
        return e ? this.renderParticipantName() : null;
    };
    renderBottomRightControls = () => {
        let {
            canSettings: e,
            canPopout: t,
            canDisconnect: n,
            canStopStream: i,
            canSeeViewers: r,
        } = this.viewProperties;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                r ? this.renderViewersIcon() : null,
                e ? this.renderSettingsIcon() : null,
                t ? this.renderPopoutIcon() : null,
                i ? this.renderStopStreamButton() : null,
                n ? this.renderDisconnectButton() : null,
            ],
        });
    };
    renderDisconnectButton = () =>
        (0, s.jsx)(tE.A, { className: tV.iq, onClick: () => (0, F.X)(I.A.VIDEO_PIP, F.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, s.jsx)(tm, { isSelfStream: e, className: tV.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            e8()(
                (0, ec.Ay)(e) || e?.type === ec.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, s.jsx)(z.A, {
                children: (0, s.jsx)(V.A, {
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    className: tV.iq,
                    participant: e,
                    compact: !0,
                }),
            })
        );
    };
    renderPopoutIcon = () =>
        (0, s.jsx)(eS.A, {
            className: tV.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: J.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        e8()((0, ec.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, tl._z)(t) === e.id);
        return null == n || n.state === J.XYD.ENDED
            ? null
            : (0, s.jsx)(tf.A, { stream: n, className: tV.iq, appContext: J.BRT.APP, location: I.A.VIDEO_PIP });
    };
    renderStreamState() {
        let e = this.activeStreamForSelectedParticipant,
            {
                participantOnScreen: t,
                width: n,
                isOverlayRenderingVideo: i,
                videoStreamError: r,
                cameraEncodeError: a,
            } = this.props;
        if (null != r && null == a) {
            if (t?.type === ec.lp.STREAM) return (0, s.jsx)(tw.A, { stream: t.stream, width: n, avError: r });
            else if (t?.type === ec.lp.USER) return (0, s.jsx)(tG.A, { userId: t.user.id, width: n, avError: r });
        }
        switch (!0) {
            case e?.state === J.XYD.ENDED:
                return (0, s.jsx)(tb.A, { stream: e, width: n });
            case e?.state === J.XYD.FAILED:
                return (0, s.jsx)(tw.A, { stream: e, width: n });
            case t?.type === ec.lp.HIDDEN_STREAM:
                return (0, s.jsx)(tP.A, { participant: t, width: n });
            case i:
                return (0, s.jsx)(tx, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === ec.lp.STREAM || t?.type === ec.lp.USER) {
            let n = ty.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? tv.Ay.getName(t.user);
            return (0, s.jsx)(tn.E, {
                variant: "text-md/normal",
                color: "always-white",
                className: tV.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: r } = this.props,
            a = (0, B.m1)(e, L.default, eZ.A),
            o = n?.id === tg.default.getId() && i,
            l = this.renderStreamState(),
            d = this.activeStreamForSelectedParticipant,
            _ = null;
        return (
            n?.type !== ec.lp.ACTIVITY &&
                (null != l
                    ? (_ = l)
                    : (n?.type === ec.lp.USER || n?.type === ec.lp.STREAM) &&
                      (_ = (0, s.jsx)(tL, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: eR.Ay.getVideoComponent(),
                          mirror: o,
                          children: (0, s.jsx)(tc.A, {
                              size: ti._3.SIZE_80,
                              src: n?.user.getAvatarURL(e.guild_id, 80),
                              "aria-label": n?.user.username,
                              guildId: e.guild_id,
                              userId: n?.user.id,
                          }),
                      }))),
            (0, s.jsx)(y.Ay, {
                timeout: 1800,
                children: (e) =>
                    (0, s.jsx)(eA, {
                        title: a,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: z.A,
                        width: r,
                        className: eV.a8,
                        videoControlsClassName: d?.state === J.XYD.ENDED ? tV._v : void 0,
                        ...e,
                        children: _,
                    }),
            })
        );
    }
}
var tB = n(734057),
    tH = n(403362),
    tj = n(201181);
let tW = {
        [J.o1q.VIDEO]: function (e) {
            let { channel: t, width: n } = e,
                i = (0, o.bG)([tN], () => tN.getSpeaker(t.id)),
                r = (0, o.bG)([C.A], () => C.A.getParticipant(t.id, i), [t.id, i]),
                a = (0, o.bG)([eR.Ay], () => te()(eR.Ay.getVideoDevices()).values().first()),
                l = (0, o.bG)(
                    [tC.A],
                    () =>
                        null != r && r.type !== ec.lp.ACTIVITY && r.type !== ec.lp.HIDDEN_STREAM
                            ? tC.A.getStreamId(r.user.id, t.getGuildId(), (0, ts.A)(r.type))
                            : null,
                    [r, t],
                ),
                d = null == a || a.disabled,
                _ = !d,
                u = (0, o.bG)([eR.Ay], () => !d && eR.Ay.isVideoEnabled(), [d]),
                c = (0, o.bG)([eR.Ay], () => (0, td.A)(eR.Ay)),
                E = (0, o.bG)([tg.default], () => tg.default.getId()),
                h = (0, o.bG)([eu.A], () => eu.A.getCurrentUserActiveStream()),
                m = null != r && "user" in r ? r.user.id : "",
                f = (0, to.A)(r?.type === ec.lp.STREAM ? tt.x.STREAM : tt.x.DEFAULT, m),
                g = (0, ta.A)(m),
                p = (0, o.yK)([eu.A], () => eu.A.getAllActiveStreams());
            return (0, s.jsx)(tF, {
                channel: t,
                streamId: l,
                participantOnScreen: r,
                isVideoAvailable: _,
                isVideoEnabled: u,
                canGoLive: c,
                currentUserId: E,
                activeStreams: p,
                activeSelfStream: h,
                isMainWindowFocused: tR.A.isFocused(),
                width: n,
                isOverlayRenderingVideo: !1,
                videoStreamError: f,
                cameraEncodeError: g,
            });
        },
        [J.o1q.ACTIVITY]: (e) => {
            let { channel: t, ...n } = e,
                i = d.Ay.getCurrentEmbeddedActivity();
            !(function (e) {
                let { connectedEmbeddedActivity: t } = e,
                    n = t?.applicationId;
                a.useEffect(() => {
                    null != t &&
                        null != n &&
                        f.h.dispatch({ type: "EMBEDDED_ACTIVITY_OPEN", location: t.location, applicationId: n });
                }, [n, t]);
            })({ connectedEmbeddedActivity: i });
            let { analyticsLocations: r } = (0, T.Ay)(I.A.ACTIVITY_PIP);
            return (0, s.jsx)(T.f5, { value: r, children: (0, s.jsx)(eF, { channel: t, isLoading: null == i, ...n }) });
        },
        [J.o1q.FRAME]: () => {
            let { analyticsLocations: e } = (0, T.Ay)(I.A.FRAME_PIP),
                t = (0, o.bG)([eH.A], () => eH.A.isFrameActive());
            return (0, s.jsx)(T.f5, { value: e, children: (0, s.jsx)(eq, { isLoading: !t }) });
        },
        [J.o1q.HAVEN]: (e) => {
            let { channel: t, width: n } = e,
                i = (0, o.bG)([C.A], () => C.A.getFilteredParticipants(t.id)),
                r = (0, eQ.A)(t.id),
                l = a.useMemo(() => (0, B.m1)(t, L.default, eZ.A), [t]),
                d = (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { selectParticipantId: n } = t;
                    return a.useCallback(() => {
                        (0, A.bz)();
                        let t = e.getGuildId() ?? J.ME;
                        (0, R.uh)(t, e.id),
                            p.A.channelListScrollTo(t, e.id),
                            null != n && g.A.selectParticipant(e.id, n);
                    }, [e, n]);
                })(t),
                _ = n * (eJ.i.height / eJ.i.width),
                [u, c] = a.useState(0.65),
                [E, m] = a.useState({ x: 0, y: 0 }),
                f = (0, eX.w)((e) => {
                    let { contentRect: t } = e,
                        n = Math.max((t.width / eJ.i.width) * 1.5, (t.height / eJ.i.height) * 1.5),
                        i = t.width / 2 - 1156 * n,
                        r = t.height / 2 - 1050 * n;
                    c(n), m({ x: i, y: r });
                });
            return (0, s.jsx)(y.Ay, {
                timeout: 2e3,
                children: (e) =>
                    (0, s.jsx)(eA, {
                        title: l,
                        backgroundKey: t.id,
                        screenMessage: null,
                        onJumpToChannel: d,
                        preventIdleComponent: z.A,
                        width: n,
                        className: eV.a8,
                        ...e,
                        children: (0, s.jsx)("div", {
                            ref: f,
                            className: e1.n,
                            style: { width: n, height: _ },
                            children: (0, s.jsx)("div", {
                                className: h()(e0.VT, e0.rh),
                                style: { transform: `translate(${E.x}px, ${E.y}px) scale(${u})` },
                                children: (0, s.jsx)(eJ.A, {
                                    roomSeats: r.seats,
                                    roomParticipants: r.participants,
                                    participants: i,
                                    channel: t,
                                    idle: e.idle,
                                    showAmbientEffects: !1,
                                    enableAnimations: !1,
                                    skipNewUserEducation: !0,
                                    disableInteractions: !0,
                                }),
                            }),
                        }),
                    }),
            });
        },
    },
    tY = { minWidth: ec.mn[ec.R8.VIDEO], maxWidth: ec.cF[ec.R8.VIDEO] },
    tK = [];
class tz extends a.PureComponent {
    render() {
        let {
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: i,
                maxY: r,
                theme: a,
                dockedRect: o,
                appContext: l,
                roundCorners: d,
                getDockedRectPositionY: _,
                windowSize: u,
                inPopoutWindow: c,
                activityPIPWindow: E,
                chatOpen: h,
                callChatSidebarWidth: m,
            } = this.props,
            f = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            g = "" !== f ? parseInt(f, 10) : J.MdR,
            p = u.width - g - (h ? m : 0);
        return (0, s.jsxs)(e3.ic, {
            children: [
                (0, s.jsx)(e2.A, {
                    pictureInPictureComponents: tW,
                    selectedPIPWindow: e,
                    pipWindows: t,
                    pipWidth: n,
                    maxX: i,
                    maxY: r,
                    dockedRect: o,
                    theme: a,
                    onWindowMove: this.handleWindowMove,
                    onWindowResize: this.handleWindowResize,
                    appContext: l,
                    roundCorners: d,
                    resizeConfig: tY,
                    getDockedRectPositionY: _,
                }),
                (0, s.jsx)(e3.Md, { className: !c && null != E && h && p < 550 ? tj.ah : void 0 }),
            ],
        });
    }
    handleWindowMove = (e, t) => {
        l.tw(e, t);
    };
    handleWindowResize = (e) => {
        l.EB(e, ec.R8.VIDEO);
    };
}
let t$ = o.Ay.connectStores([ej.A, d.Ay, tR.A, e4.A, tB.A, D.A, v.A, C.A, e7.Ay, eH.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: i = !1 } = e,
        r = ej.A.getWindowOpen(J.MLl.CHANNEL_CALL_POPOUT),
        s = ej.A.getWindowOpen(J.MLl.ACTIVITY_POPOUT),
        a = d.Ay.getCurrentEmbeddedActivity(),
        o = (0, u.H)(a?.location),
        l = null != a && !(0, c.A)(o, tB.A, D.A),
        E = d.Ay.getActivityPanelMode(),
        h = l && E === ex.Gd.PANEL,
        m = null != a && null != o && C.A.getSelectedParticipant(o)?.type === ec.lp.ACTIVITY,
        f = eH.A.getConnectedFrame(),
        g = eH.A.getFrameLayoutMode() === e$.y.FOCUSED,
        p = null != n,
        A = p ? ej.A.getWindow(n) : null,
        I = !!p && ej.A.isWindowFullScreen(n),
        T = tR.A.windowSize();
    p && (T = null == A ? T : { width: A.innerWidth, height: A.innerHeight });
    let S = p ? J.BRT.POPOUT : J.BRT.APP;
    t =
        (null != a && s) || (p && l) || (p && null != f)
            ? null
            : p || !r || l || null != f
              ? null != a && h
                  ? (v.A.pipActivityWindow ?? v.A.pipVideoWindow)
                  : null != f && g
                    ? (v.A.pipFrameWindow ?? v.A.pipVideoWindow ?? v.A.pipActivityWindow)
                    : (v.A.pipHavenWindow ?? v.A.pipVideoWindow ?? v.A.pipActivityWindow ?? v.A.pipFrameWindow)
              : null;
    let N = Array.from(v.A.pipWindows.values()),
        R = v.A.pipWidth(ec.R8.VIDEO),
        O = N.find((e) => e.component === J.o1q.VIDEO),
        y = N.find((e) => e.component === J.o1q.ACTIVITY),
        L = N.find((e) => e.component === J.o1q.FRAME),
        b = [N.find((e) => e.component === J.o1q.HAVEN), O, y, L].filter(tH.Vq),
        w = e7.Ay.callChatSidebarWidth,
        P = D.A.getVoiceChannelId(),
        k = D.A.getChannelId() === P,
        M = null != P && C.A.getChatOpen(P),
        U = h || m,
        x = U && null != a && (0, _.q)(a.applicationId),
        G = !U && null != t && k;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === b.length ? tK : b,
        pipWidth: R,
        maxX: T.width - (G && M ? w : 0),
        maxY: T.height,
        theme: e4.A.theme,
        dockedRect: v.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: (e) =>
            p && (0, e6.q)({ withTitleBar: i, isFullScreen: I }) ? e - (0, eB.LI)({ isPopoutWindow: p }) : e,
        appContext: S,
        roundCorners: !x,
        windowSize: T,
        inPopoutWindow: p,
        activityPIPWindow: y,
        chatOpen: M,
        callChatSidebarWidth: w,
    };
})(tz);
