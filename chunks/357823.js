n.d(t, { default: () => p }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(239091),
    a = n(883385),
    o = n(108843),
    u = n(100527),
    c = n(299206),
    d = n(882188),
    s = n(819403),
    f = n(286694),
    _ = n(314897),
    b = n(238296),
    O = n(933409),
    g = n(981631),
    E = n(388032);
let p = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: t, channel: n, guildId: a, onSelect: o, onInteraction: u, context: g } = e,
                p = n.id,
                y = t.isNonUserBot(),
                S = t.id === _.default.getId(),
                v = (0, s.Z)(t),
                A = (0, f.Z)(t, a, p),
                j = (0, b.Y)({
                    isOwnSettings: S,
                    userId: t.id,
                    channelId: p,
                    guildId: a,
                    context: g,
                }),
                [m, I] = (0, b.E)(t, p, a),
                P = (0, O.Z)(t, a, p),
                Z = (0, c.Z)({
                    id: t.id,
                    label: E.intl.string(E.t["/AXYnJ"]),
                }),
                C = (0, d.Z)(t.id, n);
            return (0, r.jsx)(i.v2r, {
                navId: "user-context",
                onClose: l.Zy,
                "aria-label": E.intl.string(E.t.liqwPD),
                onSelect: o,
                onInteraction: u,
                variant: "fixed",
                children:
                    !y &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(i.kSQ, {
                                children: [v, A],
                            }),
                            C,
                            j,
                            !S &&
                                (0, r.jsx)(i.kSQ, {
                                    children: (0, r.jsxs)(i.sNh, {
                                        id: "more-options",
                                        label: E.intl.string(E.t.PdRCRk),
                                        children: [m, (0, r.jsx)(i.kSQ, { children: P }), I],
                                    }),
                                }),
                            S && (0, r.jsx)(i.kSQ, { children: Z }),
                        ],
                    }),
            });
        },
        { object: g.qAy.CONTEXT_MENU },
    ),
    [u.Z.VOICE_USER],
);
