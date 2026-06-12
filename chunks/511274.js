"use strict";
n.d(t, { U: () => f, Y: () => h });
var i = n(627968),
    r = n(64700),
    s = n(922139),
    a = n(866323),
    o = n(695366),
    l = n(661531),
    u = n(834730),
    c = n(919796),
    d = n(375708),
    _ = n(482188);
function h(e) {
    let { validateOn: t, error: n, value: i, minLength: s, maxLength: a, defaultDirty: o } = e,
        [l, u] = r.useState(o),
        c = r.useMemo(
            () =>
                "change" !== t || null === n || "" === n
                    ? null
                    : null != n
                      ? n
                      : l
                        ? null != s && (i?.length ?? 0) < s
                            ? d.intl.formatToPlainString(d.t["62rk1K"], { minLength: s })
                            : null != a && (i?.length ?? 0) > a
                              ? d.intl.formatToPlainString(d.t.ICT5S6, { maxLength: a })
                              : null
                        : null,
            [t, n, l, s, i?.length, a],
        ),
        _ = (null != n && "" !== n) || null != c;
    return { errorMessage: c, hasError: _, setShouldValidate: u };
}
function f(e) {
    let { error: t } = e,
        n = (0, a.p)(t, {
            config: { tension: 250, clamp: !0 },
            from: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
            enter: { marginTop: 8, height: "auto", opacity: 1, transform: "translate3d(0, -0px, 0)" },
            leave: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
        }),
        r = (0, c.A)(t);
    return (0, i.jsx)(i.Fragment, {
        children: n((e, n, a) => {
            let { key: c } = a,
                { transform: d, ...h } = e;
            return null != n && "" !== n
                ? (0, i.jsx)(
                      s.animated.div,
                      {
                          style: { ...h, overflow: "hidden" },
                          children: (0, i.jsxs)(s.animated.div, {
                              style: { transform: d },
                              className: _.Xu,
                              children: [
                                  (0, i.jsx)(o.E, { size: "xs", color: l.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                                  (0, i.jsx)(u.E, {
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
