n.d(t, { Z: () => S });
var r = n(192379),
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
    C = n(572004),
    y = n(585483),
    x = n(358085),
    v = n(709054),
    j = n(418476),
    O = n(901461),
    E = n(432376),
    N = n(996861),
    I = n(981631);
function P(e) {
    return _.Z.can(I.Plq.MANAGE_MESSAGES, e);
}
let S = function (e, t, n) {
    let S = r.useRef(n);
    return (
        (S.current = n),
        r.useCallback(
            (n) => {
                if (!S.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    Z = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    T = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    A = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    w = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    R = b.Z.getMessage(t, e),
                    k = h.Z.getChannel(t);
                if (null == R || null == k) return;
                let M = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        r && (P(k) || R.canDeleteOwnMessage(M)) && (n.preventDefault(), (0, N.$Z)(k, R, n));
                        break;
                    case 'c':
                        ((0, x.isMac)() ? A : T) && C.wS && (n.preventDefault(), (0, C.JG)(R.content));
                        break;
                    case 'e':
                        r && !k.isSystemDM() && (0, j.Z)(R, M) && (n.preventDefault(), (0, N.Hd)(k, R));
                        break;
                    case 'p':
                        (r || w) && !k.isSystemDM() && !(0, O.Z)(R) && (P(k) || k.isPrivate()) && (n.preventDefault(), (0, N.rY)(k, R, n));
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
                                        isLurking: null != e.guild_id && a.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && m.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
                                    });
                                return !r && n;
                            })(k) &&
                            (n.preventDefault(), y.S.dispatchKeyed(I.LPv.TOGGLE_REACTION_POPOUT, R.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (r || w) && (0, s.o)(k, R) && (n.preventDefault(), (0, N.HH)(k, R, n));
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
                        else if (R.hasFlag(I.iLy.HAS_THREAD)) {
                            let e = h.Z.getChannel(v.default.castMessageIdAsChannelId(R.id));
                            null != e && (r || w) && (n.preventDefault(), (0, u.ok)(e, w));
                        }
                        break;
                    case 'enter':
                        Z && (n.preventDefault(), (0, N.B8)(k, R));
                        break;
                    case 'escape':
                        f.Z.isEditing(k.id, R.id) ? i.Z.endEditMessage(k.id) : y.S.dispatch(I.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
