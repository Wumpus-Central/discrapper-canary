t.d(n, { PV: () => _, Td: () => M });
var i = t(477900),
    l = t(582128),
    r = t(435558),
    s = t(192308),
    a = t(513461),
    o = t(503698),
    c = t.n(o),
    d = t(930235),
    u = t(651300),
    x = t(834730),
    m = t(661531),
    f = t(916099),
    h = t(673185),
    j = t(565787),
    v = t(622629),
    p = t(772838),
    g = t(939249),
    E = t(22231),
    P = t(241326),
    y = t(828208),
    w = t(375708),
    b = t(136516);
function R(e) {
    let { type: n } = e,
        t = l.useMemo(() => {
            switch (n) {
                case a.rX.MULTIPLE_CHOICE:
                    return { icon: f.ListBulletsIcon, text: w.intl.string(w.t.ooKh3m) };
                case a.rX.PARAGRAPH:
                    return { icon: h.$, text: w.intl.string(w.t.gG0JBN) };
                case a.rX.TEXT_INPUT:
                    return { icon: (0, j.k)(y.A), text: w.intl.string(w.t.w6Q9wz) };
                case a.rX.TERMS:
                    return { icon: v.B, text: w.intl.string(w.t["3pz9t3"]) };
                default:
                    return null;
            }
        }, [n]);
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: b.L6,
              children: [
                  (0, i.jsx)(t.icon, { size: "xs", color: "currentColor" }),
                  (0, i.jsx)(x.E, { variant: "text-sm/medium", tag: "span", children: t.text }),
              ],
          });
}
function T(e) {
    let { title: n, field: t } = e;
    return (0, i.jsx)("div", {
        className: b._Q,
        children: (0, i.jsxs)("div", {
            className: b.ds,
            children: [
                (0, i.jsx)(x.E, { variant: "text-md/medium", className: b.ID, children: n }),
                (0, i.jsx)(R, { type: t.field_type }),
            ],
        }),
    });
}
let L = "FORM_FIELD";
function A(e) {
    let { index: n, field: t, isDropHovered: s, onDrop: a } = e,
        o = (0, r.debounce)(async (e, n, t) => {
            await a(e, n, t);
        }),
        x = l.useRef(null),
        [, f] = (0, d.i)({
            type: L,
            item: { index: n, field: t },
            end: (e, n) => {
                null == e || n.didDrop() || o(e.field, null, !0);
            },
        }),
        [, h] = (0, u.H)({
            accept: L,
            hover: (e, t) => {
                let { index: i } = e,
                    l = x.current?.getBoundingClientRect(),
                    r = t.getClientOffset();
                if (null == l || null == r) return;
                let s = (l.bottom - l.top) / 2,
                    a = r.y - l.top;
                (i < n && a < s) || (i > n && a < s) || i === n || o(e.field, n, !1);
            },
            drop: (e) => {
                o(e.field, n, !0);
            },
        });
    return (
        l.useLayoutEffect(
            () => (
                f(h(x)),
                () => {
                    h(null), f(null);
                }
            ),
            [f, h],
        ),
        (0, i.jsxs)("div", {
            ref: x,
            "data-dnd-name": `field-${n}`,
            className: c()(b.cK, { [b.TG]: s }),
            children: [
                (0, i.jsx)("div", {
                    className: c()(b.VU, b.oE),
                    children: (0, i.jsx)(p.W, {
                        size: "xs",
                        className: b.co,
                        color: m.A.unsafe_rawColors.PRIMARY_400.css,
                    }),
                }),
                (0, i.jsx)(T, { ...e }),
            ],
        })
    );
}
function C(e) {
    return (0, i.jsxs)("div", {
        className: c()(b.e4, b.oE),
        children: [
            (0, i.jsx)("div", {
                className: b.Th,
                children: e.isDragEnabled ? (0, i.jsx)(A, { ...e }) : (0, i.jsx)(T, { ...e }),
            }),
            "side" === e.actionsLocation &&
                (0, i.jsxs)("div", {
                    className: c()(b.fc, b.oE, { [b.ZM]: e.canRemove }),
                    children: [
                        (0, i.jsx)(g.D, {
                            className: b.hP,
                            onClick: e.onEdit,
                            "aria-label": w.intl.string(w.t.bt75uw),
                            children: (0, i.jsx)(E.PencilIcon, { size: "xs" }),
                        }),
                        e.canRemove &&
                            (0, i.jsx)(g.D, {
                                className: b.hP,
                                onClick: e.onRemove,
                                "aria-label": w.intl.string(w.t.N86XcP),
                                children: (0, i.jsx)(P.TrashIcon, { size: "xs" }),
                            }),
                    ],
                }),
        ],
    });
}
let I = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: s,
            onEdit: a,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(C, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: s,
            onEdit: a,
            onRemove: o,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    },
    X = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: s,
            onEdit: a,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(C, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: s,
            onEdit: a,
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
            onDrop: s,
            onEdit: a,
            onRemove: o,
            canRemove: c,
            title: d,
            actionsLocation: u,
        } = e;
        return (0, i.jsx)(C, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: s,
            onEdit: a,
            onRemove: o,
            title: d,
            canRemove: c,
            actionsLocation: u,
        });
    },
    D = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: s,
            onEdit: a,
            onRemove: o,
            canRemove: c,
            actionsLocation: d,
        } = e;
        return (0, i.jsx)(C, {
            field: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: r,
            onDrop: s,
            onEdit: a,
            onRemove: o,
            title: n.label,
            canRemove: c,
            actionsLocation: d,
        });
    };
