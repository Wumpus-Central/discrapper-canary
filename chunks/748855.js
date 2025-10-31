n.d(t, { L: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(106301),
    d = n(388032),
    p = n(948790),
    f = n(334405);
function h(e) {
    let { label: t, icon: n, setStatus: l, isFavorited: h, onFavoriteClick: m } = e,
        [g, b] = i.useState(!1),
        _ = (0, o.e7)([u.Z], () => u.Z.getFavoritedStatuses().length >= u.o),
        y = i.useCallback(
            (e) => {
                e.stopPropagation(), null == m || m();
            },
            [m],
        ),
        C = h ? c.r7p : c.vxU;
    return (0, r.jsxs)(c.P3F, {
        onClick: l,
        onMouseEnter: () => {
            b(!0);
        },
        onMouseLeave: () => {
            b(!1);
        },
        className: a()(f.item, f.labelContainer, p.container),
        children: [
            n,
            (0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: p.itemText,
                children: t,
            }),
            g &&
                null != m &&
                (0, r.jsx)(c.aML, {
                    "data-migration-pending": !0,
                    text: _ && !h ? d.intl.string(d.t.YSDH9n) : void 0,
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            c.P3F,
                            ((t = (function (e) {
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
                            })({}, e)),
                            (n = n =
                                {
                                    className: a()(p.centerAlign, p.favoriteIcon),
                                    onClick: y,
                                    children: (0, r.jsx)(C, {
                                        className: p.closeIcon,
                                        color: h ? s.Z.colors.ICON_FEEDBACK_WARNING : "currentColor",
                                    }),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                        );
                    },
                }),
        ],
    });
}
