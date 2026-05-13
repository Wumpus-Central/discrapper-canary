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
    A = n(367727),
    I = n(174459),
    T = n(637706),
    S = n(498470),
    N = n(652215),
    y = n(49999),
    C = n(375708),
    v = n(870433);
n(323874), n(14289), n(35956);
var O = n(503698),
    R = n.n(O),
    b = n(562708),
    D = n(877624),
    L = n(17928),
    w = n(815021),
    M = n(777666),
    P = n(534514),
    x = n(834730),
    U = n(935462),
    k = n(315629),
    G = n(775602),
    F = n(139286),
    V = n(175671),
    B = n(259407),
    H = n(915089),
    j = n(607470),
    Y = n(34337),
    W = n(774774),
    K = n(777135);
let z = [],
    $ = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(M.Lp, { className: R()(K.Tc, n), text: t });
    },
    q = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: s, wideStyle: a } = e;
        return (0, i.jsxs)("div", {
            className: R()(K.Vr, { [K.tF]: a }),
            children: [
                null != s ? (0, i.jsx)($, { tagText: s, className: K.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: R()(K._n, { [K.tF]: a }), src: r }),
                (0, i.jsxs)("div", {
                    className: R()(K.Zz, { [K.tF]: a }),
                    children: [
                        (0, i.jsx)(P.D, { variant: "heading-md/bold", className: K.Hf, children: t }),
                        (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
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
            body: T,
            disclaimer: S,
            disclaimerExtra: v,
        } = e,
        { onClose: O, transitionState: M } = o,
        $ = (0, H.GV)(),
        Z = E.length % 2 == 0,
        X = (0, L.bG)([G.A], () => G.A.useReducedMotion),
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
        (0, F.A)({
            type: b.ImpressionTypes.MODAL,
            name: b.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: D.C.ANNOUNCEMENT_MODAL },
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
                    I.default.track(N.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: m,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        I.default.track(N.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: m,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [m, l.type],
        ),
        r.useEffect(() => {
            (0, A.Vh)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                I.default.track(N.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    I.default.track(N.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, A.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: y.i.DISMISS });
                }
            );
        }, [m, n]),
        (0, i.jsx)(U.EO, {
            "data-migration-pending": !0,
            className: R()(K.zr, K.kv, s),
            transitionState: M,
            "aria-labelledby": $,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(k.h, {
                color: "nitro-pink",
                className: K.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: K.cG,
                        children: (0, i.jsx)(w.J, { "data-migration-pending": !0, onClick: async () => await O() }),
                    }),
                    (0, i.jsxs)(U.$m, {
                        "data-migration-pending": !0,
                        className: K.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            "video" === l.type
                                ? (0, i.jsx)(j.A, {
                                      className: R()(K.Ki, u),
                                      autoPlay: !X,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: l.src,
                                      poster: l.poster,
                                      onPlay: (e) => {
                                          I.default.track(N.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m }),
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
                                          let t = (0, C.getLanguages)().find((t) => t.code === e.locale);
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
                                  ? (0, i.jsx)(V.rr, {
                                        className: R()(K.Ki, u),
                                        allowFullScreen: !1,
                                        href: l.href,
                                        thumbnail: l.thumbnail,
                                        video: l.embed,
                                        provider: B.mt.YOUTUBE,
                                        maxWidth: l.embed.width,
                                        maxHeight: l.embed.height,
                                        renderVideoComponent: Y.$o,
                                        renderImageComponent: Y.LL,
                                        renderLinkComponent: Y.bU,
                                        onPlay: () => {
                                            I.default.track(N.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m });
                                        },
                                    })
                                  : "image" === l.type
                                    ? (0, i.jsx)("img", { alt: "", className: R()(K.Ki, u), src: l.src })
                                    : null,
                            null != _ && "" !== _
                                ? (0, i.jsx)(W.e4, {
                                      text: _,
                                      colorOptions: W.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: K.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: K.Z,
                                children: [
                                    (0, i.jsx)(P.D, { variant: "display-md", className: R()(K.TK, d), children: c }),
                                    (0, i.jsxs)(x.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: K.uI,
                                        children: [f, p?.()],
                                    }),
                                ],
                            }),
                            null != T &&
                                "" !== T &&
                                (0, i.jsx)(P.D, { variant: "heading-lg/semibold", className: K.G3, children: T }),
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
                            null != S &&
                                "" !== S &&
                                (0, i.jsxs)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: K.ed,
                                    children: [S, v?.()],
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
        { location: o } = (0, u.p)(),
        { analyticsLocations: f } = (0, _.Ay)(d.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        O = (0, c.Ay)(),
        R = (0, l.q)(O);
    if ("announcementModalVariant1" === s.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    content: r,
                    renderModalProps: s,
                    analyticsLocations: o,
                    analyticsLocation: l,
                    isLightTheme: u,
                } = e,
                c = `AnnouncementModalVariant1_${t}`,
                { onClose: d } = s,
                _ = r.button?.copy ?? C.intl.string(C.t.YScQSF),
                f = r.button?.buttonAction === E.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                O = (0, S.h)({
                    buttonAction: r.button?.buttonAction,
                    deeplinkSection: r.button?.deeplinkSection,
                    analyticsLocations: o,
                    analyticsLocation: l,
                    onClose: d,
                }),
                R = (0, T.C)(r.helpArticle, r.helpArticleId),
                b =
                    null != R
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(g.Anchor, { className: v.$T, href: R.url, children: R.linkText }),
                                  ],
                              })
                        : void 0,
                D = (0, T.C)(r.disclaimer?.disclaimerHelpArticle, ""),
                L =
                    null != D
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(g.Anchor, { className: v.$T, href: D.url, children: D.linkText }),
                                  ],
                              })
                        : void 0,
                w = { type: "video", src: u ? r.heroArtVideoLinkLightTheme : r.videoLink };
            return (
                null != r.heroArtVideoSubtitles &&
                    (w.subtitles = r.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== r.heroArtImageLinkDarkTheme || "" !== r.heroArtImageLinkLightTheme) &&
                    (w = { type: "image", src: u ? r.heroArtImageLinkLightTheme : r.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    renderModalProps: s,
                    header: r.header,
                    modalTopPill: r.modalTopPill,
                    subHeader: r.subheader,
                    subHeaderExtra: b,
                    body: r.body,
                    heroArt: w,
                    featureCards: r.featureCards.map((e) => ({
                        header: e.header,
                        subHeader: e.body,
                        imageSrc: u ? e.imageLinkLightTheme : e.imageLink,
                        tagText: "" !== e.pill ? e.pill : void 0,
                    })),
                    changeLogId: c,
                    button: () => {
                        let e = Date.now(),
                            t = async () => {
                                I.default.track(N.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: c,
                                    cta_type: f,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: c,
                                });
                                try {
                                    r.button?.buttonAction === E.dz.OPEN_MARKETING_PAGE &&
                                        (await (0, A.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                                            dismissAction: y.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    h.A.captureException(e);
                                } finally {
                                    O();
                                }
                            };
                        return (0, i.jsx)(m.$, { variant: "expressive", size: "md", onClick: t, text: _, icon: p.t });
                    },
                    disclaimer: r.disclaimer?.disclaimerText !== "" ? r.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: L,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            content: s.properties.announcementModalVariant1,
            renderModalProps: r,
            analyticsLocations: f,
            analyticsLocation: o,
            isLightTheme: R,
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
