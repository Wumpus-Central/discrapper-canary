l.d(t, { default: () => M }), l(47120);
var i = l(200651),
    n = l(192379),
    a = l(120356),
    s = l.n(a),
    r = l(913527),
    o = l.n(r),
    c = l(442837),
    d = l(481060),
    u = l(410030),
    x = l(313201),
    m = l(271383),
    h = l(430824),
    g = l(594174),
    f = l(709054),
    v = l(931240),
    C = l(645896),
    p = l(603368),
    j = l(532490),
    N = l(380365),
    Z = l(979264),
    T = l(620929),
    y = l(284019),
    H = l(308083),
    b = l(981631),
    w = l(388032),
    S = l(470168);
function _(e) {
    var t;
    let { guildId: l, clanInfo: a, signed: r, onSignCharter: c } = e,
        u = n.useMemo(() => {
            let e = f.default.extractTimestamp(l);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [l]),
        x = n.useMemo(() => new Set(a.games), [a.games]);
    return (0, i.jsx)(j.Z, {
        guildId: l,
        signHintPosition: j.p.LEFT,
        primaryColor: null === (t = a.branding) || void 0 === t ? void 0 : t.primaryColor,
        signed: r,
        onSignCharter: c,
        children: (0, i.jsxs)('div', {
            className: S.scrollContentsContainer,
            children: [
                (0, i.jsx)(Z.aG, {
                    guildId: l,
                    clanBadge: a.badge.imageHash,
                    clanTag: a.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: H.NC.SIZE_24,
                    className: S.clanTagChiplet
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(d.X6q, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: S.charterHeaderText,
                            children: w.intl.string(w.t['85S0//'])
                        }),
                        (0, i.jsx)(d.X6q, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: S.charterHeaderText,
                            children: a.name
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: S.establishedDate,
                            children: w.intl.format(w.t['7RpSYW'], { date: u })
                        })
                    ]
                }),
                (0, i.jsx)(T.p, {
                    applicationIds: x,
                    playstyle: a.playstyle,
                    className: s()(S.charterBodyText, S.gameSection)
                }),
                (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: S.charterBodyText,
                    children: w.intl.string(w.t['YDTd9/'])
                })
            ]
        })
    });
}
function M(e) {
    var t;
    let { guildId: l, onClose: a, onAccept: r, ...o } = e,
        f = (0, x.Dt)(),
        j = (0, C.Cc)(l),
        Z = (0, C.E8)(l),
        [T, H] = n.useState(!0),
        [M, B] = n.useState(!1),
        R = n.useCallback(() => {
            r(), a();
        }, [r, a]);
    n.useEffect(() => {
        null != j || Z || R();
    }, [j, R, Z]);
    let A = n.useCallback(() => {
            T && (0, v.nE)(l, T, b.Sbl.CREATE_JOIN_GUILD_MODAL), R();
        }, [l, R, T]),
        E = (0, c.e7)([h.Z], () => h.Z.getGuild(l)),
        k = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        D = (0, c.e7)([m.ZP], () => (null != k ? m.ZP.getMember(l, k.id) : null)),
        I = (0, u.ZP)(),
        V = (0, p.nP)(null == j ? void 0 : null === (t = j.branding) || void 0 === t ? void 0 : t.primaryColor, [d.TVs.colors.BG_BRAND, 0.7]),
        F = d.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: I,
            saturation: 1
        }).hex(),
        P = (0, p.nj)(V, F, 'top center');
    return null == E || null == k || null == D || null == j
        ? null
        : (0, i.jsx)(d.Y0X, {
              ...o,
              transitionState: o.transitionState,
              'aria-labelledby': f,
              className: S.modal,
              size: d.CgR.DYNAMIC,
              children: (0, i.jsxs)(d.hzk, {
                  className: S.content,
                  style: P,
                  children: [
                      (0, i.jsxs)('div', {
                          className: S.infoSide,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: S.titlesContainer,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: S.title,
                                          children: (0, i.jsx)(d.X6q, {
                                              variant: 'heading-xxl/medium',
                                              children: w.intl.format(w.t.orbR8f, { name: E.name })
                                          })
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          className: S.subtitle,
                                          variant: 'text-md/normal',
                                          children: w.intl.string(w.t.sZHbAQ)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(N.Z, {
                                  guildId: l,
                                  isTagAdopted: T,
                                  onChangeUseTag: H
                              })
                          ]
                      }),
                      (0, i.jsx)('div', {
                          className: S.scrollMainContainer,
                          children: (0, i.jsx)(_, {
                              guildId: l,
                              clanInfo: j,
                              signed: M,
                              onSignCharter: B
                          })
                      }),
                      (0, i.jsx)(y.Z, {
                          onClick: A,
                          color: d.zxk.Colors.BRAND,
                          themeColor: V,
                          fullWidth: !1,
                          className: s()(S.ctaButton, M ? S.ctaButtonSigned : null),
                          children: (0, i.jsxs)('div', {
                              className: S.ctaButtonInner,
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      color: 'currentColor',
                                      variant: 'text-md/medium',
                                      children: w.intl.string(w.t.aYmu19)
                                  }),
                                  (0, i.jsx)(d.d4D, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: 'currentColor'
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
}
