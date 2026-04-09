n.d(t, { t: () => h });
var i = n(627968);
n(64700);
var a = n(934551),
    r = n(232582),
    l = n(732955),
    s = n(397927),
    o = n(954571),
    d = n(975571),
    c = n(498470),
    u = n(652215),
    A = n(985018),
    _ = n(654513);
function h(e) {
    let {
            componentId: t,
            promotionId: n,
            content: h,
            renderModalProps: m,
            analyticsLocations: g,
            analyticsLocation: p,
            isLightTheme: E,
        } = e,
        I = `AnnouncementModalVariant1_${t}`,
        { onClose: f } = m,
        C = h.button?.copy ?? A.intl.string(A.t.YScQSF),
        T = h.button?.buttonAction === r.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
        N = (0, c.h)({ buttonAction: h.button?.buttonAction, analyticsLocations: g, analyticsLocation: p, onClose: f }),
        S =
            "" !== h.helpArticleId
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              "\xa0",
                              (0, i.jsx)(s.MzZ, {
                                  className: _.$T,
                                  href: d.A.getArticleURL(h.helpArticleId),
                                  children: A.intl.string(A.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        x = h.disclaimer?.disclaimerHelpArticle,
        v =
            x?.id != null && "" !== x.id
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              "\xa0",
                              (0, i.jsx)(s.MzZ, {
                                  className: _.$T,
                                  href: d.A.getArticleURL(x.id),
                                  children: "" !== x.linkText ? x.linkText : A.intl.string(A.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        b = { type: "video", src: E ? h.heroArtVideoLinkLightTheme : h.videoLink };
    return (
        null != h.heroArtVideoSubtitles &&
            (b.subtitles = h.heroArtVideoSubtitles.map((e) => ({ locale: e.locale, src: e.link, isDefault: !1 }))),
        ("" !== h.heroArtImageLinkDarkTheme || "" !== h.heroArtImageLinkLightTheme) &&
            (b = { type: "image", src: E ? h.heroArtImageLinkLightTheme : h.heroArtImageLinkDarkTheme }),
        {
            componentId: t,
            promotionId: n,
            renderModalProps: m,
            header: h.header,
            modalTopPill: h.modalTopPill,
            subHeader: h.subheader,
            subHeaderExtra: S,
            body: h.body,
            heroArt: b,
            featureCards: h.featureCards.map((e) => ({
                header: e.header,
                subHeader: e.body,
                imageSrc: E ? e.imageLinkLightTheme : e.imageLink,
                tagText: "" !== e.pill ? e.pill : void 0,
            })),
            changeLogId: I,
            button: () => {
                let e = Date.now();
                return (0, i.jsx)(l.$nd, {
                    variant: "expressive",
                    size: "md",
                    onClick: () => {
                        o.default.track(u.HAw.CHANGE_LOG_CTA_CLICKED, {
                            change_log_id: I,
                            cta_type: T,
                            seconds_open: Math.round((Date.now() - e) / 1e3),
                            target: I,
                        }),
                            N();
                    },
                    text: C,
                    icon: a.NitroWheelIcon,
                });
            },
            disclaimer: h.disclaimer?.disclaimerText !== "" ? h.disclaimer?.disclaimerText : void 0,
            disclaimerExtra: v,
        }
    );
}
