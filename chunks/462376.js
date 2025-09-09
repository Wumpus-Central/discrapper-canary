n.d(t, {
    d: () => E,
    k: () => _,
}),
    n(388685);
var l = n(951288),
    i = n(647438),
    r = n(780384),
    a = n(755721),
    s = n(481060),
    o = n(630810),
    u = n(43267),
    d = n(933557),
    c = n(210887),
    g = n(430824),
    h = n(751771),
    m = n(699516),
    p = n(594174),
    v = n(768581),
    I = n(624138),
    x = n(51144),
    f = n(388032),
    j = n(451964);
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
let _ = 44;
class E extends i.Component {
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
        if (null != i) (t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32)), (n = x.ZP.getName(i));
        else if (
            null != r &&
            ((t = (0, u.x)(r)), (n = (0, d.F6)(r, p.default, m.Z)), null == t && null != r.guild_id)
        ) {
            let n = g.Z.getGuild(r.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = v.ZP.getGuildIconURL({
                          id: r.guild_id,
                          icon: n.icon,
                          size: 32,
                      }))
                    : (e = (0, I.Zg)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, l.jsx)(s.Text, {
                    variant: "text-md/medium",
                    className: j.acronym,
                    "aria-hidden": !0,
                    children: e,
                });
            else return null;
        return (0, l.jsx)(s.qEK, {
            src: t,
            "aria-label": n,
            size: s.EFr.SIZE_32,
            className: j.inviteRowAvatar,
        });
    }
    render() {
        let e,
            { user: t, channel: n } = this.props,
            { sending: i, invited: s, hovered: o } = this.state;
        return (
            (e = s
                ? (0, l.jsx)(a.zx, {
                      look: a.zx.Looks.LINK,
                      size: a.zx.Sizes.SMALL,
                      disabled: !0,
                      color: (0, r.wj)(c.Z.theme) ? a.zx.Colors.WHITE : a.zx.Colors.BRAND,
                      children: f.intl.string(f.t["dVT14+"]),
                  })
                : (0, l.jsx)(a.zx, {
                      color: a.zx.Colors.GREEN,
                      look: o ? a.zx.Looks.FILLED : a.zx.Looks.OUTLINED,
                      className: j.inviteRowButton,
                      size: a.zx.Sizes.SMALL,
                      submitting: i,
                      onClick: this.handleClickInvite,
                      children: f.intl.string(f.t.jYnGPD),
                  })),
            (0, l.jsxs)("div", {
                className: j.inviteRow,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                    (0, l.jsxs)("div", {
                        className: j.inviteRowInfo,
                        children: [
                            this.renderUserOrChannel(),
                            (0, l.jsxs)("div", {
                                className: j.inviteRowName,
                                children: [x.ZP.getName(t), null != n ? (0, d.F6)(n, p.default, m.Z, !0) : null],
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
            N(this, "state", {
                sending: !1,
                invited: !1,
                hovered: !1,
            }),
            N(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            N(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            N(this, "getInviteAnalyticsMetadata", () => {
                let { row: e, source: t } = this.props;
                if (null != e)
                    return {
                        suggestionData: h.Z.getSelectedInviteMetadata(e),
                        source: t,
                    };
            }),
            N(this, "handleClickInvite", () => {
                let { user: e, channel: t, inviteKey: n, location: l } = this.props;
                null != n &&
                    (null != t
                        ? (this.setState({ sending: !0 }),
                          o.Z.enqueue(
                              {
                                  type: o.m.GROUP_DM,
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
                          o.Z.enqueue(
                              {
                                  type: o.m.USER,
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
