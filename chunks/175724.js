t.d(n, { f: () => T });
var i = t(374470),
    r = t(475179),
    s = t(904245),
    l = t(45114),
    o = t(40851),
    a = t(358221),
    d = t(623292),
    c = t(807092),
    u = t(6025),
    E = t(897473),
    p = t(913663),
    b = t(268350),
    C = t(433355),
    h = t(592125),
    g = t(703558),
    A = t(323873),
    S = t(375954),
    _ = t(306680),
    m = t(944486),
    I = t(914010),
    f = t(574254),
    L = t(451478),
    O = t(585483),
    N = t(981631);
let T = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (L.Z.isElementFullScreen()) return !1;
        if (O.S.hasSubscribers(N.CkL.CALL_DECLINE)) return O.S.dispatch(N.CkL.CALL_DECLINE), !1;
        if (f.Z.close()) return !1;
        if (O.S.hasSubscribers(N.CkL.MEDIA_MODAL_CLOSE)) return O.S.dispatch(N.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(e.target)) {
            let n = (0, o.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(N.CkL.POPOUT_CLOSE)) return n.dispatch(N.CkL.POPOUT_CLOSE), !1;
        }
        if (O.S.hasSubscribers(N.CkL.CLOSE_GIF_PICKER)) return O.S.dispatch(N.CkL.CLOSE_GIF_PICKER), !1;
        if (O.S.hasSubscribers(N.CkL.MODAL_CLOSE)) return O.S.dispatch(N.CkL.MODAL_CLOSE), !1;
        if (O.S.hasSubscribers(N.CkL.SEARCH_RESULTS_CLOSE)) return O.S.dispatch(N.CkL.SEARCH_RESULTS_CLOSE), !1;
        let n = I.Z.getGuildId(),
            t = m.Z.getChannelId(n),
            s = h.Z.getChannel(t),
            l = C.ZP.getSection(t, null == s ? void 0 : s.isDM()) === N.ULH.SIDEBAR_CHAT ? C.ZP.getSidebarState(t) : null,
            d = (null == l ? void 0 : l.type) === E.tI.VIEW_THREAD || (null == l ? void 0 : l.type) === E.tI.VIEW_CHANNEL ? l.channelId : null;
        if (!1 === G(t) || !1 === G(d)) return !1;
        if (null != t && (null == l ? void 0 : l.type) === E.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(t), !1;
        let c = R(t),
            p = R(d);
        return null == t || c || p || null == l ? (null != t && !c && a.Z.getChatOpen(t) ? r.Z.updateChatOpen(t, !1) : O.S.dispatch(N.CkL.SCROLLTO_PRESENT)) : u.Z.closeChannelSidebar(t), !1;
    }
};
function G(e) {
    if (null != e) {
        if (A.Z.isEditingAny(e)) return s.Z.endEditMessage(e), !1;
        if (null != c.Z.getPendingReply(e)) return (0, d.A6)(e), !1;
        if (null != p.Z.getStickerPreview(e, g.d.ChannelMessage)) return (0, b.qB)(e, g.d.ChannelMessage), !1;
    }
}
function R(e) {
    if (null == e) return !1;
    let n = !1;
    return S.Z.getMessages(e).hasMoreAfter && (s.Z.jumpToPresent(e, N.AQB), (n = !0)), _.ZP.hasUnread(e) && ((0, l.In)(e), (n = !0)), (0, l.iV)(e), n;
}
