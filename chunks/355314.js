r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(310752),
    u = r(174609),
    c = r(703656),
    d = r(210887),
    f = r(594174),
    _ = r(626135),
    h = r(424218),
    p = r(63063),
    m = r(380684),
    g = r(74538),
    E = r(684259),
    v = r(104494),
    I = r(639119),
    T = r(631771),
    b = r(790527),
    y = r(474936),
    S = r(981631),
    A = r(731994),
    N = r(388032),
    C = r(784923);
function R(e) {
    let { onClose: n, ...r } = e,
        R = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        O = (0, s.e7)([d.Z], () => d.Z.theme),
        D = null == R ? void 0 : R.premiumType,
        L = (0, I.N)(),
        x = (0, v.Ng)(),
        w = null != L || null != x,
        { enabled: P } = T.MP.useExperiment(
            { location: 'File Upload Roadblock' },
            {
                autoTrackExposure: !w,
                disable: w
            }
        ),
        M = (0, m.XS)(),
        k = P || M,
        U = O === S.BRd.LIGHT ? 'light' : 'dark',
        B = k
            ? (0, i.jsx)('img', {
                  className: C.updatedArt,
                  alt: 'File Upload Nitro Perk',
                  src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(U, '_v2.png')
              })
            : (0, i.jsx)(l.Z, { icons: A.J6 }),
        G = a.useMemo(() => {
            let e = g.ZP.getUserMaxFileSize(R);
            return (0, h.BU)(e / 1024, { useKibibytes: !0 });
        }, [R]),
        F = a.useMemo(() => {
            let e = N.intl.formatToPlainString(N.t.q5fTZm, { maxSize: G });
            switch (D) {
                case y.p9.TIER_0:
                    e = N.intl.formatToPlainString(N.t['/DXKen'], { maxSize: G });
                    break;
                case y.p9.TIER_1:
                    e = N.intl.formatToPlainString(N.t['Kf/MPD'], { maxSize: G });
            }
            return e;
        }, [D, G]),
        Z = (0, h.BU)(y.Uq / 1024, { useKibibytes: !0 }),
        V = M ? N.intl.string(N.t['9C+41t']) : N.intl.string(N.t['/tGlcn']),
        j = k
            ? M
                ? (0, E.T)({
                      user: R,
                      onClick: () => {
                          window.open(p.Z.getArticleURL(S.BhN.NITRO_FAQ), '_blank');
                      }
                  })
                : N.intl.string(N.t.ZcYwgY)
            : N.intl.formatToPlainString(N.t.htbuIS, { premiumMaxSize: Z }),
        H = k
            ? (0, i.jsx)('div', {
                  className: C.body,
                  children: (0, i.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      children: j
                  })
              })
            : (0, i.jsxs)('div', {
                  className: C.body,
                  children: [
                      (0, i.jsx)('span', { children: F }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-md/medium',
                          children: j
                      })
                  ]
              });
    function Y() {
        (0, u.Z)(),
            n(),
            _.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: S.jXE.FILE_UPLOAD_UPSELL_MODAL,
                location_object: S.qAy.NAVIGATION_LINK
            }),
            (0, c.uL)(S.Z5c.APPLICATION_STORE);
    }
    return (0, i.jsx)(b.Z, {
        artElement: B,
        artContainerClassName: k ? C.updatedArtContainer : C.artContainer,
        enableArtBoxShadow: !1,
        type: y.cd.UPLOAD_ERROR_UPSELL,
        title: V,
        body: H,
        context: N.intl.formatToPlainString(N.t.q5fTZm, { maxSize: G }),
        glowUp: j,
        analyticsLocation: { section: S.jXE.FILE_UPLOAD_POPOUT },
        onClose: n,
        subscriptionTier: y.Si.TIER_2,
        secondaryCTA: k ? N.intl.string(N.t.ZnqyZ2) : void 0,
        onSecondaryClick: k ? Y : void 0,
        showEnhancedUpsell: k,
        ...r
    });
}
