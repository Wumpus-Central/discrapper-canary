n.d(t, { Z: () => w });
var r = n(73800),
    i = n(904245),
    o = n(868643),
    a = n(912332),
    s = n(41776),
    l = n(280845),
    c = n(665906),
    u = n(488131),
    d = n(695346),
    f = n(314897),
    _ = n(592125),
    p = n(323873),
    h = n(271383),
    m = n(607744),
    g = n(375954),
    E = n(496675),
    b = n(572004),
    y = n(585483),
    O = n(358085),
    v = n(709054),
    I = n(418476),
    T = n(151007),
    S = n(432376),
    A = n(996861),
    N = n(981631);
function C(e) {
    return E.Z.can(N.Plq.MANAGE_MESSAGES, e);
}
function R(e, t, n) {
    return !t.isSystemDM() && (0, I.Z)(n, e);
}
function P(e) {
    let t = null == e.guild_id || m.Z.canChatInGuild(e.guild_id),
        n = d.nc.getSetting(),
        { disableReactionCreates: r } = (0, S.Z)({
            channel: e,
            canChat: t,
            renderReactions: n,
            canAddNewReactions: t && E.Z.can(N.Plq.ADD_REACTIONS, e),
            isLurking: null != e.guild_id && s.Z.isLurking(e.guild_id),
            isGuest: null != e.guild_id && h.ZP.isCurrentUserGuest(e.guild_id),
            isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
        });
    return !r && n;
}
let w = function (e, t, n) {
    let s = r.useRef(n);
    return (
        (s.current = n),
        r.useCallback(
            (n) => {
                if (!s.current || n.target !== n.currentTarget) return;
                let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                    d = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                    h = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                    m = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                    E = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                    I = g.Z.getMessage(t, e),
                    S = _.Z.getChannel(t);
                if (null == I || null == S) return;
                let w = f.default.getId();
                switch (n.key.toLowerCase()) {
                    case 'backspace':
                        r && (C(S) || I.canDeleteOwnMessage(w)) && (n.preventDefault(), (0, A.$Z)(S, I, n));
                        break;
                    case 'c':
                        ((0, O.isMac)() ? m : h) && b.wS && (n.preventDefault(), (0, b.JG)(I.content));
                        break;
                    case 'e':
                        r && R(w, S, I) && (n.preventDefault(), (0, A.Hd)(S, I));
                        break;
                    case 'p':
                        (r || E) && (0, T.Z)(I, S) && (n.preventDefault(), (0, A.rY)(S, I, n));
                        break;
                    case '+':
                        (r || E) && P(S) && (n.preventDefault(), y.S.dispatchKeyed(N.LPv.TOGGLE_REACTION_POPOUT, I.id, { emojiPicker: !0 }));
                        break;
                    case 'r':
                        (r || E) && (0, l.o)(S, I) && (n.preventDefault(), (0, A.HH)(S, I, n));
                        break;
                    case 'f':
                        (r || E) &&
                            (0, o.h)(I) &&
                            (n.preventDefault(),
                            (0, a.l8)({
                                message: I,
                                source: 'keyboard-shortcut'
                            }));
                        break;
                    case 't':
                        if (r && (0, c.ki)(S, I)) (n.preventDefault(), (0, u.R6)(S, I, 'Message Shortcut'));
                        else if (I.hasFlag(N.iLy.HAS_THREAD)) {
                            let e = _.Z.getChannel(v.default.castMessageIdAsChannelId(I.id));
                            null != e && (r || E) && (n.preventDefault(), (0, u.ok)(e, E));
                        }
                        break;
                    case 'enter':
                        d && (n.preventDefault(), (0, A.B8)(S, I));
                        break;
                    case 'escape':
                        p.Z.isEditing(S.id, I.id) ? i.Z.endEditMessage(S.id) : y.S.dispatch(N.CkL.TEXTAREA_FOCUS);
                }
            },
            [e, t]
        )
    );
};