function M(e) {
    let {
        dropHoveredIndex: n,
        formField: l,
        guild: o,
        index: c,
        isDragEnabled: d,
        submittedGuildJoinRequestsCount: u,
        removeFormField: x,
        updateFormField: m,
        updateFormFieldOrder: f,
        canRemove: h,
        actionsLocation: j,
    } = e;
    async function v() {
        await x(c);
    }
    async function p(e) {
        await m(c, e);
    }
    async function g(e, n, t) {
        await f(e, n, t);
    }
    let E = (0, r.uniqueId)(),
        P = n === c,
        y = {
            key: E,
            index: c,
            isDragEnabled: d,
            isDropHovered: P,
            onEdit: function () {
                0 === u
                    ? z(l, p, o)
                    : (0, s.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([t.e("868193"), t.e("81226")]).then(t.bind(t, 928529));
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
            actionsLocation: j,
        };
    switch (l.field_type) {
        case a.rX.TERMS:
            return (0, i.jsx)(N, { title: w.intl.string(w.t["55+gic"]), formField: l, ...y });
        case a.rX.PARAGRAPH:
            return (0, i.jsx)(X, { formField: l, ...y });
        case a.rX.TEXT_INPUT:
            return (0, i.jsx)(D, { formField: l, ...y });
        case a.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(I, { formField: l, ...y });
        default:
            return null;
    }
}
function _(e, n, l) {
    switch (e) {
        case a.rX.TERMS:
            return (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("289789"),
                    t.e("977412"),
                    t.e("955424"),
                    t.e("890152"),
                    t.e("78618"),
                    t.e("132435"),
                ]).then(t.bind(t, 24094));
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n, guild: l });
            });
        case a.rX.PARAGRAPH:
            return (0, s.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: e } = await Promise.all([
                    t.e("955424"),
                    t.e("78618"),
                    t.e("926510"),
                ]).then(t.bind(t, 542717));
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case a.rX.TEXT_INPUT:
            return (0, s.openModalLazy)(async () => {
                let { TextInputFormFieldModal: e } = await Promise.all([
                    t.e("955424"),
                    t.e("78618"),
                    t.e("926510"),
                ]).then(t.bind(t, 542717));
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
        case a.rX.MULTIPLE_CHOICE:
            return (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e("955424"), t.e("78618"), t.e("452981")]).then(
                    t.bind(t, 520660),
                );
                return (t) => (0, i.jsx)(e, { ...t, field: void 0, onSave: n });
            });
    }
}
function z(e, n, l) {
    switch (e.field_type) {
        case a.rX.TERMS:
            return (0, s.openModalLazy)(async () => {
                let { default: r } = await Promise.all([
                    t.e("289789"),
                    t.e("977412"),
                    t.e("955424"),
                    t.e("890152"),
                    t.e("78618"),
                    t.e("132435"),
                ]).then(t.bind(t, 24094));
                return (t) => (0, i.jsx)(r, { ...t, field: e, onSave: n, guild: l });
            });
        case a.rX.PARAGRAPH:
            return (0, s.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: l } = await Promise.all([
                    t.e("955424"),
                    t.e("78618"),
                    t.e("926510"),
                ]).then(t.bind(t, 542717));
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
        case a.rX.TEXT_INPUT:
            return (0, s.openModalLazy)(async () => {
                let { TextInputFormFieldModal: l } = await Promise.all([
                    t.e("955424"),
                    t.e("78618"),
                    t.e("926510"),
                ]).then(t.bind(t, 542717));
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
        case a.rX.MULTIPLE_CHOICE:
            return (0, s.openModalLazy)(async () => {
                let { default: l } = await Promise.all([t.e("955424"), t.e("78618"), t.e("452981")]).then(
                    t.bind(t, 520660),
                );
                return (t) => (0, i.jsx)(l, { ...t, field: e, onSave: n });
            });
    }
}
