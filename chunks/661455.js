n.d(t, {
    O: () => D,
    default: () => E,
    n: () => x,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    o = n(847767),
    s = n(358367),
    a = n(793574),
    c = n(734337),
    u = n(855187),
    d = n(479335),
    b = n(470743),
    f = n(50268),
    g = n(961350),
    A = n(239211),
    j = n(399476),
    p = n(301541),
    O = n(198229),
    m = n(243949),
    v = n(972432),
    h = n(652215),
    y = n(985018);

function x(e) {
    let { isOwnSettings: t, userId: n, channelId: l, guildId: o, context: s } = e,
        a = (0, m.A)({
            userId: n,
            guildId: o,
            channelId: l,
            showGuildProfile: !0,
            icon: (0, r.jsx)(i.nys, {
                size: "sm",
            }),
            label: y.intl.string(y.t.iXAna6),
        }),
        d = (0, p.A)(n, s, i.oyn),
        f = (0, v.A)(n),
        g = (0, O.A)(n),
        A = (0, c.A)(n),
        j = (0, u.A)(n),
        h = (0, b.A)();
    return [
        (0, r.jsxs)(i.rXV, {
            children: [a, d],
        }),
        (0, r.jsxs)(i.rXV, {
            children: [f, g, A, j, t && h],
        }),
    ];
}

function D(e, t, n) {
    let l = (0, d.u)({
            userId: e.id,
            channelId: t,
            guildId: n,
            minimal: !0,
        }),
        o = (0, f.A)({
            id: e.id,
            label: y.intl.string(y.t["/AXYnE"]),
        }),
        s = (0, j.A)({
            user: e,
            guildId: n,
            channelId: t,
            location: "GuildVoiceUserContextMenu",
        }),
        a = (0, A.A)({
            user: e,
            guildId: n,
            channelId: t,
            location: "GuildVoiceUserContextMenu",
        }),
        c = (0, r.jsxs)(i.rXV, {
            children: [l, o],
        });
    return [
        (0, r.jsxs)(i.rXV, {
            children: [s, a],
        }),
        c,
    ];
}
let E = (0, s.A)(
    (0, o.A)(
        function (e) {
            let { user: t, channel: n, onSelect: o, onInteraction: s, context: a } = e,
                c = n.id,
                u = t.isNonUserBot(),
                d = t.id === g.default.getId(),
                b = x({
                    isOwnSettings: d,
                    userId: t.id,
                    channelId: c,
                    context: a,
                }),
                A = D(t, c),
                j = (0, f.A)({
                    id: t.id,
                    label: y.intl.string(y.t["/AXYnE"]),
                });
            return (0, r.jsx)(i.W1t, {
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": y.intl.string(y.t.liqwPJ),
                onSelect: o,
                onInteraction: s,
                variant: "fixed",
                children:
                    !u &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            b,
                            !d &&
                                (0, r.jsx)(i.rXV, {
                                    children: (0, r.jsx)(i.Drp, {
                                        id: "more-options",
                                        label: y.intl.string(y.t.PdRCRg),
                                        children: A,
                                    }),
                                }),
                            d &&
                                (0, r.jsx)(i.rXV, {
                                    children: j,
                                }),
                        ],
                    }),
            });
        },
        {
            object: h.ZSU.CONTEXT_MENU,
        },
    ),
    [a.A.VOICE_USER],
);
