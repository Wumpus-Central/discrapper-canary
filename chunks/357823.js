t.d(n, { default: () => h }), t(47120);
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    u = t(883385),
    a = t(108843),
    o = t(100527),
    c = t(299206),
    d = t(819403),
    s = t(286694),
    _ = t(314897),
    E = t(238296),
    f = t(933409),
    g = t(981631),
    A = t(388032);
let h = (0, a.Z)(
    (0, u.Z)(
        function (e) {
            let { user: n, channel: t, guildId: u, onSelect: a, onInteraction: o, context: g } = e,
                h = t.id,
                T = n.isNonUserBot(),
                b = n.id === _.default.getId(),
                v = (0, d.Z)(n),
                O = (0, s.Z)(n, u, h),
                S = (0, E.Y)({
                    isOwnSettings: b,
                    userId: n.id,
                    channelId: h,
                    guildId: u,
                    context: g
                }),
                [y, I] = (0, E.E)(n, h, u),
                N = (0, f.Z)(n, u, h),
                p = (0, c.Z)({
                    id: n.id,
                    label: A.NW.string(A.t['/AXYnJ'])
                });
            return (0, l.jsx)(i.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': A.NW.string(A.t.liqwPD),
                onSelect: a,
                onInteraction: o,
                variant: 'fixed',
                children:
                    !T &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsxs)(i.kSQ, {
                                children: [v, O]
                            }),
                            S,
                            !b &&
                                (0, l.jsx)(i.kSQ, {
                                    children: (0, l.jsxs)(i.sNh, {
                                        id: 'more-options',
                                        label: A.NW.string(A.t.PdRCRk),
                                        children: [y, (0, l.jsx)(i.kSQ, { children: N }), I]
                                    })
                                }),
                            b && (0, l.jsx)(i.kSQ, { children: p })
                        ]
                    })
            });
        },
        { object: g.qAy.CONTEXT_MENU }
    ),
    [o.Z.VOICE_USER]
);
