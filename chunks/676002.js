n.d(t, { a: () => N });
var i = n(627968);
n(64700);
var l = n(205369),
    s = n(22174),
    a = n(397927),
    r = n(686956),
    o = n(999903),
    d = n(544169),
    c = n(422258),
    u = n(770376),
    h = n(395504),
    A = n(924985),
    g = n(734057),
    m = n(769765),
    p = n(808728),
    _ = n(71393),
    x = n(576705),
    f = n(967198),
    E = n(343360),
    C = n(488926),
    I = n(652215);
let S = "DRAGGABLE_GUILD_CHANNEL";
function b(e, t) {
    if (null == e || null == t) return null;
    if (e !== I.YYv) return g.A.getChannel(t);
    let n = p.Ay.getChannels(e),
        i =
            n[p.I6].find((e) => e.channel.id === t) ??
            n[p.vM].find((e) => e.channel.id === t) ??
            n[I.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return i?.channel;
}
function N(e) {
    return (0, l.T)(
        S,
        {
            drop(e, t) {
                let n,
                    l = f.A.getGuildId(),
                    s = t.getItem(),
                    o = (0, E.QO)(b(l, s.id), s.position, e.channel, e.position, s.channelList);
                if (null == o) return;
                let u = b(l, s.id);
                if (null == u) return;
                let h = m.A.getCategories(l),
                    A = _.A.getGuild(l);
                if (null == A) return;
                let p = (0, E.Zj)(u, b(l, o.referenceId), o.parentId, h);
                if (0 !== p.length) {
                    if (l === I.YYv) return void (0, c.S_)(p);
                    if (
                        ((p = p.filter((e) => {
                            let { id: t } = e,
                                n = g.A.getChannel(t);
                            if (null == n) return !1;
                            let i = g.A.getChannel(n.parent_id);
                            return n.type === I.rbe.GUILD_CATEGORY || null == i
                                ? x.A.can(I.xBc.MANAGE_CHANNELS, A)
                                : x.A.can(I.xBc.MANAGE_CHANNELS, i);
                        })),
                        u.parent_id !== o.parentId &&
                            p.find((e) => {
                                if (e.id !== u.id) return !1;
                                let t = g.A.getChannel(e.parent_id);
                                if (!(null != t && x.A.can(I.xBc.MANAGE_ROLES, u) && x.A.can(I.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let i = C.r(u, t),
                                    l = C.r(u, g.A.getChannel(u.parent_id));
                                return ((null != u.parent_id || i) && (!l || i)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = g.A.getChannel(n.parent_id);
                        null != e &&
                            (0, a.qfG)((t) =>
                                (0, i.jsx)(d.default, {
                                    ...t,
                                    channel: u,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), r.A.batchChannelUpdate(l, p));
                                    },
                                    onCancel: () => {
                                        null != n && r.A.batchChannelUpdate(l, p);
                                    },
                                }),
                            );
                    } else r.A.batchChannelUpdate(l, p);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = g.A.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, E.QO)(g.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (f.A.getGuildId() === I.YYv) return !0;
                let s = _.A.getGuild(n.guildId);
                if (null == s) return !1;
                let a = g.A.getChannel(l.parentId),
                    r = g.A.getChannel(i.parent_id),
                    o = x.A.can(I.xBc.MANAGE_CHANNELS, s),
                    d = null != r ? x.A.can(I.xBc.MANAGE_CHANNELS, r) : o,
                    c = null != a ? x.A.can(I.xBc.MANAGE_CHANNELS, a) : o;
                return d && c;
            },
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null,
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                  };
        },
    )(
        (0, s.I)(
            S,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (f.A.getGuildId() === I.YYv) return !0;
                    let l = _.A.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, h.WW)(l.id) && x.A.can(I.xBc.MANAGE_CHANNELS, l))
                        return (
                            (0, u.A)() &&
                                (0, a.mMO)(async () => {
                                    let { default: e } = await n.e("2467").then(n.bind(n, 354643));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === I.rbe.GUILD_CATEGORY) return x.A.can(I.xBc.MANAGE_CHANNELS, l) && !(0, h.WW)(l.id);
                    let s = g.A.getChannel(t.parent_id);
                    return (
                        (null != s && x.A.can(I.xBc.MANAGE_CHANNELS, s)) ||
                        (null == s && x.A.can(I.xBc.MANAGE_CHANNELS, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: s,
                        } = e,
                        a = f.A.getGuildId(),
                        r = m.A.getCategories(a);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: l,
                        channelList: (0, o.A)(r._categories, r, (e) => {
                            let { channel: t } = e;
                            return t.type === I.rbe.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length
                                ? a === I.YYv || (x.A.can(I.xBc.MANAGE_CHANNELS, t) && x.A.can(I.xBc.VIEW_CHANNEL, t))
                                : !A.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
