n.d(t, { N: () => g });
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(740111),
    a = n(159691),
    s = n(481060),
    o = n(626135),
    c = n(63063),
    u = n(382791),
    d = n(671728),
    p = n(981631),
    f = n(388032),
    h = n(605548);
function g(e) {
    var t, n, g, m;
    let {
            componentId: _,
            promotionId: b,
            content: E,
            renderModalProps: O,
            analyticsLocations: v,
            analyticsLocation: y,
            isLightTheme: I,
        } = e,
        C = "AnnouncementModalVariant1_".concat(_),
        { onClose: S } = O,
        T = null != (m = null == (t = E.button) ? void 0 : t.copy) ? m : f.intl.string(f.t.YScQSF),
        N =
            (null == (n = E.button) ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button",
        j = (0, d.K)({
            buttonAction: null == (g = E.button) ? void 0 : g.buttonAction,
            analyticsLocations: v,
            analyticsLocation: y,
            onClose: S,
        }),
        P =
            "" !== E.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              "\xA0",
                              (0, r.jsx)(s.Anchor, {
                                  className: h.termsApplyAnchor,
                                  href: c.Z.getArticleURL(E.helpArticleId),
                                  children: f.intl.string(f.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        x = {
            type: "video",
            src: I ? E.heroArtVideoLinkLightTheme : E.videoLink,
        };
    null != E.heroArtVideoSubtitles &&
        (x.subtitles = E.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1,
        }))),
        ("" !== E.heroArtImageLinkDarkTheme || "" !== E.heroArtImageLinkLightTheme) &&
            (x = {
                type: "image",
                src: I ? E.heroArtImageLinkLightTheme : E.heroArtImageLinkDarkTheme,
            });
    let A =
        "" !== E.modalTopPill
            ? () =>
                  (0, r.jsx)(u.mn, {
                      text: E.modalTopPill,
                      className: h.modalTopPill,
                  })
            : void 0;
    return {
        componentId: _,
        promotionId: b,
        renderModalProps: O,
        header: E.header,
        modalTopExtra: A,
        subHeader: E.subheader,
        subHeaderExtra: P,
        body: E.body,
        heroArt: x,
        featureCards: E.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: I ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0,
        })),
        changeLogId: C,
        button: () => {
            let e = Date.now();
            return (0, r.jsx)(a.zxk, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    o.default.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: C,
                        cta_type: N,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: C,
                    }),
                        j();
                },
                text: T,
                icon: i.SrA,
            });
        },
    };
}
