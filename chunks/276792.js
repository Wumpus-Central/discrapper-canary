n.d(t, { N: () => O });
var r = n(951288);
n(647438);
var i = n(657707),
    l = n(704215),
    a = n(740111),
    s = n(159691),
    o = n(481060),
    c = n(963249),
    u = n(703656),
    d = n(626135),
    p = n(63063),
    f = n(382791),
    m = n(474936),
    h = n(981631),
    g = n(388032),
    _ = n(605548);
function b(e) {
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
    var t, n, O, I;
    let y,
        {
            componentId: v,
            content: C,
            renderModalProps: S,
            analyticsLocations: T,
            analyticsLocation: N,
            isLightTheme: j,
        } = e,
        P = "AnnouncementModalVariant1_".concat(l.z[Number(C.dismissKey)]),
        { onClose: x } = S,
        A = null != (I = null == (t = C.button) ? void 0 : t.copy) ? I : g.intl.string(g.t.YScQSF),
        Z =
            (null == (n = C.button) ? void 0 : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button";
    switch (null == (O = C.button) ? void 0 : O.buttonAction) {
        case a.Wc.OPEN_MARKETING_PAGE:
            y = () => {
                (0, u.uL)(h.Z5c.APPLICATION_STORE), x();
            };
            break;
        case a.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            y = () =>
                (0, c.Z)({
                    subscriptionTier: m.Si.TIER_1,
                    analyticsLocations: T,
                    analyticsObject: E(b({}, N), {
                        object: h.qAy.BUTTON_CTA,
                        objectType: h.AnalyticsObjectTypes.TIER_1,
                    }),
                    onClose: (e) => {
                        e && x();
                    },
                });
            break;
        case a.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        case a.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            y = () =>
                (0, c.Z)({
                    subscriptionTier: m.Si.TIER_2,
                    analyticsLocations: T,
                    analyticsObject: E(b({}, N), {
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
                              (0, r.jsx)(o.Anchor, {
                                  className: _.termsApplyAnchor,
                                  href: p.Z.getArticleURL(C.helpArticleId),
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
                  (0, r.jsx)(f.mn, {
                      text: C.modalTopPill,
                      className: _.modalTopPill,
                  })
            : void 0;
    return {
        componentId: v,
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
            return (0, r.jsx)(s.zxk, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    d.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
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
        modalDismissibleContent: "" !== C.dismissKey ? Number(C.dismissKey) : void 0,
    };
}
