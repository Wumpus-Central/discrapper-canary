(n.d(t, { y: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(793030),
    a = n(246364),
    s = n(571728),
    o = n(446945),
    c = n(681460),
    d = n(700833),
    u = n(217472),
    m = n(592286),
    g = n(388032),
    p = n(539482);
function h(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [h, x] = i.useState(c);
    i.useEffect(() => x(c), [c]);
    let b = null != (t = (0, s.A)({ guildId: n.id })) ? t : 0,
        [j, v] = i.useState(null),
        _ = i.useMemo(() => (null == h ? void 0 : h.some((e) => (0, a.J)(e))), [h]),
        O = i.useMemo(() => h.length === m.nx, [h]),
        y = i.useCallback(
            (e) => {
                (u.Z.setPendingMemberVerificationRules(n.id, e), x(e), null != j && v(null));
            },
            [j, n.id]
        ),
        C = i.useCallback(
            (e) => {
                y([...h, e]);
            },
            [h, y]
        ),
        N = i.useCallback(
            (e) => {
                y([...h.slice(0, e), ...h.slice(e + 1)]);
            },
            [h, y]
        ),
        I = i.useCallback(
            (e, t) => {
                if (h[e] === t) return;
                let n = [...h];
                ((n[e] = t), y(n));
            },
            [h, y]
        ),
        E = i.useCallback(
            (e, t, n) => {
                let r = h.indexOf(e),
                    i = [...h];
                (null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), x(i)), n ? (y(i), null !== j && v(null)) : j !== t && v(t));
            },
            [j, h, y]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: p.title,
                children: g.intl.format(g.t['sm+75u'], {
                    currentCount: h.length,
                    maxCount: m.nx
                })
            }),
            h.map((e) =>
                (0, d.a0)({
                    dropHoveredIndex: j,
                    formField: e,
                    guild: n,
                    index: h.indexOf(e),
                    isDragEnabled: h.length > 1,
                    submittedGuildJoinRequestsCount: b,
                    removeFormField: N,
                    updateFormField: I,
                    updateFormFieldOrder: E,
                    canRemove: h.length > 1,
                    actionsLocation: 'side',
                    fieldStyle: a.it.COMPACT
                })
            ),
            !O &&
                (0, r.jsx)('div', {
                    className: p.addQuestionsContainer,
                    children: (0, r.jsx)(o.Z, {
                        addFormField: C,
                        guild: n,
                        allowTerms: !_
                    })
                }),
            !O && (0, r.jsx)(f, { addFormField: C })
        ]
    });
}
function f(e) {
    let { addFormField: t } = e,
        n = i.useMemo(
            () => [
                {
                    text: g.intl.string(g.t.EOwiEh),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.EOwiEh),
                            required: !0
                        });
                    }
                },
                {
                    text: g.intl.string(g.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.jqrNDg),
                            required: !0
                        });
                    }
                },
                {
                    text: g.intl.string(g.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
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
