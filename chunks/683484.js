n.d(t, { A: () => _ }), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(311907),
    a = n(397927),
    c = n(684013),
    d = n(956793),
    u = n(47167),
    h = n(742589),
    p = n(353428),
    f = n(95701),
    b = n(470710),
    g = n(734057),
    y = n(71393),
    A = n(994500),
    m = n(309010),
    O = n(745891),
    v = n(855790),
    E = n(985018),
    x = n(803946);
function S(e, t, n) {
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
class j extends r.Component {
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    renderCallButton() {
        let e,
            { channel: t, channelHasActiveCall: n, userIsInChannelCall: r, isBlocked: s } = this.props;
        if (!(0, f.Gw)(t.type)) return null;
        let l = a._jp,
            o = !1;
        return (
            n
                ? r
                    ? ((e = E.intl.string(E.t["4ry6yi"])), (l = a.zWQ))
                    : (e = E.intl.string(E.t["0D/6Rz"]))
                : s
                  ? ((e = E.intl.string(E.t.PHzjvX)), (o = !0))
                  : (e = E.intl.string(E.t.focH1t)),
            (0, i.jsx)(h.A.Icon, {
                icon: l,
                tooltip: e,
                onClick: this.handleClickCall,
                disabled: o,
            })
        );
    }
    render() {
        let {
                className: e,
                draggableClassName: t,
                locked: n,
                channel: r,
                channelName: s,
                guild: o,
                onMouseDown: c,
                onContextMenu: d,
                isPreviewingInGame: u,
                disableDragIndicator: f,
            } = this.props,
            { showOpacitySlider: b } = this.state;
        return b && !n
            ? (0, i.jsxs)(v.Ay.Bar, {
                  className: x.dl,
                  children: [
                      (0, i.jsx)(O.A, {}),
                      (0, i.jsx)(h.A.Icon, {
                          icon: a.PGe,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: E.intl.string(E.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, i.jsx)(v.Ay.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)("div", {
                      className: l()(e, t, x.N1),
                      onMouseDown: c,
                      onContextMenu: d,
                      children: (0, i.jsxs)(h.A, {
                          guildId: r.guild_id,
                          channelId: r.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || f
                                  ? null
                                  : (0, i.jsx)(a.WP0, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: l()(x.co, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, p.zF)({
                                  channel: r,
                                  channelName: s,
                              }),
                              n ? null : (0, p.EP)(r, o),
                          ],
                      }),
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            S(this, "state", { showOpacitySlider: !1 }),
            S(this, "handleClickCall", (e) => {
                let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
                if (i) n ? d.default.selectVoiceChannel(null) : c.A.callPrivateChannel(t.id, !1);
                else {
                    let n = !i && !e.shiftKey;
                    c.A.callPrivateChannel(t.id, n);
                }
            }),
            S(this, "handleOpenOpacitySettings", () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !0 }), e && c.A.setPreviewInGameMode(!0);
            }),
            S(this, "handleCloseOpacitySettings", () => {
                let { pinned: e } = this.props;
                this.setState({ showOpacitySlider: !1 }), e && c.A.setPreviewInGameMode(!1);
            }),
            S(this, "handleMouseDown", (e) => {
                let { onMouseDown: t } = this.props;
                null != t && t(e);
            }),
            S(this, "renderWidgetButtons", () => {
                let { locked: e, handlePin: t, pinned: n } = this.props,
                    s = n ? E.intl.string(E.t.cSu80j) : E.intl.string(E.t.cM8Vnm);
                return e
                    ? null
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              this.renderCallButton(),
                              n
                                  ? (0, i.jsx)(h.A.Icon, {
                                        icon: a.OHS,
                                        tooltip: E.intl.string(E.t.OVovCb),
                                        onClick: this.handleOpenOpacitySettings,
                                    })
                                  : null,
                              (0, i.jsx)(h.A.Icon, {
                                  icon: n ? a.hl9 : a.qgw,
                                  tooltip: s,
                                  selected: n,
                                  onClick: t,
                              }),
                          ],
                      });
            });
    }
}
function _(e) {
    let { channel: t } = e,
        n = (function (e, t) {
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
        })(e, ["channel"]),
        r = (0, o.bG)([m.A, g.A], () => {
            let e = m.A.getVoiceChannelId();
            return g.A.getChannel(e);
        }),
        s = (0, o.bG)([y.A], () => y.A.getGuild(t.guild_id)),
        l = (0, o.bG)([b.A], () => b.A.isCallActive(t.id)),
        a = (0, u.Ay)(t),
        c = (0, o.bG)([A.A], () => !!t.isDM() && null != t.getRecipientId() && A.A.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(
        j,
        (function (e) {
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
                        S(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                channel: t,
                channelName: a,
                guild: s,
                channelHasActiveCall: l,
                userIsInChannelCall: null != r && r.id === t.id,
                isBlocked: c,
            },
            n,
        ),
    );
}
