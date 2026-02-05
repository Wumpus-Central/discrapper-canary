"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(684013),
    c = n(956793),
    u = n(47167),
    h = n(742589),
    p = n(353428),
    A = n(95701),
    f = n(470710),
    g = n(734057),
    _ = n(71393),
    m = n(994500),
    E = n(309010),
    x = n(745891),
    y = n(855790),
    v = n(985018),
    S = n(803946);
class I extends s.Component {
    state = { showOpacitySlider: !1 };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    handleClickCall = (e) => {
        let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
        if (i) n ? c.default.selectVoiceChannel(null) : d.A.callPrivateChannel(t.id, !1);
        else {
            let n = !i && !e.shiftKey;
            d.A.callPrivateChannel(t.id, n);
        }
    };
    handleOpenOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !0 }), e && d.A.setPreviewInGameMode(!0);
    };
    handleCloseOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !1 }), e && d.A.setPreviewInGameMode(!1);
    };
    handleMouseDown = (e) => {
        let { onMouseDown: t } = this.props;
        null != t && t(e);
    };
    renderCallButton() {
        let e,
            { channel: t, channelHasActiveCall: n, userIsInChannelCall: s, isBlocked: l } = this.props;
        if (!(0, A.Gw)(t.type)) return null;
        let a = o._jp,
            r = !1;
        return (
            n
                ? s
                    ? ((e = v.intl.string(v.t["4ry6yi"])), (a = o.zWQ))
                    : (e = v.intl.string(v.t["0D/6Rz"]))
                : l
                  ? ((e = v.intl.string(v.t.PHzjvX)), (r = !0))
                  : (e = v.intl.string(v.t.focH1t)),
            (0, i.jsx)(h.A.Icon, { icon: a, tooltip: e, onClick: this.handleClickCall, disabled: r })
        );
    }
    renderWidgetButtons = () => {
        let { locked: e, handlePin: t, pinned: n } = this.props,
            l = n ? v.intl.string(v.t.cSu80j) : v.intl.string(v.t.cM8Vnm);
        return e
            ? null
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      this.renderCallButton(),
                      n
                          ? (0, i.jsx)(h.A.Icon, {
                                icon: o.OHS,
                                tooltip: v.intl.string(v.t.OVovCb),
                                onClick: this.handleOpenOpacitySettings,
                            })
                          : null,
                      (0, i.jsx)(h.A.Icon, { icon: n ? o.hl9 : o.qgw, tooltip: l, selected: n, onClick: t }),
                  ],
              });
    };
    render() {
        let {
                className: e,
                draggableClassName: t,
                locked: n,
                channel: s,
                channelName: l,
                guild: r,
                onMouseDown: d,
                onContextMenu: c,
                isPreviewingInGame: u,
                disableDragIndicator: A,
            } = this.props,
            { showOpacitySlider: f } = this.state;
        return f && !n
            ? (0, i.jsxs)(y.Ay.Bar, {
                  className: S.dl,
                  children: [
                      (0, i.jsx)(x.A, {}),
                      (0, i.jsx)(h.A.Icon, {
                          icon: o.PGe,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: v.intl.string(v.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, i.jsx)(y.Ay.Background, {
                  opacityOverride: n || u ? null : 1,
                  children: (0, i.jsx)("div", {
                      className: a()(e, t, S.N1),
                      onMouseDown: d,
                      onContextMenu: c,
                      children: (0, i.jsxs)(h.A, {
                          guildId: s.guild_id,
                          channelId: s.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || n || A
                                  ? null
                                  : (0, i.jsx)(o.WP0, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: a()(S.co, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, p.zF)({ channel: s, channelName: l }),
                              n ? null : (0, p.EP)(s, r),
                          ],
                      }),
                  }),
              });
    }
}
function C(e) {
    let { channel: t, ...n } = e,
        s = (0, r.bG)([E.A, g.A], () => {
            let e = E.A.getVoiceChannelId();
            return g.A.getChannel(e);
        }),
        l = (0, r.bG)([_.A], () => _.A.getGuild(t.guild_id)),
        a = (0, r.bG)([f.A], () => f.A.isCallActive(t.id)),
        o = (0, u.Ay)(t),
        d = (0, r.bG)([m.A], () => !!t.isDM() && null != t.getRecipientId() && m.A.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(I, {
        channel: t,
        channelName: o,
        guild: l,
        channelHasActiveCall: a,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: d,
        ...n,
    });
}
