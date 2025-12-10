n.d(t, { f: () => C });
var r = n(475179),
    i = n(904245),
    a = n(45114),
    o = n(358221),
    s = n(728285),
    l = n(623292),
    c = n(807092),
    u = n(6025),
    d = n(897473),
    f = n(913663),
    p = n(268350),
    _ = n(433355),
    m = n(592125),
    h = n(703558),
    g = n(323873),
    E = n(375954),
    b = n(306680),
    y = n(944486),
    O = n(914010),
    v = n(574254),
    S = n(451478),
    I = n(585483),
    T = n(981631);
let C = {
    binds: ["esc", "shift+pagedown"],
    comboKeysBindGlobal: !0,
    action(e) {
        if (S.Z.isElementFullScreen()) return !1;
        if (I.S.hasSubscribers(T.CkL.CALL_DECLINE)) return I.S.dispatch(T.CkL.CALL_DECLINE), !1;
        if (v.Z.close()) return !1;
        if (I.S.hasSubscribers(T.CkL.MEDIA_MODAL_CLOSE)) return I.S.dispatch(T.CkL.MEDIA_MODAL_CLOSE), !1;
        let t = (0, s.AN)(e);
        if (null == t ? void 0 : t.hasSubscribers(T.CkL.POPOUT_CLOSE)) return t.dispatch(T.CkL.POPOUT_CLOSE), !1;
        if (I.S.hasSubscribers(T.CkL.CLOSE_GIF_PICKER)) return I.S.dispatch(T.CkL.CLOSE_GIF_PICKER), !1;
        if (I.S.hasSubscribers(T.CkL.MODAL_CLOSE)) return I.S.dispatch(T.CkL.MODAL_CLOSE), !1;
        if (I.S.hasSubscribers(T.CkL.SEARCH_RESULTS_CLOSE)) return I.S.dispatch(T.CkL.SEARCH_RESULTS_CLOSE), !1;
        if (null == t ? void 0 : t.hasSubscribers(T.CkL.POPOUT_CLOSE_AFTER_MODALS))
            return t.dispatch(T.CkL.POPOUT_CLOSE_AFTER_MODALS), !1;
        let n = O.Z.getGuildId(),
            i = y.Z.getChannelId(n),
            a = m.Z.getChannel(i),
            l =
                _.ZP.getSection(i, null == a ? void 0 : a.isDM()) === T.ULH.SIDEBAR_CHAT
                    ? _.ZP.getSidebarState(i)
                    : null,
            c =
                (null == l ? void 0 : l.type) === d.tI.VIEW_THREAD ||
                (null == l ? void 0 : l.type) === d.tI.VIEW_CHANNEL
                    ? l.channelId
                    : null;
        if (!1 === A(i) || !1 === A(c)) return !1;
        if (null != i && (null == l ? void 0 : l.type) === d.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(i), !1;
        let f = N(i),
            p = N(c);
        return (
            null == i || f || p || null == l
                ? null != i && !f && o.Z.getChatOpen(i)
                    ? r.Z.updateChatOpen(i, !1)
                    : I.S.dispatch(T.CkL.SCROLLTO_PRESENT)
                : u.Z.closeChannelSidebar(i),
            !1
        );
    },
};
function A(e) {
    if (null != e) {
        if (g.Z.isEditingAny(e)) return i.Z.endEditMessage(e), !1;
        if (null != c.Z.getPendingReply(e)) return (0, l.A6)(e), !1;
        if (null != f.Z.getStickerPreview(e, h.d.ChannelMessage)) return (0, p.qB)(e, h.d.ChannelMessage), !1;
    }
}
function N(e) {
    if (null == e) return !1;
    let t = !1;
    return (
        E.Z.getMessages(e).hasMoreAfter && (i.Z.jumpToPresent(e, T.AQB), (t = !0)),
        b.ZP.hasUnread(e) &&
            ((0, a.ack)(e, {
                object: T.qAy.MARK_CHANNEL_AS_READ_KEYBIND,
                objectType: T.AnalyticsObjectTypes.ACK_MANUAL,
            }),
            (t = !0)),
        (0, a.iV)(e),
        t
    );
}
