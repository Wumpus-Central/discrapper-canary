n(411104), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(201895),
    h = n(703656),
    p = n(592125),
    f = n(430824),
    m = n(496675),
    g = n(98597),
    v = n(473403),
    C = n(981631),
    x = n(490897),
    I = n(831746);
function _(e, t, n) {
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
class b extends g.ZP {
    render() {
        let { channel: e, selected: t, connectChannelDropTarget: n, connectChannelDragSource: l, connectDragPreview: r, canReorderChannel: o } = this.props,
            s = (0, i.jsx)('li', {
                className: a()(this.getClassName(), { [I.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: (0, i.jsxs)(v.Z, {
                    className: I.iconVisibility,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: Z,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: o ? r : null,
                    'aria-label': (0, d.ZP)({ channel: e }),
                    resolvedUnreadSetting: x.i.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()]
                })
            });
        return o ? n(l(s)) : s;
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = f.Z.getGuild(t.getGuildId());
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
            _(this, 'handleClick', (e) => {
                !(function (e) {
                    let t = e.getGuildId();
                    if (null == t) throw Error('TextChannel, transitionTo: Channel does not have a guildId');
                    (0, h.uL)(C.Z5c.CHANNEL(t, e.id), {
                        state: {
                            analyticsSource: {
                                page: C.ZY5.GUILD_CHANNEL,
                                section: C.jXE.CHANNEL_LIST,
                                object: C.qAy.CHANNEL
                            }
                        }
                    });
                })(e);
            });
    }
}
let S = (0, u.B)(b);
t.Z = l.memo(function (e) {
    let { channel: t, guild: n, disableSorting: l } = e,
        r = (0, o.cj)([p.Z, m.Z], () => {
            let e = p.Z.getChannel(t.parent_id);
            return {
                canManageChannel: m.Z.can(C.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== l && null != e ? m.Z.can(C.Plq.MANAGE_CHANNELS, e) : m.Z.can(C.Plq.MANAGE_CHANNELS, n)
            };
        });
    return (0, i.jsx)(S, {
        ...r,
        ...e
    });
});
