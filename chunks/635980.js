n.d(t, { default: () => X, H: () => z });
var i = n(627968),
    a = n(64700),
    r = n(65412),
    s = n(554146),
    l = n(651436),
    o = n(366010),
    d = n(212245),
    c = n(736653),
    _ = n(793574),
    E = n(688810),
    u = n(826673),
    A = n(38405),
    I = n(403581),
    T = n(232582),
    h = n(821609),
    S = n(349288),
    N = n(954571),
    f = n(637706),
    p = n(498470),
    m = n(652215),
    O = n(985018),
    C = n(870433);
n(323874), n(14289), n(35956);
var R = n(503698),
    g = n.n(R),
    L = n(110259),
    D = n(877624),
    b = n(17928),
    M = n(815021),
    P = n(777666),
    U = n(534514),
    v = n(834730),
    y = n(935462),
    G = n(315629),
    w = n(775602),
    x = n(139286),
    V = n(175671),
    B = n(259407),
    F = n(915089),
    k = n(607470),
    H = n(367727),
    j = n(34337),
    Y = n(774774),
    W = n(49999),
    K = n(695594);
let $ = [],
    Z = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(P.Lp, { className: g()(K.Tc, n), text: t });
    },
    q = (e) => {
        let { header: t, subHeader: n, imageSrc: a, tagText: r, wideStyle: s } = e;
        return (0, i.jsxs)("div", {
            className: g()(K.Vr, { [K.tF]: s }),
            children: [
                null != r ? (0, i.jsx)(Z, { tagText: r, className: K.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: g()(K._n, { [K.tF]: s }), src: a }),
                (0, i.jsxs)("div", {
                    className: g()(K.Zz, { [K.tF]: s }),
                    children: [
                        (0, i.jsx)(U.D, { variant: "heading-md/bold", className: K.Hf, children: t }),
                        (0, i.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
function Q(e) {
    let {
            componentId: t,
            promotionId: n,
            className: r,
            renderModalProps: l,
            heroArt: o,
            heroArtClassName: d,
            header: c,
            headerClassName: _,
            modalTopPill: E,
            subHeader: u,
            subHeaderExtra: I,
            featureCards: T,
            changeLogId: h,
            button: S,
            body: f,
            disclaimer: p,
            disclaimerExtra: C,
        } = e,
        { onClose: R, transitionState: P } = l,
        Z = (0, F.GV)(),
        Q = T.length % 2 == 0,
        z = (0, b.bG)([w.A], () => w.A.useReducedMotion),
        [X, J] = a.useState(Date.now()),
        [ee, et] = a.useState(0),
        [en, ei] = a.useState(0),
        [ea, er] = a.useState(!1),
        [es, el] = a.useState(!0),
        eo = a.useRef(X),
        ed = a.useRef(ee),
        ec = a.useRef(en),
        e_ = a.useRef(ea),
        eE = a.useRef(es),
        [eu, eA] = a.useState($),
        eI = a.useRef(!1);
    function eT() {
        let e = Date.now(),
            t = e - eo.current,
            n = ed.current,
            i = ec.current;
        return e_.current && (et((n += t)), eE.current || ei((i += t))), J(e), [n, i];
    }
    return (
        (0, x.A)({
            type: L.ImpressionTypes.MODAL,
            name: L.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: D.C.ANNOUNCEMENT_MODAL },
        }),
        a.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== o.type || null == o.subtitles) return;
                    let e = o.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            a = URL.createObjectURL(i);
                        return { ...e, src: a };
                    });
                    eA(await Promise.all(e));
                } catch (e) {
                    A.A.captureException(e), eA($);
                }
            };
            !0 !== eI.current && e(), (eI.current = !0);
        }, [o, eu]),
        a.useEffect(
            () => () => {
                null != eu &&
                    eu.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eu],
        ),
        a.useEffect(() => {
            (eo.current = X), (ed.current = ee), (ec.current = en), (e_.current = ea), (eE.current = es);
        }, [X, ee, en, ea, es]),
        a.useEffect(
            () => () => {
                if ("video" === o.type || "embed" === o.type) {
                    let [e, t] = eT();
                    N.default.track(m.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: h,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        N.default.track(m.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: h,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [h, o.type],
        ),
        a.useEffect(() => {
            (0, H.Vh)(s.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
            let e = Date.now();
            return (
                N.default.track(m.HAw.CHANGE_LOG_OPENED, { change_log_id: h }),
                () => {
                    N.default.track(m.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: h,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, H.qr)(s.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: W.i.DISMISS });
                }
            );
        }, [h, n]),
        (0, i.jsx)(y.EO, {
            "data-migration-pending": !0,
            className: g()(K.zr, K.kv, r),
            transitionState: P,
            "aria-labelledby": Z,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(G.h, {
                color: "nitro-pink",
                className: K.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: K.cG,
                        children: (0, i.jsx)(M.J, { "data-migration-pending": !0, onClick: async () => await R() }),
                    }),
                    (0, i.jsxs)(y.$m, {
                        "data-migration-pending": !0,
                        className: K.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            "video" === o.type
                                ? (0, i.jsx)(k.A, {
                                      className: g()(K.Ki, d),
                                      autoPlay: !z,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: o.src,
                                      poster: o.poster,
                                      onPlay: (e) => {
                                          N.default.track(m.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: h }),
                                              J(Date.now()),
                                              er(!0),
                                              el(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          eT(), el(e.currentTarget.muted), er(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          eT(), el(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          eT(), el(e.currentTarget.muted), er(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children: eu?.map((e) => {
                                          let t = (0, O.getLanguages)().find((t) => t.code === e.locale);
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
                                : "embed" === o.type
                                  ? (0, i.jsx)(V.rr, {
                                        className: g()(K.Ki, d),
                                        allowFullScreen: !1,
                                        href: o.href,
                                        thumbnail: o.thumbnail,
                                        video: o.embed,
                                        provider: B.mt.YOUTUBE,
                                        maxWidth: o.embed.width,
                                        maxHeight: o.embed.height,
                                        renderVideoComponent: j.$o,
                                        renderImageComponent: j.LL,
                                        renderLinkComponent: j.bU,
                                        onPlay: () => {
                                            N.default.track(m.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: h });
                                        },
                                    })
                                  : "image" === o.type
                                    ? (0, i.jsx)("img", { alt: "", className: g()(K.Ki, d), src: o.src })
                                    : null,
                            null != E && "" !== E
                                ? (0, i.jsx)(Y.e4, {
                                      text: E,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: K.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: K.Z,
                                children: [
                                    (0, i.jsx)(U.D, { variant: "display-md", className: g()(K.TK, _), children: c }),
                                    (0, i.jsxs)(v.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: K.uI,
                                        children: [u, I?.()],
                                    }),
                                ],
                            }),
                            null != f &&
                                "" !== f &&
                                (0, i.jsx)(U.D, { variant: "heading-lg/semibold", className: K.G3, children: f }),
                            T.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: K.IS,
                                    children: T.map((e, t) =>
                                        (0, i.jsx)(q, { ...e, wideStyle: Q }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: K.xQ,
                        children: [
                            S(),
                            null != p &&
                                "" !== p &&
                                (0, i.jsxs)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: K.ed,
                                    children: [p, C?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function z(e) {
    let { promotionId: t, content: n, isPreview: i } = e,
        a = l.m.fromBinary((0, r.A)(n));
    if ("announcementModalVariant1" !== a.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, u.u$)(s.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function X(e) {
    let { componentId: t, promotionId: n, renderModalProps: a, properties: r } = e,
        { location: s } = (0, d.p)(),
        { analyticsLocations: l } = (0, E.Ay)(_.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        u = (0, c.Ay)(),
        R = (0, o.q)(u);
    if ("announcementModalVariant1" === r.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    content: a,
                    renderModalProps: r,
                    analyticsLocations: s,
                    analyticsLocation: l,
                    isLightTheme: o,
                } = e,
                d = `AnnouncementModalVariant1_${t}`,
                { onClose: c } = r,
                _ = a.button?.copy ?? O.intl.string(O.t.YScQSF),
                E = a.button?.buttonAction === T.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                u = (0, p.h)({
                    buttonAction: a.button?.buttonAction,
                    deeplinkSection: a.button?.deeplinkSection,
                    analyticsLocations: s,
                    analyticsLocation: l,
                    onClose: c,
                }),
                A = (0, f.C)(a.helpArticle, a.helpArticleId),
                R =
                    null != A
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(S.Anchor, { className: C.$T, href: A.url, children: A.linkText }),
                                  ],
                              })
                        : void 0,
                g = (0, f.C)(a.disclaimer?.disclaimerHelpArticle, ""),
                L =
                    null != g
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(S.Anchor, { className: C.$T, href: g.url, children: g.linkText }),
                                  ],
                              })
                        : void 0,
                D = { type: "video", src: o ? a.heroArtVideoLinkLightTheme : a.videoLink };
            return (
                null != a.heroArtVideoSubtitles &&
                    (D.subtitles = a.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== a.heroArtImageLinkDarkTheme || "" !== a.heroArtImageLinkLightTheme) &&
                    (D = { type: "image", src: o ? a.heroArtImageLinkLightTheme : a.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    renderModalProps: r,
                    header: a.header,
                    modalTopPill: a.modalTopPill,
                    subHeader: a.subheader,
                    subHeaderExtra: R,
                    body: a.body,
                    heroArt: D,
                    featureCards: a.featureCards.map((e) => ({
                        header: e.header,
                        subHeader: e.body,
                        imageSrc: o ? e.imageLinkLightTheme : e.imageLink,
                        tagText: "" !== e.pill ? e.pill : void 0,
                    })),
                    changeLogId: d,
                    button: () => {
                        let e = Date.now();
                        return (0, i.jsx)(h.$, {
                            variant: "expressive",
                            size: "md",
                            onClick: () => {
                                N.default.track(m.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: d,
                                    cta_type: E,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: d,
                                }),
                                    u();
                            },
                            text: _,
                            icon: I.t,
                        });
                    },
                    disclaimer: a.disclaimer?.disclaimerText !== "" ? a.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: L,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            content: r.properties.announcementModalVariant1,
            renderModalProps: a,
            analyticsLocations: l,
            analyticsLocation: s,
            isLightTheme: R,
        });
        return (0, i.jsx)(Q, { ...e });
    }
    return (
        A.A.captureMessage(
            `Property type ${r.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
