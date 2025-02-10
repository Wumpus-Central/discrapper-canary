n.d(t, { N: () => f });
var i = n(200651);
n(192379);
var l = n(704215),
    r = n(740111),
    a = n(481060),
    s = n(963249),
    o = n(703656),
    c = n(626135),
    d = n(63063),
    u = n(823188),
    h = n(474936),
    m = n(981631),
    p = n(388032),
    g = n(23690),
    _ = n(74316);
function f(e) {
    var t, n;
    let { content: f, renderModalProps: E, analyticsLocations: I, analyticsLocation: C, isLightTheme: N } = e,
        v = 'AnnouncementModalVariant1_'.concat(l.z[Number(f.dismissKey)]),
        { onClose: T } = E,
        S = null != f.button && '' !== f.button.copy ? f.button.copy : p.intl.string(p.t.YScQSE),
        A = (null === (t = f.button) || void 0 === t ? void 0 : t.buttonAction) === r.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button',
        Z =
            (null === (n = f.button) || void 0 === n ? void 0 : n.buttonAction) === r.Wc.OPEN_MARKETING_PAGE
                ? () => {
                      (0, o.uL)(m.Z5c.APPLICATION_STORE), T();
                  }
                : () =>
                      (0, s.Z)({
                          subscriptionTier: h.Si.TIER_2,
                          analyticsLocations: I,
                          analyticsObject: {
                              ...C,
                              object: m.qAy.BUTTON_CTA,
                              objectType: m.Qqv.TIER_2
                          },
                          onClose: (e) => {
                              e && T();
                          }
                      }),
        b =
            '' !== f.helpArticleId
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              '\xA0',
                              (0, i.jsx)(a.eee, {
                                  className: g.termsApplyAnchor,
                                  href: d.Z.getArticleURL(f.helpArticleId),
                                  children: p.intl.string(p.t['sBp+u7'])
                              })
                          ]
                      })
                : void 0,
        x = {
            type: 'video',
            src: N ? f.heroArtVideoLinkLightTheme : f.videoLink
        };
    null != f.heroArtVideoSubtitles &&
        (x.subtitles = f.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== f.heroArtImageLinkDarkTheme || '' !== f.heroArtImageLinkLightTheme) &&
            (x = {
                type: 'image',
                src: N ? f.heroArtImageLinkLightTheme : f.heroArtImageLinkDarkTheme
            });
    let L = N ? u.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : u.VE.PREMIUM_TIER_2_WHITE_FILL,
        y =
            '' !== f.modalTopPill
                ? () =>
                      (0, i.jsx)(u.Cy, {
                          text: f.modalTopPill,
                          className: g.modalTopPill,
                          colorOptions: L
                      })
                : void 0;
    return {
        renderModalProps: E,
        header: f.header,
        modalTopExtra: y,
        subHeader: f.subheader,
        subHeaderExtra: b,
        body: f.body,
        heroArt: x,
        featureCards: f.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: v,
        button: () => {
            let e = Date.now();
            return (0, i.jsxs)(a.gtL, {
                className: g.buttonWide,
                innerClassName: g.innerButton,
                wrapperClassName: g.tier2Gradient,
                size: a.zxk.Sizes.SMALL,
                onClick: () => {
                    c.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: v,
                        cta_type: A,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: v
                    }),
                        Z();
                },
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: g.nitroIconSubHeader,
                        src: _
                    }),
                    S
                ]
            });
        },
        modalDismissibleContent: '' !== f.dismissKey ? Number(f.dismissKey) : void 0
    };
}
