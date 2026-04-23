"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(936504),
    o = n(311907),
    d = n(265872),
    c = n(939249),
    u = n(83107),
    h = n(831544),
    p = n(990836),
    A = n(597601),
    f = n(960027),
    _ = n(827343),
    g = n(951001),
    m = n(956793),
    E = n(47167),
    x = n(235986),
    y = n(42473),
    v = n(994314),
    S = n(241847),
    C = n(178442),
    I = n(71393),
    N = n(430452),
    T = n(994500),
    b = n(287809),
    O = n(977997),
    D = n(572487),
    j = n(855790),
    L = n(652215),
    R = n(985018),
    w = n(864653),
    k = n(395766);
class M extends s.PureComponent {
    rtcConnectionStatusRef = s.createRef();
    handleToggleSelfMute = () => {
        let { context: e } = this.props;
        _.A.toggleSelfMute({ context: e, location: "Overlay Controls" });
    };
    handleToggleSelfDeaf = () => {
        let { context: e } = this.props;
        _.A.toggleSelfDeaf({ context: e, location: "Overlay Controls" });
    };
    handleDisconnect() {
        m.default.selectVoiceChannel(null);
    }
    renderPopout = (e) => {
        let { lobbyId: t } = this.props;
        return (0, i.jsx)(S.A, { channelId: e, lobbyId: t, isOverlay: !0 });
    };
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, E.m1)(e, b.default, T.A),
            s = null != t ? `${n} / ${t.name}` : n,
            l = null != t ? t.id : L.ME;
        return (0, i.jsx)(r.N_, {
            to: L.BVt.CHANNEL(l),
            onClick: (t) => {
                t.stopPropagation(), g.A.channelListScrollTo(l, e.id);
            },
            children: (0, i.jsx)(v.A, { className: k.Ix, children: s }),
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
            hasVideo: _,
            connectionState: g,
            deaf: m,
            mute: E,
        } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(j.Ay.Bar, {
                  className: a()(e, w.ne, { [w.CW]: !n }),
                  children: (0, i.jsxs)(j.Ay.Content, {
                      className: a()(t, w.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)("div", {
                              className: k.vW,
                              children: (0, i.jsx)(d.Y, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(l.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, i.jsx)(c.D, {
                                          ...e,
                                          innerRef: this.rtcConnectionStatusRef,
                                          children: (0, i.jsx)(C.A, {
                                              channelId: l.id,
                                              quality: r,
                                              lastPing: o,
                                              hasVideo: _,
                                              state: g,
                                              children: this.renderChannelLink(l),
                                          }),
                                      }),
                              }),
                          }),
                          (0, i.jsxs)(x.A, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(y.A, {
                                      tooltipText: E ? R.intl.string(R.t.YqAjXy) : R.intl.string(R.t.w4m945),
                                      icon: E ? u.z : h.c,
                                      iconForeground: E ? w.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, i.jsx)(y.A, {
                                      tooltipText: m ? R.intl.string(R.t["2US872"]) : R.intl.string(R.t.wjcRFX),
                                      icon: m ? p.c : A.L,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: m ? w.of : null,
                                  }),
                                  null == s &&
                                      (0, i.jsx)(y.A, {
                                          tooltipText: R.intl.string(R.t["6vrfgt"]),
                                          onClick: this.handleDisconnect,
                                          icon: f.z,
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
}
function P(e) {
    let { context: t, lobbyId: n, channel: s, ...l } = e,
        a = (0, o.bG)([I.A], () => I.A.getGuild(s?.getGuildId())),
        r = (0, o.bG)([O.A], () => null != s && O.A.hasVideo(s.id)),
        [d, c] = (0, o.yK)([N.Ay], () => [N.Ay.isSelfMute(t) || N.Ay.isSelfMutedTemporarily(t), N.Ay.isSelfDeaf(t)]),
        [u, h, p] = (0, o.yK)([D.A], () => [D.A.getConnectionState(n), D.A.getLastPing(n), D.A.getQuality(n)]);
    return (0, i.jsx)(M, {
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
