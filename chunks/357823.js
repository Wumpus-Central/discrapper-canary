n.d(t, { default: () => v }), n(388685);
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
    S = n(388032);
let v = (0, a.Z)(
    (0, u.Z)(
        function (e) {
            let { user: t, channel: n, guildId: u, onSelect: a, onInteraction: d, context: g } = e,
                v = n.id,
                C = t.isNonUserBot(),
                M = t.id === E.default.getId(),
                O = (0, _.Z)(t),
                I = (0, s.Z)(t, u, v),
                b = (0, A.Y)({
                    isOwnSettings: M,
                    userId: t.id,
                    channelId: v,
                    guildId: u,
                    context: g,
                }),
                [Z, N] = (0, A.E)(t, v, u),
                T = (0, f.Z)(t, u, v),
                h = (0, o.Z)({
                    id: t.id,
                    label: S.intl.string(S.t["/AXYnE"]),
                }),
                R = (0, c.Z)(t.id, n);
            return (0, i.jsx)(l.v2r, {
                navId: "user-context",
                onClose: r.Zy,
                "aria-label": S.intl.string(S.t.liqwPJ),
                onSelect: a,
                onInteraction: d,
                variant: "fixed",
                children:
                    !C &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(l.kSQ, {
                                children: [O, I],
                            }),
                            R,
                            b,
                            !M &&
                                (0, i.jsx)(l.kSQ, {
                                    children: (0, i.jsxs)(l.sNh, {
                                        id: "more-options",
                                        label: S.intl.string(S.t.PdRCRg),
                                        children: [Z, (0, i.jsx)(l.kSQ, { children: T }), N],
                                    }),
                                }),
                            M && (0, i.jsx)(l.kSQ, { children: h }),
                        ],
                    }),
            });
        },
        { object: g.qAy.CONTEXT_MENU },
    ),
    [d.Z.VOICE_USER],
);
