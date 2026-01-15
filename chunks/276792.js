n.d(t, { N: () => h });
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(740111),
    a = n(159691),
    o = n(481060),
    s = n(626135),
    c = n(63063),
    u = n(382791),
    d = n(671728),
    p = n(981631),
    f = n(388032),
    g = n(256465);
function h(e) {
    var t, n, h, m;
    let {
            componentId: b,
            promotionId: _,
            content: E,
            renderModalProps: O,
            analyticsLocations: v,
            analyticsLocation: I,
            isLightTheme: y,
        } = e,
        C = "AnnouncementModalVariant1_".concat(b),
        { onClose: S } = O,
        T = null != (m = null == (t = E.button) ? void 0 : t.copy) ? m : f.intl.string(f.t.YScQSF),
        N =
            (null == (n = E.button) ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button",
        j = (0, d.K)({
            buttonAction: null == (h = E.button) ? void 0 : h.buttonAction,
            analyticsLocations: v,
            analyticsLocation: I,
            onClose: S,
        }),
        x =
            "" !== E.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              "\xA0",
                              (0, r.jsx)(o.eee, {
                                  className: g.termsApplyAnchor,
                                  href: c.Z.getArticleURL(E.helpArticleId),
                                  children: f.intl.string(f.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        P = {
            type: "video",
            src: y ? E.heroArtVideoLinkLightTheme : E.videoLink,
        };
    null != E.heroArtVideoSubtitles &&
        (P.subtitles = E.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1,
        }))),
        ("" !== E.heroArtImageLinkDarkTheme || "" !== E.heroArtImageLinkLightTheme) &&
            (P = {
                type: "image",
                src: y ? E.heroArtImageLinkLightTheme : E.heroArtImageLinkDarkTheme,
            });
    let A =
        "" !== E.modalTopPill
            ? () =>
                  (0, r.jsx)(u.mn, {
                      text: E.modalTopPill,
                      className: g.modalTopPill,
                  })
            : void 0;
    return {
        componentId: b,
        promotionId: _,
        renderModalProps: O,
        header: E.header,
        modalTopExtra: A,
        subHeader: E.subheader,
        subHeaderExtra: x,
        body: E.body,
        heroArt: P,
        featureCards: E.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: y ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0,
        })),
        changeLogId: C,
        button: () => {
            let e = Date.now();
            return (0, r.jsx)(a.zxk, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    s.default.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: C,
                        cta_type: N,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: C,
                    }),
                        j();
                },
                text: T,
                icon: i.NitroWheelIcon,
            });
        },
    };
}
