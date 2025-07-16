n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(570908),
    d = n(204418),
    f = n(7284),
    _ = n(172751),
    p = n(359135),
    h = n(516817),
    m = n(210887),
    g = n(158776),
    E = n(5192),
    b = n(579407),
    y = n(538566),
    O = n(460400),
    v = n(943549);
let I = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        default: c.EFr.SIZE_32
    },
    T = (e) => {
        let { user: t, nameplate: n, nameplateData: a, className: T, innerClassName: S, isHighlighted: A, showStatus: N, showPlaceholderUser: C, pendingGlobalName: R, nameplatePreviewSize: P = 'default', isPurchased: w = !1 } = e,
            D = (0, s.e7)([m.Z], () => (0, l.wj)(m.Z.theme)),
            L = null != n ? (0, b.EU)(n) : a,
            x = (0, s.e7)([g.Z], () => (null != t ? g.Z.getStatus(t.id) : c.Skl.ONLINE)),
            k = D ? '#706F74' : '#aaaab2',
            M = i.useRef(null),
            j = (0, f.j)({ displayNameStyles: null == t ? void 0 : t.displayNameStyles }),
            U = I[P];
        return (0, r.jsxs)('div', {
            className: o()(T, y.nameplatePreview, {
                [y.nameplatePurchased]: w && !A,
                [y.large]: 'large' === P,
                [y.xlarge]: 'xlarge' === P
            }),
            style: { color: D ? 'white' : 'black' },
            children: [
                null != L &&
                    (0, r.jsx)(
                        h.Z,
                        {
                            nameplate: L,
                            hovered: A,
                            placement: p.i.PREVIEW,
                            content: C ? void 0 : M
                        },
                        null == n ? void 0 : n.id
                    ),
                (0, r.jsxs)('div', {
                    className: y.overlayContainer,
                    children: [
                        null != t
                            ? (0, r.jsx)('div', {
                                  className: o()(y.avatarContainer, !C && y.avatarVisible),
                                  children: (0, r.jsx)(u.Z, {
                                      ref: M,
                                      avatar: (0, r.jsx)(d.Z, {
                                          user: t,
                                          guildId: null,
                                          avatarSize: U,
                                          status: N ? x : void 0,
                                          'aria-hidden': !0
                                      }),
                                      decorators: (0, r.jsx)(_.ZP, {
                                          userId: t.id,
                                          className: y.tagChiplet
                                      }),
                                      name: null != R && '' !== R ? R : E.ZP.getName(null, null, t),
                                      innerClassName: o()(S, j)
                                  })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: o()(y.avatarContainer, C && y.avatarVisible),
                            children: [
                                (0, r.jsx)(c.qEK, {
                                    src: D ? O : v,
                                    size: U,
                                    'aria-hidden': !0,
                                    status: c.Skl.ONLINE,
                                    statusColor: k,
                                    className: y.avatar
                                }),
                                (0, r.jsx)('div', { className: y.placeholderUsername })
                            ]
                        })
                    ]
                })
            ]
        });
    };
