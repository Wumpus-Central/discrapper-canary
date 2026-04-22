n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(735438),
    o = n(131346),
    c = n(522437),
    d = n(158954),
    u = n(827734),
    x = n(397927),
    m = n(828208),
    v = n(513461),
    j = n(985018),
    h = n(637671);
function f(e) {
    let { type: t } = e,
        n = r.useMemo(() => {
            switch (t) {
                case v.rX.MULTIPLE_CHOICE:
                    return { icon: x.jsc, text: j.intl.string(j.t.ooKh3m) };
                case v.rX.PARAGRAPH:
                    return { icon: x.$tc, text: j.intl.string(j.t.gG0JBN) };
                case v.rX.TEXT_INPUT:
                    return { icon: (0, x.kHD)(m.A), text: j.intl.string(j.t.w6Q9wz) };
                case v.rX.TERMS:
                    return { icon: x.B8Q, text: j.intl.string(j.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: h.L6,
              children: [
                  (0, i.jsx)(n.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(d.EYj, { variant: "text-sm/medium", tag: "span", children: n.text }),
              ],
          });
}
function p(e) {
    let { title: t, field: n } = e;
    return (0, i.jsx)("div", {
        className: h._Q,
        children: (0, i.jsxs)("div", {
            className: h.ds,
            children: [
                (0, i.jsx)(d.EYj, { variant: "text-md/medium", className: h.ID, children: t }),
                (0, i.jsx)(f, { type: n.field_type }),
            ],
        }),
    });
}
let g = "FORM_FIELD";
function A(e) {
    let { index: t, field: n, isDropHovered: s, onDrop: d } = e,
        m = (0, a.debounce)(async (e, t, n) => {
            await d(e, t, n);
        }),
        v = r.useRef(null),
        [, j] = (0, o.i)({
            type: g,
            item: { index: t, field: n },
            end: (e, t) => {
                null == e || t.didDrop() || m(e.field, null, !0);
            },
        }),
        [, f] = (0, c.H)({
            accept: g,
            hover: (e, n) => {
                let { index: i } = e,
                    r = v.current?.getBoundingClientRect(),
                    s = n.getClientOffset();
                if (null == r || null == s) return;
                let l = (r.bottom - r.top) / 2,
                    a = s.y - r.top;
                (i < t && a < l) || (i > t && a < l) || i === t || m(e.field, t, !1);
            },
            drop: (e) => {
                m(e.field, t, !0);
            },
        });
    return (
        r.useLayoutEffect(
            () => (
                j(f(v)),
                () => {
                    f(null), j(null);
                }
            ),
            [j, f],
        ),
        (0, i.jsxs)("div", {
            ref: v,
            "data-dnd-name": `field-${t}`,
            className: l()(h.cK, { [h.TG]: s }),
            children: [
                (0, i.jsx)("div", {
                    className: l()(h.VU, h.oE),
                    children: (0, i.jsx)(x.WP0, {
                        size: "xs",
                        className: h.co,
                        color: u.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(p, { ...e }),
            ],
        })
    );
}
function E(e) {
    return (0, i.jsxs)("div", {
        className: l()(h.e4, h.oE),
        children: [
            (0, i.jsx)("div", {
                className: h.Th,
                children: e.isDragEnabled ? (0, i.jsx)(A, { ...e }) : (0, i.jsx)(p, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: l()(h.fc, h.oE, { [h.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(x.DUT, {
                            className: h.hP,
                            onClick: e.onEdit,
                            "aria-label": j.intl.string(j.t.bt75uw),
                            children: (0, i.jsx)(x.R2l, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(x.DUT, {
                                className: h.hP,
                                onClick: e.onRemove,
                                "aria-label": j.intl.string(j.t.N86XcP),
                                children: (0, i.jsx)(x.ucK, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
