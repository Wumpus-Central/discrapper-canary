a.d(t, { JA: () => L, Tv: () => S, bA: () => D, xu: () => x });
var i = a(284009),
    n = a.n(i),
    d = a(73153),
    s = a(465532),
    l = a(608299),
    r = a(666860),
    h = a(964167),
    o = a(9588),
    u = a(267102),
    c = a(892340),
    p = a(976860),
    C = a(378570),
    _ = a(162199),
    A = a(885386),
    E = a(358047),
    g = a(31717),
    R = a(309010),
    f = a(625494),
    I = a(37411),
    T = a(652215),
    m = a(746080);
function L(e, t, a) {
    if (!(0, c.C$)(e.id)) return void (0, o.showInaccessibleReportPostModal)();
    u.Uw.dispatch(T.jej.POPOUT_CLOSE);
    let i = { state: { hideThreadCallUI: !0 } };
    if (t || !A.SY.getSetting() || __OVERLAY__) {
        (d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != a ? (0, C.N9)(e, { ...i, source: a }) : (0, C.iN)(e.id, i));
        return;
    }
    n()(null != e.parent_id, "all threads must have parents");
    let s = e.getGuildId();
    if (null != s && null != E.Ay.getGuildSidebarState(s)) {
        (d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != a ? (0, C.N9)(e, { ...i, source: a }) : (0, C.iN)(e.id, i));
        return;
    }
    let l = R.Ay.getChannelId();
    (e.parent_id === l || (0, m.mP)(l) || (0, C.iN)(e.parent_id),
        (0, p.pX)(
            (0, h.V1)(T.BVt.CHANNEL_THREAD_VIEW((0, _.j)(e), (0, m.mP)(l) ? m.VV.GUILD_HOME : e.parent_id, e.id)),
            e.isForumPost() ? { source: I.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            f._.dispatch(T.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0));
}
function S(e, t, a) {
    if (
        (n()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        n()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, r.zV)(T.HAw.THREAD_CREATION_STARTED, { location: a, channel_id: e.id, guild_id: e.guild_id }),
        u.Uw.dispatch(T.jej.POPOUT_CLOSE),
        R.Ay.getChannelId() !== e.id && (0, C.iN)(e.id),
        "" === g.A.getDraft(e.id, g.C.FirstThreadMessage))
    ) {
        let t = g.A.getDraft(e.id, g.C.ChannelMessage);
        (s.A.saveDraft(e.id, "", g.C.ChannelMessage), s.A.saveDraft(e.id, t, g.C.FirstThreadMessage));
    }
    setTimeout(() => {
        d.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: a });
    }, 0);
}
function x(e, t) {
    ((0, p.pX)((0, h.V1)(T.BVt.CHANNEL(e, (0, m.mP)(t) ? m.VV.GUILD_HOME : t))),
        d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t }));
}
function D(e) {
    (d.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        l.A.clearAll(e, g.C.FirstThreadMessage),
        d.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: g.C.FirstThreadMessage }),
        d.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: g.C.ThreadSettings }));
}
