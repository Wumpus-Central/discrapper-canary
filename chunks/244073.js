n.d(t, { Z: () => R }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(688642),
    a = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    g = n(77880),
    m = n(870569),
    y = n(345243),
    v = n(873596),
    _ = n(917405),
    O = n(430824),
    b = n(131951),
    E = n(699516),
    x = n(594174),
    S = n(979651),
    C = n(362446),
    j = n(518084),
    Z = n(981631),
    I = n(388032),
    P = n(738901),
    N = n(566177);
function w(e, t, n) {
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
function T(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
            n = (0, p.F6)(e, x.default, E.Z),
            r = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            o = null != t ? t.id : Z.ME;
        return (0, i.jsx)(l.rU, {
            to: Z.Z5c.CHANNEL(o),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(o, e.id);
            },
            children: (0, i.jsx)(y.Z, {
                className: N.channel,
                children: r
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: r, channel: o, quality: l, lastPing: a, hasVideo: d, connectionState: u, deaf: h, mute: p, changeLeaveCallAndActivityIcons: g } = this.props;
        return null == o
            ? null
            : (0, i.jsx)(j.ZP.Bar, {
                  className: s()(e, P.controls, { [P.unpinned]: !n }),
                  children: (0, i.jsxs)(j.ZP.Content, {
                      className: s()(t, P.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: N.inner,
                              children: (0, i.jsx)(c.yRy, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(o.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(
                                          c.P3F,
                                          k(T({}, e), {
                                              innerRef: this.rtcConnectionStatusRef,
                                              children: (0, i.jsx)(_.Z, {
                                                  channelId: o.id,
                                                  quality: l,
                                                  lastPing: a,
                                                  hasVideo: d,
                                                  state: u,
                                                  children: this.renderChannelLink(o)
                                              })
                                          })
                                      )
                              })
                          }),
                          (0, i.jsxs)(f.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(m.Z, {
                                      tooltipText: p ? I.intl.string(I.t.YqAjX1) : I.intl.string(I.t['w4m94+']),
                                      icon: p ? c.nRN : c.S6n,
                                      iconForeground: p ? P.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(m.Z, {
                                      tooltipText: h ? I.intl.string(I.t['2US87+']) : I.intl.string(I.t.wjcRFR),
                                      icon: h ? c.wE8 : c.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? P.strikethrough : null
                                  }),
                                  null == r &&
                                      (0, i.jsx)(m.Z, {
                                          tooltipText: g ? I.intl.string(I.t['Hi1/aW']) : I.intl.string(I.t['6vrfgo']),
                                          onClick: this.handleDisconnect,
                                          icon: g ? c.PBZ : c.gkL
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            w(this, 'rtcConnectionStatusRef', r.createRef()),
            w(this, 'handleToggleSelfMute', () => {
                let { context: e } = this.props;
                d.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            w(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                d.Z.toggleSelfDeaf({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            w(this, 'renderPopout', (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(v.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function R(e) {
    var { context: t, lobbyId: n, channel: r } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['context', 'lobbyId', 'channel']);
    let s = (0, a.e7)([O.Z], () => O.Z.getGuild(null == r ? void 0 : r.getGuildId())),
        l = (0, a.e7)([S.Z], () => null != r && S.Z.hasVideo(r.id)),
        [c, d] = (0, a.Wu)([b.Z], () => [b.Z.isSelfMute(t) || b.Z.isSelfMutedTemporarily(t), b.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, a.Wu)([C.Z], () => [C.Z.getConnectionState(n), C.Z.getLastPing(n), C.Z.getQuality(n)]),
        { changeLeaveCallAndActivityIcons: f } = (0, g.A)({ location: 'Controls' });
    return (0, i.jsx)(
        D,
        k(T({}, o), {
            context: t,
            lobbyId: n,
            channel: r,
            guild: s,
            hasVideo: l,
            mute: c,
            deaf: d,
            connectionState: u,
            lastPing: h,
            quality: p,
            changeLeaveCallAndActivityIcons: f
        })
    );
}
