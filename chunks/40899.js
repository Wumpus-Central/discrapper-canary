n.d(t, { default: () => J, H: () => Z });
var r = n(627968),
    a = n(64700);
if (21552 == n.j) var i = n(65412);
var l = n(554146),
    o = n(285402),
    s = n(366010),
    c = n(212245),
    d = n(736653),
    u = n(793574),
    m = n(688810),
    h = n(826673),
    p = n(38405),
    E = n(403581),
    _ = n(232582),
    N = n(821609),
    A = n(349288),
    g = n(367727),
    M = n(174459),
    f = n(637706),
    x = n(498470),
    T = n(652215),
    b = n(49999),
    L = n(375708),
    I = n(870433);
n(323874), n(14289), n(35956);
var y = n(503698),
    k = n.n(y),
    O = n(562708),
    j = n(877624),
    v = n(17928),
    C = n(815021),
    P = n(777666),
    w = n(534514),
    D = n(834730),
    R = n(935462),
    G = n(315629),
    S = n(775602),
    U = n(139286),
    H = n(392056),
    V = n(259407),
    K = n(915089),
    $ = n(607470),
    F = n(34337),
    z = n(774774),
    Y = n(777135);
let q = [],
    B = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(P.Lp, { className: k()(Y.Tc, n), text: t });
    },
    Q = (e) => {
        let { header: t, subHeader: n, imageSrc: a, tagText: i, wideStyle: l } = e;
        return (0, r.jsxs)("div", {
            className: k()(Y.Vr, { [Y.tF]: l }),
            children: [
                null != i ? (0, r.jsx)(B, { tagText: i, className: Y.bX }) : null,
                (0, r.jsx)("img", { alt: "", className: k()(Y._n, { [Y.tF]: l }), src: a }),
                (0, r.jsxs)("div", {
                    className: k()(Y.Zz, { [Y.tF]: l }),
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/bold", className: Y.Hf, children: t }),
                        (0, r.jsx)(D.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
function W(e) {
    let {
            componentId: t,
            promotionId: n,
            className: i,
            renderModalProps: o,
            heroArt: s,
            heroArtClassName: c,
            header: d,
            headerClassName: u,
            modalTopPill: m,
            subHeader: h,
            subHeaderExtra: E,
            featureCards: _,
            changeLogId: N,
            button: A,
            body: f,
            disclaimer: x,
            disclaimerExtra: I,
        } = e,
        { onClose: y, transitionState: P } = o,
        B = (0, K.GV)(),
        W = _.length % 2 == 0,
        Z = (0, v.bG)([S.A], () => S.A.useReducedMotion),
        [J, X] = a.useState(Date.now()),
        [ee, et] = a.useState(0),
        [en, er] = a.useState(0),
        [ea, ei] = a.useState(!1),
        [el, eo] = a.useState(!0),
        es = a.useRef(J),
        ec = a.useRef(ee),
        ed = a.useRef(en),
        eu = a.useRef(ea),
        em = a.useRef(el),
        [eh, ep] = a.useState(q),
        eE = a.useRef(!1);
    function e_() {
        let e = Date.now(),
            t = e - es.current,
            n = ec.current,
            r = ed.current;
        return eu.current && (et((n += t)), em.current || er((r += t))), X(e), [n, r];
    }
    return (
        (0, U.A)({
            type: O.ImpressionTypes.MODAL,
            name: O.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: j.C.ANNOUNCEMENT_MODAL },
        }),
        a.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== s.type || null == s.subtitles) return;
                    let e = s.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            r = new Blob([n], { type: "text/vtt" }),
                            a = URL.createObjectURL(r);
                        return { ...e, src: a };
                    });
                    ep(await Promise.all(e));
                } catch (e) {
                    p.A.captureException(e), ep(q);
                }
            };
            !0 !== eE.current && e(), (eE.current = !0);
        }, [s, eh]),
        a.useEffect(
            () => () => {
                null != eh &&
                    eh.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eh],
        ),
        a.useEffect(() => {
            (es.current = J), (ec.current = ee), (ed.current = en), (eu.current = ea), (em.current = el);
        }, [J, ee, en, ea, el]),
        a.useEffect(
            () => () => {
                if ("video" === s.type || "embed" === s.type) {
                    let [e, t] = e_();
                    M.default.track(T.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: N,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        M.default.track(T.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: N,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [N, s.type],
        ),
        a.useEffect(() => {
            (0, g.Vh)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                M.default.track(T.HAw.CHANGE_LOG_OPENED, { change_log_id: N }),
                () => {
                    M.default.track(T.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: N,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, g.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: b.i.DISMISS });
                }
            );
        }, [N, n]),
        (0, r.jsx)(R.EO, {
            "data-migration-pending": !0,
            className: k()(Y.zr, Y.kv, i),
            transitionState: P,
            "aria-labelledby": B,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(G.h, {
                color: "nitro-pink",
                className: Y.YV,
                children: [
                    (0, r.jsx)("div", {
                        className: Y.cG,
                        children: (0, r.jsx)(C.J, { "data-migration-pending": !0, onClick: async () => await y() }),
                    }),
                    (0, r.jsxs)(R.$m, {
                        "data-migration-pending": !0,
                        className: Y.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            "video" === s.type
                                ? (0, r.jsx)($.A, {
                                      className: k()(Y.Ki, c),
                                      autoPlay: !Z,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: s.src,
                                      poster: s.poster,
                                      onPlay: (e) => {
                                          M.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: N }),
                                              X(Date.now()),
                                              ei(!0),
                                              eo(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          e_(), eo(e.currentTarget.muted), ei(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          e_(), eo(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          e_(), eo(e.currentTarget.muted), ei(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children: eh?.map((e) => {
                                          let t = (0, L.getLanguages)().find((t) => t.code === e.locale);
                                          return null == t
                                              ? null
                                              : (0, r.jsx)(
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
                                : "embed" === s.type
                                  ? (0, r.jsx)(H.rr, {
                                        className: k()(Y.Ki, c),
                                        allowFullScreen: !1,
                                        href: s.href,
                                        thumbnail: s.thumbnail,
                                        video: s.embed,
                                        provider: V.m.YOUTUBE,
                                        maxWidth: s.embed.width,
                                        maxHeight: s.embed.height,
                                        renderVideoComponent: F.$o,
                                        renderImageComponent: F.LL,
                                        renderLinkComponent: F.bU,
                                        onPlay: () => {
                                            M.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: N });
                                        },
                                    })
                                  : "image" === s.type
                                    ? (0, r.jsx)("img", { alt: "", className: k()(Y.Ki, c), src: s.src })
                                    : null,
                            null != m && "" !== m
                                ? (0, r.jsx)(z.e4, {
                                      text: m,
                                      colorOptions: z.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: Y.ON,
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: Y.Z,
                                children: [
                                    (0, r.jsx)(w.D, { variant: "display-md", className: k()(Y.TK, u), children: d }),
                                    (0, r.jsxs)(D.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: Y.uI,
                                        children: [h, E?.()],
                                    }),
                                ],
                            }),
                            null != f &&
                                "" !== f &&
                                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", className: Y.G3, children: f }),
                            _.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: Y.IS,
                                    children: _.map((e, t) =>
                                        (0, r.jsx)(Q, { ...e, wideStyle: W }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: Y.xQ,
                        children: [
                            A(),
                            null != x &&
                                "" !== x &&
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: Y.ed,
                                    children: [x, I?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function Z(e) {
    let { promotionId: t, content: n, isPreview: r } = e,
        a = o.m.fromBinary((0, i.A)(n));
    if ("announcementModalVariant1" !== a.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, h.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !r && e ? null : (r && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function J(e) {
    let { componentId: t, promotionId: n, renderModalProps: a, properties: i } = e,
        { location: o } = (0, c.p)(),
        { analyticsLocations: h } = (0, m.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        y = (0, d.Ay)(),
        k = (0, s.q)(y);
    if ("announcementModalVariant1" === i.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    content: a,
                    renderModalProps: i,
                    analyticsLocations: o,
                    analyticsLocation: s,
                    isLightTheme: c,
                } = e,
                d = `AnnouncementModalVariant1_${t}`,
                { onClose: u } = i,
                m = a.button?.copy ?? L.intl.string(L.t.YScQSF),
                h = a.button?.buttonAction === _.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                y = (0, x.h)({
                    buttonAction: a.button?.buttonAction,
                    deeplinkSection: a.button?.deeplinkSection,
                    analyticsLocations: o,
                    analyticsLocation: s,
                    onClose: u,
                }),
                k = (0, f.C)(a.helpArticle, a.helpArticleId),
                O =
                    null != k
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(A.Anchor, { className: I.$T, href: k.url, children: k.linkText }),
                                  ],
                              })
                        : void 0,
                j = (0, f.C)(a.disclaimer?.disclaimerHelpArticle, ""),
                v =
                    null != j
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(A.Anchor, { className: I.$T, href: j.url, children: j.linkText }),
                                  ],
                              })
                        : void 0,
                C = { type: "video", src: c ? a.heroArtVideoLinkLightTheme : a.videoLink };
            return (
                null != a.heroArtVideoSubtitles &&
                    (C.subtitles = a.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== a.heroArtImageLinkDarkTheme || "" !== a.heroArtImageLinkLightTheme) &&
                    (C = { type: "image", src: c ? a.heroArtImageLinkLightTheme : a.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    renderModalProps: i,
                    header: a.header,
                    modalTopPill: a.modalTopPill,
                    subHeader: a.subheader,
                    subHeaderExtra: O,
                    body: a.body,
                    heroArt: C,
                    featureCards: a.featureCards.map((e) => ({
                        header: e.header,
                        subHeader: e.body,
                        imageSrc: c ? e.imageLinkLightTheme : e.imageLink,
                        tagText: "" !== e.pill ? e.pill : void 0,
                    })),
                    changeLogId: d,
                    button: () => {
                        let e = Date.now(),
                            t = async () => {
                                M.default.track(T.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: d,
                                    cta_type: h,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: d,
                                });
                                try {
                                    a.button?.buttonAction === _.dz.OPEN_MARKETING_PAGE &&
                                        (await (0, g.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                                            dismissAction: b.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    p.A.captureException(e);
                                } finally {
                                    y();
                                }
                            };
                        return (0, r.jsx)(N.$, { variant: "expressive", size: "md", onClick: t, text: m, icon: E.t });
                    },
                    disclaimer: a.disclaimer?.disclaimerText !== "" ? a.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: v,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            content: i.properties.announcementModalVariant1,
            renderModalProps: a,
            analyticsLocations: h,
            analyticsLocation: o,
            isLightTheme: k,
        });
        return (0, r.jsx)(W, { ...e });
    }
    return (
        p.A.captureMessage(
            `Property type ${i.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
