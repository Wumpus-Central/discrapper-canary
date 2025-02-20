n.d(t, { f: () => T });
var r = n(374470),
    i = n(475179),
    s = n(904245),
    a = n(45114),
    l = n(40851),
    o = n(358221),
    c = n(623292),
    d = n(807092),
    u = n(6025),
    m = n(897473),
    g = n(913663),
    p = n(268350),
    h = n(433355),
    f = n(592125),
    b = n(703558),
    N = n(323873),
    x = n(375954),
    _ = n(306680),
    E = n(944486),
    j = n(914010),
    C = n(574254),
    O = n(451478),
    v = n(585483),
    S = n(981631);
let T = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (O.Z.isElementFullScreen()) return !1;
        if (v.S.hasSubscribers(S.CkL.CALL_DECLINE)) return v.S.dispatch(S.CkL.CALL_DECLINE), !1;
        if (C.Z.close()) return !1;
        if (v.S.hasSubscribers(S.CkL.MEDIA_MODAL_CLOSE)) return v.S.dispatch(S.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, r.k)(e.target)) {
            let t = (0, l.J5)(e.target);
            if (null == t ? void 0 : t.hasSubscribers(S.CkL.POPOUT_CLOSE)) return t.dispatch(S.CkL.POPOUT_CLOSE), !1;
        }
        if (v.S.hasSubscribers(S.CkL.CLOSE_GIF_PICKER)) return v.S.dispatch(S.CkL.CLOSE_GIF_PICKER), !1;
        if (v.S.hasSubscribers(S.CkL.MODAL_CLOSE)) return v.S.dispatch(S.CkL.MODAL_CLOSE), !1;
        if (v.S.hasSubscribers(S.CkL.SEARCH_RESULTS_CLOSE)) return v.S.dispatch(S.CkL.SEARCH_RESULTS_CLOSE), !1;
        let t = j.Z.getGuildId(),
            n = E.Z.getChannelId(t),
            s = f.Z.getChannel(n),
            a = h.ZP.getSection(n, null == s ? void 0 : s.isDM()) === S.ULH.SIDEBAR_CHAT ? h.ZP.getSidebarState(n) : null,
            c = (null == a ? void 0 : a.type) === m.tI.VIEW_THREAD || (null == a ? void 0 : a.type) === m.tI.VIEW_CHANNEL ? a.channelId : null;
        if (!1 === I(n) || !1 === I(c)) return !1;
        if (null != n && (null == a ? void 0 : a.type) === m.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(n), !1;
        let d = y(n),
            g = y(c);
        return null == n || d || g || null == a ? (null != n && !d && o.Z.getChatOpen(n) ? i.Z.updateChatOpen(n, !1) : v.S.dispatch(S.CkL.SCROLLTO_PRESENT)) : u.Z.closeChannelSidebar(n), !1;
    }
};
function I(e) {
    if (null != e) {
        if (N.Z.isEditingAny(e)) return s.Z.endEditMessage(e), !1;
        if (null != d.Z.getPendingReply(e)) return (0, c.A6)(e), !1;
        if (null != g.Z.getStickerPreview(e, b.d.ChannelMessage)) return (0, p.qB)(e, b.d.ChannelMessage), !1;
    }
}
function y(e) {
    if (null == e) return !1;
    let t = !1;
    return x.Z.getMessages(e).hasMoreAfter && (s.Z.jumpToPresent(e, S.AQB), (t = !0)), _.ZP.hasUnread(e) && ((0, a.In)(e), (t = !0)), (0, a.iV)(e), t;
}
