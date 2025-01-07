var i = n(192379),
    l = n(904245),
    r = n(346610),
    a = n(868643),
    s = n(912332),
    o = n(41776),
    c = n(280845),
    d = n(665906),
    u = n(488131),
    h = n(695346),
    p = n(314897),
    m = n(592125),
    f = n(323873),
    g = n(271383),
    C = n(607744),
    x = n(375954),
    v = n(496675),
    _ = n(572004),
    I = n(585483),
    E = n(358085),
    b = n(709054),
    Z = n(418476),
    N = n(901461),
    S = n(432376),
    T = n(996861),
    j = n(981631);
function A(e) {
    return v.Z.can(j.Plq.MANAGE_MESSAGES, e);
}
t.Z = function (e, t, n) {
    let y = i.useRef(n);
    return (
        (y.current = n),
        i.useCallback(
            (n) => {
                var i, P, M, R, L;
                if (!y.current || n.target !== n.currentTarget) return;
                let k = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    O = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    D = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    B = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    U = x.Z.getMessage(t, e),
                    H = m.Z.getChannel(t);
                if (null == U || null == H) return;
                let G = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        k && (A(H) || U.canDeleteOwnMessage(G)) && (n.preventDefault(), (0, T.$Z)(H, U, n));
                        break;
                    case 'c':
                        ((0, E.isMac)() ? w : D) && _.wS && (n.preventDefault(), (0, _.JG)(U.content));
                        break;
                    case 'e':
                        if (k) {
                            if (((i = G), (P = H), (M = U), !P.isSystemDM() && (0, Z.Z)(M, i))) n.preventDefault(), (0, T.Hd)(H, U);
                        }
                        break;
                    case 'p':
                        if (k || B) {
                            if (((R = H), (L = U), !R.isSystemDM() && !(0, N.Z)(L) && (A(R) || R.isPrivate()))) n.preventDefault(), (0, T.rY)(H, U, n);
                        }
                        break;
                    case '+':
                        (k || B) &&
                            (function (e) {
                                let t = null == e.guild_id || C.Z.canChatInGuild(e.guild_id),
                                    n = h.nc.getSetting(),
                                    { disableReactionCreates: i } = (0, S.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && v.Z.can(j.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && g.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, d.RG)(e)
                                    });
                                return !i && n;
                            })(H) &&
                            (n.preventDefault(), I.S.dispatchKeyed(j.LPv.TOGGLE_REACTION_POPOUT, U.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (k || B) && (0, c.o)(H, U) && (n.preventDefault(), (0, T.HH)(H, U, n));
                        break;
                    case 'f':
                        (k || B) &&
                            (0, r.WT)({ location: 'keyboard-shortcut' }, { autoTrackExposure: !1 }).canForwardMessages &&
                            (0, a.h)(U) &&
                            (n.preventDefault(),
                            (0, s.l8)({
                                message: U,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (k && (0, d.ki)(H, U)) n.preventDefault(), (0, u.R6)(H, U, 'Message Shortcut');
                        else if (U.hasFlag(j.iLy.HAS_THREAD)) {
                            let e = m.Z.getChannel(b.default.castMessageIdAsChannelId(U.id));
                            null != e && (k || B) && (n.preventDefault(), (0, u.ok)(e, B));
                        }
                        break;
                    case 'enter':
                        O && (n.preventDefault(), (0, T.B8)(H, U));
                        break;
                    case 'escape':
                        f.Z.isEditing(H.id, U.id) ? l.Z.endEditMessage(H.id) : I.S.dispatch(j.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
