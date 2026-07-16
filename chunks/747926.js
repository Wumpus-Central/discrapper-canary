"use strict";
n.d(t, { JA: () => N, Tv: () => C, bA: () => O, xu: () => R });
var i = n(284009),
    r = n.n(i),
    a = n(228366),
    s = n(465532),
    l = n(608299),
    o = n(95561),
    d = n(584682),
    c = n(9588),
    u = n(267102),
    _ = n(892340),
    E = n(976860),
    A = n(378570),
    h = n(885386),
    I = n(761640),
    f = n(31717),
    p = n(309010),
    T = n(625494),
    m = n(37411),
    g = n(652215),
    S = n(746080);
function N(e, t, n) {
    if (!(0, _.C$)(e.id)) return void (0, c.showInaccessibleReportPostModal)();
    u.Uw.dispatch(g.jej.POPOUT_CLOSE);
    let i = { state: { hideThreadCallUI: !0 } };
    if (t || !h.SY.getSetting() || __OVERLAY__) {
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, A.N9)(e, { ...i, source: n }) : (0, A.iN)(e.id, i);
        return;
    }
    r()(null != e.parent_id, "all threads must have parents");
    let s = e.getGuildId();
    if (null != s && null != I.Ay.getGuildSidebarState(s)) {
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, A.N9)(e, { ...i, source: n }) : (0, A.iN)(e.id, i);
        return;
    }
    let l = p.Ay.getChannelId();
    e.parent_id === l || (0, S.mP)(l) || (0, A.iN)(e.parent_id),
        (0, E.pX)(
            g.BVt.CHANNEL_THREAD_VIEW((0, d.j)(e), (0, S.mP)(l) ? S.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: m.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            T._.dispatch(g.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function C(e, t, n) {
    if (
        (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        r()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, o.zV)(g.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        u.Uw.dispatch(g.jej.POPOUT_CLOSE),
        p.Ay.getChannelId() !== e.id && (0, A.iN)(e.id),
        "" === f.A.getDraft(e.id, f.C.FirstThreadMessage))
    ) {
        let t = f.A.getDraft(e.id, f.C.ChannelMessage);
        s.A.saveDraft(e.id, "", f.C.ChannelMessage), s.A.saveDraft(e.id, t, f.C.FirstThreadMessage);
    }
    setTimeout(() => {
        a.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function R(e, t) {
    (0, E.pX)(g.BVt.CHANNEL(e, (0, S.mP)(t) ? S.VV.GUILD_HOME : t)),
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function O(e) {
    a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        l.A.clearAll(e, f.C.FirstThreadMessage),
        a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: f.C.FirstThreadMessage }),
        a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: f.C.ThreadSettings });
}
