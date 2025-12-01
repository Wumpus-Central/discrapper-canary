n.d(t, { Z: () => I });
var i = n(473749),
    r = n(904245),
    l = n(868643),
    a = n(912332),
    o = n(41776),
    s = n(280845),
    c = n(665906),
    u = n(488131),
    d = n(695346),
    p = n(314897),
    h = n(592125),
    f = n(323873),
    m = n(271383),
    g = n(607744),
    b = n(375954),
    y = n(496675),
    C = n(572004),
    v = n(585483),
    _ = n(358085),
    O = n(709054),
    x = n(418476),
    j = n(151007),
    E = n(432376),
    S = n(996861),
    P = n(981631);
let I = function (e, t, n) {
    let I = i.useRef(n);
    return (
        (I.current = n),
        i.useCallback(
            (n) => {
                if (!I.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    Z = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    T = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    N = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    A = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    w = b.Z.getMessage(t, e),
                    M = h.Z.getChannel(t);
                if (null == w || null == M) return;
                let R = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        i &&
                            (y.Z.can(P.Plq.MANAGE_MESSAGES, M) || w.canDeleteOwnMessage(R)) &&
                            (n.preventDefault(), (0, S.$Z)(M, w, n));
                        break;
                    case "c":
                        ((0, _.isMac)() ? N : T) && C.wS && (n.preventDefault(), (0, C.JG)(w.content));
                        break;
                    case "e":
                        i && !M.isSystemDM() && (0, x.Z)(w, R) && (n.preventDefault(), (0, S.Hd)(M, w));
                        break;
                    case "p":
                        (i || A) && (0, j.Z)(w, M) && (n.preventDefault(), (0, S.rY)(M, w, n));
                        break;
                    case "+":
                        (i || A) &&
                            (function (e) {
                                let t = null == e.guild_id || g.Z.canChatInGuild(e.guild_id),
                                    n = d.nc.getSetting(),
                                    { disableReactionCreates: i } = (0, E.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && y.Z.can(P.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && m.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.RG)(e),
                                    });
                                return !i && n;
                            })(M) &&
                            (n.preventDefault(),
                            v.S.dispatchKeyed(P.LPv.TOGGLE_REACTION_POPOUT, w.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (i || A) && (0, s.o)(M, w) && (n.preventDefault(), (0, S.HH)(M, w, n));
                        break;
                    case "f":
                        (i || A) &&
                            (0, l.h)(w) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                message: w,
                                source: "keyboard-shortcut",
                            }));
                        break;
                    case "t":
                        if (i && (0, c.ki)(M, w)) n.preventDefault(), (0, u.R6)(M, w, "Message Shortcut");
                        else if (w.hasFlag(P.iLy.HAS_THREAD)) {
                            let e = h.Z.getChannel(O.default.castMessageIdAsChannelId(w.id));
                            null != e && (i || A) && (n.preventDefault(), (0, u.ok)(e, A));
                        }
                        break;
                    case "enter":
                        Z && (n.preventDefault(), (0, S.B8)(M, w));
                        break;
                    case "escape":
                        f.Z.isEditing(M.id, w.id) ? r.Z.endEditMessage(M.id) : v.S.dispatch(P.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
