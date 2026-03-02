d.d(c, { A: () => v, u: () => k });
var a = d(311907),
    t = d(736653),
    s = d(775602),
    A = d(676279),
    n = d(414345),
    b = d(788868),
    f = d(818348),
    p = d(601070),
    o = d(587295),
    r = d(631831),
    L = d(482147),
    _ = d(184738),
    E = d(180260),
    i = d(336471),
    D = d(359057),
    m = d(823088),
    M = d(2631),
    h = d(884437),
    T = d(291705),
    O = d(339132),
    R = d(981933),
    u = d(610929),
    l = d(630758),
    N = d(510772),
    g = d(332965),
    P = d(307065),
    I = d(566094),
    U = d(315835),
    S = d(43418),
    F = d(750214),
    C = d(116883),
    w = d(489781),
    V = d(124124),
    J = d(885952),
    K = d(520373);
function k(e) {
    let c = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        d = (0, t.Ay)();
    return c
        ? (function (e, c) {
              switch (e) {
                  case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                      return c === f.NJ.DARK ? U.A : w.A;
                  case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                      return c === f.NJ.DARK ? S.A : V.A;
                  case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                      return c === f.NJ.DARK ? C.A : K.A;
                  case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                      return c === f.NJ.DARK ? F.A : J.A;
              }
          })(e, d)
        : (function (e, c) {
              if ((0, n.g1)({ location: "getAnimatedImageUrl" }))
                  switch (e) {
                      case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                          return (0, A.TM)() ? p.A : r.A;
                      case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                          return (0, A.TM)() ? L.A : E.A;
                      case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                          return (0, A.TM)() ? M.A : T.A;
                      case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                          return (0, A.TM)() ? i.A : m.A;
                  }
              switch (e) {
                  case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                      return c === f.NJ.DARK ? O.A : N.A;
                  case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                      return c === f.NJ.DARK ? R.A : g.A;
                  case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                      return c === f.NJ.DARK ? l.A : I.A;
                  case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                      return c === f.NJ.DARK ? u.A : P.A;
              }
          })(e, d);
}
function v(e) {
    return (0, a.bG)([s.A], () => s.A.useReducedMotion)
        ? (function (e) {
              switch (e) {
                  case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                      return { src: o.A, type: "image" };
                  case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                      return { src: _.A, type: "image" };
                  case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                      return { src: h.A, type: "image" };
                  case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                      return { src: D.A, type: "image" };
              }
          })(e)
        : (function (e) {
              let c = "";
              switch (e) {
                  case b.e.ANIMATED_AVATAR_MODAL_UPSELL:
                      c = (0, A.TM)() ? p.A : r.A;
                      break;
                  case b.e.ANIMATED_BANNER_MODAL_UPSELL:
                      c = (0, A.TM)() ? L.A : E.A;
                      break;
                  case b.e.PROFILE_EFFECT_MODAL_UPSELL:
                      c = (0, A.TM)() ? M.A : T.A;
                      break;
                  case b.e.AVATAR_DECORATION_MODAL_UPSELL:
                      c = (0, A.TM)() ? i.A : m.A;
              }
              return { type: "video", src: c, loop: !0 };
          })(e);
}
