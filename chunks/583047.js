"use strict";
n.d(t, { a: () => h });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(513461),
    a = n(786180),
    o = n(892921),
    d = n(596484),
    c = n(322388),
    u = n(564864),
    m = n(260197),
    g = n(985018),
    x = n(395074);
function h(e) {
    let { guild: t, formFields: n } = e,
        [d, h] = s.useState(n);
    s.useEffect(() => h(n), [n]);
    let A = (0, a.H)({ guildId: t.id }) ?? 0,
        [p, f] = s.useState(null),
        j = s.useMemo(() => d?.some((e) => (0, r.i7)(e)), [d]),
        N = s.useMemo(() => d.length === m.OK, [d]),
        E = s.useCallback(
            (e) => {
                u.A.setPendingMemberVerificationRules(t.id, e), h(e), null != p && f(null);
            },
            [p, t.id],
        ),
        T = s.useCallback(
            (e) => {
                E([...d, e]);
            },
            [d, E],
        ),
        C = s.useCallback(
            (e) => {
                E([...d.slice(0, e), ...d.slice(e + 1)]);
            },
            [d, E],
        ),
        I = s.useCallback(
            (e, t) => {
                if (d[e] === t) return;
                let n = [...d];
                (n[e] = t), E(n);
            },
            [d, E],
        ),
        b = s.useCallback(
            (e, t, n) => {
                let i = d.indexOf(e),
                    s = [...d];
                null != t && t !== i && (s.splice(i, 1), s.splice(t, 0, e), h(s)),
                    n ? (E(s), null !== p && f(null)) : p !== t && f(t);
            },
            [p, d, E],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.DZT, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: x.DD,
                children: g.intl.format(g.t["sm+75n"], { currentCount: d.length, maxCount: m.OK }),
            }),
            d.map((e) =>
                (0, c.Td)({
                    dropHoveredIndex: p,
                    formField: e,
                    guild: t,
                    index: d.indexOf(e),
                    isDragEnabled: d.length > 1,
                    submittedGuildJoinRequestsCount: A,
                    removeFormField: C,
                    updateFormField: I,
                    updateFormFieldOrder: b,
                    canRemove: d.length > 1,
                    actionsLocation: "side",
                }),
            ),
            !N &&
                (0, i.jsx)("div", {
                    className: x.At,
                    children: (0, i.jsx)(o.A, { addFormField: T, guild: t, allowTerms: !j }),
                }),
            !N && (0, i.jsx)(_, { addFormField: T }),
        ],
    });
}
function _(e) {
    let { addFormField: t } = e,
        n = s.useMemo(
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
            (0, i.jsx)(l.DZT, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: x.hD,
                children: g.intl.string(g.t.ID04cA),
            }),
            (0, i.jsx)(d.z, { pills: n }),
        ],
    });
}
