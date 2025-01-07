n.d(t, {
    B: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
var l = n(155281),
    r = n(222146),
    a = n(433517),
    o = n(481060),
    s = n(749210),
    c = n(170509),
    u = n(740504),
    d = n(117984),
    h = n(398758),
    p = n(680089),
    f = n(592125),
    m = n(324067),
    g = n(984933),
    v = n(430824),
    C = n(496675),
    x = n(914010),
    I = n(281029),
    _ = n(700785),
    Z = n(981631);
let b = 'DRAGGABLE_GUILD_CHANNEL';
function S(e, t) {
    var n, i;
    if (null == e || null == t) return null;
    if (e !== Z.I_8) return f.Z.getChannel(t);
    let l = g.ZP.getChannels(e),
        r = null !== (i = null !== (n = l[g.sH].find((e) => e.channel.id === t)) && void 0 !== n ? n : l[g.Zb].find((e) => e.channel.id === t)) && void 0 !== i ? i : l[Z.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == r ? void 0 : r.channel;
}
function N(e) {
    return (0, l.G)(
        b,
        {
            drop(e, t) {
                let n;
                let l = x.Z.getGuildId(),
                    r = t.getItem(),
                    a = (0, I.if)(S(l, r.id), r.position, e.channel, e.position, r.channelList);
                if (null == a) return;
                let u = S(l, r.id);
                if (null == u) return;
                let h = m.Z.getCategories(l),
                    p = v.Z.getGuild(l);
                if (null == p) return;
                let g = (0, I.Dn)(u, S(l, a.referenceId), a.parentId, h);
                if (0 !== g.length) {
                    if (l === Z.I_8) {
                        (0, d.s3)(g);
                        return;
                    }
                    if (
                        ((g = g.filter((e) => {
                            let { id: t } = e,
                                n = f.Z.getChannel(t);
                            if (null == n) return !1;
                            let i = f.Z.getChannel(n.parent_id);
                            return n.type === Z.d4z.GUILD_CATEGORY || null == i ? C.Z.can(Z.Plq.MANAGE_CHANNELS, p) : C.Z.can(Z.Plq.MANAGE_CHANNELS, i);
                        })),
                        u.parent_id !== a.parentId &&
                            g.find((e) => {
                                if (e.id !== u.id) return !1;
                                let t = f.Z.getChannel(e.parent_id);
                                if (!(null != t && C.Z.can(Z.Plq.MANAGE_ROLES, u) && C.Z.can(Z.Plq.MANAGE_ROLES, t))) return !0;
                                let i = _.o4(u, t),
                                    l = _.o4(u, f.Z.getChannel(u.parent_id));
                                return ((null == u.parent_id && !i) || (l && !i)) && (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = f.Z.getChannel(n.parent_id);
                        null != e &&
                            (0, o.openModal)((t) =>
                                (0, i.jsx)(c.default, {
                                    ...t,
                                    channel: u,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), s.Z.batchChannelUpdate(l, g));
                                    },
                                    onCancel: () => {
                                        null != n && s.Z.batchChannelUpdate(l, g);
                                    }
                                })
                            );
                    } else s.Z.batchChannelUpdate(l, g);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = f.Z.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, I.if)(f.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (x.Z.getGuildId() === Z.I_8) return !0;
                let r = v.Z.getGuild(n.guildId);
                if (null == r) return !1;
                let a = f.Z.getChannel(l.parentId),
                    o = f.Z.getChannel(i.parent_id),
                    s = C.Z.can(Z.Plq.MANAGE_CHANNELS, r),
                    c = null != o ? C.Z.can(Z.Plq.MANAGE_CHANNELS, o) : s,
                    u = null != a ? C.Z.can(Z.Plq.MANAGE_CHANNELS, a) : s;
                return c && u;
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
                    if (x.Z.getGuildId() === Z.I_8) return !0;
                    let l = v.Z.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, h.r1)(l.id) && C.Z.can(Z.Plq.MANAGE_CHANNELS, l))
                        return (
                            'true' !== a.K.get('doNotShowReorderModal') &&
                                (0, o.openModalLazy)(async () => {
                                    let { default: e } = await n.e('82560').then(n.bind(n, 391312));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === Z.d4z.GUILD_CATEGORY) return C.Z.can(Z.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                    let r = f.Z.getChannel(t.parent_id);
                    return (null != r && C.Z.can(Z.Plq.MANAGE_CHANNELS, r)) || (null == r && C.Z.can(Z.Plq.MANAGE_CHANNELS, l));
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: r
                        } = e,
                        a = x.Z.getGuildId(),
                        o = m.Z.getCategories(a);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: r,
                        parentId: n,
                        type: l,
                        channelList: (0, u.Z)(o._categories, o, (e) => {
                            let { channel: t } = e;
                            if (t.type === Z.d4z.GUILD_CATEGORY && null != o[t.id] && 0 === o[t.id].length) return a === Z.I_8 || (C.Z.can(Z.Plq.MANAGE_CHANNELS, t) && C.Z.can(Z.Plq.VIEW_CHANNEL, t));
                            return !p.Z.isCollapsed(t.parent_id);
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
