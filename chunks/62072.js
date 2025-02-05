n.d(t, { Z: () => A });
var i = n(192379),
    l = n(904245),
    a = n(346610),
    r = n(868643),
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
    _ = n(607744),
    C = n(375954),
    x = n(496675),
    v = n(572004),
    E = n(585483),
    I = n(358085),
    b = n(709054),
    Z = n(418476),
    N = n(901461),
    T = n(432376),
    S = n(996861),
    j = n(981631);
function y(e) {
    return x.Z.can(j.Plq.MANAGE_MESSAGES, e);
}
let A = function (e, t, n) {
    let A = i.useRef(n);
    return (
        (A.current = n),
        i.useCallback(
            (n) => {
                if (!A.current || n.target !== n.currentTarget) return;
                let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    P = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    R = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    M = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    L = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    k = C.Z.getMessage(t, e),
                    O = m.Z.getChannel(t);
                if (null == k || null == O) return;
                let D = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        i && (y(O) || k.canDeleteOwnMessage(D)) && (n.preventDefault(), (0, S.$Z)(O, k, n));
                        break;
                    case 'c':
                        ((0, I.isMac)() ? M : R) && v.wS && (n.preventDefault(), (0, v.JG)(k.content));
                        break;
                    case 'e':
                        i && !O.isSystemDM() && (0, Z.Z)(k, D) && (n.preventDefault(), (0, S.Hd)(O, k));
                        break;
                    case 'p':
                        (i || L) && !O.isSystemDM() && !(0, N.Z)(k) && (y(O) || O.isPrivate()) && (n.preventDefault(), (0, S.rY)(O, k, n));
                        break;
                    case '+':
                        (i || L) &&
                            (function (e) {
                                let t = null == e.guild_id || _.Z.canChatInGuild(e.guild_id),
                                    n = h.nc.getSetting(),
                                    { disableReactionCreates: i } = (0, T.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && x.Z.can(j.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && g.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, d.RG)(e)
                                    });
                                return !i && n;
                            })(O) &&
                            (n.preventDefault(), E.S.dispatchKeyed(j.LPv.TOGGLE_REACTION_POPOUT, k.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (i || L) && (0, c.o)(O, k) && (n.preventDefault(), (0, S.HH)(O, k, n));
                        break;
                    case 'f':
                        (i || L) &&
                            (0, a.WT)({ location: 'keyboard-shortcut' }, { autoTrackExposure: !1 }).canForwardMessages &&
                            (0, r.h)(k) &&
                            (n.preventDefault(),
                            (0, s.l8)({
                                message: k,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (i && (0, d.ki)(O, k)) n.preventDefault(), (0, u.R6)(O, k, 'Message Shortcut');
                        else if (k.hasFlag(j.iLy.HAS_THREAD)) {
                            let e = m.Z.getChannel(b.default.castMessageIdAsChannelId(k.id));
                            null != e && (i || L) && (n.preventDefault(), (0, u.ok)(e, L));
                        }
                        break;
                    case 'enter':
                        P && (n.preventDefault(), (0, S.B8)(O, k));
                        break;
                    case 'escape':
                        f.Z.isEditing(O.id, k.id) ? l.Z.endEditMessage(O.id) : E.S.dispatch(j.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
