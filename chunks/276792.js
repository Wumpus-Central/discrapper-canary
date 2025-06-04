n.d(t, { N: () => E });
var r = n(255367);
n(73800);
var i = n(704215),
    l = n(740111),
    a = n(481060),
    o = n(963249),
    s = n(703656),
    c = n(626135),
    u = n(63063),
    d = n(382791),
    p = n(474936),
    h = n(981631),
    f = n(388032),
    g = n(892012),
    m = n(74316);
function b(e) {
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
function _(e, t) {
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
    let I,
        { content: y, renderModalProps: v, analyticsLocations: C, analyticsLocation: S, isLightTheme: N } = e,
        T = 'AnnouncementModalVariant1_'.concat(i.z[Number(y.dismissKey)]),
        { onClose: P } = v,
        j = null != (O = null == (t = y.button) ? void 0 : t.copy) ? O : f.intl.string(f.t.YScQSE),
        A = (null == (n = y.button) ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button';
    switch (null == (E = y.button) ? void 0 : E.buttonAction) {
        case l.Wc.OPEN_MARKETING_PAGE:
            I = () => {
                (0, s.uL)(h.Z5c.APPLICATION_STORE), P();
            };
            break;
        case l.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            I = () =>
                (0, o.Z)({
                    subscriptionTier: p.Si.TIER_1,
                    analyticsLocations: C,
                    analyticsObject: _(b({}, S), {
                        object: h.qAy.BUTTON_CTA,
                        objectType: h.Qqv.TIER_1
                    }),
                    onClose: (e) => {
                        e && P();
                    }
                });
            break;
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            I = () =>
                (0, o.Z)({
                    subscriptionTier: p.Si.TIER_2,
                    analyticsLocations: C,
                    analyticsObject: _(b({}, S), {
                        object: h.qAy.BUTTON_CTA,
                        objectType: h.Qqv.TIER_2
                    }),
                    onClose: (e) => {
                        e && P();
                    }
                });
    }
    let Z =
            '' !== y.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              '\xA0',
                              (0, r.jsx)(a.eee, {
                                  className: g.termsApplyAnchor,
                                  href: u.Z.getArticleURL(y.helpArticleId),
                                  children: f.intl.string(f.t.hvVgAQ)
                              })
                          ]
                      })
                : void 0,
        x = {
            type: 'video',
            src: N ? y.heroArtVideoLinkLightTheme : y.videoLink
        };
    null != y.heroArtVideoSubtitles &&
        (x.subtitles = y.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== y.heroArtImageLinkDarkTheme || '' !== y.heroArtImageLinkLightTheme) &&
            (x = {
                type: 'image',
                src: N ? y.heroArtImageLinkLightTheme : y.heroArtImageLinkDarkTheme
            });
    let L =
        '' !== y.modalTopPill
            ? () =>
                  (0, r.jsx)(d.mn, {
                      text: y.modalTopPill,
                      className: g.modalTopPill
                  })
            : void 0;
    return {
        renderModalProps: v,
        header: y.header,
        modalTopExtra: L,
        subHeader: y.subheader,
        subHeaderExtra: Z,
        body: y.body,
        heroArt: x,
        featureCards: y.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: T,
        button: () => {
            let e = Date.now();
            return (0, r.jsxs)(a.gtL, {
                className: g.button,
                innerClassName: g.innerButton,
                wrapperClassName: g.tier2Gradient,
                size: a.zxk.Sizes.SMALL,
                onClick: () => {
                    c.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: T,
                        cta_type: A,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: T
                    }),
                        I();
                },
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: g.nitroIconSubHeader,
                        src: m
                    }),
                    j
                ]
            });
        },
        modalDismissibleContent: '' !== y.dismissKey ? Number(y.dismissKey) : void 0
    };
}
