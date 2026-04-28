"use strict";
let i, r;
n.d(t, { A: () => tq });
var s = n(627968),
    a = n(64700),
    o = n(17928),
    l = n(31728),
    _ = n(933958),
    d = n(216418),
    u = n(969151),
    c = n(108959),
    E = n(503698),
    h = n.n(E),
    m = n(289873),
    f = n(228366),
    g = n(367513),
    A = n(951001),
    I = n(398590),
    p = n(793574),
    T = n(688810),
    S = n(429913),
    N = n(568598),
    O = n(313961),
    R = n(976860),
    C = n(272812),
    y = n(461782),
    D = n(334463),
    L = n(309010),
    v = n(287809),
    w = n(795816),
    P = n(851907),
    b = n(536246),
    k = n(395678),
    U = n(847374),
    M = n(939249),
    G = n(365199),
    x = n(827343),
    V = n(525788),
    F = n(384059),
    B = n(47167),
    H = n(235986),
    Y = n(267102),
    W = n(574172),
    K = n(704877),
    j = n(222692),
    $ = n(447404),
    z = n(73939),
    q = n(477155),
    X = n(534514),
    Q = n(615300),
    J = n(451988),
    Z = n(652215),
    ee = n(507252);
let et = {
    [Z.DUB.NORMAL]: ee.qb,
    [Z.DUB.MINIMUM]: ee.Bp,
    [Z.DUB.NO_CHAT]: ee.Oo,
    [Z.DUB.FULL_SCREEN]: ee.iy,
    [Z.DUB.HAVEN]: ee.VT,
};
class en extends a.PureComponent {
    constructor(e) {
        super(e), (this.state = { animation: new Q.A.Value(0) });
    }
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: t } = this.state;
        t.setValue(0), Q.A.spring(t, { toValue: 1, overshootClamping: !0 }).start(e);
    }
    componentWillLeave(e) {
        Q.A.spring(this.state.animation, { toValue: 0, overshootClamping: !0 }).start(e);
    }
    render() {
        return (0, s.jsx)(Q.A.div, {
            className: h()(ee.$c, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children,
        });
    }
}
class ei extends a.PureComponent {
    static defaultProps = { layout: Z.DUB.MINIMUM, animated: !0 };
    _timeout = new J.Ep();
    constructor(e) {
        super(e), (this.state = { idle: !1, backgroundAnimation: new Q.A.Value(0), layoutProp: e.layout });
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
        (e === Z.DUB.FULL_SCREEN || e === Z.DUB.NO_CHAT) &&
            (this._timeout.start(3e3, () => this.setState({ idle: !0 })),
            this.state.idle && this.setState({ idle: !1 }));
    };
    renderBackground() {
        let { background: e, backgroundKey: t, layout: n } = this.props,
            i = `${n}-${t ?? ""}`;
        return (0, s.jsx)(z.F, { className: ee.yG, component: "div", children: (0, s.jsx)(en, { children: e }, i) });
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
    e_ = n(530005),
    ed = n(587895),
    eu = n(616356),
    ec = n(806931),
    eE = n(985018),
    eh = n(27600);
function em(e) {
    let t,
        n,
        { closePopout: i, idle: r, pipWindows: a, voiceChannelId: d, onSelect: u } = e;
    r && i();
    let c = (0, o.bG)([_.Ay], () => _.Ay.getCurrentEmbeddedActivity()),
        E = (0, o.bG)([D.A], () => D.A.pipWindow),
        h = (0, o.bG)([O.A], () => O.A.getSelectedParticipant(d)),
        m = (0, o.bG)([O.A], () => O.A.getStreamParticipants(d));
    return (0, s.jsx)(eo.W, {
        "data-menu-migrated": !0,
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: i,
        onSelect: u,
        children: ((t = []),
        null != (n = a.find((e) => e.component === Z.o1q.VIDEO)) &&
            m.forEach((e) => {
                let i = eu.A.getActiveStreamForApplicationStream(e.stream),
                    r = e.id === h?.id && E?.id === n.id;
                null == i || r || t.push({ pipWindow: n, participant: e, stream: i });
            }),
        t).map(function (e) {
            let t = e.pipWindow.id,
                n = e.participant?.id,
                i = (function (e) {
                    if (e.pipWindow.component === Z.o1q.ACTIVITY && null != c) {
                        let e = ed.A.getApplication(c.applicationId)?.name;
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
                                g.A.selectParticipant(d, t.id)
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
        r = Array.from((0, o.bG)([D.A], () => D.A.pipWindows).values()).filter((e) => e.component !== Z.o1q.ACTIVITY),
        l = (0, o.yK)([eu.A], () => eu.A.getAllActiveStreamsForChannel(t)).filter(
            (e) => e.ownerId !== v.default.getCurrentUser()?.id && e.channelId === t,
        ),
        _ = (1 === r.length && r[0].component === Z.o1q.ACTIVITY) || 0 === l.length,
        d = 1 === r.length && l.length <= 1;
    return _ || d
        ? null
        : (0, s.jsx)(el.Y, {
              targetElementRef: i,
              position: "bottom",
              renderPopout: (e) => (0, s.jsx)(em, { voiceChannelId: t, pipWindows: r, idle: n, ...e }),
              children: (e) =>
                  (0, s.jsx)(M.D, {
                      className: eh.ro,
                      ...e,
                      innerRef: i,
                      children: (0, s.jsx)(e_.F, { size: "md", color: es.A.unsafe_rawColors.WHITE.css }),
                  }),
          });
};
var eg = n(919706);
function eA(e) {
    let { title: t, onJumpToChannel: n, idle: i, preventIdleComponent: r } = e,
        a = (0, o.bG)([er.A], () => er.A.getChannelId()),
        l = null != a ? (0, s.jsx)(ef, { voiceChannelId: a, idle: i }) : null;
    return (0, s.jsxs)(r, {
        className: eh.Nc,
        children: [
            (0, s.jsxs)(M.D, {
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
function eI(e) {
    let {
        children: t,
        idle: n,
        onJumpToChannel: i,
        backgroundKey: r,
        onActive: a,
        onForceIdle: o,
        renderBottomLeftControls: l,
        renderBottomRightControls: _,
        screenMessage: d,
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
            (0, s.jsx)(z.F, { children: (0, s.jsx)(en, { className: E, children: t }, r) }),
            null != d ? (0, s.jsx)(eg.A, { size: "small", ...d }) : null,
            !u &&
                (0, s.jsxs)("div", {
                    className: h()(eh._v, m, "theme-dark"),
                    children: [
                        (0, s.jsx)("div", {
                            className: eh.K1,
                            children: (0, s.jsx)(eA, { idle: n, onJumpToChannel: i, ...f }),
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
                                    children: _?.(),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var ep = n(709562),
    eT = n(383831),
    eS = n(128286),
    eN = n(80051),
    eO = n(970636),
    eR = n(969341),
    eC = n(646865),
    ey = n(104171),
    eD = n(47294),
    eL = n(818348),
    ev = n(196436);
function ew(e) {
    let { onClick: t, isExpanded: n } = e;
    return (0, s.jsx)(ep.A, {
        iconClassName: h()(ev.D6, { [ev.S7]: n }),
        onClick: t,
        iconComponent: U.a,
        label: n ? eE.intl.string(eE.t["2TiKgS"]) : eE.intl.string(eE.t.oN8bqe),
    });
}
function eP(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: r,
            onMouseLeave: a,
            onJumpToChannel: l,
            idle: _,
            selectedParticipant: d,
            embeddedActivity: u,
        } = e,
        c = (0, Y.Us)() === Z.BRT.POPOUT,
        E = (0, o.bG)([eR.Ay], () => eR.Ay.isVideoEnabled()),
        h = (0, o.bG)([eR.Ay], () => Object.values(eR.Ay.getVideoDevices())[0]),
        m = !1 === (h?.disabled ?? !0),
        f = (0, S.A)([n])[0],
        g = (0, B.Ay)(t),
        A = (0, K.A)(t),
        { parentAnalyticsLocation: I } = (0, T.Ay)(),
        p = (e) => {
            (0, F.X)(I, F.O.CAMERA, e), x.A.setVideoEnabled(e);
        };
    return (0, s.jsxs)("div", {
        className: eh._v,
        onMouseMove: r,
        onMouseDown: i,
        onMouseLeave: a,
        children: [
            (0, s.jsx)("div", {
                className: eh.K1,
                children: (0, s.jsx)(eA, {
                    idle: _,
                    title: f?.name ?? g ?? "",
                    onJumpToChannel: l,
                    preventIdleComponent: $.A,
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
                            (0, s.jsx)(eO.A, {
                                className: ev.Oc,
                                enabled: E,
                                cameraUnavailable: !m,
                                hasPermission: A,
                                onChange: p,
                                onCameraUnavailable: () => {
                                    m ? p(!0) : (0, j.A)();
                                },
                            }),
                            null != t &&
                                (0, s.jsx)($.A, {
                                    children: (0, s.jsx)(V.A, {
                                        channelId: t.id,
                                        guildId: t.getGuildId(),
                                        className: eh.__invalid_leftTrayIcon,
                                        participant: d,
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
                            c || (0, eC.f)()
                                ? null
                                : (0, s.jsx)(eS.A, {
                                      className: ev.BD,
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, F.X)(I, F.O.POPOUT, !0),
                                              null != t &&
                                                  (0, eD.A)({
                                                      onConfirm: async () => {
                                                          await (0, w.od)(n, t.id), W.openChannelCallPopout(t);
                                                      },
                                                  });
                                      },
                                      onClosePopout: eL.FX,
                                  }),
                            (0, s.jsx)(eT.A, { applicationId: n, location: u.location, className: ev.BD }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eb(e) {
    let {
            channel: t,
            applicationId: n,
            onMouseDown: i,
            onMouseMove: r,
            onMouseLeave: a,
            onJumpToChannel: o,
            idle: l,
            users: _,
            embeddedActivity: d,
        } = e,
        u = (0, S.A)([n])[0],
        c = (0, B.Ay)(t);
    return (0, s.jsxs)(M.D, {
        className: h()(eh._v, eh.ob),
        onMouseMove: r,
        onMouseDown: i,
        onMouseLeave: a,
        onDoubleClick: o,
        children: [
            (0, s.jsx)("div", {
                className: eh.K1,
                children: (0, s.jsx)(eA, {
                    idle: l,
                    title: u?.name ?? c ?? "",
                    onJumpToChannel: o,
                    preventIdleComponent: $.A,
                }),
            }),
            (0, s.jsxs)("div", {
                className: eh.q6,
                children: [
                    (0, s.jsx)(ey.Ay, {
                        renderIcon: !1,
                        users: _,
                        size: 24,
                        max: 3,
                        className: ev.__invalid_userSummaryContainer,
                    }),
                    (0, s.jsx)(eT.A, { applicationId: n, location: d.location, iconClassName: ev.Gu, isActive: !0 }),
                ],
            }),
        ],
    });
}
function ek(e) {
    let { channelId: t, participantsOpen: n, showToggleParticipants: i } = e;
    return i ? (0, s.jsx)(eN.A, { channelId: t, isParticipantsOpen: n, className: ev.N9 }) : null;
}
function eU(e) {
    let {
            onMouseDown: t,
            onMouseMove: n,
            onMouseLeave: i,
            showControls: r,
            applicationId: a,
            channel: o,
            onJumpToChannel: l,
            onToggleHeight: _,
            isExpanded: d,
            hideExpandedButton: u,
            embeddedActivity: c,
        } = e,
        E = (0, S.A)([a])[0],
        m = (0, B.Ay)(o);
    return (0, s.jsx)("div", {
        className: ev.LO,
        onMouseMove: n,
        onMouseDown: t,
        onMouseLeave: i,
        children: (0, s.jsxs)("div", {
            className: h()(eh.K1, ev.eA, { [ev.eo]: r }),
            children: [
                !r && (0, s.jsx)(G.j, { size: "xxs", color: "currentColor", className: ev.ro }),
                r &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(eA, {
                                idle: !r,
                                title: E?.name ?? m ?? "",
                                onJumpToChannel: l,
                                preventIdleComponent: $.A,
                            }),
                            (0, s.jsxs)("div", {
                                className: ev.QS,
                                children: [
                                    u ? null : (0, s.jsx)(ew, { isExpanded: d, onClick: _ }),
                                    (0, s.jsx)(eT.A, { applicationId: a, location: c.location, iconClassName: ev.Gu }),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var eM = n(360469),
    eG = n(5867),
    ex = n(970682),
    eV = n(604949);
function eF(e) {
    let { channel: t, isLoading: n } = e,
        [i, r] = a.useState(!1),
        l = (0, o.bG)([_.Ay], () => _.Ay.getCurrentEmbeddedActivity()),
        d = l?.applicationId,
        u = (0, o.bG)([_.Ay], () => null != d && _.Ay.isProxyTicketRefreshing(d), [d]),
        E = (0, o.bG)([_.Ay], () => _.Ay.getActivityPanelMode()),
        p = (0, S.h)(d),
        T = l?.launchId,
        U = (0, o.bG)([L.A], () => L.A.getChannelId() === t?.id),
        { dockedRect: M, isHidden: G } = (0, o.cf)([D.A], () => {
            let e = D.A.pipWindow;
            return { dockedRect: null != e ? D.A.getDockedRect(e.id) : null, isHidden: D.A.isEmbeddedActivityHidden() };
        }),
        x = (0, P.xi)({ channelId: t?.id }),
        {
            activityParticipant: V,
            selectedParticipant: F,
            participantsOpen: B,
        } = (0, o.cf)([O.A], () => ({
            activityParticipant:
                null != l && null != t
                    ? O.A.getParticipant(
                          t.id,
                          (0, N.Qt)({ applicationId: l.applicationId, instanceId: l.compositeInstanceId }),
                      )
                    : null,
            selectedParticipant: null != t ? O.A.getSelectedParticipant(t.id) : null,
            participantsOpen: null != t && O.A.getParticipantsOpen(t.id),
        })),
        H = U || null != x,
        Y = (0, c.A)(t?.id),
        W = Y && F?.type !== ec.lp.ACTIVITY,
        K = !Y && E === eG.Gd.PIP,
        j = (!H || (H && (W || K) && null == M)) && !G,
        $ = j && null != D.A.pipVideoWindow && null != D.A.pipActivityWindow;
    function z() {
        if (null != t) {
            null != l &&
                g.A.selectParticipant(
                    t.id,
                    (0, N.Qt)({ applicationId: l.applicationId, instanceId: l.compositeInstanceId }),
                );
            let e = t.getGuildId() ?? Z.ME;
            A.A.channelListScrollTo(e, t.id), (0, R.uh)(e, t.id);
        }
        null == x && (0, I.bz)();
    }
    function q() {
        r(!i);
    }
    if (
        (a.useEffect(() => {
            if (null != d) {
                let e = j ? eM.bN.PIP : eM.bN.FOCUSED;
                f.h.dispatch({ type: "ACTIVITY_LAYOUT_MODE_UPDATE", layoutMode: e, applicationId: d });
            }
        }, [d, j]),
        null == l || null == T || ((0, c.A)(t?.id) && null == V) || null == p)
    )
        return null;
    let X = Array.from(l.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e),
        Q = {
            instance_id: l.compositeInstanceId ?? l.launchId ?? "",
            location_id: l.location?.id,
            launch_id: l.launchId,
            referrer_id: l.referrerId,
            custom_id: l.customId,
        };
    return (
        null != l.proxyTicket && (Q.discord_proxy_ticket = l.proxyTicket),
        t?.guild_id != null && t?.guild_id !== "" && (Q.guild_id = t.guild_id),
        t?.id != null && t?.id !== "" && (Q.channel_id = t.id),
        (0, s.jsx)(y.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: r, onActive: a, onForceIdle: o } = e;
                return (0, s.jsxs)(C.A, {
                    className: h()(ex.zr, {
                        [ex.NW]: j,
                        [eV.a8]: j,
                        [eh.N7]: r && !l.config?.useInteractivePIP,
                        [ex.p0]: j && !i,
                        [ex.ST]: j && i,
                        [ex.R]: G,
                        [ex.Gq]: $,
                    }),
                    noBorder: !j,
                    children: [
                        (0, s.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: n, onForceIdle: r, idle: a, isActivityInTextChannel: o, users: _ } = e;
                                return j && null != l && (V?.type === ec.lp.ACTIVITY || o)
                                    ? l.config?.useInteractivePIP
                                        ? (0, s.jsx)(eU, {
                                              onJumpToChannel: z,
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
                                          ? (0, s.jsx)(eb, {
                                                idle: a,
                                                onMouseMove: n,
                                                onMouseDown: n,
                                                onMouseLeave: r,
                                                onJumpToChannel: () => {
                                                    z(), (0, w.gk)(eG.Gd.PANEL);
                                                },
                                                channel: t,
                                                applicationId: l.applicationId,
                                                users: _,
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
                                                          className: ex.OB,
                                                          onDoubleClick: z,
                                                      }),
                                                      (0, s.jsx)(eP, {
                                                          idle: a,
                                                          onMouseMove: n,
                                                          onMouseDown: n,
                                                          onMouseLeave: r,
                                                          onJumpToChannel: z,
                                                          channel: t,
                                                          applicationId: l.applicationId,
                                                          selectedParticipant: V,
                                                          embeddedActivity: l,
                                                      }),
                                                  ],
                                              })
                                    : null;
                            })({ onActive: a, onForceIdle: o, idle: r, isActivityInTextChannel: K, users: X }),
                        }),
                        n || u
                            ? (0, s.jsx)(m.y, { className: h()(ex.pU, { [ex.p0]: j && !i, [ex.ST]: j && i }) })
                            : (0, s.jsx)(k.o, {
                                  allowPopups: (0, b.b)(p),
                                  referrerPolicy: "origin",
                                  url: l.url,
                                  queryParams: Q,
                                  className: h()(ex.pU, {
                                      [ex.p0]: j && !i,
                                      [ex.ST]: j && i,
                                      [ex.v8]: j && !l.config?.useInteractivePIP,
                                  }),
                                  shouldRefocus: !j && U,
                              }),
                        !j &&
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
    eY = n(869146),
    eW = n(625180),
    eK = n(789645);
function ej(e) {
    let { applicationId: t, centerButton: n = !1, ...i } = e,
        r = a.useCallback(() => {
            eW.A.stopFrame({ applicationId: t });
        }, [t]),
        o = n ? ep.l : ep.A;
    return (0, s.jsx)(o, {
        ...i,
        isTrayButton: !1,
        onClick: r,
        iconComponent: eK.P,
        label: eE.intl.string(eE.t.cpT0Cq),
    });
}
function e$(e) {
    let { applicationId: t, onMouseDown: n, onMouseMove: i, onMouseLeave: r, onFocus: a, idle: o } = e,
        l = (0, S.h)(t),
        _ = (0, Y.Us)() === Z.BRT.POPOUT,
        { parentAnalyticsLocation: d } = (0, T.Ay)();
    return (0, s.jsxs)("div", {
        className: eh._v,
        onMouseMove: i,
        onMouseDown: n,
        onMouseLeave: r,
        children: [
            (0, s.jsx)("div", {
                className: eh.K1,
                children: (0, s.jsx)(eA, {
                    idle: o,
                    title: l?.name ?? "",
                    onJumpToChannel: a,
                    preventIdleComponent: $.A,
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
                        _ || (0, eC.f)()
                            ? null
                            : (0, s.jsx)(eS.A, {
                                  className: ev.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: () => {
                                      (0, F.X)(d, F.O.POPOUT, !0),
                                          (0, eD.A)({
                                              onConfirm: async () => {
                                                  await eW.A.refreshProxyTicket({ applicationId: t }), (0, w.jp)();
                                              },
                                          });
                                  },
                                  onClosePopout: Z.FXj,
                              }),
                        (0, s.jsx)(ej, { applicationId: t, className: ev.BD }),
                    ],
                }),
            }),
        ],
    });
}
var ez = n(165610);
function eq(e) {
    let { isLoading: t } = e,
        n = (0, o.bG)([eH.A], () => eH.A.getConnectedFrame()),
        i = (0, o.bG)([eH.A], () => eH.A.getFrameLayoutMode()),
        r = (0, S.h)(n?.applicationId),
        a = (0, o.bG)([eH.A], () => null != r && eH.A.isProxyTicketRefreshing(r.id), [r]),
        l = (0, o.bG)([eY.A], () => eY.A.getWindowOpen(Z.MLl.ACTIVITY_POPOUT)),
        _ = (0, o.bG)([D.A], () => D.A.isFrameHidden()),
        d = i === ez.y.PIP && !_ && !l,
        u = d && null != D.A.pipVideoWindow && null != D.A.pipFrameWindow;
    if (null == n || null == r || l) return null;
    let c = { instance_id: "example-cl-instance", platform: eM.vu.DESKTOP };
    return (
        null != n.proxyTicket && (c.discord_proxy_ticket = n.proxyTicket),
        (0, s.jsx)(y.Ay, {
            timeout: 2e3,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: l } = e;
                return (0, s.jsxs)(C.A, {
                    className: h()(ex.zr, { [ex.NW]: d, [eV.a8]: d, [eh.N7]: i, [ex.p0]: d, [ex.R]: _, [ex.Gq]: u }),
                    noBorder: !d,
                    children: [
                        (0, s.jsx)("div", {
                            className: "theme-dark",
                            children: (function (e) {
                                let { onActive: t, onForceIdle: i, idle: r } = e;
                                return d && null != n
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("div", {
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: i,
                                                  className: ex.OB,
                                              }),
                                              (0, s.jsx)(e$, {
                                                  idle: r,
                                                  onMouseMove: t,
                                                  onMouseDown: t,
                                                  onMouseLeave: i,
                                                  onFocus: () => {
                                                      eW.A.updateFrameLayoutMode({
                                                          applicationId: n.applicationId,
                                                          layoutMode: ez.y.FOCUSED,
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
                            ? (0, s.jsx)(m.y, { className: h()(ex.pU, { [ex.p0]: d }) })
                            : (0, s.jsx)(k.o, {
                                  allowPopups: (0, b.b)(r),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: c,
                                  className: h()(ex.pU, { [ex.p0]: d, [ex.v8]: d }),
                                  shouldRefocus: !d,
                              }),
                    ],
                });
            },
        })
    );
}
var eX = n(770178),
    eQ = n(994500),
    eJ = n(732777),
    eZ = n(222446),
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
    tl = n(676619),
    t_ = n(652896),
    td = n(880144),
    tu = n(638480),
    tc = n(338771),
    tE = n(334557),
    th = n(905216),
    tm = n(416696);
function tf(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: i, onMouseLeave: r, ...a } = e,
        o = n ? ep.l : ep.A,
        { Component: l, events: _ } = (0, tm.c)("disable");
    return (0, s.jsx)(o, {
        label: t ? eE.intl.string(eE.t.S5anIc) : eE.intl.string(eE.t.q3O3J8),
        isTrayButton: !1,
        iconComponent: l,
        onMouseEnter: (e) => {
            i?.(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            r?.(e), _.onMouseLeave();
        },
        ...a,
    });
}
var tg = n(344548),
    tA = n(495544),
    tI = n(485296);
function tp() {
    let e,
        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (null == i) e = null;
    else {
        null != (e = O.A.getSelectedParticipantId(i)) && O.A.isParticipantPoppedOut(i, e) && (e = null);
        let t = eu.A.getLastActiveStream(),
            n = null != e ? O.A.getParticipant(i, e) : null;
        if (
            ((n?.type !== ec.lp.ACTIVITY && (n?.type !== ec.lp.USER || n.voiceState?.selfVideo)) || (e = null),
            null != t && null == e)
        ) {
            let n = O.A.getParticipant(i, (0, t_._z)(t))?.id;
            null == n || O.A.isParticipantPoppedOut(i, n) || (e = n);
        }
        if (null == e) {
            let t = tA.default.getId(),
                n = te()(O.A.getVideoParticipants(i)).filter(
                    (e) =>
                        e.type === ec.lp.USER &&
                        e.user.id !== t &&
                        !eR.Ay.isLocalVideoDisabled(e.user.id) &&
                        !O.A.isParticipantPoppedOut(i, e.id),
                ),
                s = n.map((e) => e.user.id),
                a = Date.now();
            null ==
                (e = n
                    .map((e) => [e.user.id, tI.A.getSpeakingDuration(e.user.id, a)])
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
    r !== e && ((r = e), t && tO.emitChange());
}
let tT = te().throttle(tp, 300, { trailing: !0 });
function tS() {
    return tT(), !1;
}
class tN extends o.Ay.Store {
    static displayName = "VideoSpeakerStore";
    initialize() {
        this.waitFor(O.A, tA.default, tI.A, eu.A, eR.Ay), this.syncWith([O.A, eu.A], tS);
    }
    getSpeaker(e) {
        return i !== e && ((i = e), tp(!1)), r ?? tA.default.getId();
    }
}
let tO = new tN(f.h, { AUDIO_SET_LOCAL_VIDEO_DISABLED: tS });
var tR = n(803301),
    tC = n(531685),
    ty = n(954571),
    tD = n(562153),
    tL = n(427262),
    tv = n(34904);
class tw extends a.PureComponent {
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
        return (0, s.jsx)(o, { paused: r, className: tv.$_, streamId: e, onReady: t ? null : this.handleReady });
    }
    render() {
        let { mirror: e, className: t } = this.props;
        return (0, s.jsxs)("div", {
            className: h()(tv.Ki, t, { [tv.e7]: e }),
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
var tP = n(566331),
    tb = n(768088),
    tk = n(256195),
    tU = n(200749),
    tM = n(202992);
let tG = n(913516);
function tx(e) {
    let { width: t, noArt: n = !1, selected: i = !1 } = e;
    return (0, s.jsx)("div", {
        className: h()(tM.Qs, tM.FY),
        children: (0, s.jsx)(tU.A, {
            className: tM.FP,
            artURL: tG,
            noArt: n,
            selected: i,
            size: (0, tU.J)(t),
            header: eE.intl.string(eE.t.wxbmeJ),
            description: eE.intl.string(eE.t.odF9WI),
        }),
    });
}
var tV = n(566566),
    tF = n(82850);
class tB extends a.PureComponent {
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
            canSeeParticipantName: (e?.type === ec.lp.STREAM || e?.type === ec.lp.USER) && n.type !== Z.rbe.DM,
            canDisconnect: !i,
            isSelf: r,
        };
    }
    get streamerPaused() {
        let { isMainWindowFocused: e, activeSelfStream: t, participantOnScreen: n } = this.props;
        return null != t && n?.id === (0, t_._z)(t) && !e;
    }
    get activeStreamForSelectedParticipant() {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        return (0, ec.Ay)(e) ? t.find((t) => (0, t_._z)(t) === e.id) : null;
    }
    getScreenMessage() {
        let { participantOnScreen: e, currentUserId: t } = this.props;
        if (!(0, ec.Ay)(e)) return null;
        let n = this.activeStreamForSelectedParticipant;
        return null == n ? null : (0, tu.A)(n, e.user, e.user.id === t, this.streamerPaused);
    }
    componentDidMount() {
        let { channel: e } = this.props;
        ty.default.track(Z.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: "pip", ...(0, tr.QS)(e.id) });
    }
    componentWillUnmount() {
        let { channel: e } = this.props;
        ty.default.track(Z.HAw.VIDEO_LAYOUT_TOGGLED, { video_layout: O.A.getLayout(e.id), ...(0, tr.QS)(e.id) });
    }
    handleVideo = (e) => {
        x.A.setVideoEnabled(e);
    };
    handleEnableVideoWhenUnavailable = () => {
        let { isVideoAvailable: e } = this.props;
        e ? this.handleVideo(!0) : (0, j.A)();
    };
    handleJumpToChannel = () => {
        let { channel: e } = this.props;
        (0, I.bz)();
        let t = e.getGuildId() ?? Z.ME;
        (0, R.uh)(t, e.id), A.A.channelListScrollTo(t, e.id);
        let n = this.activeStreamForSelectedParticipant;
        null != n && g.A.selectParticipant(n.channelId, (0, t_._z)(n));
    };
    handleStopStream = () => {
        let { participantOnScreen: e } = this.props;
        e8()((0, ec.Ay)(e), "cannot stop stream for non streamer"),
            (0, F.X)(p.A.VIDEO_PIP, F.O.STREAM, !1),
            (0, tc.A)(e.stream);
    };
    handleOpenPopout = () => {
        let { channel: e } = this.props;
        (0, F.X)(p.A.VIDEO_PIP, F.O.POPOUT, !0), W.openChannelCallPopout(e);
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
        (0, s.jsx)(th.A, { className: tF.iq, onClick: () => (0, F.X)(p.A.VIDEO_PIP, F.O.DISCONNECT) });
    renderStopStreamButton = () => {
        let { isSelf: e } = this.viewProperties;
        return (0, s.jsx)(tf, { isSelfStream: e, className: tF.iq, onClick: this.handleStopStream });
    };
    renderViewersIcon = () => {
        let { participantOnScreen: e, channel: t } = this.props;
        return (
            e8()(
                (0, ec.Ay)(e) || e?.type === ec.lp.ACTIVITY,
                `Cannot render participants for participant type ${e?.type}`,
            ),
            (0, s.jsx)($.A, {
                children: (0, s.jsx)(V.A, {
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    className: tF.iq,
                    participant: e,
                    compact: !0,
                }),
            })
        );
    };
    renderPopoutIcon = () =>
        (0, s.jsx)(eS.A, {
            className: tF.iq,
            popoutOpen: !1,
            onOpenPopout: this.handleOpenPopout,
            onClosePopout: Z.FXj,
        });
    renderSettingsIcon = () => {
        let { participantOnScreen: e, activeStreams: t } = this.props;
        e8()((0, ec.Ay)(e), "Cannot render settings for non stream participant");
        let n = t.find((t) => (0, t_._z)(t) === e.id);
        return null == n || n.state === Z.XYD.ENDED
            ? null
            : (0, s.jsx)(tg.A, { stream: n, className: tF.iq, appContext: Z.BRT.APP, location: p.A.VIDEO_PIP });
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
            if (t?.type === ec.lp.STREAM) return (0, s.jsx)(tb.A, { stream: t.stream, width: n, avError: r });
            else if (t?.type === ec.lp.USER) return (0, s.jsx)(tV.A, { userId: t.user.id, width: n, avError: r });
        }
        switch (!0) {
            case e?.state === Z.XYD.ENDED:
                return (0, s.jsx)(tP.A, { stream: e, width: n });
            case e?.state === Z.XYD.FAILED:
                return (0, s.jsx)(tb.A, { stream: e, width: n });
            case t?.type === ec.lp.HIDDEN_STREAM:
                return (0, s.jsx)(tk.A, { participant: t, width: n });
            case i:
                return (0, s.jsx)(tx, { width: n });
        }
        return null;
    }
    renderParticipantName() {
        let { channel: e, participantOnScreen: t } = this.props;
        if (t?.type === ec.lp.STREAM || t?.type === ec.lp.USER) {
            let n = tD.Ay.getNickname(e.getGuildId(), e.id, t.user) ?? tL.Ay.getName(t.user);
            return (0, s.jsx)(tn.E, {
                variant: "text-md/normal",
                color: "always-white",
                className: tF.F8,
                lineClamp: 1,
                children: n,
            });
        }
        return null;
    }
    render() {
        let { channel: e, streamId: t, participantOnScreen: n, isVideoEnabled: i, width: r } = this.props,
            a = (0, B.m1)(e, v.default, eQ.A),
            o = n?.id === tA.default.getId() && i,
            l = this.renderStreamState(),
            _ = this.activeStreamForSelectedParticipant,
            d = null;
        return (
            n?.type !== ec.lp.ACTIVITY &&
                (null != l
                    ? (d = l)
                    : (n?.type === ec.lp.USER || n?.type === ec.lp.STREAM) &&
                      (d = (0, s.jsx)(tw, {
                          paused: this.streamerPaused,
                          streamId: t,
                          component: eR.Ay.getVideoComponent(),
                          mirror: o,
                          children: (0, s.jsx)(tE.A, {
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
                    (0, s.jsx)(eI, {
                        title: a,
                        backgroundKey: n?.id ?? "",
                        screenMessage: null == l ? this.getScreenMessage() : null,
                        onJumpToChannel: this.handleJumpToChannel,
                        renderBottomLeftControls: this.renderBottomLeftControls,
                        renderBottomRightControls: this.renderBottomRightControls,
                        preventIdleComponent: $.A,
                        width: r,
                        className: eV.a8,
                        videoControlsClassName: _?.state === Z.XYD.ENDED ? tF._v : void 0,
                        ...e,
                        children: d,
                    }),
            })
        );
    }
}
var tH = n(734057),
    tY = n(403362),
    tW = n(423562);
let tK = {
        [Z.o1q.VIDEO]: function (e) {
            let { channel: t, width: n } = e,
                i = (0, o.bG)([tO], () => tO.getSpeaker(t.id)),
                r = (0, o.bG)([O.A], () => O.A.getParticipant(t.id, i), [t.id, i]),
                a = (0, o.bG)([eR.Ay], () => te()(eR.Ay.getVideoDevices()).values().first()),
                l = (0, o.bG)(
                    [tR.A],
                    () =>
                        null != r && r.type !== ec.lp.ACTIVITY && r.type !== ec.lp.HIDDEN_STREAM
                            ? tR.A.getStreamId(r.user.id, t.getGuildId(), (0, ts.A)(r.type))
                            : null,
                    [r, t],
                ),
                _ = null == a || a.disabled,
                d = !_,
                u = (0, o.bG)([eR.Ay], () => !_ && eR.Ay.isVideoEnabled(), [_]),
                c = (0, o.bG)([eR.Ay], () => (0, td.A)(eR.Ay)),
                E = (0, o.bG)([tA.default], () => tA.default.getId()),
                h = (0, o.bG)([eu.A], () => eu.A.getCurrentUserActiveStream()),
                m = null != r && "user" in r ? r.user.id : "",
                f = (0, to.A)(r?.type === ec.lp.STREAM ? tt.x.STREAM : tt.x.DEFAULT, m),
                g = (0, ta.A)(m),
                A = (0, o.yK)([eu.A], () => eu.A.getAllActiveStreams()),
                I = (0, o.bG)([tC.A], () => tC.A.isFocused()),
                p = (0, tl.Qu)();
            return (0, s.jsx)(tB, {
                channel: t,
                streamId: l,
                participantOnScreen: r,
                isVideoAvailable: d,
                isVideoEnabled: u,
                canGoLive: c,
                currentUserId: E,
                activeStreams: A,
                activeSelfStream: h,
                isMainWindowFocused: I || p,
                width: n,
                isOverlayRenderingVideo: !1,
                videoStreamError: f,
                cameraEncodeError: g,
            });
        },
        [Z.o1q.ACTIVITY]: (e) => {
            let { channel: t, ...n } = e,
                i = _.Ay.getCurrentEmbeddedActivity();
            !(function (e) {
                let { connectedEmbeddedActivity: t } = e,
                    n = t?.applicationId;
                a.useEffect(() => {
                    null != t &&
                        null != n &&
                        f.h.dispatch({ type: "EMBEDDED_ACTIVITY_OPEN", location: t.location, applicationId: n });
                }, [n, t]);
            })({ connectedEmbeddedActivity: i });
            let { analyticsLocations: r } = (0, T.Ay)(p.A.ACTIVITY_PIP);
            return (0, s.jsx)(T.f5, { value: r, children: (0, s.jsx)(eF, { channel: t, isLoading: null == i, ...n }) });
        },
        [Z.o1q.FRAME]: () => {
            let { analyticsLocations: e } = (0, T.Ay)(p.A.FRAME_PIP),
                t = (0, o.bG)([eH.A], () => eH.A.isFrameActive());
            return (0, s.jsx)(T.f5, { value: e, children: (0, s.jsx)(eq, { isLoading: !t }) });
        },
        [Z.o1q.HAVEN]: (e) => {
            let { channel: t, width: n } = e,
                i = (0, o.bG)([O.A], () => O.A.getFilteredParticipants(t.id)),
                r = (0, eJ.A)(t.id),
                l = a.useMemo(() => (0, B.m1)(t, v.default, eQ.A), [t]),
                _ = (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { selectParticipantId: n } = t;
                    return a.useCallback(() => {
                        (0, I.bz)();
                        let t = e.getGuildId() ?? Z.ME;
                        (0, R.uh)(t, e.id),
                            A.A.channelListScrollTo(t, e.id),
                            null != n && g.A.selectParticipant(e.id, n);
                    }, [e, n]);
                })(t),
                d = n * (eZ.i.height / eZ.i.width),
                [u, c] = a.useState(0.65),
                [E, m] = a.useState({ x: 0, y: 0 }),
                f = (0, eX.w)((e) => {
                    let { contentRect: t } = e,
                        n = Math.max((t.width / eZ.i.width) * 1.5, (t.height / eZ.i.height) * 1.5),
                        i = t.width / 2 - 1156 * n,
                        r = t.height / 2 - 1050 * n;
                    c(n), m({ x: i, y: r });
                });
            return (0, s.jsx)(y.Ay, {
                timeout: 2e3,
                children: (e) =>
                    (0, s.jsx)(eI, {
                        title: l,
                        backgroundKey: t.id,
                        screenMessage: null,
                        onJumpToChannel: _,
                        preventIdleComponent: $.A,
                        width: n,
                        className: eV.a8,
                        ...e,
                        children: (0, s.jsx)("div", {
                            ref: f,
                            className: e1.n,
                            style: { width: n, height: d },
                            children: (0, s.jsx)("div", {
                                className: h()(e0.VT, e0.rh),
                                style: { transform: `translate(${E.x}px, ${E.y}px) scale(${u})` },
                                children: (0, s.jsx)(eZ.A, {
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
    tj = { minWidth: ec.mn[ec.R8.VIDEO], maxWidth: ec.cF[ec.R8.VIDEO] },
    t$ = [];
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
                roundCorners: _,
                getDockedRectPositionY: d,
                windowSize: u,
                inPopoutWindow: c,
                activityPIPWindow: E,
                chatOpen: h,
                callChatSidebarWidth: m,
            } = this.props,
            f = document.body.style.getPropertyValue("--custom-guild-sidebar-width"),
            g = "" !== f ? parseInt(f, 10) : Z.MdR,
            A = u.width - g - (h ? m : 0);
        return (0, s.jsxs)(e3.ic, {
            children: [
                (0, s.jsx)(e2.A, {
                    pictureInPictureComponents: tK,
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
                    roundCorners: _,
                    resizeConfig: tj,
                    getDockedRectPositionY: d,
                }),
                (0, s.jsx)(e3.Md, { className: !c && null != E && h && A < 550 ? tW.ah : void 0 }),
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
let tq = o.Ay.connectStores([eY.A, _.Ay, tC.A, e4.A, tH.A, L.A, D.A, O.A, e7.Ay, eH.A], (e) => {
    let t,
        { popoutWindowKey: n, popoutWindowHasTitleBar: i = !1 } = e,
        r = eY.A.getWindowOpen(Z.MLl.CHANNEL_CALL_POPOUT),
        s = eY.A.getWindowOpen(Z.MLl.ACTIVITY_POPOUT),
        a = _.Ay.getCurrentEmbeddedActivity(),
        o = (0, u.H)(a?.location),
        l = null != a && !(0, c.A)(o, tH.A, L.A),
        E = _.Ay.getActivityPanelMode(),
        h = l && E === eG.Gd.PANEL,
        m = null != a && null != o && O.A.getSelectedParticipant(o)?.type === ec.lp.ACTIVITY,
        f = eH.A.getConnectedFrame(),
        g = eH.A.getFrameLayoutMode() === ez.y.FOCUSED,
        A = null != n,
        I = A ? eY.A.getWindow(n) : null,
        p = !!A && eY.A.isWindowFullScreen(n),
        T = tC.A.windowSize();
    A && (T = null == I ? T : { width: I.innerWidth, height: I.innerHeight });
    let S = A ? Z.BRT.POPOUT : Z.BRT.APP;
    t =
        (null != a && s) || (A && l) || (A && null != f)
            ? null
            : A || !r || l || null != f
              ? null != a && h
                  ? (D.A.pipActivityWindow ?? D.A.pipVideoWindow)
                  : null != f && g
                    ? (D.A.pipFrameWindow ?? D.A.pipVideoWindow ?? D.A.pipActivityWindow)
                    : (D.A.pipHavenWindow ?? D.A.pipVideoWindow ?? D.A.pipActivityWindow ?? D.A.pipFrameWindow)
              : null;
    let N = Array.from(D.A.pipWindows.values()),
        R = D.A.pipWidth(ec.R8.VIDEO),
        C = N.find((e) => e.component === Z.o1q.VIDEO),
        y = N.find((e) => e.component === Z.o1q.ACTIVITY),
        v = N.find((e) => e.component === Z.o1q.FRAME),
        w = [N.find((e) => e.component === Z.o1q.HAVEN), C, y, v].filter(tY.Vq),
        P = e7.Ay.callChatSidebarWidth,
        b = L.A.getVoiceChannelId(),
        k = L.A.getChannelId() === b,
        U = null != b && O.A.getChatOpen(b),
        M = h || m,
        G = M && null != a && (0, d.q)(a.applicationId),
        x = !M && null != t && k;
    return {
        selectedPIPWindow: t,
        pipWindows: 0 === w.length ? t$ : w,
        pipWidth: R,
        maxX: T.width - (x && U ? P : 0),
        maxY: T.height,
        theme: e4.A.theme,
        dockedRect: D.A.getDockedRect(t?.id ?? ""),
        getDockedRectPositionY: (e) =>
            A && (0, e6.q)({ withTitleBar: i, isFullScreen: p }) ? e - (0, eB.LI)({ isPopoutWindow: A }) : e,
        appContext: S,
        roundCorners: !G,
        windowSize: T,
        inPopoutWindow: A,
        activityPIPWindow: y,
        chatOpen: U,
        callChatSidebarWidth: P,
    };
})(tz);
