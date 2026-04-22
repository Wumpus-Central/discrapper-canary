n.d(t, { PV: () => m, Td: () => x });
var i = n(627968);
n(64700);
var r = n(735438),
    s = n(397927),
    l = n(513461),
    a = n(910919),
    o = n(286056),
    c = n(645745),
    d = n(468287),
    u = n(985018);
function x(e) {
    let {
            dropHoveredIndex: t,
            formField: x,
            guild: m,
            index: j,
            isDragEnabled: h,
            submittedGuildJoinRequestsCount: f,
            removeFormField: p,
            updateFormField: g,
            updateFormFieldOrder: A,
            canRemove: E,
            actionsLocation: w,
        } = e,
        T = async () => {
            await p(j);
        },
        R = async (e) => {
            await g(j, e);
        },
        b = async (e, t, n) => {
            await A(e, t, n);
        },
        P = (0, r.uniqueId)(),
        y = t === j,
        C = {
            key: P,
            index: j,
            isDragEnabled: h,
            isDropHovered: y,
            onEdit: () => {
                0 === f
                    ? v(x, R, m)
                    : (0, s.mMO)(async () => {
                          let { default: e } = await n.e("5705").then(n.bind(n, 83024));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: m.id,
                                  submittedGuildJoinRequestsCount: f,
                                  onConfirm: () => v(x, R, m),
                              });
                      });
            },
            onRemove: T,
            onDrop: b,
            canRemove: E,
            actionsLocation: w,
        };
    switch (x.field_type) {
        case l.rX.TERMS:
            return (0, i.jsx)(c.A, { title: u.intl.string(u.t["55+gic"]), formField: x, ...C });
        case l.rX.PARAGRAPH:
            return (0, i.jsx)(o.A, { formField: x, ...C });
        case l.rX.TEXT_INPUT:
            return (0, i.jsx)(d.A, { formField: x, ...C });
        case l.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(a.A, { formField: x, ...C });
        default:
            return null;
    }
}
function m(e, t, r) {
    switch (e) {
        case l.rX.TERMS:
            return (0, s.mMO)(async () => {
                let { default: e } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t, guild: r });
            });
        case l.rX.PARAGRAPH:
            return (0, s.mMO)(async () => {
                let { ParagraphFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case l.rX.TEXT_INPUT:
            return (0, s.mMO)(async () => {
                let { TextInputFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case l.rX.MULTIPLE_CHOICE:
            return (0, s.mMO)(async () => {
                let { default: e } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
    }
}
function v(e, t, r) {
    switch (e.field_type) {
        case l.rX.TERMS:
            return (0, s.mMO)(async () => {
                let { default: s } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(s, { ...n, field: e, onSave: t, guild: r });
            });
        case l.rX.PARAGRAPH:
            return (0, s.mMO)(async () => {
                let { ParagraphFormFieldModal: r } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(r, { ...n, field: e, onSave: t });
            });
        case l.rX.TEXT_INPUT:
            return (0, s.mMO)(async () => {
                let { TextInputFormFieldModal: r } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(r, { ...n, field: e, onSave: t });
            });
        case l.rX.MULTIPLE_CHOICE:
            return (0, s.mMO)(async () => {
                let { default: r } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(r, { ...n, field: e, onSave: t });
            });
    }
}
