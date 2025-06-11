n.d(t, { f: () => P });
var r = n(475179),
    i = n(904245),
    l = n(45114),
    a = n(40851),
    o = n(358221),
    s = n(623292),
    c = n(807092),
    u = n(6025),
    d = n(897473),
    f = n(913663),
    p = n(268350),
    m = n(433355),
    g = n(592125),
    b = n(703558),
    _ = n(323873),
    v = n(375954),
    h = n(306680),
    y = n(944486),
    O = n(914010),
    j = n(574254),
    S = n(451478),
    x = n(585483),
    I = n(981631);
let P = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (S.Z.isElementFullScreen()) return !1;
        if (x.S.hasSubscribers(I.CkL.CALL_DECLINE)) return x.S.dispatch(I.CkL.CALL_DECLINE), !1;
        if (j.Z.close()) return !1;
        if (x.S.hasSubscribers(I.CkL.MEDIA_MODAL_CLOSE)) return x.S.dispatch(I.CkL.MEDIA_MODAL_CLOSE), !1;
        let t = (0, a.AN)(e);
        if (null == t ? void 0 : t.hasSubscribers(I.CkL.POPOUT_CLOSE)) return t.dispatch(I.CkL.POPOUT_CLOSE), !1;
        if (x.S.hasSubscribers(I.CkL.CLOSE_GIF_PICKER)) return x.S.dispatch(I.CkL.CLOSE_GIF_PICKER), !1;
        if (x.S.hasSubscribers(I.CkL.MODAL_CLOSE)) return x.S.dispatch(I.CkL.MODAL_CLOSE), !1;
        if (x.S.hasSubscribers(I.CkL.SEARCH_RESULTS_CLOSE)) return x.S.dispatch(I.CkL.SEARCH_RESULTS_CLOSE), !1;
        if (null == t ? void 0 : t.hasSubscribers(I.CkL.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(I.CkL.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = O.Z.getGuildId(),
            i = y.Z.getChannelId(n),
            l = g.Z.getChannel(i),
            s = m.ZP.getSection(i, null == l ? void 0 : l.isDM()) === I.ULH.SIDEBAR_CHAT ? m.ZP.getSidebarState(i) : null,
            c = (null == s ? void 0 : s.type) === d.tI.VIEW_THREAD || (null == s ? void 0 : s.type) === d.tI.VIEW_CHANNEL ? s.channelId : null;
        if (!1 === C(i) || !1 === C(c)) return !1;
        if (null != i && (null == s ? void 0 : s.type) === d.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(i), !1;
        let f = E(i),
            p = E(c);
        return null == i || f || p || null == s ? (null != i && !f && o.Z.getChatOpen(i) ? r.Z.updateChatOpen(i, !1) : x.S.dispatch(I.CkL.SCROLLTO_PRESENT)) : u.Z.closeChannelSidebar(i), !1;
    }
};
function C(e) {
    if (null != e) {
        if (_.Z.isEditingAny(e)) return i.Z.endEditMessage(e), !1;
        if (null != c.Z.getPendingReply(e)) return (0, s.A6)(e), !1;
        if (null != f.Z.getStickerPreview(e, b.d.ChannelMessage)) return (0, p.qB)(e, b.d.ChannelMessage), !1;
    }
}
function E(e) {
    if (null == e) return !1;
    let t = !1;
    return v.Z.getMessages(e).hasMoreAfter && (i.Z.jumpToPresent(e, I.AQB), (t = !0)), h.ZP.hasUnread(e) && ((0, l.In)(e), (t = !0)), (0, l.iV)(e), t;
}
