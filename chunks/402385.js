n.d(t, { A: () => M }), n(321073);
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
    g = n(826673),
    m = n(379848),
    p = n(753727),
    _ = n(267102),
    x = n(222692),
    f = n(442353),
    E = n(470710),
    C = n(186111),
    I = n(430452),
    S = n(994500),
    b = n(287809),
    N = n(977997),
    T = n(203982),
    j = n(58736),
    v = n(652215),
    y = n(360469),
    R = n(49999),
    O = n(731854),
    L = n(985018);
class D extends l.PureComponent {
    iconRef = l.createRef();
    componentDidMount() {
        T._.subscribe(v.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        T._.unsubscribe(v.jej.CALL_START, this.handleVoiceClick);
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
        if (t || (n && r === v._Of.VOICE)) return null;
        let c = a.isManaged(),
            u = null,
            h = !1;
        return (
            d
                ? ((h = !0), (u = L.intl.string(L.t.izMR7o)))
                : I.A.supports(O.O5.VIDEO)
                  ? s
                      ? ((u = L.intl.string(L.t.PHzjvX)), (h = !0))
                      : n && r === v._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (u = c ? L.intl.string(L.t.S0W8Z5) : L.intl.string(L.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (u = c ? L.intl.string(L.t.S0W8Z5) : L.intl.string(L.t.oCqlGG)))
                  : ((h = !0), (e = this.handleBrowserNotSupported), (u = L.intl.string(L.t.UVpg3U))),
            (0, i.jsx)(j.Ay.Icon, { icon: o.npA, onClick: e, disabled: h || l, tooltip: u })
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
        let g = (0, i.jsx)(j.Ay.Icon, {
            ref: this.iconRef,
            icon: o._jp,
            onClick: this.handleVoiceClick,
            disabled: A,
            tooltip: e,
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                g,
                (0, i.jsx)(m.Ay, {
                    contentTypes: c,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === a.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, i.jsx)(r.AM, {
                                  targetElementRef: this.iconRef,
                                  title: L.intl.string(L.t.HOPqzR),
                                  body: L.intl.format(L.t.xAW71b, { helpdeskUrl: y.DY }),
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
        t ? (0, f.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        c.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(a.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, g.Dr)(a.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: R.i.AUTO }),
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
        (0, f.A)(t, e);
    };
    handleBrowserNotSupported = () => {
        (0, x.A)();
    };
}
function M(e) {
    let { channel: t } = e,
        n = (0, p.A)(),
        l = (0, s.bG)([A.A], () => A.A.getMode(t.id)),
        r = (0, s.bG)([N.A], () => N.A.isInChannel(t.id)),
        o = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        { callActive: d, callUnavailable: c } = (0, s.cf)([E.A], () => ({
            callActive: E.A.isCallActive(t.id),
            callUnavailable: E.A.isCallUnavailable(t.id),
        })),
        g = t.getRecipientId(),
        { notFriend: m, isBlocked: x } = (0, s.cf)([S.A], () => ({
            notFriend: t.type === v.rbe.DM && null != g && !S.A.isFriend(g),
            isBlocked: t.type === v.rbe.DM && null != g && S.A.isBlocked(g),
        })),
        f = (0, s.bG)([b.default], () => b.default.getUser(g)),
        I = (0, _.Us)(),
        T = [],
        j = (0, h.A)(t.id),
        y = (0, s.bG)([C.A], () => C.A.hasLayers());
    return (j && !y && T.push(a.M.ACTIVITY_GDM_CALL_TOOLTIP), n || f?.bot)
        ? null
        : (0, i.jsx)(D, {
              channel: t,
              mode: l,
              inCall: r,
              callActive: d,
              isProvisional: f?.isProvisional ?? !1,
              callUnavailable: c,
              notFriend: m,
              isBlocked: x,
              appContext: I,
              dismissibleContentTypes: T,
              useReducedMotion: o,
          });
}
