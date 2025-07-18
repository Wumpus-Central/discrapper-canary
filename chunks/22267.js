n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(570908),
    d = n(204418),
    f = n(821795),
    _ = n(172751),
    p = n(359135),
    h = n(516817),
    m = n(654904),
    g = n(210887),
    E = n(158776),
    b = n(579407),
    y = n(388032),
    O = n(538566),
    v = n(460400),
    I = n(943549);
let T = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        default: c.EFr.SIZE_32
    },
    S = (e) => {
        let { user: t, nameplate: n, nameplateData: a, className: S, innerClassName: A, isHighlighted: N, showStatus: C, showPlaceholderUser: R, pendingGlobalName: P, nameplatePreviewSize: w = 'default', isPurchased: D = !1 } = e,
            L = (0, s.e7)([g.Z], () => (0, l.wj)(g.Z.theme)),
            x = null != n ? (0, b.EU)(n) : a,
            M = (0, s.e7)([E.Z], () => (null != t ? E.Z.getStatus(t.id) : c.Skl.ONLINE)),
            k = L ? '#706F74' : '#aaaab2',
            j = i.useRef(null),
            U =
                null != t
                    ? (0, m.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: P,
                          user: t,
                          guildMember: null
                      })
                    : void 0,
            G = T[w];
        return (0, r.jsx)('div', {
            role: 'img',
            'aria-label': y.intl.string(y.t.SZeUdX),
            style: {
                color: L ? 'white' : 'black',
                width: '100%'
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(S, O.nameplatePreview, {
                    [O.nameplatePurchased]: D && !N,
                    [O.large]: 'large' === w,
                    [O.xlarge]: 'xlarge' === w
                }),
                children: [
                    null != x &&
                        (0, r.jsx)(
                            h.Z,
                            {
                                nameplate: x,
                                hovered: N,
                                placement: p.i.PREVIEW,
                                content: R ? void 0 : j
                            },
                            null == n ? void 0 : n.id
                        ),
                    (0, r.jsxs)('div', {
                        className: O.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)('div', {
                                      className: o()(O.avatarContainer, !R && O.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: j,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: null,
                                              avatarSize: G,
                                              status: C ? M : void 0,
                                              'aria-hidden': !0
                                          }),
                                          decorators: (0, r.jsx)(_.ZP, {
                                              userId: t.id,
                                              className: O.tagChiplet
                                          }),
                                          name: U,
                                          innerClassName: A,
                                          displayNameStyles: t.displayNameStyles,
                                          displayNameStyleEffects: f.F.ANIMATED
                                      })
                                  })
                                : null,
                            (0, r.jsxs)('div', {
                                className: o()(O.avatarContainer, R && O.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: L ? v : I,
                                        size: G,
                                        'aria-hidden': !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: k,
                                        className: O.avatar
                                    }),
                                    (0, r.jsx)('div', { className: O.placeholderUsername })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
