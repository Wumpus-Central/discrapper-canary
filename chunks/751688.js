var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(129861),
    f = r(600164),
    p = r(184301),
    h = r(347475),
    _ = r(329957);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class g extends (i = s.Component) {
    render() {
        let { popoutOpen: e } = this.state,
            { user: n, disablePopout: r, ignoreModalClicks: i, guildId: a, channelId: s } = this.props;
        return (0, o.jsx)(c.Popout, {
            preload: () =>
                (0, p.Z)(n.id, n.getAvatarURL(a, 80), {
                    guildId: a,
                    channelId: s
                }),
            renderPopout: (e) =>
                (0, o.jsx)(h.Z, {
                    ...e,
                    userId: n.id,
                    guildId: a,
                    channelId: s
                }),
            position: 'left',
            onRequestClose: this.handleUserPopoutClose,
            shouldShow: !r && e,
            ignoreModalClicks: i,
            children: (e) => this.renderUserPopout(e)
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { popoutOpen: !1 }),
            m(this, 'handleClickUser', () => {
                let { onPopoutOpen: e } = this.props;
                this.setState({ popoutOpen: !this.state.popoutOpen }), null == e || e();
            }),
            m(this, 'handleUserPopoutClose', () => {
                let { onPopoutClose: e } = this.props;
                this.setState({ popoutOpen: !1 }), null == e || e();
            }),
            m(this, 'renderUserPopout', (e) => {
                let { className: n, disablePopout: r, onContextMenu: i, user: a, status: s, textClassName: l, nick: p, guildId: h } = this.props;
                return (0, o.jsxs)(f.Z, {
                    align: f.Z.Align.CENTER,
                    className: u()(_.memberListItem, n, { [_.popoutDisabled]: r }),
                    onContextMenu: i,
                    onMouseDown: e.onMouseDown,
                    onKeyDown: e.onKeyDown,
                    onClick: this.handleClickUser,
                    children: [
                        (0, o.jsx)(c.Avatar, {
                            src: a.getAvatarURL(h, 24),
                            className: _.avatar,
                            'aria-label': a.username,
                            size: c.AvatarSizes.SIZE_24,
                            status: s
                        }),
                        (0, o.jsx)(c.Text, {
                            className: u()(_.memberListItemTag, l),
                            variant: 'text-sm/normal',
                            children: (0, o.jsx)(d.Z, {
                                user: a,
                                nick: p,
                                usernameClass: _.username,
                                hideDiscriminator: !0
                            })
                        })
                    ]
                });
            });
    }
}
m(g, 'defaultProps', { disablePopout: !1 }), (n.Z = g);
