n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(891371),
    c = n(692992),
    d = n(793030),
    u = n(692547),
    g = n(481060),
    m = n(838221),
    f = n(246364),
    p = n(388032),
    b = n(938645);
function h(e) {
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
function x(e) {
    let { type: t } = e,
        n = i.useMemo(() => {
            switch (t) {
                case f.QJ.MULTIPLE_CHOICE:
                    return {
                        icon: g.jE$,
                        text: p.intl.string(p.t.ooKh3m),
                    };
                case f.QJ.PARAGRAPH:
                    return {
                        icon: g.OvV,
                        text: p.intl.string(p.t.gG0JBN),
                    };
                case f.QJ.TEXT_INPUT:
                    return {
                        icon: (0, g.GSL)(m.Z),
                        text: p.intl.string(p.t.w6Q9wz),
                    };
                case f.QJ.TERMS:
                    return {
                        icon: g.snC,
                        text: p.intl.string(p.t["3pz9t3"]),
                    };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: b.typeTag,
              children: [
                  (0, r.jsx)(n.icon, {
                      size: "xs",
                      color: "currentColor",
                  }),
                  (0, r.jsx)(d.xvT, {
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
        className: b.backgroundContainer,
        children:
            i === f.it.REGULAR
                ? (0, r.jsxs)("div", {
                      className: b.containerPadding,
                      children: [
                          (0, r.jsx)(d.xvT, {
                              variant: "text-md/medium",
                              className: b.containerTitle,
                              children: t,
                          }),
                          n,
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: b.compactContainer,
                      children: [
                          (0, r.jsx)(d.xvT, {
                              variant: "text-md/medium",
                              className: b.compactTitle,
                              children: t,
                          }),
                          (0, r.jsx)(x, { type: l.field_type }),
                      ],
                  }),
    });
}
let v = "FORM_FIELD";
function O(e) {
    let { index: t, field: n, isDropHovered: l, onDrop: d, fieldStyle: m } = e,
        p = (0, s.debounce)(async (e, t, n) => {
            await d(e, t, n);
        }),
        x = i.useRef(null),
        [, O] = (0, o.c)({
            type: v,
            item: {
                index: t,
                field: n,
            },
            end: (e, t) => {
                null == e || t.didDrop() || p(e.field, null, !0);
            },
        }),
        [, C] = (0, c.L)({
            accept: v,
            hover: (e, n) => {
                var r;
                let { index: i } = e,
                    l = null == (r = x.current) ? void 0 : r.getBoundingClientRect(),
                    a = n.getClientOffset();
                if (null == l || null == a) return;
                let s = (l.bottom - l.top) / 2,
                    o = a.y - l.top;
                (i < t && o < s) || (i > t && o < s) || i === t || p(e.field, t, !1);
            },
            drop: (e) => {
                p(e.field, t, !0);
            },
        });
    return (
        i.useLayoutEffect(
            () => (
                O(C(x)),
                () => {
                    C(null), O(null);
                }
            ),
            [O, C],
        ),
        (0, r.jsxs)("div", {
            ref: x,
            "data-dnd-name": "field-".concat(t),
            className: a()(b.dragContainer, { [b.dropHovered]: l }),
            children: [
                (0, r.jsx)("div", {
                    className: a()(b.dragIconContainer, { [b.compact]: m === f.it.COMPACT }),
                    children: (0, r.jsx)(g.Vni, {
                        size: "xs",
                        className: b.dragIcon,
                        color: u.Z.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, r.jsx)(j, h({}, e)),
            ],
        })
    );
}
function C(e) {
    return (0, r.jsxs)("div", {
        className: a()(b.formFieldContainer, { [b.compact]: e.fieldStyle === f.it.COMPACT }),
        children: [
            (0, r.jsx)("div", {
                className: b.spacingContainer,
                children: e.isDragEnabled ? (0, r.jsx)(O, h({}, e)) : (0, r.jsx)(j, h({}, e)),
            }),
            "side" === e.actionsLocation &&
                (0, r.jsxs)("div", {
                    className: a()(b.actionButtonsContainer, {
                        [b.compact]: e.fieldStyle === f.it.COMPACT,
                        [b.canRemove]: e.canRemove,
                    }),
                    children: [
                        (0, r.jsx)(g.P3F, {
                            className: b.actionButton,
                            onClick: e.onEdit,
                            "aria-label": p.intl.string(p.t.bt75uw),
                            children: (0, r.jsx)(g.vdY, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, r.jsx)(g.P3F, {
                                className: b.actionButton,
                                onClick: e.onRemove,
                                "aria-label": p.intl.string(p.t.N86XcP),
                                children: (0, r.jsx)(g.XHJ, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
