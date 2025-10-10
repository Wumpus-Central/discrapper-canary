n.d(t, { Z: () => k }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    o = n.n(s),
    l = n(799899),
    a = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    p = n(287734),
    h = n(933557),
    f = n(600164),
    g = n(870569),
    m = n(345243),
    y = n(873596),
    _ = n(917405),
    O = n(430824),
    v = n(131951),
    b = n(699516),
    E = n(594174),
    x = n(979651),
    S = n(362446),
    Z = n(518084),
    C = n(981631),
    j = n(388032),
    I = n(361979),
    P = n(890332);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                w(e, t, n[t]);
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
        p.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, h.F6)(e, E.default, b.Z),
            r = null != t ? "".concat(n, " / ").concat(t.name) : n,
            s = null != t ? t.id : C.ME;
        return (0, i.jsx)(l.rU, {
            to: C.Z5c.CHANNEL(s),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(s, e.id);
            },
            children: (0, i.jsx)(m.Z, {
                className: P.channel,
                children: r,
            }),
        });
    }
    render() {
        let {
            className: e,
            contentClassName: t,
            pinned: n,
            lobbyId: r,
            channel: s,
            quality: l,
            lastPing: a,
            hasVideo: d,
            connectionState: u,
            deaf: p,
            mute: h,
        } = this.props;
        return null == s
            ? null
            : (0, i.jsx)(Z.ZP.Bar, {
                  className: o()(e, I.controls, { [I.unpinned]: !n }),
                  children: (0, i.jsxs)(Z.ZP.Content, {
                      className: o()(t, I.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)("div", {
                              className: P.inner,
                              children: (0, i.jsx)(c.yRy, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, i.jsx)(
                                          c.P3F,
                                          T(N({}, e), {
                                              innerRef: this.rtcConnectionStatusRef,
                                              children: (0, i.jsx)(_.Z, {
                                                  channelId: s.id,
                                                  quality: l,
                                                  lastPing: a,
                                                  hasVideo: d,
                                                  state: u,
                                                  children: this.renderChannelLink(s),
                                              }),
                                          }),
                                      ),
                              }),
                          }),
                          (0, i.jsxs)(f.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: h ? j.intl.string(j.t.YqAjX1) : j.intl.string(j.t["w4m94+"]),
                                      icon: h ? c.nRN : c.S6n,
                                      iconForeground: h ? I.strikethrough : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: p ? j.intl.string(j.t["2US87+"]) : j.intl.string(j.t.wjcRFR),
                                      icon: p ? c.wE8 : c.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: p ? I.strikethrough : null,
                                  }),
                                  null == r &&
                                      (0, i.jsx)(g.Z, {
                                          tooltipText: j.intl.string(j.t["6vrfgo"]),
                                          onClick: this.handleDisconnect,
                                          icon: c.gkL,
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            w(this, "rtcConnectionStatusRef", r.createRef()),
            w(this, "handleToggleSelfMute", () => {
                let { context: e } = this.props;
                d.Z.toggleSelfMute({
                    context: e,
                    location: "Overlay Controls",
                });
            }),
            w(this, "handleToggleSelfDeaf", () => {
                let { context: e } = this.props;
                d.Z.toggleSelfDeaf({
                    context: e,
                    location: "Overlay Controls",
                });
            }),
            w(this, "renderPopout", (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(y.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0,
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
                for (i = 0; i < s.length; i++)
                    (n = s[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["context", "lobbyId", "channel"]);
    let o = (0, a.e7)([O.Z], () => O.Z.getGuild(null == r ? void 0 : r.getGuildId())),
        l = (0, a.e7)([x.Z], () => null != r && x.Z.hasVideo(r.id)),
        [c, d] = (0, a.Wu)([v.Z], () => [v.Z.isSelfMute(t) || v.Z.isSelfMutedTemporarily(t), v.Z.isSelfDeaf(t)]),
        [u, p, h] = (0, a.Wu)([S.Z], () => [S.Z.getConnectionState(n), S.Z.getLastPing(n), S.Z.getQuality(n)]);
    return (0, i.jsx)(
        D,
        T(N({}, s), {
            context: t,
            lobbyId: n,
            channel: r,
            guild: o,
            hasVideo: l,
            mute: c,
            deaf: d,
            connectionState: u,
            lastPing: p,
            quality: h,
        }),
    );
}
