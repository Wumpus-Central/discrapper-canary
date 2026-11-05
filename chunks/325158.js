e.d(n, { C4: () => O, XN: () => R, nO: () => j, D8: () => b });
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
    f = e(736653),
    g = e(646514),
    m = e(895253);
function p(t) {
    let n = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><mask id="wand"><rect x="2" y="2" width="20" height="20" rx="3" fill="#fff"/><g transform="translate(6 6) scale(0.5)" fill="#000"><path d="${m.fy}"/><path d="${m.tW}"/><path d="${m.tE}"/></g></mask><rect x="2" y="2" width="20" height="20" rx="3" fill="${t}" mask="url(#wand)"/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(n)}`;
}
let x = {
    light: p(g.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()),
    dark: p(g.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
};
var I = e(454908),
    _ = e(82149),
    N = e(129230),
    E = e(913659),
    T = e(486020),
    h = e(20805),
    C = e(327098),
    S = e(652215),
    y = e(487887),
    v = e(792996);
function O(t) {
    let n = t?.getIconURL(y.iu.LARGE),
        e = t?.name;
    if (null != n)
        return {
            src: n,
            alt:
                null == e
                    ? v.intl.string(v.t["2B/phM"])
                    : v.intl.formatToPlainString(v.t.tiKyYg, { applicationName: e }),
        };
}
function j(t) {
    let n,
        { entry: e, showCoverImage: l = !0, trackingSource: i } = t,
        { activity: a, activityApplication: r, fallbackApplication: s } = (0, C.A)(e),
        o = s ?? r,
        { largeImage: c, smallImage: u } = b(a, r),
        { largeImage: d } = P(a, o),
        A = o?.getCanonicalGameId(),
        { data: f } = (0, I.I)(A),
        g = f?.getCoverURL(),
        m =
            (0, h.Tq)(e) && e.extra.entries.length > 0
                ? { src: e.extra.entries[0].media.image_url }
                : (0, h.Lf)(e)
                  ? {
                        src: (0, E.uD)(e.extra.application_id, e.extra.media_assets_large_image, y.iu.LARGE),
                        alt: e.extra.media_title,
                    }
                  : (0, h.p6)(e)
                    ? { src: e.extra.media.image_url }
                    : void 0;
    return (
        (n =
            null != c
                ? { largeImage: c, smallImage: u }
                : null != m
                  ? { largeImage: m, smallImage: void 0 }
                  : null != g && l
                    ? { largeImage: { src: g }, smallImage: void 0 }
                    : { largeImage: d, smallImage: void 0 }),
        L({ activity: a, application: s ?? r, largeImageSrc: n.largeImage?.src, trackingSource: i }),
        n
    );
}
function P(t, n) {
    let { largeImage: e, smallImage: l } = b(t, n);
    return (function (t) {
        let { activity: n, application: e, largeImage: l, smallImage: i, conjureImage: r } = t;
        if (null != l) return { largeImage: l, smallImage: i };
        if ((0, _.Cy)(n)) {
            let t = (0, _.UW)(n),
                e =
                    null != t
                        ? T.Ay.getGuildIconURL({ id: t.guildId, icon: n?.assets?.small_image, size: y.iu.SMALL })
                        : void 0;
            return { largeImage: null != e ? { src: e } : void 0, smallImage: void 0 };
        }
        if ((0, o.A)(n))
            return {
                largeImage: { src: a.A.get(S.fg2.XBOX).icon.customPNG, alt: v.intl.string(v.t.Nfvo72) },
                smallImage: void 0,
            };
        if (null == i && (0, s.A)(n))
            return {
                largeImage: { src: a.A.get(S.fg2.PLAYSTATION).icon.lightPNG, alt: v.intl.string(v.t.fFl4jo) },
                smallImage: void 0,
            };
        if ((0, d.$_)(n)) return { largeImage: { src: r, alt: n?.name }, smallImage: void 0 };
        let c = O(e);
        return null != c ? { largeImage: c, smallImage: i } : { largeImage: i, smallImage: void 0 };
    })({
        activity: t,
        application: n,
        largeImage: e,
        smallImage: l,
        conjureImage: (0, A.M)((0, f.Ay)()) ? x.dark : x.light,
    });
}
function R(t, n, e) {
    let l = P(t, n);
    return (L({ activity: t, application: n, largeImageSrc: l.largeImage?.src, trackingSource: e }), l);
}
function L(t) {
    let { activity: n, application: e, largeImageSrc: a, trackingSource: r } = t,
        s = n?.application_id,
        o = (0, u.h)(s),
        d = (0, i.bG)([c.A], () => null != s && c.A.didFetchingApplicationFail(s)),
        A = null == s || null != o || d,
        f = null != o || null != e,
        g = null == a,
        m = n?.name,
        p = n?.type,
        x = n?.session_id,
        I = n?.assets?.large_image != null || n?.assets?.small_image != null,
        _ = null != n;
    (0, l.useEffect)(() => {
        _ &&
            A &&
            g &&
            N.default.track(S.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
                source: r,
                application_id: s,
                activity_name: m,
                activity_type: p,
                activity_session_id: x,
                application_found: f,
                has_rich_assets: I,
            });
    }, [r, _, A, g, s, m, p, x, f, I]);
}
function b(t, n) {
    let e = (0, u.h)(t?.application_id),
        l = n ?? e,
        { data: i } = (0, I.I)(l?.getCanonicalGameId());
    if (null == t) return { largeImage: void 0, smallImage: void 0 };
    let a = t?.assets?.large_image,
        s =
            null != a
                ? {
                      src: (0, E.uD)(t.application_id, a, [y.iu.LARGE, y.iu.LARGE]),
                      text: t.assets?.large_text?.trim(),
                      url: t.assets?.large_url,
                  }
                : void 0,
        o = (0, r.A)(t) ? void 0 : t?.assets?.small_image,
        c =
            null != o
                ? {
                      src: (0, E.uD)(t.application_id, o, [y.iu.LARGE, y.iu.LARGE]),
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
                    return { src: n, alt: v.intl.formatToPlainString(v.t.tiKyYg, { applicationName: t.name }) };
            })(i) ??
            O(l),
        smallImage: c,
    };
}
