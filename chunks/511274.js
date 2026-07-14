"use strict";
n.d(t, { U: () => A, Y: () => E });
var i = n(627968),
    r = n(64700),
    a = n(580929),
    s = n(866323),
    l = n(695366),
    o = n(661531),
    d = n(834730),
    c = n(919796),
    u = n(375708),
    _ = n(482188);
function E(e) {
    let { validateOn: t, error: n, value: i, minLength: a, maxLength: s, min: l, max: o, defaultDirty: d } = e,
        [c, _] = r.useState(d),
        E = r.useMemo(() => {
            if ("change" !== t) return null;
            {
                if (null === n || "" === n) return null;
                if (null != n) return n;
                if (!c) return null;
                if (null != a && (i?.length ?? 0) < a)
                    return u.intl.formatToPlainString(u.t["62rk1K"], { minLength: a });
                if (null != s && (i?.length ?? 0) > s) return u.intl.formatToPlainString(u.t.ICT5S6, { maxLength: s });
                let e = null != i && "" !== i ? Number(i) : void 0;
                if (null != e && Number.isFinite(e)) {
                    if (null != l && e < l) return u.intl.formatToPlainString(u.t.ykmNSo, { min: l });
                    if (null != o && e > o) return u.intl.formatToPlainString(u.t.KiDDCk, { max: o });
                }
                return null;
            }
        }, [t, n, c, a, i, s, l, o]),
        A = (null != n && "" !== n) || null != E;
    return { errorMessage: E, hasError: A, setShouldValidate: _ };
}
function A(e) {
    let { error: t } = e,
        n = (0, s.p)(t, {
            config: { tension: 250, clamp: !0 },
            from: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
            enter: { marginTop: 8, height: "auto", opacity: 1, transform: "translate3d(0, -0px, 0)" },
            leave: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
        }),
        r = (0, c.A)(t);
    return (0, i.jsx)(i.Fragment, {
        children: n((e, n, s) => {
            let { key: c } = s,
                { transform: u, ...E } = e;
            return null != n && "" !== n
                ? (0, i.jsx)(
                      a.animated.div,
                      {
                          role: "alert",
                          style: { ...E, overflow: "hidden" },
                          children: (0, i.jsxs)(a.animated.div, {
                              style: { transform: u },
                              className: _.Xu,
                              children: [
                                  (0, i.jsx)(l.E, { size: "xs", color: o.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                                  (0, i.jsx)(d.E, {
                                      color: "text-feedback-critical",
                                      variant: "text-sm/medium",
                                      children: null != t && "" !== t ? t : r,
                                  }),
                              ],
                          }),
                      },
                      c,
                  )
                : null;
        }),
    });
}
