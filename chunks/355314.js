n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(174609),
    l = n(703656),
    c = n(210887),
    u = n(914010),
    d = n(594174),
    f = n(626135),
    p = n(424218),
    _ = n(403182),
    h = n(63063),
    m = n(74538),
    g = n(790527),
    E = n(474936),
    v = n(981631),
    b = n(388032),
    y = n(775904);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    var { onClose: t } = e,
        n = I(e, ['onClose']);
    let O = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        T = (0, o.e7)([c.Z], () => c.Z.theme),
        N = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        A = T === v.BRd.LIGHT ? 'light' : 'dark',
        C = (0, r.jsx)('img', {
            className: y.art,
            alt: 'File Upload Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(A, '_v2.png')
        }),
        R = i.useMemo(() => {
            let e = m.ZP.getUserMaxFileSize(O);
            return (0, p.BU)(e / 1024, { useKibibytes: !0 });
        }, [O]),
        P = (0, _.iL)({
            guildId: N,
            onClick: () => {
                window.open(h.Z.getArticleURL(v.BhN.NITRO_FAQ), '_blank');
            }
        }),
        w = (0, r.jsx)('div', {
            className: y.body,
            children: (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                children: P
            })
        });
    function D() {
        (0, s.Z)(),
            t(),
            f.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: v.jXE.FILE_UPLOAD_UPSELL_MODAL,
                location_object: v.qAy.NAVIGATION_LINK
            }),
            (0, l.uL)(v.Z5c.APPLICATION_STORE);
    }
    return (0, r.jsx)(
        g.Z,
        S(
            {
                artElement: C,
                artContainerClassName: y.artContainer,
                enableArtBoxShadow: !1,
                type: E.cd.UPLOAD_ERROR_UPSELL,
                title: b.NW.string(b.t['9C+41t']),
                body: w,
                context: b.NW.formatToPlainString(b.t.q5fTZm, { maxSize: R }),
                glowUp: P,
                analyticsLocation: { section: v.jXE.FILE_UPLOAD_POPOUT },
                onClose: t,
                subscriptionTier: E.Si.TIER_2,
                secondaryCTA: b.NW.string(b.t.ZnqyZ2),
                onSecondaryClick: D,
                showEnhancedUpsell: !0
            },
            n
        )
    );
}
