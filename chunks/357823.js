t.d(n, { default: () => C }), t(388685);
var i = t(951288);
t(647438);
var l = t(481060),
    r = t(239091),
    u = t(883385),
    a = t(108843),
    d = t(100527),
    o = t(299206),
    c = t(882188),
    _ = t(819403),
    s = t(286694),
    E = t(314897),
    f = t(238296),
    A = t(933409),
    g = t(981631),
    v = t(388032);
let C = (0, a.Z)(
    (0, u.Z)(
        function (e) {
            let { user: n, channel: t, guildId: u, onSelect: a, onInteraction: d, context: g } = e,
                C = t.id,
                M = n.isNonUserBot(),
                O = n.id === E.default.getId(),
                S = (0, _.Z)(n),
                b = (0, s.Z)(n, u, C),
                I = (0, f.Y)({
                    isOwnSettings: O,
                    userId: n.id,
                    channelId: C,
                    guildId: u,
                    context: g,
                }),
                [Z, T] = (0, f.E)(n, C, u),
                h = (0, A.Z)(n, u, C),
                N = (0, o.Z)({
                    id: n.id,
                    label: v.intl.string(v.t["/AXYnE"]),
                }),
                p = (0, c.Z)(n.id, t);
            return (0, i.jsx)(l.v2r, {
                navId: "user-context",
                onClose: r.Zy,
                "aria-label": v.intl.string(v.t.liqwPJ),
                onSelect: a,
                onInteraction: d,
                variant: "fixed",
                children:
                    !M &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(l.kSQ, {
                                children: [S, b],
                            }),
                            p,
                            I,
                            !O &&
                                (0, i.jsx)(l.kSQ, {
                                    children: (0, i.jsxs)(l.sNh, {
                                        id: "more-options",
                                        label: v.intl.string(v.t.PdRCRg),
                                        children: [Z, (0, i.jsx)(l.kSQ, { children: h }), T],
                                    }),
                                }),
                            O && (0, i.jsx)(l.kSQ, { children: N }),
                        ],
                    }),
            });
        },
        { object: g.qAy.CONTEXT_MENU },
    ),
    [d.Z.VOICE_USER],
);
