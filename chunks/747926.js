n.d(t, { GS: () => R, JA: () => O, Tv: () => L, bA: () => D, xu: () => y });
var i = n(284009),
    r = n.n(i),
    a = n(73153),
    s = n(465532),
    l = n(608299),
    o = n(666860),
    d = n(964167),
    c = n(9588),
    u = n(267102),
    _ = n(892340),
    E = n(976860),
    A = n(378570),
    h = n(162199),
    f = n(940382),
    I = n(885386),
    p = n(358047),
    T = n(31717),
    m = n(309010),
    g = n(625494),
    S = n(37411),
    N = n(652215),
    C = n(746080);
function O(e, t, n) {
    if (!(0, _.C$)(e.id)) return void (0, c.showInaccessibleReportPostModal)();
    u.Uw.dispatch(N.jej.POPOUT_CLOSE);
    let i = { state: { hideThreadCallUI: !0 } };
    if (t || !I.SY.getSetting() || __OVERLAY__) {
        (a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, A.N9)(e, { ...i, source: n }) : (0, A.iN)(e.id, i));
        return;
    }
    r()(null != e.parent_id, "all threads must have parents");
    let s = e.getGuildId();
    if (null != s && null != p.Ay.getGuildSidebarState(s)) {
        (a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, A.N9)(e, { ...i, source: n }) : (0, A.iN)(e.id, i));
        return;
    }
    let l = m.Ay.getChannelId();
    (e.parent_id === l || (0, C.mP)(l) || (0, A.iN)(e.parent_id),
        (0, E.pX)(
            (0, d.V1)(N.BVt.CHANNEL_THREAD_VIEW((0, h.j)(e), (0, C.mP)(l) ? C.VV.GUILD_HOME : e.parent_id, e.id)),
            e.isForumPost() ? { source: S.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            g._.dispatch(N.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0));
}
function R(e) {
    let t = e.parent_id;
    null == t || m.Ay.getCurrentlySelectedChannelId() === t
        ? O(e)
        : p.Ay.getSidebarState(t)?.type === f.PE.CREATE_THREAD &&
          a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function L(e, t, n) {
    if (
        (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        r()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, o.zV)(N.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        u.Uw.dispatch(N.jej.POPOUT_CLOSE),
        m.Ay.getChannelId() !== e.id && (0, A.iN)(e.id),
        "" === T.A.getDraft(e.id, T.C.FirstThreadMessage))
    ) {
        let t = T.A.getDraft(e.id, T.C.ChannelMessage);
        (s.A.saveDraft(e.id, "", T.C.ChannelMessage), s.A.saveDraft(e.id, t, T.C.FirstThreadMessage));
    }
    setTimeout(() => {
        a.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function y(e, t) {
    ((0, E.pX)((0, d.V1)(N.BVt.CHANNEL(e, (0, C.mP)(t) ? C.VV.GUILD_HOME : t))),
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t }));
}
function D(e) {
    (a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        l.A.clearAll(e, T.C.FirstThreadMessage),
        a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: T.C.FirstThreadMessage }),
        a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: T.C.ThreadSettings }));
}
