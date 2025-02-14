n.d(t, { f: () => j });
var i = n(374470),
    s = n(475179),
    r = n(904245),
    l = n(45114),
    a = n(40851),
    o = n(358221),
    c = n(623292),
    d = n(807092),
    u = n(6025),
    m = n(897473),
    h = n(913663),
    g = n(268350),
    x = n(433355),
    _ = n(592125),
    p = n(703558),
    E = n(323873),
    C = n(375954),
    f = n(306680),
    T = n(944486),
    N = n(914010),
    S = n(574254),
    I = n(451478),
    b = n(585483),
    v = n(981631);
let j = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (I.Z.isElementFullScreen()) return !1;
        if (b.S.hasSubscribers(v.CkL.CALL_DECLINE)) return b.S.dispatch(v.CkL.CALL_DECLINE), !1;
        if (S.Z.close()) return !1;
        if (b.S.hasSubscribers(v.CkL.MEDIA_MODAL_CLOSE)) return b.S.dispatch(v.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(e.target)) {
            let t = (0, a.J5)(e.target);
            if (null == t ? void 0 : t.hasSubscribers(v.CkL.POPOUT_CLOSE)) return t.dispatch(v.CkL.POPOUT_CLOSE), !1;
        }
        if (b.S.hasSubscribers(v.CkL.CLOSE_GIF_PICKER)) return b.S.dispatch(v.CkL.CLOSE_GIF_PICKER), !1;
        if (b.S.hasSubscribers(v.CkL.MODAL_CLOSE)) return b.S.dispatch(v.CkL.MODAL_CLOSE), !1;
        if (b.S.hasSubscribers(v.CkL.SEARCH_RESULTS_CLOSE)) return b.S.dispatch(v.CkL.SEARCH_RESULTS_CLOSE), !1;
        let t = N.Z.getGuildId(),
            n = T.Z.getChannelId(t),
            r = _.Z.getChannel(n),
            l = x.ZP.getSection(n, null == r ? void 0 : r.isDM()) === v.ULH.SIDEBAR_CHAT ? x.ZP.getSidebarState(n) : null,
            c = (null == l ? void 0 : l.type) === m.tI.VIEW_THREAD || (null == l ? void 0 : l.type) === m.tI.VIEW_CHANNEL ? l.channelId : null;
        if (!1 === A(n) || !1 === A(c)) return !1;
        if (null != n && (null == l ? void 0 : l.type) === m.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(n), !1;
        let d = O(n),
            h = O(c);
        return null == n || d || h || null == l ? (null != n && !d && o.Z.getChatOpen(n) ? s.Z.updateChatOpen(n, !1) : b.S.dispatch(v.CkL.SCROLLTO_PRESENT)) : u.Z.closeChannelSidebar(n), !1;
    }
};
function A(e) {
    if (null != e) {
        if (E.Z.isEditingAny(e)) return r.Z.endEditMessage(e), !1;
        if (null != d.Z.getPendingReply(e)) return (0, c.A6)(e), !1;
        if (null != h.Z.getStickerPreview(e, p.d.ChannelMessage)) return (0, g.qB)(e, p.d.ChannelMessage), !1;
    }
}
function O(e) {
    if (null == e) return !1;
    let t = !1;
    return C.Z.getMessages(e).hasMoreAfter && (r.Z.jumpToPresent(e, v.AQB), (t = !0)), f.ZP.hasUnread(e) && ((0, l.In)(e), (t = !0)), (0, l.iV)(e), t;
}
