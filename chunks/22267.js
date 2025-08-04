n.d(t, { Z: () => N });
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
    b = n(271383),
    y = n(158776),
    O = n(579407),
    v = n(388032),
    I = n(538566),
    T = n(460400),
    S = n(943549);
let A = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        default: c.EFr.SIZE_32
    },
    N = (e) => {
        let { user: t, guildId: n, nameplate: a, nameplateData: N, className: C, innerClassName: R, isHighlighted: P, showStatus: w, showPlaceholderUser: D, pendingGlobalName: L, nameplatePreviewSize: x = 'default', isPurchased: M = !1 } = e,
            k = (0, s.e7)([E.Z], () => (0, l.wj)(E.Z.theme)),
            j = null != a ? (0, O.EU)(a) : N,
            U = (0, s.e7)([y.Z], () => (null != t ? y.Z.getStatus(t.id) : c.Skl.ONLINE)),
            G = k ? '#706F74' : '#aaaab2',
            B = i.useRef(null),
            V = (0, s.e7)([b.ZP], () => (null != n && null != t ? b.ZP.getMember(n, t.id) : null)),
            F =
                null != t
                    ? (0, g.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: L,
                          user: t,
                          guildMember: V
                      })
                    : void 0,
            Z = A[x];
        return (0, r.jsx)('div', {
            role: 'img',
            'aria-label': v.intl.string(v.t.SZeUdX),
            style: {
                color: k ? 'white' : 'black',
                width: '100%'
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(C, I.nameplatePreview, {
                    [I.nameplatePurchased]: M && !P,
                    [I.large]: 'large' === x,
                    [I.xlarge]: 'xlarge' === x
                }),
                children: [
                    null != j &&
                        (0, r.jsx)(
                            m.Z,
                            {
                                nameplate: j,
                                hovered: P,
                                placement: h.i.PREVIEW,
                                content: D ? void 0 : B
                            },
                            null == a ? void 0 : a.id
                        ),
                    (0, r.jsxs)('div', {
                        className: I.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)('div', {
                                      className: o()(I.avatarContainer, !D && I.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: B,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: Z,
                                              status: w ? U : void 0,
                                              'aria-hidden': !0
                                          }),
                                          decorators: (0, r.jsx)(p.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: I.tagChiplet
                                          }),
                                          name: (0, r.jsx)(f.Z, {
                                              userName: F,
                                              displayNameStyles: t.displayNameStyles,
                                              effectDisplayType: _.F.ANIMATED
                                          }),
                                          innerClassName: R
                                      })
                                  })
                                : null,
                            (0, r.jsxs)('div', {
                                className: o()(I.avatarContainer, D && I.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: k ? T : S,
                                        size: Z,
                                        'aria-hidden': !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: G,
                                        className: I.avatar
                                    }),
                                    (0, r.jsx)('div', { className: I.placeholderUsername })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
