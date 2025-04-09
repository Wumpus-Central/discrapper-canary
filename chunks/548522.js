n.d(t, { y: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(793030),
    a = n(246364),
    l = n(571728),
    o = n(446945),
    c = n(681460),
    d = n(700833),
    u = n(217472),
    m = n(592286),
    g = n(388032),
    p = n(539482);
function f(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [f, b] = i.useState(c);
    i.useEffect(() => b(c), [c]);
    let x = null != (t = (0, l.A)({ guildId: n.id })) ? t : 0,
        [j, N] = i.useState(null),
        v = i.useMemo(() => (null == f ? void 0 : f.some((e) => (0, a.J)(e))), [f]),
        _ = i.useMemo(() => f.length === m.nx, [f]),
        y = i.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), b(e), null != j && N(null);
            },
            [j, n.id]
        ),
        O = i.useCallback(
            (e) => {
                y([...f, e]);
            },
            [f, y]
        ),
        C = i.useCallback(
            (e) => {
                y([...f.slice(0, e), ...f.slice(e + 1)]);
            },
            [f, y]
        ),
        I = i.useCallback(
            (e, t) => {
                if (f[e] === t) return;
                let n = [...f];
                (n[e] = t), y(n);
            },
            [f, y]
        ),
        E = i.useCallback(
            (e, t, n) => {
                let r = f.indexOf(e),
                    i = [...f];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), b(i)), n ? (y(i), null !== j && N(null)) : j !== t && N(t);
            },
            [j, f, y]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: p.title,
                children: g.NW.format(g.t['sm+75u'], {
                    currentCount: f.length,
                    maxCount: m.nx
                })
            }),
            f.map((e) =>
                (0, d.a0)({
                    dropHoveredIndex: j,
                    formField: e,
                    guild: n,
                    index: f.indexOf(e),
                    isDragEnabled: f.length > 1,
                    submittedGuildJoinRequestsCount: x,
                    removeFormField: C,
                    updateFormField: I,
                    updateFormFieldOrder: E,
                    canRemove: f.length > 1,
                    actionsLocation: 'side',
                    fieldStyle: a.it.COMPACT
                })
            ),
            !_ &&
                (0, r.jsx)('div', {
                    className: p.addQuestionsContainer,
                    children: (0, r.jsx)(o.Z, {
                        addFormField: O,
                        guild: n,
                        allowTerms: !v
                    })
                }),
            !_ && (0, r.jsx)(h, { addFormField: O })
        ]
    });
}
function h(e) {
    let { addFormField: t } = e,
        n = i.useMemo(
            () => [
                {
                    text: g.NW.string(g.t.EOwiEh),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.NW.string(g.t.EOwiEh),
                            required: !0
                        });
                    }
                },
                {
                    text: g.NW.string(g.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.NW.string(g.t.jqrNDg),
                            required: !0
                        });
                    }
                },
                {
                    text: g.NW.string(g.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.NW.string(g.t.I5q8vr),
                            required: !0
                        });
                    }
                }
            ],
            [t]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: p.examplesHeader,
                children: g.NW.string(g.t.ID04cH)
            }),
            (0, r.jsx)(c.j, { pills: n })
        ]
    });
}
