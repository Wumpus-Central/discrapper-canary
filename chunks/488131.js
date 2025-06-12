n.d(t, {
    NK: () => N,
    R6: () => S,
    ok: () => T,
    vN: () => A
});
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(570140),
    l = n(430742),
    c = n(40851),
    u = n(367907),
    d = n(727429),
    _ = n(927723),
    f = n(982168),
    p = n(703656),
    h = n(359110),
    m = n(695346),
    g = n(703558),
    E = n(944486),
    b = n(979651),
    y = n(585483),
    O = n(124368),
    v = n(981631),
    I = n(176505);
function T(e, t, n) {
    if (!(0, f.WF)(e.id)) return void (0, _.V)();
    c.UI.dispatch(v.CkL.POPOUT_CLOSE);
    let r = !o().isEmpty(b.Z.getVoiceStatesForChannel(e.id));
    if (t || !m.vF.getSetting() || __OVERLAY__ || r) {
        s.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e.parent_id
        }),
            null != n ? (0, h.ad)(e, { source: n }) : (0, h.Kh)(e.id);
        return;
    }
    i()(null != e.parent_id, 'all threads must have parents');
    let a = E.Z.getChannelId();
    e.parent_id === a || (0, I.ME)(a) || (0, h.Kh)(e.parent_id),
        (0, p.uL)(v.Z5c.CHANNEL_THREAD_VIEW((0, d.e)(e), (0, I.ME)(a) ? I.oC.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? { source: O.on.FORUM } : void 0),
        setTimeout(() => {
            y.S.dispatch(v.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function S(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), 'cannot open thread creation sidebar in forums'),
        i()(!__OVERLAY__, 'Cannot create threads in the overlay.'),
        (0, u.yw)(v.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
        c.UI.dispatch(v.CkL.POPOUT_CLOSE),
        E.Z.getChannelId() !== e.id && (0, h.Kh)(e.id),
        '' === g.Z.getDraft(e.id, g.d.FirstThreadMessage))
    ) {
        let t = g.Z.getDraft(e.id, g.d.ChannelMessage);
        l.Z.saveDraft(e.id, '', g.d.ChannelMessage), l.Z.saveDraft(e.id, t, g.d.FirstThreadMessage);
    }
    setTimeout(() => {
        s.Z.dispatch({
            type: 'SIDEBAR_CREATE_THREAD',
            parentChannelId: e.id,
            parentMessageId: null == t ? void 0 : t.id,
            location: n
        });
    }, 0);
}
function A(e, t) {
    (0, p.uL)(v.Z5c.CHANNEL(e, (0, I.ME)(t) ? I.oC.GUILD_HOME : t)),
        s.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: t
        });
}
function N(e) {
    s.Z.dispatch({
        type: 'SIDEBAR_CLOSE',
        baseChannelId: e
    }),
        s.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: g.d.FirstThreadMessage
        }),
        s.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: g.d.ThreadSettings
        });
}
