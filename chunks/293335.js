n.d(t, { Z: () => y });
var r = n(54381),
    i = n(442837),
    l = n(481060),
    o = n(543241),
    a = n(222677),
    s = n(995774),
    c = n(665906),
    u = n(695346),
    d = n(496675),
    f = n(585483),
    g = n(176354),
    p = n(981631),
    b = n(185923),
    m = n(388032);
function y(e, t) {
    let n = (0, c.$R)(t),
        y = (0, i.e7)([d.Z], () => (t.isPrivate() || d.Z.can(p.Plq.ADD_REACTIONS, t)) && n, [t, n]),
        O = (0, o.MZ)(t.getGuildId());
    if (!u.nc.getSetting() || !y) return null;
    let h = O.filter(
        (e) =>
            !g.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: t,
                intention: b.Hz.REACTION,
            }),
    )
        .slice(0, 12)
        .map((n, i) => {
            var o, c, u;
            return (0, r.jsx)(
                l.sNh,
                {
                    color: "default",
                    id: null != (c = null != (o = n.id) ? o : n.optionallyDiverseSequence) ? c : n.name,
                    label: ":".concat(n.name, ":"),
                    leadingAccessory: {
                        type: "emoji",
                        emojiId: n.id,
                        src: null == n.id ? g.ZP.getURL(null != (u = n.optionallyDiverseSequence) ? u : "") : void 0,
                        animated: n.animated,
                    },
                    action: () => {
                        (0, a.rU)(t.id, e.id, (0, s.g1)(n), a.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0,
                },
                i,
            );
        });
    return (0, r.jsx)(l.sNh, {
        id: "add-reaction",
        label: m.intl.string(m.t.lfIHs4),
        action: () => {
            f.S.dispatchKeyed(p.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: "default",
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                h,
                (0, r.jsx)(l.Clw, {}),
                (0, r.jsx)(l.sNh, {
                    color: "default",
                    id: "other-reactions",
                    label: m.intl.string(m.t["OBCR+p"]),
                    icon: l.EO4,
                    action: () => {
                        f.S.dispatchKeyed(p.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    },
                }),
            ],
        }),
    });
}
