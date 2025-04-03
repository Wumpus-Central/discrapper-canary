r.d(t, { default: () => D }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    s = r(913527),
    o = r.n(s),
    c = r(442837),
    u = r(481060),
    d = r(410030),
    f = r(313201),
    m = r(271383),
    p = r(430824),
    h = r(594174),
    g = r(709054),
    x = r(931240),
    j = r(645896),
    b = r(603368),
    y = r(532490),
    v = r(380365),
    O = r(979264),
    C = r(620929),
    w = r(284019),
    N = r(308083),
    P = r(981631),
    S = r(388032),
    Z = r(343574);
function T(e) {
    var t;
    let { guildId: r, clanInfo: i, signed: s, onSignCharter: c } = e,
        d = l.useMemo(() => {
            let e = g.default.extractTimestamp(r);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [r]),
        f = l.useMemo(() => new Set(i.games), [i.games]);
    return (0, n.jsx)(y.Z, {
        guildId: r,
        signHintPosition: y.p.LEFT,
        primaryColor: null == (t = i.branding) ? void 0 : t.primaryColor,
        signed: s,
        onSignCharter: c,
        children: (0, n.jsxs)('div', {
            className: Z.scrollContentsContainer,
            children: [
                (0, n.jsx)(O.aG, {
                    guildId: r,
                    clanBadge: i.badge.imageHash,
                    clanTag: i.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: N.NC.SIZE_24,
                    className: Z.clanTagChiplet
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(u.X6q, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: Z.charterHeaderText,
                            children: S.NW.string(S.t['85S0//'])
                        }),
                        (0, n.jsx)(u.X6q, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: Z.charterHeaderText,
                            children: i.name
                        }),
                        (0, n.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: Z.establishedDate,
                            children: S.NW.format(S.t['7RpSYW'], { date: d })
                        })
                    ]
                }),
                (0, n.jsx)(C.p, {
                    applicationIds: f,
                    playstyle: i.playstyle,
                    className: a()(Z.charterBodyText, Z.gameSection)
                }),
                (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: Z.charterBodyText,
                    children: S.NW.string(S.t['YDTd9/'])
                })
            ]
        })
    });
}
function D(e) {
    var t,
        r,
        i,
        { guildId: s, onClose: o, onAccept: g } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['guildId', 'onClose', 'onAccept']);
    let O = (0, f.Dt)(),
        C = (0, j.Cc)(s),
        N = (0, j.E8)(s),
        [D, E] = l.useState(!0),
        [H, k] = l.useState(!1),
        _ = l.useCallback(() => {
            g(), o();
        }, [g, o]);
    l.useEffect(() => {
        null != C || N || _();
    }, [C, _, N]);
    let M = l.useCallback(() => {
            D && (0, x.nE)(s, D, P.Sbl.CREATE_JOIN_GUILD_MODAL), _();
        }, [s, _, D]),
        A = (0, c.e7)([p.Z], () => p.Z.getGuild(s)),
        B = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
        R = (0, c.e7)([m.ZP], () => (null != B ? m.ZP.getMember(s, B.id) : null)),
        I = (0, d.ZP)(),
        F = (0, b.nP)(null == C || null == (i = C.branding) ? void 0 : i.primaryColor, [u.TVs.colors.BG_BRAND, 0.7]),
        V = u.TVs.colors.BG_SURFACE_OVERLAY.resolve({
            theme: I,
            saturation: 1
        }).hex(),
        W = (0, b.nj)(F, V, 'top center');
    return null == A || null == B || null == R || null == C
        ? null
        : (0, n.jsx)(
              u.Y0X,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              })
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = r[t]),
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
              })({}, y)),
              (r = r =
                  {
                      transitionState: y.transitionState,
                      'aria-labelledby': O,
                      className: Z.modal,
                      size: u.CgR.DYNAMIC,
                      children: (0, n.jsxs)(u.hzk, {
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
                                                  children: (0, n.jsx)(u.X6q, {
                                                      variant: 'heading-xxl/medium',
                                                      children: S.NW.format(S.t.orbR8f, { name: A.name })
                                                  })
                                              }),
                                              (0, n.jsx)(u.Text, {
                                                  className: Z.subtitle,
                                                  variant: 'text-md/normal',
                                                  children: S.NW.string(S.t.sZHbAQ)
                                              })
                                          ]
                                      }),
                                      (0, n.jsx)(v.Z, {
                                          guildId: s,
                                          isTagAdopted: D,
                                          onChangeUseTag: E
                                      })
                                  ]
                              }),
                              (0, n.jsx)('div', {
                                  className: Z.scrollMainContainer,
                                  children: (0, n.jsx)(T, {
                                      guildId: s,
                                      clanInfo: C,
                                      signed: H,
                                      onSignCharter: k
                                  })
                              }),
                              (0, n.jsx)(w.Z, {
                                  onClick: M,
                                  color: u.zxk.Colors.BRAND,
                                  themeColor: F,
                                  fullWidth: !1,
                                  className: a()(Z.ctaButton, H ? Z.ctaButtonSigned : null),
                                  children: (0, n.jsxs)('div', {
                                      className: Z.ctaButtonInner,
                                      children: [
                                          (0, n.jsx)(u.Text, {
                                              color: 'currentColor',
                                              variant: 'text-md/medium',
                                              children: S.NW.string(S.t.aYmu19)
                                          }),
                                          (0, n.jsx)(u.d4D, {
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
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t)
          );
}
