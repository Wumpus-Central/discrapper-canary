n.d(t, {
    Ay: () => U,
    fD: () => k,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(397927),
    o = n(155718),
    s = n(383233),
    c = n(207963),
    u = n(953756),
    d = n(292366),
    p = n(544101),
    m = n(532719),
    f = n(343778),
    O = n(162493),
    b = n(367232),
    y = n(650076),
    h = n(379107),
    j = n(126727),
    g = n(430506),
    A = n(620513),
    v = n(145885),
    E = n(371068),
    C = n(61266),
    x = n(324877),
    N = n(567971),
    I = n(615390),
    P = n(747176),
    S = n(383797),
    _ = n(183924),
    T = n(920409),
    R = n(532294),
    w = n(87528);

function D(e) {
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

function k(e) {
    return e.map((e, t) =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (function e(t, n) {
                    switch (t.type) {
                        case o.I5.ACTION_ROW:
                            return (0, r.jsx)(
                                P.A,
                                L(D({}, t), {
                                    renderComponents: k,
                                }),
                                n,
                            );
                        case o.I5.BUTTON:
                            return (0, r.jsx)(d.A, D({}, t), n);
                        case o.I5.STRING_SELECT:
                            return (0, r.jsx)(h.A, D({}, t), n);
                        case o.I5.CHANNEL_SELECT:
                            return (0, r.jsx)(p.A, D({}, t), n);
                        case o.I5.USER_SELECT:
                        case o.I5.ROLE_SELECT:
                        case o.I5.MENTIONABLE_SELECT:
                            return (0, r.jsx)(b.A, D({}, t), n);
                        case o.I5.TEXT_INPUT:
                            return (0, r.jsx)(j.A, D({}, t), n);
                        case o.I5.SECTION:
                            return (0, r.jsx)(
                                T.A,
                                L(D({}, t), {
                                    renderComponents: k,
                                }),
                                n,
                            );
                        case o.I5.TEXT_DISPLAY:
                            return (0, r.jsx)(C.A, D({}, t), n);
                        case o.I5.MEDIA_GALLERY:
                            return (0, r.jsx)(v.A, D({}, t), n);
                        case o.I5.THUMBNAIL:
                            return (0, r.jsx)(x.A, D({}, t), n);
                        case o.I5.FILE:
                            return (0, r.jsx)(A.A, D({}, t), n);
                        case o.I5.SEPARATOR:
                            return (0, r.jsx)(E.A, D({}, t), n);
                        case o.I5.CONTENT_INVENTORY_ENTRY:
                            return (0, r.jsx)(I.A, D({}, t), n);
                        case o.I5.CONTAINER:
                            return (0, r.jsx)(
                                S.A,
                                L(D({}, t), {
                                    renderComponents: k,
                                }),
                                n,
                            );
                        case o.I5.LABEL:
                            return (0, r.jsx)(
                                _.A,
                                L(D({}, t), {
                                    renderComponent: e,
                                }),
                                n,
                            );
                        case o.I5.FILE_UPLOAD:
                            return (0, r.jsx)(O.A, D({}, t), n);
                        case o.I5.CHECKPOINT_CARD:
                            if (t.checkpointData.version === R.w.V2025) return (0, r.jsx)(g.A, D({}, t), n);
                            return (0, r.jsx)(N.A, {}, n);
                        case o.I5.RADIO_GROUP:
                            return (0, r.jsx)(y.A, D({}, t), n);
                        case o.I5.CHECKBOX_GROUP:
                            return (0, r.jsx)(f.A, D({}, t), n);
                        case o.I5.CHECKBOX:
                            return (0, r.jsx)(m.A, D({}, t), n);
                        default:
                            return (0, r.jsx)(N.A, {}, n);
                    }
                })(e, t.toString()),
                (0, r.jsx)(i.AC4, {
                    children: ",",
                }),
            ],
        }),
    );
}

function U(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: l } = t,
        [i, o] = (0, u.zn)();
    return 0 === l.length
        ? null
        : (0, r.jsx)(c.f5, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, r.jsx)(u.O7.Root, {
                  containerInnerWidth: o,
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
                                      w.k,
                                      {
                                          [w.z]: (0, s._c)(t),
                                      },
                                  ]),
                                  children: k(l),
                              }),
                      }),
                  }),
              }),
          });
}
