n(321073);
var l = n(582128),
    i = n(174947);
function r(e) {
    if (!(0, i.xZ)(e) || null == e.shopUnpublishedAt) return null;
    let t = e.shopUnpublishedAt.getTime();
    return Number.isFinite(t) ? t : null;
}
function u(e, t) {
    let n = r(e);
    return null != n && n > t ? n : null;
}
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            let [n, a] = l.useState(Date.now);
            return (
                l.useEffect(() => {
                    if (!t) return;
                    let l = Date.now(),
                        o = (function (e, t) {
                            let n = null;
                            for (let l of e) {
                                let e = u(l, t);
                                if (null == e) continue;
                                let r = e - i.G3,
                                    a = r > t ? r : e;
                                (null == n || a < n) && (n = a);
                            }
                            return n;
                        })(e, l),
                        s =
                            !(l <= n) &&
                            e.some((e) => {
                                let t = r(e);
                                if (null == t) return !1;
                                let u = t - i.G3;
                                return (u > n && u <= l) || (t > n && t <= l);
                            })
                                ? 0
                                : null == o
                                  ? null
                                  : Math.min(o - l, 0x7fffffff);
                    if (null == s) return;
                    let f = setTimeout(() => a(Date.now()), s);
                    return () => clearTimeout(f);
                }, [e, t, n]),
                l.useMemo(
                    () =>
                        t
                            ? (function (e) {
                                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                                      n = [],
                                      l = [];
                                  return (
                                      e.forEach((e, r) => {
                                          let a = u(e, t);
                                          null != a && a - t <= i.G3
                                              ? n.push({ item: e, deadline: a, index: r })
                                              : l.push(e);
                                      }),
                                      n.sort((e, t) => {
                                          let n = e.deadline - t.deadline;
                                          return 0 !== n ? n : e.index - t.index;
                                      }),
                                      [
                                          ...n.map((e) => {
                                              let { item: t } = e;
                                              return t;
                                          }),
                                          ...l,
                                      ]
                                  );
                              })(e, n)
                            : e,
                    [e, t, n],
                )
            );
        },
        Oh: function (e, t, n) {
            let l = e.slice(0, n).filter((e) => null != e.sku),
                i = t.slice(0, n).filter((e) => null != e.sku);
            return l.length !== i.length || l.some((e, t) => e !== i[t]);
        },
    },
);
