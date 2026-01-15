n.d(t, { Z: () => N });
var r = n(473749),
    i = n(904245),
    l = n(868643),
    a = n(912332),
    o = n(41776),
    s = n(280845),
    c = n(665906),
    u = n(488131),
    d = n(196051),
    p = n(441729),
    f = n(695346),
    h = n(314897),
    g = n(592125),
    m = n(323873),
    b = n(271383),
    y = n(607744),
    v = n(375954),
    O = n(496675),
    j = n(572004),
    x = n(585483),
    C = n(358085),
    E = n(709054),
    S = n(418476),
    _ = n(151007),
    I = n(432376),
    P = n(996861),
    Z = n(981631);
let N = function (e, t, n) {
    let N = r.useRef(n);
    return (
        (N.current = n),
        r.useCallback(
            (n) => {
                if (!N.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    T = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    A = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    R = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    D = v.Z.getMessage(t, e),
                    M = g.Z.getChannel(t);
                if (null == D || null == M) return;
                let k = h.default.getId();
                switch (n.key.toLowerCase()) {
                    case "backspace":
                        r &&
                            (O.Z.can(Z.Plq.MANAGE_MESSAGES, M) || D.canDeleteOwnMessage(k)) &&
                            (n.preventDefault(), (0, P.$Z)(M, D, n));
                        break;
                    case "c":
                        ((0, C.isMac)() ? w : A) && j.wS && (n.preventDefault(), (0, j.JG)(D.content));
                        break;
                    case "e":
                        r && !M.isSystemDM() && (0, S.Z)(D, k) && (n.preventDefault(), (0, P.Hd)(M, D));
                        break;
                    case "p":
                        (r || R) && (0, _.Z)(D, M) && (n.preventDefault(), (0, P.rY)(M, D, n));
                        break;
                    case "+":
                        (r || R) &&
                            (function (e) {
                                let t = null == e.guild_id || y.Z.canChatInGuild(e.guild_id),
                                    n = f.nc.getSetting(),
                                    { disableReactionCreates: r } = (0, I.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && O.Z.can(Z.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && b.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.RG)(e),
                                    });
                                return !r && n;
                            })(M) &&
                            (n.preventDefault(),
                            x.S.dispatchKeyed(Z.LPv.TOGGLE_REACTION_POPOUT, D.id, { emojiPicker: !0 }));
                        break;
                    case "r":
                        (r || R) && (0, s.o)(M, D) && (n.preventDefault(), (0, P.HH)(M, D, n));
                        break;
                    case "f":
                        (r || R) &&
                            (0, l.h)(D) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                message: D,
                                source: "keyboard-shortcut",
                            }));
                        break;
                    case "s":
                        r &&
                            "" !== D.content &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            p.Z.isSpeakingMessage(t, e) ? (0, d.NB)() : (0, d.LA)(M, D));
                        break;
                    case "t":
                        if (r && (0, c.ki)(M, D)) n.preventDefault(), (0, u.R6)(M, D, "Message Shortcut");
                        else if (D.hasFlag(Z.iLy.HAS_THREAD)) {
                            let e = g.Z.getChannel(E.default.castMessageIdAsChannelId(D.id));
                            null != e && (r || R) && (n.preventDefault(), (0, u.ok)(e, R));
                        }
                        break;
                    case "enter":
                        T && (n.preventDefault(), (0, P.B8)(M, D));
                        break;
                    case "escape":
                        m.Z.isEditing(M.id, D.id) ? i.Z.endEditMessage(M.id) : x.S.dispatch(Z.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t],
        )
    );
};
