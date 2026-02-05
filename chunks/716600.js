n.d(t, { t: () => m });
var i = n(627968);
n(64700);
var r = n(934551),
    a = n(232582),
    l = n(732955),
    s = n(397927),
    o = n(954571),
    d = n(975571),
    c = n(795269),
    u = n(498470),
    A = n(652215),
    h = n(985018),
    _ = n(787076);
function m(e) {
    let {
            componentId: t,
            promotionId: n,
            content: m,
            renderModalProps: p,
            analyticsLocations: g,
            analyticsLocation: E,
            isLightTheme: f,
        } = e,
        I = `AnnouncementModalVariant1_${t}`,
        { onClose: C } = p,
        N = m.button?.copy ?? h.intl.string(h.t.YScQSF),
        T = m.button?.buttonAction === a.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
        S = (0, u.h)({ buttonAction: m.button?.buttonAction, analyticsLocations: g, analyticsLocation: E, onClose: C }),
        x =
            "" !== m.helpArticleId
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              "\xa0",
                              (0, i.jsx)(s.MzZ, {
                                  className: _.$T,
                                  href: d.A.getArticleURL(m.helpArticleId),
                                  children: h.intl.string(h.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        v = { type: "video", src: f ? m.heroArtVideoLinkLightTheme : m.videoLink };
    null != m.heroArtVideoSubtitles &&
        (v.subtitles = m.heroArtVideoSubtitles.map((e) => ({ locale: e.locale, src: e.link, isDefault: !1 }))),
        ("" !== m.heroArtImageLinkDarkTheme || "" !== m.heroArtImageLinkLightTheme) &&
            (v = { type: "image", src: f ? m.heroArtImageLinkLightTheme : m.heroArtImageLinkDarkTheme });
    let b = "" !== m.modalTopPill ? () => (0, i.jsx)(c.R, { text: m.modalTopPill, className: _.ON }) : void 0;
    return {
        componentId: t,
        promotionId: n,
        renderModalProps: p,
        header: m.header,
        modalTopExtra: b,
        subHeader: m.subheader,
        subHeaderExtra: x,
        body: m.body,
        heroArt: v,
        featureCards: m.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: f ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0,
        })),
        changeLogId: I,
        button: () => {
            let e = Date.now();
            return (0, i.jsx)(l.$nd, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    o.default.track(A.HAw.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: I,
                        cta_type: T,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        target: I,
                    }),
                        S();
                },
                text: N,
                icon: r.NitroWheelIcon,
            });
        },
    };
}
