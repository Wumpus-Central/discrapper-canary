n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(421380),
    o = n(397927),
    c = n(58149),
    u = n(954571),
    d = n(83241),
    p = n(926466),
    f = n(652215),
    h = n(985018),
    A = n(978927);

function g(e) {
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
let m = a().debounce(c.Ay.trackWithMetadata, 500),
    b = (e) => {
        let {
            guild: t,
            title: n,
            message: l,
            image: a,
            type: d,
            imageMarginX: p,
            imageMarginTop: g,
            trackingSource: b,
            undismissable: _,
            onDismissed: E,
            onClick: O,
            cta: y,
            ctaColor: I,
        } = e;
        i.useEffect(() => {
            m(f.HAw.CHANNEL_NOTICE_VIEWED, {
                notice_type: d,
                guild_id: t.id,
            });
        }, [t.id, d]);
        let v = null;
        "function" == typeof y
            ? (v = y())
            : null != y &&
              (v = (0, r.jsx)(s.$n, {
                  "data-migration-pending": !0,
                  className: A.HM,
                  size: s.$n.Sizes.SMALL,
                  onClick: () => {
                      null != d &&
                          u.default.track(f.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: b,
                              guild_id: t.id,
                              notice_type: d,
                          }),
                          null == O || O();
                  },
                  fullWidth: !0,
                  color: I,
                  children: y,
              }));
        let S = null != p ? "".concat(p, "px") : "16px";
        return (0, r.jsxs)("div", {
            className: A.kX,
            children: [
                !0 === _
                    ? null
                    : (0, r.jsx)(o.DUT, {
                          onClick: () => {
                              c.Ay.trackWithMetadata(f.HAw.CHANNEL_NOTICE_CLOSED, {
                                  notice_type: d,
                              }),
                                  null == E || E();
                          },
                          className: A.VN,
                          "aria-label": h.intl.string(h.t.WAI6xu),
                          children: (0, r.jsx)(o.PGe, {
                              size: "md",
                              color: "currentColor",
                              className: A.ut,
                          }),
                      }),
                (0, r.jsx)("div", {
                    className: A.ZS,
                    style: {
                        marginTop: "".concat(g, "px"),
                        marginLeft: S,
                        marginRight: S,
                    },
                    children: (0, r.jsx)("img", {
                        className: A.Sl,
                        src: a,
                        alt: "",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: A.iU,
                    children: [
                        null != n
                            ? (0, r.jsx)(o.Heading, {
                                  variant: "heading-md/semibold",
                                  className: A.DD,
                                  children: n,
                              })
                            : null,
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: l,
                        }),
                        v,
                    ],
                }),
            ],
        });
    },
    _ = function (e) {
        let { showRedesignedChannelNotice: t } = (0, d.P)(!0);
        return t ? (0, r.jsx)(p.A, g({}, e)) : (0, r.jsx)(b, g({}, e));
    };
