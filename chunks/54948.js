t.d(n, { PV: () => _, Td: () => I });
var i = t(627968),
    l = t(64700),
    r = t(735438),
    a = t(192308),
    s = t(513461),
    o = t(503698),
    c = t.n(o),
    d = t(312742),
    u = t(295868),
    x = t(834730),
    m = t(661531),
    j = t(916099),
    h = t(673185),
    f = t(565787),
    v = t(622629),
    p = t(772838),
    g = t(939249),
    E = t(22231),
    y = t(241326),
    P = t(828208),
    w = t(375708),
    R = t(637671);
function b(e) {
    let { type: n } = e,
        t = l.useMemo(() => {
            switch (n) {
                case s.rX.MULTIPLE_CHOICE:
                    return { icon: j.j, text: w.intl.string(w.t.ooKh3m) };
                case s.rX.PARAGRAPH:
                    return { icon: h.$, text: w.intl.string(w.t.gG0JBN) };
                case s.rX.TEXT_INPUT:
                    return { icon: (0, f.k)(P.A), text: w.intl.string(w.t.w6Q9wz) };
                case s.rX.TERMS:
                    return { icon: v.B, text: w.intl.string(w.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [n]);
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: R.L6,
              children: [
                  (0, i.jsx)(t.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(x.E, { variant: "text-sm/medium", tag: "span", children: t.text }),
              ],
          });
}
function T(e) {
    let { title: n, field: t } = e;
    return (0, i.jsx)("div", {
        className: R._Q,
        children: (0, i.jsxs)("div", {
            className: R.ds,
            children: [
                (0, i.jsx)(x.E, { variant: "text-md/medium", className: R.ID, children: n }),
                (0, i.jsx)(b, { type: t.field_type }),
            ],
        }),
    });
}
let A = "FORM_FIELD";
function C(e) {
    let { index: n, field: t, isDropHovered: a, onDrop: s } = e,
        o = (0, r.debounce)(async (e, n, t) => {
            await s(e, n, t);
        }),
        x = l.useRef(null),
        [, j] = (0, d.i)({
            type: A,
            item: { index: n, field: t },
            end: (e, n) => {
                null == e || n.didDrop() || o(e.field, null, !0);
            },
        }),
        [, h] = (0, u.H)({
            accept: A,
            hover: (e, t) => {
                let { index: i } = e,
                    l = x.current?.getBoundingClientRect(),
                    r = t.getClientOffset();
                if (null == l || null == r) return;
                let a = (l.bottom - l.top) / 2,
                    s = r.y - l.top;
                (i < n && s < a) || (i > n && s < a) || i === n || o(e.field, n, !1);
            },
            drop: (e) => {
                o(e.field, n, !0);
            },
        });
    return (
        l.useLayoutEffect(
            () => (
                j(h(x)),
                () => {
                    h(null), j(null);
                }
            ),
            [j, h],
        ),
        (0, i.jsxs)("div", {
            ref: x,
            "data-dnd-name": `field-${n}`,
            className: c()(R.cK, { [R.TG]: a }),
            children: [
                (0, i.jsx)("div", {
                    className: c()(R.VU, R.oE),
                    children: (0, i.jsx)(p.W, {
                        size: "xs",
                        className: R.co,
                        color: m.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(T, { ...e }),
            ],
        })
    );
}
function L(e) {
    return (0, i.jsxs)("div", {
        className: c()(R.e4, R.oE),
        children: [
            (0, i.jsx)("div", {
                className: R.Th,
                children: e.isDragEnabled ? (0, i.jsx)(C, { ...e }) : (0, i.jsx)(T, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: c()(R.fc, R.oE, { [R.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(g.D, {
                            className: R.hP,
                            onClick: e.onEdit,
                            "aria-label": w.intl.string(w.t.bt75uw),
                            children: (0, i.jsx)(E.R, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(g.D, {
                                className: R.hP,
                                onClick: e.onRemove,
                                "aria-label": w.intl.string(w.t.N86XcP),
                                children: (0, i.jsx)(y.u, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
let X = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(L, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    },
    N = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(L, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    },
    D = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            canRemove: c,
            title: d,
            actionsLocation: u,
        } = e;
        return (0, i.jsx)(L, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            title: d,
            canRemove: c,
            actionsLocation: u,
        });
    },
    M = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(L, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: a,
            onEdit: s,
            onRemove: o,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    };
function I(e) {
    let {
            dropHoveredIndex: n,
            formField: l,
            guild: o,
            index: c,
            isDragEnabled: d,
            submittedGuildJoinRequestsCount: u,
            removeFormField: x,
            updateFormField: m,
            updateFormFieldOrder: j,
            canRemove: h,
            actionsLocation: f,
        } = e,
        v = async () => {
            await x(c);
        },
        p = async (e) => {
            await m(c, e);
        },
        g = async (e, n, t) => {
            await j(e, n, t);
        },
        E = (0, r.uniqueId)(),
        y = n === c,
        P = {
            key: E,
            index: c,
            isDragEnabled: d,
            isDropHovered: y,
            onEdit: () => {
                0 === u
                    ? z(l, p, o)
                    : (0, a.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([t.e("9204"), t.e("81226")]).then(t.bind(t, 928529));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: o.id,
                                  submittedGuildJoinRequestsCount: u,
                                  onConfirm: () => z(l, p, o),
                              });
                      });
            },
            onRemove: v,
            onDrop: g,
            canRemove: h,
            actionsLocation: f,
        };
    switch (l.field_type) {
        case s.rX.TERMS:
            return (0, i.jsx)(D, { title: w.intl.string(w.t["55+gic"]), formField: l, ...P });
        case s.rX.PARAGRAPH:
            return (0, i.jsx)(N, { formField: l, ...P });
        case s.rX.TEXT_INPUT:
            return (0, i.jsx)(M, { formField: l, ...P });
        case s.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(X, { formField: l, ...P });
        default:
            return null;
    }
}
function _(e, n, l) {
    switch (e) {
        case s.rX.TERMS:
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e("44710"), t.e("90152"), t.e("78618"), t.e("32435")]).then(
                    t.bind(t, 24094),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n, guild: l });
            });
        case s.rX.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: e } = await Promise.all([t.e("44710"), t.e("78618"), t.e("26510")]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case s.rX.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
                let { TextInputFormFieldModal: e } = await Promise.all([t.e("44710"), t.e("78618"), t.e("26510")]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case s.rX.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e("44710"), t.e("78618"), t.e("52981")]).then(
                    t.bind(t, 520660),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
    }
}
function z(e, n, l) {
    switch (e.field_type) {
        case s.rX.TERMS:
            return (0, a.openModalLazy)(async () => {
                let { default: r } = await Promise.all([t.e("44710"), t.e("90152"), t.e("78618"), t.e("32435")]).then(
                    t.bind(t, 24094),
                );
                return (t) => (0, i.jsx)(r, { ...t, field: e, onSave: n, guild: l });
            });
        case s.rX.PARAGRAPH:
            return (0, a.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: l } = await Promise.all([t.e("44710"), t.e("78618"), t.e("26510")]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
        case s.rX.TEXT_INPUT:
            return (0, a.openModalLazy)(async () => {
                let { TextInputFormFieldModal: l } = await Promise.all([t.e("44710"), t.e("78618"), t.e("26510")]).then(
                    t.bind(t, 542717),
                );
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
        case s.rX.MULTIPLE_CHOICE:
            return (0, a.openModalLazy)(async () => {
                let { default: l } = await Promise.all([t.e("44710"), t.e("78618"), t.e("52981")]).then(
                    t.bind(t, 520660),
                );
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
    }
}
