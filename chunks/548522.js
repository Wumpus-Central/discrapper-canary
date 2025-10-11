n.d(t, { y: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(793030),
    a = n(246364),
    s = n(571728),
    o = n(446945),
    c = n(681460),
    d = n(700833),
    u = n(217472),
    g = n(592286),
    m = n(388032),
    p = n(194973);
function f(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [f, b] = i.useState(c);
    i.useEffect(() => b(c), [c]);
    let x = null != (t = (0, s.A)({ guildId: n.id })) ? t : 0,
        [j, v] = i.useState(null),
        _ = i.useMemo(() => (null == f ? void 0 : f.some((e) => (0, a.J)(e))), [f]),
        C = i.useMemo(() => f.length === g.nx, [f]),
        O = i.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), b(e), null != j && v(null);
            },
            [j, n.id],
        ),
        y = i.useCallback(
            (e) => {
                O([...f, e]);
            },
            [f, O],
        ),
        N = i.useCallback(
            (e) => {
                O([...f.slice(0, e), ...f.slice(e + 1)]);
            },
            [f, O],
        ),
        E = i.useCallback(
            (e, t) => {
                if (f[e] === t) return;
                let n = [...f];
                (n[e] = t), O(n);
            },
            [f, O],
        ),
        I = i.useCallback(
            (e, t, n) => {
                let r = f.indexOf(e),
                    i = [...f];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), b(i)),
                    n ? (O(i), null !== j && v(null)) : j !== t && v(t);
            },
            [j, f, O],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: p.title,
                children: m.intl.format(m.t["sm+75u"], {
                    currentCount: f.length,
                    maxCount: g.nx,
                }),
            }),
            f.map((e) =>
                (0, d.a0)({
                    dropHoveredIndex: j,
                    formField: e,
                    guild: n,
                    index: f.indexOf(e),
                    isDragEnabled: f.length > 1,
                    submittedGuildJoinRequestsCount: x,
                    removeFormField: N,
                    updateFormField: E,
                    updateFormFieldOrder: I,
                    canRemove: f.length > 1,
                    actionsLocation: "side",
                    fieldStyle: a.it.COMPACT,
                }),
            ),
            !C &&
                (0, r.jsx)("div", {
                    className: p.addQuestionsContainer,
                    children: (0, r.jsx)(o.Z, {
                        addFormField: y,
                        guild: n,
                        allowTerms: !_,
                    }),
                }),
            !C && (0, r.jsx)(h, { addFormField: y }),
        ],
    });
}
function h(e) {
    let { addFormField: t } = e,
        n = i.useMemo(
            () => [
                {
                    text: m.intl.string(m.t.EOwiEh),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: m.intl.string(m.t.EOwiEh),
                            required: !0,
                        });
                    },
                },
                {
                    text: m.intl.string(m.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: m.intl.string(m.t.jqrNDg),
                            required: !0,
                        });
                    },
                },
                {
                    text: m.intl.string(m.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: m.intl.string(m.t.I5q8vr),
                            required: !0,
                        });
                    },
                },
            ],
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: p.examplesHeader,
                children: m.intl.string(m.t.ID04cH),
            }),
            (0, r.jsx)(c.j, { pills: n }),
        ],
    });
}
