n.d(t, { A: () => C });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(735438),
    o = n(131346),
    d = n(744818),
    c = n(834730),
    u = n(827734),
    x = n(916099),
    h = n(673185),
    v = n(565787),
    m = n(622629),
    j = n(772838),
    f = n(939249),
    p = n(22231),
    g = n(241326),
    w = n(828208),
    A = n(513461),
    E = n(985018),
    y = n(637671);
function T(e) {
    let { type: t } = e,
        n = a.useMemo(() => {
            switch (t) {
                case A.rX.MULTIPLE_CHOICE:
                    return { icon: x.j, text: E.intl.string(E.t.ooKh3m) };
                case A.rX.PARAGRAPH:
                    return { icon: h.$, text: E.intl.string(E.t.gG0JBN) };
                case A.rX.TEXT_INPUT:
                    return { icon: (0, v.k)(w.A), text: E.intl.string(E.t.w6Q9wz) };
                case A.rX.TERMS:
                    return { icon: m.B, text: E.intl.string(E.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: y.L6,
              children: [
                  (0, i.jsx)(n.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(c.E, { variant: "text-sm/medium", tag: "span", children: n.text }),
              ],
          });
}
function M(e) {
    let { title: t, field: n } = e;
    return (0, i.jsx)("div", {
        className: y._Q,
        children: (0, i.jsxs)("div", {
            className: y.ds,
            children: [
                (0, i.jsx)(c.E, { variant: "text-md/medium", className: y.ID, children: t }),
                (0, i.jsx)(T, { type: n.field_type }),
            ],
        }),
    });
}
let R = "FORM_FIELD";
function b(e) {
    let { index: t, field: n, isDropHovered: r, onDrop: c } = e,
        x = (0, s.debounce)(async (e, t, n) => {
            await c(e, t, n);
        }),
        h = a.useRef(null),
        [, v] = (0, o.i)({
            type: R,
            item: { index: t, field: n },
            end: (e, t) => {
                null == e || t.didDrop() || x(e.field, null, !0);
            },
        }),
        [, m] = (0, d.H)({
            accept: R,
            hover: (e, n) => {
                let { index: i } = e,
                    a = h.current?.getBoundingClientRect(),
                    r = n.getClientOffset();
                if (null == a || null == r) return;
                let l = (a.bottom - a.top) / 2,
                    s = r.y - a.top;
                (i < t && s < l) || (i > t && s < l) || i === t || x(e.field, t, !1);
            },
            drop: (e) => {
                x(e.field, t, !0);
            },
        });
    return (
        a.useLayoutEffect(
            () => (
                v(m(h)),
                () => {
                    m(null), v(null);
                }
            ),
            [v, m],
        ),
        (0, i.jsxs)("div", {
            ref: h,
            "data-dnd-name": `field-${t}`,
            className: l()(y.cK, { [y.TG]: r }),
            children: [
                (0, i.jsx)("div", {
                    className: l()(y.VU, y.oE),
                    children: (0, i.jsx)(j.W, {
                        size: "xs",
                        className: y.co,
                        color: u.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(M, { ...e }),
            ],
        })
    );
}
function C(e) {
    return (0, i.jsxs)("div", {
        className: l()(y.e4, y.oE),
        children: [
            (0, i.jsx)("div", {
                className: y.Th,
                children: e.isDragEnabled ? (0, i.jsx)(b, { ...e }) : (0, i.jsx)(M, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: l()(y.fc, y.oE, { [y.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(f.D, {
                            className: y.hP,
                            onClick: e.onEdit,
                            "aria-label": E.intl.string(E.t.bt75uw),
                            children: (0, i.jsx)(p.R, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(f.D, {
                                className: y.hP,
                                onClick: e.onRemove,
                                "aria-label": E.intl.string(E.t.N86XcP),
                                children: (0, i.jsx)(g.u, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
