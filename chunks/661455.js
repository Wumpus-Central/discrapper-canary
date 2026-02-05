n.d(t, { O: () => I, default: () => D, n: () => x });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(793574),
    o = n(734337),
    u = n(855187),
    c = n(479335),
    A = n(470743),
    g = n(50268),
    E = n(961350),
    _ = n(239211),
    b = n(399476),
    f = n(301541),
    m = n(198229),
    C = n(243949),
    h = n(972432),
    M = n(652215),
    S = n(985018);
function x(e) {
    let { isOwnSettings: t, userId: n, channelId: a, guildId: r, context: d } = e,
        s = (0, C.A)({
            userId: n,
            guildId: r,
            channelId: a,
            showGuildProfile: !0,
            icon: l.nys,
            label: S.intl.string(S.t.iXAna6),
        }),
        c = (0, f.A)(n, d, l.oyn),
        g = (0, h.A)(n),
        E = (0, m.A)(n),
        _ = (0, o.A)(n),
        b = (0, u.A)(n),
        M = (0, A.A)();
    return [(0, i.jsxs)(l.rXV, { children: [s, c] }), (0, i.jsxs)(l.rXV, { children: [g, E, _, b, t && M] })];
}
function I(e, t, n) {
    let a = (0, c.u)({ userId: e.id, channelId: t, guildId: n, minimal: !0 }),
        r = (0, g.A)({ id: e.id, label: S.intl.string(S.t["/AXYnE"]) }),
        d = (0, b.A)({ user: e, guildId: n, channelId: t, location: "GuildVoiceUserContextMenu" }),
        s = (0, _.A)({ user: e, guildId: n, channelId: t, location: "GuildVoiceUserContextMenu" }),
        o = (0, i.jsxs)(l.rXV, { children: [a, r] });
    return [(0, i.jsxs)(l.rXV, { children: [d, s] }), o];
}
let D = (0, d.A)(
    (0, r.A)(
        function (e) {
            let { user: t, channel: n, onSelect: r, onInteraction: d, context: s } = e,
                o = n.id,
                u = t.isNonUserBot(),
                c = t.id === E.default.getId(),
                A = x({ isOwnSettings: c, userId: t.id, channelId: o, context: s }),
                _ = I(t, o),
                b = (0, g.A)({ id: t.id, label: S.intl.string(S.t["/AXYnE"]) });
            return (0, i.jsx)(l.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": S.intl.string(S.t.liqwPJ),
                onSelect: r,
                onInteraction: d,
                variant: "fixed",
                children:
                    !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            A,
                            !c &&
                                (0, i.jsx)(l.rXV, {
                                    children: (0, i.jsx)(l.Drp, {
                                        id: "more-options",
                                        label: S.intl.string(S.t.PdRCRg),
                                        children: _,
                                    }),
                                }),
                            c && (0, i.jsx)(l.rXV, { children: b }),
                        ],
                    }),
            });
        },
        { object: M.ZSU.CONTEXT_MENU },
    ),
    [s.A.VOICE_USER],
);
