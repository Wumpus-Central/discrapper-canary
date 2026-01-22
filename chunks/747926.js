n.d(t, {
    JA: () => I,
    Tv: () => T,
    bA: () => N,
    xu: () => C,
});
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(73153),
    l = n(465532),
    c = n(58149),
    u = n(584682),
    d = n(9588),
    f = n(267102),
    p = n(376708),
    _ = n(976860),
    h = n(378570),
    m = n(253932),
    g = n(761640),
    E = n(31717),
    b = n(309010),
    y = n(977997),
    O = n(203982),
    A = n(37411),
    v = n(652215),
    S = n(746080);
function I(e, t, n) {
    if (!(0, p.C$)(e.id)) return void (0, d.E)();
    f.Uw.dispatch(v.jej.POPOUT_CLOSE);
    let r = !s().isEmpty(y.A.getVoiceStatesForChannel(e.id));
    if (t || !m.SY.getSetting() || __OVERLAY__ || r) {
        o.h.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id,
        }),
            null != n ? (0, h.N9)(e, { source: n }) : (0, h.iN)(e.id);
        return;
    }
    i()(null != e.parent_id, "all threads must have parents");
    let a = e.getGuildId();
    if (null != a && null != g.Ay.getGuildSidebarState(a)) {
        o.h.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id,
        }),
            null != n ? (0, h.N9)(e, { source: n }) : (0, h.iN)(e.id);
        return;
    }
    let l = b.A.getChannelId();
    e.parent_id === l || (0, S.mP)(l) || (0, h.iN)(e.parent_id),
        (0, _.pX)(
            v.BVt.CHANNEL_THREAD_VIEW((0, u.j)(e), (0, S.mP)(l) ? S.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: A.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            O._.dispatch(v.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function T(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        i()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, c.zV)(v.HAw.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id,
        }),
        f.Uw.dispatch(v.jej.POPOUT_CLOSE),
        b.A.getChannelId() !== e.id && (0, h.iN)(e.id),
        "" === E.A.getDraft(e.id, E.C.FirstThreadMessage))
    ) {
        let t = E.A.getDraft(e.id, E.C.ChannelMessage);
        l.A.saveDraft(e.id, "", E.C.ChannelMessage), l.A.saveDraft(e.id, t, E.C.FirstThreadMessage);
    }
    setTimeout(() => {
        o.h.dispatch({
            type: "SIDEBAR_CREATE_THREAD",
            parentChannelId: e.id,
            parentMessageId: null == t ? void 0 : t.id,
            location: n,
        });
    }, 0);
}
function C(e, t) {
    (0, _.pX)(v.BVt.CHANNEL(e, (0, S.mP)(t) ? S.VV.GUILD_HOME : t)),
        o.h.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: t,
        });
}
function N(e) {
    o.h.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e,
    }),
        o.h.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: E.C.FirstThreadMessage,
        }),
        o.h.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: E.C.ThreadSettings,
        });
}
