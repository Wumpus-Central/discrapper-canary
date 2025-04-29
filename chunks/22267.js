n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(570908),
    d = n(204418),
    f = n(359135),
    _ = n(516817),
    p = n(210887),
    h = n(158776),
    m = n(5192),
    g = n(579407),
    E = n(388032),
    b = n(538566),
    y = n(460400),
    O = n(943549);
let v = (e) => {
    let { user: t, nameplate: n, nameplateData: o, className: v, innerClassName: I, isHighlighted: S, showStatus: T, showWumpus: A, isPurchased: N = !1 } = e,
        C = (0, s.e7)([p.Z], () => (0, l.wj)(p.Z.theme)),
        R = null != n ? (0, g.EU)(n) : o,
        P = (0, s.e7)([h.Z], () => h.Z.getStatus(t.id)),
        w = C ? '#706F74' : '#aaaab2',
        D = i.useRef(null);
    return (0, r.jsxs)('div', {
        className: a()(v, b.nameplatePreview, { [b.nameplatePurchased]: N && !S }),
        style: { color: C ? 'white' : 'black' },
        children: [
            null != R &&
                (0, r.jsx)(
                    _.Z,
                    {
                        nameplate: R,
                        hovered: S,
                        placement: f.i.PREVIEW,
                        content: A ? void 0 : D
                    },
                    null == n ? void 0 : n.id
                ),
            (0, r.jsxs)('div', {
                className: b.overlayContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: a()(b.avatarContainer, !A && b.avatarVisible),
                        children: (0, r.jsx)(u.Z, {
                            ref: D,
                            avatar: (0, r.jsx)(d.Z, {
                                user: t,
                                guildId: null,
                                avatarSize: c.EFr.SIZE_32,
                                status: T ? P : void 0,
                                'aria-hidden': !0
                            }),
                            name: m.ZP.getName(null, null, t),
                            innerClassName: I
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: a()(b.avatarContainer, A && b.avatarVisible),
                        children: (0, r.jsx)(u.Z, {
                            avatar: (0, r.jsx)(c.qEK, {
                                src: C ? y : O,
                                size: c.EFr.SIZE_32,
                                'aria-label': E.intl.string(E.t.cqpybG),
                                status: c.Skl.ONLINE,
                                statusColor: w
                            }),
                            name: (0, r.jsx)('div', { className: a()(b.placeholderUsername, b.placeholderUsernameColor) })
                        })
                    })
                ]
            })
        ]
    });
};
