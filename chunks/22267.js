n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(570908),
    d = n(204418),
    f = n(172751),
    _ = n(359135),
    p = n(516817),
    h = n(210887),
    m = n(158776),
    g = n(5192),
    E = n(579407),
    b = n(388032),
    y = n(538566),
    O = n(326578),
    v = n(85662);
let I = (e) => {
    let { user: t, nameplate: n, nameplateData: a, className: I, innerClassName: S, isHighlighted: T, showStatus: A, showPlaceholderUser: N, nameplatePreviewSize: C = 'normal', isPurchased: P = !1 } = e,
        R = (0, s.e7)([h.Z], () => (0, l.wj)(h.Z.theme)),
        w = null != n ? (0, E.EU)(n) : a,
        D = (0, s.e7)([m.Z], () => (null != t ? m.Z.getStatus(t.id) : c.Skl.ONLINE)),
        L = R ? '#706F74' : '#aaaab2',
        x = i.useRef(null),
        k = 'large' === C,
        M = k ? c.EFr.SIZE_48 : c.EFr.SIZE_32;
    return (0, r.jsxs)('div', {
        className: o()(I, y.nameplatePreview, {
            [y.nameplatePurchased]: P && !T,
            [y.large]: k
        }),
        style: { color: R ? 'white' : 'black' },
        children: [
            null != w &&
                (0, r.jsx)(
                    p.Z,
                    {
                        nameplate: w,
                        hovered: T,
                        placement: _.i.PREVIEW,
                        content: N ? void 0 : x
                    },
                    null == n ? void 0 : n.id
                ),
            (0, r.jsxs)('div', {
                className: y.overlayContainer,
                children: [
                    null != t
                        ? (0, r.jsx)('div', {
                              className: o()(y.avatarContainer, !N && y.avatarVisible),
                              children: (0, r.jsx)(u.Z, {
                                  ref: x,
                                  avatar: (0, r.jsx)(d.Z, {
                                      user: t,
                                      guildId: null,
                                      avatarSize: M,
                                      status: A ? D : void 0,
                                      'aria-hidden': !0
                                  }),
                                  decorators: (0, r.jsx)(f.ZP, {
                                      userId: t.id,
                                      className: y.tagChiplet
                                  }),
                                  name: g.ZP.getName(null, null, t),
                                  innerClassName: o()(S, y.avatarWithText)
                              })
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: o()(y.avatarContainer, N && y.avatarVisible),
                        children: (0, r.jsx)(u.Z, {
                            avatar: (0, r.jsx)(c.qEK, {
                                src: R ? O : v,
                                size: M,
                                'aria-label': b.intl.string(b.t.cqpybG),
                                status: c.Skl.ONLINE,
                                statusColor: L
                            }),
                            innerClassName: o()(S, y.avatarWithText),
                            name: (0, r.jsx)('div', { className: o()(y.placeholderUsername, y.placeholderUsernameColor, { [y.large]: k }) })
                        })
                    })
                ]
            })
        ]
    });
};
