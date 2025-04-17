n.d(t, { N: () => N });
var r = n(200651);
n(192379);
var i = n(704215),
    l = n(740111),
    a = n(481060),
    o = n(963249),
    s = n(703656),
    c = n(626135),
    u = n(63063),
    d = n(823188),
    p = n(114625),
    h = n(72623),
    f = n(474936),
    g = n(981631),
    m = n(388032),
    b = n(892012),
    _ = n(74316);
function E(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    var t, n, N, y;
    let I,
        { content: v, renderModalProps: C, analyticsLocations: S, analyticsLocation: T, isLightTheme: P } = e,
        j = 'AnnouncementModalVariant1_'.concat(i.z[Number(v.dismissKey)]),
        { onClose: A } = C,
        Z = null != (y = null == (t = v.button) ? void 0 : t.copy) ? y : m.NW.string(m.t.YScQSE),
        x = (null == (n = v.button) ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button';
    switch (null == (N = v.button) ? void 0 : N.buttonAction) {
        case l.Wc.OPEN_MARKETING_PAGE:
            I = () => {
                (0, s.uL)(g.Z5c.APPLICATION_STORE), A();
            };
            break;
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
            I = () =>
                (0, o.Z)({
                    subscriptionTier: f.Si.TIER_2,
                    analyticsLocations: S,
                    analyticsObject: O(E({}, T), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_2
                    }),
                    confirmationFooter: (0, r.jsx)(p.Z, {}),
                    paymentModalBanner: (0, r.jsx)(h.Z, {}),
                    onClose: (e) => {
                        e && A();
                    }
                });
            break;
        case l.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            I = () =>
                (0, o.Z)({
                    subscriptionTier: f.Si.TIER_1,
                    analyticsLocations: S,
                    analyticsObject: O(E({}, T), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_1
                    }),
                    onClose: (e) => {
                        e && A();
                    }
                });
            break;
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        default:
            I = () =>
                (0, o.Z)({
                    subscriptionTier: f.Si.TIER_2,
                    analyticsLocations: S,
                    analyticsObject: O(E({}, T), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_2
                    }),
                    onClose: (e) => {
                        e && A();
                    }
                });
    }
    let L =
            '' !== v.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              '\xA0',
                              (0, r.jsx)(a.eee, {
                                  className: b.termsApplyAnchor,
                                  href: u.Z.getArticleURL(v.helpArticleId),
                                  children: m.NW.string(m.t['sBp+u7'])
                              })
                          ]
                      })
                : void 0,
        w = {
            type: 'video',
            src: P ? v.heroArtVideoLinkLightTheme : v.videoLink
        };
    null != v.heroArtVideoSubtitles &&
        (w.subtitles = v.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== v.heroArtImageLinkDarkTheme || '' !== v.heroArtImageLinkLightTheme) &&
            (w = {
                type: 'image',
                src: P ? v.heroArtImageLinkLightTheme : v.heroArtImageLinkDarkTheme
            });
    let R = P ? d.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : d.VE.PREMIUM_TIER_2_WHITE_FILL,
        D =
            '' !== v.modalTopPill
                ? () =>
                      (0, r.jsx)(d.Cy, {
                          text: v.modalTopPill,
                          className: b.modalTopPill,
                          colorOptions: R
                      })
                : void 0;
    return {
        renderModalProps: C,
        header: v.header,
        modalTopExtra: D,
        subHeader: v.subheader,
        subHeaderExtra: L,
        body: v.body,
        heroArt: w,
        featureCards: v.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: P ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: j,
        button: () => {
            let e = Date.now();
            return (0, r.jsxs)(a.gtL, {
                className: b.buttonWide,
                innerClassName: b.innerButton,
                wrapperClassName: b.tier2Gradient,
                size: a.zxk.Sizes.SMALL,
                onClick: () => {
                    c.default.track(g.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: j,
                        cta_type: x,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: j
                    }),
                        I();
                },
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: b.nitroIconSubHeader,
                        src: _
                    }),
                    Z
                ]
            });
        },
        modalDismissibleContent: '' !== v.dismissKey ? Number(v.dismissKey) : void 0
    };
}
