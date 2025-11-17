n.d(t, { F: () => d }), n(388685), n(539854), n(781311), n(642613);
var a = n(54381),
    l = n(473749),
    r = n(93582),
    i = n(481060),
    s = n(621060),
    o = n(716768);
function c(e) {
    let { label: t } = e;
    return (0, a.jsx)("div", {
        className: o.menuLabel,
        children: t,
    });
}
function d(e, t) {
    let [n, o] = l.useState(""),
        d = l.useMemo(() => {
            if ("" === n.trim()) return e;
            let t = n.toLowerCase().trim();
            return e.filter((e) => {
                var n, a;
                let l = (null != (n = (0, r.q)(e.name)) ? n : "").toLowerCase(),
                    i = (null != (a = e.group) ? a : "").toLowerCase();
                return l.includes(t) || e.id.toLowerCase().includes(t) || i.includes(t);
            });
        }, [e, n]);
    return [
        l.useMemo(
            () =>
                (0, a.jsx)(
                    i.II_,
                    {
                        id: "devtools-search",
                        control: (e, t) => {
                            var l, r;
                            return (0, a.jsx)(
                                i.ne,
                                ((l = (function (e) {
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
                                (r = r =
                                    {
                                        query: n,
                                        onChange: o,
                                        placeholder: "Search DevTools...",
                                        ref: t,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                l),
                            );
                        },
                    },
                    "devtools-search",
                ),
            [n],
        ),
        ...l.useMemo(() => {
            let e = [];
            if ("" !== n.trim() && 0 === d.length)
                e.push(
                    (0, a.jsx)(
                        i.sNh,
                        {
                            id: "devtools-no-results",
                            label: 'No DevTools found for "'.concat(n, '"'),
                            disabled: !0,
                        },
                        "devtools-no-results",
                    ),
                );
            else {
                let l = d.filter((e) => e.group === s.v0.NONE),
                    o = (function (e) {
                        let t = new Map();
                        for (let a of e) {
                            var n;
                            let e = null != (n = t.get(a.group)) ? n : [];
                            e.push(a), t.set(a.group, e);
                        }
                        return t;
                    })(d.filter((e) => e.group !== s.v0.NONE));
                l.forEach((n) => {
                    let { id: l, name: r } = n;
                    return e.push(
                        (0, a.jsx)(
                            i.sNh,
                            {
                                id: l,
                                label: (0, a.jsx)(c, { label: r }),
                                action: () => t(l),
                            },
                            l,
                        ),
                    );
                }),
                    s.Zj.forEach((l) => {
                        let s = o.get(l);
                        if (null != s && s.length > 0) {
                            let o = s.sort((e, t) => {
                                var n, a;
                                return (null != (n = (0, r.q)(e.name)) ? n : "").localeCompare(
                                    null != (a = (0, r.q)(t.name)) ? a : "",
                                );
                            });
                            "" === n.trim()
                                ? e.push(
                                      (0, a.jsx)(
                                          i.sNh,
                                          {
                                              id: "devtools-".concat(l),
                                              label: (0, a.jsx)(c, { label: l }),
                                              children: (0, a.jsx)(i.kSQ, {
                                                  children: o.map((e) =>
                                                      (0, a.jsx)(
                                                          i.sNh,
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
                                          "devtools-".concat(l),
                                      ),
                                  )
                                : e.push(
                                      (0, a.jsx)(
                                          i.kSQ,
                                          {
                                              label: l,
                                              children: o.map((e) =>
                                                  (0, a.jsx)(
                                                      i.sNh,
                                                      {
                                                          id: "devtools-filtered-".concat(e.id),
                                                          label: (0, a.jsx)(c, { label: e.name }),
                                                          action: () => t(e.id),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          },
                                          "devtools-filtered-".concat(l),
                                      ),
                                  );
                        }
                    });
            }
            return e;
        }, [d, n, t]),
    ];
}
