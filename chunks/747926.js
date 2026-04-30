"use strict";
n.d(t, { JA: () => v, Tv: () => O, bA: () => b, xu: () => R });
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(228366),
    l = n(465532),
    u = n(608299),
    c = n(95561),
    d = n(584682),
    _ = n(9588),
    f = n(267102),
    h = n(892340),
    p = n(976860),
    E = n(378570),
    m = n(885386),
    g = n(761640),
    A = n(31717),
    I = n(309010),
    T = n(977997),
    S = n(625494),
    N = n(37411),
    y = n(652215),
    C = n(746080);
function v(e, t, n) {
    if (!(0, h.C$)(e.id)) return void (0, _.E)();
    f.Uw.dispatch(y.jej.POPOUT_CLOSE);
    let i = !a().isEmpty(T.A.getVoiceStatesForChannel(e.id));
    if (t || !m.SY.getSetting() || __OVERLAY__ || i) {
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
        return;
    }
    r()(null != e.parent_id, "all threads must have parents");
    let s = e.getGuildId();
    if (null != s && null != g.Ay.getGuildSidebarState(s)) {
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
        return;
    }
    let l = I.A.getChannelId();
    e.parent_id === l || (0, C.mP)(l) || (0, E.iN)(e.parent_id),
        (0, p.pX)(
            y.BVt.CHANNEL_THREAD_VIEW((0, d.j)(e), (0, C.mP)(l) ? C.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: N.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            S._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function O(e, t, n) {
    if (
        (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        r()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, c.zV)(y.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        f.Uw.dispatch(y.jej.POPOUT_CLOSE),
        I.A.getChannelId() !== e.id && (0, E.iN)(e.id),
        "" === A.A.getDraft(e.id, A.C.FirstThreadMessage))
    ) {
        let t = A.A.getDraft(e.id, A.C.ChannelMessage);
        l.A.saveDraft(e.id, "", A.C.ChannelMessage), l.A.saveDraft(e.id, t, A.C.FirstThreadMessage);
    }
    setTimeout(() => {
        o.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function R(e, t) {
    (0, p.pX)(y.BVt.CHANNEL(e, (0, C.mP)(t) ? C.VV.GUILD_HOME : t)),
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function b(e) {
    o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        u.A.clearAll(e, A.C.FirstThreadMessage),
        o.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: A.C.FirstThreadMessage }),
        o.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: A.C.ThreadSettings });
}
