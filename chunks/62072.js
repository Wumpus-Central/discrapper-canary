n.d(t, { Z: () => I });
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
    j = n(418476),
    O = n(151007),
    E = n(432376),
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
                    N = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    T = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    A = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    w = b.Z.getMessage(t, e),
                    R = h.Z.getChannel(t);
                if (null == w || null == R) return;
                let M = p.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        r && (_.Z.can(P.Plq.MANAGE_MESSAGES, R) || w.canDeleteOwnMessage(M)) && (n.preventDefault(), (0, S.$Z)(R, w, n));
                        break;
                    case 'c':
                        ((0, x.isMac)() ? T : N) && y.wS && (n.preventDefault(), (0, y.JG)(w.content));
                        break;
                    case 'e':
                        r && !R.isSystemDM() && (0, j.Z)(w, M) && (n.preventDefault(), (0, S.Hd)(R, w));
                        break;
                    case 'p':
                        (r || A) && (0, O.Z)(w, R) && (n.preventDefault(), (0, S.rY)(R, w, n));
                        break;
                    case '+':
                        (r || A) &&
                            (function (e) {
                                let t = null == e.guild_id || g.Z.canChatInGuild(e.guild_id),
                                    n = d.nc.getSetting(),
                                    { disableReactionCreates: r } = (0, E.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && _.Z.can(P.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && m.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
                                    });
                                return !r && n;
                            })(R) &&
                            (n.preventDefault(), C.S.dispatchKeyed(P.LPv.TOGGLE_REACTION_POPOUT, w.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (r || A) && (0, s.o)(R, w) && (n.preventDefault(), (0, S.HH)(R, w, n));
                        break;
                    case 'f':
                        (r || A) &&
                            (0, l.h)(w) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                message: w,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (r && (0, c.ki)(R, w)) (n.preventDefault(), (0, u.R6)(R, w, 'Message Shortcut'));
                        else if (w.hasFlag(P.iLy.HAS_THREAD)) {
                            let e = h.Z.getChannel(v.default.castMessageIdAsChannelId(w.id));
                            null != e && (r || A) && (n.preventDefault(), (0, u.ok)(e, A));
                        }
                        break;
                    case 'enter':
                        Z && (n.preventDefault(), (0, S.B8)(R, w));
                        break;
                    case 'escape':
                        f.Z.isEditing(R.id, w.id) ? i.Z.endEditMessage(R.id) : C.S.dispatch(P.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
