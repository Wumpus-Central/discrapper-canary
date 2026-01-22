n.d(t, { A: () => A }), n(896048);
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    u = n(444550),
    o = n(397927),
    c = n(263063),
    d = n(931991),
    f = n(71393),
    m = n(576705),
    g = n(711014),
    h = n(287809),
    v = n(473145),
    b = n(661191),
    x = n(796774),
    p = n(209932),
    j = n(980504),
    y = n(652215),
    w = n(985018),
    N = n(485516);
function O(e) {
    let { availableSlots: t, className: n } = e;
    return (0, l.jsxs)(o.Text, {
        className: r()(N._E, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, l.jsx)(o.HKD, {
                size: "md",
                color: "currentColor",
                className: N.Xk,
            }),
            w.intl.format(w.t["8Dyg1C"], { slots: t }),
        ],
    });
}
function A(e) {
    let t,
        { label: n, value: a, className: o, onChange: A } = e,
        C = (0, s.cf)([g.Ay, m.A, h.default, f.A], () => {
            let e = {};
            for (let t of g.Ay.getFlattenedGuildIds()) {
                let n = f.A.getGuild(t);
                null != n && (0, d.ie)(n, m.A, h.default).canCreateExpressions && (e[n.id] = n);
            }
            return e;
        }),
        S = (0, s.cf)([p.A], () => {
            let e = {};
            for (let [n, l] of b.default.entries(C)) {
                var t;
                let i = (0, v.tO)(l, null != (t = p.A.getSoundsForGuild(n)) ? t : j.pD, l.premiumTier);
                e[n] = i;
            }
            return e;
        }, [C]);
    i.useEffect(() => {
        (0, x.E7)();
    }, []);
    let P = i.useMemo(
            () =>
                Object.values(C).map((e) => {
                    let { name: t, id: n } = e;
                    return {
                        label: t,
                        value: n,
                        disabled: S[n] <= 0,
                    };
                }),
            [C, S],
        ),
        E = i.useCallback(
            (e) =>
                null == e || "" === e.value
                    ? null
                    : (0, l.jsx)(c.A, {
                          className: r()(N.cl, { [N.QJ]: e.disabled }),
                          guild: C[e.value],
                          size: c.A.Sizes.SMOL,
                          active: !0,
                      }),
            [C],
        ),
        M = i.useCallback(
            (e) => {
                let t = null == e ? void 0 : e.value;
                return null == t || "" === t
                    ? null
                    : (0, l.jsx)(O, {
                          className: r()({ [N.QJ]: null == e ? void 0 : e.disabled }),
                          availableSlots: S[t],
                      });
            },
            [S],
        ),
        k = i.useCallback(
            (e) =>
                (0, l.jsx)("div", {
                    className: r()({ [N.QJ]: e.disabled }),
                    children: e.label,
                }),
            [],
        ),
        T = i.useCallback(
            (e) => {
                S[e] <= 0 || A(e);
            },
            [S, A],
        ),
        D = null == (t = S[null != a ? a : y.dJq]) || t > 0 ? a : void 0;
    return (0, l.jsx)(u.p, {
        label: n,
        className: o,
        onChange: T,
        value: D,
        multi: !1,
        options: P,
        renderOptionPrefix: E,
        renderOptionSuffix: M,
        renderOptionLabel: k,
        placeholder: 0 === P.length ? w.intl.string(w.t.O3i2gV) : w.intl.string(w.t.CunCMN),
        "data-migration-pending": !0,
    });
}
