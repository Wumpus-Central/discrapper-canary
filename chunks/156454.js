l.d(t, { A: () => d, T: () => i });
var n = l(582128),
    r = l(17928),
    o = l(977445),
    u = l(733391),
    s = l(832163);
let f = [];
function i(e) {
    let t = (0, o.uS)(e ?? void 0),
        l = (0, r.bG)(
            [s.A],
            () => (null == e ? null : (s.A.getStorefrontDataForApplicationId(e)?.storefront ?? null)),
            [e],
        ),
        i = (0, r.bG)([s.A], () => (null != e ? s.A.getStorefrontEntries(e) : void 0), [e]),
        d = (0, r.bG)([s.A], () => (null != e ? s.A.getPreviewStorefrontId(e) : null), [e]);
    n.useEffect(() => {
        t && null != e && (0, u.JX)(e);
    }, [t, e]);
    let c = l?.id ?? null;
    return t
        ? {
              isTestMode: t,
              entries: i?.state === "fetched" ? i.entries : f,
              selectedStorefrontId: d ?? c,
              liveStorefrontId: c,
              liveStorefront: l,
          }
        : { isTestMode: !1, entries: f, selectedStorefrontId: c, liveStorefrontId: c, liveStorefront: l };
}
function d(e) {
    let { applicationId: t } = e,
        { isTestMode: l, selectedStorefrontId: o, liveStorefrontId: f, liveStorefront: d } = i(t),
        c = l && null != o && o !== f;
    (n.useEffect(() => {
        null != t && (0, u.ap)(t, { eager: !1 });
    }, [t]),
        n.useEffect(() => {
            c && null != t && null != o && (0, u.d8)(t, o);
        }, [c, t, o]));
    let a = (0, r.bG)([s.A], () => (c && null != o ? s.A.getStorefrontById(o) : void 0), [c, o]);
    return {
        isTestMode: l,
        selectedStorefrontId: o,
        liveStorefrontId: f,
        effectiveStorefront: c ? (a?.storefront ?? null) : d,
    };
}
