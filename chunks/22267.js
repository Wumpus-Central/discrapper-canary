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
    g = n(388032),
    m = n(862078),
    E = n(660097);
let v = (e) => {
    let { user: t, nameplate: n, nameplateData: i, className: v, isHighlighted: b, showStatus: y, showWumpus: O } = e,
        S = (0, a.e7)([f.Z], () => (0, s.wj)(f.Z.theme)),
        I = null != n ? (0, h.EU)(n) : i,
        T = (0, a.e7)([_.Z], () => _.Z.getStatus(t.id));
    return (0, r.jsxs)('div', {
        className: o()(v, m.nameplatePreview),
        style: { color: S ? 'white' : 'black' },
        children: [
            null != I &&
                (0, r.jsx)(d.Z, {
                    nameplate: I,
                    hovered: b
                }),
            O
                ? (0, r.jsx)(c.Z, {
                      avatar: (0, r.jsx)(l.qEK, {
                          src: E,
                          size: l.EFr.SIZE_32,
                          'aria-label': g.NW.string(g.t.cqpybG)
                      }),
                      name: g.NW.string(g.t.cqpybG),
                      selected: !1
                  })
                : (0, r.jsx)(c.Z, {
                      avatar: (0, r.jsx)(u.Z, {
                          user: t,
                          guildId: null,
                          avatarSize: l.EFr.SIZE_32,
                          status: y ? T : void 0,
                          'aria-hidden': !0
                      }),
                      name: p.ZP.getName(null, null, t),
                      selected: !1
                  })
        ]
    });
};
