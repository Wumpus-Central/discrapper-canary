n.d(t, {
    A: () => a,
}),
    n(896048),
    n(114821),
    n(339614);
var l = n(64700),
    r = n(68545);

function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function a(e) {
    var t;
    let {
            claimableVariants: n,
            defaultSelection: a,
            selectedGiftingPromotionReward: o,
            setSelectedGiftingPromotionReward: u,
            hasUserMadeSelection: c,
        } = e,
        d = null != n && n.length > 0,
        [p, m] = l.useState(null != (t = null == a ? void 0 : a.defaultCategory) ? t : r.Sm.Trick),
        f = l.useRef(p),
        g = l.useMemo(
            () =>
                d
                    ? n.flatMap((e) =>
                          e.variants.length < r.PN
                              ? []
                              : s(i({}, e.variants[p]), {
                                    name: e.name,
                                }),
                      )
                    : [],
            [n, p, d],
        ),
        j = l.useMemo(() => null != o && g.some((e) => e.skuId === o.skuId), [g, o]);
    if (
        (l.useEffect(() => {
            d && ((null == a ? void 0 : a.defaultCategory) == null || c || m(a.defaultCategory));
        }, [null == a ? void 0 : a.defaultCategory, c, d]),
        l.useEffect(() => {
            d && (f.current === p || j || u(void 0), (f.current = p));
        }, [p, j, u, d]),
        !d)
    )
        return null;
    let y = n.length > 1;
    return s(
        i(
            {},
            y && {
                selectedCategory: p,
            },
            y && {
                setSelectedCategory: m,
            },
        ),
        {
            shouldRenderCategoryControl: y,
        },
    );
}
