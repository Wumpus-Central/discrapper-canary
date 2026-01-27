n.d(t, {
    Ay: () => k,
    fD: () => D,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(397927),
    s = n(155718),
    o = n(383233),
    c = n(207963),
    u = n(953756),
    d = n(292366),
    m = n(544101),
    f = n(532719),
    p = n(343778),
    h = n(162493),
    b = n(367232),
    g = n(650076),
    x = n(379107),
    y = n(126727),
    v = n(663235),
    j = n(620513),
    C = n(145885),
    _ = n(371068),
    A = n(61266),
    O = n(324877),
    E = n(567971),
    S = n(615390),
    N = n(747176),
    I = n(383797),
    P = n(183924),
    w = n(920409),
    T = n(87528);

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function D(e) {
    return e.map((e, t) =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case s.I5.ACTION_ROW:
                            return (0, r.jsx)(
                                N.A,
                                L(R({}, t), {
                                    renderComponents: D,
                                }),
                                n,
                            );
                        case s.I5.BUTTON:
                            return (0, r.jsx)(d.A, R({}, t), n);
                        case s.I5.STRING_SELECT:
                            return (0, r.jsx)(x.A, R({}, t), n);
                        case s.I5.CHANNEL_SELECT:
                            return (0, r.jsx)(m.A, R({}, t), n);
                        case s.I5.USER_SELECT:
                        case s.I5.ROLE_SELECT:
                        case s.I5.MENTIONABLE_SELECT:
                            return (0, r.jsx)(b.A, R({}, t), n);
                        case s.I5.TEXT_INPUT:
                            return (0, r.jsx)(y.A, R({}, t), n);
                        case s.I5.SECTION:
                            return (0, r.jsx)(
                                w.A,
                                L(R({}, t), {
                                    renderComponents: D,
                                }),
                                n,
                            );
                        case s.I5.TEXT_DISPLAY:
                            return (0, r.jsx)(A.A, R({}, t), n);
                        case s.I5.MEDIA_GALLERY:
                            return (0, r.jsx)(C.A, R({}, t), n);
                        case s.I5.THUMBNAIL:
                            return (0, r.jsx)(O.A, R({}, t), n);
                        case s.I5.FILE:
                            return (0, r.jsx)(j.A, R({}, t), n);
                        case s.I5.SEPARATOR:
                            return (0, r.jsx)(_.A, R({}, t), n);
                        case s.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, r.jsx)(S.A, R({}, t), n);
                        case s.I5.CONTAINER:
                            return (0, r.jsx)(
                                I.A,
                                L(R({}, t), {
                                    renderComponents: D,
                                }),
                                n,
                            );
                        case s.I5.LABEL:
                            return (0, r.jsx)(
                                P.A,
                                L(R({}, t), {
                                    renderComponent: e,
                                }),
                                n,
                            );
                        case s.I5.FILE_UPLOAD:
                            return (0, r.jsx)(h.A, R({}, t), n);
                        case s.I5.CHECKPOINT_CARD:
                            return (0, r.jsx)(v.A, R({}, t), n);
                        case s.I5.RADIO_GROUP:
                            return (0, r.jsx)(g.A, R({}, t), n);
                        case s.I5.CHECKBOX_GROUP:
                            return (0, r.jsx)(p.A, R({}, t), n);
                        case s.I5.CHECKBOX:
                            return (0, r.jsx)(f.A, R({}, t), n);
                        default:
                            return (0, r.jsx)(E.A, {}, n);
                    }
                })(e, t.toString()),
                (0, r.jsx)(i.AC4, {
                    children: ",",
                }),
            ],
        }),
    );
}

function k(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [i, s] = (0, u.zn)();
    return 0 === l.length
        ? null
        : (0, r.jsx)(c.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, r.jsx)(u.O7.Root, {
                  containerInnerWidth: s,
                  children: (0, r.jsx)("div", {
                      style: {
                          width: "100%",
                      },
                      ref: i,
                      children: (0, r.jsx)(u.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, r.jsx)("div", {
                                  ref: e,
                                  className: a()([
                                      T.k,
                                      {
                                          [T.z]: (0, o._c)(t),
                                      },
                                  ]),
                                  children: D(l),
                              }),
                      }),
                  }),
              }),
          });
}
