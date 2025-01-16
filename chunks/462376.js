n.d(t, {
    d: function () {
        return C;
    },
    k: function () {
        return N;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(780384),
    s = n(481060),
    a = n(630810),
    o = n(43267),
    d = n(933557),
    u = n(210887),
    c = n(430824),
    h = n(751771),
    g = n(699516),
    m = n(594174),
    v = n(768581),
    p = n(624138),
    x = n(51144),
    I = n(388032),
    S = n(755527);
function T(e, t, n) {
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
let N = 44;
class C extends i.Component {
    shouldComponentUpdate(e, t) {
        return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel;
    }
    renderUserOrChannel() {
        let e, t, n;
        let { user: i, channel: r } = this.props;
        if (null != i) (t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32)), (n = x.ZP.getName(i));
        else if (null != r && ((t = (0, o.x)(r)), (n = (0, d.F6)(r, m.default, g.Z)), null == t && null != r.guild_id)) {
            let n = c.Z.getGuild(r.guild_id);
            null != n &&
                (null != n.icon
                    ? (t = v.ZP.getGuildIconURL({
                          id: r.guild_id,
                          icon: n.icon,
                          size: 32
                      }))
                    : (e = (0, p.Zg)(n.name)));
        }
        if (null == t || null == n)
            return null != e
                ? (0, l.jsx)(s.Text, {
                      variant: 'text-md/medium',
                      className: S.acronym,
                      'aria-hidden': !0,
                      children: e
                  })
                : null;
        return (0, l.jsx)(s.Avatar, {
            src: t,
            'aria-label': n,
            size: s.AvatarSizes.SIZE_32,
            className: S.inviteRowAvatar
        });
    }
    render() {
        let e;
        let { user: t, channel: n } = this.props,
            { sending: i, invited: a, hovered: o } = this.state;
        return (
            (e = a
                ? (0, l.jsx)(s.Button, {
                      look: s.Button.Looks.LINK,
                      size: s.Button.Sizes.SMALL,
                      disabled: !0,
                      color: (0, r.wj)(u.Z.theme) ? s.Button.Colors.WHITE : s.Button.Colors.BRAND,
                      children: I.intl.string(I.t['dVT14+'])
                  })
                : (0, l.jsx)(s.Button, {
                      color: s.Button.Colors.GREEN,
                      look: o ? s.Button.Looks.FILLED : s.Button.Looks.OUTLINED,
                      className: S.inviteRowButton,
                      size: s.Button.Sizes.SMALL,
                      submitting: i,
                      onClick: this.handleClickInvite,
                      children: I.intl.string(I.t.jYnGPD)
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
            T(this, 'state', {
                sending: !1,
                invited: !1,
                hovered: !1
            }),
            T(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            T(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            T(this, 'getSuggestedProps', () => {
                var e;
                let { row: t } = this.props;
                return null !== (e = null != t ? h.Z.getSelectedInviteMetadata(t) : null) && void 0 !== e ? e : null;
            }),
            T(this, 'handleClickInvite', () => {
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
