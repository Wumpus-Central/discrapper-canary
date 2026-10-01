a.d(t, { JA: () => m, Tv: () => L, bA: () => D, xu: () => S });
var i = a(284009),
    n = a.n(i),
    s = a(73153),
    d = a(465532),
    l = a(608299),
    r = a(95561),
    h = a(9588),
    o = a(267102),
    u = a(892340),
    c = a(976860),
    p = a(378570),
    C = a(162199),
    _ = a(885386),
    A = a(761640),
    E = a(31717),
    g = a(309010),
    R = a(625494),
    f = a(37411),
    I = a(652215),
    T = a(746080);
function m(e, t, a) {
    if (!(0, u.C$)(e.id)) return void (0, h.showInaccessibleReportPostModal)();
    o.Uw.dispatch(I.jej.POPOUT_CLOSE);
    let i = { state: { hideThreadCallUI: !0 } };
    if (t || !_.SY.getSetting() || __OVERLAY__) {
        (s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != a ? (0, p.N9)(e, { ...i, source: a }) : (0, p.iN)(e.id, i));
        return;
    }
    n()(null != e.parent_id, "all threads must have parents");
    let d = e.getGuildId();
    if (null != d && null != A.Ay.getGuildSidebarState(d)) {
        (s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != a ? (0, p.N9)(e, { ...i, source: a }) : (0, p.iN)(e.id, i));
        return;
    }
    let l = g.Ay.getChannelId();
    (e.parent_id === l || (0, T.mP)(l) || (0, p.iN)(e.parent_id),
        (0, c.pX)(
            I.BVt.CHANNEL_THREAD_VIEW((0, C.j)(e), (0, T.mP)(l) ? T.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: f.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            R._.dispatch(I.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0));
}
function L(e, t, a) {
    if (
        (n()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        n()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, r.zV)(I.HAw.THREAD_CREATION_STARTED, { location: a, channel_id: e.id, guild_id: e.guild_id }),
        o.Uw.dispatch(I.jej.POPOUT_CLOSE),
        g.Ay.getChannelId() !== e.id && (0, p.iN)(e.id),
        "" === E.A.getDraft(e.id, E.C.FirstThreadMessage))
    ) {
        let t = E.A.getDraft(e.id, E.C.ChannelMessage);
        (d.A.saveDraft(e.id, "", E.C.ChannelMessage), d.A.saveDraft(e.id, t, E.C.FirstThreadMessage));
    }
    setTimeout(() => {
        s.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: a });
    }, 0);
}
function S(e, t) {
    ((0, c.pX)(I.BVt.CHANNEL(e, (0, T.mP)(t) ? T.VV.GUILD_HOME : t)),
        s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t }));
}
function D(e) {
    (s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        l.A.clearAll(e, E.C.FirstThreadMessage),
        s.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: E.C.FirstThreadMessage }),
        s.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: E.C.ThreadSettings }));
}
