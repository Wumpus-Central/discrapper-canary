n.d(t, { f: () => I });
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
    O = n(703558),
    b = n(323873),
    y = n(375954),
    h = n(306680),
    v = n(944486),
    j = n(914010),
    S = n(574254),
    P = n(451478),
    N = n(585483),
    E = n(981631);
let I = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (P.Z.isElementFullScreen()) return !1;
        if (N.S.hasSubscribers(E.CkL.CALL_DECLINE)) return N.S.dispatch(E.CkL.CALL_DECLINE), !1;
        if (S.Z.close()) return !1;
        if (N.S.hasSubscribers(E.CkL.MEDIA_MODAL_CLOSE)) return N.S.dispatch(E.CkL.MEDIA_MODAL_CLOSE), !1;
        let t = (0, o.AN)(e);
        if (null == t ? void 0 : t.hasSubscribers(E.CkL.POPOUT_CLOSE)) return t.dispatch(E.CkL.POPOUT_CLOSE), !1;
        if (N.S.hasSubscribers(E.CkL.CLOSE_GIF_PICKER)) return N.S.dispatch(E.CkL.CLOSE_GIF_PICKER), !1;
        if (N.S.hasSubscribers(E.CkL.MODAL_CLOSE)) return N.S.dispatch(E.CkL.MODAL_CLOSE), !1;
        if (N.S.hasSubscribers(E.CkL.SEARCH_RESULTS_CLOSE)) return N.S.dispatch(E.CkL.SEARCH_RESULTS_CLOSE), !1;
        if (null == t ? void 0 : t.hasSubscribers(E.CkL.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(E.CkL.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = j.Z.getGuildId(),
            l = v.Z.getChannelId(n),
            i = g.Z.getChannel(l),
            s = m.ZP.getSection(l, null == i ? void 0 : i.isDM()) === E.ULH.SIDEBAR_CHAT ? m.ZP.getSidebarState(l) : null,
            c = (null == s ? void 0 : s.type) === d.tI.VIEW_THREAD || (null == s ? void 0 : s.type) === d.tI.VIEW_CHANNEL ? s.channelId : null;
        if (!1 === Z(l) || !1 === Z(c)) return !1;
        if (null != l && (null == s ? void 0 : s.type) === d.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(l), !1;
        let p = x(l),
            f = x(c);
        return null == l || p || f || null == s ? (null != l && !p && a.Z.getChatOpen(l) ? r.Z.updateChatOpen(l, !1) : N.S.dispatch(E.CkL.SCROLLTO_PRESENT)) : u.Z.closeChannelSidebar(l), !1;
    }
};
function Z(e) {
    if (null != e) {
        if (b.Z.isEditingAny(e)) return l.Z.endEditMessage(e), !1;
        if (null != c.Z.getPendingReply(e)) return (0, s.A6)(e), !1;
        if (null != p.Z.getStickerPreview(e, O.d.ChannelMessage)) return (0, f.qB)(e, O.d.ChannelMessage), !1;
    }
}
function x(e) {
    if (null == e) return !1;
    let t = !1;
    return y.Z.getMessages(e).hasMoreAfter && (l.Z.jumpToPresent(e, E.AQB), (t = !0)), h.ZP.hasUnread(e) && ((0, i.In)(e), (t = !0)), (0, i.iV)(e), t;
}
