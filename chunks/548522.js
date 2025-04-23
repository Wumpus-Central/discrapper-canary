n.d(t, { y: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(793030),
    s = n(246364),
    a = n(571728),
    o = n(446945),
    c = n(681460),
    u = n(700833),
    d = n(217472),
    m = n(592286),
    g = n(388032),
    p = n(539482);
function f(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [f, x] = i.useState(c);
    i.useEffect(() => x(c), [c]);
    let b = null != (t = (0, a.A)({ guildId: n.id })) ? t : 0,
        [j, _] = i.useState(null),
        v = i.useMemo(() => (null == f ? void 0 : f.some((e) => (0, s.J)(e))), [f]),
        O = i.useMemo(() => f.length === m.nx, [f]),
        C = i.useCallback(
            (e) => {
                d.Z.setPendingMemberVerificationRules(n.id, e), x(e), null != j && _(null);
            },
            [j, n.id]
        ),
        y = i.useCallback(
            (e) => {
                C([...f, e]);
            },
            [f, C]
        ),
        N = i.useCallback(
            (e) => {
                C([...f.slice(0, e), ...f.slice(e + 1)]);
            },
            [f, C]
        ),
        I = i.useCallback(
            (e, t) => {
                if (f[e] === t) return;
                let n = [...f];
                (n[e] = t), C(n);
            },
            [f, C]
        ),
        E = i.useCallback(
            (e, t, n) => {
                let r = f.indexOf(e),
                    i = [...f];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), x(i)), n ? (C(i), null !== j && _(null)) : j !== t && _(t);
            },
            [j, f, C]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: p.title,
                children: g.intl.format(g.t['sm+75u'], {
                    currentCount: f.length,
                    maxCount: m.nx
                })
            }),
            f.map((e) =>
                (0, u.a0)({
                    dropHoveredIndex: j,
                    formField: e,
                    guild: n,
                    index: f.indexOf(e),
                    isDragEnabled: f.length > 1,
                    submittedGuildJoinRequestsCount: b,
                    removeFormField: N,
                    updateFormField: I,
                    updateFormFieldOrder: E,
                    canRemove: f.length > 1,
                    actionsLocation: 'side',
                    fieldStyle: s.it.COMPACT
                })
            ),
            !O &&
                (0, r.jsx)('div', {
                    className: p.addQuestionsContainer,
                    children: (0, r.jsx)(o.Z, {
                        addFormField: y,
                        guild: n,
                        allowTerms: !v
                    })
                }),
            !O && (0, r.jsx)(h, { addFormField: y })
        ]
    });
}
function h(e) {
    let { addFormField: t } = e,
        n = i.useMemo(
            () => [
                {
                    text: g.intl.string(g.t.EOwiEh),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.EOwiEh),
                            required: !0
                        });
                    }
                },
                {
                    text: g.intl.string(g.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.jqrNDg),
                            required: !0
                        });
                    }
                },
                {
                    text: g.intl.string(g.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.I5q8vr),
                            required: !0
                        });
                    }
                }
            ],
            [t]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: p.examplesHeader,
                children: g.intl.string(g.t.ID04cH)
            }),
            (0, r.jsx)(c.j, { pills: n })
        ]
    });
}
