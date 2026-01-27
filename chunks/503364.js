n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(990078),
    o = n(397927),
    s = n(442433),
    l = n(50268),
    c = n(67518),
    u = n(985018);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e) {
    let { applicationId: t, className: n } = e,
        d = i.useRef(null),
        p = (0, l.A)({
            id: t,
            label: u.intl.string(u.t["FfCL+6"]),
        }),
        h = (0, c.n)(t);
    return null == p && null == h
        ? null
        : (0, r.jsx)(o.YNO, {
              targetElementRef: d,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.W1t, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, s.Z_)(), t();
                      },
                      "aria-label": u.intl.string(u.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.rXV, {
                                  children: p,
                              }),
                              (0, r.jsx)(o.rXV, {
                                  children: h,
                              }),
                          ],
                      }),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(a.m, {
                      text: u.intl.string(u.t["UKOtz+"]),
                      children: (0, r.jsx)(
                          o.DUT,
                          _(
                              f(
                                  {
                                      innerRef: d,
                                      className: n,
                                  },
                                  e,
                              ),
                              {
                                  children: (0, r.jsx)(o.jNK, {
                                      size: "xs",
                                      color: o.LU0.colors.WHITE,
                                  }),
                              },
                          ),
                      ),
                  }),
          });
}
