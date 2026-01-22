n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    c = n(131346),
    o = n(744818),
    d = n(158954),
    u = n(827734),
    f = n(397927),
    g = n(828208),
    b = n(513461),
    m = n(985018),
    p = n(592454);

function x(e) {
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

function h(e) {
    let { type: t } = e,
        n = i.useMemo(() => {
            switch (t) {
                case b.rX.MULTIPLE_CHOICE:
                    return {
                        icon: f.jsc,
                        text: m.intl.string(m.t.ooKh3m),
                    };
                case b.rX.PARAGRAPH:
                    return {
                        icon: f.$tc,
                        text: m.intl.string(m.t.gG0JBN),
                    };
                case b.rX.TEXT_INPUT:
                    return {
                        icon: (0, f.kHD)(g.A),
                        text: m.intl.string(m.t.w6Q9wz),
                    };
                case b.rX.TERMS:
                    return {
                        icon: f.B8Q,
                        text: m.intl.string(m.t["3pz9t3"]),
                    };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: p.L6,
              children: [
                  (0, r.jsx)(n.icon, {
                      size: "xs",
                      color: "currentColor",
                  }),
                  (0, r.jsx)(d.EYj, {
                      variant: "text-sm/medium",
                      tag: "span",
                      children: n.text,
                  }),
              ],
          });
}

function j(e) {
    let { title: t, children: n, fieldStyle: i, field: l } = e;
    return (0, r.jsx)("div", {
        className: p._Q,
        children:
            i === b.Vf.REGULAR
                ? (0, r.jsxs)("div", {
                      className: p.pK,
                      children: [
                          (0, r.jsx)(d.EYj, {
                              variant: "text-md/medium",
                              className: p.Gp,
                              children: t,
                          }),
                          n,
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: p.ds,
                      children: [
                          (0, r.jsx)(d.EYj, {
                              variant: "text-md/medium",
                              className: p.ID,
                              children: t,
                          }),
                          (0, r.jsx)(h, {
                              type: l.field_type,
                          }),
                      ],
                  }),
    });
}
let O = "FORM_FIELD";

function y(e) {
    let { index: t, field: n, isDropHovered: l, onDrop: d, fieldStyle: g } = e,
        m = (0, a.debounce)(async (e, t, n) => {
            await d(e, t, n);
        }),
        h = i.useRef(null),
        [, y] = (0, c.i)({
            type: O,
            item: {
                index: t,
                field: n,
            },
            end: (e, t) => {
                null == e || t.didDrop() || m(e.field, null, !0);
            },
        }),
        [, v] = (0, o.H)({
            accept: O,
            hover: (e, n) => {
                var r;
                let { index: i } = e,
                    l = null == (r = h.current) ? void 0 : r.getBoundingClientRect(),
                    s = n.getClientOffset();
                if (null == l || null == s) return;
                let a = (l.bottom - l.top) / 2,
                    c = s.y - l.top;
                (i < t && c < a) || (i > t && c < a) || i === t || m(e.field, t, !1);
            },
            drop: (e) => {
                m(e.field, t, !0);
            },
        });
    return (
        i.useLayoutEffect(
            () => (
                y(v(h)),
                () => {
                    v(null), y(null);
                }
            ),
            [y, v],
        ),
        (0, r.jsxs)("div", {
            ref: h,
            "data-dnd-name": "field-".concat(t),
            className: s()(p.cK, {
                [p.TG]: l,
            }),
            children: [
                (0, r.jsx)("div", {
                    className: s()(p.VU, {
                        [p.oE]: g === b.Vf.COMPACT,
                    }),
                    children: (0, r.jsx)(f.WP0, {
                        size: "xs",
                        className: p.co,
                        color: u.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, r.jsx)(j, x({}, e)),
            ],
        })
    );
}

function v(e) {
    return (0, r.jsxs)("div", {
        className: s()(p.e4, {
            [p.oE]: e.fieldStyle === b.Vf.COMPACT,
        }),
        children: [
            (0, r.jsx)("div", {
                className: p.Th,
                children: e.isDragEnabled ? (0, r.jsx)(y, x({}, e)) : (0, r.jsx)(j, x({}, e)),
            }),
            "side" === e.actionsLocation &&
                (0, r.jsxs)("div", {
                    className: s()(p.fc, {
                        [p.oE]: e.fieldStyle === b.Vf.COMPACT,
                        [p.ZM]: e.canRemove,
                    }),
                    children: [
                        (0, r.jsx)(f.DUT, {
                            className: p.hP,
                            onClick: e.onEdit,
                            "aria-label": m.intl.string(m.t.bt75uw),
                            children: (0, r.jsx)(f.R2l, {
                                size: "xs",
                            }),
                        }),
                        e.canRemove &&
                            (0, r.jsx)(f.DUT, {
                                className: p.hP,
                                onClick: e.onRemove,
                                "aria-label": m.intl.string(m.t.N86XcP),
                                children: (0, r.jsx)(f.ucK, {
                                    size: "xs",
                                }),
                            }),
                    ],
                }),
        ],
    });
}
