n.d(t, {
    A: () => M,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(342494),
    o = n(397927),
    c = n(387755),
    u = n(956793),
    d = n(775602),
    f = n(641703),
    p = n(313961),
    h = n(826673),
    b = n(379848),
    g = n(753727),
    m = n(267102),
    A = n(222692),
    y = n(442353),
    O = n(470710),
    j = n(186111),
    v = n(430452),
    x = n(994500),
    E = n(287809),
    _ = n(977997),
    C = n(203982),
    S = n(58736),
    I = n(652215),
    N = n(360469),
    T = n(49999),
    P = n(731854),
    w = n(985018);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class D extends l.PureComponent {
    componentDidMount() {
        C._.subscribe(I.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        C._.unsubscribe(I.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: l,
                isBlocked: i,
                channel: a,
                mode: s,
                isProvisional: c,
            } = this.props;
        if (t || (n && s === I._Of.VOICE)) return null;
        let u = a.isManaged(),
            d = null,
            f = !1;
        return (
            c
                ? ((f = !0), (d = w.intl.string(w.t.izMR7o)))
                : v.A.supports(P.O5.VIDEO)
                  ? i
                      ? ((d = w.intl.string(w.t.PHzjvX)), (f = !0))
                      : n && s === I._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (d = u ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (d = u ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.oCqlGG)))
                  : ((f = !0), (e = this.handleBrowserNotSupported), (d = w.intl.string(w.t.UVpg3U))),
            (0, r.jsx)(S.Ay.Icon, {
                icon: o.npA,
                onClick: e,
                disabled: f || l,
                tooltip: d,
            })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: t,
                callActive: n,
                callUnavailable: l,
                isBlocked: i,
                channel: c,
                dismissibleContentTypes: u,
                isProvisional: d,
            } = this.props;
        if (t) return null;
        let f = c.isManaged(),
            p = !1;
        d
            ? ((p = !0), (e = w.intl.string(w.t.izMR7o)))
            : l
              ? ((e = f ? w.intl.string(w.t.LW2Ghr) : w.intl.string(w.t.rF7lN5)), (p = !0))
              : i
                ? ((e = w.intl.string(w.t.PHzjvX)), (p = !0))
                : (e = n
                      ? f
                          ? w.intl.string(w.t.S0W8Z5)
                          : w.intl.string(w.t.fdEeb5)
                      : f
                        ? w.intl.string(w.t.S0W8Z5)
                        : w.intl.string(w.t.focH1t));
        let h = (0, r.jsx)(S.Ay.Icon, {
            ref: this.iconRef,
            icon: o._jp,
            onClick: this.handleVoiceClick,
            disabled: p,
            tooltip: e,
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                h,
                (0, r.jsx)(b.Ay, {
                    contentTypes: u,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        return t === a.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, r.jsx)(s.AM, {
                                  targetElementRef: this.iconRef,
                                  title: w.intl.string(w.t.HOPqzR),
                                  body: w.intl.format(w.t.xAW71b, {
                                      helpdeskUrl: N.DY,
                                  }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: {
                                      align: "center",
                                  },
                                  onRequestClose: () => n(T.i.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, r.jsxs)(l.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()],
        });
    }
    constructor(...e) {
        super(...e),
            R(this, "iconRef", l.createRef()),
            R(this, "handleStartCall", (e, t) => {
                let { channel: n, notFriend: r, appContext: l } = this.props,
                    i = r ? n.getRecipientId() : null,
                    a = () => c.A.call(n.id, t, !r && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), i);
                t ? (0, y.A)(a, l) : a();
            }),
            R(this, "handleJoinCall", (e) => {
                u.default.selectVoiceChannel(this.props.channel.id, e);
            }),
            R(this, "handleVoiceClick", (e) => {
                let { callUnavailable: t, callActive: n, dismissibleContentTypes: r } = this.props;
                if (
                    (r.includes(a.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                        (0, h.Dr)(a.M.ACTIVITY_GDM_CALL_TOOLTIP, {
                            dismissAction: T.i.AUTO,
                        }),
                    t)
                );
                else if (n) return this.handleJoinCall(!1);
                else return this.handleStartCall(e, !1);
            }),
            R(this, "handleStartVideoCall", (e) => {
                this.handleStartCall(e, !0);
            }),
            R(this, "handleJoinVideoCall", () => {
                let { appContext: e } = this.props,
                    t = () => this.handleJoinCall(!0);
                (0, y.A)(t, e);
            }),
            R(this, "handleBrowserNotSupported", () => {
                (0, A.A)();
            });
    }
}

function M(e) {
    var t;
    let { channel: n } = e,
        l = (0, g.A)(),
        s = (0, i.bG)([p.A], () => p.A.getMode(n.id)),
        o = (0, i.bG)([_.A], () => _.A.isInChannel(n.id)),
        c = (0, i.bG)([d.A], () => d.A.useReducedMotion),
        { callActive: u, callUnavailable: h } = (0, i.cf)([O.A], () => ({
            callActive: O.A.isCallActive(n.id),
            callUnavailable: O.A.isCallUnavailable(n.id),
        })),
        b = n.getRecipientId(),
        { notFriend: A, isBlocked: y } = (0, i.cf)([x.A], () => ({
            notFriend: n.type === I.rbe.DM && null != b && !x.A.isFriend(b),
            isBlocked: n.type === I.rbe.DM && null != b && x.A.isBlocked(b),
        })),
        v = (0, i.bG)([E.default], () => E.default.getUser(b)),
        C = (0, m.Us)(),
        S = [],
        N = (0, f.A)(n.id),
        T = (0, i.bG)([j.A], () => j.A.hasLayers());
    return (N && !T && S.push(a.M.ACTIVITY_GDM_CALL_TOOLTIP), l || (null == v ? void 0 : v.bot))
        ? null
        : (0, r.jsx)(D, {
              channel: n,
              mode: s,
              inCall: o,
              callActive: u,
              isProvisional: null != (t = null == v ? void 0 : v.isProvisional) && t,
              callUnavailable: h,
              notFriend: A,
              isBlocked: y,
              appContext: C,
              dismissibleContentTypes: S,
              useReducedMotion: c,
          });
}
