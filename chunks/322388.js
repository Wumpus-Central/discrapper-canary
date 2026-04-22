n.d(t, { PV: () => h, Td: () => x });
var i = n(627968);
n(64700);
var a = n(735438),
    r = n(192308),
    l = n(513461),
    s = n(910919),
    o = n(286056),
    d = n(645745),
    c = n(468287),
    u = n(985018);
function x(e) {
    let {
            dropHoveredIndex: t,
            formField: x,
            guild: h,
            index: m,
            isDragEnabled: j,
            submittedGuildJoinRequestsCount: f,
            removeFormField: p,
            updateFormField: g,
            updateFormFieldOrder: w,
            canRemove: A,
            actionsLocation: E,
        } = e,
        y = async () => {
            await p(m);
        },
        T = async (e) => {
            await g(m, e);
        },
        M = async (e, t, n) => {
            await w(e, t, n);
        },
        R = (0, a.uniqueId)(),
        b = t === m,
        C = {
            key: R,
            index: m,
            isDragEnabled: j,
            isDropHovered: b,
            onEdit: () => {
                0 === f
                    ? v(x, T, h)
                    : (0, r.openModalLazy)(async () => {
                          let { default: e } = await n.e("5705").then(n.bind(n, 83024));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: h.id,
                                  submittedGuildJoinRequestsCount: f,
                                  onConfirm: () => v(x, T, h),
                              });
                      });
            },
            onRemove: y,
            onDrop: M,
            canRemove: A,
            actionsLocation: E,
        };
    switch (x.field_type) {
        case l.rX.TERMS:
            return (0, i.jsx)(d.A, { title: u.intl.string(u.t["55+gic"]), formField: x, ...C });
        case l.rX.PARAGRAPH:
            return (0, i.jsx)(o.A, { formField: x, ...C });
        case l.rX.TEXT_INPUT:
            return (0, i.jsx)(c.A, { formField: x, ...C });
        case l.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(s.A, { formField: x, ...C });
        default:
            return null;
    }
}
function h(e, t, a) {
    switch (e) {
        case l.rX.TERMS:
            return (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t, guild: a });
            });
        case l.rX.PARAGRAPH:
            return (0, r.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case l.rX.TEXT_INPUT:
            return (0, r.openModalLazy)(async () => {
                let { TextInputFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case l.rX.MULTIPLE_CHOICE:
            return (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
    }
}
function v(e, t, a) {
    switch (e.field_type) {
        case l.rX.TERMS:
            return (0, r.openModalLazy)(async () => {
                let { default: r } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(r, { ...n, field: e, onSave: t, guild: a });
            });
        case l.rX.PARAGRAPH:
            return (0, r.openModalLazy)(async () => {
                let { ParagraphFormFieldModal: a } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(a, { ...n, field: e, onSave: t });
            });
        case l.rX.TEXT_INPUT:
            return (0, r.openModalLazy)(async () => {
                let { TextInputFormFieldModal: a } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(a, { ...n, field: e, onSave: t });
            });
        case l.rX.MULTIPLE_CHOICE:
            return (0, r.openModalLazy)(async () => {
                let { default: a } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(a, { ...n, field: e, onSave: t });
            });
    }
}
