t.d(n, {
    Z: function () {
        return M;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(543241),
    s = t(222677),
    u = t(995774),
    d = t(665906),
    c = t(695346),
    m = t(496675),
    g = t(768581),
    f = t(585483),
    h = t(176354),
    E = t(981631),
    I = t(185923),
    v = t(388032);
function M(e, n) {
    let { reducedMotion: t } = l.useContext(a.AccessibilityPreferencesContext),
        g = (0, d.$R)(n),
        M = (0, r.e7)([m.Z], () => (n.isPrivate() || m.Z.can(E.Plq.ADD_REACTIONS, n)) && g, [n, g]),
        x = (0, o.MZ)(n.getGuildId());
    if (!c.nc.getSetting() || !M || e.type === E.uaV.GUILD_INVITE_REMINDER) return null;
    let Z = x
        .filter(
            (e) =>
                !h.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: n,
                    intention: I.Hz.REACTION
                })
        )
        .slice(0, 12)
        .map((l, r) => {
            var o, d;
            return (0, i.jsx)(
                a.MenuItem,
                {
                    color: 'default',
                    id: null !== (d = null !== (o = l.id) && void 0 !== o ? o : l.optionallyDiverseSequence) && void 0 !== d ? d : l.name,
                    label: ':'.concat(l.name, ':'),
                    icon: (e) =>
                        (0, i.jsx)(p, {
                            ...e,
                            reducedMotionEnabled: t.enabled,
                            emoji: l
                        }),
                    action: () => {
                        (0, s.rU)(n.id, e.id, (0, u.g1)(l), s.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                r
            );
        });
    return (0, i.jsx)(a.MenuItem, {
        id: 'add-reaction',
        label: v.intl.string(v.t.lfIHs7),
        action: () => {
            f.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                Z,
                (0, i.jsx)(a.MenuSeparator, {}),
                (0, i.jsx)(a.MenuItem, {
                    color: 'default',
                    id: 'other-reactions',
                    label: v.intl.string(v.t['OBCR+v']),
                    icon: a.ReactionIcon,
                    action: () => {
                        f.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function p(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: l, className: r = '', isFocused: a = !1 } = e;
    return (0, i.jsx)('img', {
        className: r,
        src:
            null != t.id
                ? g.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!l || a),
                      size: 18
                  })
                : h.ZP.getURL(null !== (n = t.optionallyDiverseSequence) && void 0 !== n ? n : ''),
        alt: ''
    });
}
