n.d(t, { a: () => v });
var i = n(627968);
n(64700);
var l = n(205369),
    s = n(22174),
    a = n(192308),
    r = n(686956),
    o = n(999903),
    d = n(544169),
    c = n(422258),
    u = n(5180),
    h = n(770376),
    A = n(395504),
    _ = n(924985),
    m = n(734057),
    g = n(769765),
    p = n(808728),
    f = n(71393),
    E = n(576705),
    x = n(967198),
    I = n(343360),
    C = n(488926),
    b = n(652215);
let N = "DRAGGABLE_GUILD_CHANNEL";
function S(e, t) {
    if (null == e || null == t) return null;
    if (!(0, u.ai)(e)) return m.A.getChannel(t);
    let n = p.Ay.getChannels(e),
        i =
            n[p.I6].find((e) => e.channel.id === t) ??
            n[p.vM].find((e) => e.channel.id === t) ??
            n[b.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return i?.channel;
}
function v(e) {
    return (0, l.T)(
        N,
        {
            drop(e, t) {
                let n,
                    l = x.A.getGuildId(),
                    s = t.getItem(),
                    o = (0, I.QO)(S(l, s.id), s.position, e.channel, e.position, s.channelList);
                if (null == o) return;
                let h = S(l, s.id);
                if (null == h) return;
                let A = g.A.getCategories(l),
                    _ = f.A.getGuild(l);
                if (null == _) return;
                let p = (0, I.Zj)(h, S(l, o.referenceId), o.parentId, A);
                if (0 !== p.length) {
                    if ((0, u.ai)(l)) return void (0, c.zN)(p);
                    if (
                        ((p = p.filter((e) => {
                            let { id: t } = e,
                                n = m.A.getChannel(t);
                            if (null == n) return !1;
                            let i = m.A.getChannel(n.parent_id);
                            return n.type === b.rbe.GUILD_CATEGORY || null == i
                                ? E.A.can(b.xBc.MANAGE_CHANNELS, _)
                                : E.A.can(b.xBc.MANAGE_CHANNELS, i);
                        })),
                        h.parent_id !== o.parentId &&
                            p.find((e) => {
                                if (e.id !== h.id) return !1;
                                let t = m.A.getChannel(e.parent_id);
                                if (!(null != t && E.A.can(b.xBc.MANAGE_ROLES, h) && E.A.can(b.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let i = C.r(h, t),
                                    l = C.r(h, m.A.getChannel(h.parent_id));
                                return ((null != h.parent_id || i) && (!l || i)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = m.A.getChannel(n.parent_id);
                        null != e &&
                            (0, a.openModal)((t) =>
                                (0, i.jsx)(d.default, {
                                    ...t,
                                    channel: h,
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
                    i = m.A.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, I.QO)(m.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, u.ai)(x.A.getGuildId())) return !0;
                let s = f.A.getGuild(n.guildId);
                if (null == s) return !1;
                let a = m.A.getChannel(l.parentId),
                    r = m.A.getChannel(i.parent_id),
                    o = E.A.can(b.xBc.MANAGE_CHANNELS, s),
                    d = null != r ? E.A.can(b.xBc.MANAGE_CHANNELS, r) : o,
                    c = null != a ? E.A.can(b.xBc.MANAGE_CHANNELS, a) : o;
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
            N,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, u.ai)(x.A.getGuildId())) return !0;
                    let l = f.A.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, A.WW)(l.id) && E.A.can(b.xBc.MANAGE_CHANNELS, l))
                        return (
                            (0, h.A)() &&
                                (0, a.openModalLazy)(async () => {
                                    let { default: e } = await n.e("2467").then(n.bind(n, 354643));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === b.rbe.GUILD_CATEGORY) return E.A.can(b.xBc.MANAGE_CHANNELS, l) && !(0, A.WW)(l.id);
                    let s = m.A.getChannel(t.parent_id);
                    return (
                        (null != s && E.A.can(b.xBc.MANAGE_CHANNELS, s)) ||
                        (null == s && E.A.can(b.xBc.MANAGE_CHANNELS, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: s,
                        } = e,
                        a = x.A.getGuildId(),
                        r = g.A.getCategories(a);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: l,
                        channelList: (0, o.A)(r._categories, r, (e) => {
                            let { channel: t } = e;
                            return t.type === b.rbe.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length
                                ? !!(0, u.ai)(a) ||
                                      (E.A.can(b.xBc.MANAGE_CHANNELS, t) && E.A.can(b.xBc.VIEW_CHANNEL, t))
                                : !_.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
