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
    d = n(359135),
    f = n(516817),
    _ = n(210887),
    p = n(158776),
    h = n(5192),
    m = n(579407),
    g = n(388032),
    E = n(538566),
    b = n(460400),
    y = n(943549);
let v = (e) => {
    let { user: t, nameplate: n, nameplateData: i, className: v, isHighlighted: O, showStatus: I, showWumpus: S, isPurchased: T = !1 } = e,
        N = (0, a.e7)([_.Z], () => (0, s.wj)(_.Z.theme)),
        A = null != n ? (0, m.EU)(n) : i,
        C = (0, a.e7)([p.Z], () => p.Z.getStatus(t.id)),
        R = N ? '#706F74' : '#aaaab2';
    return (0, r.jsxs)('div', {
        className: o()(v, E.nameplatePreview, { [E.nameplatePurchased]: T && !O }),
        style: { color: N ? 'white' : 'black' },
        children: [
            null != A &&
                (0, r.jsx)(
                    f.Z,
                    {
                        nameplate: A,
                        hovered: O,
                        placement: d.i.PREVIEW
                    },
                    null == n ? void 0 : n.id
                ),
            (0, r.jsxs)('div', {
                className: E.overlayContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: o()(E.avatarContainer, !S && E.avatarVisible),
                        children: (0, r.jsx)(c.Z, {
                            avatar: (0, r.jsx)(u.Z, {
                                user: t,
                                guildId: null,
                                avatarSize: l.EFr.SIZE_32,
                                status: I ? C : void 0,
                                'aria-hidden': !0
                            }),
                            name: h.ZP.getName(null, null, t),
                            innerClassName: E.avatarWithTextInnerClassName,
                            selected: !1
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: o()(E.avatarContainer, S && E.avatarVisible),
                        children: (0, r.jsx)(c.Z, {
                            avatar: (0, r.jsx)(l.qEK, {
                                src: N ? b : y,
                                size: l.EFr.SIZE_32,
                                'aria-label': g.NW.string(g.t.cqpybG),
                                status: l.Skl.ONLINE,
                                statusColor: R
                            }),
                            name: (0, r.jsx)('div', { className: o()(E.placeholderUsername, E.placeholderUsernameColor) }),
                            innerClassName: E.avatarWithTextInnerClassName,
                            selected: !1
                        })
                    })
                ]
            })
        ]
    });
};
