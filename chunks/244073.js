n.d(t, { Z: () => k }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(319498),
    l = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    f = n(287734),
    h = n(933557),
    p = n(600164),
    g = n(870569),
    b = n(345243),
    m = n(873596),
    y = n(917405),
    v = n(430824),
    O = n(131951),
    E = n(699516),
    x = n(594174),
    S = n(979651),
    _ = n(362446),
    Z = n(518084),
    j = n(981631),
    C = n(388032),
    I = n(978440),
    P = n(424126);
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
        f.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, h.F6)(e, x.default, E.Z),
            r = null != t ? "".concat(n, " / ").concat(t.name) : n,
            a = null != t ? t.id : j.ME;
        return (0, i.jsx)(o.rU, {
            to: j.Z5c.CHANNEL(a),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(a, e.id);
            },
            children: (0, i.jsx)(b.Z, {
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
            channel: a,
            quality: o,
            lastPing: l,
            hasVideo: d,
            connectionState: u,
            deaf: f,
            mute: h,
        } = this.props;
        return null == a
            ? null
            : (0, i.jsx)(Z.ZP.Bar, {
                  className: s()(e, I.controls, { [I.unpinned]: !n }),
                  children: (0, i.jsxs)(Z.ZP.Content, {
                      className: s()(t, I.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)("div", {
                              className: P.inner,
                              children: (0, i.jsx)(c.yRy, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(a.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, i.jsx)(
                                          c.P3F,
                                          N(T({}, e), {
                                              innerRef: this.rtcConnectionStatusRef,
                                              children: (0, i.jsx)(y.Z, {
                                                  channelId: a.id,
                                                  quality: o,
                                                  lastPing: l,
                                                  hasVideo: d,
                                                  state: u,
                                                  children: this.renderChannelLink(a),
                                              }),
                                          }),
                                      ),
                              }),
                          }),
                          (0, i.jsxs)(p.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: h ? C.intl.string(C.t.YqAjXy) : C.intl.string(C.t.w4m945),
                                      icon: h ? c.nRN : c.S6n,
                                      iconForeground: h ? I.strikethrough : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: f ? C.intl.string(C.t["2US872"]) : C.intl.string(C.t.wjcRFX),
                                      icon: f ? c.wE8 : c.VWR,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: f ? I.strikethrough : null,
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
                return (0, i.jsx)(m.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0,
                });
            });
    }
}
function k(e) {
    var { context: t, lobbyId: n, channel: r } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++)
                    (n = a[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["context", "lobbyId", "channel"]);
    let s = (0, l.e7)([v.Z], () => v.Z.getGuild(null == r ? void 0 : r.getGuildId())),
        o = (0, l.e7)([S.Z], () => null != r && S.Z.hasVideo(r.id)),
        [c, d] = (0, l.Wu)([O.Z], () => [O.Z.isSelfMute(t) || O.Z.isSelfMutedTemporarily(t), O.Z.isSelfDeaf(t)]),
        [u, f, h] = (0, l.Wu)([_.Z], () => [_.Z.getConnectionState(n), _.Z.getLastPing(n), _.Z.getQuality(n)]);
    return (0, i.jsx)(
        D,
        N(T({}, a), {
            context: t,
            lobbyId: n,
            channel: r,
            guild: s,
            hasVideo: o,
            mute: c,
            deaf: d,
            connectionState: u,
            lastPing: f,
            quality: h,
        }),
    );
}
