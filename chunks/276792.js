n.d(t, { N: () => E });
var r = n(255367);
n(73800);
var i = n(704215),
    l = n(740111),
    a = n(755721),
    o = n(481060),
    s = n(963249),
    c = n(703656),
    u = n(626135),
    d = n(63063),
    p = n(382791),
    h = n(474936),
    f = n(981631),
    g = n(388032),
    m = n(892012),
    b = n(74316);
function _(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
        { content: I, renderModalProps: C, analyticsLocations: S, analyticsLocation: N, isLightTheme: T } = e,
        P = 'AnnouncementModalVariant1_'.concat(i.z[Number(I.dismissKey)]),
        { onClose: j } = C,
        A = null != (y = null == (t = I.button) ? void 0 : t.copy) ? y : g.intl.string(g.t.YScQSE),
        Z = (null == (n = I.button) ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button';
    switch (null == (E = I.button) ? void 0 : E.buttonAction) {
        case l.Wc.OPEN_MARKETING_PAGE:
            v = () => {
                ((0, c.uL)(f.Z5c.APPLICATION_STORE), j());
            };
            break;
        case l.Wc.OPEN_TIER_1_PAYMENT_MODAL:
            v = () =>
                (0, s.Z)({
                    subscriptionTier: h.Si.TIER_1,
                    analyticsLocations: S,
                    analyticsObject: O(_({}, N), {
                        object: f.qAy.BUTTON_CTA,
                        objectType: f.Qqv.TIER_1
                    }),
                    onClose: (e) => {
                        e && j();
                    }
                });
            break;
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL:
        case l.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
        default:
            v = () =>
                (0, s.Z)({
                    subscriptionTier: h.Si.TIER_2,
                    analyticsLocations: S,
                    analyticsObject: O(_({}, N), {
                        object: f.qAy.BUTTON_CTA,
                        objectType: f.Qqv.TIER_2
                    }),
                    onClose: (e) => {
                        e && j();
                    }
                });
    }
    let x =
            '' !== I.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              '\xA0',
                              (0, r.jsx)(o.eee, {
                                  className: m.termsApplyAnchor,
                                  href: d.Z.getArticleURL(I.helpArticleId),
                                  children: g.intl.string(g.t['sBp+u7'])
                              })
                          ]
                      })
                : void 0,
        w = {
            type: 'video',
            src: T ? I.heroArtVideoLinkLightTheme : I.videoLink
        };
    (null != I.heroArtVideoSubtitles &&
        (w.subtitles = I.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== I.heroArtImageLinkDarkTheme || '' !== I.heroArtImageLinkLightTheme) &&
            (w = {
                type: 'image',
                src: T ? I.heroArtImageLinkLightTheme : I.heroArtImageLinkDarkTheme
            }));
    let L =
        '' !== I.modalTopPill
            ? () =>
                  (0, r.jsx)(p.mn, {
                      text: I.modalTopPill,
                      className: m.modalTopPill
                  })
            : void 0;
    return {
        renderModalProps: C,
        header: I.header,
        modalTopExtra: L,
        subHeader: I.subheader,
        subHeaderExtra: x,
        body: I.body,
        heroArt: w,
        featureCards: I.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: T ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: P,
        button: () => {
            let e = Date.now();
            return (0, r.jsxs)(o.gtL, {
                className: m.button,
                innerClassName: m.innerButton,
                wrapperClassName: m.tier2Gradient,
                size: a.zx.Sizes.SMALL,
                onClick: () => {
                    (u.default.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: P,
                        cta_type: Z,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: P
                    }),
                        v());
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
        modalDismissibleContent: '' !== I.dismissKey ? Number(I.dismissKey) : void 0
    };
}
