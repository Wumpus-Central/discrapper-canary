t.d(i, { O: () => k, default: () => v, n: () => _ });
var e = t(477900);
t(582128);
var r = t(950305),
    l = t(534890),
    s = t(477782),
    d = t(980707),
    a = t(442433),
    o = t(847767),
    c = t(358367),
    u = t(793574),
    A = t(422229),
    h = t(855187),
    x = t(479335),
    j = t(470743),
    X = t(50268),
    g = t(280450),
    C = t(239211),
    b = t(399476),
    p = t(301541),
    I = t(198229),
    U = t(243949),
    f = t(972432),
    m = t(652215),
    E = t(375708);
function _(n) {
    let { isOwnSettings: i, userId: t, channelId: d, guildId: a, context: o } = n,
        c = (0, U.A)({ userId: t, guildId: a, channelId: d, icon: r.UserIcon, label: E.intl.string(E.t.iXAna6) }),
        u = (0, p.A)(t, o, l.ChatIcon),
        x = (0, f.A)(t),
        X = (0, I.A)(t),
        g = (0, A.A)(t),
        C = (0, h.A)(t),
        b = (0, j.A)();
    return [(0, e.jsxs)(s.rX, { children: [c, u] }), (0, e.jsxs)(s.rX, { children: [x, X, g, C, i && b] })];
}
function k(n, i, t) {
    let r = (0, x.u)({ userId: n.id, channelId: i, guildId: t, minimal: !0 }),
        l = (0, X.A)({ id: n.id, label: E.intl.string(E.t["/AXYnE"]) }),
        d = (0, b.A)({ user: n, guildId: t, channelId: i, location: "GuildVoiceUserContextMenu" }),
        a = (0, C.A)({ user: n, guildId: t, channelId: i, location: "GuildVoiceUserContextMenu" }),
        o = (0, e.jsxs)(s.rX, { children: [r, l] });
    return [(0, e.jsxs)(s.rX, { children: [d, a] }), o];
}
let v = (0, c.A)(
    (0, o.A)(
        function (n) {
            let { user: i, channel: t, onSelect: r, onInteraction: l, context: o } = n,
                c = t.id,
                u = i.isNonUserBot(),
                A = i.id === g.default.getId(),
                h = _({ isOwnSettings: A, userId: i.id, channelId: c, context: o }),
                x = k(i, c),
                j = (0, X.A)({ id: i.id, label: E.intl.string(E.t["/AXYnE"]) });
            return (0, e.jsx)(d.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": E.intl.string(E.t.liqwPJ),
                onSelect: r,
                onInteraction: l,
                variant: "fixed",
                children:
                    !u &&
                    (0, e.jsxs)(e.Fragment, {
                        children: [
                            h,
                            !A &&
                                (0, e.jsx)(s.rX, {
                                    children: (0, e.jsx)(s.Dr, {
                                        id: "more-options",
                                        label: E.intl.string(E.t.PdRCRg),
                                        children: x,
                                    }),
                                }),
                            A && (0, e.jsx)(s.rX, { children: j }),
                        ],
                    }),
            });
        },
        { object: m.ZSU.CONTEXT_MENU },
    ),
    [u.A.VOICE_USER],
);
