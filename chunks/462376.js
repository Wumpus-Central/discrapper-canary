n.d(t, {
    d: () => S,
    k: () => j
}),
    n(388685);
var l = n(200651),
    i = n(192379),
    r = n(780384),
    s = n(481060),
    a = n(630810),
    o = n(43267),
    u = n(933557),
    d = n(210887),
    c = n(430824),
    h = n(751771),
    g = n(699516),
    m = n(594174),
    v = n(768581),
    x = n(624138),
    p = n(51144),
    I = n(388032),
    N = n(821022);
function f(e, t, n) {
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
let j = 44;
class S extends i.Component {
    shouldComponentUpdate(e, t) {
        return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel;
    }
    renderUserOrChannel() {
        let e,
            t,
            n,
            { user: i, channel: r } = this.props;
        if (null != i) (t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32)), (n = p.ZP.getName(i));
        else if (null != r && ((t = (0, o.x)(r)), (n = (0, u.F6)(r, m.default, g.Z)), null == t && null != r.guild_id)) {
            let n = c.Z.getGuild(r.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = v.ZP.getGuildIconURL({
                          id: r.guild_id,
                          icon: n.icon,
                          size: 32
                      }))
                    : (e = (0, x.Zg)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, l.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    className: N.acronym,
                    'aria-hidden': !0,
                    children: e
                });
            else return null;
        return (0, l.jsx)(s.qEK, {
            src: t,
            'aria-label': n,
            size: s.EFr.SIZE_32,
            className: N.inviteRowAvatar
        });
    }
    render() {
        let e,
            { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
        return (
            (e = a
                ? (0, l.jsx)(s.zxk, {
                      look: s.zxk.Looks.LINK,
                      size: s.zxk.Sizes.SMALL,
                      disabled: !0,
                      color: (0, r.wj)(d.Z.theme) ? s.zxk.Colors.WHITE : s.zxk.Colors.BRAND,
                      children: I.NW.string(I.t['dVT14+'])
                  })
                : (0, l.jsx)(s.zxk, {
                      color: s.zxk.Colors.GREEN,
                      look: o ? s.zxk.Looks.FILLED : s.zxk.Looks.OUTLINED,
                      className: N.inviteRowButton,
                      size: s.zxk.Sizes.SMALL,
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
                                children: [p.ZP.getName(t), null != n ? (0, u.F6)(n, m.default, g.Z, !0) : null]
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
            f(this, 'state', {
                sending: !1,
                invited: !1,
                hovered: !1
            }),
            f(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            f(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            f(this, 'getSuggestedProps', () => {
                var e;
                let { row: t } = this.props;
                return null != (e = null != t ? h.Z.getSelectedInviteMetadata(t) : null) ? e : null;
            }),
            f(this, 'handleClickInvite', () => {
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
