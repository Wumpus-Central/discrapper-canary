l.d(t, { A: () => w });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(311907),
    u = l(444550),
    o = l(397927),
    d = l(263063),
    c = l(931991),
    m = l(71393),
    f = l(576705),
    h = l(711014),
    g = l(287809),
    x = l(473145),
    v = l(661191),
    j = l(796774),
    p = l(209932),
    N = l(980504),
    b = l(652215),
    y = l(985018),
    C = l(485516);
function A(e) {
    let { availableSlots: t, className: l } = e;
    return (0, n.jsxs)(o.Text, {
        className: s()(C._E, l),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(o.HKD, { size: "md", color: "currentColor", className: C.Xk }),
            y.intl.format(y.t["8Dyg1C"], { slots: t }),
        ],
    });
}
function w(e) {
    let t,
        { label: l, value: i, className: o, onChange: w } = e,
        S = (0, r.cf)([h.Ay, f.A, g.default, m.A], () => {
            let e = {};
            for (let t of h.Ay.getFlattenedGuildIds()) {
                let l = m.A.getGuild(t);
                null != l && (0, c.ie)(l, f.A, g.default).canCreateExpressions && (e[l.id] = l);
            }
            return e;
        }),
        M = (0, r.cf)([p.A], () => {
            let e = {};
            for (let [t, l] of v.default.entries(S)) {
                let n = (0, x.tO)(l, p.A.getSoundsForGuild(t) ?? N.pD, l.premiumTier);
                e[t] = n;
            }
            return e;
        }, [S]);
    a.useEffect(() => {
        (0, j.E7)();
    }, []);
    let E = a.useMemo(
            () =>
                Object.values(S).map((e) => {
                    let { name: t, id: l } = e;
                    return { label: t, value: l, disabled: M[l] <= 0 };
                }),
            [S, M],
        ),
        T = a.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, n.jsx)(d.Ay, {
                          className: s()(C.cl, { [C.QJ]: e.disabled }),
                          guild: S[e.value],
                          size: d.Ay.Sizes.SMOL,
                          active: !0,
                      }),
            [S],
        ),
        k = a.useCallback(
            (e) => {
                let t = e?.value;
                return null == t || "" === t
                    ? null
                    : (0, n.jsx)(A, { className: s()({ [C.QJ]: e?.disabled }), availableSlots: M[t] });
            },
            [M],
        ),
        P = a.useCallback((e) => (0, n.jsx)("div", { className: s()({ [C.QJ]: e.disabled }), children: e.label }), []),
        D = a.useCallback(
            (e) => {
                M[e] <= 0 || w(e);
            },
            [M, w],
        ),
        I = null == (t = M[i ?? b.dJq]) || t > 0 ? i : void 0;
    return (0, n.jsx)(u.p, {
        label: l,
        className: o,
        onChange: D,
        value: I,
        multi: !1,
        options: E,
        renderOptionPrefix: T,
        renderOptionSuffix: k,
        renderOptionLabel: P,
        placeholder: 0 === E.length ? y.intl.string(y.t.O3i2gV) : y.intl.string(y.t.CunCMN),
        "data-migration-pending": !0,
    });
}
