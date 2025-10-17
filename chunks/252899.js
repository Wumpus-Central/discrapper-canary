n.d(t, { F: () => d }), n(388685), n(539854), n(781311), n(642613);
var a = n(951288),
    r = n(647438),
    i = n(93582),
    l = n(481060),
    o = n(621060),
    s = n(716768);
function c(e) {
    let { label: t } = e;
    return (0, a.jsx)("div", {
        className: s.menuLabel,
        children: t,
    });
}
function d(e, t) {
    let [n, s] = r.useState(""),
        d = r.useMemo(() => {
            if ("" === n.trim()) return e;
            let t = n.toLowerCase().trim();
            return e.filter((e) => {
                var n, a;
                let r = (null != (n = (0, i.q)(e.name)) ? n : "").toLowerCase(),
                    l = (null != (a = e.group) ? a : "").toLowerCase();
                return r.includes(t) || e.id.toLowerCase().includes(t) || l.includes(t);
            });
        }, [e, n]);
    return [
        r.useMemo(
            () =>
                (0, a.jsx)(
                    l.II_,
                    {
                        id: "devtools-search",
                        control: (e, t) => {
                            var r, i;
                            return (0, a.jsx)(
                                l.ne,
                                ((r = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = a);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (i = i =
                                    {
                                        query: n,
                                        onChange: s,
                                        placeholder: "Search DevTools...",
                                        ref: t,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                r),
                            );
                        },
                    },
                    "devtools-search",
                ),
            [n],
        ),
        ...r.useMemo(() => {
            let e = [];
            if ("" !== n.trim() && 0 === d.length)
                e.push(
                    (0, a.jsx)(
                        l.sNh,
                        {
                            id: "devtools-no-results",
                            label: 'No DevTools found for "'.concat(n, '"'),
                            disabled: !0,
                        },
                        "devtools-no-results",
                    ),
                );
            else {
                let r = d.filter((e) => e.group === o.v0.NONE),
                    s = (function (e) {
                        let t = new Map();
                        for (let a of e) {
                            var n;
                            let e = null != (n = t.get(a.group)) ? n : [];
                            e.push(a), t.set(a.group, e);
                        }
                        return t;
                    })(d.filter((e) => e.group !== o.v0.NONE));
                r.forEach((n) => {
                    let { id: r, name: i } = n;
                    return e.push(
                        (0, a.jsx)(
                            l.sNh,
                            {
                                id: r,
                                label: (0, a.jsx)(c, { label: i }),
                                action: () => t(r),
                            },
                            r,
                        ),
                    );
                }),
                    o.Zj.forEach((r) => {
                        let o = s.get(r);
                        if (null != o && o.length > 0) {
                            let s = o.sort((e, t) => {
                                var n, a;
                                return (null != (n = (0, i.q)(e.name)) ? n : "").localeCompare(
                                    null != (a = (0, i.q)(t.name)) ? a : "",
                                );
                            });
                            "" === n.trim()
                                ? e.push(
                                      (0, a.jsx)(
                                          l.sNh,
                                          {
                                              id: "devtools-".concat(r),
                                              label: (0, a.jsx)(c, { label: r }),
                                              children: (0, a.jsx)(l.kSQ, {
                                                  children: s.map((e) =>
                                                      (0, a.jsx)(
                                                          l.sNh,
                                                          {
                                                              id: "devtools-".concat(e.id),
                                                              label: (0, a.jsx)(c, { label: e.name }),
                                                              action: () => t(e.id),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          },
                                          "devtools-".concat(r),
                                      ),
                                  )
                                : e.push(
                                      (0, a.jsx)(
                                          l.kSQ,
                                          {
                                              label: r,
                                              children: s.map((e) =>
                                                  (0, a.jsx)(
                                                      l.sNh,
                                                      {
                                                          id: "devtools-filtered-".concat(e.id),
                                                          label: (0, a.jsx)(c, { label: e.name }),
                                                          action: () => t(e.id),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          },
                                          "devtools-filtered-".concat(r),
                                      ),
                                  );
                        }
                    });
            }
            return e;
        }, [d, n, t]),
    ];
}
