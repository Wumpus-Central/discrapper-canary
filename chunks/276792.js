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
    h = n(474936),
    m = n(981631),
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
    let v,
        { content: y, renderModalProps: C, analyticsLocations: S, analyticsLocation: T, isLightTheme: N } = e,
        j = "AnnouncementModalVariant1_".concat(l.z[Number(y.dismissKey)]),
        { onClose: P } = C,
        x = null != (I = null == (t = y.button) ? void 0 : t.copy) ? I : g.intl.string(g.t.YScQSF),
        A =
            (null == (n = y.button) ? void 0 : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button";
    switch (null == (O = y.button) ? void 0 : O.buttonAction) {
        case a.Wc.OPEN_MARKETING_PAGE:
            v = () => {
                (0, u.uL)(m.Z5c.APPLICATION_STORE), P();
            };
            break;
        case a.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            v = () =>
                (0, c.Z)({
                    subscriptionTier: h.Si.TIER_1,
                    analyticsLocations: S,
                    analyticsObject: E(b({}, T), {
                        object: m.qAy.BUTTON_CTA,
                        objectType: m.AnalyticsObjectTypes.TIER_1,
                    }),
                    onClose: (e) => {
                        e && P();
                    },
                });
            break;
        case a.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        case a.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            v = () =>
                (0, c.Z)({
                    subscriptionTier: h.Si.TIER_2,
                    analyticsLocations: S,
                    analyticsObject: E(b({}, T), {
                        object: m.qAy.BUTTON_CTA,
                        objectType: m.AnalyticsObjectTypes.TIER_2,
                    }),
                    onClose: (e) => {
                        e && P();
                    },
                });
    }
    let Z =
            "" !== y.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              "\xA0",
                              (0, r.jsx)(o.Anchor, {
                                  className: _.termsApplyAnchor,
                                  href: p.Z.getArticleURL(y.helpArticleId),
                                  children: g.intl.string(g.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        w = {
            type: "video",
            src: N ? y.heroArtVideoLinkLightTheme : y.videoLink,
        };
    null != y.heroArtVideoSubtitles &&
        (w.subtitles = y.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1,
        }))),
        ("" !== y.heroArtImageLinkDarkTheme || "" !== y.heroArtImageLinkLightTheme) &&
            (w = {
                type: "image",
                src: N ? y.heroArtImageLinkLightTheme : y.heroArtImageLinkDarkTheme,
            });
    let L =
        "" !== y.modalTopPill
            ? () =>
                  (0, r.jsx)(f.mn, {
                      text: y.modalTopPill,
                      className: _.modalTopPill,
                  })
            : void 0;
    return {
        renderModalProps: C,
        header: y.header,
        modalTopExtra: L,
        subHeader: y.subheader,
        subHeaderExtra: Z,
        body: y.body,
        heroArt: w,
        featureCards: y.featureCards.map((e) => ({
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
                    d.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: j,
                        cta_type: A,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: j,
                    }),
                        v();
                },
                text: x,
                icon: i.SrA,
            });
        },
        modalDismissibleContent: "" !== y.dismissKey ? Number(y.dismissKey) : void 0,
    };
}
