n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(308528),
    c = n(442433),
    d = n(676002),
    u = n(963027),
    h = n(976860),
    A = n(734057),
    _ = n(71393),
    m = n(576705),
    g = n(557534),
    p = n(166444),
    f = n(652215),
    x = n(790782),
    E = n(928409);
function I(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    o.A.preload(n, t.id);
}
class C extends g.Ay {
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = _.A.getGuild(t.getGuildId());
        null != l &&
            (0, c.L3)(e, async () => {
                let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleClick = (e) => {
        let t = e.getGuildId();
        if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
        (0, h.pX)(f.BVt.CHANNEL(t, e.id), {
            state: {
                analyticsSource: { page: f.liQ.GUILD_CHANNEL, section: f.JJy.CHANNEL_LIST, object: f.ZSU.CHANNEL },
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
                children: (0, i.jsxs)(p.Ay, {
                    className: E.Ki,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: I,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: r ? s : null,
                    "aria-label": (0, u.Ay)({ channel: e }),
                    resolvedUnreadSetting: x.e.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()],
                }),
            });
        return r ? n(l(o)) : o;
    }
}
let N = (0, d.a)(C),
    T = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            s = (0, r.cf)([A.A, m.A], () => {
                let e = A.A.getChannel(t.parent_id);
                return {
                    canManageChannel: m.A.can(f.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? m.A.can(f.xBc.MANAGE_CHANNELS, e) : m.A.can(f.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, i.jsx)(N, { ...s, ...e });
    });
