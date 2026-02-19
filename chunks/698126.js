"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(308528),
    c = n(442433),
    d = n(676002),
    u = n(963027),
    h = n(976860),
    A = n(734057),
    p = n(71393),
    g = n(576705),
    m = n(557534),
    _ = n(166444),
    f = n(652215),
    x = n(790782),
    C = n(728444);
function E(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    o.A.preload(n, t.id);
}
class I extends m.Ay {
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            s = p.A.getGuild(t.getGuildId());
        null != s &&
            (0, c.L3)(e, async () => {
                let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
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
                connectChannelDragSource: s,
                connectDragPreview: l,
                canReorderChannel: a,
            } = this.props,
            o = (0, i.jsx)("li", {
                className: r()(this.getClassName(), { [C.r9]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: (0, i.jsxs)(_.Ay, {
                    className: C.Ki,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: E,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: a ? l : null,
                    "aria-label": (0, u.Ay)({ channel: e }),
                    resolvedUnreadSetting: x.e.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()],
                }),
            });
        return a ? n(s(o)) : o;
    }
}
let b = (0, d.a)(I),
    N = s.memo(function (e) {
        let { channel: t, guild: n, disableSorting: s } = e,
            l = (0, a.cf)([A.A, g.A], () => {
                let e = A.A.getChannel(t.parent_id);
                return {
                    canManageChannel: g.A.can(f.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== s && null != e ? g.A.can(f.xBc.MANAGE_CHANNELS, e) : g.A.can(f.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, i.jsx)(b, { ...l, ...e });
    });
