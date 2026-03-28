"use strict";
i.d(t, { A: () => C });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(311907),
    o = i(397927),
    d = i(684013),
    c = i(956793),
    u = i(47167),
    h = i(742589),
    _ = i(353428),
    p = i(95701),
    f = i(470710),
    m = i(734057),
    g = i(71393),
    A = i(994500),
    x = i(309010),
    v = i(745891),
    y = i(855790),
    E = i(985018),
    I = i(415333);
class S extends s.Component {
    state = { showOpacitySlider: !1 };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    handleClickCall = (e) => {
        let { channel: t, userIsInChannelCall: i, channelHasActiveCall: n } = this.props;
        if (n) i ? c.default.selectVoiceChannel(null) : d.A.callPrivateChannel(t.id, !1);
        else {
            let i = !e.shiftKey;
            d.A.callPrivateChannel(t.id, i);
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
            { channel: t, channelHasActiveCall: i, userIsInChannelCall: s, isBlocked: a } = this.props;
        if (!(0, p.Gw)(t.type)) return null;
        let l = o._jp,
            r = !1;
        return (
            i
                ? s
                    ? ((e = E.intl.string(E.t["4ry6yi"])), (l = o.zWQ))
                    : (e = E.intl.string(E.t["0D/6Rz"]))
                : a
                  ? ((e = E.intl.string(E.t.PHzjvX)), (r = !0))
                  : (e = E.intl.string(E.t.focH1t)),
            (0, n.jsx)(h.A.Icon, { icon: l, tooltip: e, onClick: this.handleClickCall, disabled: r })
        );
    }
    renderWidgetButtons = () => {
        let { locked: e, handlePin: t, pinned: i } = this.props,
            a = i ? E.intl.string(E.t.cSu80j) : E.intl.string(E.t.cM8Vnm);
        return e
            ? null
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      this.renderCallButton(),
                      i
                          ? (0, n.jsx)(h.A.Icon, {
                                icon: o.OHS,
                                tooltip: E.intl.string(E.t.OVovCb),
                                onClick: this.handleOpenOpacitySettings,
                            })
                          : null,
                      (0, n.jsx)(h.A.Icon, { icon: i ? o.hl9 : o.qgw, tooltip: a, selected: i, onClick: t }),
                  ],
              });
    };
    render() {
        let {
                className: e,
                draggableClassName: t,
                locked: i,
                channel: s,
                channelName: a,
                guild: r,
                onMouseDown: d,
                onContextMenu: c,
                isPreviewingInGame: u,
                disableDragIndicator: p,
            } = this.props,
            { showOpacitySlider: f } = this.state;
        return f && !i
            ? (0, n.jsxs)(y.Ay.Bar, {
                  className: I.dl,
                  children: [
                      (0, n.jsx)(v.A, {}),
                      (0, n.jsx)(h.A.Icon, {
                          icon: o.PGe,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: E.intl.string(E.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, n.jsx)(y.Ay.Background, {
                  opacityOverride: i || u ? null : 1,
                  children: (0, n.jsx)("div", {
                      className: l()(e, t, I.N1),
                      onMouseDown: d,
                      onContextMenu: c,
                      children: (0, n.jsxs)(h.A, {
                          guildId: s.guild_id,
                          channelId: s.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              u || i || p
                                  ? null
                                  : (0, n.jsx)(o.WP0, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: l()(I.co, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, _.zF)({ channel: s, channelName: a }),
                              i ? null : (0, _.EP)(s, r),
                          ],
                      }),
                  }),
              });
    }
}
function C(e) {
    let { channel: t, ...i } = e,
        s = (0, r.bG)([x.A, m.A], () => {
            let e = x.A.getVoiceChannelId();
            return m.A.getChannel(e);
        }),
        a = (0, r.bG)([g.A], () => g.A.getGuild(t.guild_id)),
        l = (0, r.bG)([f.A], () => f.A.isCallActive(t.id)),
        o = (0, u.Ay)(t),
        d = (0, r.bG)([A.A], () => !!t.isDM() && null != t.getRecipientId() && A.A.isBlocked(t.getRecipientId()));
    return (0, n.jsx)(S, {
        channel: t,
        channelName: o,
        guild: a,
        channelHasActiveCall: l,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: d,
        ...i,
    });
}
