n.d(t, { S: () => s });
var r = n(54381),
    i = n(473749),
    l = n(681715),
    o = n(593214),
    a = n(388032);
let s = i.memo(function (e) {
    let { "aria-label": t = !1, children: n } = e,
        s = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, o.up)();
            return (
                i.useEffect(() => {
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
    return s
        ? (0, r.jsx)(l.u, {
              forceOpen: s,
              hideOnClick: !0,
              spacing: 12,
              position: "right",
              align: "center",
              text: a.intl.string(a.t["4tSWQg"]),
              "aria-label": t,
              children: (0, r.jsx)("div", { children: n }),
          })
        : n;
});
