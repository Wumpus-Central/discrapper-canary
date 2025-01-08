e.d(t, {
    f: function () {
        return G;
    }
});
var i = e(513431),
    o = e(475179),
    r = e(904245),
    l = e(45114),
    d = e(40851),
    s = e(358221),
    u = e(623292),
    a = e(807092),
    c = e(6025),
    E = e(897473),
    C = e(913663),
    b = e(268350),
    A = e(433355),
    S = e(592125),
    p = e(703558),
    g = e(323873),
    f = e(375954),
    _ = e(306680),
    L = e(944486),
    O = e(914010),
    I = e(574254),
    T = e(451478),
    h = e(585483),
    N = e(981631);
let G = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(n) {
        if (T.Z.isElementFullScreen()) return !1;
        if (h.S.hasSubscribers(N.CkL.CALL_DECLINE)) return h.S.dispatch(N.CkL.CALL_DECLINE), !1;
        if (I.Z.close()) return !1;
        if (h.S.hasSubscribers(N.CkL.MEDIA_MODAL_CLOSE)) return h.S.dispatch(N.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(n.target)) {
            let t = (0, d.J5)(n.target);
            if (null == t ? void 0 : t.hasSubscribers(N.CkL.POPOUT_CLOSE)) return t.dispatch(N.CkL.POPOUT_CLOSE), !1;
        }
        if (h.S.hasSubscribers(N.CkL.CLOSE_GIF_PICKER)) return h.S.dispatch(N.CkL.CLOSE_GIF_PICKER), !1;
        if (h.S.hasSubscribers(N.CkL.MODAL_CLOSE)) return h.S.dispatch(N.CkL.MODAL_CLOSE), !1;
        if (h.S.hasSubscribers(N.CkL.SEARCH_RESULTS_CLOSE)) return h.S.dispatch(N.CkL.SEARCH_RESULTS_CLOSE), !1;
        let t = O.Z.getGuildId(),
            e = L.Z.getChannelId(t),
            r = S.Z.getChannel(e),
            l = A.ZP.getSection(e, null == r ? void 0 : r.isDM()) === N.ULH.SIDEBAR_CHAT ? A.ZP.getSidebarState(e) : null,
            u = (null == l ? void 0 : l.type) === E.tI.VIEW_THREAD || (null == l ? void 0 : l.type) === E.tI.VIEW_CHANNEL ? l.channelId : null;
        if (!1 === H(e) || !1 === H(u)) return !1;
        if (null != e && (null == l ? void 0 : l.type) === E.tI.CREATE_THREAD) return c.Z.closeChannelSidebar(e), !1;
        let a = R(e),
            C = R(u);
        return null == e || a || C || null == l ? (null != e && !a && s.Z.getChatOpen(e) ? (o.Z.updateChatOpen(e, !1), !1) : (h.S.dispatch(N.CkL.SCROLLTO_PRESENT), !1)) : (c.Z.closeChannelSidebar(e), !1);
    }
};
function H(n) {
    if (null != n) {
        if (g.Z.isEditingAny(n)) return r.Z.endEditMessage(n), !1;
        if (null != a.Z.getPendingReply(n)) return (0, u.A6)(n), !1;
        if (null != C.Z.getStickerPreview(n, p.d.ChannelMessage)) return (0, b.qB)(n, p.d.ChannelMessage), !1;
    }
}
function R(n) {
    if (null == n) return !1;
    let t = !1;
    return f.Z.getMessages(n).hasMoreAfter && (r.Z.jumpToPresent(n, N.AQB), (t = !0)), _.ZP.hasUnread(n) && ((0, l.In)(n), (t = !0)), (0, l.iV)(n), t;
}
