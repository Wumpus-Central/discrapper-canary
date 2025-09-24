n.d(t, { N: () => E });
var r = n(951288);
n(647438);
var i = n(657707),
    l = n(704215),
    a = n(740111),
    o = n(159691),
    s = n(481060),
    c = n(963249),
    u = n(703656),
    d = n(626135),
    p = n(63063),
    f = n(382791),
    h = n(474936),
    g = n(981631),
    m = n(388032),
    b = n(570656);
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
function E(e) {
    var t, n, E, y;
    let v,
        { content: I, renderModalProps: C, analyticsLocations: S, analyticsLocation: T, isLightTheme: N } = e,
        P = "AnnouncementModalVariant1_".concat(l.z[Number(I.dismissKey)]),
        { onClose: j } = C,
        x = null != (y = null == (t = I.button) ? void 0 : t.copy) ? y : m.intl.string(m.t.YScQSE),
        A =
            (null == (n = I.button) ? void 0 : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button";
    switch (null == (E = I.button) ? void 0 : E.buttonAction) {
        case a.Wc.OPEN_MARKETING_PAGE:
            v = () => {
                (0, u.uL)(g.Z5c.APPLICATION_STORE), j();
            };
            break;
        case a.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            v = () =>
                (0, c.Z)({
                    subscriptionTier: h.Si.TIER_1,
                    analyticsLocations: S,
                    analyticsObject: O(_({}, T), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_1,
                    }),
                    onClose: (e) => {
                        e && j();
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
                    analyticsObject: O(_({}, T), {
                        object: g.qAy.BUTTON_CTA,
                        objectType: g.Qqv.TIER_2,
                    }),
                    onClose: (e) => {
                        e && j();
                    },
                });
    }
    let Z =
            "" !== I.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              "\xA0",
                              (0, r.jsx)(s.eee, {
                                  className: b.termsApplyAnchor,
                                  href: p.Z.getArticleURL(I.helpArticleId),
                                  children: m.intl.string(m.t["sBp+u7"]),
                              }),
                          ],
                      })
                : void 0,
        w = {
            type: "video",
            src: N ? I.heroArtVideoLinkLightTheme : I.videoLink,
        };
    null != I.heroArtVideoSubtitles &&
        (w.subtitles = I.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1,
        }))),
        ("" !== I.heroArtImageLinkDarkTheme || "" !== I.heroArtImageLinkLightTheme) &&
            (w = {
                type: "image",
                src: N ? I.heroArtImageLinkLightTheme : I.heroArtImageLinkDarkTheme,
            });
    let L =
        "" !== I.modalTopPill
            ? () =>
                  (0, r.jsx)(f.mn, {
                      text: I.modalTopPill,
                      className: b.modalTopPill,
                  })
            : void 0;
    return {
        renderModalProps: C,
        header: I.header,
        modalTopExtra: L,
        subHeader: I.subheader,
        subHeaderExtra: Z,
        body: I.body,
        heroArt: w,
        featureCards: I.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0,
        })),
        changeLogId: P,
        button: () => {
            let e = Date.now();
            return (0, r.jsx)(o.zxk, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    d.default.track(g.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: P,
                        cta_type: A,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: P,
                    }),
                        v();
                },
                text: x,
                icon: i.SrA,
            });
        },
        modalDismissibleContent: "" !== I.dismissKey ? Number(I.dismissKey) : void 0,
    };
}
