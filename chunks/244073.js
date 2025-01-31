n.d(t, { Z: () => M }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(568611),
    a = n(442837),
    d = n(481060),
    c = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    g = n(600164),
    f = n(870569),
    m = n(345243),
    x = n(873596),
    v = n(917405),
    Z = n(430824),
    S = n(131951),
    E = n(699516),
    C = n(594174),
    I = n(979651),
    N = n(362446),
    y = n(518084),
    _ = n(981631),
    j = n(388032),
    O = n(963656),
    T = n(382290);
function b(e, t, n) {
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
            n = (0, p.F6)(e, C.default, E.Z),
            s = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            l = null != t ? t.id : _.ME;
        return (0, i.jsx)(o.rU, {
            to: _.Z5c.CHANNEL(l),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(l, e.id);
            },
            children: (0, i.jsx)(m.Z, {
                className: T.channel,
                children: s
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: s, channel: l, quality: o, lastPing: a, hasVideo: c, connectionState: u, deaf: h, mute: p } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(y.ZP.Bar, {
                  className: r()(e, O.controls, { [O.unpinned]: !n }),
                  children: (0, i.jsxs)(y.ZP.Content, {
                      className: r()(t, O.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: T.inner,
                              children: (0, i.jsx)(d.yRy, {
                                  renderPopout: () => this.renderPopout(l.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(d.P3F, {
                                          ...e,
                                          children: (0, i.jsx)(v.Z, {
                                              channelId: l.id,
                                              quality: o,
                                              lastPing: a,
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
                                      tooltipText: p ? j.intl.string(j.t.YqAjX1) : j.intl.string(j.t['w4m94+']),
                                      icon: p ? d.nRN : d.S6n,
                                      iconForeground: p ? O.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(f.Z, {
                                      tooltipText: h ? j.intl.string(j.t['2US87+']) : j.intl.string(j.t.wjcRFR),
                                      icon: h ? d.wE8 : d.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? O.strikethrough : null
                                  }),
                                  null == s &&
                                      (0, i.jsx)(f.Z, {
                                          tooltipText: j.intl.string(j.t['6vrfgo']),
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
            b(this, 'handleToggleSelfMute', () => {
                let { context: e } = this.props;
                c.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            b(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                c.Z.toggleSelfDeaf({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            b(this, 'renderPopout', (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(x.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function M(e) {
    let { context: t, lobbyId: n, channel: s, ...l } = e,
        r = (0, a.e7)([Z.Z], () => Z.Z.getGuild(null == s ? void 0 : s.getGuildId())),
        o = (0, a.e7)([I.Z], () => null != s && I.Z.hasVideo(s.id)),
        [d, c] = (0, a.Wu)([S.Z], () => [S.Z.isSelfMute(t) || S.Z.isSelfMutedTemporarily(t), S.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, a.Wu)([N.Z], () => [N.Z.getConnectionState(n), N.Z.getLastPing(n), N.Z.getQuality(n)]);
    return (0, i.jsx)(k, {
        ...l,
        context: t,
        lobbyId: n,
        channel: s,
        guild: r,
        hasVideo: o,
        mute: d,
        deaf: c,
        connectionState: u,
        lastPing: h,
        quality: p
    });
}
