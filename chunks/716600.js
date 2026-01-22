n.d(t, {
    t: () => A,
});
var r = n(627968);
n(64700);
var i = n(934551),
    l = n(232582),
    a = n(732955),
    s = n(397927),
    o = n(954571),
    c = n(975571),
    u = n(795269),
    d = n(498470),
    p = n(652215),
    f = n(985018),
    h = n(787076);

function A(e) {
    var t, n, A, g;
    let {
            componentId: m,
            promotionId: b,
            content: _,
            renderModalProps: E,
            analyticsLocations: O,
            analyticsLocation: y,
            isLightTheme: I,
        } = e,
        v = "AnnouncementModalVariant1_".concat(m),
        { onClose: S } = E,
        C = null != (t = null == (n = _.button) ? void 0 : n.copy) ? t : f.intl.string(f.t.YScQSF),
        N =
            (null == (A = _.button) ? void 0 : A.buttonAction) === l.dz.OPEN_MARKETING_PAGE
                ? "jump_to_mkt_button"
                : "get_nitro_button",
        T = (0, d.h)({
            buttonAction: null == (g = _.button) ? void 0 : g.buttonAction,
            analyticsLocations: O,
            analyticsLocation: y,
            onClose: S,
        }),
        j =
            "" !== _.helpArticleId
                ? () =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              "\xa0",
                              (0, r.jsx)(s.MzZ, {
                                  className: h.$T,
                                  href: c.A.getArticleURL(_.helpArticleId),
                                  children: f.intl.string(f.t["sBp+u0"]),
                              }),
                          ],
                      })
                : void 0,
        x = {
            type: "video",
            src: I ? _.heroArtVideoLinkLightTheme : _.videoLink,
        };
    null != _.heroArtVideoSubtitles &&
        (x.subtitles = _.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1,
        }))),
        ("" !== _.heroArtImageLinkDarkTheme || "" !== _.heroArtImageLinkLightTheme) &&
            (x = {
                type: "image",
                src: I ? _.heroArtImageLinkLightTheme : _.heroArtImageLinkDarkTheme,
            });
    let P =
        "" !== _.modalTopPill
            ? () =>
                  (0, r.jsx)(u.R, {
                      text: _.modalTopPill,
                      className: h.ON,
                  })
            : void 0;
    return {
        componentId: m,
        promotionId: b,
        renderModalProps: E,
        header: _.header,
        modalTopExtra: P,
        subHeader: _.subheader,
        subHeaderExtra: j,
        body: _.body,
        heroArt: x,
        featureCards: _.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: I ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0,
        })),
        changeLogId: v,
        button: () => {
            let e = Date.now();
            return (0, r.jsx)(a.$nd, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    o.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: v,
                        cta_type: N,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        target: v,
                    }),
                        T();
                },
                text: C,
                icon: i.NitroWheelIcon,
            });
        },
    };
}
