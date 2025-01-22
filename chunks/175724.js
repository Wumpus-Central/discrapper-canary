n.d(t, {
    f: function () {
        return A;
    }
});
var i = n(513431),
    r = n(475179),
    s = n(904245),
    a = n(45114),
    l = n(40851),
    o = n(358221),
    c = n(623292),
    d = n(807092),
    u = n(6025),
    m = n(897473),
    g = n(913663),
    h = n(268350),
    p = n(433355),
    x = n(592125),
    f = n(703558),
    E = n(323873),
    _ = n(375954),
    C = n(306680),
    T = n(944486),
    S = n(914010),
    b = n(574254),
    I = n(451478),
    N = n(585483),
    v = n(981631);
let A = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (I.Z.isElementFullScreen()) return !1;
        if (N.S.hasSubscribers(v.CkL.CALL_DECLINE)) return N.S.dispatch(v.CkL.CALL_DECLINE), !1;
        if (b.Z.close()) return !1;
        if (N.S.hasSubscribers(v.CkL.MEDIA_MODAL_CLOSE)) return N.S.dispatch(v.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(e.target)) {
            let t = (0, l.J5)(e.target);
            if (null == t ? void 0 : t.hasSubscribers(v.CkL.POPOUT_CLOSE)) return t.dispatch(v.CkL.POPOUT_CLOSE), !1;
        }
        if (N.S.hasSubscribers(v.CkL.CLOSE_GIF_PICKER)) return N.S.dispatch(v.CkL.CLOSE_GIF_PICKER), !1;
        if (N.S.hasSubscribers(v.CkL.MODAL_CLOSE)) return N.S.dispatch(v.CkL.MODAL_CLOSE), !1;
        if (N.S.hasSubscribers(v.CkL.SEARCH_RESULTS_CLOSE)) return N.S.dispatch(v.CkL.SEARCH_RESULTS_CLOSE), !1;
        let t = S.Z.getGuildId(),
            n = T.Z.getChannelId(t),
            s = x.Z.getChannel(n),
            a = p.ZP.getSection(n, null == s ? void 0 : s.isDM()) === v.ULH.SIDEBAR_CHAT ? p.ZP.getSidebarState(n) : null,
            c = (null == a ? void 0 : a.type) === m.tI.VIEW_THREAD || (null == a ? void 0 : a.type) === m.tI.VIEW_CHANNEL ? a.channelId : null;
        if (!1 === j(n) || !1 === j(c)) return !1;
        if (null != n && (null == a ? void 0 : a.type) === m.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(n), !1;
        let d = O(n),
            g = O(c);
        return null == n || d || g || null == a ? (null != n && !d && o.Z.getChatOpen(n) ? (r.Z.updateChatOpen(n, !1), !1) : (N.S.dispatch(v.CkL.SCROLLTO_PRESENT), !1)) : (u.Z.closeChannelSidebar(n), !1);
    }
};
function j(e) {
    if (null != e) {
        if (E.Z.isEditingAny(e)) return s.Z.endEditMessage(e), !1;
        if (null != d.Z.getPendingReply(e)) return (0, c.A6)(e), !1;
        if (null != g.Z.getStickerPreview(e, f.d.ChannelMessage)) return (0, h.qB)(e, f.d.ChannelMessage), !1;
    }
}
function O(e) {
    if (null == e) return !1;
    let t = !1;
    return _.Z.getMessages(e).hasMoreAfter && (s.Z.jumpToPresent(e, v.AQB), (t = !0)), C.ZP.hasUnread(e) && ((0, a.In)(e), (t = !0)), (0, a.iV)(e), t;
}
