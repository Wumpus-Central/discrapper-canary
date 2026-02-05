n.d(t, { Q: () => o });
var i = n(627968),
    l = n(64700),
    s = n(435371),
    a = n(93055),
    r = n(985018);
let o = l.memo(function (e) {
    let { "aria-label": t = !1, children: n } = e,
        o = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, a.CJ)();
            return (
                l.useEffect(() => {
                    if (e) {
                        let e = setTimeout(() => {
                            t();
                        }, 1500);
                        return () => {
                            t(), clearTimeout(e);
                        };
                    }
                }, [e, t]),
                e
            );
        })();
    return o
        ? (0, i.jsx)(s.m_, {
              forceOpen: o,
              hideOnClick: !0,
              spacing: 12,
              position: "right",
              align: "center",
              text: r.intl.string(r.t["4tSWQg"]),
              "aria-label": t,
              children: (0, i.jsx)("div", { children: n }),
          })
        : n;
});
