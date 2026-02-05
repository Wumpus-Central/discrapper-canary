n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    c = n(131346),
    d = n(522437),
    o = n(158954),
    u = n(827734),
    x = n(397927),
    m = n(828208),
    h = n(513461),
    v = n(985018),
    j = n(592454);
function f(e) {
    let { type: t } = e,
        n = s.useMemo(() => {
            switch (t) {
                case h.rX.MULTIPLE_CHOICE:
                    return { icon: x.jsc, text: v.intl.string(v.t.ooKh3m) };
                case h.rX.PARAGRAPH:
                    return { icon: x.$tc, text: v.intl.string(v.t.gG0JBN) };
                case h.rX.TEXT_INPUT:
                    return { icon: (0, x.kHD)(m.A), text: v.intl.string(v.t.w6Q9wz) };
                case h.rX.TERMS:
                    return { icon: x.B8Q, text: v.intl.string(v.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: j.L6,
              children: [
                  (0, i.jsx)(n.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(o.EYj, { variant: "text-sm/medium", tag: "span", children: n.text }),
              ],
          });
}
function g(e) {
    let { title: t, children: n, fieldStyle: s, field: l } = e;
    return (0, i.jsx)("div", {
        className: j._Q,
        children:
            s === h.Vf.REGULAR
                ? (0, i.jsxs)("div", {
                      className: j.pK,
                      children: [(0, i.jsx)(o.EYj, { variant: "text-md/medium", className: j.Gp, children: t }), n],
                  })
                : (0, i.jsxs)("div", {
                      className: j.ds,
                      children: [
                          (0, i.jsx)(o.EYj, { variant: "text-md/medium", className: j.ID, children: t }),
                          (0, i.jsx)(f, { type: l.field_type }),
                      ],
                  }),
    });
}
let p = "FORM_FIELD";
function A(e) {
    let { index: t, field: n, isDropHovered: l, onDrop: o, fieldStyle: m } = e,
        v = (0, a.debounce)(async (e, t, n) => {
            await o(e, t, n);
        }),
        f = s.useRef(null),
        [, A] = (0, c.i)({
            type: p,
            item: { index: t, field: n },
            end: (e, t) => {
                null == e || t.didDrop() || v(e.field, null, !0);
            },
        }),
        [, T] = (0, d.H)({
            accept: p,
            hover: (e, n) => {
                let { index: i } = e,
                    s = f.current?.getBoundingClientRect(),
                    l = n.getClientOffset();
                if (null == s || null == l) return;
                let r = (s.bottom - s.top) / 2,
                    a = l.y - s.top;
                (i < t && a < r) || (i > t && a < r) || i === t || v(e.field, t, !1);
            },
            drop: (e) => {
                v(e.field, t, !0);
            },
        });
    return (
        s.useLayoutEffect(
            () => (
                A(T(f)),
                () => {
                    T(null), A(null);
                }
            ),
            [A, T],
        ),
        (0, i.jsxs)("div", {
            ref: f,
            "data-dnd-name": `field-${t}`,
            className: r()(j.cK, { [j.TG]: l }),
            children: [
                (0, i.jsx)("div", {
                    className: r()(j.VU, { [j.oE]: m === h.Vf.COMPACT }),
                    children: (0, i.jsx)(x.WP0, {
                        size: "xs",
                        className: j.co,
                        color: u.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(g, { ...e }),
            ],
        })
    );
}
function T(e) {
    return (0, i.jsxs)("div", {
        className: r()(j.e4, { [j.oE]: e.fieldStyle === h.Vf.COMPACT }),
        children: [
            (0, i.jsx)("div", {
                className: j.Th,
                children: e.isDragEnabled ? (0, i.jsx)(A, { ...e }) : (0, i.jsx)(g, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: r()(j.fc, { [j.oE]: e.fieldStyle === h.Vf.COMPACT, [j.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(x.DUT, {
                            className: j.hP,
                            onClick: e.onEdit,
                            "aria-label": v.intl.string(v.t.bt75uw),
                            children: (0, i.jsx)(x.R2l, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(x.DUT, {
                                className: j.hP,
                                onClick: e.onRemove,
                                "aria-label": v.intl.string(v.t.N86XcP),
                                children: (0, i.jsx)(x.ucK, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
