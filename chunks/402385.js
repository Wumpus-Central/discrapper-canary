n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(342494),
    o = n(397927),
    d = n(387755),
    c = n(956793),
    u = n(775602),
    h = n(641703),
    A = n(313961),
    m = n(826673),
    p = n(379848),
    g = n(753727),
    _ = n(267102),
    f = n(222692),
    x = n(442353),
    C = n(470710),
    E = n(186111),
    I = n(430452),
    N = n(994500),
    b = n(287809),
    S = n(977997),
    T = n(203982),
    v = n(58736),
    y = n(652215),
    j = n(360469),
    R = n(49999),
    O = n(731854),
    L = n(985018);
class M extends l.PureComponent {
    iconRef = l.createRef();
    componentDidMount() {
        T._.subscribe(y.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        T._.unsubscribe(y.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: l,
                isBlocked: s,
                channel: a,
                mode: r,
                isProvisional: d,
            } = this.props;
        if (t || (n && r === y._Of.VOICE)) return null;
        let c = a.isManaged(),
            u = null,
            h = !1;
        return (
            d
                ? ((h = !0), (u = L.intl.string(L.t.izMR7o)))
                : I.Ay.supports(O.O5.VIDEO)
                  ? s
                      ? ((u = L.intl.string(L.t.PHzjvX)), (h = !0))
                      : n && r === y._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (u = c ? L.intl.string(L.t.S0W8Z5) : L.intl.string(L.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (u = c ? L.intl.string(L.t.S0W8Z5) : L.intl.string(L.t.oCqlGG)))
                  : ((h = !0), (e = this.handleBrowserNotSupported), (u = L.intl.string(L.t.UVpg3U))),
            (0, i.jsx)(v.Ay.Icon, { icon: o.npA, onClick: e, disabled: h || l, tooltip: u })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: l,
                isBlocked: s,
                channel: d,
                dismissibleContentTypes: c,
                isProvisional: u,
            } = this.props;
        if (t) return null;
        let h = d.isManaged(),
            A = !1;
        u
            ? ((A = !0), (e = L.intl.string(L.t.izMR7o)))
            : l
              ? ((e = h ? L.intl.string(L.t.LW2Ghr) : L.intl.string(L.t.rF7lN5)), (A = !0))
              : s
                ? ((e = L.intl.string(L.t.PHzjvX)), (A = !0))
                : (e = n
                      ? h
                          ? L.intl.string(L.t.S0W8Z5)
                          : L.intl.string(L.t.fdEeb5)
                      : h
                        ? L.intl.string(L.t.S0W8Z5)
                        : L.intl.string(L.t.focH1t));
        let m = (0, i.jsx)(v.Ay.Icon, {
            ref: this.iconRef,
            icon: o._jp,
            onClick: this.handleVoiceClick,
            disabled: A,
            tooltip: e,
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                m,
                (0, i.jsx)(p.Ay, {
                    contentTypes: c,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === a.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, i.jsx)(r.AM, {
                                  targetElementRef: this.iconRef,
                                  title: L.intl.string(L.t.HOPqzR),
                                  body: L.intl.format(L.t.xAW71b, { helpdeskUrl: j.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(R.i.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, i.jsxs)(l.Fragment, { children: [this.renderVoiceCallButton(), this.renderVideoCallButton()] });
    }
    handleStartCall = (e, t) => {
        let { channel: n, notFriend: i, appContext: l } = this.props,
            s = i ? n.getRecipientId() : null,
            a = () => d.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        t ? (0, x.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        c.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(a.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, m.Dr)(a.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: R.i.AUTO }),
            t)
        );
        else if (n) return this.handleJoinCall(!1);
        else return this.handleStartCall(e, !1);
    };
    handleStartVideoCall = (e) => {
        this.handleStartCall(e, !0);
    };
    handleJoinVideoCall = () => {
        let { appContext: e } = this.props,
            t = () => this.handleJoinCall(!0);
        (0, x.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, f.A)();
    };
}
function D(e) {
    let { channel: t } = e,
        n = (0, g.A)(),
        l = (0, s.bG)([A.A], () => A.A.getMode(t.id)),
        r = (0, s.bG)([S.A], () => S.A.isInChannel(t.id)),
        o = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        { callActive: d, callUnavailable: c } = (0, s.cf)([C.A], () => ({
            callActive: C.A.isCallActive(t.id),
            callUnavailable: C.A.isCallUnavailable(t.id),
        })),
        m = t.getRecipientId(),
        { notFriend: p, isBlocked: f } = (0, s.cf)([N.A], () => ({
            notFriend: t.type === y.rbe.DM && null != m && !N.A.isFriend(m),
            isBlocked: t.type === y.rbe.DM && null != m && N.A.isBlocked(m),
        })),
        x = (0, s.bG)([b.default], () => b.default.getUser(m)),
        I = (0, _.Us)(),
        T = [],
        v = (0, h.A)(t.id),
        j = (0, s.bG)([E.A], () => E.A.hasLayers());
    return (v && !j && T.push(a.M.ACTIVITY_GDM_CALL_TOOLTIP), n || x?.bot)
        ? null
        : (0, i.jsx)(M, {
              channel: t,
              mode: l,
              inCall: r,
              callActive: d,
              isProvisional: x?.isProvisional ?? !1,
              callUnavailable: c,
              notFriend: p,
              isBlocked: f,
              appContext: I,
              dismissibleContentTypes: T,
              useReducedMotion: o,
          });
}
