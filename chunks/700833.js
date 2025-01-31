t.d(n, {
    Md: () => h,
    a0: () => m
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
    u = t(981631),
    x = t(388032);
function m(e) {
    let { dropHoveredIndex: n, formField: u, guild: m, index: h, isDragEnabled: v, submittedGuildJoinRequestsCount: g, removeFormField: j, updateFormField: C, updateFormFieldOrder: p, canRemove: N, actionsLocation: R, fieldStyle: y } = e,
        w = async () => {
            await j(h);
        },
        E = async (e) => {
            await C(h, e);
        },
        T = async (e, n, t) => {
            await p(e, n, t);
        },
        F = (0, l.uniqueId)(),
        b = n === h,
        Z = {
            key: F,
            index: h,
            isDragEnabled: v,
            isDropHovered: b,
            onEdit: () => {
                0 === g
                    ? f(u, E, m)
                    : (0, s.ZDy)(async () => {
                          let { default: e } = await t.e('74673').then(t.bind(t, 394045));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: m.id,
                                  submittedGuildJoinRequestsCount: g,
                                  onConfirm: () => f(u, E, m)
                              });
                      });
            },
            onRemove: w,
            onDrop: T,
            canRemove: N,
            actionsLocation: R,
            fieldStyle: y
        };
    switch (u.field_type) {
        case a.QJ.TERMS:
            return (0, i.jsx)(c.Z, {
                channelId: m.rulesChannelId,
                title: y === a.it.COMPACT ? x.intl.string(x.t['55+giY']) : x.intl.string(x.t['53vNcH']),
                formField: u,
                ...Z
            });
        case a.QJ.PARAGRAPH:
            return (0, i.jsx)(o.Z, {
                formField: u,
                ...Z
            });
        case a.QJ.TEXT_INPUT:
            return (0, i.jsx)(d.Z, {
                formField: u,
                ...Z
            });
        case a.QJ.MULTIPLE_CHOICE:
            return (0, i.jsx)(r.Z, {
                formField: u,
                ...Z
            });
        default:
            return null;
    }
}
function h(e, n, l) {
    let r = { onCloseRequest: u.dG4 };
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
            }, r);
        case a.QJ.PARAGRAPH:
            return (0, s.ZDy)(async () => {
                let { ParagraphFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, r);
        case a.QJ.TEXT_INPUT:
            return (0, s.ZDy)(async () => {
                let { TextInputFormFieldModal: e } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, r);
        case a.QJ.MULTIPLE_CHOICE:
            return (0, s.ZDy)(async () => {
                let { default: e } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        field: void 0,
                        onSave: n
                    });
            }, r);
    }
}
function f(e, n, l) {
    let r = { onCloseRequest: u.dG4 };
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
            }, r);
        case a.QJ.PARAGRAPH:
            return (0, s.ZDy)(async () => {
                let { ParagraphFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, r);
        case a.QJ.TEXT_INPUT:
            return (0, s.ZDy)(async () => {
                let { TextInputFormFieldModal: l } = await t.e('6595').then(t.bind(t, 457042));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, r);
        case a.QJ.MULTIPLE_CHOICE:
            return (0, s.ZDy)(async () => {
                let { default: l } = await t.e('94064').then(t.bind(t, 607569));
                return (t) =>
                    (0, i.jsx)(l, {
                        ...t,
                        field: e,
                        onSave: n
                    });
            }, r);
    }
}
