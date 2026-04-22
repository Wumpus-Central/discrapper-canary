"use strict";
n.d(t, { U: () => E, Y: () => f });
var r = n(627968),
    i = n(64700),
    s = n(517738),
    a = n(866323),
    o = n(695366),
    l = n(827734),
    u = n(834730),
    d = n(919796),
    c = n(985018),
    _ = n(482188);
function f(e) {
    let { validateOn: t, error: n, value: r, minLength: s, maxLength: a, defaultDirty: o } = e,
        [l, u] = i.useState(o),
        d = i.useMemo(
            () =>
                "change" !== t || null === n || "" === n
                    ? null
                    : null != n
                      ? n
                      : l
                        ? null != s && (r?.length ?? 0) < s
                            ? c.intl.formatToPlainString(c.t["62rk1K"], { minLength: s })
                            : null != a && (r?.length ?? 0) > a
                              ? c.intl.formatToPlainString(c.t.ICT5S6, { maxLength: a })
                              : null
                        : null,
            [t, n, l, s, r?.length, a],
        ),
        _ = (null != n && "" !== n) || null != d;
    return { errorMessage: d, hasError: _, setShouldValidate: u };
}
function E(e) {
    let { error: t } = e,
        n = (0, a.p)(t, {
            config: { tension: 250, clamp: !0 },
            from: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
            enter: { marginTop: 8, height: "auto", opacity: 1, transform: "translate3d(0, -0px, 0)" },
            leave: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
        }),
        i = (0, d.A)(t);
    return (0, r.jsx)(r.Fragment, {
        children: n((e, n, a) => {
            let { key: d } = a,
                { transform: c, ...f } = e;
            return null != n && "" !== n
                ? (0, r.jsx)(
                      s.animated.div,
                      {
                          style: { ...f, overflow: "hidden" },
                          children: (0, r.jsxs)(s.animated.div, {
                              style: { transform: c },
                              className: _.Xu,
                              children: [
                                  (0, r.jsx)(o.E, { size: "xs", color: l.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                                  (0, r.jsx)(u.E, {
                                      color: "text-feedback-critical",
                                      variant: "text-sm/medium",
                                      children: null != t && "" !== t ? t : i,
                                  }),
                              ],
                          }),
                      },
                      d,
                  )
                : null;
        }),
    });
}
