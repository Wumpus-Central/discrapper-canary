n.d(t, {
    d: () => N,
    k: () => C,
}),
    n(388685);
var i = n(951288),
    l = n(647438),
    s = n(780384),
    a = n(755721),
    r = n(481060),
    o = n(630810),
    d = n(43267),
    u = n(933557),
    c = n(210887),
    h = n(430824),
    g = n(751771),
    m = n(699516),
    p = n(594174),
    v = n(768581),
    x = n(624138),
    I = n(51144),
    S = n(388032),
    y = n(451964);
function j(e, t, n) {
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
let C = 44;
class N extends l.Component {
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
            { user: l, channel: s } = this.props;
        if (null != l) (t = l.getAvatarURL(null == s ? void 0 : s.guild_id, 32)), (n = I.ZP.getName(l));
        else if (
            null != s &&
            ((t = (0, d.x)(s)), (n = (0, u.F6)(s, p.default, m.Z)), null == t && null != s.guild_id)
        ) {
            let n = h.Z.getGuild(s.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = v.ZP.getGuildIconURL({
                          id: s.guild_id,
                          icon: n.icon,
                          size: 32,
                      }))
                    : (e = (0, x.Zg)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, i.jsx)(r.Text, {
                    variant: "text-md/medium",
                    className: y.acronym,
                    "aria-hidden": !0,
                    children: e,
                });
            else return null;
        return (0, i.jsx)(r.qEK, {
            src: t,
            "aria-label": n,
            size: r.EFr.SIZE_32,
            className: y.inviteRowAvatar,
        });
    }
    render() {
        let e,
            { user: t, channel: n } = this.props,
            { sending: l, invited: r, hovered: o } = this.state;
        return (
            (e = r
                ? (0, i.jsx)(a.zx, {
                      look: a.zx.Looks.LINK,
                      size: a.zx.Sizes.SMALL,
                      disabled: !0,
                      color: (0, s.wj)(c.Z.theme) ? a.zx.Colors.WHITE : a.zx.Colors.BRAND,
                      children: S.intl.string(S.t.dVT149),
                  })
                : (0, i.jsx)(a.zx, {
                      color: a.zx.Colors.GREEN,
                      look: o ? a.zx.Looks.FILLED : a.zx.Looks.OUTLINED,
                      className: y.inviteRowButton,
                      size: a.zx.Sizes.SMALL,
                      submitting: l,
                      onClick: this.handleClickInvite,
                      children: S.intl.string(S.t.jYnGPG),
                  })),
            (0, i.jsxs)("div", {
                className: y.inviteRow,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                    (0, i.jsxs)("div", {
                        className: y.inviteRowInfo,
                        children: [
                            this.renderUserOrChannel(),
                            (0, i.jsxs)("div", {
                                className: y.inviteRowName,
                                children: [I.ZP.getName(t), null != n ? (0, u.F6)(n, p.default, m.Z, !0) : null],
                            }),
                        ],
                    }),
                    e,
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            j(this, "state", {
                sending: !1,
                invited: !1,
                hovered: !1,
            }),
            j(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            j(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            j(this, "getInviteAnalyticsMetadata", () => {
                let { row: e, source: t } = this.props;
                if (null != e)
                    return {
                        suggestionData: g.Z.getSelectedInviteMetadata(e),
                        source: t,
                    };
            }),
            j(this, "handleClickInvite", () => {
                let { user: e, channel: t, inviteKey: n, location: i } = this.props;
                null != n &&
                    (null != t
                        ? (this.setState({ sending: !0 }),
                          o.Z.enqueue(
                              {
                                  type: o.m.GROUP_DM,
                                  channel: t,
                                  inviteKey: n,
                                  location: i,
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
                          o.Z.enqueue(
                              {
                                  type: o.m.USER,
                                  user: e,
                                  inviteKey: n,
                                  location: i,
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
