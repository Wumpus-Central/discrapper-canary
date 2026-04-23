n.d(t, { t: () => _ });
var i = n(627968);
n(64700);
var r = n(403581),
    a = n(232582),
    l = n(821609),
    s = n(349288),
    o = n(954571),
    d = n(637706),
    u = n(498470),
    c = n(652215),
    A = n(985018),
    h = n(870433);
function _(e) {
    let {
            componentId: t,
            promotionId: n,
            content: _,
            renderModalProps: E,
            analyticsLocations: p,
            analyticsLocation: m,
            isLightTheme: g,
        } = e,
        I = `AnnouncementModalVariant1_${t}`,
        { onClose: C } = E,
        f = _.button?.copy ?? A.intl.string(A.t.YScQSF),
        T = _.button?.buttonAction === a.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
        S = (0, u.h)({
            buttonAction: _.button?.buttonAction,
            deeplinkSection: _.button?.deeplinkSection,
            analyticsLocations: p,
            analyticsLocation: m,
            onClose: C,
        }),
        N = (0, d.C)(_.helpArticle, _.helpArticleId),
        O =
            null != N
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              "\xa0",
                              (0, i.jsx)(s.Anchor, { className: h.$T, href: N.url, children: N.linkText }),
                          ],
                      })
                : void 0,
        L = (0, d.C)(_.disclaimer?.disclaimerHelpArticle, ""),
        y =
            null != L
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              "\xa0",
                              (0, i.jsx)(s.Anchor, { className: h.$T, href: L.url, children: L.linkText }),
                          ],
                      })
                : void 0,
        v = { type: "video", src: g ? _.heroArtVideoLinkLightTheme : _.videoLink };
    return (
        null != _.heroArtVideoSubtitles &&
            (v.subtitles = _.heroArtVideoSubtitles.map((e) => ({ locale: e.locale, src: e.link, isDefault: !1 }))),
        ("" !== _.heroArtImageLinkDarkTheme || "" !== _.heroArtImageLinkLightTheme) &&
            (v = { type: "image", src: g ? _.heroArtImageLinkLightTheme : _.heroArtImageLinkDarkTheme }),
        {
            componentId: t,
            promotionId: n,
            renderModalProps: E,
            header: _.header,
            modalTopPill: _.modalTopPill,
            subHeader: _.subheader,
            subHeaderExtra: O,
            body: _.body,
            heroArt: v,
            featureCards: _.featureCards.map((e) => ({
                header: e.header,
                subHeader: e.body,
                imageSrc: g ? e.imageLinkLightTheme : e.imageLink,
                tagText: "" !== e.pill ? e.pill : void 0,
            })),
            changeLogId: I,
            button: () => {
                let e = Date.now();
                return (0, i.jsx)(l.$, {
                    variant: "expressive",
                    size: "md",
                    onClick: () => {
                        o.default.track(c.HAw.CHANGE_LOG_CTA_CLICKED, {
                            change_log_id: I,
                            cta_type: T,
                            seconds_open: Math.round((Date.now() - e) / 1e3),
                            target: I,
                        }),
                            S();
                    },
                    text: f,
                    icon: r.t,
                });
            },
            disclaimer: _.disclaimer?.disclaimerText !== "" ? _.disclaimer?.disclaimerText : void 0,
            disclaimerExtra: y,
        }
    );
}
