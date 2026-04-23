n.d(t, { i: () => E });
var i = n(64700),
    s = n(735438),
    r = n(702841),
    a = n(493527),
    o = n(544395);
n(801541);
var l = n(889137),
    u = n(546727),
    g = n(985018);
let d = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            E = (0, r.bG)([o.A], () => o.A.validate(e), [e]),
            m = (0, r.bG)([o.A], () => o.A.isRateLimited()),
            c = i.useMemo(
                () => (0, s.debounce)((e) => a.A.attemptUsername(e, n ? "registration" : "modal", n, d), 800),
                [n, d],
            );
        return (
            i.useEffect(() => {
                t && !m && null == E && "" !== e && c(e);
            }, [t, m, E, e, c]),
            i.useMemo(
                () =>
                    null != E
                        ? (0, l.YW)(E)
                              .with({ rateLimited: !0 }, () => ({
                                  type: u.q.RATE_LIMIT,
                                  message: g.intl.string(g.t.T15lqn),
                              }))
                              .with({ error: l.P.not(l.P.nullish) }, (e) => {
                                  let { error: t } = e;
                                  return { type: u.q.ERROR, message: t };
                              })
                              .with({ taken: !1 }, () => ({ type: u.q.AVAILABLE, message: g.intl.string(g.t.PgfBSx) }))
                              .with({ taken: !0 }, () => ({ type: u.q.ERROR, message: g.intl.string(g.t.mCrAUb) }))
                              .with({ error: l.P.nullish }, () => ({ type: u.q.INTERNAL_ERROR, message: "" }))
                              .otherwise(() => void 0)
                        : void 0,
                [E],
            )
        );
    },
    E = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
            r = d(e, t, n),
            [a, o] = i.useState(void 0);
        return (
            i.useEffect(() => {
                "" === e || e === s ? o(void 0) : null != r && o(r);
            }, [r, e, s]),
            a
        );
    };
