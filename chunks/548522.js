n.d(t, { y: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(793030),
    a = n(246364),
    s = n(571728),
    o = n(446945),
    c = n(681460),
    d = n(700833),
    u = n(217472),
    g = n(592286),
    f = n(388032),
    m = n(775129);
function b(e) {
    var t;
    let { guild: n, formFields: c } = e,
        [b, h] = i.useState(c);
    i.useEffect(() => h(c), [c]);
    let x = null != (t = (0, s.A)({ guildId: n.id })) ? t : 0,
        [j, v] = i.useState(null),
        O = i.useMemo(() => (null == b ? void 0 : b.some((e) => (0, a.J)(e))), [b]),
        C = i.useMemo(() => b.length === g.nx, [b]),
        y = i.useCallback(
            (e) => {
                u.Z.setPendingMemberVerificationRules(n.id, e), h(e), null != j && v(null);
            },
            [j, n.id],
        ),
        N = i.useCallback(
            (e) => {
                y([...b, e]);
            },
            [b, y],
        ),
        E = i.useCallback(
            (e) => {
                y([...b.slice(0, e), ...b.slice(e + 1)]);
            },
            [b, y],
        ),
        I = i.useCallback(
            (e, t) => {
                if (b[e] === t) return;
                let n = [...b];
                (n[e] = t), y(n);
            },
            [b, y],
        ),
        S = i.useCallback(
            (e, t, n) => {
                let r = b.indexOf(e),
                    i = [...b];
                null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), h(i)),
                    n ? (y(i), null !== j && v(null)) : j !== t && v(t);
            },
            [j, b, y],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: m.title,
                children: f.intl.format(f.t["sm+75n"], {
                    currentCount: b.length,
                    maxCount: g.nx,
                }),
            }),
            b.map((e) =>
                (0, d.a0)({
                    dropHoveredIndex: j,
                    formField: e,
                    guild: n,
                    index: b.indexOf(e),
                    isDragEnabled: b.length > 1,
                    submittedGuildJoinRequestsCount: x,
                    removeFormField: E,
                    updateFormField: I,
                    updateFormFieldOrder: S,
                    canRemove: b.length > 1,
                    actionsLocation: "side",
                    fieldStyle: a.it.COMPACT,
                }),
            ),
            !C &&
                (0, r.jsx)("div", {
                    className: m.addQuestionsContainer,
                    children: (0, r.jsx)(o.Z, {
                        addFormField: N,
                        guild: n,
                        allowTerms: !O,
                    }),
                }),
            !C && (0, r.jsx)(p, { addFormField: N }),
        ],
    });
}
function p(e) {
    let { addFormField: t } = e,
        n = i.useMemo(
            () => [
                {
                    text: f.intl.string(f.t.EOwiEk),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: f.intl.string(f.t.EOwiEk),
                            required: !0,
                        });
                    },
                },
                {
                    text: f.intl.string(f.t.jqrNDh),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: f.intl.string(f.t.jqrNDh),
                            required: !0,
                        });
                    },
                },
                {
                    text: f.intl.string(f.t.I5q8vp),
                    onClick: () => {
                        t({
                            field_type: a.QJ.TEXT_INPUT,
                            label: f.intl.string(f.t.I5q8vp),
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
                className: m.examplesHeader,
                children: f.intl.string(f.t.ID04cA),
            }),
            (0, r.jsx)(c.j, { pills: n }),
        ],
    });
}
