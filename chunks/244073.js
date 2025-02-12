n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(568611),
    o = n(442837),
    d = n(481060),
    c = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    g = n(600164),
    f = n(870569),
    m = n(345243),
    _ = n(873596),
    v = n(917405),
    x = n(430824),
    S = n(131951),
    Z = n(699516),
    E = n(594174),
    C = n(979651),
    I = n(362446),
    y = n(518084),
    N = n(981631),
    T = n(388032),
    b = n(536368),
    O = n(110696);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class k extends s.PureComponent {
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.F6)(e, E.default, Z.Z),
            s = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            l = null != t ? t.id : N.ME;
        return (0, i.jsx)(r.rU, {
            to: N.Z5c.CHANNEL(l),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(l, e.id);
            },
            children: (0, i.jsx)(m.Z, {
                className: O.channel,
                children: s
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: s, channel: l, quality: r, lastPing: o, hasVideo: c, connectionState: u, deaf: h, mute: p } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(y.ZP.Bar, {
                  className: a()(e, b.controls, { [b.unpinned]: !n }),
                  children: (0, i.jsxs)(y.ZP.Content, {
                      className: a()(t, b.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: O.inner,
                              children: (0, i.jsx)(d.yRy, {
                                  renderPopout: () => this.renderPopout(l.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(d.P3F, {
                                          ...e,
                                          children: (0, i.jsx)(v.Z, {
                                              channelId: l.id,
                                              quality: r,
                                              lastPing: o,
                                              hasVideo: c,
                                              state: u,
                                              children: this.renderChannelLink(l)
                                          })
                                      })
                              })
                          }),
                          (0, i.jsxs)(g.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(f.Z, {
                                      tooltipText: p ? T.intl.string(T.t.YqAjX1) : T.intl.string(T.t['w4m94+']),
                                      icon: p ? d.nRN : d.S6n,
                                      iconForeground: p ? b.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(f.Z, {
                                      tooltipText: h ? T.intl.string(T.t['2US87+']) : T.intl.string(T.t.wjcRFR),
                                      icon: h ? d.wE8 : d.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? b.strikethrough : null
                                  }),
                                  null == s &&
                                      (0, i.jsx)(f.Z, {
                                          tooltipText: T.intl.string(T.t['6vrfgo']),
                                          onClick: this.handleDisconnect,
                                          icon: d.gkL
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            j(this, 'handleToggleSelfMute', () => {
                let { context: e } = this.props;
                c.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            j(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                c.Z.toggleSelfDeaf({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            j(this, 'renderPopout', (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(_.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function M(e) {
    let { context: t, lobbyId: n, channel: s, ...l } = e,
        a = (0, o.e7)([x.Z], () => x.Z.getGuild(null == s ? void 0 : s.getGuildId())),
        r = (0, o.e7)([C.Z], () => null != s && C.Z.hasVideo(s.id)),
        [d, c] = (0, o.Wu)([S.Z], () => [S.Z.isSelfMute(t) || S.Z.isSelfMutedTemporarily(t), S.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, o.Wu)([I.Z], () => [I.Z.getConnectionState(n), I.Z.getLastPing(n), I.Z.getQuality(n)]);
    return (0, i.jsx)(k, {
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
        quality: p
    });
}
