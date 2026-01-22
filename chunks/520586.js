n.d(t, {
    Ay: () => G,
    fD: () => k,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(155718),
    l = n(383233),
    c = n(207963),
    u = n(953756),
    d = n(292366),
    f = n(544101),
    p = n(532719),
    _ = n(343778),
    h = n(162493),
    m = n(367232),
    g = n(650076),
    E = n(379107),
    b = n(126727),
    y = n(663235),
    O = n(620513),
    A = n(145885),
    v = n(371068),
    S = n(61266),
    I = n(324877),
    T = n(567971),
    C = n(615390),
    N = n(747176),
    R = n(383797),
    w = n(183924),
    P = n(920409),
    D = n(87528);

function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}

function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function k(e) {
    return e.map((e, t) =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                U(e, t.toString()),
                (0, r.jsx)(s.AC4, {
                    children: ",",
                }),
            ],
        }),
    );
}

function U(e, t) {
    switch (e.type) {
        case o.I5.ACTION_ROW:
            return (0, r.jsx)(
                N.A,
                M(L({}, e), {
                    renderComponents: k,
                }),
                t,
            );
        case o.I5.BUTTON:
            return (0, r.jsx)(d.A, L({}, e), t);
        case o.I5.STRING_SELECT:
            return (0, r.jsx)(E.A, L({}, e), t);
        case o.I5.CHANNEL_SELECT:
            return (0, r.jsx)(f.A, L({}, e), t);
        case o.I5.USER_SELECT:
        case o.I5.ROLE_SELECT:
        case o.I5.MENTIONABLE_SELECT:
            return (0, r.jsx)(m.A, L({}, e), t);
        case o.I5.TEXT_INPUT:
            return (0, r.jsx)(b.A, L({}, e), t);
        case o.I5.SECTION:
            return (0, r.jsx)(
                P.A,
                M(L({}, e), {
                    renderComponents: k,
                }),
                t,
            );
        case o.I5.TEXT_DISPLAY:
            return (0, r.jsx)(S.A, L({}, e), t);
        case o.I5.MEDIA_GALLERY:
            return (0, r.jsx)(A.A, L({}, e), t);
        case o.I5.THUMBNAIL:
            return (0, r.jsx)(I.A, L({}, e), t);
        case o.I5.FILE:
            return (0, r.jsx)(O.A, L({}, e), t);
        case o.I5.SEPARATOR:
            return (0, r.jsx)(v.A, L({}, e), t);
        case o.I5.CONTENT_INVENTORY_ENTRY:
            return (0, r.jsx)(C.A, L({}, e), t);
        case o.I5.CONTAINER:
            return (0, r.jsx)(
                R.A,
                M(L({}, e), {
                    renderComponents: k,
                }),
                t,
            );
        case o.I5.LABEL:
            return (0, r.jsx)(
                w.A,
                M(L({}, e), {
                    renderComponent: U,
                }),
                t,
            );
        case o.I5.FILE_UPLOAD:
            return (0, r.jsx)(h.A, L({}, e), t);
        case o.I5.CHECKPOINT_CARD:
            return (0, r.jsx)(y.A, L({}, e), t);
        case o.I5.RADIO_GROUP:
            return (0, r.jsx)(g.A, L({}, e), t);
        case o.I5.CHECKBOX_GROUP:
            return (0, r.jsx)(_.A, L({}, e), t);
        case o.I5.CHECKBOX:
            return (0, r.jsx)(p.A, L({}, e), t);
        default:
            return (0, r.jsx)(T.A, {}, t);
    }
}

function G(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: i } = t,
        [s, o] = (0, u.zn)();
    return 0 === i.length
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
                      ref: s,
                      children: (0, r.jsx)(u.O7.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, r.jsx)("div", {
                                  ref: e,
                                  className: a()([
                                      D.k,
                                      {
                                          [D.z]: (0, l._c)(t),
                                      },
                                  ]),
                                  children: k(i),
                              }),
                      }),
                  }),
              }),
          });
}
