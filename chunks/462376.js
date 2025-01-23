n.d(t, {
    d: function () {
        return E;
    },
    k: function () {
        return C;
    }
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
    v = n(768581),
    I = n(624138),
    x = n(51144),
    p = n(388032),
    S = n(755527);
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
let C = 44;
class E extends i.Component {
    shouldComponentUpdate(e, t) {
        return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel;
    }
    renderUserOrChannel() {
        let e, t, n;
        let { user: i, channel: s } = this.props;
        if (null != i) (t = i.getAvatarURL(null == s ? void 0 : s.guild_id, 32)), (n = x.ZP.getName(i));
        else if (null != s && ((t = (0, o.x)(s)), (n = (0, d.F6)(s, m.default, g.Z)), null == t && null != s.guild_id)) {
            let n = c.Z.getGuild(s.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = v.ZP.getGuildIconURL({
                          id: s.guild_id,
                          icon: n.icon,
                          size: 32
                      }))
                    : (e = (0, I.Zg)(n.name)));
        }
        if (null == t || null == n)
            return null != e
                ? (0, l.jsx)(r.Text, {
                      variant: 'text-md/medium',
                      className: S.acronym,
                      'aria-hidden': !0,
                      children: e
                  })
                : null;
        return (0, l.jsx)(r.Avatar, {
            src: t,
            'aria-label': n,
            size: r.AvatarSizes.SIZE_32,
            className: S.inviteRowAvatar
        });
    }
    render() {
        let e;
        let { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
        return (
            (e = a
                ? (0, l.jsx)(r.Button, {
                      look: r.Button.Looks.LINK,
                      size: r.Button.Sizes.SMALL,
                      disabled: !0,
                      color: (0, s.wj)(u.Z.theme) ? r.Button.Colors.WHITE : r.Button.Colors.BRAND,
                      children: p.intl.string(p.t['dVT14+'])
                  })
                : (0, l.jsx)(r.Button, {
                      color: r.Button.Colors.GREEN,
                      look: o ? r.Button.Looks.FILLED : r.Button.Looks.OUTLINED,
                      className: S.inviteRowButton,
                      size: r.Button.Sizes.SMALL,
                      submitting: i,
                      onClick: this.handleClickInvite,
                      children: p.intl.string(p.t.jYnGPD)
                  })),
            (0, l.jsxs)('div', {
                className: S.inviteRow,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                    (0, l.jsxs)('div', {
                        className: S.inviteRowInfo,
                        children: [
                            this.renderUserOrChannel(),
                            (0, l.jsxs)('div', {
                                className: S.inviteRowName,
                                children: [x.ZP.getName(t), null != n ? (0, d.F6)(n, m.default, g.Z, !0) : null]
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
                return null !== (e = null != t ? h.Z.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null;
            }),
            N(this, 'handleClickInvite', () => {
                let { user: e, channel: t, inviteKey: n, location: l } = this.props;
                if (null != n)
                    null != t
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
                          ));
            });
    }
}
