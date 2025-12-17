n.d(t, {
    d: () => x,
    k: () => f,
}),
    n(388685);
var l = n(54381),
    i = n(473749),
    s = n(481060),
    r = n(630810),
    a = n(43267),
    o = n(933557),
    u = n(430824),
    d = n(751771),
    c = n(699516),
    g = n(594174),
    h = n(768581),
    p = n(624138),
    v = n(51144),
    I = n(388032),
    m = n(444942);
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
let f = 44;
class x extends i.Component {
    shouldComponentUpdate(e, t) {
        return (
            this.state.sending !== t.sending ||
            this.state.invited !== t.invited ||
            this.state.hovered !== t.hovered ||
            this.props.user !== e.user ||
            this.props.channel !== e.channel
        );
    }
    renderUserOrChannel() {
        let e,
            t,
            n,
            { user: i, channel: r } = this.props;
        if (null != i) (t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32)), (n = v.ZP.getName(i));
        else if (
            null != r &&
            ((t = (0, a.x)(r)), (n = (0, o.F6)(r, g.default, c.Z)), null == t && null != r.guild_id)
        ) {
            let n = u.Z.getGuild(r.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = h.ZP.getGuildIconURL({
                          id: r.guild_id,
                          icon: n.icon,
                          size: 32,
                      }))
                    : (e = (0, p.Zg)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, l.jsx)(s.Text, {
                    variant: "text-md/medium",
                    className: m.acronym,
                    "aria-hidden": !0,
                    children: e,
                });
            else return null;
        return (0, l.jsx)(s.qEK, {
            src: t,
            "aria-label": n,
            size: s.EFr.SIZE_32,
            className: m.inviteRowAvatar,
        });
    }
    render() {
        let { user: e, channel: t } = this.props,
            { sending: n, invited: i } = this.state,
            r = (0, l.jsx)(s.Button, {
                variant: "secondary",
                text: i ? I.intl.string(I.t.dVT149) : I.intl.string(I.t.jYnGPG),
                size: "sm",
                loading: n,
                onClick: this.handleClickInvite,
                disabled: i,
            });
        return (0, l.jsxs)("div", {
            className: m.inviteRow,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            children: [
                (0, l.jsxs)("div", {
                    className: m.inviteRowInfo,
                    children: [
                        this.renderUserOrChannel(),
                        (0, l.jsxs)("div", {
                            className: m.inviteRowName,
                            children: [v.ZP.getName(e), null != t ? (0, o.F6)(t, g.default, c.Z, !0) : null],
                        }),
                    ],
                }),
                r,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "state", {
                sending: !1,
                invited: !1,
                hovered: !1,
            }),
            S(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            S(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            S(this, "getInviteAnalyticsMetadata", () => {
                let { row: e, source: t } = this.props;
                if (null != e)
                    return {
                        suggestionData: d.Z.getSelectedInviteMetadata(e),
                        source: t,
                    };
            }),
            S(this, "handleClickInvite", () => {
                let { user: e, channel: t, inviteKey: n, location: l } = this.props;
                null != n &&
                    (null != t
                        ? (this.setState({ sending: !0 }),
                          r.Z.enqueue(
                              {
                                  type: r.m.GROUP_DM,
                                  channel: t,
                                  inviteKey: n,
                                  location: l,
                                  inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata(),
                              },
                              (e) => {
                                  this.setState({
                                      sending: !1,
                                      invited: e,
                                  });
                              },
                          ))
                        : null != e &&
                          (this.setState({ sending: !0 }),
                          r.Z.enqueue(
                              {
                                  type: r.m.USER,
                                  user: e,
                                  inviteKey: n,
                                  location: l,
                                  inviteAnalyticsMetadata: this.getInviteAnalyticsMetadata(),
                              },
                              (e) => {
                                  this.setState({
                                      sending: !1,
                                      invited: e,
                                  });
                              },
                          )));
            });
    }
}
