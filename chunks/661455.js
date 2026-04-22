n.d(t, { O: () => I, default: () => M, n: () => C });
var i = n(627968);
n(64700);
var l = n(950305),
    o = n(534890),
    r = n(477782),
    s = n(861672),
    d = n(442433),
    a = n(847767),
    c = n(358367),
    u = n(793574),
    A = n(734337),
    g = n(855187),
    b = n(479335),
    f = n(470743),
    x = n(50268),
    v = n(961350),
    m = n(239211),
    E = n(399476),
    h = n(301541),
    j = n(198229),
    y = n(243949),
    D = n(972432),
    L = n(652215),
    p = n(985018);
function C(e) {
    let { isOwnSettings: t, userId: n, channelId: s, guildId: d, context: a } = e,
        c = (0, y.A)({ userId: n, guildId: d, channelId: s, icon: l.n, label: p.intl.string(p.t.iXAna6) }),
        u = (0, h.A)(n, a, o.o),
        b = (0, D.A)(n),
        x = (0, j.A)(n),
        v = (0, A.A)(n),
        m = (0, g.A)(n),
        E = (0, f.A)();
    return [(0, i.jsxs)(r.rX, { children: [c, u] }), (0, i.jsxs)(r.rX, { children: [b, x, v, m, t && E] })];
}
function I(e, t, n) {
    let l = (0, b.u)({ userId: e.id, channelId: t, guildId: n, minimal: !0 }),
        o = (0, x.A)({ id: e.id, label: p.intl.string(p.t["/AXYnE"]) }),
        s = (0, E.A)({ user: e, guildId: n, channelId: t, location: "GuildVoiceUserContextMenu" }),
        d = (0, m.A)({ user: e, guildId: n, channelId: t, location: "GuildVoiceUserContextMenu" }),
        a = (0, i.jsxs)(r.rX, { children: [l, o] });
    return [(0, i.jsxs)(r.rX, { children: [s, d] }), a];
}
let M = (0, c.A)(
    (0, a.A)(
        function (e) {
            let { user: t, channel: n, onSelect: l, onInteraction: o, context: a } = e,
                c = n.id,
                u = t.isNonUserBot(),
                A = t.id === v.default.getId(),
                g = C({ isOwnSettings: A, userId: t.id, channelId: c, context: a }),
                b = I(t, c),
                f = (0, x.A)({ id: t.id, label: p.intl.string(p.t["/AXYnE"]) });
            return (0, i.jsx)(s.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: d.Z_,
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: l,
                onInteraction: o,
                variant: "fixed",
                children:
                    !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            g,
                            !A &&
                                (0, i.jsx)(r.rX, {
                                    children: (0, i.jsx)(r.Dr, {
                                        id: "more-options",
                                        label: p.intl.string(p.t.PdRCRg),
                                        children: b,
                                    }),
                                }),
                            A && (0, i.jsx)(r.rX, { children: f }),
                        ],
                    }),
            });
        },
        { object: L.ZSU.CONTEXT_MENU },
    ),
    [u.A.VOICE_USER],
);
