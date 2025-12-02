n.d(t, { N: () => E });
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(740111),
    a = n(159691),
    s = n(481060),
    o = n(963249),
    c = n(703656),
    u = n(626135),
    d = n(63063),
    p = n(382791),
    f = n(474936),
    h = n(981631),
    g = n(388032),
    m = n(605548);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
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
function E(e) {
    var t, n, E, O;
    let y,
        {
            componentId: v,
            promotionId: I,
            content: C,
            renderModalProps: S,
            analyticsLocations: T,
            analyticsLocation: N,
            isLightTheme: j,
        } = e,
        P = "AnnouncementModalVariant1_".concat(v),
        { onClose: x } = S,
        A = null != (O = null == (t = C.button) ? void 0 : t.copy) ? O : g.intl.string(g.t.YScQSF),
        Z =
            (null == (n = C.button) ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button";
    switch (null == (E = C.button) ? void 0 : E.buttonAction) {
        case l.Wc.OPEN_MARKETING_PAGE:
            y = () => {
                (0, c.uL)(h.Z5c.APPLICATION_STORE), x();
            };
            break;
        case l.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            y = () =>
                (0, o.Z)({
                    subscriptionTier: f.Si.TIER_1,
                    analyticsLocations: T,
                    analyticsObject: b(_({}, N), {
                        object: h.qAy.BUTTON_CTA,
                        objectType: h.AnalyticsObjectTypes.TIER_1,
                    }),
                    onClose: (e) => {
                        e && x();
                    },
                });
            break;
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            y = () =>
                (0, o.Z)({
                    subscriptionTier: f.Si.TIER_2,
                    analyticsLocations: T,
                    analyticsObject: b(_({}, N), {
                        object: h.qAy.BUTTON_CTA,
                        objectType: h.AnalyticsObjectTypes.TIER_2,
                    }),
                    onClose: (e) => {
                        e && x();
                    },
                });
    }
    let w =
            "" !== C.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              "\xA0",
                              (0, r.jsx)(s.Anchor, {
                                  className: m.termsApplyAnchor,
                                  href: d.Z.getArticleURL(C.helpArticleId),
                                  children: g.intl.string(g.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        L = {
            type: "video",
            src: j ? C.heroArtVideoLinkLightTheme : C.videoLink,
        };
    null != C.heroArtVideoSubtitles &&
        (L.subtitles = C.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1,
        }))),
        ("" !== C.heroArtImageLinkDarkTheme || "" !== C.heroArtImageLinkLightTheme) &&
            (L = {
                type: "image",
                src: j ? C.heroArtImageLinkLightTheme : C.heroArtImageLinkDarkTheme,
            });
    let R =
        "" !== C.modalTopPill
            ? () =>
                  (0, r.jsx)(p.mn, {
                      text: C.modalTopPill,
                      className: m.modalTopPill,
                  })
            : void 0;
    return {
        componentId: v,
        promotionId: I,
        renderModalProps: S,
        header: C.header,
        modalTopExtra: R,
        subHeader: C.subheader,
        subHeaderExtra: w,
        body: C.body,
        heroArt: L,
        featureCards: C.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: j ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0,
        })),
        changeLogId: P,
        button: () => {
            let e = Date.now();
            return (0, r.jsx)(a.zxk, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    u.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: P,
                        cta_type: Z,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: P,
                    }),
                        y();
                },
                text: A,
                icon: i.SrA,
            });
        },
    };
}
