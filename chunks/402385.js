n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(265486),
    o = n(428689),
    d = n(978940),
    c = n(387755),
    u = n(956793),
    h = n(775602),
    A = n(641703),
    _ = n(313961),
    m = n(826673),
    g = n(379848),
    p = n(753727),
    f = n(267102),
    E = n(222692),
    x = n(442353),
    I = n(470710),
    C = n(186111),
    b = n(430452),
    N = n(994500),
    S = n(287809),
    v = n(977997),
    T = n(203982),
    y = n(58736),
    R = n(652215),
    j = n(360469),
    L = n(49999),
    O = n(731854),
    G = n(985018);
class D extends l.PureComponent {
    iconRef = l.createRef();
    componentDidMount() {
        T._.subscribe(R.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        T._.unsubscribe(R.jej.CALL_START, this.handleVoiceClick);
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
        if (t || (n && r === R._Of.VOICE)) return null;
        let c = a.isManaged(),
            u = null,
            h = !1;
        return (
            d
                ? ((h = !0), (u = G.intl.string(G.t.izMR7o)))
                : b.Ay.supports(O.O5.VIDEO)
                  ? s
                      ? ((u = G.intl.string(G.t.PHzjvX)), (h = !0))
                      : n && r === R._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (u = c ? G.intl.string(G.t.S0W8Z5) : G.intl.string(G.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (u = c ? G.intl.string(G.t.S0W8Z5) : G.intl.string(G.t.oCqlGG)))
                  : ((h = !0), (e = this.handleBrowserNotSupported), (u = G.intl.string(G.t.UVpg3U))),
            (0, i.jsx)(y.Ay.Icon, { icon: o.n, onClick: e, disabled: h || l, tooltip: u })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: l,
                isBlocked: s,
                channel: o,
                dismissibleContentTypes: c,
                isProvisional: u,
            } = this.props;
        if (t) return null;
        let h = o.isManaged(),
            A = !1;
        u
            ? ((A = !0), (e = G.intl.string(G.t.izMR7o)))
            : l
              ? ((e = h ? G.intl.string(G.t.LW2Ghr) : G.intl.string(G.t.rF7lN5)), (A = !0))
              : s
                ? ((e = G.intl.string(G.t.PHzjvX)), (A = !0))
                : (e = n
                      ? h
                          ? G.intl.string(G.t.S0W8Z5)
                          : G.intl.string(G.t.fdEeb5)
                      : h
                        ? G.intl.string(G.t.S0W8Z5)
                        : G.intl.string(G.t.focH1t));
        let _ = (0, i.jsx)(y.Ay.Icon, {
            ref: this.iconRef,
            icon: d._,
            onClick: this.handleVoiceClick,
            disabled: A,
            tooltip: e,
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                _,
                (0, i.jsx)(g.Ay, {
                    contentTypes: c,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === a.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, i.jsx)(r.A, {
                                  targetElementRef: this.iconRef,
                                  title: G.intl.string(G.t.HOPqzR),
                                  body: G.intl.format(G.t.xAW71b, { helpdeskUrl: j.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => n(L.i.USER_DISMISS),
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
            a = () => c.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        t ? (0, x.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        u.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(a.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, m.Dr)(a.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: L.i.AUTO }),
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
        (0, E.A)();
    };
}
function M(e) {
    let { channel: t } = e,
        n = (0, p.A)(),
        l = (0, s.bG)([_.A], () => _.A.getMode(t.id)),
        r = (0, s.bG)([v.A], () => v.A.isInChannel(t.id)),
        o = (0, s.bG)([h.A], () => h.A.useReducedMotion),
        { callActive: d, callUnavailable: c } = (0, s.cf)([I.A], () => ({
            callActive: I.A.isCallActive(t.id),
            callUnavailable: I.A.isCallUnavailable(t.id),
        })),
        u = t.getRecipientId(),
        { notFriend: m, isBlocked: g } = (0, s.cf)([N.A], () => ({
            notFriend: t.type === R.rbe.DM && null != u && !N.A.isFriend(u),
            isBlocked: t.type === R.rbe.DM && null != u && N.A.isBlocked(u),
        })),
        E = (0, s.bG)([S.default], () => S.default.getUser(u)),
        x = (0, f.Us)(),
        b = [],
        T = (0, A.A)(t.id),
        y = (0, s.bG)([C.A], () => C.A.hasLayers());
    return (T && !y && b.push(a.M.ACTIVITY_GDM_CALL_TOOLTIP), n || E?.bot)
        ? null
        : (0, i.jsx)(D, {
              channel: t,
              mode: l,
              inCall: r,
              callActive: d,
              isProvisional: E?.isProvisional ?? !1,
              callUnavailable: c,
              notFriend: m,
              isBlocked: g,
              appContext: x,
              dismissibleContentTypes: b,
              useReducedMotion: o,
          });
}
