t.d(n, {
    Z: function () {
        return p;
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
    f = t(496675),
    g = t(768581),
    m = t(585483),
    h = t(176354),
    E = t(981631),
    v = t(185923),
    I = t(388032);
function p(e, n) {
    let { reducedMotion: t } = l.useContext(a.AccessibilityPreferencesContext),
        g = (0, d.$R)(n),
        p = (0, r.e7)([f.Z], () => (n.isPrivate() || f.Z.can(E.Plq.ADD_REACTIONS, n)) && g, [n, g]),
        Z = (0, o.MZ)(n.getGuildId());
    if (!c.nc.getSetting() || !p || e.type === E.uaV.GUILD_INVITE_REMINDER) return null;
    let x = Z.filter(
        (e) =>
            !h.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: n,
                intention: v.Hz.REACTION
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
                        (0, i.jsx)(M, {
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
        label: I.intl.string(I.t.lfIHs7),
        action: () => {
            m.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                x,
                (0, i.jsx)(a.MenuSeparator, {}),
                (0, i.jsx)(a.MenuItem, {
                    color: 'default',
                    id: 'other-reactions',
                    label: I.intl.string(I.t['OBCR+v']),
                    icon: a.ReactionIcon,
                    action: () => {
                        m.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function M(e) {
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
