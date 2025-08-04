n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(210887),
    l = n(914010),
    c = n(594174),
    u = n(424218),
    d = n(403182),
    f = n(63063),
    _ = n(74538),
    p = n(790527),
    h = n(474936),
    m = n(981631),
    g = n(388032),
    E = n(290602);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function I(e) {
    var { onClose: t, handleLearnMore: n } = e,
        b = O(e, ['onClose', 'handleLearnMore']);
    let v = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        I = (0, a.e7)([s.Z], () => s.Z.theme),
        T = (0, a.e7)([l.Z], () => l.Z.getGuildId()),
        S = I === m.BRd.LIGHT ? 'light' : 'dark',
        A = (0, r.jsx)('img', {
            className: E.art,
            alt: 'File Upload Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(S, '_v2.png')
        }),
        N = i.useMemo(() => {
            let e = _.ZP.getUserMaxFileSize(v);
            return (0, u.BU)(e / 1024, { useKibibytes: !0 });
        }, [v]),
        C = (0, d.iL)({
            guildId: T,
            onClick: () => {
                window.open(f.Z.getArticleURL(m.BhN.NITRO_FAQ), '_blank');
            }
        }),
        R = (0, r.jsx)('div', {
            className: E.body,
            children: (0, r.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: C
            })
        });
    return (0, r.jsx)(
        p.Z,
        y(
            {
                artElement: A,
                artContainerClassName: E.artContainer,
                enableArtBoxShadow: !1,
                type: h.cd.UPLOAD_ERROR_UPSELL,
                title: g.intl.string(g.t['9C+41t']),
                body: R,
                context: g.intl.formatToPlainString(g.t.q5fTZm, { maxSize: N }),
                glowUp: C,
                analyticsLocation: { section: m.jXE.FILE_UPLOAD_POPOUT },
                onClose: t,
                subscriptionTier: h.Si.TIER_2,
                secondaryCTA: g.intl.string(g.t.ZnqyZ2),
                onSecondaryClick: n,
                showEnhancedUpsell: !0
            },
            b
        )
    );
}
