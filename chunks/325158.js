e.d(n, { C4: () => j, XN: () => L, nO: () => O, D8: () => b });
var l = e(582128),
    i = e(855986),
    a = e(573648),
    r = e(541806),
    s = e(141639),
    o = e(61330),
    c = e(587895),
    u = e(429913),
    d = e(189117),
    A = e(462887),
    x = e(736653),
    m = e(646514),
    f = e(895253);
function g(t) {
    let n = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><mask id="wand"><rect x="2" y="2" width="20" height="20" rx="3" fill="#fff"/><g transform="translate(6 6) scale(0.5)" fill="#000"><path d="${f.fy}"/><path d="${f.tW}"/><path d="${f.tE}"/></g></mask><rect x="2" y="2" width="20" height="20" rx="3" fill="${t}" mask="url(#wand)"/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(n)}`;
}
let p = {
    light: g(m.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()),
    dark: g(m.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
};
var _ = e(454908),
    I = e(82149),
    E = e(129230),
    T = e(913659),
    N = e(486020),
    h = e(20805),
    C = e(327098),
    v = e(652215),
    y = e(487887),
    S = e(792996);
function j(t) {
    let n = t?.getIconURL(y.iu.LARGE),
        e = t?.name;
    if (null != n)
        return {
            src: n,
            alt:
                null == e
                    ? S.intl.string(S.t["2B/phM"])
                    : S.intl.formatToPlainString(S.t.tiKyYg, { applicationName: e }),
        };
}
function O(t) {
    let n,
        { entry: e, showCoverImage: l = !0, trackingSource: i } = t,
        { activity: a, activityApplication: r, fallbackApplication: s } = (0, C.A)(e),
        o = s ?? r,
        { largeImage: c, smallImage: u } = b(a, r),
        { largeImage: d } = P(a, o),
        A = o?.getCanonicalGameId(),
        { data: x } = (0, _.I)(A),
        m = x?.getCoverURL(),
        f =
            (0, h.Tq)(e) && e.extra.entries.length > 0
                ? { src: e.extra.entries[0].media.image_url }
                : (0, h.Lf)(e)
                  ? {
                        src: (0, T.uD)(e.extra.application_id, e.extra.media_assets_large_image, y.iu.LARGE),
                        alt: e.extra.media_title,
                    }
                  : (0, h.p6)(e)
                    ? { src: e.extra.media.image_url }
                    : void 0;
    return (
        (n =
            null != c
                ? { largeImage: c, smallImage: u }
                : null != f
                  ? { largeImage: f, smallImage: void 0 }
                  : null != m && l
                    ? { largeImage: { src: m }, smallImage: void 0 }
                    : { largeImage: d, smallImage: void 0 }),
        R({ activity: a, application: s ?? r, largeImageSrc: n.largeImage?.src, trackingSource: i }),
        n
    );
}
function P(t, n) {
    let { largeImage: e, smallImage: l } = b(t, n);
    return (function (t) {
        let { activity: n, application: e, largeImage: l, smallImage: i, conjureImage: r } = t;
        if (null != l) return { largeImage: l, smallImage: i };
        if ((0, I.Cy)(n)) {
            let t = (0, I.UW)(n),
                e =
                    null != t
                        ? N.Ay.getGuildIconURL({ id: t.guildId, icon: n?.assets?.small_image, size: y.iu.SMALL })
                        : void 0;
            return { largeImage: null != e ? { src: e } : void 0, smallImage: void 0 };
        }
        if ((0, o.A)(n))
            return {
                largeImage: { src: a.A.get(v.fg2.XBOX).icon.customPNG, alt: S.intl.string(S.t.Nfvo72) },
                smallImage: void 0,
            };
        if (null == i && (0, s.A)(n))
            return {
                largeImage: { src: a.A.get(v.fg2.PLAYSTATION).icon.lightPNG, alt: S.intl.string(S.t.fFl4jo) },
                smallImage: void 0,
            };
        if ((0, d.$_)(n)) return { largeImage: { src: r, alt: n?.name }, smallImage: void 0 };
        let c = j(e);
        return null != c ? { largeImage: c, smallImage: i } : { largeImage: i, smallImage: void 0 };
    })({
        activity: t,
        application: n,
        largeImage: e,
        smallImage: l,
        conjureImage: (0, A.M)((0, x.Ay)()) ? p.dark : p.light,
    });
}
function L(t, n, e) {
    let l = P(t, n);
    return (R({ activity: t, application: n, largeImageSrc: l.largeImage?.src, trackingSource: e }), l);
}
function R(t) {
    let { activity: n, application: e, largeImageSrc: a, trackingSource: r } = t,
        s = n?.application_id,
        o = (0, u.h)(s),
        d = (0, i.bG)([c.A], () => null != s && c.A.didFetchingApplicationFail(s)),
        A = null == s || null != o || d,
        x = null != o || null != e,
        m = null == a,
        f = n?.name,
        g = n?.type,
        p = n?.session_id,
        _ = n?.assets?.large_image != null || n?.assets?.small_image != null,
        I = null != n;
    (0, l.useEffect)(() => {
        I &&
            A &&
            m &&
            E.default.track(v.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
                source: r,
                application_id: s,
                activity_name: f,
                activity_type: g,
                activity_session_id: p,
                application_found: x,
                has_rich_assets: _,
            });
    }, [r, I, A, m, s, f, g, p, x, _]);
}
function b(t, n) {
    let e = (0, u.h)(t?.application_id),
        l = n ?? e,
        { data: i } = (0, _.I)(l?.getCanonicalGameId());
    if (null == t) return { largeImage: void 0, smallImage: void 0 };
    let a = t?.assets?.large_image,
        s =
            null != a
                ? {
                      src: (0, T.uD)(t.application_id, a, [y.iu.LARGE, y.iu.LARGE]),
                      text: t.assets?.large_text?.trim(),
                      url: t.assets?.large_url,
                  }
                : void 0,
        o = (0, r.A)(t) ? void 0 : t?.assets?.small_image,
        c =
            null != o
                ? {
                      src: (0, T.uD)(t.application_id, o, [y.iu.LARGE, y.iu.LARGE]),
                      text: t.assets?.small_text?.trim(),
                      url: t.assets?.small_url,
                  }
                : void 0;
    return {
        largeImage:
            s ??
            (function (t) {
                let n = t?.getIconURL(y.iu.LARGE);
                if (null != t && null != n)
                    return { src: n, alt: S.intl.formatToPlainString(S.t.tiKyYg, { applicationName: t.name }) };
            })(i) ??
            j(l),
        smallImage: c,
    };
}
