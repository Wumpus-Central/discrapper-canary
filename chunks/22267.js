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
    b = n(538566),
    y = n(326578),
    O = n(85662);
let v = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        default: c.EFr.SIZE_32
    },
    I = (e) => {
        let { user: t, nameplate: n, nameplateData: a, className: I, innerClassName: T, isHighlighted: S, showStatus: A, showPlaceholderUser: N, pendingGlobalName: C, nameplatePreviewSize: R = 'default', isPurchased: P = !1 } = e,
            w = (0, s.e7)([h.Z], () => (0, l.wj)(h.Z.theme)),
            D = null != n ? (0, E.EU)(n) : a,
            L = (0, s.e7)([m.Z], () => (null != t ? m.Z.getStatus(t.id) : c.Skl.ONLINE)),
            x = w ? '#706F74' : '#aaaab2',
            k = i.useRef(null),
            M = v[R];
        return (0, r.jsxs)('div', {
            className: o()(I, b.nameplatePreview, {
                [b.nameplatePurchased]: P && !S,
                [b.large]: 'large' === R,
                [b.xlarge]: 'xlarge' === R
            }),
            style: { color: w ? 'white' : 'black' },
            children: [
                null != D &&
                    (0, r.jsx)(
                        p.Z,
                        {
                            nameplate: D,
                            hovered: S,
                            placement: _.i.PREVIEW,
                            content: N ? void 0 : k
                        },
                        null == n ? void 0 : n.id
                    ),
                (0, r.jsxs)('div', {
                    className: b.overlayContainer,
                    children: [
                        null != t
                            ? (0, r.jsx)('div', {
                                  className: o()(b.avatarContainer, !N && b.avatarVisible),
                                  children: (0, r.jsx)(u.Z, {
                                      ref: k,
                                      avatar: (0, r.jsx)(d.Z, {
                                          user: t,
                                          guildId: null,
                                          avatarSize: M,
                                          status: A ? L : void 0,
                                          'aria-hidden': !0
                                      }),
                                      decorators: (0, r.jsx)(f.ZP, {
                                          userId: t.id,
                                          className: b.tagChiplet
                                      }),
                                      name: null != C && '' !== C ? C : g.ZP.getName(null, null, t),
                                      innerClassName: T
                                  })
                              })
                            : null,
                        (0, r.jsxs)('div', {
                            className: o()(b.avatarContainer, N && b.avatarVisible),
                            children: [
                                (0, r.jsx)(c.qEK, {
                                    src: w ? y : O,
                                    size: M,
                                    'aria-hidden': !0,
                                    status: c.Skl.ONLINE,
                                    statusColor: x,
                                    className: b.avatar
                                }),
                                (0, r.jsx)('div', { className: b.placeholderUsername })
                            ]
                        })
                    ]
                })
            ]
        });
    };
