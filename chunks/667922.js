n.d(t, { Z: () => x });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    s = n(481060),
    r = n(543241),
    o = n(222677),
    d = n(995774),
    c = n(665906),
    u = n(695346),
    g = n(496675),
    f = n(768581),
    m = n(585483),
    h = n(176354),
    E = n(981631),
    v = n(185923),
    Z = n(388032);
function x(e, t) {
    let { reducedMotion: n } = l.useContext(s.Sfi),
        f = (0, c.$R)(t),
        x = (0, a.e7)([g.Z], () => (t.isPrivate() || g.Z.can(E.Plq.ADD_REACTIONS, t)) && f, [t, f]),
        p = (0, r.MZ)(t.getGuildId());
    if (!u.nc.getSetting() || !x || e.type === E.uaV.GUILD_INVITE_REMINDER) return null;
    let S = p
        .filter(
            (e) =>
                !h.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: v.Hz.REACTION
                })
        )
        .slice(0, 12)
        .map((l, a) => {
            var r, c;
            return (0, i.jsx)(
                s.sNh,
                {
                    color: 'default',
                    id: null !== (c = null !== (r = l.id) && void 0 !== r ? r : l.optionallyDiverseSequence) && void 0 !== c ? c : l.name,
                    label: ':'.concat(l.name, ':'),
                    icon: (e) =>
                        (0, i.jsx)(N, {
                            ...e,
                            reducedMotionEnabled: n.enabled,
                            emoji: l
                        }),
                    action: () => {
                        (0, o.rU)(t.id, e.id, (0, d.g1)(l), o.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                a
            );
        });
    return (0, i.jsx)(s.sNh, {
        id: 'add-reaction',
        label: Z.intl.string(Z.t.lfIHs7),
        action: () => {
            m.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                S,
                (0, i.jsx)(s.Clw, {}),
                (0, i.jsx)(s.sNh, {
                    color: 'default',
                    id: 'other-reactions',
                    label: Z.intl.string(Z.t['OBCR+v']),
                    icon: s.EO4,
                    action: () => {
                        m.S.dispatchKeyed(E.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function N(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: l, className: a = '', isFocused: s = !1 } = e;
    return (0, i.jsx)('img', {
        className: a,
        src:
            null != n.id
                ? f.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!l || s),
                      size: 18
                  })
                : h.ZP.getURL(null !== (t = n.optionallyDiverseSequence) && void 0 !== t ? t : ''),
        alt: ''
    });
}
