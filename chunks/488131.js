n.d(t, {
    NK: () => N,
    R6: () => A,
    ok: () => S,
    vN: () => C,
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
    _ = n(982168),
    p = n(703656),
    h = n(359110),
    m = n(695346),
    g = n(433355),
    E = n(703558),
    b = n(944486),
    y = n(979651),
    O = n(585483),
    v = n(124368),
    I = n(981631),
    T = n(176505);
function S(e, t, n) {
    if (!(0, _.WF)(e.id)) return void (0, d.V)();
    f.UI.dispatch(I.CkL.POPOUT_CLOSE);
    let r = !o().isEmpty(y.Z.getVoiceStatesForChannel(e.id));
    if (t || !m.vF.getSetting() || __OVERLAY__ || r) {
        s.Z.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id,
        }),
            null != n ? (0, h.ad)(e, { source: n }) : (0, h.Kh)(e.id);
        return;
    }
    i()(null != e.parent_id, "all threads must have parents");
    let a = e.getGuildId();
    if (null != a && null != g.ZP.getGuildSidebarState(a)) {
        s.Z.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e.parent_id,
        }),
            null != n ? (0, h.ad)(e, { source: n }) : (0, h.Kh)(e.id);
        return;
    }
    let l = b.Z.getChannelId();
    e.parent_id === l || (0, T.ME)(l) || (0, h.Kh)(e.parent_id),
        (0, p.uL)(
            I.Z5c.CHANNEL_THREAD_VIEW((0, u.e)(e), (0, T.ME)(l) ? T.oC.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: v.on.FORUM } : void 0,
        ),
        setTimeout(() => {
            O.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function A(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        i()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, c.yw)(I.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id,
        }),
        f.UI.dispatch(I.CkL.POPOUT_CLOSE),
        b.Z.getChannelId() !== e.id && (0, h.Kh)(e.id),
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
function C(e, t) {
    (0, p.uL)(I.Z5c.CHANNEL(e, (0, T.ME)(t) ? T.oC.GUILD_HOME : t)),
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
