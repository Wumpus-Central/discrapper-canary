"use strict";
n.d(t, { default: () => Q, H: () => X });
var i = n(627968),
    r = n(64700),
    s = n(65412),
    a = n(554146),
    o = n(651436),
    l = n(366010),
    u = n(212245),
    c = n(736653),
    d = n(793574),
    _ = n(688810),
    f = n(826673),
    h = n(38405),
    p = n(403581),
    E = n(232582),
    m = n(821609),
    g = n(349288),
    A = n(174459),
    I = n(637706),
    T = n(498470),
    S = n(652215),
    N = n(375708),
    y = n(870433);
n(323874), n(14289), n(35956);
var C = n(503698),
    v = n.n(C),
    O = n(562708),
    R = n(877624),
    b = n(17928),
    D = n(815021),
    L = n(777666),
    w = n(534514),
    M = n(834730),
    P = n(935462),
    x = n(315629),
    U = n(775602),
    k = n(139286),
    G = n(175671),
    F = n(259407),
    V = n(915089),
    B = n(607470),
    H = n(281678),
    j = n(34337),
    Y = n(774774),
    W = n(49999),
    K = n(695594);
let z = [],
    $ = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(L.Lp, { className: v()(K.Tc, n), text: t });
    },
    q = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: s, wideStyle: a } = e;
        return (0, i.jsxs)("div", {
            className: v()(K.Vr, { [K.tF]: a }),
            children: [
                null != s ? (0, i.jsx)($, { tagText: s, className: K.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: v()(K._n, { [K.tF]: a }), src: r }),
                (0, i.jsxs)("div", {
                    className: v()(K.Zz, { [K.tF]: a }),
                    children: [
                        (0, i.jsx)(w.D, { variant: "heading-md/bold", className: K.Hf, children: t }),
                        (0, i.jsx)(M.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
function Z(e) {
    let {
            componentId: t,
            promotionId: n,
            className: s,
            renderModalProps: o,
            heroArt: l,
            heroArtClassName: u,
            header: c,
            headerClassName: d,
            modalTopPill: _,
            subHeader: f,
            subHeaderExtra: p,
            featureCards: E,
            changeLogId: m,
            button: g,
            body: I,
            disclaimer: T,
            disclaimerExtra: y,
        } = e,
        { onClose: C, transitionState: L } = o,
        $ = (0, V.GV)(),
        Z = E.length % 2 == 0,
        X = (0, b.bG)([U.A], () => U.A.useReducedMotion),
        [Q, J] = r.useState(Date.now()),
        [ee, et] = r.useState(0),
        [en, ei] = r.useState(0),
        [er, es] = r.useState(!1),
        [ea, eo] = r.useState(!0),
        el = r.useRef(Q),
        eu = r.useRef(ee),
        ec = r.useRef(en),
        ed = r.useRef(er),
        e_ = r.useRef(ea),
        [ef, eh] = r.useState(z),
        ep = r.useRef(!1);
    function eE() {
        let e = Date.now(),
            t = e - el.current,
            n = eu.current,
            i = ec.current;
        return ed.current && (et((n += t)), e_.current || ei((i += t))), J(e), [n, i];
    }
    return (
        (0, k.A)({
            type: O.ImpressionTypes.MODAL,
            name: O.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: R.C.ANNOUNCEMENT_MODAL },
        }),
        r.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== l.type || null == l.subtitles) return;
                    let e = l.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            r = URL.createObjectURL(i);
                        return { ...e, src: r };
                    });
                    eh(await Promise.all(e));
                } catch (e) {
                    h.A.captureException(e), eh(z);
                }
            };
            !0 !== ep.current && e(), (ep.current = !0);
        }, [l, ef]),
        r.useEffect(
            () => () => {
                null != ef &&
                    ef.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ef],
        ),
        r.useEffect(() => {
            (el.current = Q), (eu.current = ee), (ec.current = en), (ed.current = er), (e_.current = ea);
        }, [Q, ee, en, er, ea]),
        r.useEffect(
            () => () => {
                if ("video" === l.type || "embed" === l.type) {
                    let [e, t] = eE();
                    A.default.track(S.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: m,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        A.default.track(S.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: m,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [m, l.type],
        ),
        r.useEffect(() => {
            (0, H.Vh)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
            let e = Date.now();
            return (
                A.default.track(S.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    A.default.track(S.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, H.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: W.i.DISMISS });
                }
            );
        }, [m, n]),
        (0, i.jsx)(P.EO, {
            "data-migration-pending": !0,
            className: v()(K.zr, K.kv, s),
            transitionState: L,
            "aria-labelledby": $,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(x.h, {
                color: "nitro-pink",
                className: K.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: K.cG,
                        children: (0, i.jsx)(D.J, { "data-migration-pending": !0, onClick: async () => await C() }),
                    }),
                    (0, i.jsxs)(P.$m, {
                        "data-migration-pending": !0,
                        className: K.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            "video" === l.type
                                ? (0, i.jsx)(B.A, {
                                      className: v()(K.Ki, u),
                                      autoPlay: !X,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: l.src,
                                      poster: l.poster,
                                      onPlay: (e) => {
                                          A.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m }),
                                              J(Date.now()),
                                              es(!0),
                                              eo(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          eE(), eo(e.currentTarget.muted), es(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          eE(), eo(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          eE(), eo(e.currentTarget.muted), es(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children: ef?.map((e) => {
                                          let t = (0, N.getLanguages)().find((t) => t.code === e.locale);
                                          return null == t
                                              ? null
                                              : (0, i.jsx)(
                                                    "track",
                                                    {
                                                        label: t.englishName,
                                                        kind: "captions",
                                                        srcLang: t.code,
                                                        src: e.src,
                                                        default: e.isDefault,
                                                    },
                                                    e.locale,
                                                );
                                      }),
                                  })
                                : "embed" === l.type
                                  ? (0, i.jsx)(G.rr, {
                                        className: v()(K.Ki, u),
                                        allowFullScreen: !1,
                                        href: l.href,
                                        thumbnail: l.thumbnail,
                                        video: l.embed,
                                        provider: F.mt.YOUTUBE,
                                        maxWidth: l.embed.width,
                                        maxHeight: l.embed.height,
                                        renderVideoComponent: j.$o,
                                        renderImageComponent: j.LL,
                                        renderLinkComponent: j.bU,
                                        onPlay: () => {
                                            A.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m });
                                        },
                                    })
                                  : "image" === l.type
                                    ? (0, i.jsx)("img", { alt: "", className: v()(K.Ki, u), src: l.src })
                                    : null,
                            null != _ && "" !== _
                                ? (0, i.jsx)(Y.e4, {
                                      text: _,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: K.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: K.Z,
                                children: [
                                    (0, i.jsx)(w.D, { variant: "display-md", className: v()(K.TK, d), children: c }),
                                    (0, i.jsxs)(M.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: K.uI,
                                        children: [f, p?.()],
                                    }),
                                ],
                            }),
                            null != I &&
                                "" !== I &&
                                (0, i.jsx)(w.D, { variant: "heading-lg/semibold", className: K.G3, children: I }),
                            E.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: K.IS,
                                    children: E.map((e, t) =>
                                        (0, i.jsx)(q, { ...e, wideStyle: Z }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: K.xQ,
                        children: [
                            g(),
                            null != T &&
                                "" !== T &&
                                (0, i.jsxs)(M.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: K.ed,
                                    children: [T, y?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function X(e) {
    let { promotionId: t, content: n, isPreview: i } = e,
        r = o.m.fromBinary((0, s.A)(n));
    if ("announcementModalVariant1" !== r.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, f.u$)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
}
function Q(e) {
    let { componentId: t, promotionId: n, renderModalProps: r, properties: s } = e,
        { location: a } = (0, u.p)(),
        { analyticsLocations: o } = (0, _.Ay)(d.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        f = (0, c.Ay)(),
        C = (0, l.q)(f);
    if ("announcementModalVariant1" === s.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    content: r,
                    renderModalProps: s,
                    analyticsLocations: a,
                    analyticsLocation: o,
                    isLightTheme: l,
                } = e,
                u = `AnnouncementModalVariant1_${t}`,
                { onClose: c } = s,
                d = r.button?.copy ?? N.intl.string(N.t.YScQSF),
                _ = r.button?.buttonAction === E.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                f = (0, T.h)({
                    buttonAction: r.button?.buttonAction,
                    deeplinkSection: r.button?.deeplinkSection,
                    analyticsLocations: a,
                    analyticsLocation: o,
                    onClose: c,
                }),
                h = (0, I.C)(r.helpArticle, r.helpArticleId),
                C =
                    null != h
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(g.Anchor, { className: y.$T, href: h.url, children: h.linkText }),
                                  ],
                              })
                        : void 0,
                v = (0, I.C)(r.disclaimer?.disclaimerHelpArticle, ""),
                O =
                    null != v
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(g.Anchor, { className: y.$T, href: v.url, children: v.linkText }),
                                  ],
                              })
                        : void 0,
                R = { type: "video", src: l ? r.heroArtVideoLinkLightTheme : r.videoLink };
            return (
                null != r.heroArtVideoSubtitles &&
                    (R.subtitles = r.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== r.heroArtImageLinkDarkTheme || "" !== r.heroArtImageLinkLightTheme) &&
                    (R = { type: "image", src: l ? r.heroArtImageLinkLightTheme : r.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    renderModalProps: s,
                    header: r.header,
                    modalTopPill: r.modalTopPill,
                    subHeader: r.subheader,
                    subHeaderExtra: C,
                    body: r.body,
                    heroArt: R,
                    featureCards: r.featureCards.map((e) => ({
                        header: e.header,
                        subHeader: e.body,
                        imageSrc: l ? e.imageLinkLightTheme : e.imageLink,
                        tagText: "" !== e.pill ? e.pill : void 0,
                    })),
                    changeLogId: u,
                    button: () => {
                        let e = Date.now();
                        return (0, i.jsx)(m.$, {
                            variant: "expressive",
                            size: "md",
                            onClick: () => {
                                A.default.track(S.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: u,
                                    cta_type: _,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: u,
                                }),
                                    f();
                            },
                            text: d,
                            icon: p.t,
                        });
                    },
                    disclaimer: r.disclaimer?.disclaimerText !== "" ? r.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: O,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            content: s.properties.announcementModalVariant1,
            renderModalProps: r,
            analyticsLocations: o,
            analyticsLocation: a,
            isLightTheme: C,
        });
        return (0, i.jsx)(Z, { ...e });
    }
    return (
        h.A.captureMessage(
            `Property type ${s.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
