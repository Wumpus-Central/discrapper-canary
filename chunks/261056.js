n.d(t, {
    A: () => m,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(827734),
    a = n(397927),
    o = n(475743),
    c = n(775602),
    u = n(21161),
    d = n(430363),
    p = n(659416),
    h = n(823854),
    g = n(989614);

function f(e) {
    let { userId: t, wrapperClassName: n, children: d } = e,
        f = (0, i.bG)([h.A], () => h.A.getProgressForUserId(t), [t]),
        m = (0, i.bG)([h.A], () => {
            var e;
            let n = h.A.getTrackingEntryForUserId(t);
            return (null == n || null == (e = n.presence) ? void 0 : e.phase) === p.Ob.COMPLETED;
        }, [t]),
        b = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        A = (0, o.A)(f),
        y = (0, o.A)(m),
        { createMultipleConfettiAt: O } = l.useContext(u.x),
        j = (0, a.rdh)(s.A.colors.INTERACTIVE_BACKGROUND_HOVER).hex(),
        x = (0, a.rdh)(s.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
        _ = (0, a.rdh)(s.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        v = l.useRef(0),
        E = l.useRef(null),
        C = Math.max(0, Math.min(1, null != f ? f : 0)),
        S = C >= 1 ? _ : x,
        I = l.useMemo(
            () => ({
                backgroundImage: "conic-gradient("
                    .concat(S, " ")
                    .concat(Math.round(360 * C), "deg, ")
                    .concat(j, " 0deg)"),
            }),
            [C, S, j],
        ),
        N = l.useMemo(
            () => ({
                size: {
                    type: "static-random",
                    minValue: 2,
                    maxValue: 6,
                },
                velocity: {
                    type: "static-random",
                    minValue: {
                        x: -120,
                        y: -140,
                    },
                    maxValue: {
                        x: 120,
                        y: -260,
                    },
                },
            }),
            [],
        ),
        T = l.useCallback(() => {
            var e;
            if (b) return;
            let t = null == (e = E.current) ? void 0 : e.getBoundingClientRect();
            null != t && O(t.left + t.width / 2, t.top + t.height / 2, N, 250);
        }, [N, O, b]);
    l.useEffect(() => {
        b || ((null != A ? A : 0) < 1 && C >= 1 && T());
    }, [C, T, A, b]),
        l.useEffect(() => {
            b || !0 !== m || (!0 !== y && T());
        }, [T, m, y, b]);
    let P = l.useCallback(() => {
        if (b || C < 1) return;
        let e = Date.now();
        e - v.current < 4e3 || ((v.current = e), T());
    }, [C, T, b]);
    return (0, r.jsx)("div", {
        className: n,
        onMouseEnter: P,
        children: (0, r.jsxs)("div", {
            ref: E,
            className: g.R,
            children: [
                (0, r.jsx)("div", {
                    className: g.h,
                    style: I,
                }),
                d,
            ],
        }),
    });
}

function m(e) {
    let { userId: t, wrapperClassName: n, children: l } = e,
        s = (0, d.Uk)("VoiceDareAvatarRing"),
        a = (0, i.bG)([h.A], () => h.A.hasVoiceDareForUserId(t), [t]);
    return s && a
        ? (0, r.jsx)(f, {
              userId: t,
              wrapperClassName: n,
              children: l,
          })
        : (0, r.jsx)("div", {
              className: n,
              children: l,
          });
}
