n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(568611),
    l = n(442837),
    d = n(481060),
    c = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    g = n(870569),
    m = n(345243),
    v = n(873596),
    x = n(917405),
    Z = n(430824),
    S = n(131951),
    _ = n(699516),
    E = n(594174),
    C = n(979651),
    I = n(362446),
    y = n(518084),
    N = n(981631),
    b = n(388032),
    T = n(391049),
    O = n(591318);
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
class M extends s.PureComponent {
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.F6)(e, E.default, _.Z),
            s = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            r = null != t ? t.id : N.ME;
        return (0, i.jsx)(o.rU, {
            to: N.Z5c.CHANNEL(r),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(r, e.id);
            },
            children: (0, i.jsx)(m.Z, {
                className: O.channel,
                children: s
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: s, channel: r, quality: o, lastPing: l, hasVideo: c, connectionState: u, deaf: h, mute: p } = this.props;
        return null == r
            ? null
            : (0, i.jsx)(y.ZP.Bar, {
                  className: a()(e, T.controls, { [T.unpinned]: !n }),
                  children: (0, i.jsxs)(y.ZP.Content, {
                      className: a()(t, T.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: O.inner,
                              children: (0, i.jsx)(d.Popout, {
                                  renderPopout: () => this.renderPopout(r.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(d.Clickable, {
                                          ...e,
                                          children: (0, i.jsx)(x.Z, {
                                              channelId: r.id,
                                              quality: o,
                                              lastPing: l,
                                              hasVideo: c,
                                              state: u,
                                              children: this.renderChannelLink(r)
                                          })
                                      })
                              })
                          }),
                          (0, i.jsxs)(f.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: p ? b.intl.string(b.t.YqAjX1) : b.intl.string(b.t['w4m94+']),
                                      icon: p ? d.MicrophoneSlashIcon : d.MicrophoneIcon,
                                      iconForeground: p ? T.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: h ? b.intl.string(b.t['2US87+']) : b.intl.string(b.t.wjcRFR),
                                      icon: h ? d.HeadphonesSlashIcon : d.HeadphonesIcon,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? T.strikethrough : null
                                  }),
                                  null == s &&
                                      (0, i.jsx)(g.Z, {
                                          tooltipText: b.intl.string(b.t['6vrfgo']),
                                          onClick: this.handleDisconnect,
                                          icon: d.PhoneHangUpIcon
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
                return (0, i.jsx)(v.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function w(e) {
    let { context: t, lobbyId: n, channel: s, ...r } = e,
        a = (0, l.e7)([Z.Z], () => Z.Z.getGuild(null == s ? void 0 : s.getGuildId())),
        o = (0, l.e7)([C.Z], () => null != s && C.Z.hasVideo(s.id)),
        [d, c] = (0, l.Wu)([S.Z], () => [S.Z.isSelfMute(t) || S.Z.isSelfMutedTemporarily(t), S.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, l.Wu)([I.Z], () => [I.Z.getConnectionState(n), I.Z.getLastPing(n), I.Z.getQuality(n)]);
    return (0, i.jsx)(M, {
        ...r,
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
