"use strict";
n.d(t, { U: () => d, Y: () => c });
var r = n(627968),
    i = n(64700),
    s = n(687498),
    a = n(397927),
    o = n(919796),
    l = n(985018),
    u = n(91731);
function c(e) {
    let { validateOn: t, error: n, value: r, minLength: s, maxLength: a, defaultDirty: o } = e,
        [u, c] = i.useState(o),
        d = i.useMemo(
            () =>
                "change" !== t || null === n || "" === n
                    ? null
                    : null != n
                      ? n
                      : u
                        ? null != s && (r?.length ?? 0) < s
                            ? l.intl.formatToPlainString(l.t["62rk1K"], { minLength: s })
                            : null != a && (r?.length ?? 0) > a
                              ? l.intl.formatToPlainString(l.t.ICT5S6, { maxLength: a })
                              : null
                        : null,
            [t, n, u, s, r?.length, a],
        ),
        _ = (null != n && "" !== n) || null != d;
    return { errorMessage: d, hasError: _, setShouldValidate: c };
}
function d(e) {
    let { error: t } = e,
        n = (0, a.pnh)(t, {
            config: { tension: 250, clamp: !0 },
            from: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
            enter: { marginTop: 8, height: "auto", opacity: 1, transform: "translate3d(0, -0px, 0)" },
            leave: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
        }),
        i = (0, o.A)(t);
    return (0, r.jsx)(r.Fragment, {
        children: n((e, n, o) => {
            let { key: l } = o,
                { transform: c, ...d } = e;
            return null != n && "" !== n
                ? (0, r.jsx)(
                      s.animated.div,
                      {
                          style: { ...d, overflow: "hidden" },
                          children: (0, r.jsxs)(s.animated.div, {
                              style: { transform: c },
                              className: u.Xu,
                              children: [
                                  (0, r.jsx)(a.EpV, { size: "xs", color: a.LU0.colors.TEXT_FEEDBACK_CRITICAL.css }),
                                  (0, r.jsx)(a.Text, {
                                      color: "text-feedback-critical",
                                      variant: "text-sm/medium",
                                      children: null != t && "" !== t ? t : i,
                                  }),
                              ],
                          }),
                      },
                      l,
                  )
                : null;
        }),
    });
}
