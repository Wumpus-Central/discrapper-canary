n.d(t, {
    NK: () => N,
    R6: () => C,
    ok: () => T,
    vN: () => A,
});
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(570140),
    l = n(430742),
    c = n(367907),
    u = n(727429),
    d = n(927723),
    f = n(728285),
    p = n(982168),
    _ = n(703656),
    m = n(359110),
    h = n(695346),
    g = n(433355),
    E = n(703558),
    b = n(944486),
    y = n(979651),
    O = n(585483),
    v = n(124368),
    S = n(981631),
    I = n(176505);
function T(e, t, n) {
    if (!(0, p.WF)(e.id)) return void (0, d.V)();
    f.UI.dispatch(S.CkL.POPOUT_CLOSE);
    let r = !o().isEmpty(y.Z.getVoiceStatesForChannel(e.id));
    if (t || !h.vF.getSetting() || __OVERLAY__ || r) {
        s.Z.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id,
        }),
            null != n ? (0, m.ad)(e, { source: n }) : (0, m.Kh)(e.id);
        return;
    }
    i()(null != e.parent_id, "all threads must have parents");
    let a = e.getGuildId();
    if (null != a && null != g.ZP.getGuildSidebarState(a)) {
        s.Z.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id,
        }),
            null != n ? (0, m.ad)(e, { source: n }) : (0, m.Kh)(e.id);
        return;
    }
    let l = b.Z.getChannelId();
    e.parent_id === l || (0, I.ME)(l) || (0, m.Kh)(e.parent_id),
        (0, _.uL)(
            S.Z5c.CHANNEL_THREAD_VIEW((0, u.e)(e), (0, I.ME)(l) ? I.oC.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: v.on.FORUM } : void 0,
        ),
        setTimeout(() => {
            O.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function C(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        i()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, c.yw)(S.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id,
        }),
        f.UI.dispatch(S.CkL.POPOUT_CLOSE),
        b.Z.getChannelId() !== e.id && (0, m.Kh)(e.id),
        "" === E.Z.getDraft(e.id, E.d.FirstThreadMessage))
    ) {
        let t = E.Z.getDraft(e.id, E.d.ChannelMessage);
        l.Z.saveDraft(e.id, "", E.d.ChannelMessage), l.Z.saveDraft(e.id, t, E.d.FirstThreadMessage);
    }
    setTimeout(() => {
        s.Z.dispatch({
            type: "SIDEBAR_CREATE_THREAD",
            parentChannelId: e.id,
            parentMessageId: null == t ? void 0 : t.id,
            location: n,
        });
    }, 0);
}
function A(e, t) {
    (0, _.uL)(S.Z5c.CHANNEL(e, (0, I.ME)(t) ? I.oC.GUILD_HOME : t)),
        s.Z.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: t,
        });
}
function N(e) {
    s.Z.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e,
    }),
        s.Z.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: E.d.FirstThreadMessage,
        }),
        s.Z.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: E.d.ThreadSettings,
        });
}
