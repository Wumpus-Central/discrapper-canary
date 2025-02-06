n.d(t, { B: () => N });
var i = n(200651);
n(192379);
var l = n(155281),
    r = n(222146),
    a = n(433517),
    o = n(481060),
    s = n(749210),
    c = n(170509),
    d = n(740504),
    u = n(117984),
    h = n(398758),
    p = n(680089),
    m = n(592125),
    g = n(324067),
    f = n(984933),
    _ = n(430824),
    v = n(496675),
    C = n(914010),
    x = n(281029),
    Z = n(700785),
    I = n(981631);
let b = 'DRAGGABLE_GUILD_CHANNEL';
function S(e, t) {
    var n, i;
    if (null == e || null == t) return null;
    if (e !== I.I_8) return m.Z.getChannel(t);
    let l = f.ZP.getChannels(e),
        r = null !== (i = null !== (n = l[f.sH].find((e) => e.channel.id === t)) && void 0 !== n ? n : l[f.Zb].find((e) => e.channel.id === t)) && void 0 !== i ? i : l[I.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == r ? void 0 : r.channel;
}
function N(e) {
    return (0, l.G)(
        b,
        {
            drop(e, t) {
                let n;
                let l = C.Z.getGuildId(),
                    r = t.getItem(),
                    a = (0, x.if)(S(l, r.id), r.position, e.channel, e.position, r.channelList);
                if (null == a) return;
                let d = S(l, r.id);
                if (null == d) return;
                let h = g.Z.getCategories(l),
                    p = _.Z.getGuild(l);
                if (null == p) return;
                let f = (0, x.Dn)(d, S(l, a.referenceId), a.parentId, h);
                if (0 !== f.length) {
                    if (l === I.I_8) {
                        (0, u.s3)(f);
                        return;
                    }
                    if (
                        ((f = f.filter((e) => {
                            let { id: t } = e,
                                n = m.Z.getChannel(t);
                            if (null == n) return !1;
                            let i = m.Z.getChannel(n.parent_id);
                            return n.type === I.d4z.GUILD_CATEGORY || null == i ? v.Z.can(I.Plq.MANAGE_CHANNELS, p) : v.Z.can(I.Plq.MANAGE_CHANNELS, i);
                        })),
                        d.parent_id !== a.parentId &&
                            f.find((e) => {
                                if (e.id !== d.id) return !1;
                                let t = m.Z.getChannel(e.parent_id);
                                if (!(null != t && v.Z.can(I.Plq.MANAGE_ROLES, d) && v.Z.can(I.Plq.MANAGE_ROLES, t))) return !0;
                                let i = Z.o4(d, t),
                                    l = Z.o4(d, m.Z.getChannel(d.parent_id));
                                return ((null != d.parent_id || i) && (!l || i)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = m.Z.getChannel(n.parent_id);
                        null != e &&
                            (0, o.h7j)((t) =>
                                (0, i.jsx)(c.default, {
                                    ...t,
                                    channel: d,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), s.Z.batchChannelUpdate(l, f));
                                    },
                                    onCancel: () => {
                                        null != n && s.Z.batchChannelUpdate(l, f);
                                    }
                                })
                            );
                    } else s.Z.batchChannelUpdate(l, f);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = m.Z.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, x.if)(m.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (C.Z.getGuildId() === I.I_8) return !0;
                let r = _.Z.getGuild(n.guildId);
                if (null == r) return !1;
                let a = m.Z.getChannel(l.parentId),
                    o = m.Z.getChannel(i.parent_id),
                    s = v.Z.can(I.Plq.MANAGE_CHANNELS, r),
                    c = null != o ? v.Z.can(I.Plq.MANAGE_CHANNELS, o) : s,
                    d = null != a ? v.Z.can(I.Plq.MANAGE_CHANNELS, a) : s;
                return c && d;
            }
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
                  };
        }
    )(
        (0, r.E)(
            b,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (C.Z.getGuildId() === I.I_8) return !0;
                    let l = _.Z.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, h.r1)(l.id) && v.Z.can(I.Plq.MANAGE_CHANNELS, l))
                        return (
                            'true' !== a.K.get('doNotShowReorderModal') &&
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await n.e('82560').then(n.bind(n, 391312));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === I.d4z.GUILD_CATEGORY) return v.Z.can(I.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                    let r = m.Z.getChannel(t.parent_id);
                    return (null != r && v.Z.can(I.Plq.MANAGE_CHANNELS, r)) || (null == r && v.Z.can(I.Plq.MANAGE_CHANNELS, l));
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: r
                        } = e,
                        a = C.Z.getGuildId(),
                        o = g.Z.getCategories(a);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: r,
                        parentId: n,
                        type: l,
                        channelList: (0, d.Z)(o._categories, o, (e) => {
                            let { channel: t } = e;
                            return t.type === I.d4z.GUILD_CATEGORY && null != o[t.id] && 0 === o[t.id].length ? a === I.I_8 || (v.Z.can(I.Plq.MANAGE_CHANNELS, t) && v.Z.can(I.Plq.VIEW_CHANNEL, t)) : !p.Z.isCollapsed(t.parent_id);
                        }),
                        guildId: i
                    };
                }
            },
            (e) => ({
                connectChannelDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview()
            })
        )(e)
    );
}
