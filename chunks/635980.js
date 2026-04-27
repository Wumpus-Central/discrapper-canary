n.d(t, { default: () => Z, H: () => X });
var i = n(627968),
    r = n(64700),
    a = n(65412),
    l = n(554146),
    s = n(651436),
    o = n(366010),
    d = n(212245),
    c = n(736653),
    u = n(793574),
    _ = n(688810),
    A = n(826673),
    h = n(38405),
    E = n(403581),
    p = n(232582),
    m = n(821609),
    I = n(349288),
    g = n(954571),
    C = n(637706),
    f = n(498470),
    T = n(652215),
    N = n(985018),
    S = n(870433);
n(323874), n(14289), n(35956);
var L = n(503698),
    y = n.n(L),
    O = n(110259),
    b = n(877624),
    v = n(17928),
    R = n(815021),
    P = n(777666),
    D = n(534514),
    x = n(834730),
    w = n(935462),
    M = n(315629),
    U = n(775602),
    G = n(139286),
    j = n(175671),
    k = n(259407),
    V = n(915089),
    F = n(607470),
    H = n(367727),
    B = n(34337),
    Y = n(774774),
    $ = n(49999),
    z = n(695594);
let W = [],
    q = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(P.Lp, { className: y()(z.Tc, n), text: t });
    },
    K = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: a, wideStyle: l } = e;
        return (0, i.jsxs)("div", {
            className: y()(z.Vr, { [z.tF]: l }),
            children: [
                null != a ? (0, i.jsx)(q, { tagText: a, className: z.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: y()(z._n, { [z.tF]: l }), src: r }),
                (0, i.jsxs)("div", {
                    className: y()(z.Zz, { [z.tF]: l }),
                    children: [
                        (0, i.jsx)(D.D, { variant: "heading-sm/semibold", className: z.Hf, children: t }),
                        (0, i.jsx)(x.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
function Q(e) {
    let {
            componentId: t,
            promotionId: n,
            className: a,
            renderModalProps: s,
            heroArt: o,
            heroArtClassName: d,
            header: c,
            headerClassName: u,
            modalTopPill: _,
            subHeader: A,
            subHeaderExtra: E,
            featureCards: p,
            changeLogId: m,
            button: I,
            body: C,
            disclaimer: f,
            disclaimerExtra: S,
        } = e,
        { onClose: L, transitionState: P } = s,
        q = (0, V.GV)(),
        Q = p.length % 2 == 0,
        X = (0, v.bG)([U.A], () => U.A.useReducedMotion),
        [Z, J] = r.useState(Date.now()),
        [ee, et] = r.useState(0),
        [en, ei] = r.useState(0),
        [er, ea] = r.useState(!1),
        [el, es] = r.useState(!0),
        eo = r.useRef(Z),
        ed = r.useRef(ee),
        ec = r.useRef(en),
        eu = r.useRef(er),
        e_ = r.useRef(el),
        [eA, eh] = r.useState(W),
        eE = r.useRef(!1);
    function ep() {
        let e = Date.now(),
            t = e - eo.current,
            n = ed.current,
            i = ec.current;
        return eu.current && (et((n += t)), e_.current || ei((i += t))), J(e), [n, i];
    }
    return (
        (0, G.A)({
            type: O.ImpressionTypes.MODAL,
            name: O.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: b.C.ANNOUNCEMENT_MODAL },
        }),
        r.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== o.type || null == o.subtitles) return;
                    let e = o.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            r = URL.createObjectURL(i);
                        return { ...e, src: r };
                    });
                    eh(await Promise.all(e));
                } catch (e) {
                    h.A.captureException(e), eh(W);
                }
            };
            !0 !== eE.current && e(), (eE.current = !0);
        }, [o, eA]),
        r.useEffect(
            () => () => {
                null != eA &&
                    eA.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eA],
        ),
        r.useEffect(() => {
            (eo.current = Z), (ed.current = ee), (ec.current = en), (eu.current = er), (e_.current = el);
        }, [Z, ee, en, er, el]),
        r.useEffect(
            () => () => {
                if ("video" === o.type || "embed" === o.type) {
                    let [e, t] = ep();
                    g.default.track(T.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: m,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        g.default.track(T.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: m,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [m, o.type],
        ),
        r.useEffect(() => {
            (0, H.Vh)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
            let e = Date.now();
            return (
                g.default.track(T.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    g.default.track(T.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, H.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: $.i.DISMISS });
                }
            );
        }, [m, n]),
        (0, i.jsx)(w.EO, {
            "data-migration-pending": !0,
            className: y()(z.zr, z.kv, a),
            transitionState: P,
            "aria-labelledby": q,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(M.h, {
                color: "nitro-pink",
                children: [
                    (0, i.jsx)("div", {
                        className: z.cG,
                        children: (0, i.jsx)(R.J, { "data-migration-pending": !0, onClick: async () => await L() }),
                    }),
                    (0, i.jsxs)(w.$m, {
                        "data-migration-pending": !0,
                        className: z.Qs,
                        children: [
                            "video" === o.type
                                ? (0, i.jsx)(F.A, {
                                      className: y()(z.Ki, d),
                                      autoPlay: !X,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: o.src,
                                      poster: o.poster,
                                      onPlay: (e) => {
                                          g.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m }),
                                              J(Date.now()),
                                              ea(!0),
                                              es(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          ep(), es(e.currentTarget.muted), ea(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          ep(), es(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          ep(), es(e.currentTarget.muted), ea(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children: eA?.map((e) => {
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
                                : "embed" === o.type
                                  ? (0, i.jsx)(j.rr, {
                                        className: y()(z.Ki, d),
                                        allowFullScreen: !1,
                                        href: o.href,
                                        thumbnail: o.thumbnail,
                                        video: o.embed,
                                        provider: k.mt.YOUTUBE,
                                        maxWidth: o.embed.width,
                                        maxHeight: o.embed.height,
                                        renderVideoComponent: B.$o,
                                        renderImageComponent: B.LL,
                                        renderLinkComponent: B.bU,
                                        onPlay: () => {
                                            g.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m });
                                        },
                                    })
                                  : "image" === o.type
                                    ? (0, i.jsx)("img", { alt: "", className: y()(z.Ki, d), src: o.src })
                                    : null,
                            null != _ && "" !== _
                                ? (0, i.jsx)(Y.e4, {
                                      text: _,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: z.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: z.Z,
                                children: [
                                    (0, i.jsx)(D.D, { variant: "display-md", className: y()(z.TK, u), children: c }),
                                    (0, i.jsxs)(x.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: z.uI,
                                        children: [A, E?.()],
                                    }),
                                ],
                            }),
                            null != C &&
                                "" !== C &&
                                (0, i.jsx)(D.D, { variant: "heading-lg/semibold", className: z.G3, children: C }),
                            p.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: y()(z.IS, { [z.tF]: Q }),
                                    children: p.map((e, t) =>
                                        (0, i.jsx)(K, { ...e, wideStyle: Q }, `${e.header}_${t}`),
                                    ),
                                }),
                            null != f &&
                                "" !== f &&
                                (0, i.jsxs)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: z.ed,
                                    children: [f, S?.()],
                                }),
                            I(),
                        ],
                    }),
                ],
            }),
        })
    );
}
function X(e) {
    let { promotionId: t, content: n, isPreview: i } = e,
        r = s.m.fromBinary((0, a.A)(n));
    if ("announcementModalVariant1" !== r.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, A.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
}
function Z(e) {
    let { componentId: t, promotionId: n, renderModalProps: r, properties: a } = e,
        { location: l } = (0, d.p)(),
        { analyticsLocations: s } = (0, _.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        A = (0, c.Ay)(),
        L = (0, o.q)(A);
    if ("announcementModalVariant1" === a.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    content: r,
                    renderModalProps: a,
                    analyticsLocations: l,
                    analyticsLocation: s,
                    isLightTheme: o,
                } = e,
                d = `AnnouncementModalVariant1_${t}`,
                { onClose: c } = a,
                u = r.button?.copy ?? N.intl.string(N.t.YScQSF),
                _ = r.button?.buttonAction === p.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                A = (0, f.h)({
                    buttonAction: r.button?.buttonAction,
                    deeplinkSection: r.button?.deeplinkSection,
                    analyticsLocations: l,
                    analyticsLocation: s,
                    onClose: c,
                }),
                h = (0, C.C)(r.helpArticle, r.helpArticleId),
                L =
                    null != h
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(I.Anchor, { className: S.$T, href: h.url, children: h.linkText }),
                                  ],
                              })
                        : void 0,
                y = (0, C.C)(r.disclaimer?.disclaimerHelpArticle, ""),
                O =
                    null != y
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(I.Anchor, { className: S.$T, href: y.url, children: y.linkText }),
                                  ],
                              })
                        : void 0,
                b = { type: "video", src: o ? r.heroArtVideoLinkLightTheme : r.videoLink };
            return (
                null != r.heroArtVideoSubtitles &&
                    (b.subtitles = r.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== r.heroArtImageLinkDarkTheme || "" !== r.heroArtImageLinkLightTheme) &&
                    (b = { type: "image", src: o ? r.heroArtImageLinkLightTheme : r.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    renderModalProps: a,
                    header: r.header,
                    modalTopPill: r.modalTopPill,
                    subHeader: r.subheader,
                    subHeaderExtra: L,
                    body: r.body,
                    heroArt: b,
                    featureCards: r.featureCards.map((e) => ({
                        header: e.header,
                        subHeader: e.body,
                        imageSrc: o ? e.imageLinkLightTheme : e.imageLink,
                        tagText: "" !== e.pill ? e.pill : void 0,
                    })),
                    changeLogId: d,
                    button: () => {
                        let e = Date.now();
                        return (0, i.jsx)(m.$, {
                            variant: "expressive",
                            size: "md",
                            onClick: () => {
                                g.default.track(T.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: d,
                                    cta_type: _,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: d,
                                }),
                                    A();
                            },
                            text: u,
                            icon: E.t,
                        });
                    },
                    disclaimer: r.disclaimer?.disclaimerText !== "" ? r.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: O,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            content: a.properties.announcementModalVariant1,
            renderModalProps: r,
            analyticsLocations: s,
            analyticsLocation: l,
            isLightTheme: L,
        });
        return (0, i.jsx)(Q, { ...e });
    }
    return (
        h.A.captureMessage(
            `Property type ${a.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
