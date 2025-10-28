n.d(t, {
    d: () => C,
    k: () => y,
}),
    n(388685);
var i = n(951288),
    l = n(647438),
    s = n(780384),
    r = n(755721),
    a = n(481060),
    o = n(630810),
    u = n(43267),
    d = n(933557),
    c = n(210887),
    g = n(430824),
    h = n(751771),
    v = n(699516),
    p = n(594174),
    I = n(768581),
    m = n(624138),
    x = n(51144),
    S = n(388032),
    f = n(451964);
function E(e, t, n) {
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
let y = 44;
class C extends l.Component {
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
        if (null != l) (t = l.getAvatarURL(null == s ? void 0 : s.guild_id, 32)), (n = x.ZP.getName(l));
        else if (
            null != s &&
            ((t = (0, u.x)(s)), (n = (0, d.F6)(s, p.default, v.Z)), null == t && null != s.guild_id)
        ) {
            let n = g.Z.getGuild(s.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = I.ZP.getGuildIconURL({
                          id: s.guild_id,
                          icon: n.icon,
                          size: 32,
                      }))
                    : (e = (0, m.Zg)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, i.jsx)(a.Text, {
                    variant: "text-md/medium",
                    className: f.acronym,
                    "aria-hidden": !0,
                    children: e,
                });
            else return null;
        return (0, i.jsx)(a.qEK, {
            src: t,
            "aria-label": n,
            size: a.EFr.SIZE_32,
            className: f.inviteRowAvatar,
        });
    }
    render() {
        let e,
            { user: t, channel: n } = this.props,
            { sending: l, invited: a, hovered: o } = this.state;
        return (
            (e = a
                ? (0, i.jsx)(r.zx, {
                      look: r.zx.Looks.LINK,
                      size: r.zx.Sizes.SMALL,
                      disabled: !0,
                      color: (0, s.wj)(c.Z.theme) ? r.zx.Colors.WHITE : r.zx.Colors.BRAND,
                      children: S.intl.string(S.t.dVT149),
                  })
                : (0, i.jsx)(r.zx, {
                      color: r.zx.Colors.GREEN,
                      look: o ? r.zx.Looks.FILLED : r.zx.Looks.OUTLINED,
                      className: f.inviteRowButton,
                      size: r.zx.Sizes.SMALL,
                      submitting: l,
                      onClick: this.handleClickInvite,
                      children: S.intl.string(S.t.jYnGPG),
                  })),
            (0, i.jsxs)("div", {
                className: f.inviteRow,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                    (0, i.jsxs)("div", {
                        className: f.inviteRowInfo,
                        children: [
                            this.renderUserOrChannel(),
                            (0, i.jsxs)("div", {
                                className: f.inviteRowName,
                                children: [x.ZP.getName(t), null != n ? (0, d.F6)(n, p.default, v.Z, !0) : null],
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
            E(this, "state", {
                sending: !1,
                invited: !1,
                hovered: !1,
            }),
            E(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            E(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            E(this, "getInviteAnalyticsMetadata", () => {
                let { row: e, source: t } = this.props;
                if (null != e)
                    return {
                        suggestionData: h.Z.getSelectedInviteMetadata(e),
                        source: t,
                    };
            }),
            E(this, "handleClickInvite", () => {
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
