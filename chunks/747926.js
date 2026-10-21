a.d(t, { GS: () => D, JA: () => y, Tv: () => L, bA: () => O, xu: () => x });
var i = a(284009),
    n = a.n(i),
    d = a(73153),
    l = a(465532),
    s = a(608299),
    r = a(666860),
    h = a(964167),
    u = a(9588),
    c = a(267102),
    o = a(892340),
    p = a(976860),
    C = a(378570),
    _ = a(162199),
    A = a(940382),
    E = a(885386),
    g = a(358047),
    R = a(31717),
    f = a(309010),
    I = a(625494),
    S = a(37411),
    T = a(652215),
    m = a(746080);
function y(e, t, a) {
    if (!(0, o.C$)(e.id)) return void (0, u.showInaccessibleReportPostModal)();
    c.Uw.dispatch(T.jej.POPOUT_CLOSE);
    let i = { state: { hideThreadCallUI: !0 } };
    if (t || !E.SY.getSetting() || __OVERLAY__) {
        (d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != a ? (0, C.N9)(e, { ...i, source: a }) : (0, C.iN)(e.id, i));
        return;
    }
    n()(null != e.parent_id, "all threads must have parents");
    let l = e.getGuildId();
    if (null != l && null != g.Ay.getGuildSidebarState(l)) {
        (d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != a ? (0, C.N9)(e, { ...i, source: a }) : (0, C.iN)(e.id, i));
        return;
    }
    let s = f.Ay.getChannelId();
    (e.parent_id === s || (0, m.mP)(s) || (0, C.iN)(e.parent_id),
        (0, p.pX)(
            (0, h.V1)(T.BVt.CHANNEL_THREAD_VIEW((0, _.j)(e), (0, m.mP)(s) ? m.VV.GUILD_HOME : e.parent_id, e.id)),
            e.isForumPost() ? { source: S.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            I._.dispatch(T.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0));
}
function D(e) {
    let t = e.parent_id;
    null == t || f.Ay.getCurrentlySelectedChannelId() === t
        ? y(e)
        : g.Ay.getSidebarState(t)?.type === A.PE.CREATE_THREAD &&
          d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function L(e, t, a) {
    if (
        (n()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        n()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, r.zV)(T.HAw.THREAD_CREATION_STARTED, { location: a, channel_id: e.id, guild_id: e.guild_id }),
        c.Uw.dispatch(T.jej.POPOUT_CLOSE),
        f.Ay.getChannelId() !== e.id && (0, C.iN)(e.id),
        "" === R.A.getDraft(e.id, R.C.FirstThreadMessage))
    ) {
        let t = R.A.getDraft(e.id, R.C.ChannelMessage);
        (l.A.saveDraft(e.id, "", R.C.ChannelMessage), l.A.saveDraft(e.id, t, R.C.FirstThreadMessage));
    }
    setTimeout(() => {
        d.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: a });
    }, 0);
}
function x(e, t) {
    ((0, p.pX)((0, h.V1)(T.BVt.CHANNEL(e, (0, m.mP)(t) ? m.VV.GUILD_HOME : t))),
        d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t }));
}
function O(e) {
    (d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        s.A.clearAll(e, R.C.FirstThreadMessage),
        d.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: R.C.FirstThreadMessage }),
        d.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: R.C.ThreadSettings }));
}
