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
    _ = n(235986),
    A = n(42473),
    f = n(994314),
    g = n(241847),
    m = n(178442),
    x = n(71393),
    E = n(430452),
    y = n(994500),
    S = n(287809),
    v = n(977997),
    C = n(572487),
    I = n(855790),
    N = n(652215),
    T = n(985018),
    b = n(737398),
    O = n(255259);
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
        return (0, i.jsx)(g.A, { channelId: e, lobbyId: t, isOverlay: !0 });
    };
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.m1)(e, S.default, y.A),
            s = null != t ? `${n} / ${t.name}` : n,
            l = null != t ? t.id : N.ME;
        return (0, i.jsx)(r.N_, {
            to: N.BVt.CHANNEL(l),
            onClick: (t) => {
                t.stopPropagation(), u.A.channelListScrollTo(l, e.id);
            },
            children: (0, i.jsx)(f.A, { className: O.Ix, children: s }),
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
            : (0, i.jsx)(I.Ay.Bar, {
                  className: a()(e, b.ne, { [b.CW]: !n }),
                  children: (0, i.jsxs)(I.Ay.Content, {
                      className: a()(t, b.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)("div", {
                              className: O.vW,
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
                          (0, i.jsxs)(_.A, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(A.A, {
                                      tooltipText: p ? T.intl.string(T.t.YqAjXy) : T.intl.string(T.t.w4m945),
                                      icon: p ? d.z0P : d.cNw,
                                      iconForeground: p ? b.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, i.jsx)(A.A, {
                                      tooltipText: h ? T.intl.string(T.t["2US872"]) : T.intl.string(T.t.wjcRFX),
                                      icon: h ? d.cQT : d.LoC,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? b.of : null,
                                  }),
                                  null == s &&
                                      (0, i.jsx)(A.A, {
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
        a = (0, o.bG)([x.A], () => x.A.getGuild(s?.getGuildId())),
        r = (0, o.bG)([v.A], () => null != s && v.A.hasVideo(s.id)),
        [d, c] = (0, o.yK)([E.Ay], () => [E.Ay.isSelfMute(t) || E.Ay.isSelfMutedTemporarily(t), E.Ay.isSelfDeaf(t)]),
        [u, h, p] = (0, o.yK)([C.A], () => [C.A.getConnectionState(n), C.A.getLastPing(n), C.A.getQuality(n)]);
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
