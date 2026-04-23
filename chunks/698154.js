l.d(t, { A: () => E });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(311907),
    u = l(444550),
    o = l(834730),
    d = l(983851),
    c = l(263063),
    m = l(931991),
    f = l(71393),
    h = l(576705),
    g = l(711014),
    x = l(287809),
    v = l(473145),
    j = l(661191),
    p = l(796774),
    N = l(209932),
    A = l(980504),
    C = l(652215),
    b = l(985018),
    y = l(103987);
function w(e) {
    let { availableSlots: t, className: l } = e;
    return (0, n.jsxs)(o.E, {
        className: s()(y._E, l),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, n.jsx)(d.H, { size: "md", color: "currentColor", className: y.Xk }),
            b.intl.format(b.t["8Dyg1C"], { slots: t }),
        ],
    });
}
function E(e) {
    let t,
        { label: l, value: i, className: o, onChange: d } = e,
        E = (0, r.cf)([g.Ay, h.A, x.default, f.A], () => {
            let e = {};
            for (let t of g.Ay.getFlattenedGuildIds()) {
                let l = f.A.getGuild(t);
                null != l && (0, m.ie)(l, h.A, x.default).canCreateExpressions && (e[l.id] = l);
            }
            return e;
        }),
        S = (0, r.cf)([N.A], () => {
            let e = {};
            for (let [t, l] of j.default.entries(E)) {
                let n = (0, v.tO)(l, N.A.getSoundsForGuild(t) ?? A.pD, l.premiumTier);
                e[t] = n;
            }
            return e;
        }, [E]);
    a.useEffect(() => {
        (0, p.E7)();
    }, []);
    let M = a.useMemo(
            () =>
                Object.values(E).map((e) => {
                    let { name: t, id: l } = e;
                    return { label: t, value: l, disabled: S[l] <= 0 };
                }),
            [E, S],
        ),
        k = a.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, n.jsx)(c.Ay, {
                          className: s()(y.cl, { [y.QJ]: e.disabled }),
                          guild: E[e.value],
                          size: c.Ay.Sizes.SMOL,
                          active: !0,
                      }),
            [E],
        ),
        P = a.useCallback(
            (e) => {
                let t = e?.value;
                return null == t || "" === t
                    ? null
                    : (0, n.jsx)(w, { className: s()({ [y.QJ]: e?.disabled }), availableSlots: S[t] });
            },
            [S],
        ),
        T = a.useCallback((e) => (0, n.jsx)("div", { className: s()({ [y.QJ]: e.disabled }), children: e.label }), []),
        I = a.useCallback(
            (e) => {
                S[e] <= 0 || d(e);
            },
            [S, d],
        ),
        D = null == (t = S[i ?? C.dJq]) || t > 0 ? i : void 0;
    return (0, n.jsx)(u.p, {
        label: l,
        className: o,
        onChange: I,
        value: D,
        multi: !1,
        options: M,
        renderOptionPrefix: k,
        renderOptionSuffix: P,
        renderOptionLabel: T,
        placeholder: 0 === M.length ? b.intl.string(b.t.O3i2gV) : b.intl.string(b.t.CunCMN),
        "data-migration-pending": !0,
    });
}
