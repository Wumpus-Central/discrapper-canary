n.d(t, {
    N: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(704215),
    l = n(740111),
    a = n(481060),
    s = n(963249),
    o = n(703656),
    c = n(626135),
    d = n(63063),
    u = n(823188),
    h = n(474936),
    m = n(981631),
    p = n(388032),
    g = n(204586),
    f = n(74316);
function _(e) {
    var t, n;
    let { content: _, renderModalProps: E, analyticsLocations: I, analyticsLocation: C, isLightTheme: N } = e,
        v = 'AnnouncementModalVariant1_'.concat(r.z[Number(_.dismissKey)]),
        { onClose: S } = E,
        T = null != _.button && '' !== _.button.copy ? _.button.copy : p.intl.string(p.t.YScQSE),
        b = (null === (t = _.button) || void 0 === t ? void 0 : t.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button',
        A =
            (null === (n = _.button) || void 0 === n ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE
                ? () => {
                      (0, o.uL)(m.Z5c.APPLICATION_STORE), S();
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
                              e && S();
                          }
                      }),
        Z =
            '' !== _.helpArticleId
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              '\xA0',
                              (0, i.jsx)(a.Anchor, {
                                  className: g.termsApplyAnchor,
                                  href: d.Z.getArticleURL(_.helpArticleId),
                                  children: p.intl.string(p.t['sBp+u7'])
                              })
                          ]
                      })
                : void 0,
        x = {
            type: 'video',
            src: N ? _.heroArtVideoLinkLightTheme : _.videoLink
        };
    null != _.heroArtVideoSubtitles &&
        (x.subtitles = _.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== _.heroArtImageLinkDarkTheme || '' !== _.heroArtImageLinkLightTheme) &&
            (x = {
                type: 'image',
                src: N ? _.heroArtImageLinkLightTheme : _.heroArtImageLinkDarkTheme
            });
    let L = N ? u.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL : u.VE.PREMIUM_TIER_2_WHITE_FILL,
        P =
            '' !== _.modalTopPill
                ? () =>
                      (0, i.jsx)(u.Cy, {
                          text: _.modalTopPill,
                          className: g.modalTopPill,
                          colorOptions: L
                      })
                : void 0;
    return {
        renderModalProps: E,
        header: _.header,
        modalTopExtra: P,
        subHeader: _.subheader,
        subHeaderExtra: Z,
        body: _.body,
        heroArt: x,
        featureCards: _.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: v,
        button: () => {
            let e = Date.now();
            return (0, i.jsxs)(a.ShinyButton, {
                className: g.buttonWide,
                innerClassName: g.innerButton,
                wrapperClassName: g.tier2Gradient,
                size: a.Button.Sizes.SMALL,
                onClick: () => {
                    c.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: v,
                        cta_type: b,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: v
                    }),
                        A();
                },
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: g.nitroIconSubHeader,
                        src: f
                    }),
                    T
                ]
            });
        },
        modalDismissibleContent: '' !== _.dismissKey ? Number(_.dismissKey) : void 0
    };
}
