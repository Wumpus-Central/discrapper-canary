n.d(t, { N: () => O });
var r = n(200651);
n(192379);
var i = n(704215),
    l = n(740111),
    o = n(481060),
    a = n(963249),
    s = n(703656),
    c = n(626135),
    u = n(63063),
    d = n(823188),
    p = n(114625),
    h = n(474936),
    g = n(981631),
    f = n(388032),
    m = n(14249),
    b = n(74316);
function _(e) {
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
function E(e, t) {
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
function O(e) {
    var t, n, O, N;
    let v,
        { content: y, renderModalProps: I, analyticsLocations: C, analyticsLocation: S, isLightTheme: T } = e,
        P = 'AnnouncementModalVariant1_'.concat(i.z[Number(y.dismissKey)]),
        { onClose: j } = I,
        A = null !== (N = null === (t = y.button) || void 0 === t ? void 0 : t.copy) && void 0 !== N ? N : f.NW.string(f.t.YScQSE),
        Z = (null === (n = y.button) || void 0 === n ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button';
    switch (null === (O = y.button) || void 0 === O ? void 0 : O.buttonAction) {
        case l.Wc.OPEN_MARKETING_PAGE:
            v = () => {
                (0, s.uL)(g.Z5c.APPLICATION_STORE), j();
            };
            break;
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
            v = () =>
                (0, a.Z)({
                    subscriptionTier: h.Si.TIER_2,
                    analyticsLocations: C,
                    analyticsObject: E(_({}, S), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_2
                    }),
                    confirmationFooter: (0, r.jsx)(p.Z, {}),
                    onClose: (e) => {
                        e && j();
                    }
                });
            break;
        case l.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            v = () =>
                (0, a.Z)({
                    subscriptionTier: h.Si.TIER_1,
                    analyticsLocations: C,
                    analyticsObject: E(_({}, S), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_1
                    }),
                    onClose: (e) => {
                        e && j();
                    }
                });
            break;
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        default:
            v = () =>
                (0, a.Z)({
                    subscriptionTier: h.Si.TIER_2,
                    analyticsLocations: C,
                    analyticsObject: E(_({}, S), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_2
                    }),
                    onClose: (e) => {
                        e && j();
                    }
                });
    }
    let x =
            '' !== y.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              '\xA0',
                              (0, r.jsx)(o.eee, {
                                  className: m.termsApplyAnchor,
                                  href: u.Z.getArticleURL(y.helpArticleId),
                                  children: f.NW.string(f.t['sBp+u7'])
                              })
                          ]
                      })
                : void 0,
        L = {
            type: 'video',
            src: T ? y.heroArtVideoLinkLightTheme : y.videoLink
        };
    null != y.heroArtVideoSubtitles &&
        (L.subtitles = y.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== y.heroArtImageLinkDarkTheme || '' !== y.heroArtImageLinkLightTheme) &&
            (L = {
                type: 'image',
                src: T ? y.heroArtImageLinkLightTheme : y.heroArtImageLinkDarkTheme
            });
    let w = T ? d.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : d.VE.PREMIUM_TIER_2_WHITE_FILL,
        R =
            '' !== y.modalTopPill
                ? () =>
                      (0, r.jsx)(d.Cy, {
                          text: y.modalTopPill,
                          className: m.modalTopPill,
                          colorOptions: w
                      })
                : void 0;
    return {
        renderModalProps: I,
        header: y.header,
        modalTopExtra: R,
        subHeader: y.subheader,
        subHeaderExtra: x,
        body: y.body,
        heroArt: L,
        featureCards: y.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: T ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: P,
        button: () => {
            let e = Date.now();
            return (0, r.jsxs)(o.gtL, {
                className: m.buttonWide,
                innerClassName: m.innerButton,
                wrapperClassName: m.tier2Gradient,
                size: o.zxk.Sizes.SMALL,
                onClick: () => {
                    c.default.track(g.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: P,
                        cta_type: Z,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: P
                    }),
                        v();
                },
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: m.nitroIconSubHeader,
                        src: b
                    }),
                    A
                ]
            });
        },
        modalDismissibleContent: '' !== y.dismissKey ? Number(y.dismissKey) : void 0
    };
}
