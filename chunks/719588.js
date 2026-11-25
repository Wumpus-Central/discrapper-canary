n.d(l, { A: () => f });
var e = n(582128),
    i = n(260498),
    a = n(733791),
    u = n(314116),
    r = n(858899),
    s = n(233470),
    c = n(191850),
    o = n(792996),
    d = n(167483);
function f(t, l) {
    let n = (0, a.Bs)(t);
    return e.useCallback(() => {
        let e = i.Ay.getProject(t);
        if (null != e && null != n) (0, d.A)({ project: e, target: n, action: "delete" });
        else
            (0, u.A)({
                title: o.intl.formatToPlainString(c.default.CJBhb2, { name: l }),
                subtitle: o.intl.string(c.default["0OmrVn"]),
                confirmText: o.intl.string(o.t.oyYWHE),
                variant: "critical",
                onConfirm: () => {
                    (0, s.K)(t, () => (0, r.P0)({ text: o.intl.string(c.default["0XDHob"]), variant: "critical" }));
                },
            });
    }, [t, l, n]);
}
