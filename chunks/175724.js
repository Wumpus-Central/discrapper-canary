n.d(t, { f: () => S });
var r = n(475179),
    i = n(904245),
    s = n(45114),
    a = n(40851),
    l = n(358221),
    o = n(623292),
    c = n(807092),
    d = n(6025),
    u = n(897473),
    m = n(913663),
    g = n(268350),
    p = n(433355),
    h = n(592125),
    f = n(703558),
    x = n(323873),
    N = n(375954),
    b = n(306680),
    _ = n(944486),
    E = n(914010),
    j = n(574254),
    C = n(451478),
    O = n(585483),
    v = n(981631);
let S = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (C.Z.isElementFullScreen()) return !1;
        if (O.S.hasSubscribers(v.CkL.CALL_DECLINE)) return O.S.dispatch(v.CkL.CALL_DECLINE), !1;
        if (j.Z.close()) return !1;
        if (O.S.hasSubscribers(v.CkL.MEDIA_MODAL_CLOSE)) return O.S.dispatch(v.CkL.MEDIA_MODAL_CLOSE), !1;
        let t = (0, a.AN)(e);
        if (null == t ? void 0 : t.hasSubscribers(v.CkL.POPOUT_CLOSE)) return t.dispatch(v.CkL.POPOUT_CLOSE), !1;
        if (O.S.hasSubscribers(v.CkL.CLOSE_GIF_PICKER)) return O.S.dispatch(v.CkL.CLOSE_GIF_PICKER), !1;
        if (O.S.hasSubscribers(v.CkL.MODAL_CLOSE)) return O.S.dispatch(v.CkL.MODAL_CLOSE), !1;
        if (O.S.hasSubscribers(v.CkL.SEARCH_RESULTS_CLOSE)) return O.S.dispatch(v.CkL.SEARCH_RESULTS_CLOSE), !1;
        if (null == t ? void 0 : t.hasSubscribers(v.CkL.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(v.CkL.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = E.Z.getGuildId(),
            i = _.Z.getChannelId(n),
            s = h.Z.getChannel(i),
            o = p.ZP.getSection(i, null == s ? void 0 : s.isDM()) === v.ULH.SIDEBAR_CHAT ? p.ZP.getSidebarState(i) : null,
            c = (null == o ? void 0 : o.type) === u.tI.VIEW_THREAD || (null == o ? void 0 : o.type) === u.tI.VIEW_CHANNEL ? o.channelId : null;
        if (!1 === T(i) || !1 === T(c)) return !1;
        if (null != i && (null == o ? void 0 : o.type) === u.tI.CREATE_THREAD) return d.Z.closeChannelSidebar(i), !1;
        let m = I(i),
            g = I(c);
        return null == i || m || g || null == o ? (null != i && !m && l.Z.getChatOpen(i) ? r.Z.updateChatOpen(i, !1) : O.S.dispatch(v.CkL.SCROLLTO_PRESENT)) : d.Z.closeChannelSidebar(i), !1;
    }
};
function T(e) {
    if (null != e) {
        if (x.Z.isEditingAny(e)) return i.Z.endEditMessage(e), !1;
        if (null != c.Z.getPendingReply(e)) return (0, o.A6)(e), !1;
        if (null != m.Z.getStickerPreview(e, f.d.ChannelMessage)) return (0, g.qB)(e, f.d.ChannelMessage), !1;
    }
}
function I(e) {
    if (null == e) return !1;
    let t = !1;
    return N.Z.getMessages(e).hasMoreAfter && (i.Z.jumpToPresent(e, v.AQB), (t = !0)), b.ZP.hasUnread(e) && ((0, s.In)(e), (t = !0)), (0, s.iV)(e), t;
}
