l.r(t),
    l.d(t, {
        default: function () {
            return _;
        }
    }),
    l(47120);
var n = l(200651),
    i = l(192379),
    a = l(120356),
    s = l.n(a),
    r = l(913527),
    o = l.n(r),
    c = l(442837),
    d = l(481060),
    u = l(410030),
    x = l(313201),
    h = l(271383),
    m = l(430824),
    g = l(594174),
    f = l(709054),
    v = l(931240),
    p = l(645896),
    C = l(603368),
    j = l(532490),
    N = l(380365),
    Z = l(979264),
    T = l(620929),
    S = l(284019),
    y = l(308083),
    H = l(981631),
    w = l(388032),
    b = l(470168);
function M(e) {
    var t;
    let { guildId: l, clanInfo: a, signed: r, onSignCharter: c } = e,
        u = i.useMemo(() => {
            let e = f.default.extractTimestamp(l);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [l]),
        x = i.useMemo(() => new Set(a.games), [a.games]);
    return (0, n.jsx)(j.Z, {
        guildId: l,
        signHintPosition: j.p.LEFT,
        primaryColor: null === (t = a.branding) || void 0 === t ? void 0 : t.primaryColor,
        signed: r,
        onSignCharter: c,
        children: (0, n.jsxs)('div', {
            className: b.scrollContentsContainer,
            children: [
                (0, n.jsx)(Z.aG, {
                    guildId: l,
                    clanBadge: a.badge.imageHash,
                    clanTag: a.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: y.NC.SIZE_24,
                    className: b.clanTagChiplet
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(d.Heading, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: b.charterHeaderText,
                            children: w.intl.string(w.t['85S0//'])
                        }),
                        (0, n.jsx)(d.Heading, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: b.charterHeaderText,
                            children: a.name
                        }),
                        (0, n.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: b.establishedDate,
                            children: w.intl.format(w.t['7RpSYW'], { date: u })
                        })
                    ]
                }),
                (0, n.jsx)(T.p, {
                    applicationIds: x,
                    playstyle: a.playstyle,
                    className: s()(b.charterBodyText, b.gameSection)
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: b.charterBodyText,
                    children: w.intl.string(w.t['YDTd9/'])
                })
            ]
        })
    });
}
function _(e) {
    var t;
    let { guildId: l, onClose: a, onAccept: r, ...o } = e,
        f = (0, x.Dt)(),
        j = (0, p.Cc)(l),
        Z = (0, p.E8)(l),
        [T, y] = i.useState(!0),
        [_, A] = i.useState(!1),
        B = i.useCallback(() => {
            r(), a();
        }, [r, a]);
    i.useEffect(() => {
        null == j && !Z && B();
    }, [j, B, Z]);
    let k = i.useCallback(() => {
            T && (0, v.nE)(l, T, H.Sbl.CREATE_JOIN_GUILD_MODAL), B();
        }, [l, B, T]),
        R = (0, c.e7)([m.Z], () => m.Z.getGuild(l)),
        I = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        E = (0, c.e7)([h.ZP], () => (null != I ? h.ZP.getMember(l, I.id) : null)),
        D = (0, u.ZP)(),
        L = (0, C.nP)(null == j ? void 0 : null === (t = j.branding) || void 0 === t ? void 0 : t.primaryColor, [d.tokens.colors.BG_BRAND, 0.7]),
        P = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: D,
            saturation: 1
        }).hex(),
        V = (0, C.nj)(L, P, 'top center');
    return null == R || null == I || null == E || null == j
        ? null
        : (0, n.jsx)(d.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              'aria-labelledby': f,
              className: b.modal,
              size: d.ModalSize.DYNAMIC,
              children: (0, n.jsxs)(d.ModalContent, {
                  className: b.content,
                  style: V,
                  children: [
                      (0, n.jsxs)('div', {
                          className: b.infoSide,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: b.titlesContainer,
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: b.title,
                                          children: (0, n.jsx)(d.Heading, {
                                              variant: 'heading-xxl/medium',
                                              children: w.intl.format(w.t.orbR8f, { name: R.name })
                                          })
                                      }),
                                      (0, n.jsx)(d.Text, {
                                          className: b.subtitle,
                                          variant: 'text-md/normal',
                                          children: w.intl.string(w.t.sZHbAQ)
                                      })
                                  ]
                              }),
                              (0, n.jsx)(N.Z, {
                                  guildId: l,
                                  isTagAdopted: T,
                                  onChangeUseTag: y
                              })
                          ]
                      }),
                      (0, n.jsx)('div', {
                          className: b.scrollMainContainer,
                          children: (0, n.jsx)(M, {
                              guildId: l,
                              clanInfo: j,
                              signed: _,
                              onSignCharter: A
                          })
                      }),
                      (0, n.jsx)(S.Z, {
                          onClick: k,
                          color: d.Button.Colors.BRAND,
                          themeColor: L,
                          fullWidth: !1,
                          className: s()(b.ctaButton, _ ? b.ctaButtonSigned : null),
                          children: (0, n.jsxs)('div', {
                              className: b.ctaButtonInner,
                              children: [
                                  (0, n.jsx)(d.Text, {
                                      color: 'currentColor',
                                      variant: 'text-md/medium',
                                      children: w.intl.string(w.t.aYmu19)
                                  }),
                                  (0, n.jsx)(d.ArrowLargeRightIcon, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: null == L ? void 0 : (0, C.$0)(L).hex()
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
}
