n.d(t, { Z: () => Z });
var r = n(73800),
    i = n(904245),
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
    _ = n(496675),
    y = n(572004),
    C = n(585483),
    x = n(358085),
    v = n(709054),
    O = n(418476),
    j = n(901461),
    E = n(432376),
    S = n(996861),
    I = n(981631);
function P(e) {
    return _.Z.can(I.Plq.MANAGE_MESSAGES, e);
}
let Z = function (e, t, n) {
    let Z = r.useRef(n);
    return (
        (Z.current = n),
        r.useCallback(
            (n) => {
                if (!Z.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    T = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    N = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    A = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    w = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    R = b.Z.getMessage(t, e),
                    M = h.Z.getChannel(t);
                if (null == R || null == M) return;
                let D = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        r && (P(M) || R.canDeleteOwnMessage(D)) && (n.preventDefault(), (0, S.$Z)(M, R, n));
                        break;
                    case 'c':
                        ((0, x.isMac)() ? A : N) && y.wS && (n.preventDefault(), (0, y.JG)(R.content));
                        break;
                    case 'e':
                        r && !M.isSystemDM() && (0, O.Z)(R, D) && (n.preventDefault(), (0, S.Hd)(M, R));
                        break;
                    case 'p':
                        (r || w) && !M.isSystemDM() && !(0, j.Z)(R) && (P(M) || M.isPrivate()) && (n.preventDefault(), (0, S.rY)(M, R, n));
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
                                        canAddNewReactions: t && _.Z.can(I.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && m.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
                                    });
                                return !r && n;
                            })(M) &&
                            (n.preventDefault(), C.S.dispatchKeyed(I.LPv.TOGGLE_REACTION_POPOUT, R.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (r || w) && (0, s.o)(M, R) && (n.preventDefault(), (0, S.HH)(M, R, n));
                        break;
                    case 'f':
                        (r || w) &&
                            (0, l.h)(R) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                message: R,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (r && (0, c.ki)(M, R)) (n.preventDefault(), (0, u.R6)(M, R, 'Message Shortcut'));
                        else if (R.hasFlag(I.iLy.HAS_THREAD)) {
                            let e = h.Z.getChannel(v.default.castMessageIdAsChannelId(R.id));
                            null != e && (r || w) && (n.preventDefault(), (0, u.ok)(e, w));
                        }
                        break;
                    case 'enter':
                        T && (n.preventDefault(), (0, S.B8)(M, R));
                        break;
                    case 'escape':
                        f.Z.isEditing(M.id, R.id) ? i.Z.endEditMessage(M.id) : C.S.dispatch(I.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
