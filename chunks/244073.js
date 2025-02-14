n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(568611),
    r = n(442837),
    d = n(481060),
    c = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    g = n(600164),
    m = n(870569),
    f = n(345243),
    v = n(873596),
    Z = n(917405),
    x = n(430824),
    S = n(131951),
    E = n(699516),
    C = n(594174),
    y = n(979651),
    N = n(362446),
    I = n(518084),
    _ = n(981631),
    O = n(388032),
    j = n(737290),
    T = n(74671);
function k(e, t, n) {
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
class M extends s.PureComponent {
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
            children: (0, i.jsx)(f.Z, {
                className: T.channel,
                children: s
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: s, channel: l, quality: o, lastPing: r, hasVideo: c, connectionState: u, deaf: h, mute: p } = this.props;
        return null == l
            ? null
            : (0, i.jsx)(I.ZP.Bar, {
                  className: a()(e, j.controls, { [j.unpinned]: !n }),
                  children: (0, i.jsxs)(I.ZP.Content, {
                      className: a()(t, j.content),
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
                                          children: (0, i.jsx)(Z.Z, {
                                              channelId: l.id,
                                              quality: o,
                                              lastPing: r,
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
                                  (0, i.jsx)(m.Z, {
                                      tooltipText: p ? O.intl.string(O.t.YqAjX1) : O.intl.string(O.t['w4m94+']),
                                      icon: p ? d.nRN : d.S6n,
                                      iconForeground: p ? j.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(m.Z, {
                                      tooltipText: h ? O.intl.string(O.t['2US87+']) : O.intl.string(O.t.wjcRFR),
                                      icon: h ? d.wE8 : d.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? j.strikethrough : null
                                  }),
                                  null == s &&
                                      (0, i.jsx)(m.Z, {
                                          tooltipText: O.intl.string(O.t['6vrfgo']),
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
            k(this, 'handleToggleSelfMute', () => {
                let { context: e } = this.props;
                c.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            k(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                c.Z.toggleSelfDeaf({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            k(this, 'renderPopout', (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(v.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function b(e) {
    let { context: t, lobbyId: n, channel: s, ...l } = e,
        a = (0, r.e7)([x.Z], () => x.Z.getGuild(null == s ? void 0 : s.getGuildId())),
        o = (0, r.e7)([y.Z], () => null != s && y.Z.hasVideo(s.id)),
        [d, c] = (0, r.Wu)([S.Z], () => [S.Z.isSelfMute(t) || S.Z.isSelfMutedTemporarily(t), S.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, r.Wu)([N.Z], () => [N.Z.getConnectionState(n), N.Z.getLastPing(n), N.Z.getQuality(n)]);
    return (0, i.jsx)(M, {
        ...l,
        context: t,
        lobbyId: n,
        channel: s,
        guild: a,
        hasVideo: o,
        mute: d,
        deaf: c,
        connectionState: u,
        lastPing: h,
        quality: p
    });
}
