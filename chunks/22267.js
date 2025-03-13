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
    E = n(660097);
let v = (e) => {
    let { user: t, nameplate: n, nameplateData: i, className: v, isHighlighted: b, showStatus: y, showWumpus: O } = e,
        I = (0, a.e7)([f.Z], () => (0, s.wj)(f.Z.theme)),
        S = null != n ? (0, h.EU)(n) : i,
        T = (0, a.e7)([_.Z], () => _.Z.getStatus(t.id));
    return (0, r.jsxs)('div', {
        className: o()(v, g.nameplatePreview),
        style: { color: I ? 'white' : 'black' },
        children: [
            null != S &&
                (0, r.jsx)(d.Z, {
                    nameplate: S,
                    hovered: b
                }),
            (0, r.jsxs)('div', {
                className: g.overlayContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: o()(g.avatarContainer, !O && g.avatarVisible),
                        children: (0, r.jsx)(c.Z, {
                            avatar: (0, r.jsx)(u.Z, {
                                user: t,
                                guildId: null,
                                avatarSize: l.EFr.SIZE_32,
                                status: y ? T : void 0,
                                'aria-hidden': !0
                            }),
                            name: p.ZP.getName(null, null, t),
                            innerClassName: g.avatarWithTextInnerClassName,
                            selected: !1
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: o()(g.avatarContainer, O && g.avatarVisible),
                        children: (0, r.jsx)(c.Z, {
                            avatar: (0, r.jsx)(l.qEK, {
                                src: E,
                                size: l.EFr.SIZE_32,
                                'aria-label': m.NW.string(m.t.cqpybG)
                            }),
                            name: m.NW.string(m.t.cqpybG),
                            innerClassName: g.avatarWithTextInnerClassName,
                            selected: !1
                        })
                    })
                ]
            })
        ]
    });
};
