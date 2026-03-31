n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(342494),
    o = n(397927),
    c = n(387755),
    d = n(956793),
    u = n(775602),
    h = n(641703),
    A = n(313961),
    _ = n(826673),
    m = n(379848),
    g = n(753727),
    p = n(267102),
    f = n(222692),
    x = n(442353),
    E = n(470710),
    I = n(186111),
    C = n(430452),
    N = n(994500),
    T = n(287809),
    S = n(977997),
    b = n(203982),
    y = n(58736),
    v = n(652215),
    j = n(360469),
    R = n(49999),
    O = n(731854),
    L = n(985018);
class M extends l.PureComponent {
    iconRef = l.createRef();
    componentDidMount() {
        b._.subscribe(v.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        b._.unsubscribe(v.jej.CALL_START, this.handleVoiceClick);
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
                isProvisional: c,
            } = this.props;
        if (t || (n && r === v._Of.VOICE)) return null;
        let d = a.isManaged(),
            u = null,
            h = !1;
        return (
            c
                ? ((h = !0), (u = L.intl.string(L.t.izMR7o)))
                : C.Ay.supports(O.O5.VIDEO)
                  ? s
                      ? ((u = L.intl.string(L.t.PHzjvX)), (h = !0))
                      : n && r === v._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (u = d ? L.intl.string(L.t.S0W8Z5) : L.intl.string(L.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (u = d ? L.intl.string(L.t.S0W8Z5) : L.intl.string(L.t.oCqlGG)))
                  : ((h = !0), (e = this.handleBrowserNotSupported), (u = L.intl.string(L.t.UVpg3U))),
            (0, i.jsx)(y.Ay.Icon, { icon: o.npA, onClick: e, disabled: h || l, tooltip: u })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: l,
                isBlocked: s,
                channel: c,
                dismissibleContentTypes: d,
                isProvisional: u,
            } = this.props;
        if (t) return null;
        let h = c.isManaged(),
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
        let _ = (0, i.jsx)(y.Ay.Icon, {
            ref: this.iconRef,
            icon: o._jp,
            onClick: this.handleVoiceClick,
            disabled: A,
            tooltip: e,
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                _,
                (0, i.jsx)(m.Ay, {
                    contentTypes: d,
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
            a = () => c.A.call(n.id, t, !i && !n.isManaged() && !e?.shiftKey, s);
        t ? (0, x.A)(a, l) : a();
    };
    handleJoinCall = (e) => {
        d.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: t, callActive: n, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(a.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, _.Dr)(a.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: R.i.AUTO }),
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
        { callActive: c, callUnavailable: d } = (0, s.cf)([E.A], () => ({
            callActive: E.A.isCallActive(t.id),
            callUnavailable: E.A.isCallUnavailable(t.id),
        })),
        _ = t.getRecipientId(),
        { notFriend: m, isBlocked: f } = (0, s.cf)([N.A], () => ({
            notFriend: t.type === v.rbe.DM && null != _ && !N.A.isFriend(_),
            isBlocked: t.type === v.rbe.DM && null != _ && N.A.isBlocked(_),
        })),
        x = (0, s.bG)([T.default], () => T.default.getUser(_)),
        C = (0, p.Us)(),
        b = [],
        y = (0, h.A)(t.id),
        j = (0, s.bG)([I.A], () => I.A.hasLayers());
    return (y && !j && b.push(a.M.ACTIVITY_GDM_CALL_TOOLTIP), n || x?.bot)
        ? null
        : (0, i.jsx)(M, {
              channel: t,
              mode: l,
              inCall: r,
              callActive: c,
              isProvisional: x?.isProvisional ?? !1,
              callUnavailable: d,
              notFriend: m,
              isBlocked: f,
              appContext: C,
              dismissibleContentTypes: b,
              useReducedMotion: o,
          });
}
