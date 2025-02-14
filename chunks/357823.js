t.d(e, { default: () => h });
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    a = t(883385),
    u = t(108843),
    d = t(100527),
    o = t(299206),
    s = t(819403),
    c = t(286694),
    E = t(314897),
    _ = t(238296),
    g = t(933409),
    f = t(981631),
    v = t(388032);
let h = (0, u.Z)(
    (0, a.Z)(
        function (n) {
            let { user: e, channel: t, guildId: a, onSelect: u, context: d } = n,
                f = t.id,
                h = e.isNonUserBot(),
                A = e.id === E.default.getId(),
                T = (0, s.Z)(e),
                S = (0, c.Z)(e, a, f),
                I = (0, _.Y)({
                    isOwnSettings: A,
                    userId: e.id,
                    channelId: f,
                    guildId: a,
                    context: d
                }),
                Z = (0, _.E)(e, f, a),
                M = (0, g.Z)(e, a, f),
                C = (0, o.Z)({
                    id: e.id,
                    label: v.intl.string(v.t['/AXYnJ'])
                });
            return (0, l.jsx)(i.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': v.intl.string(v.t.liqwPD),
                onSelect: u,
                variant: 'fixed',
                children:
                    !h &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)(i.kSQ, {
                                children: [T, S]
                            }),
                            I,
                            !A &&
                                (0, l.jsx)(i.kSQ, {
                                    children: (0, l.jsxs)(i.sNh, {
                                        id: 'more-options',
                                        label: v.intl.string(v.t.PdRCRk),
                                        children: [Z, (0, l.jsx)(i.kSQ, { children: M })]
                                    })
                                }),
                            A && (0, l.jsx)(i.kSQ, { children: C })
                        ]
                    })
            });
        },
        { object: f.qAy.CONTEXT_MENU }
    ),
    [d.Z.VOICE_USER]
);
