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
    m = n(592286),
    g = n(388032),
    p = n(194973);
function f(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [f, b] = i.useState(c);
    i.useEffect(() => b(c), [c]);
    let x = null != (t = (0, s.A)({ guildId: n.id })) ? t : 0,
        [j, v] = i.useState(null),
        _ = i.useMemo(() => (null == f ? void 0 : f.some((e) => (0, a.J)(e))), [f]),
        O = i.useMemo(() => f.length === m.nx, [f]),
        y = i.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), b(e), null != j && v(null);
            },
            [j, n.id],
        ),
        C = i.useCallback(
            (e) => {
                y([...f, e]);
            },
            [f, y],
        ),
        N = i.useCallback(
            (e) => {
                y([...f.slice(0, e), ...f.slice(e + 1)]);
            },
            [f, y],
        ),
        E = i.useCallback(
            (e, t) => {
                if (f[e] === t) return;
                let n = [...f];
                (n[e] = t), y(n);
            },
            [f, y],
        ),
        I = i.useCallback(
            (e, t, n) => {
                let r = f.indexOf(e),
                    i = [...f];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), b(i)),
                    n ? (y(i), null !== j && v(null)) : j !== t && v(t);
            },
            [j, f, y],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: p.title,
                children: g.intl.format(g.t["sm+75u"], {
                    currentCount: f.length,
                    maxCount: m.nx,
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
            !O &&
                (0, r.jsx)("div", {
                    className: p.addQuestionsContainer,
                    children: (0, r.jsx)(o.Z, {
                        addFormField: C,
                        guild: n,
                        allowTerms: !_,
                    }),
                }),
            !O && (0, r.jsx)(h, { addFormField: C }),
        ],
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
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.EOwiEh),
                            required: !0,
                        });
                    },
                },
                {
                    text: g.intl.string(g.t.jqrNDg),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.jqrNDg),
                            required: !0,
                        });
                    },
                },
                {
                    text: g.intl.string(g.t.I5q8vr),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: g.intl.string(g.t.I5q8vr),
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
                children: g.intl.string(g.t.ID04cH),
            }),
            (0, r.jsx)(c.j, { pills: n }),
        ],
    });
}
