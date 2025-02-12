n.d(t, { y: () => x }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(793030),
    s = n(246364),
    a = n(571728),
    o = n(446945),
    c = n(681460),
    d = n(700833),
    u = n(217472),
    m = n(592286),
    h = n(388032),
    g = n(421168);
function x(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [x, _] = r.useState(c);
    r.useEffect(() => _(c), [c]);
    let C = null !== (t = (0, a.A)({ guildId: n.id })) && void 0 !== t ? t : 0,
        [f, v] = r.useState(null),
        N = r.useMemo(() => (null == x ? void 0 : x.some((e) => (0, s.J)(e))), [x]),
        j = r.useMemo(() => x.length === m.nx, [x]),
        I = r.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), _(e), null != f && v(null);
            },
            [f, n.id]
        ),
        E = r.useCallback(
            (e) => {
                I([...x, e]);
            },
            [x, I]
        ),
        b = r.useCallback(
            (e) => {
                I([...x.slice(0, e), ...x.slice(e + 1)]);
            },
            [x, I]
        ),
        T = r.useCallback(
            (e, t) => {
                if (x[e] === t) return;
                let n = [...x];
                (n[e] = t), I(n);
            },
            [x, I]
        ),
        S = r.useCallback(
            (e, t, n) => {
                let i = x.indexOf(e),
                    r = [...x];
                null != t && t !== i && (r.splice(i, 1), r.splice(t, 0, e), _(r)), n ? (I(r), null !== f && v(null)) : f !== t && v(t);
            },
            [f, x, I]
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
                    dropHoveredIndex: f,
                    formField: e,
                    guild: n,
                    index: x.indexOf(e),
                    isDragEnabled: x.length > 1,
                    submittedGuildJoinRequestsCount: C,
                    removeFormField: b,
                    updateFormField: T,
                    updateFormFieldOrder: S,
                    canRemove: x.length > 1,
                    actionsLocation: 'side',
                    fieldStyle: s.it.COMPACT
                })
            ),
            !j &&
                (0, i.jsx)('div', {
                    className: g.addQuestionsContainer,
                    children: (0, i.jsx)(o.Z, {
                        addFormField: E,
                        guild: n,
                        allowTerms: !N
                    })
                }),
            !j && (0, i.jsx)(p, { addFormField: E })
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
                            field_type: s.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.EOwiEh),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
                            label: h.intl.string(h.t.jqrNDg),
                            required: !0
                        });
                    }
                },
                {
                    text: h.intl.string(h.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: s.QJ.TEXT_INPUT,
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
