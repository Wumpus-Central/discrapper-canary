n.d(t, { Z: () => k }), n(388685);
var i = n(54381),
    r = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(319498),
    a = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    g = n(870569),
    m = n(345243),
    _ = n(873596),
    y = n(917405),
    v = n(430824),
    b = n(131951),
    O = n(699516),
    E = n(594174),
    x = n(979651),
    S = n(362446),
    Z = n(518084),
    j = n(981631),
    C = n(388032),
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
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.F6)(e, E.default, O.Z),
            r = null != t ? "".concat(n, " / ").concat(t.name) : n,
            s = null != t ? t.id : j.ME;
        return (0, i.jsx)(l.rU, {
            to: j.Z5c.CHANNEL(s),
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
            deaf: h,
            mute: p,
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
                                              children: (0, i.jsx)(y.Z, {
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
                                      tooltipText: p ? C.intl.string(C.t.YqAjXy) : C.intl.string(C.t.w4m945),
                                      icon: p ? c.nRN : c.S6n,
                                      iconForeground: p ? I.strikethrough : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: h ? C.intl.string(C.t["2US872"]) : C.intl.string(C.t.wjcRFX),
                                      icon: h ? c.wE8 : c.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? I.strikethrough : null,
                                  }),
                                  null == r &&
                                      (0, i.jsx)(g.Z, {
                                          tooltipText: C.intl.string(C.t["6vrfgt"]),
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
                return (0, i.jsx)(_.Z, {
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
    let o = (0, a.e7)([v.Z], () => v.Z.getGuild(null == r ? void 0 : r.getGuildId())),
        l = (0, a.e7)([x.Z], () => null != r && x.Z.hasVideo(r.id)),
        [c, d] = (0, a.Wu)([b.Z], () => [b.Z.isSelfMute(t) || b.Z.isSelfMutedTemporarily(t), b.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, a.Wu)([S.Z], () => [S.Z.getConnectionState(n), S.Z.getLastPing(n), S.Z.getQuality(n)]);
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
            lastPing: h,
            quality: p,
        }),
    );
}
