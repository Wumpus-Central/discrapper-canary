t.d(n, {
    Md: () => m,
    a0: () => x
});
var i = t(200651);
t(192379);
var l = t(392711),
    s = t(481060),
    a = t(246364),
    r = t(405545),
    o = t(382574),
    c = t(279988),
    d = t(786127),
    u = t(388032);
function x(e) {
    let { dropHoveredIndex: n, formField: x, guild: m, index: f, isDragEnabled: v, submittedGuildJoinRequestsCount: g, removeFormField: j, updateFormField: C, updateFormFieldOrder: p, canRemove: N, actionsLocation: R, fieldStyle: y } = e,
        w = async () => {
            await j(f);
        },
        E = async (e) => {
            await C(f, e);
        },
        T = async (e, n, t) => {
            await p(e, n, t);
        },
        F = (0, l.uniqueId)(),
        b = n === f,
        Z = {
            key: F,
            index: f,
            isDragEnabled: v,
            isDropHovered: b,
            onEdit: () => {
                0 === g
                    ? h(x, E, m)
                    : (0, s.ZDy)(async () => {
                          let { default: e } = await t.e('74673').then(t.bind(t, 394045));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: m.id,
                                  submittedGuildJoinRequestsCount: g,
                                  onConfirm: () => h(x, E, m)
                              });
                      });
            },
            onRemove: w,
            onDrop: T,
            canRemove: N,
            actionsLocation: R,
            fieldStyle: y
        };
    switch (x.field_type) {
        case a.QJ.TERMS:
            return (0, i.jsx)(c.Z, {
                channelId: m.rulesChannelId,
                title: y === a.it.COMPACT ? u.intl.string(u.t['55+giY']) : u.intl.string(u.t['53vNcH']),
                formField: x,
                ...Z
            });
        case a.QJ.PARAGRAPH:
            return (0, i.jsx)(o.Z, {
                formField: x,
                ...Z
            });
        case a.QJ.TEXT_INPUT:
            return (0, i.jsx)(d.Z, {
                formField: x,
                ...Z
            });
        case a.QJ.MULTIPLE_CHOICE:
            return (0, i.jsx)(r.Z, {
                formField: x,
                ...Z
            });
        default:
            return null;
    }
}
function m(e, n, l) {
    switch (e) {
        case a.QJ.TERMS:
            return (0, s.ZDy)(async () => {
                let { default: e } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n,
                        guild: l
                    });
            });
        case a.QJ.PARAGRAPH:
            return (0, s.ZDy)(async () => {
                let { ParagraphFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            });
        case a.QJ.TEXT_INPUT:
            return (0, s.ZDy)(async () => {
                let { TextInputFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            });
        case a.QJ.MULTIPLE_CHOICE:
            return (0, s.ZDy)(async () => {
                let { default: e } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            });
    }
}
function h(e, n, l) {
    switch (e.field_type) {
        case a.QJ.TERMS:
            return (0, s.ZDy)(async () => {
                let { default: s } = await t.e('5945').then(t.bind(t, 92451));
                return (t) =>
                    (0, i.jsx)(s, {
                        ...t,
                        field: e,
                        onSave: n,
                        guild: l
                    });
            });
        case a.QJ.PARAGRAPH:
            return (0, s.ZDy)(async () => {
                let { ParagraphFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            });
        case a.QJ.TEXT_INPUT:
            return (0, s.ZDy)(async () => {
                let { TextInputFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            });
        case a.QJ.MULTIPLE_CHOICE:
            return (0, s.ZDy)(async () => {
                let { default: l } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            });
    }
}
