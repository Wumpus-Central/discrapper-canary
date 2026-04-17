n.d(t, { t: () => _ });
var i = n(627968);
n(64700);
var l = n(934551),
    a = n(232582),
    r = n(732955),
    s = n(397927),
    o = n(954571),
    d = n(637706),
    c = n(498470),
    u = n(652215),
    A = n(985018),
    h = n(870433);
function _(e) {
    let {
            componentId: t,
            promotionId: n,
            content: _,
            renderModalProps: m,
            analyticsLocations: g,
            analyticsLocation: p,
            isLightTheme: E,
        } = e,
        I = `AnnouncementModalVariant1_${t}`,
        { onClose: f } = m,
        C = _.button?.copy ?? A.intl.string(A.t.YScQSF),
        T = _.button?.buttonAction === a.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
        N = (0, c.h)({
            buttonAction: _.button?.buttonAction,
            deeplinkSection: _.button?.deeplinkSection,
            analyticsLocations: g,
            analyticsLocation: p,
            onClose: f,
        }),
        S = (0, d.C)(_.helpArticle, _.helpArticleId),
        x =
            null != S
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: ["\xa0", (0, i.jsx)(s.MzZ, { className: h.$T, href: S.url, children: S.linkText })],
                      })
                : void 0,
        v = (0, d.C)(_.disclaimer?.disclaimerHelpArticle, ""),
        b =
            null != v
                ? () =>
                      (0, i.jsxs)(i.Fragment, {
                          children: ["\xa0", (0, i.jsx)(s.MzZ, { className: h.$T, href: v.url, children: v.linkText })],
                      })
                : void 0,
        y = { type: "video", src: E ? _.heroArtVideoLinkLightTheme : _.videoLink };
    return (
        null != _.heroArtVideoSubtitles &&
            (y.subtitles = _.heroArtVideoSubtitles.map((e) => ({ locale: e.locale, src: e.link, isDefault: !1 }))),
        ("" !== _.heroArtImageLinkDarkTheme || "" !== _.heroArtImageLinkLightTheme) &&
            (y = { type: "image", src: E ? _.heroArtImageLinkLightTheme : _.heroArtImageLinkDarkTheme }),
        {
            componentId: t,
            promotionId: n,
            renderModalProps: m,
            header: _.header,
            modalTopPill: _.modalTopPill,
            subHeader: _.subheader,
            subHeaderExtra: x,
            body: _.body,
            heroArt: y,
            featureCards: _.featureCards.map((e) => ({
                header: e.header,
                subHeader: e.body,
                imageSrc: E ? e.imageLinkLightTheme : e.imageLink,
                tagText: "" !== e.pill ? e.pill : void 0,
            })),
            changeLogId: I,
            button: () => {
                let e = Date.now();
                return (0, i.jsx)(r.$nd, {
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
                    icon: l.NitroWheelIcon,
                });
            },
            disclaimer: _.disclaimer?.disclaimerText !== "" ? _.disclaimer?.disclaimerText : void 0,
            disclaimerExtra: b,
        }
    );
}
