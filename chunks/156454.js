n.d(t, { A: () => d, T: () => f });
var l = n(582128),
    r = n(17928),
    o = n(977445),
    u = n(733391),
    i = n(832163);
let s = [];
function f(e) {
    let t = (0, o.uS)(e ?? void 0),
        n = (0, r.bG)(
            [i.A],
            () => (null == e ? null : (i.A.getStorefrontDataForApplicationId(e)?.storefront ?? null)),
            [e],
        ),
        f = (0, r.bG)([i.A], () => (null != e ? i.A.getStorefrontEntries(e) : void 0), [e]),
        d = (0, r.bG)([i.A], () => (null != e ? i.A.getPreviewStorefrontId(e) : null), [e]);
    l.useEffect(() => {
        t && null != e && (0, u.JX)(e);
    }, [t, e]);
    let c = n?.id ?? null;
    return t
        ? {
              isTestMode: t,
              entries: f?.state === "fetched" ? f.entries : s,
              selectedStorefrontId: d ?? c,
              liveStorefrontId: c,
              liveStorefront: n,
          }
        : { isTestMode: !1, entries: s, selectedStorefrontId: c, liveStorefrontId: c, liveStorefront: n };
}
function d(e) {
    let { applicationId: t } = e,
        { isTestMode: n, selectedStorefrontId: o, liveStorefrontId: s, liveStorefront: d } = f(t),
        c = n && null != o && o !== s;
    (l.useEffect(() => {
        null != t && (0, u.ap)(t, { eager: !1 });
    }, [t]),
        l.useEffect(() => {
            c && null != t && null != o && (0, u.d8)(t, o);
        }, [c, t, o]));
    let a = (0, r.bG)([i.A], () => (c && null != o ? i.A.getStorefrontById(o) : void 0), [c, o]);
    return {
        isTestMode: n,
        selectedStorefrontId: o,
        liveStorefrontId: s,
        effectiveStorefront: c ? (a?.storefront ?? null) : d,
    };
}
