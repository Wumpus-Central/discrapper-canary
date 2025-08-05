(n.d(t, { default: () => h }), n(388685));
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(239091),
    u = n(883385),
    o = n(108843),
    a = n(100527),
    c = n(299206),
    d = n(882188),
    s = n(819403),
    _ = n(286694),
    f = n(314897),
    E = n(238296),
    g = n(933409),
    b = n(981631),
    O = n(388032);
let h = (0, o.Z)(
    (0, u.Z)(
        function (e) {
            let { user: t, channel: n, guildId: u, onSelect: o, onInteraction: a, context: b } = e,
                h = n.id,
                A = t.isNonUserBot(),
                p = t.id === f.default.getId(),
                v = (0, s.Z)(t),
                y = (0, _.Z)(t, u, h),
                S = (0, E.Y)({
                    isOwnSettings: p,
                    userId: t.id,
                    channelId: h,
                    guildId: u,
                    context: b
                }),
                [T, I] = (0, E.E)(t, h, u),
                P = (0, g.Z)(t, u, h),
                m = (0, c.Z)({
                    id: t.id,
                    label: O.intl.string(O.t['/AXYnJ'])
                }),
                M = (0, d.Z)(t.id, n);
            return (0, r.jsx)(l.v2r, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': O.intl.string(O.t.liqwPD),
                onSelect: o,
                onInteraction: a,
                variant: 'fixed',
                children:
                    !A &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(l.kSQ, {
                                children: [v, y]
                            }),
                            M,
                            S,
                            !p &&
                                (0, r.jsx)(l.kSQ, {
                                    children: (0, r.jsxs)(l.sNh, {
                                        id: 'more-options',
                                        label: O.intl.string(O.t.PdRCRk),
                                        children: [T, (0, r.jsx)(l.kSQ, { children: P }), I]
                                    })
                                }),
                            p && (0, r.jsx)(l.kSQ, { children: m })
                        ]
                    })
            });
        },
        { object: b.qAy.CONTEXT_MENU }
    ),
    [a.Z.VOICE_USER]
);
