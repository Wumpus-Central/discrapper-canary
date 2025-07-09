(n.d(t, {
    d: () => E,
    k: () => _
}),
    n(388685));
var l = n(255367),
    i = n(73800),
    r = n(780384),
    s = n(755721),
    a = n(481060),
    o = n(630810),
    u = n(43267),
    d = n(933557),
    c = n(210887),
    h = n(430824),
    g = n(751771),
    m = n(699516),
    p = n(594174),
    v = n(768581),
    I = n(624138),
    x = n(51144),
    f = n(388032),
    j = n(821022);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 44;
class E extends i.Component {
    shouldComponentUpdate(e, t) {
        return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel;
    }
    renderUserOrChannel() {
        let e,
            t,
            n,
            { user: i, channel: r } = this.props;
        if (null != i) ((t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32)), (n = x.ZP.getName(i)));
        else if (null != r && ((t = (0, u.x)(r)), (n = (0, d.F6)(r, p.default, m.Z)), null == t && null != r.guild_id)) {
            let n = h.Z.getGuild(r.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = v.ZP.getGuildIconURL({
                          id: r.guild_id,
                          icon: n.icon,
                          size: 32
                      }))
                    : (e = (0, I.Zg)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, l.jsx)(a.Text, {
                    variant: 'text-md/medium',
                    className: j.acronym,
                    'aria-hidden': !0,
                    children: e
                });
            else return null;
        return (0, l.jsx)(a.qEK, {
            src: t,
            'aria-label': n,
            size: a.EFr.SIZE_32,
            className: j.inviteRowAvatar
        });
    }
    render() {
        let e,
            { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
        return (
            (e = a
                ? (0, l.jsx)(s.zx, {
                      look: s.zx.Looks.LINK,
                      size: s.zx.Sizes.SMALL,
                      disabled: !0,
                      color: (0, r.wj)(c.Z.theme) ? s.zx.Colors.WHITE : s.zx.Colors.BRAND,
                      children: f.intl.string(f.t['dVT14+'])
                  })
                : (0, l.jsx)(s.zx, {
                      color: s.zx.Colors.GREEN,
                      look: o ? s.zx.Looks.FILLED : s.zx.Looks.OUTLINED,
                      className: j.inviteRowButton,
                      size: s.zx.Sizes.SMALL,
                      submitting: i,
                      onClick: this.handleClickInvite,
                      children: f.intl.string(f.t.jYnGPD)
                  })),
            (0, l.jsxs)('div', {
                className: j.inviteRow,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                    (0, l.jsxs)('div', {
                        className: j.inviteRowInfo,
                        children: [
                            this.renderUserOrChannel(),
                            (0, l.jsxs)('div', {
                                className: j.inviteRowName,
                                children: [x.ZP.getName(t), null != n ? (0, d.F6)(n, p.default, m.Z, !0) : null]
                            })
                        ]
                    }),
                    e
                ]
            })
        );
    }
    constructor(...e) {
        (super(...e),
            N(this, 'state', {
                sending: !1,
                invited: !1,
                hovered: !1
            }),
            N(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            N(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            N(this, 'getSuggestedProps', () => {
                var e;
                let { row: t } = this.props;
                return null != (e = null != t ? g.Z.getSelectedInviteMetadata(t) : null) ? e : null;
            }),
            N(this, 'handleClickInvite', () => {
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
                                  suggested: this.getSuggestedProps()
                              },
                              (e) => {
                                  this.setState({
                                      sending: !1,
                                      invited: e
                                  });
                              }
                          ))
                        : null != e &&
                          (this.setState({ sending: !0 }),
                          o.Z.enqueue(
                              {
                                  type: o.m.USER,
                                  user: e,
                                  inviteKey: n,
                                  location: l,
                                  suggested: this.getSuggestedProps()
                              },
                              (e) => {
                                  this.setState({
                                      sending: !1,
                                      invited: e
                                  });
                              }
                          )));
            }));
    }
}
