n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(570908),
    d = n(204418),
    _ = n(821795),
    f = n(892567),
    p = n(172751),
    h = n(359135),
    m = n(516817),
    g = n(654904),
    E = n(210887),
    b = n(158776),
    y = n(579407),
    O = n(388032),
    v = n(538566),
    I = n(460400),
    T = n(943549);
let S = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        default: c.EFr.SIZE_32
    },
    A = (e) => {
        let { user: t, nameplate: n, nameplateData: a, className: A, innerClassName: N, isHighlighted: C, showStatus: R, showPlaceholderUser: P, pendingGlobalName: w, nameplatePreviewSize: D = 'default', isPurchased: L = !1 } = e,
            x = (0, s.e7)([E.Z], () => (0, l.wj)(E.Z.theme)),
            k = null != n ? (0, y.EU)(n) : a,
            M = (0, s.e7)([b.Z], () => (null != t ? b.Z.getStatus(t.id) : c.Skl.ONLINE)),
            j = x ? '#706F74' : '#aaaab2',
            U = i.useRef(null),
            G =
                null != t
                    ? (0, g.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: w,
                          user: t,
                          guildMember: null
                      })
                    : void 0,
            B = S[D];
        return (0, r.jsx)('div', {
            role: 'img',
            'aria-label': O.intl.string(O.t.SZeUdX),
            style: {
                color: x ? 'white' : 'black',
                width: '100%'
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(A, v.nameplatePreview, {
                    [v.nameplatePurchased]: L && !C,
                    [v.large]: 'large' === D,
                    [v.xlarge]: 'xlarge' === D
                }),
                children: [
                    null != k &&
                        (0, r.jsx)(
                            m.Z,
                            {
                                nameplate: k,
                                hovered: C,
                                placement: h.i.PREVIEW,
                                content: P ? void 0 : U
                            },
                            null == n ? void 0 : n.id
                        ),
                    (0, r.jsxs)('div', {
                        className: v.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)('div', {
                                      className: o()(v.avatarContainer, !P && v.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: U,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: null,
                                              avatarSize: B,
                                              status: R ? M : void 0,
                                              'aria-hidden': !0
                                          }),
                                          decorators: (0, r.jsx)(p.ZP, {
                                              userId: t.id,
                                              className: v.tagChiplet
                                          }),
                                          name: (0, r.jsx)(f.Z, {
                                              userName: G,
                                              displayNameStyles: t.displayNameStyles,
                                              effectDisplayType: _.F.ANIMATED
                                          }),
                                          innerClassName: N
                                      })
                                  })
                                : null,
                            (0, r.jsxs)('div', {
                                className: o()(v.avatarContainer, P && v.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: x ? I : T,
                                        size: B,
                                        'aria-hidden': !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: j,
                                        className: v.avatar
                                    }),
                                    (0, r.jsx)('div', { className: v.placeholderUsername })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
