n.d(t, { default: () => Q, H: () => Z });
var i = n(627968),
    r = n(64700),
    a = n(65412),
    l = n(554146),
    s = n(651436),
    o = n(366010),
    d = n(212245),
    c = n(736653),
    u = n(793574),
    A = n(688810),
    h = n(826673),
    _ = n(38405),
    E = n(403581),
    p = n(232582),
    m = n(821609),
    I = n(349288),
    g = n(954571),
    C = n(637706),
    T = n(498470),
    f = n(652215),
    N = n(985018),
    S = n(870433);
n(323874), n(14289), n(35956);
var L = n(503698),
    O = n.n(L),
    y = n(110259),
    b = n(877624),
    v = n(17928),
    P = n(815021),
    D = n(777666),
    R = n(534514),
    w = n(834730),
    x = n(935462),
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
let q = [],
    K = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(D.Lp, { className: O()(z.Tc, n), text: t });
    },
    W = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: a, wideStyle: l } = e;
        return (0, i.jsxs)("div", {
            className: O()(z.Vr, { [z.tF]: l }),
            children: [
                null != a ? (0, i.jsx)(K, { tagText: a, className: z.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: O()(z._n, { [z.tF]: l }), src: r }),
                (0, i.jsxs)("div", {
                    className: O()(z.Zz, { [z.tF]: l }),
                    children: [
                        (0, i.jsx)(R.D, { variant: "heading-md/bold", className: z.Hf, children: t }),
                        (0, i.jsx)(w.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
function X(e) {
    let {
            componentId: t,
            promotionId: n,
            className: a,
            renderModalProps: s,
            heroArt: o,
            heroArtClassName: d,
            header: c,
            headerClassName: u,
            modalTopPill: A,
            subHeader: h,
            subHeaderExtra: E,
            featureCards: p,
            changeLogId: m,
            button: I,
            body: C,
            disclaimer: T,
            disclaimerExtra: S,
        } = e,
        { onClose: L, transitionState: D } = s,
        K = (0, V.GV)(),
        X = p.length % 2 == 0,
        Z = (0, v.bG)([U.A], () => U.A.useReducedMotion),
        [Q, J] = r.useState(Date.now()),
        [ee, et] = r.useState(0),
        [en, ei] = r.useState(0),
        [er, ea] = r.useState(!1),
        [el, es] = r.useState(!0),
        eo = r.useRef(Q),
        ed = r.useRef(ee),
        ec = r.useRef(en),
        eu = r.useRef(er),
        eA = r.useRef(el),
        [eh, e_] = r.useState(q),
        eE = r.useRef(!1);
    function ep() {
        let e = Date.now(),
            t = e - eo.current,
            n = ed.current,
            i = ec.current;
        return eu.current && (et((n += t)), eA.current || ei((i += t))), J(e), [n, i];
    }
    return (
        (0, G.A)({
            type: y.ImpressionTypes.MODAL,
            name: y.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
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
                    e_(await Promise.all(e));
                } catch (e) {
                    _.A.captureException(e), e_(q);
                }
            };
            !0 !== eE.current && e(), (eE.current = !0);
        }, [o, eh]),
        r.useEffect(
            () => () => {
                null != eh &&
                    eh.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eh],
        ),
        r.useEffect(() => {
            (eo.current = Q), (ed.current = ee), (ec.current = en), (eu.current = er), (eA.current = el);
        }, [Q, ee, en, er, el]),
        r.useEffect(
            () => () => {
                if ("video" === o.type || "embed" === o.type) {
                    let [e, t] = ep();
                    g.default.track(f.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: m,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        g.default.track(f.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
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
                g.default.track(f.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    g.default.track(f.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, H.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: $.i.DISMISS });
                }
            );
        }, [m, n]),
        (0, i.jsx)(x.EO, {
            "data-migration-pending": !0,
            className: O()(z.zr, z.kv, a),
            transitionState: D,
            "aria-labelledby": K,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(M.h, {
                color: "nitro-pink",
                children: [
                    (0, i.jsx)("div", {
                        className: z.cG,
                        children: (0, i.jsx)(P.J, { "data-migration-pending": !0, onClick: async () => await L() }),
                    }),
                    (0, i.jsxs)(x.$m, {
                        "data-migration-pending": !0,
                        className: z.Qs,
                        children: [
                            "video" === o.type
                                ? (0, i.jsx)(F.A, {
                                      className: O()(z.Ki, d),
                                      autoPlay: !Z,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: o.src,
                                      poster: o.poster,
                                      onPlay: (e) => {
                                          g.default.track(f.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m }),
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
                                      children: eh?.map((e) => {
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
                                        className: O()(z.Ki, d),
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
                                            g.default.track(f.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m });
                                        },
                                    })
                                  : "image" === o.type
                                    ? (0, i.jsx)("img", { alt: "", className: O()(z.Ki, d), src: o.src })
                                    : null,
                            null != A && "" !== A
                                ? (0, i.jsx)(Y.e4, {
                                      text: A,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: z.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: z.Z,
                                children: [
                                    (0, i.jsx)(R.D, { variant: "display-md", className: O()(z.TK, u), children: c }),
                                    (0, i.jsxs)(w.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: z.uI,
                                        children: [h, E?.()],
                                    }),
                                ],
                            }),
                            null != C &&
                                "" !== C &&
                                (0, i.jsx)(R.D, { variant: "heading-lg/semibold", className: z.G3, children: C }),
                            p.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: O()(z.IS, { [z.tF]: X }),
                                    children: p.map((e, t) =>
                                        (0, i.jsx)(W, { ...e, wideStyle: X }, `${e.header}_${t}`),
                                    ),
                                }),
                            null != T &&
                                "" !== T &&
                                (0, i.jsxs)(w.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: z.ed,
                                    children: [T, S?.()],
                                }),
                            I(),
                        ],
                    }),
                ],
            }),
        })
    );
}
function Z(e) {
    let { promotionId: t, content: n, isPreview: i } = e,
        r = s.m.fromBinary((0, a.A)(n));
    if ("announcementModalVariant1" !== r.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, h.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
}
function Q(e) {
    let { componentId: t, promotionId: n, renderModalProps: r, properties: a } = e,
        { location: l } = (0, d.p)(),
        { analyticsLocations: s } = (0, A.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        h = (0, c.Ay)(),
        L = (0, o.q)(h);
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
                A = r.button?.buttonAction === p.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                h = (0, T.h)({
                    buttonAction: r.button?.buttonAction,
                    deeplinkSection: r.button?.deeplinkSection,
                    analyticsLocations: l,
                    analyticsLocation: s,
                    onClose: c,
                }),
                _ = (0, C.C)(r.helpArticle, r.helpArticleId),
                L =
                    null != _
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(I.Anchor, { className: S.$T, href: _.url, children: _.linkText }),
                                  ],
                              })
                        : void 0,
                O = (0, C.C)(r.disclaimer?.disclaimerHelpArticle, ""),
                y =
                    null != O
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(I.Anchor, { className: S.$T, href: O.url, children: O.linkText }),
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
                                g.default.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: d,
                                    cta_type: A,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: d,
                                }),
                                    h();
                            },
                            text: u,
                            icon: E.t,
                        });
                    },
                    disclaimer: r.disclaimer?.disclaimerText !== "" ? r.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: y,
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
        return (0, i.jsx)(X, { ...e });
    }
    return (
        _.A.captureMessage(
            `Property type ${a.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
