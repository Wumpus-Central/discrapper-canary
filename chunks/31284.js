n.d(t, { A: () => R }), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(758879),
    a = n(311907),
    c = n(397927),
    d = n(827343),
    u = n(951001),
    h = n(956793),
    p = n(47167),
    f = n(235986),
    b = n(42473),
    g = n(994314),
    y = n(241847),
    A = n(178442),
    m = n(71393),
    O = n(430452),
    v = n(994500),
    E = n(287809),
    x = n(977997),
    S = n(572487),
    j = n(855790),
    _ = n(652215),
    I = n(985018),
    C = n(737398),
    w = n(255259);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
class T extends r.PureComponent {
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.m1)(e, E.default, v.A),
            r = null != t ? "".concat(n, " / ").concat(t.name) : n,
            s = null != t ? t.id : _.ME;
        return (0, i.jsx)(o.N_, {
            to: _.BVt.CHANNEL(s),
            onClick: (t) => {
                t.stopPropagation(), u.A.channelListScrollTo(s, e.id);
            },
            children: (0, i.jsx)(g.A, {
                className: w.Ix,
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
            quality: o,
            lastPing: a,
            hasVideo: d,
            connectionState: u,
            deaf: h,
            mute: p,
        } = this.props;
        return null == s
            ? null
            : (0, i.jsx)(j.Ay.Bar, {
                  className: l()(e, C.ne, { [C.CW]: !n }),
                  children: (0, i.jsxs)(j.Ay.Content, {
                      className: l()(t, C.Qs),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)("div", {
                              className: w.vW,
                              children: (0, i.jsx)(c.YNO, {
                                  targetElementRef: this.rtcConnectionStatusRef,
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: "top",
                                  children: (e) =>
                                      (0, i.jsx)(
                                          c.DUT,
                                          D(P({}, e), {
                                              innerRef: this.rtcConnectionStatusRef,
                                              children: (0, i.jsx)(A.A, {
                                                  channelId: s.id,
                                                  quality: o,
                                                  lastPing: a,
                                                  hasVideo: d,
                                                  state: u,
                                                  children: this.renderChannelLink(s),
                                              }),
                                          }),
                                      ),
                              }),
                          }),
                          (0, i.jsxs)(f.A, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(b.A, {
                                      tooltipText: p ? I.intl.string(I.t.YqAjXy) : I.intl.string(I.t.w4m945),
                                      icon: p ? c.z0P : c.cNw,
                                      iconForeground: p ? C.of : null,
                                      onClick: this.handleToggleSelfMute,
                                  }),
                                  (0, i.jsx)(b.A, {
                                      tooltipText: h ? I.intl.string(I.t["2US872"]) : I.intl.string(I.t.wjcRFX),
                                      icon: h ? c.cQT : c.LoC,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? C.of : null,
                                  }),
                                  null == r &&
                                      (0, i.jsx)(b.A, {
                                          tooltipText: I.intl.string(I.t["6vrfgt"]),
                                          onClick: this.handleDisconnect,
                                          icon: c.zWQ,
                                      }),
                              ],
                          }),
                      ],
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            N(this, "rtcConnectionStatusRef", r.createRef()),
            N(this, "handleToggleSelfMute", () => {
                let { context: e } = this.props;
                d.A.toggleSelfMute({
                    context: e,
                    location: "Overlay Controls",
                });
            }),
            N(this, "handleToggleSelfDeaf", () => {
                let { context: e } = this.props;
                d.A.toggleSelfDeaf({
                    context: e,
                    location: "Overlay Controls",
                });
            }),
            N(this, "renderPopout", (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(y.A, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0,
                });
            });
    }
}
function R(e) {
    let { context: t, lobbyId: n, channel: r } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.getOwnPropertyNames(e);
                    for (i = 0; i < s.length; i++)
                        (n = s[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
            return s;
        })(e, ["context", "lobbyId", "channel"]),
        l = (0, a.bG)([m.A], () => m.A.getGuild(null == r ? void 0 : r.getGuildId())),
        o = (0, a.bG)([x.A], () => null != r && x.A.hasVideo(r.id)),
        [c, d] = (0, a.yK)([O.A], () => [O.A.isSelfMute(t) || O.A.isSelfMutedTemporarily(t), O.A.isSelfDeaf(t)]),
        [u, h, p] = (0, a.yK)([S.A], () => [S.A.getConnectionState(n), S.A.getLastPing(n), S.A.getQuality(n)]);
    return (0, i.jsx)(
        T,
        D(P({}, s), {
            context: t,
            lobbyId: n,
            channel: r,
            guild: l,
            hasVideo: o,
            mute: c,
            deaf: d,
            connectionState: u,
            lastPing: h,
            quality: p,
        }),
    );
}
