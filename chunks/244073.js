n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(568611),
    a = n(442837),
    c = n(481060),
    u = n(846027),
    d = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    g = n(870569),
    m = n(345243),
    y = n(873596),
    O = n(917405),
    v = n(430824),
    x = n(131951),
    b = n(699516),
    S = n(594174),
    E = n(979651),
    j = n(362446),
    N = n(518084),
    Z = n(981631),
    C = n(388032),
    I = n(738901),
    P = n(566177);
function _(e, t, n) {
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
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class D extends r.PureComponent {
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.F6)(e, S.default, b.Z),
            r = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            s = null != t ? t.id : Z.ME;
        return (0, i.jsx)(l.rU, {
            to: Z.Z5c.CHANNEL(s),
            onClick: (t) => {
                t.stopPropagation(), d.Z.channelListScrollTo(s, e.id);
            },
            children: (0, i.jsx)(m.Z, {
                className: P.channel,
                children: r
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: r, channel: s, quality: l, lastPing: a, hasVideo: u, connectionState: d, deaf: h, mute: p } = this.props;
        return null == s
            ? null
            : (0, i.jsx)(N.ZP.Bar, {
                  className: o()(e, I.controls, { [I.unpinned]: !n }),
                  children: (0, i.jsxs)(N.ZP.Content, {
                      className: o()(t, I.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: P.inner,
                              children: (0, i.jsx)(c.yRy, {
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(
                                          c.P3F,
                                          T(w({}, e), {
                                              children: (0, i.jsx)(O.Z, {
                                                  channelId: s.id,
                                                  quality: l,
                                                  lastPing: a,
                                                  hasVideo: u,
                                                  state: d,
                                                  children: this.renderChannelLink(s)
                                              })
                                          })
                                      )
                              })
                          }),
                          (0, i.jsxs)(f.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: p ? C.NW.string(C.t.YqAjX1) : C.NW.string(C.t['w4m94+']),
                                      icon: p ? c.nRN : c.S6n,
                                      iconForeground: p ? I.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: h ? C.NW.string(C.t['2US87+']) : C.NW.string(C.t.wjcRFR),
                                      icon: h ? c.wE8 : c.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? I.strikethrough : null
                                  }),
                                  null == r &&
                                      (0, i.jsx)(g.Z, {
                                          tooltipText: C.NW.string(C.t['6vrfgo']),
                                          onClick: this.handleDisconnect,
                                          icon: c.gkL
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleToggleSelfMute', () => {
                let { context: e } = this.props;
                u.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            _(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                u.Z.toggleSelfDeaf({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            _(this, 'renderPopout', (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(y.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function k(e) {
    var { context: t, lobbyId: n, channel: r } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['context', 'lobbyId', 'channel']);
    let o = (0, a.e7)([v.Z], () => v.Z.getGuild(null == r ? void 0 : r.getGuildId())),
        l = (0, a.e7)([E.Z], () => null != r && E.Z.hasVideo(r.id)),
        [c, u] = (0, a.Wu)([x.Z], () => [x.Z.isSelfMute(t) || x.Z.isSelfMutedTemporarily(t), x.Z.isSelfDeaf(t)]),
        [d, h, p] = (0, a.Wu)([j.Z], () => [j.Z.getConnectionState(n), j.Z.getLastPing(n), j.Z.getQuality(n)]);
    return (0, i.jsx)(
        D,
        T(w({}, s), {
            context: t,
            lobbyId: n,
            channel: r,
            guild: o,
            hasVideo: l,
            mute: c,
            deaf: u,
            connectionState: d,
            lastPing: h,
            quality: p
        })
    );
}
