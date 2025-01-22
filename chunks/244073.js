n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(568611),
    l = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    g = n(870569),
    m = n(345243),
    v = n(873596),
    x = n(917405),
    S = n(430824),
    Z = n(131951),
    _ = n(699516),
    E = n(594174),
    C = n(979651),
    I = n(362446),
    N = n(518084),
    y = n(981631),
    b = n(388032),
    T = n(963656),
    O = n(382290);
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
            r = null != t ? t.id : y.ME;
        return (0, i.jsx)(a.rU, {
            to: y.Z5c.CHANNEL(r),
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
        let { className: e, contentClassName: t, pinned: n, lobbyId: s, channel: r, quality: a, lastPing: l, hasVideo: d, connectionState: u, deaf: h, mute: p } = this.props;
        return null == r
            ? null
            : (0, i.jsx)(N.ZP.Bar, {
                  className: o()(e, T.controls, { [T.unpinned]: !n }),
                  children: (0, i.jsxs)(N.ZP.Content, {
                      className: o()(t, T.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: O.inner,
                              children: (0, i.jsx)(c.Popout, {
                                  renderPopout: () => this.renderPopout(r.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(c.Clickable, {
                                          ...e,
                                          children: (0, i.jsx)(x.Z, {
                                              channelId: r.id,
                                              quality: a,
                                              lastPing: l,
                                              hasVideo: d,
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
                                      icon: p ? c.MicrophoneSlashIcon : c.MicrophoneIcon,
                                      iconForeground: p ? T.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: h ? b.intl.string(b.t['2US87+']) : b.intl.string(b.t.wjcRFR),
                                      icon: h ? c.HeadphonesSlashIcon : c.HeadphonesIcon,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? T.strikethrough : null
                                  }),
                                  null == s &&
                                      (0, i.jsx)(g.Z, {
                                          tooltipText: b.intl.string(b.t['6vrfgo']),
                                          onClick: this.handleDisconnect,
                                          icon: c.PhoneHangUpIcon
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
                d.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            j(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                d.Z.toggleSelfDeaf({
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
function k(e) {
    let { context: t, lobbyId: n, channel: s, ...r } = e,
        o = (0, l.e7)([S.Z], () => S.Z.getGuild(null == s ? void 0 : s.getGuildId())),
        a = (0, l.e7)([C.Z], () => null != s && C.Z.hasVideo(s.id)),
        [c, d] = (0, l.Wu)([Z.Z], () => [Z.Z.isSelfMute(t) || Z.Z.isSelfMutedTemporarily(t), Z.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, l.Wu)([I.Z], () => [I.Z.getConnectionState(n), I.Z.getLastPing(n), I.Z.getQuality(n)]);
    return (0, i.jsx)(M, {
        ...r,
        context: t,
        lobbyId: n,
        channel: s,
        guild: o,
        hasVideo: a,
        mute: c,
        deaf: d,
        connectionState: u,
        lastPing: h,
        quality: p
    });
}
