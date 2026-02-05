n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(308528),
    d = n(442433),
    c = n(676002),
    u = n(963027),
    h = n(976860),
    A = n(734057),
    g = n(71393),
    m = n(576705),
    p = n(557534),
    _ = n(166444),
    x = n(652215),
    f = n(790782),
    E = n(728444);
function C(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    o.A.preload(n, t.id);
}
class I extends p.Ay {
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = g.A.getGuild(t.getGuildId());
        null != l &&
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleClick = (e) => {
        let t = e.getGuildId();
        if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
        (0, h.pX)(x.BVt.CHANNEL(t, e.id), {
            state: {
                analyticsSource: { page: x.liQ.GUILD_CHANNEL, section: x.JJy.CHANNEL_LIST, object: x.ZSU.CHANNEL },
            },
        });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connectChannelDropTarget: n,
                connectChannelDragSource: l,
                connectDragPreview: s,
                canReorderChannel: r,
            } = this.props,
            o = (0, i.jsx)("li", {
                className: a()(this.getClassName(), { [E.r9]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: (0, i.jsxs)(_.Ay, {
                    className: E.Ki,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: C,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: r ? s : null,
                    "aria-label": (0, u.Ay)({ channel: e }),
                    resolvedUnreadSetting: f.e.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()],
                }),
            });
        return r ? n(l(o)) : o;
    }
}
let S = (0, c.a)(I),
    b = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            s = (0, r.cf)([A.A, m.A], () => {
                let e = A.A.getChannel(t.parent_id);
                return {
                    canManageChannel: m.A.can(x.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? m.A.can(x.xBc.MANAGE_CHANNELS, e) : m.A.can(x.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, i.jsx)(S, { ...s, ...e });
    });
