n.d(t, { Z: () => N }), n(411104), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(493683),
    c = n(239091),
    d = n(146773),
    u = n(201895),
    h = n(703656),
    p = n(592125),
    m = n(430824),
    g = n(496675),
    f = n(98597),
    _ = n(473403),
    v = n(981631),
    C = n(490897),
    x = n(467678);
function I(e, t, n) {
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
function Z(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error('TextChannel, preloadChannel: Channel does not have a guildId');
    s.Z.preload(n, t.id);
}
class b extends f.ZP {
    render() {
        let { channel: e, selected: t, connectChannelDropTarget: n, connectChannelDragSource: l, connectDragPreview: r, canReorderChannel: a } = this.props,
            s = (0, i.jsx)('li', {
                className: o()(this.getClassName(), { [x.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: (0, i.jsxs)(_.Z, {
                    className: x.iconVisibility,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: Z,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: a ? r : null,
                    'aria-label': (0, u.ZP)({ channel: e }),
                    resolvedUnreadSetting: C.i.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()]
                })
            });
        return a ? n(l(s)) : s;
    }
    constructor(...e) {
        super(...e),
            I(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = m.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            I(this, 'handleClick', (e) => {
                (function (e) {
                    let t = e.getGuildId();
                    if (null == t) throw Error('TextChannel, transitionTo: Channel does not have a guildId');
                    (0, h.uL)(v.Z5c.CHANNEL(t, e.id), {
                        state: {
                            analyticsSource: {
                                page: v.ZY5.GUILD_CHANNEL,
                                section: v.jXE.CHANNEL_LIST,
                                object: v.qAy.CHANNEL
                            }
                        }
                    });
                })(e);
            });
    }
}
let S = (0, d.B)(b),
    N = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            r = (0, a.cj)([p.Z, g.Z], () => {
                let e = p.Z.getChannel(t.parent_id);
                return {
                    canManageChannel: g.Z.can(v.Plq.MANAGE_CHANNELS, t),
                    canReorderChannel: !0 !== l && null != e ? g.Z.can(v.Plq.MANAGE_CHANNELS, e) : g.Z.can(v.Plq.MANAGE_CHANNELS, n)
                };
            });
        return (0, i.jsx)(S, {
            ...r,
            ...e
        });
    });
