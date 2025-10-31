n.d(t, { Z: () => I });
var r = n(647438),
    i = n(904245),
    l = n(868643),
    a = n(912332),
    o = n(41776),
    s = n(280845),
    c = n(665906),
    u = n(488131),
    d = n(695346),
    p = n(314897),
    f = n(592125),
    h = n(323873),
    m = n(271383),
    g = n(607744),
    b = n(375954),
    _ = n(496675),
    y = n(572004),
    C = n(585483),
    v = n(358085),
    O = n(709054),
    x = n(418476),
    E = n(151007),
    j = n(432376),
    S = n(996861),
    P = n(981631);
let I = function (e, t, n) {
    let I = r.useRef(n);
    return (
        (I.current = n),
        r.useCallback(
            (n) => {
                if (!I.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    Z = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    T = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    N = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    A = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    w = b.Z.getMessage(t, e),
                    M = f.Z.getChannel(t);
                if (null == w || null == M) return;
                let R = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        r &&
                            (_.Z.can(P.Plq.MANAGE_MESSAGES, M) || w.canDeleteOwnMessage(R)) &&
                            (n.preventDefault(), (0, S.$Z)(M, w, n));
                        break;
                    case "c":
                        ((0, v.isMac)() ? N : T) && y.wS && (n.preventDefault(), (0, y.JG)(w.content));
                        break;
                    case "e":
                        r && !M.isSystemDM() && (0, x.Z)(w, R) && (n.preventDefault(), (0, S.Hd)(M, w));
                        break;
                    case "p":
                        (r || A) && (0, E.Z)(w, M) && (n.preventDefault(), (0, S.rY)(M, w, n));
                        break;
                    case "+":
                        (r || A) &&
                            (function (e) {
                                let t = null == e.guild_id || g.Z.canChatInGuild(e.guild_id),
                                    n = d.nc.getSetting(),
                                    { disableReactionCreates: r } = (0, j.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && _.Z.can(P.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && m.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.RG)(e),
                                    });
                                return !r && n;
                            })(M) &&
                            (n.preventDefault(),
                            C.S.dispatchKeyed(P.LPv.TOGGLE_REACTION_POPOUT, w.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (r || A) && (0, s.o)(M, w) && (n.preventDefault(), (0, S.HH)(M, w, n));
                        break;
                    case "f":
                        (r || A) &&
                            (0, l.h)(w) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                message: w,
                                source: "keyboard-shortcut",
                            }));
                        break;
                    case "t":
                        if (r && (0, c.ki)(M, w)) n.preventDefault(), (0, u.R6)(M, w, "Message Shortcut");
                        else if (w.hasFlag(P.iLy.HAS_THREAD)) {
                            let e = f.Z.getChannel(O.default.castMessageIdAsChannelId(w.id));
                            null != e && (r || A) && (n.preventDefault(), (0, u.ok)(e, A));
                        }
                        break;
                    case "enter":
                        Z && (n.preventDefault(), (0, S.B8)(M, w));
                        break;
                    case "escape":
                        h.Z.isEditing(M.id, w.id) ? i.Z.endEditMessage(M.id) : C.S.dispatch(P.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
