n.d(t, {
    NK: () => T,
    R6: () => I,
    ok: () => O,
    vN: () => S
});
var r = n(512722),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(570140),
    l = n(430742),
    c = n(40851),
    u = n(367907),
    d = n(727429),
    f = n(703656),
    _ = n(359110),
    p = n(695346),
    h = n(703558),
    m = n(944486),
    g = n(979651),
    E = n(585483),
    b = n(124368),
    y = n(981631),
    v = n(176505);
function O(e, t, n) {
    c.UI.dispatch(y.CkL.POPOUT_CLOSE);
    let r = !a().isEmpty(g.Z.getVoiceStatesForChannel(e.id));
    if (t || !p.vF.getSetting() || __OVERLAY__ || r) {
        s.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e.parent_id
        }),
            null != n ? (0, _.ad)(e, { source: n }) : (0, _.Kh)(e.id);
        return;
    }
    i()(null != e.parent_id, 'all threads must have parents');
    let o = m.Z.getChannelId();
    e.parent_id === o || (0, v.ME)(o) || (0, _.Kh)(e.parent_id),
        (0, f.uL)(y.Z5c.CHANNEL_THREAD_VIEW((0, d.e)(e), (0, v.ME)(o) ? v.oC.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? { source: b.on.FORUM } : void 0),
        setTimeout(() => {
            E.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function I(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), 'cannot open thread creation sidebar in forums'),
        i()(!__OVERLAY__, 'Cannot create threads in the overlay.'),
        (0, u.yw)(y.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
        c.UI.dispatch(y.CkL.POPOUT_CLOSE),
        m.Z.getChannelId() !== e.id && (0, _.Kh)(e.id),
        '' === h.Z.getDraft(e.id, h.d.FirstThreadMessage))
    ) {
        let t = h.Z.getDraft(e.id, h.d.ChannelMessage);
        l.Z.saveDraft(e.id, '', h.d.ChannelMessage), l.Z.saveDraft(e.id, t, h.d.FirstThreadMessage);
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
function S(e, t) {
    (0, f.uL)(y.Z5c.CHANNEL(e, (0, v.ME)(t) ? v.oC.GUILD_HOME : t)),
        s.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: t
        });
}
function T(e) {
    s.Z.dispatch({
        type: 'SIDEBAR_CLOSE',
        baseChannelId: e
    }),
        s.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: h.d.FirstThreadMessage
        }),
        s.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: h.d.ThreadSettings
        });
}
