n.d(t, {
    NK: () => A,
    R6: () => T,
    ok: () => b,
    vN: () => S
});
var i = n(512722),
    r = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(570140),
    l = n(430742),
    u = n(40851),
    c = n(367907),
    d = n(727429),
    f = n(703656),
    _ = n(359110),
    p = n(695346),
    h = n(703558),
    m = n(944486),
    g = n(979651),
    E = n(585483),
    v = n(124368),
    y = n(981631),
    I = n(176505);
function b(e, t, n) {
    u.UI.dispatch(y.CkL.POPOUT_CLOSE);
    let i = !s().isEmpty(g.Z.getVoiceStatesForChannel(e.id));
    if (t || !p.vF.getSetting() || __OVERLAY__ || i) {
        o.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e.parent_id
        }),
            null != n ? (0, _.ad)(e, { source: n }) : (0, _.Kh)(e.id);
        return;
    }
    r()(null != e.parent_id, 'all threads must have parents');
    let a = m.Z.getChannelId();
    e.parent_id === a || (0, I.ME)(a) || (0, _.Kh)(e.parent_id),
        (0, f.uL)(y.Z5c.CHANNEL_THREAD_VIEW((0, d.e)(e), (0, I.ME)(a) ? I.oC.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? { source: v.on.FORUM } : void 0),
        setTimeout(() => {
            E.S.dispatch(y.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function T(e, t, n) {
    if (
        (r()(!e.isForumLikeChannel(), 'cannot open thread creation sidebar in forums'),
        r()(!__OVERLAY__, 'Cannot create threads in the overlay.'),
        (0, c.yw)(y.rMx.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
        u.UI.dispatch(y.CkL.POPOUT_CLOSE),
        m.Z.getChannelId() !== e.id && (0, _.Kh)(e.id),
        '' === h.Z.getDraft(e.id, h.d.FirstThreadMessage))
    ) {
        let t = h.Z.getDraft(e.id, h.d.ChannelMessage);
        l.Z.saveDraft(e.id, '', h.d.ChannelMessage), l.Z.saveDraft(e.id, t, h.d.FirstThreadMessage);
    }
    setTimeout(() => {
        o.Z.dispatch({
            type: 'SIDEBAR_CREATE_THREAD',
            parentChannelId: e.id,
            parentMessageId: null == t ? void 0 : t.id,
            location: n
        });
    }, 0);
}
function S(e, t) {
    (0, f.uL)(y.Z5c.CHANNEL(e, (0, I.ME)(t) ? I.oC.GUILD_HOME : t)),
        o.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: t
        });
}
function A(e) {
    o.Z.dispatch({
        type: 'SIDEBAR_CLOSE',
        baseChannelId: e
    }),
        o.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: h.d.FirstThreadMessage
        }),
        o.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: h.d.ThreadSettings
        });
}
