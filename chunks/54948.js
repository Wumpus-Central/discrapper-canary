n.d(t, { PV: () => H, Td: () => D });
var i = n(627968),
    a = n(64700),
    r = n(735438),
    s = n(192308),
    l = n(513461),
    o = n(503698),
    c = n.n(o),
    d = n(312742),
    u = n(295868),
    x = n(834730),
    h = n(661531),
    m = n(916099),
    j = n(673185),
    v = n(565787),
    f = n(622629),
    p = n(772838),
    g = n(939249),
    w = n(22231),
    E = n(241326),
    y = n(828208),
    A = n(985018),
    T = n(637671);
function M(e) {
    let { type: t } = e,
        n = a.useMemo(() => {
            switch (t) {
                case l.rX.MULTIPLE_CHOICE:
                    return { icon: m.j, text: A.intl.string(A.t.ooKh3m) };
                case l.rX.PARAGRAPH:
                    return { icon: j.$, text: A.intl.string(A.t.gG0JBN) };
                case l.rX.TEXT_INPUT:
                    return { icon: (0, v.k)(y.A), text: A.intl.string(A.t.w6Q9wz) };
                case l.rX.TERMS:
                    return { icon: f.B, text: A.intl.string(A.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [t]);
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: T.L6,
              children: [
                  (0, i.jsx)(n.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(x.E, { variant: "text-sm/medium", tag: "span", children: n.text }),
              ],
          });
}
function R(e) {
    let { title: t, field: n } = e;
    return (0, i.jsx)("div", {
        className: T._Q,
        children: (0, i.jsxs)("div", {
            className: T.ds,
            children: [
                (0, i.jsx)(x.E, { variant: "text-md/medium", className: T.ID, children: t }),
                (0, i.jsx)(M, { type: n.field_type }),
            ],
        }),
    });
}
let b = "FORM_FIELD";
function C(e) {
    let { index: t, field: n, isDropHovered: s, onDrop: l } = e,
        o = (0, r.debounce)(async (e, t, n) => {
            await l(e, t, n);
        }),
        x = a.useRef(null),
        [, m] = (0, d.i)({
            type: b,
            item: { index: t, field: n },
            end: (e, t) => {
                null == e || t.didDrop() || o(e.field, null, !0);
            },
        }),
        [, j] = (0, u.H)({
            accept: b,
            hover: (e, n) => {
                let { index: i } = e,
                    a = x.current?.getBoundingClientRect(),
                    r = n.getClientOffset();
                if (null == a || null == r) return;
                let s = (a.bottom - a.top) / 2,
                    l = r.y - a.top;
                (i < t && l < s) || (i > t && l < s) || i === t || o(e.field, t, !1);
            },
            drop: (e) => {
                o(e.field, t, !0);
            },
        });
    return (
        a.useLayoutEffect(
            () => (
                m(j(x)),
                () => {
                    j(null), m(null);
                }
            ),
            [m, j],
        ),
        (0, i.jsxs)("div", {
            ref: x,
            "data-dnd-name": `field-${t}`,
            className: c()(T.cK, { [T.TG]: s }),
            children: [
                (0, i.jsx)("div", {
                    className: c()(T.VU, T.oE),
                    children: (0, i.jsx)(p.W, {
                        size: "xs",
                        className: T.co,
                        color: h.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(R, { ...e }),
            ],
        })
    );
}
function N(e) {
    return (0, i.jsxs)("div", {
        className: c()(T.e4, T.oE),
        children: [
            (0, i.jsx)("div", {
                className: T.Th,
                children: e.isDragEnabled ? (0, i.jsx)(C, { ...e }) : (0, i.jsx)(R, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: c()(T.fc, T.oE, { [T.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(g.D, {
                            className: T.hP,
                            onClick: e.onEdit,
                            "aria-label": A.intl.string(A.t.bt75uw),
                            children: (0, i.jsx)(w.R, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(g.D, {
                                className: T.hP,
                                onClick: e.onRemove,
                                "aria-label": A.intl.string(A.t.N86XcP),
                                children: (0, i.jsx)(E.u, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
let P = function (e) {
        let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(N, {
            field: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            title: t.label,
            canRemove: c,
            actionsLocation: d,
        });
    },
    L = function (e) {
        let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(N, {
            field: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            title: t.label,
            canRemove: c,
            actionsLocation: d,
        });
    },
    I = function (e) {
        let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            canRemove: c,
            title: d,
            actionsLocation: u,
        } = e;
        return (0, i.jsx)(N, {
            field: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            title: d,
            canRemove: c,
            actionsLocation: u,
        });
    },
    X = function (e) {
        let {
            formField: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(N, {
            field: t,
            index: n,
            isDragEnabled: a,
            isDropHovered: r,
            onDrop: s,
            onEdit: l,
            onRemove: o,
            title: t.label,
            canRemove: c,
            actionsLocation: d,
        });
    };
function D(e) {
    let {
            dropHoveredIndex: t,
            formField: a,
            guild: o,
            index: c,
            isDragEnabled: d,
            submittedGuildJoinRequestsCount: u,
            removeFormField: x,
            updateFormField: h,
            updateFormFieldOrder: m,
            canRemove: j,
            actionsLocation: v,
        } = e,
        f = async () => {
            await x(c);
        },
        p = async (e) => {
            await h(c, e);
        },
        g = async (e, t, n) => {
            await m(e, t, n);
        },
        w = (0, r.uniqueId)(),
        E = t === c,
        y = {
            key: w,
            index: c,
            isDragEnabled: d,
            isDropHovered: E,
            onEdit: () => {
                0 === u
                    ? _(a, p, o)
                    : (0, s.openModalLazy)(async () => {
                          let { default: e } = await n.e("81226").then(n.bind(n, 928529));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: o.id,
                                  submittedGuildJoinRequestsCount: u,
                                  onConfirm: () => _(a, p, o),
                              });
                      });
            },
            onRemove: f,
            onDrop: g,
            canRemove: j,
            actionsLocation: v,
        };
    switch (a.field_type) {
        case l.rX.TERMS:
            return (0, i.jsx)(I, { title: A.intl.string(A.t["55+gic"]), formField: a, ...y });
        case l.rX.PARAGRAPH:
            return (0, i.jsx)(L, { formField: a, ...y });
        case l.rX.TEXT_INPUT:
            return (0, i.jsx)(X, { formField: a, ...y });
        case l.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(P, { formField: a, ...y });
        default:
            return null;
    }
}
function H(e, t, a) {
    switch (e) {
        case l.rX.TERMS:
            return (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t, guild: a });
            });
        case l.rX.PARAGRAPH:
            return (0, s.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case l.rX.TEXT_INPUT:
            return (0, s.openModalLazy)(async () => {
                let { TextInputFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case l.rX.MULTIPLE_CHOICE:
            return (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
    }
}
function _(e, t, a) {
    switch (e.field_type) {
        case l.rX.TERMS:
            return (0, s.openModalLazy)(async () => {
                let { default: r } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(r, { ...n, field: e, onSave: t, guild: a });
            });
        case l.rX.PARAGRAPH:
            return (0, s.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: a } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(a, { ...n, field: e, onSave: t });
            });
        case l.rX.TEXT_INPUT:
            return (0, s.openModalLazy)(async () => {
                let { TextInputFormFieldModal: a } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(a, { ...n, field: e, onSave: t });
            });
        case l.rX.MULTIPLE_CHOICE:
            return (0, s.openModalLazy)(async () => {
                let { default: a } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(a, { ...n, field: e, onSave: t });
            });
    }
}
