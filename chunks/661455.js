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
    a = n(358367),
    s = n(793574),
    c = n(734337),
    u = n(855187),
    d = n(479335),
    b = n(470743),
    f = n(50268),
    g = n(961350),
    A = n(239211),
    p = n(399476),
    j = n(301541),
    O = n(198229),
    v = n(243949),
    m = n(972432),
    y = n(652215),
    h = n(985018);

function x(e) {
    let { isOwnSettings: t, userId: n, channelId: l, guildId: o, context: a } = e,
        s = (0, v.A)({
            userId: n,
            guildId: o,
            channelId: l,
            showGuildProfile: !0,
            icon: i.nys,
            label: h.intl.string(h.t.iXAna6),
        }),
        d = (0, j.A)(n, a, i.oyn),
        f = (0, m.A)(n),
        g = (0, O.A)(n),
        A = (0, c.A)(n),
        p = (0, u.A)(n),
        y = (0, b.A)();
    return [
        (0, r.jsxs)(i.rXV, {
            children: [s, d],
        }),
        (0, r.jsxs)(i.rXV, {
            children: [f, g, A, p, t && y],
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
            label: h.intl.string(h.t["/AXYnE"]),
        }),
        a = (0, p.A)({
            user: e,
            guildId: n,
            channelId: t,
            location: "GuildVoiceUserContextMenu",
        }),
        s = (0, A.A)({
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
            children: [a, s],
        }),
        c,
    ];
}
let E = (0, a.A)(
    (0, o.A)(
        function (e) {
            let { user: t, channel: n, onSelect: o, onInteraction: a, context: s } = e,
                c = n.id,
                u = t.isNonUserBot(),
                d = t.id === g.default.getId(),
                b = x({
                    isOwnSettings: d,
                    userId: t.id,
                    channelId: c,
                    context: s,
                }),
                A = D(t, c),
                p = (0, f.A)({
                    id: t.id,
                    label: h.intl.string(h.t["/AXYnE"]),
                });
            return (0, r.jsx)(i.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": h.intl.string(h.t.liqwPJ),
                onSelect: o,
                onInteraction: a,
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
                                        label: h.intl.string(h.t.PdRCRg),
                                        children: A,
                                    }),
                                }),
                            d &&
                                (0, r.jsx)(i.rXV, {
                                    children: p,
                                }),
                        ],
                    }),
            });
        },
        {
            object: y.ZSU.CONTEXT_MENU,
        },
    ),
    [s.A.VOICE_USER],
);
