n.d(t, {
    y: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(246364),
    s = n(571728),
    o = n(446945),
    c = n(681460),
    d = n(700833),
    u = n(217472),
    m = n(592286),
    h = n(388032),
    g = n(792942);
function x(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [x, f] = r.useState(c);
    r.useEffect(() => f(c), [c]);
    let C = null !== (t = (0, s.A)({ guildId: n.id })) && void 0 !== t ? t : 0,
        [v, _] = r.useState(null),
        I = r.useMemo(() => (null == x ? void 0 : x.some((e) => (0, a.J)(e))), [x]),
        N = r.useMemo(() => x.length === m.nx, [x]),
        T = r.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), f(e), null != v && _(null);
            },
            [v, n.id]
        ),
        j = r.useCallback(
            (e) => {
                T([...x, e]);
            },
            [x, T]
        ),
        b = r.useCallback(
            (e) => {
                T([...x.slice(0, e), ...x.slice(e + 1)]);
            },
            [x, T]
        ),
        S = r.useCallback(
            (e, t) => {
                if (x[e] === t) return;
                let n = [...x];
                (n[e] = t), T(n);
            },
            [x, T]
        ),
        E = r.useCallback(
            (e, t, n) => {
                let i = x.indexOf(e),
                    r = [...x];
                null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), f(r)), n ? (T(r), null !== v && _(null)) : v !== t && _(t);
            },
            [v, x, T]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: g.title,
                children: h.intl.format(h.t['sm+75u'], {
                    currentCount: x.length,
                    maxCount: m.nx
                })
            }),
            x.map((e) =>
                (0, d.a0)({
                    dropHoveredIndex: v,
                    formField: e,
                    guild: n,
                    index: x.indexOf(e),
                    isDragEnabled: x.length > 1,
                    submittedGuildJoinRequestsCount: C,
                    removeFormField: b,
                    updateFormField: S,
                    updateFormFieldOrder: E,
                    canRemove: x.length > 1,
                    actionsLocation: 'side',
                    fieldStyle: a.it.COMPACT
                })
            ),
            !N &&
                (0, i.jsx)('div', {
                    className: g.addQuestionsContainer,
                    children: (0, i.jsx)(o.Z, {
                        addFormField: j,
                        guild: n,
                        allowTerms: !I
                    })
                }),
            !N && (0, i.jsx)(p, { addFormField: j })
        ]
    });
}
function p(e) {
    let { addFormField: t } = e,
        n = r.useMemo(
            () => [
                {
                    text: h.intl.string(h.t.EOwiEh),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.EOwiEh),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.jqrNDg),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.I5q8vr),
                            required: !0
                        });
                    }
                }
            ],
            [t]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6, {
                variant: 'text-xs/bold',
                color: 'text-muted',
                className: g.examplesHeader,
                children: h.intl.string(h.t.ID04cH)
            }),
            (0, i.jsx)(c.j, { pills: n })
        ]
    });
}
