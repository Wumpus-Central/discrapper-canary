n.d(t, { default: () => C }), n(388685);
var i = n(951288);
n(647438);
var l = n(481060),
    r = n(239091),
    u = n(883385),
    a = n(108843),
    d = n(100527),
    o = n(299206),
    c = n(882188),
    _ = n(819403),
    s = n(286694),
    E = n(314897),
    A = n(238296),
    f = n(933409),
    g = n(981631),
    v = n(388032);
let C = (0, a.Z)(
    (0, u.Z)(
        function (e) {
            let { user: t, channel: n, guildId: u, onSelect: a, onInteraction: d, context: g } = e,
                C = n.id,
                M = t.isNonUserBot(),
                S = t.id === E.default.getId(),
                O = (0, _.Z)(t),
                b = (0, s.Z)(t, u, C),
                I = (0, A.Y)({
                    isOwnSettings: S,
                    userId: t.id,
                    channelId: C,
                    guildId: u,
                    context: g,
                }),
                [Z, T] = (0, A.E)(t, C, u),
                h = (0, f.Z)(t, u, C),
                N = (0, o.Z)({
                    id: t.id,
                    label: v.intl.string(v.t["/AXYnJ"]),
                }),
                k = (0, c.Z)(t.id, n);
            return (0, i.jsx)(l.v2r, {
                navId: "user-context",
                onClose: r.Zy,
                "aria-label": v.intl.string(v.t.liqwPD),
                onSelect: a,
                onInteraction: d,
                variant: "fixed",
                children:
                    !M &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(l.kSQ, {
                                children: [O, b],
                            }),
                            k,
                            I,
                            !S &&
                                (0, i.jsx)(l.kSQ, {
                                    children: (0, i.jsxs)(l.sNh, {
                                        id: "more-options",
                                        label: v.intl.string(v.t.PdRCRk),
                                        children: [Z, (0, i.jsx)(l.kSQ, { children: h }), T],
                                    }),
                                }),
                            S && (0, i.jsx)(l.kSQ, { children: N }),
                        ],
                    }),
            });
        },
        { object: g.qAy.CONTEXT_MENU },
    ),
    [d.Z.VOICE_USER],
);
