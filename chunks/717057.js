l.d(t, { default: () => H }), l(47120);
var n = l(200651),
    r = l(192379),
    i = l(120356),
    a = l.n(i),
    s = l(913527),
    o = l.n(s),
    c = l(442837),
    d = l(481060),
    u = l(410030),
    f = l(313201),
    m = l(271383),
    h = l(430824),
    x = l(594174),
    g = l(709054),
    p = l(931240),
    j = l(645896),
    v = l(603368),
    C = l(532490),
    b = l(380365),
    y = l(979264),
    N = l(620929),
    O = l(284019),
    w = l(308083),
    P = l(981631),
    S = l(388032),
    Z = l(85730);
function T(e) {
    var t;
    let { guildId: l, clanInfo: i, signed: s, onSignCharter: c } = e,
        u = r.useMemo(() => {
            let e = g.default.extractTimestamp(l);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [l]),
        f = r.useMemo(() => new Set(i.games), [i.games]);
    return (0, n.jsx)(C.Z, {
        guildId: l,
        signHintPosition: C.p.LEFT,
        primaryColor: null === (t = i.branding) || void 0 === t ? void 0 : t.primaryColor,
        signed: s,
        onSignCharter: c,
        children: (0, n.jsxs)('div', {
            className: Z.scrollContentsContainer,
            children: [
                (0, n.jsx)(y.aG, {
                    guildId: l,
                    clanBadge: i.badge.imageHash,
                    clanTag: i.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: w.NC.SIZE_24,
                    className: Z.clanTagChiplet
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(d.X6q, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: Z.charterHeaderText,
                            children: S.NW.string(S.t['85S0//'])
                        }),
                        (0, n.jsx)(d.X6q, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: Z.charterHeaderText,
                            children: i.name
                        }),
                        (0, n.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: Z.establishedDate,
                            children: S.NW.format(S.t['7RpSYW'], { date: u })
                        })
                    ]
                }),
                (0, n.jsx)(N.p, {
                    applicationIds: f,
                    playstyle: i.playstyle,
                    className: a()(Z.charterBodyText, Z.gameSection)
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: Z.charterBodyText,
                    children: S.NW.string(S.t['YDTd9/'])
                })
            ]
        })
    });
}
function H(e) {
    var t,
        l,
        i,
        { guildId: s, onClose: o, onAccept: g } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var l,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var l,
                        n,
                        r = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (l = i[n]), t.indexOf(l) >= 0 || (r[l] = e[l]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (l = i[n]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            }
            return r;
        })(e, ['guildId', 'onClose', 'onAccept']);
    let y = (0, f.Dt)(),
        N = (0, j.Cc)(s),
        w = (0, j.E8)(s),
        [H, _] = r.useState(!0),
        [M, D] = r.useState(!1),
        E = r.useCallback(() => {
            g(), o();
        }, [g, o]);
    r.useEffect(() => {
        null != N || w || E();
    }, [N, E, w]);
    let k = r.useCallback(() => {
            H && (0, p.nE)(s, H, P.Sbl.CREATE_JOIN_GUILD_MODAL), E();
        }, [s, E, H]),
        A = (0, c.e7)([h.Z], () => h.Z.getGuild(s)),
        B = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        R = (0, c.e7)([m.ZP], () => (null != B ? m.ZP.getMember(s, B.id) : null)),
        I = (0, u.ZP)(),
        V = (0, v.nP)(null == N ? void 0 : null === (i = N.branding) || void 0 === i ? void 0 : i.primaryColor, [d.TVs.colors.BG_BRAND, 0.7]),
        F = d.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: I,
            saturation: 1
        }).hex(),
        W = (0, v.nj)(V, F, 'top center');
    return null == A || null == B || null == R || null == N
        ? null
        : (0, n.jsx)(
              d.Y0X,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var l = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(l);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(l).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(l, e).enumerable;
                              })
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = l[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = n);
                          });
                  }
                  return e;
              })({}, C)),
              (l = l =
                  {
                      transitionState: C.transitionState,
                      'aria-labelledby': y,
                      className: Z.modal,
                      size: d.CgR.DYNAMIC,
                      children: (0, n.jsxs)(d.hzk, {
                          className: Z.content,
                          style: W,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: Z.infoSide,
                                  children: [
                                      (0, n.jsxs)('div', {
                                          className: Z.titlesContainer,
                                          children: [
                                              (0, n.jsx)('div', {
                                                  className: Z.title,
                                                  children: (0, n.jsx)(d.X6q, {
                                                      variant: 'heading-xxl/medium',
                                                      children: S.NW.format(S.t.orbR8f, { name: A.name })
                                                  })
                                              }),
                                              (0, n.jsx)(d.Text, {
                                                  className: Z.subtitle,
                                                  variant: 'text-md/normal',
                                                  children: S.NW.string(S.t.sZHbAQ)
                                              })
                                          ]
                                      }),
                                      (0, n.jsx)(b.Z, {
                                          guildId: s,
                                          isTagAdopted: H,
                                          onChangeUseTag: _
                                      })
                                  ]
                              }),
                              (0, n.jsx)('div', {
                                  className: Z.scrollMainContainer,
                                  children: (0, n.jsx)(T, {
                                      guildId: s,
                                      clanInfo: N,
                                      signed: M,
                                      onSignCharter: D
                                  })
                              }),
                              (0, n.jsx)(O.Z, {
                                  onClick: k,
                                  color: d.zxk.Colors.BRAND,
                                  themeColor: V,
                                  fullWidth: !1,
                                  className: a()(Z.ctaButton, M ? Z.ctaButtonSigned : null),
                                  children: (0, n.jsxs)('div', {
                                      className: Z.ctaButtonInner,
                                      children: [
                                          (0, n.jsx)(d.Text, {
                                              color: 'currentColor',
                                              variant: 'text-md/medium',
                                              children: S.NW.string(S.t.aYmu19)
                                          }),
                                          (0, n.jsx)(d.d4D, {
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
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                  : (function (e, t) {
                        var l = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            l.push.apply(l, n);
                        }
                        return l;
                    })(Object(l)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                    }),
              t)
          );
}
