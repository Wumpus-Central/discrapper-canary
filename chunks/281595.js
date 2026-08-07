"use strict";
n.d(t, { U: () => A, Y: () => E });
var i = n(477900),
    r = n(582128),
    a = n(682577),
    s = n(819169),
    l = n(661531),
    o = n(866323),
    d = n(695366),
    c = n(460890),
    u = n(834730),
    _ = n(550084);
function E(e) {
    let { validateOn: t, error: n, value: i, minLength: a, maxLength: s, min: l, max: o, defaultDirty: d } = e,
        { i18n: u } = r.useContext(c.VO),
        [_, E] = r.useState(d),
        A = r.useMemo(() => {
            if ("change" !== t) return null;
            {
                if (null === n || "" === n) return null;
                if (null != n) return n;
                if (!_) return null;
                if (null != a && (i?.length ?? 0) < a) return u.MINIMUM_LENGTH_ERROR(a);
                if (null != s && (i?.length ?? 0) > s) return u.MAXIMUM_LENGTH_ERROR(s);
                let e = null != i && "" !== i ? Number(i) : void 0;
                if (null != e && Number.isFinite(e)) {
                    if (null != l && e < l) return u.MINIMUM_VALUE_ERROR(l);
                    if (null != o && e > o) return u.MAXIMUM_VALUE_ERROR(o);
                }
                return null;
            }
        }, [t, n, _, a, i, s, l, o, u]),
        h = (null != n && "" !== n) || null != A;
    return { errorMessage: A, hasError: h, setShouldValidate: E };
}
function A(e) {
    let { error: t } = e,
        n = (0, o.p)(t, {
            config: { tension: 250, clamp: !0 },
            from: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
            enter: { marginTop: 8, height: "auto", opacity: 1, transform: "translate3d(0, -0px, 0)" },
            leave: { marginTop: 0, height: 0, opacity: 0, transform: "translate3d(0, -100%, 0)" },
        }),
        r = (0, s.A)(t);
    return (0, i.jsx)(i.Fragment, {
        children: n((e, n, s) => {
            let { key: o } = s,
                { transform: c, ...E } = e;
            return null != n && "" !== n
                ? (0, i.jsx)(
                      a.animated.div,
                      {
                          role: "alert",
                          style: { ...E, overflow: "hidden" },
                          children: (0, i.jsxs)(a.animated.div, {
                              style: { transform: c },
                              className: _.X,
                              children: [
                                  (0, i.jsx)(d.E, { size: "xs", color: l.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                                  (0, i.jsx)(u.E, {
                                      color: "text-feedback-critical",
                                      variant: "text-sm/medium",
                                      children: null != t && "" !== t ? t : r,
                                  }),
                              ],
                          }),
                      },
                      o,
                  )
                : null;
        }),
    });
}
