n.d(t, {
    d: () => f,
    k: () => E
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(780384),
    r = n(481060),
    a = n(630810),
    o = n(43267),
    d = n(933557),
    u = n(210887),
    c = n(430824),
    h = n(751771),
    g = n(699516),
    v = n(594174),
    m = n(768581),
    x = n(624138),
    p = n(51144),
    I = n(388032),
    N = n(773444);
function S(e, t, n) {
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
let E = 44;
class f extends i.Component {
    shouldComponentUpdate(e, t) {
        return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel;
    }
    renderUserOrChannel() {
        let e, t, n;
        let { user: i, channel: s } = this.props;
        if (null != i) (t = i.getAvatarURL(null == s ? void 0 : s.guild_id, 32)), (n = p.ZP.getName(i));
        else if (null != s && ((t = (0, o.x)(s)), (n = (0, d.F6)(s, v.default, g.Z)), null == t && null != s.guild_id)) {
            let n = c.Z.getGuild(s.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = m.ZP.getGuildIconURL({
                          id: s.guild_id,
                          icon: n.icon,
                          size: 32
                      }))
                    : (e = (0, x.Zg)(n.name)));
        }
        return null == t || null == n
            ? null != e
                ? (0, l.jsx)(r.Text, {
                      variant: 'text-md/medium',
                      className: N.acronym,
                      'aria-hidden': !0,
                      children: e
                  })
                : null
            : (0, l.jsx)(r.qEK, {
                  src: t,
                  'aria-label': n,
                  size: r.EFr.SIZE_32,
                  className: N.inviteRowAvatar
              });
    }
    render() {
        let e;
        let { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
        return (
            (e = a
                ? (0, l.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      size: r.zxk.Sizes.SMALL,
                      disabled: !0,
                      color: (0, s.wj)(u.Z.theme) ? r.zxk.Colors.WHITE : r.zxk.Colors.BRAND,
                      children: I.NW.string(I.t['dVT14+'])
                  })
                : (0, l.jsx)(r.zxk, {
                      color: r.zxk.Colors.GREEN,
                      look: o ? r.zxk.Looks.FILLED : r.zxk.Looks.OUTLINED,
                      className: N.inviteRowButton,
                      size: r.zxk.Sizes.SMALL,
                      submitting: i,
                      onClick: this.handleClickInvite,
                      children: I.NW.string(I.t.jYnGPD)
                  })),
            (0, l.jsxs)('div', {
                className: N.inviteRow,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                    (0, l.jsxs)('div', {
                        className: N.inviteRowInfo,
                        children: [
                            this.renderUserOrChannel(),
                            (0, l.jsxs)('div', {
                                className: N.inviteRowName,
                                children: [p.ZP.getName(t), null != n ? (0, d.F6)(n, v.default, g.Z, !0) : null]
                            })
                        ]
                    }),
                    e
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', {
                sending: !1,
                invited: !1,
                hovered: !1
            }),
            S(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            S(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            S(this, 'getSuggestedProps', () => {
                var e;
                let { row: t } = this.props;
                return null !== (e = null != t ? h.Z.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null;
            }),
            S(this, 'handleClickInvite', () => {
                let { user: e, channel: t, inviteKey: n, location: l } = this.props;
                null != n &&
                    (null != t
                        ? (this.setState({ sending: !0 }),
                          a.Z.enqueue(
                              {
                                  type: a.m.GROUP_DM,
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
                          a.Z.enqueue(
                              {
                                  type: a.m.USER,
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
            });
    }
}
