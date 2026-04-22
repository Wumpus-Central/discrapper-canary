n.d(t, { a: () => x });
var i = n(627968),
    l = n(64700),
    s = n(534514),
    r = n(513461),
    a = n(786180),
    o = n(892921),
    d = n(596484),
    c = n(322388),
    u = n(564864),
    m = n(260197),
    g = n(985018),
    h = n(395074);
function x(e) {
    let { guild: t, formFields: n } = e,
        [d, x] = l.useState(n);
    l.useEffect(() => x(n), [n]);
    let p = (0, a.H)({ guildId: t.id }) ?? 0,
        [A, E] = l.useState(null),
        f = l.useMemo(() => d?.some((e) => (0, r.i7)(e)), [d]),
        j = l.useMemo(() => d.length === m.OK, [d]),
        N = l.useCallback(
            (e) => {
                u.A.setPendingMemberVerificationRules(t.id, e), x(e), null != A && E(null);
            },
            [A, t.id],
        ),
        I = l.useCallback(
            (e) => {
                N([...d, e]);
            },
            [d, N],
        ),
        C = l.useCallback(
            (e) => {
                N([...d.slice(0, e), ...d.slice(e + 1)]);
            },
            [d, N],
        ),
        b = l.useCallback(
            (e, t) => {
                if (d[e] === t) return;
                let n = [...d];
                (n[e] = t), N(n);
            },
            [d, N],
        ),
        v = l.useCallback(
            (e, t, n) => {
                let i = d.indexOf(e),
                    l = [...d];
                null != t && t !== i && (l.splice(i, 1), l.splice(t, 0, e), x(l)),
                    n ? (N(l), null !== A && E(null)) : A !== t && E(t);
            },
            [A, d, N],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: h.DD,
                children: g.intl.format(g.t["sm+75n"], { currentCount: d.length, maxCount: m.OK }),
            }),
            d.map((e) =>
                (0, c.Td)({
                    dropHoveredIndex: A,
                    formField: e,
                    guild: t,
                    index: d.indexOf(e),
                    isDragEnabled: d.length > 1,
                    submittedGuildJoinRequestsCount: p,
                    removeFormField: C,
                    updateFormField: b,
                    updateFormFieldOrder: v,
                    canRemove: d.length > 1,
                    actionsLocation: "side",
                }),
            ),
            !j &&
                (0, i.jsx)("div", {
                    className: h.At,
                    children: (0, i.jsx)(o.A, { addFormField: I, guild: t, allowTerms: !f }),
                }),
            !j && (0, i.jsx)(_, { addFormField: I }),
        ],
    });
}
function _(e) {
    let { addFormField: t } = e,
        n = l.useMemo(
            () => [
                {
                    text: g.intl.string(g.t.EOwiEk),
                    onClick: () => {
                        t({ field_type: r.rX.TEXT_INPUT, label: g.intl.string(g.t.EOwiEk), required: !0 });
                    },
                },
                {
                    text: g.intl.string(g.t.jqrNDh),
                    onClick: () => {
                        t({ field_type: r.rX.TEXT_INPUT, label: g.intl.string(g.t.jqrNDh), required: !0 });
                    },
                },
                {
                    text: g.intl.string(g.t.I5q8vp),
                    onClick: () => {
                        t({ field_type: r.rX.TEXT_INPUT, label: g.intl.string(g.t.I5q8vp), required: !0 });
                    },
                },
            ],
            [t],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: h.hD,
                children: g.intl.string(g.t.ID04cA),
            }),
            (0, i.jsx)(d.z, { pills: n }),
        ],
    });
}
