n.d(t, { f: () => E });
var r = n(475179),
    l = n(904245),
    i = n(45114),
    o = n(40851),
    a = n(358221),
    s = n(623292),
    c = n(807092),
    u = n(6025),
    d = n(897473),
    p = n(913663),
    f = n(268350),
    m = n(433355),
    g = n(592125),
    b = n(703558),
    O = n(323873),
    y = n(375954),
    h = n(306680),
    v = n(944486),
    j = n(914010),
    S = n(574254),
    P = n(451478),
    N = n(585483),
    I = n(981631);
let E = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (P.Z.isElementFullScreen()) return !1;
        if (N.S.hasSubscribers(I.CkL.CALL_DECLINE)) return N.S.dispatch(I.CkL.CALL_DECLINE), !1;
        if (S.Z.close()) return !1;
        if (N.S.hasSubscribers(I.CkL.MEDIA_MODAL_CLOSE)) return N.S.dispatch(I.CkL.MEDIA_MODAL_CLOSE), !1;
        let t = (0, o.AN)(e);
        if (null == t ? void 0 : t.hasSubscribers(I.CkL.POPOUT_CLOSE)) return t.dispatch(I.CkL.POPOUT_CLOSE), !1;
        if (N.S.hasSubscribers(I.CkL.CLOSE_GIF_PICKER)) return N.S.dispatch(I.CkL.CLOSE_GIF_PICKER), !1;
        if (N.S.hasSubscribers(I.CkL.MODAL_CLOSE)) return N.S.dispatch(I.CkL.MODAL_CLOSE), !1;
        if (N.S.hasSubscribers(I.CkL.SEARCH_RESULTS_CLOSE)) return N.S.dispatch(I.CkL.SEARCH_RESULTS_CLOSE), !1;
        if (null == t ? void 0 : t.hasSubscribers(I.CkL.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(I.CkL.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = j.Z.getGuildId(),
            l = v.Z.getChannelId(n),
            i = g.Z.getChannel(l),
            s = m.ZP.getSection(l, null == i ? void 0 : i.isDM()) === I.ULH.SIDEBAR_CHAT ? m.ZP.getSidebarState(l) : null,
            c = (null == s ? void 0 : s.type) === d.tI.VIEW_THREAD || (null == s ? void 0 : s.type) === d.tI.VIEW_CHANNEL ? s.channelId : null;
        if (!1 === Z(l) || !1 === Z(c)) return !1;
        if (null != l && (null == s ? void 0 : s.type) === d.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(l), !1;
        let p = x(l),
            f = x(c);
        return null == l || p || f || null == s ? (null != l && !p && a.Z.getChatOpen(l) ? r.Z.updateChatOpen(l, !1) : N.S.dispatch(I.CkL.SCROLLTO_PRESENT)) : u.Z.closeChannelSidebar(l), !1;
    }
};
function Z(e) {
    if (null != e) {
        if (O.Z.isEditingAny(e)) return l.Z.endEditMessage(e), !1;
        if (null != c.Z.getPendingReply(e)) return (0, s.A6)(e), !1;
        if (null != p.Z.getStickerPreview(e, b.d.ChannelMessage)) return (0, f.qB)(e, b.d.ChannelMessage), !1;
    }
}
function x(e) {
    if (null == e) return !1;
    let t = !1;
    return y.Z.getMessages(e).hasMoreAfter && (l.Z.jumpToPresent(e, I.AQB), (t = !0)), h.ZP.hasUnread(e) && ((0, i.In)(e), (t = !0)), (0, i.iV)(e), t;
}
