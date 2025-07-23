n.d(t, { f: () => A });
var r = n(475179),
    i = n(904245),
    a = n(45114),
    o = n(40851),
    s = n(358221),
    l = n(623292),
    c = n(807092),
    u = n(6025),
    d = n(897473),
    _ = n(913663),
    f = n(268350),
    p = n(433355),
    h = n(592125),
    m = n(703558),
    g = n(323873),
    E = n(375954),
    b = n(306680),
    y = n(944486),
    O = n(914010),
    v = n(574254),
    I = n(451478),
    T = n(585483),
    S = n(981631);
let A = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (I.Z.isElementFullScreen()) return !1;
        if (T.S.hasSubscribers(S.CkL.CALL_DECLINE)) return (T.S.dispatch(S.CkL.CALL_DECLINE), !1);
        if (v.Z.close()) return !1;
        if (T.S.hasSubscribers(S.CkL.MEDIA_MODAL_CLOSE)) return (T.S.dispatch(S.CkL.MEDIA_MODAL_CLOSE), !1);
        let t = (0, o.AN)(e);
        if (null == t ? void 0 : t.hasSubscribers(S.CkL.POPOUT_CLOSE)) return (t.dispatch(S.CkL.POPOUT_CLOSE), !1);
        if (T.S.hasSubscribers(S.CkL.CLOSE_GIF_PICKER)) return (T.S.dispatch(S.CkL.CLOSE_GIF_PICKER), !1);
        if (T.S.hasSubscribers(S.CkL.MODAL_CLOSE)) return (T.S.dispatch(S.CkL.MODAL_CLOSE), !1);
        if (T.S.hasSubscribers(S.CkL.SEARCH_RESULTS_CLOSE)) return (T.S.dispatch(S.CkL.SEARCH_RESULTS_CLOSE), !1);
        if (null == t ? void 0 : t.hasSubscribers(S.CkL.POPOUT_CLOSE_AFTER_MODALS)) return (t.dispatch(S.CkL.POPOUT_CLOSE_AFTER_MODALS), !1);
        let n = O.Z.getGuildId(),
            i = y.Z.getChannelId(n),
            a = h.Z.getChannel(i),
            l = p.ZP.getSection(i, null == a ? void 0 : a.isDM()) === S.ULH.SIDEBAR_CHAT ? p.ZP.getSidebarState(i) : null,
            c = (null == l ? void 0 : l.type) === d.tI.VIEW_THREAD || (null == l ? void 0 : l.type) === d.tI.VIEW_CHANNEL ? l.channelId : null;
        if (!1 === N(i) || !1 === N(c)) return !1;
        if (null != i && (null == l ? void 0 : l.type) === d.tI.CREATE_THREAD) return (u.Z.closeChannelSidebar(i), !1);
        let _ = C(i),
            f = C(c);
        return (null == i || _ || f || null == l ? (null != i && !_ && s.Z.getChatOpen(i) ? r.Z.updateChatOpen(i, !1) : T.S.dispatch(S.CkL.SCROLLTO_PRESENT)) : u.Z.closeChannelSidebar(i), !1);
    }
};
function N(e) {
    if (null != e) {
        if (g.Z.isEditingAny(e)) return (i.Z.endEditMessage(e), !1);
        if (null != c.Z.getPendingReply(e)) return ((0, l.A6)(e), !1);
        if (null != _.Z.getStickerPreview(e, m.d.ChannelMessage)) return ((0, f.qB)(e, m.d.ChannelMessage), !1);
    }
}
function C(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        E.Z.getMessages(e).hasMoreAfter && (i.Z.jumpToPresent(e, S.AQB), (t = !0)),
        b.ZP.hasUnread(e) &&
            ((0, a.In)(e, {
                object: S.qAy.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: S.Qqv.ACK_MANUAL
            }),
            (t = !0)),
        (0, a.iV)(e),
        t
    );
}
