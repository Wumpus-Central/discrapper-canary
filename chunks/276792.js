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
        { content: v, renderModalProps: C, analyticsLocations: S, analyticsLocation: T, isLightTheme: N } = e,
        j = "AnnouncementModalVariant1_".concat(l.z[Number(v.dismissKey)]),
        { onClose: P } = C,
        x = null != (I = null == (t = v.button) ? void 0 : t.copy) ? I : g.intl.string(g.t.YScQSF),
        A =
            (null == (n = v.button) ? void 0 : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button";
    switch (null == (O = v.button) ? void 0 : O.buttonAction) {
        case a.Wc.OPEN_MARKETING_PAGE:
            y = () => {
                (0, u.uL)(h.Z5c.APPLICATION_STORE), P();
            };
            break;
        case a.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            y = () =>
                (0, c.Z)({
                    subscriptionTier: m.Si.TIER_1,
                    analyticsLocations: S,
                    analyticsObject: E(b({}, T), {
                        object: h.qAy.BUTTON_CTA,
                        objectType: h.AnalyticsObjectTypes.TIER_1,
                    }),
                    onClose: (e) => {
                        e && P();
                    },
                });
            break;
        case a.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        case a.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            y = () =>
                (0, c.Z)({
                    subscriptionTier: m.Si.TIER_2,
                    analyticsLocations: S,
                    analyticsObject: E(b({}, T), {
                        object: h.qAy.BUTTON_CTA,
                        objectType: h.AnalyticsObjectTypes.TIER_2,
                    }),
                    onClose: (e) => {
                        e && P();
                    },
                });
    }
    let Z =
            "" !== v.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              "\xA0",
                              (0, r.jsx)(o.Anchor, {
                                  className: _.termsApplyAnchor,
                                  href: p.Z.getArticleURL(v.helpArticleId),
                                  children: g.intl.string(g.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        w = {
            type: "video",
            src: N ? v.heroArtVideoLinkLightTheme : v.videoLink,
        };
    null != v.heroArtVideoSubtitles &&
        (w.subtitles = v.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1,
        }))),
        ("" !== v.heroArtImageLinkDarkTheme || "" !== v.heroArtImageLinkLightTheme) &&
            (w = {
                type: "image",
                src: N ? v.heroArtImageLinkLightTheme : v.heroArtImageLinkDarkTheme,
            });
    let L =
        "" !== v.modalTopPill
            ? () =>
                  (0, r.jsx)(f.mn, {
                      text: v.modalTopPill,
                      className: _.modalTopPill,
                  })
            : void 0;
    return {
        renderModalProps: C,
        header: v.header,
        modalTopExtra: L,
        subHeader: v.subheader,
        subHeaderExtra: Z,
        body: v.body,
        heroArt: w,
        featureCards: v.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0,
        })),
        changeLogId: j,
        button: () => {
            let e = Date.now();
            return (0, r.jsx)(s.zxk, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    d.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: j,
                        cta_type: A,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: j,
                    }),
                        y();
                },
                text: x,
                icon: i.SrA,
            });
        },
        modalDismissibleContent: "" !== v.dismissKey ? Number(v.dismissKey) : void 0,
    };
}
