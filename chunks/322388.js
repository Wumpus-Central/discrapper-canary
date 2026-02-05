n.d(t, { PV: () => m, Td: () => x });
var i = n(627968);
n(64700);
var s = n(735438),
    l = n(397927),
    r = n(513461),
    a = n(910919),
    c = n(286056),
    d = n(645745),
    o = n(468287),
    u = n(985018);
function x(e) {
    let {
            dropHoveredIndex: t,
            formField: x,
            guild: m,
            index: v,
            isDragEnabled: j,
            submittedGuildJoinRequestsCount: f,
            removeFormField: g,
            updateFormField: p,
            updateFormFieldOrder: A,
            canRemove: T,
            actionsLocation: C,
            fieldStyle: E,
        } = e,
        w = async () => {
            await g(v);
        },
        y = async (e) => {
            await p(v, e);
        },
        P = async (e, t, n) => {
            await A(e, t, n);
        },
        R = (0, s.uniqueId)(),
        b = t === v,
        N = {
            key: R,
            index: v,
            isDragEnabled: j,
            isDropHovered: b,
            onEdit: () => {
                0 === f
                    ? h(x, y, m)
                    : (0, l.mMO)(async () => {
                          let { default: e } = await n.e("5705").then(n.bind(n, 83024));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  guildId: m.id,
                                  submittedGuildJoinRequestsCount: f,
                                  onConfirm: () => h(x, y, m),
                              });
                      });
            },
            onRemove: w,
            onDrop: P,
            canRemove: T,
            actionsLocation: C,
            fieldStyle: E,
        };
    switch (x.field_type) {
        case r.rX.TERMS:
            return (0, i.jsx)(d.A, {
                channelId: m.rulesChannelId,
                title: E === r.Vf.COMPACT ? u.intl.string(u.t["55+gic"]) : u.intl.string(u.t["53vNcB"]),
                formField: x,
                ...N,
            });
        case r.rX.PARAGRAPH:
            return (0, i.jsx)(c.A, { formField: x, ...N });
        case r.rX.TEXT_INPUT:
            return (0, i.jsx)(o.A, { formField: x, ...N });
        case r.rX.MULTIPLE_CHOICE:
            return (0, i.jsx)(a.A, { formField: x, ...N });
        default:
            return null;
    }
}
function m(e, t, s) {
    switch (e) {
        case r.rX.TERMS:
            return (0, l.mMO)(async () => {
                let { default: e } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t, guild: s });
            });
        case r.rX.PARAGRAPH:
            return (0, l.mMO)(async () => {
                let { ParagraphFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case r.rX.TEXT_INPUT:
            return (0, l.mMO)(async () => {
                let { TextInputFormFieldModal: e } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
        case r.rX.MULTIPLE_CHOICE:
            return (0, l.mMO)(async () => {
                let { default: e } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(e, { ...n, field: void 0, onSave: t });
            });
    }
}
function h(e, t, s) {
    switch (e.field_type) {
        case r.rX.TERMS:
            return (0, l.mMO)(async () => {
                let { default: l } = await n.e("32435").then(n.bind(n, 24094));
                return (n) => (0, i.jsx)(l, { ...n, field: e, onSave: t, guild: s });
            });
        case r.rX.PARAGRAPH:
            return (0, l.mMO)(async () => {
                let { ParagraphFormFieldModal: s } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(s, { ...n, field: e, onSave: t });
            });
        case r.rX.TEXT_INPUT:
            return (0, l.mMO)(async () => {
                let { TextInputFormFieldModal: s } = await n.e("26510").then(n.bind(n, 542717));
                return (n) => (0, i.jsx)(s, { ...n, field: e, onSave: t });
            });
        case r.rX.MULTIPLE_CHOICE:
            return (0, l.mMO)(async () => {
                let { default: s } = await n.e("52981").then(n.bind(n, 520660));
                return (n) => (0, i.jsx)(s, { ...n, field: e, onSave: t });
            });
    }
}
