"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(978940),
    d = n(960027),
    c = n(115354),
    u = n(609731),
    h = n(788120),
    p = n(789645),
    A = n(772838),
    f = n(684013),
    _ = n(956793),
    g = n(47167),
    m = n(742589),
    E = n(353428),
    x = n(95701),
    y = n(470710),
    v = n(734057),
    S = n(71393),
    C = n(994500),
    I = n(309010),
    N = n(745891),
    T = n(855790),
    b = n(985018),
    O = n(798805);
class D extends s.Component {
    state = { showOpacitySlider: !1 };
    componentDidUpdate() {
        this.props.locked && this.state.showOpacitySlider && this.setState({ showOpacitySlider: !1 });
    }
    handleClickCall = (e) => {
        let { channel: t, userIsInChannelCall: n, channelHasActiveCall: i } = this.props;
        if (i) n ? _.default.selectVoiceChannel(null) : f.A.callPrivateChannel(t.id, !1);
        else {
            let n = !e.shiftKey;
            f.A.callPrivateChannel(t.id, n);
        }
    };
    handleOpenOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !0 }), e && f.A.setPreviewInGameMode(!0);
    };
    handleCloseOpacitySettings = () => {
        let { pinned: e } = this.props;
        this.setState({ showOpacitySlider: !1 }), e && f.A.setPreviewInGameMode(!1);
    };
    handleMouseDown = (e) => {
        let { onMouseDown: t } = this.props;
        null != t && t(e);
    };
    renderCallButton() {
        let e,
            { channel: t, channelHasActiveCall: n, userIsInChannelCall: s, isBlocked: l } = this.props;
        if (!(0, x.Gw)(t.type)) return null;
        let a = o._,
            r = !1;
        return (
            n
                ? s
                    ? ((e = b.intl.string(b.t["4ry6yi"])), (a = d.z))
                    : (e = b.intl.string(b.t["0D/6Rz"]))
                : l
                  ? ((e = b.intl.string(b.t.PHzjvX)), (r = !0))
                  : (e = b.intl.string(b.t.focH1t)),
            (0, i.jsx)(m.A.Icon, { icon: a, tooltip: e, onClick: this.handleClickCall, disabled: r })
        );
    }
    renderWidgetButtons = () => {
        let { locked: e, handlePin: t, pinned: n } = this.props,
            l = n ? b.intl.string(b.t.cSu80j) : b.intl.string(b.t.cM8Vnm);
        return e
            ? null
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      this.renderCallButton(),
                      n
                          ? (0, i.jsx)(m.A.Icon, {
                                icon: c.O,
                                tooltip: b.intl.string(b.t.OVovCb),
                                onClick: this.handleOpenOpacitySettings,
                            })
                          : null,
                      (0, i.jsx)(m.A.Icon, { icon: n ? u.h : h.q, tooltip: l, selected: n, onClick: t }),
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
                onMouseDown: o,
                onContextMenu: d,
                isPreviewingInGame: c,
                disableDragIndicator: u,
            } = this.props,
            { showOpacitySlider: h } = this.state;
        return h && !n
            ? (0, i.jsxs)(T.Ay.Bar, {
                  className: O.dl,
                  children: [
                      (0, i.jsx)(N.A, {}),
                      (0, i.jsx)(m.A.Icon, {
                          icon: p.P,
                          onClick: this.handleCloseOpacitySettings,
                          tooltip: b.intl.string(b.t.cpT0Cq),
                      }),
                  ],
              })
            : (0, i.jsx)(T.Ay.Background, {
                  opacityOverride: n || c ? null : 1,
                  children: (0, i.jsx)("div", {
                      className: a()(e, t, O.N1),
                      onMouseDown: o,
                      onContextMenu: d,
                      children: (0, i.jsxs)(m.A, {
                          guildId: s.guild_id,
                          channelId: s.id,
                          toolbar: this.renderWidgetButtons(),
                          transparent: !0,
                          children: [
                              c || n || u
                                  ? null
                                  : (0, i.jsx)(A.W, {
                                        size: "custom",
                                        color: "currentColor",
                                        className: a()(O.co, t),
                                        width: 20,
                                        height: 20,
                                    }),
                              (0, E.zF)({ channel: s, channelName: l }),
                              n ? null : (0, E.EP)(s, r),
                          ],
                      }),
                  }),
              });
    }
}
function j(e) {
    let { channel: t, ...n } = e,
        s = (0, r.bG)([I.A, v.A], () => {
            let e = I.A.getVoiceChannelId();
            return v.A.getChannel(e);
        }),
        l = (0, r.bG)([S.A], () => S.A.getGuild(t.guild_id)),
        a = (0, r.bG)([y.A], () => y.A.isCallActive(t.id)),
        o = (0, g.Ay)(t),
        d = (0, r.bG)([C.A], () => !!t.isDM() && null != t.getRecipientId() && C.A.isBlocked(t.getRecipientId()));
    return (0, i.jsx)(D, {
        channel: t,
        channelName: o,
        guild: l,
        channelHasActiveCall: a,
        userIsInChannelCall: null != s && s.id === t.id,
        isBlocked: d,
        ...n,
    });
}
