n.d(t, { Z: () => Z });
var r = n(73800),
    i = n(904245),
    l = n(868643),
    o = n(912332),
    a = n(41776),
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
    _ = n(496675),
    y = n(572004),
    C = n(585483),
    x = n(358085),
    v = n(709054),
    j = n(418476),
    O = n(901461),
    E = n(432376),
    I = n(996861),
    P = n(981631);
function S(e) {
    return _.Z.can(P.Plq.MANAGE_MESSAGES, e);
}
let Z = function (e, t, n) {
    let Z = r.useRef(n);
    return (
        (Z.current = n),
        r.useCallback(
            (n) => {
                if (!Z.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    N = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    T = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    A = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    w = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    R = b.Z.getMessage(t, e),
                    k = h.Z.getChannel(t);
                if (null == R || null == k) return;
                let M = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        r && (S(k) || R.canDeleteOwnMessage(M)) && (n.preventDefault(), (0, I.$Z)(k, R, n));
                        break;
                    case 'c':
                        ((0, x.isMac)() ? A : T) && y.wS && (n.preventDefault(), (0, y.JG)(R.content));
                        break;
                    case 'e':
                        r && !k.isSystemDM() && (0, j.Z)(R, M) && (n.preventDefault(), (0, I.Hd)(k, R));
                        break;
                    case 'p':
                        (r || w) && !k.isSystemDM() && !(0, O.Z)(R) && (S(k) || k.isPrivate()) && (n.preventDefault(), (0, I.rY)(k, R, n));
                        break;
                    case '+':
                        (r || w) &&
                            (function (e) {
                                let t = null == e.guild_id || g.Z.canChatInGuild(e.guild_id),
                                    n = d.nc.getSetting(),
                                    { disableReactionCreates: r } = (0, E.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && _.Z.can(P.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && a.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && m.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
                                    });
                                return !r && n;
                            })(k) &&
                            (n.preventDefault(), C.S.dispatchKeyed(P.LPv.TOGGLE_REACTION_POPOUT, R.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (r || w) && (0, s.o)(k, R) && (n.preventDefault(), (0, I.HH)(k, R, n));
                        break;
                    case 'f':
                        (r || w) &&
                            (0, l.h)(R) &&
                            (n.preventDefault(),
                            (0, o.l8)({
                                message: R,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (r && (0, c.ki)(k, R)) n.preventDefault(), (0, u.R6)(k, R, 'Message Shortcut');
                        else if (R.hasFlag(P.iLy.HAS_THREAD)) {
                            let e = h.Z.getChannel(v.default.castMessageIdAsChannelId(R.id));
                            null != e && (r || w) && (n.preventDefault(), (0, u.ok)(e, w));
                        }
                        break;
                    case 'enter':
                        N && (n.preventDefault(), (0, I.B8)(k, R));
                        break;
                    case 'escape':
                        f.Z.isEditing(k.id, R.id) ? i.Z.endEditMessage(k.id) : C.S.dispatch(P.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
