"use strict";
n.d(t, { a: () => S });
var i = n(627968);
n(64700);
var s = n(205369),
    l = n(22174),
    r = n(397927),
    a = n(686956),
    o = n(999903),
    c = n(544169),
    d = n(422258),
    u = n(770376),
    h = n(395504),
    A = n(924985),
    p = n(734057),
    g = n(769765),
    m = n(808728),
    _ = n(71393),
    f = n(576705),
    x = n(967198),
    C = n(343360),
    E = n(488926),
    I = n(652215);
let b = "DRAGGABLE_GUILD_CHANNEL";
function N(e, t) {
    if (null == e || null == t) return null;
    if (e !== I.YYv) return p.A.getChannel(t);
    let n = m.Ay.getChannels(e),
        i =
            n[m.I6].find((e) => e.channel.id === t) ??
            n[m.vM].find((e) => e.channel.id === t) ??
            n[I.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return i?.channel;
}
function S(e) {
    return (0, s.T)(
        b,
        {
            drop(e, t) {
                let n,
                    s = x.A.getGuildId(),
                    l = t.getItem(),
                    o = (0, C.QO)(N(s, l.id), l.position, e.channel, e.position, l.channelList);
                if (null == o) return;
                let u = N(s, l.id);
                if (null == u) return;
                let h = g.A.getCategories(s),
                    A = _.A.getGuild(s);
                if (null == A) return;
                let m = (0, C.Zj)(u, N(s, o.referenceId), o.parentId, h);
                if (0 !== m.length) {
                    if (s === I.YYv) return void (0, d.S_)(m);
                    if (
                        ((m = m.filter((e) => {
                            let { id: t } = e,
                                n = p.A.getChannel(t);
                            if (null == n) return !1;
                            let i = p.A.getChannel(n.parent_id);
                            return n.type === I.rbe.GUILD_CATEGORY || null == i
                                ? f.A.can(I.xBc.MANAGE_CHANNELS, A)
                                : f.A.can(I.xBc.MANAGE_CHANNELS, i);
                        })),
                        u.parent_id !== o.parentId &&
                            m.find((e) => {
                                if (e.id !== u.id) return !1;
                                let t = p.A.getChannel(e.parent_id);
                                if (!(null != t && f.A.can(I.xBc.MANAGE_ROLES, u) && f.A.can(I.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let i = E.r(u, t),
                                    s = E.r(u, p.A.getChannel(u.parent_id));
                                return ((null != u.parent_id || i) && (!s || i)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = p.A.getChannel(n.parent_id);
                        null != e &&
                            (0, r.qfG)((t) =>
                                (0, i.jsx)(c.default, {
                                    ...t,
                                    channel: u,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), a.A.batchChannelUpdate(s, m));
                                    },
                                    onCancel: () => {
                                        null != n && a.A.batchChannelUpdate(s, m);
                                    },
                                }),
                            );
                    } else a.A.batchChannelUpdate(s, m);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = p.A.getChannel(n.id);
                if (null == i) return !1;
                let s = (0, C.QO)(p.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == s) return !1;
                if (x.A.getGuildId() === I.YYv) return !0;
                let l = _.A.getGuild(n.guildId);
                if (null == l) return !1;
                let r = p.A.getChannel(s.parentId),
                    a = p.A.getChannel(i.parent_id),
                    o = f.A.can(I.xBc.MANAGE_CHANNELS, l),
                    c = null != a ? f.A.can(I.xBc.MANAGE_CHANNELS, a) : o,
                    d = null != r ? f.A.can(I.xBc.MANAGE_CHANNELS, r) : o;
                return c && d;
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
        (0, l.I)(
            b,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (x.A.getGuildId() === I.YYv) return !0;
                    let s = _.A.getGuild(t.getGuildId());
                    if (null == s) return !1;
                    if ((0, h.WW)(s.id) && f.A.can(I.xBc.MANAGE_CHANNELS, s))
                        return (
                            (0, u.A)() &&
                                (0, r.mMO)(async () => {
                                    let { default: e } = await n.e("2467").then(n.bind(n, 354643));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === I.rbe.GUILD_CATEGORY) return f.A.can(I.xBc.MANAGE_CHANNELS, s) && !(0, h.WW)(s.id);
                    let l = p.A.getChannel(t.parent_id);
                    return (
                        (null != l && f.A.can(I.xBc.MANAGE_CHANNELS, l)) ||
                        (null == l && f.A.can(I.xBc.MANAGE_CHANNELS, s))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: s },
                            position: l,
                        } = e,
                        r = x.A.getGuildId(),
                        a = g.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: l,
                        parentId: n,
                        type: s,
                        channelList: (0, o.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === I.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? r === I.YYv || (f.A.can(I.xBc.MANAGE_CHANNELS, t) && f.A.can(I.xBc.VIEW_CHANNEL, t))
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
