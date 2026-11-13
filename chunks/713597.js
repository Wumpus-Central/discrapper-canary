l(321073);
var n = l(582128),
    i = l(35236),
    a = l(215195);
function r(e) {
    if (!(0, a.Ge)(e) || null == e.shopUnpublishedAt) return null;
    let t = e.shopUnpublishedAt.getTime();
    return Number.isFinite(t) ? t : null;
}
function s(e, t) {
    let l = r(e);
    return null != l && l > t ? l : null;
}
l.d(
    t,
    {},
    {
        Ay: function (e, t) {
            let [l, a] = n.useState(Date.now);
            return (
                n.useEffect(() => {
                    if (!t) return;
                    let n = Date.now(),
                        u = (function (e, t) {
                            let l = null;
                            for (let n of e) {
                                let e = s(n, t);
                                if (null == e) continue;
                                let a = e - i.XF,
                                    r = a > t ? a : e;
                                (null == l || r < l) && (l = r);
                            }
                            return l;
                        })(e, n),
                        o =
                            !(n <= l) &&
                            e.some((e) => {
                                let t = r(e);
                                if (null == t) return !1;
                                let a = t - i.XF;
                                return (a > l && a <= n) || (t > l && t <= n);
                            })
                                ? 0
                                : null == u
                                  ? null
                                  : Math.min(u - n, 0x7fffffff);
                    if (null == o) return;
                    let d = setTimeout(() => a(Date.now()), o);
                    return () => clearTimeout(d);
                }, [e, t, l]),
                n.useMemo(
                    () =>
                        t
                            ? (function (e) {
                                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                                      l = [],
                                      n = [];
                                  return (
                                      e.forEach((e, a) => {
                                          let r = s(e, t);
                                          null != r && r - t <= i.XF
                                              ? l.push({ item: e, deadline: r, index: a })
                                              : n.push(e);
                                      }),
                                      l.sort((e, t) => {
                                          let l = e.deadline - t.deadline;
                                          return 0 !== l ? l : e.index - t.index;
                                      }),
                                      [
                                          ...l.map((e) => {
                                              let { item: t } = e;
                                              return t;
                                          }),
                                          ...n,
                                      ]
                                  );
                              })(e, l)
                            : e,
                    [e, t, l],
                )
            );
        },
        Oh: function (e, t, l) {
            let n = e.slice(0, l).filter((e) => null != e.sku),
                i = t.slice(0, l).filter((e) => null != e.sku);
            return n.length !== i.length || n.some((e, t) => e !== i[t]);
        },
    },
);
