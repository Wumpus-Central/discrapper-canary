n.d(t, {
    d: () => S,
    k: () => j
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
    m = n(594174),
    x = n(768581),
    v = n(624138),
    p = n(51144),
    N = n(388032),
    I = n(821022);
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
            { user: i, channel: s } = this.props;
        if (null != i) (t = i.getAvatarURL(null == s ? void 0 : s.guild_id, 32)), (n = p.ZP.getName(i));
        else if (null != s && ((t = (0, o.x)(s)), (n = (0, d.F6)(s, m.default, g.Z)), null == t && null != s.guild_id)) {
            let n = c.Z.getGuild(s.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = x.ZP.getGuildIconURL({
                          id: s.guild_id,
                          icon: n.icon,
                          size: 32
                      }))
                    : (e = (0, v.Zg)(n.name)));
        }
        if (null == t || null == n)
            if (null != e)
                return (0, l.jsx)(r.Text, {
                    variant: 'text-md/medium',
                    className: I.acronym,
                    'aria-hidden': !0,
                    children: e
                });
            else return null;
        return (0, l.jsx)(r.qEK, {
            src: t,
            'aria-label': n,
            size: r.EFr.SIZE_32,
            className: I.inviteRowAvatar
        });
    }
    render() {
        let e,
            { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
        return (
            (e = a
                ? (0, l.jsx)(r.zxk, {
                      look: r.zxk.Looks.LINK,
                      size: r.zxk.Sizes.SMALL,
                      disabled: !0,
                      color: (0, s.wj)(u.Z.theme) ? r.zxk.Colors.WHITE : r.zxk.Colors.BRAND,
                      children: N.NW.string(N.t['dVT14+'])
                  })
                : (0, l.jsx)(r.zxk, {
                      color: r.zxk.Colors.GREEN,
                      look: o ? r.zxk.Looks.FILLED : r.zxk.Looks.OUTLINED,
                      className: I.inviteRowButton,
                      size: r.zxk.Sizes.SMALL,
                      submitting: i,
                      onClick: this.handleClickInvite,
                      children: N.NW.string(N.t.jYnGPD)
                  })),
            (0, l.jsxs)('div', {
                className: I.inviteRow,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                    (0, l.jsxs)('div', {
                        className: I.inviteRowInfo,
                        children: [
                            this.renderUserOrChannel(),
                            (0, l.jsxs)('div', {
                                className: I.inviteRowName,
                                children: [p.ZP.getName(t), null != n ? (0, d.F6)(n, m.default, g.Z, !0) : null]
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
