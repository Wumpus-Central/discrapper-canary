"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(758879),
    o = n(311907),
    d = n(397927),
    c = n(827343),
    u = n(951001),
    h = n(956793),
    p = n(47167),
    A = n(235986),
    f = n(42473),
    g = n(994314),
    _ = n(241847),
    m = n(178442),
    E = n(71393),
    x = n(430452),
    y = n(994500),
    v = n(287809),
    S = n(977997),
    I = n(572487),
    C = n(855790),
    N = n(652215),
    T = n(985018),
    O = n(737398),
    b = n(255259);
class D extends s.PureComponent {
    rtcConnectionStatusRef = s.createRef();
    handleToggleSelfMute = () => {
        let { context: e } = this.props;
        c.A.toggleSelfMute({ context: e, location: "Overlay Controls" });
    };
    handleToggleSelfDeaf = () => {
        let { context: e } = this.props;
        c.A.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
    };
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderPopout = (e) => {
        let { lobbyId: t } = this.props;
        return (0, i.jsx)(_.A, { channelId: e, lobbyId: t, isOverlay: !0 });
    };
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.m1)(e, v.default, y.A),
            s = null != t ? `${n} / ${t.name}` : n,
            l = null != t ? t.id : N.ME;
        return (0, i.jsx)(r.N_, {
            to: N.BVt.CHANNEL(l),
            onClick: (t) => {
                t.stopPropagation(), u.A.channelListScrollTo(l, e.id);
            },
            children: (0, i.jsx)(g.A, { className: b.Ix, children: s }),
        });
    }
    render() {
        let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: s,
            channel: l,
            quality: r,
            lastPing: o,
            hasVideo: c,
            connectionState: u,
            deaf: h,
            mute: p,
        } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(C.Ay.Bar, {
                  className: a()(e, O.ne, { [O.CW]: !n }),
                  children: (0, i.jsxs)(C.Ay.Content, {
                      className: a()(t, O.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)("div", {
                              className: b.vW,
                              children: (0, i.jsx)(d.YNO, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(l.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, i.jsx)(d.DUT, {
                                          ...e,
                                          innerRef: this.rtcConnectionStatusRef,
                                          children: (0, i.jsx)(m.A, {
                                              channelId: l.id,
                                              quality: r,
                                              lastPing: o,
                                              hasVideo: c,
                                              state: u,
                                              children: this.renderChannelLink(l),
                                          }),
                                      }),
                              }),
                          }),
                          (0, i.jsxs)(A.A, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(f.A, {
                                      tooltipText: p ? T.intl.string(T.t.YqAjXy) : T.intl.string(T.t.w4m945),
                                      icon: p ? d.z0P : d.cNw,
                                      iconForeground: p ? O.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, i.jsx)(f.A, {
                                      tooltipText: h ? T.intl.string(T.t["2US872"]) : T.intl.string(T.t.wjcRFX),
                                      icon: h ? d.cQT : d.LoC,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? O.of : null,
                                  }),
                                  null == s &&
                                      (0, i.jsx)(f.A, {
                                          tooltipText: T.intl.string(T.t["6vrfgt"]),
                                          onClick: this.handleDisconnect,
                                          icon: d.zWQ,
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function j(e) {
    let { context: t, lobbyId: n, channel: s, ...l } = e,
        a = (0, o.bG)([E.A], () => E.A.getGuild(s?.getGuildId())),
        r = (0, o.bG)([S.A], () => null != s && S.A.hasVideo(s.id)),
        [d, c] = (0, o.yK)([x.A], () => [x.A.isSelfMute(t) || x.A.isSelfMutedTemporarily(t), x.A.isSelfDeaf(t)]),
        [u, h, p] = (0, o.yK)([I.A], () => [I.A.getConnectionState(n), I.A.getLastPing(n), I.A.getQuality(n)]);
    return (0, i.jsx)(D, {
        ...l,
        context: t,
        lobbyId: n,
        channel: s,
        guild: a,
        hasVideo: r,
        mute: d,
        deaf: c,
        connectionState: u,
        lastPing: h,
        quality: p,
    });
}
