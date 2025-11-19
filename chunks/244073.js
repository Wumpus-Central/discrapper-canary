n.d(t, { Z: () => k }), n(388685);
var i = n(54381),
    r = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(319498),
    a = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    g = n(870569),
    m = n(345243),
    y = n(873596),
    b = n(917405),
    _ = n(430824),
    v = n(131951),
    O = n(699516),
    E = n(594174),
    S = n(979651),
    Z = n(362446),
    j = n(518084),
    x = n(981631),
    C = n(388032),
    I = n(542596),
    P = n(239545);
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
function T(e) {
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
function N(e, t) {
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
            o = null != t ? t.id : x.ME;
        return (0, i.jsx)(s.rU, {
            to: x.Z5c.CHANNEL(o),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(o, e.id);
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
            channel: o,
            quality: s,
            lastPing: a,
            hasVideo: d,
            connectionState: u,
            deaf: h,
            mute: p,
        } = this.props;
        return null == o
            ? null
            : (0, i.jsx)(j.ZP.Bar, {
                  className: l()(e, I.controls, { [I.unpinned]: !n }),
                  children: (0, i.jsxs)(j.ZP.Content, {
                      className: l()(t, I.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)("div", {
                              className: P.inner,
                              children: (0, i.jsx)(c.yRy, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(o.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, i.jsx)(
                                          c.P3F,
                                          N(T({}, e), {
                                              innerRef: this.rtcConnectionStatusRef,
                                              children: (0, i.jsx)(b.Z, {
                                                  channelId: o.id,
                                                  quality: s,
                                                  lastPing: a,
                                                  hasVideo: d,
                                                  state: u,
                                                  children: this.renderChannelLink(o),
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
                for (i = 0; i < o.length; i++)
                    (n = o[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["context", "lobbyId", "channel"]);
    let l = (0, a.e7)([_.Z], () => _.Z.getGuild(null == r ? void 0 : r.getGuildId())),
        s = (0, a.e7)([S.Z], () => null != r && S.Z.hasVideo(r.id)),
        [c, d] = (0, a.Wu)([v.Z], () => [v.Z.isSelfMute(t) || v.Z.isSelfMutedTemporarily(t), v.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, a.Wu)([Z.Z], () => [Z.Z.getConnectionState(n), Z.Z.getLastPing(n), Z.Z.getQuality(n)]);
    return (0, i.jsx)(
        D,
        N(T({}, o), {
            context: t,
            lobbyId: n,
            channel: r,
            guild: l,
            hasVideo: s,
            mute: c,
            deaf: d,
            connectionState: u,
            lastPing: h,
            quality: p,
        }),
    );
}
