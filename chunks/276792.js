n.d(t, { N: () => b });
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
    p = n(474936),
    h = n(981631),
    g = n(388032),
    f = n(14249),
    m = n(74316);
function b(e) {
    var t, n;
    let { content: b, renderModalProps: _, analyticsLocations: E, analyticsLocation: O, isLightTheme: N } = e,
        v = 'AnnouncementModalVariant1_'.concat(i.z[Number(b.dismissKey)]),
        { onClose: y } = _,
        I = null != b.button && '' !== b.button.copy ? b.button.copy : g.NW.string(g.t.YScQSE),
        C = (null === (t = b.button) || void 0 === t ? void 0 : t.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button',
        S =
            (null === (n = b.button) || void 0 === n ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE
                ? () => {
                      (0, s.uL)(h.Z5c.APPLICATION_STORE), y();
                  }
                : () => {
                      var e, t;
                      return (0, a.Z)({
                          subscriptionTier: p.Si.TIER_2,
                          analyticsLocations: E,
                          analyticsObject:
                              ((e = (function (e) {
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
                              })({}, O)),
                              (t = t =
                                  {
                                      object: h.qAy.BUTTON_CTA,
                                      objectType: h.Qqv.TIER_2
                                  }),
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
                              e),
                          onClose: (e) => {
                              e && y();
                          }
                      });
                  },
        T =
            '' !== b.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              '\xA0',
                              (0, r.jsx)(o.eee, {
                                  className: f.termsApplyAnchor,
                                  href: u.Z.getArticleURL(b.helpArticleId),
                                  children: g.NW.string(g.t['sBp+u7'])
                              })
                          ]
                      })
                : void 0,
        P = {
            type: 'video',
            src: N ? b.heroArtVideoLinkLightTheme : b.videoLink
        };
    null != b.heroArtVideoSubtitles &&
        (P.subtitles = b.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== b.heroArtImageLinkDarkTheme || '' !== b.heroArtImageLinkLightTheme) &&
            (P = {
                type: 'image',
                src: N ? b.heroArtImageLinkLightTheme : b.heroArtImageLinkDarkTheme
            });
    let j = N ? d.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : d.VE.PREMIUM_TIER_2_WHITE_FILL,
        A =
            '' !== b.modalTopPill
                ? () =>
                      (0, r.jsx)(d.Cy, {
                          text: b.modalTopPill,
                          className: f.modalTopPill,
                          colorOptions: j
                      })
                : void 0;
    return {
        renderModalProps: _,
        header: b.header,
        modalTopExtra: A,
        subHeader: b.subheader,
        subHeaderExtra: T,
        body: b.body,
        heroArt: P,
        featureCards: b.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: v,
        button: () => {
            let e = Date.now();
            return (0, r.jsxs)(o.gtL, {
                className: f.buttonWide,
                innerClassName: f.innerButton,
                wrapperClassName: f.tier2Gradient,
                size: o.zxk.Sizes.SMALL,
                onClick: () => {
                    c.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: v,
                        cta_type: C,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: v
                    }),
                        S();
                },
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: f.nitroIconSubHeader,
                        src: m
                    }),
                    I
                ]
            });
        },
        modalDismissibleContent: '' !== b.dismissKey ? Number(b.dismissKey) : void 0
    };
}
