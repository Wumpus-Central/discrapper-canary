r.d(n, {
    NK: function () {
        return C;
    },
    R6: function () {
        return S;
    },
    ok: function () {
        return T;
    },
    vN: function () {
        return A;
    }
});
var i = r(512722),
    a = r.n(i),
    o = r(392711),
    s = r.n(o),
    l = r(570140),
    u = r(430742),
    c = r(40851),
    d = r(367907),
    f = r(727429),
    p = r(703656),
    h = r(359110),
    _ = r(695346),
    m = r(703558),
    g = r(944486),
    E = r(979651),
    v = r(585483),
    y = r(124368),
    b = r(981631),
    I = r(176505);
function T(e, n, r) {
    c.UI.dispatch(b.CkL.POPOUT_CLOSE);
    let i = !s().isEmpty(E.Z.getVoiceStatesForChannel(e.id));
    if (n || !_.vF.getSetting() || __OVERLAY__ || i) {
        l.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e.parent_id
        }),
            null != r ? (0, h.ad)(e, { source: r }) : (0, h.Kh)(e.id);
        return;
    }
    a()(null != e.parent_id, 'all threads must have parents');
    let o = g.Z.getChannelId();
    e.parent_id !== o && !(0, I.ME)(o) && (0, h.Kh)(e.parent_id),
        (0, p.uL)(b.Z5c.CHANNEL_THREAD_VIEW((0, f.e)(e), (0, I.ME)(o) ? I.oC.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? { source: y.on.FORUM } : void 0),
        setTimeout(() => {
            v.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function S(e, n, r) {
    if (
        (a()(!e.isForumLikeChannel(), 'cannot open thread creation sidebar in forums'),
        a()(!__OVERLAY__, 'Cannot create threads in the overlay.'),
        (0, d.yw)(b.rMx.THREAD_CREATION_STARTED, {
            location: r,
            channel_id: e.id,
            guild_id: e.guild_id
        }),
        c.UI.dispatch(b.CkL.POPOUT_CLOSE),
        g.Z.getChannelId() !== e.id && (0, h.Kh)(e.id),
        '' === m.Z.getDraft(e.id, m.d.FirstThreadMessage))
    ) {
        let n = m.Z.getDraft(e.id, m.d.ChannelMessage);
        u.Z.saveDraft(e.id, '', m.d.ChannelMessage), u.Z.saveDraft(e.id, n, m.d.FirstThreadMessage);
    }
    setTimeout(() => {
        l.Z.dispatch({
            type: 'SIDEBAR_CREATE_THREAD',
            parentChannelId: e.id,
            parentMessageId: null == n ? void 0 : n.id,
            location: r
        });
    }, 0);
}
function A(e, n) {
    (0, p.uL)(b.Z5c.CHANNEL(e, (0, I.ME)(n) ? I.oC.GUILD_HOME : n)),
        l.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: n
        });
}
function C(e) {
    l.Z.dispatch({
        type: 'SIDEBAR_CLOSE',
        baseChannelId: e
    }),
        l.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: m.d.FirstThreadMessage
        }),
        l.Z.dispatch({
            type: 'DRAFT_CLEAR',
            channelId: e,
            draftType: m.d.ThreadSettings
        });
}
