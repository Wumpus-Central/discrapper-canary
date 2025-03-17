n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(780384),
    l = n(481060),
    c = n(570908),
    u = n(204418),
    d = n(516817),
    f = n(210887),
    _ = n(158776),
    p = n(5192),
    h = n(579407),
    m = n(388032),
    g = n(862078),
    E = n(460400),
    b = n(943549);
let v = (e) => {
    let { user: t, nameplate: n, nameplateData: i, className: v, isHighlighted: y, showStatus: O, showWumpus: I, isPurchased: S = !1 } = e,
        T = (0, a.e7)([f.Z], () => (0, s.wj)(f.Z.theme)),
        N = null != n ? (0, h.EU)(n) : i,
        A = (0, a.e7)([_.Z], () => _.Z.getStatus(t.id)),
        C = T ? '#706F74' : '#aaaab2';
    return (0, r.jsxs)('div', {
        className: o()(v, g.nameplatePreview, { [g.nameplatePurchased]: S && !y }),
        style: { color: T ? 'white' : 'black' },
        children: [
            null != N &&
                (0, r.jsx)(d.Z, {
                    nameplate: N,
                    hovered: y
                }),
            (0, r.jsxs)('div', {
                className: g.overlayContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: o()(g.avatarContainer, !I && g.avatarVisible),
                        children: (0, r.jsx)(c.Z, {
                            avatar: (0, r.jsx)(u.Z, {
                                user: t,
                                guildId: null,
                                avatarSize: l.EFr.SIZE_32,
                                status: O ? A : void 0,
                                'aria-hidden': !0
                            }),
                            name: p.ZP.getName(null, null, t),
                            innerClassName: g.avatarWithTextInnerClassName,
                            selected: !1
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: o()(g.avatarContainer, I && g.avatarVisible),
                        children: (0, r.jsx)(c.Z, {
                            avatar: (0, r.jsx)(l.qEK, {
                                src: T ? E : b,
                                size: l.EFr.SIZE_32,
                                'aria-label': m.NW.string(m.t.cqpybG),
                                status: l.Skl.ONLINE,
                                statusColor: C
                            }),
                            name: (0, r.jsx)('div', { className: o()(g.placeholderUsername, g.placeholderUsernameColor) }),
                            innerClassName: g.avatarWithTextInnerClassName,
                            selected: !1
                        })
                    })
                ]
            })
        ]
    });
};
