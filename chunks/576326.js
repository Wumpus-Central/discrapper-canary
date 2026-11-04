i.d(t, { i: () => E });
var n = i(582128),
    s = i(435558),
    r = i(164636),
    a = i(493527),
    o = i(544395);
i(801541);
var u = i(889137),
    g = i(546727),
    l = i(792996);
let E = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        d = (function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                d = (0, r.bG)([o.A], () => o.A.validate(e), [e]),
                S = (0, r.bG)([o.A], () => o.A.isRateLimited()),
                m = n.useMemo(
                    () => (0, s.debounce)((e) => a.A.attemptUsername(e, i ? "registration" : "modal", i, E), 800),
                    [i, E],
                );
            return (
                n.useEffect(() => {
                    t && !S && null == d && "" !== e && m(e);
                }, [t, S, d, e, m]),
                n.useMemo(
                    () =>
                        null != d
                            ? (0, u.YW)(d)
                                  .with({ rateLimited: !0 }, () => ({
                                      type: g.q.RATE_LIMIT,
                                      message: l.intl.string(l.t.T15lqn),
                                  }))
                                  .with({ error: u.P.not(u.P.nullish) }, (e) => {
                                      let { error: t } = e;
                                      return { type: g.q.ERROR, message: t };
                                  })
                                  .with({ taken: !1 }, () => ({
                                      type: g.q.AVAILABLE,
                                      message: l.intl.string(l.t.PgfBSx),
                                  }))
                                  .with({ taken: !0 }, () => ({ type: g.q.ERROR, message: l.intl.string(l.t.mCrAUb) }))
                                  .with({ error: u.P.nullish }, () => ({ type: g.q.INTERNAL_ERROR, message: "" }))
                                  .otherwise(() => void 0)
                            : void 0,
                    [d],
                )
            );
        })(e, t, i),
        [S, m] = n.useState(void 0);
    return (
        n.useEffect(() => {
            "" === e || e === E ? m(void 0) : null != d && m(d);
        }, [d, e, E]),
        S
    );
};
