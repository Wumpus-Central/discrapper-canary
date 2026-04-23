n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(308528),
    d = n(442433),
    c = n(676002),
    u = n(963027),
    h = n(47167),
    A = n(976860),
    _ = n(734057),
    m = n(71393),
    g = n(576705),
    p = n(994500),
    f = n(287809),
    E = n(557534),
    x = n(166444),
    I = n(652215),
    C = n(790782),
    b = n(907305);
function N(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    o.A.preload(n, t.id);
}
class S extends E.Ay {
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = m.A.getGuild(t.getGuildId());
        null != l &&
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleClick = (e) => {
        let t = e.getGuildId();
        if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
        (0, A.pX)(I.BVt.CHANNEL(t, e.id), {
            state: {
                analyticsSource: { page: I.liQ.GUILD_CHANNEL, section: I.JJy.CHANNEL_LIST, object: I.ZSU.CHANNEL },
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
                className: a()(this.getClassName(), { [b.r9]: this.isDisabled() }),
                "data-dnd-name": (0, h.m1)(e, f.default, p.A),
                children: (0, i.jsxs)(x.Ay, {
                    className: b.Ki,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: N,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: r ? s : null,
                    "aria-label": (0, u.Ay)({ channel: e }),
                    resolvedUnreadSetting: C.e.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()],
                }),
            });
        return r ? n(l(o)) : o;
    }
}
let v = (0, c.a)(S),
    T = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            s = (0, r.cf)([_.A, g.A], () => {
                let e = _.A.getChannel(t.parent_id);
                return {
                    canManageChannel: g.A.can(I.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? g.A.can(I.xBc.MANAGE_CHANNELS, e) : g.A.can(I.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, i.jsx)(v, { ...s, ...e });
    });
