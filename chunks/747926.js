"use strict";
n.d(t, { JA: () => S, Tv: () => v, bA: () => N, xu: () => _ });
var l = n(284009),
    i = n.n(l),
    s = n(228366),
    r = n(465532),
    a = n(608299),
    o = n(95561),
    u = n(9588),
    c = n(267102),
    d = n(892340),
    h = n(976860),
    m = n(378570),
    f = n(162199),
    p = n(885386),
    g = n(761640),
    x = n(31717),
    A = n(309010),
    E = n(625494),
    C = n(37411),
    I = n(652215),
    y = n(746080);
function S(e, t, n) {
    if (!(0, d.C$)(e.id)) return void (0, u.showInaccessibleReportPostModal)();
    c.Uw.dispatch(I.jej.POPOUT_CLOSE);
    let l = { state: { hideThreadCallUI: !0 } };
    if (t || !p.SY.getSetting() || __OVERLAY__) {
        s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, m.N9)(e, { ...l, source: n }) : (0, m.iN)(e.id, l);
        return;
    }
    i()(null != e.parent_id, "all threads must have parents");
    let r = e.getGuildId();
    if (null != r && null != g.Ay.getGuildSidebarState(r)) {
        s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, m.N9)(e, { ...l, source: n }) : (0, m.iN)(e.id, l);
        return;
    }
    let a = A.Ay.getChannelId();
    e.parent_id === a || (0, y.mP)(a) || (0, m.iN)(e.parent_id),
        (0, h.pX)(
            I.BVt.CHANNEL_THREAD_VIEW((0, f.j)(e), (0, y.mP)(a) ? y.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: C.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            E._.dispatch(I.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function v(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        i()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, o.zV)(I.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        c.Uw.dispatch(I.jej.POPOUT_CLOSE),
        A.Ay.getChannelId() !== e.id && (0, m.iN)(e.id),
        "" === x.A.getDraft(e.id, x.C.FirstThreadMessage))
    ) {
        let t = x.A.getDraft(e.id, x.C.ChannelMessage);
        r.A.saveDraft(e.id, "", x.C.ChannelMessage), r.A.saveDraft(e.id, t, x.C.FirstThreadMessage);
    }
    setTimeout(() => {
        s.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function _(e, t) {
    (0, h.pX)(I.BVt.CHANNEL(e, (0, y.mP)(t) ? y.VV.GUILD_HOME : t)),
        s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function N(e) {
    s.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        a.A.clearAll(e, x.C.FirstThreadMessage),
        s.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: x.C.FirstThreadMessage }),
        s.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: x.C.ThreadSettings });
}
