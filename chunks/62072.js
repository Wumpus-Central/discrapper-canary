n.d(t, { Z: () => Z });
var r = n(192379),
    i = n(904245),
    l = n(346610),
    o = n(868643),
    a = n(912332),
    s = n(41776),
    c = n(280845),
    u = n(665906),
    d = n(488131),
    p = n(695346),
    h = n(314897),
    f = n(592125),
    m = n(323873),
    g = n(271383),
    b = n(607744),
    _ = n(375954),
    C = n(496675),
    y = n(572004),
    x = n(585483),
    v = n(358085),
    j = n(709054),
    O = n(418476),
    E = n(901461),
    N = n(432376),
    I = n(996861),
    S = n(981631);
function P(e) {
    return C.Z.can(S.Plq.MANAGE_MESSAGES, e);
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
                    A = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    R = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    k = _.Z.getMessage(t, e),
                    M = f.Z.getChannel(t);
                if (null == k || null == M) return;
                let L = h.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        r && (P(M) || k.canDeleteOwnMessage(L)) && (n.preventDefault(), (0, I.$Z)(M, k, n));
                        break;
                    case 'c':
                        ((0, v.isMac)() ? w : A) && y.wS && (n.preventDefault(), (0, y.JG)(k.content));
                        break;
                    case 'e':
                        r && !M.isSystemDM() && (0, O.Z)(k, L) && (n.preventDefault(), (0, I.Hd)(M, k));
                        break;
                    case 'p':
                        (r || R) && !M.isSystemDM() && !(0, E.Z)(k) && (P(M) || M.isPrivate()) && (n.preventDefault(), (0, I.rY)(M, k, n));
                        break;
                    case '+':
                        (r || R) &&
                            (function (e) {
                                let t = null == e.guild_id || b.Z.canChatInGuild(e.guild_id),
                                    n = p.nc.getSetting(),
                                    { disableReactionCreates: r } = (0, N.Z)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && C.Z.can(S.Plq.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && s.Z.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && g.ZP.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, u.RG)(e)
                                    });
                                return !r && n;
                            })(M) &&
                            (n.preventDefault(), x.S.dispatchKeyed(S.LPv.TOGGLE_REACTION_POPOUT, k.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (r || R) && (0, c.o)(M, k) && (n.preventDefault(), (0, I.HH)(M, k, n));
                        break;
                    case 'f':
                        (r || R) &&
                            (0, l.WT)({ location: 'keyboard-shortcut' }, { autoTrackExposure: !1 }).canForwardMessages &&
                            (0, o.h)(k) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                message: k,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (r && (0, u.ki)(M, k)) n.preventDefault(), (0, d.R6)(M, k, 'Message Shortcut');
                        else if (k.hasFlag(S.iLy.HAS_THREAD)) {
                            let e = f.Z.getChannel(j.default.castMessageIdAsChannelId(k.id));
                            null != e && (r || R) && (n.preventDefault(), (0, d.ok)(e, R));
                        }
                        break;
                    case 'enter':
                        T && (n.preventDefault(), (0, I.B8)(M, k));
                        break;
                    case 'escape':
                        m.Z.isEditing(M.id, k.id) ? i.Z.endEditMessage(M.id) : x.S.dispatch(S.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
