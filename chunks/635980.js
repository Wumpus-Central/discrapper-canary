n.d(t, { default: () => Q, H: () => Z });
var i = n(627968),
    r = n(64700),
    a = n(65412),
    l = n(554146),
    s = n(651436),
    o = n(366010),
    d = n(212245),
    u = n(736653),
    c = n(793574),
    _ = n(688810),
    A = n(826673),
    h = n(38405),
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
var O = n(503698),
    L = n.n(O),
    y = n(110259),
    b = n(877624),
    v = n(17928),
    D = n(815021),
    R = n(777666),
    M = n(534514),
    P = n(834730),
    w = n(935462),
    x = n(315629),
    U = n(775602),
    G = n(139286),
    k = n(175671),
    j = n(259407),
    V = n(915089),
    H = n(607470),
    B = n(367727),
    F = n(34337),
    Y = n(774774),
    K = n(49999),
    W = n(695594);
let z = [],
    q = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(R.Lp, { className: L()(W.Tc, n), text: t });
    },
    $ = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: a, wideStyle: l } = e;
        return (0, i.jsxs)("div", {
            className: L()(W.Vr, { [W.tF]: l }),
            children: [
                null != a ? (0, i.jsx)(q, { tagText: a, className: W.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: L()(W._n, { [W.tF]: l }), src: r }),
                (0, i.jsxs)("div", {
                    className: L()(W.Zz, { [W.tF]: l }),
                    children: [
                        (0, i.jsx)(M.D, { variant: "heading-sm/semibold", className: W.Hf, children: t }),
                        (0, i.jsx)(P.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
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
            header: u,
            headerClassName: c,
            modalTopPill: _,
            subHeader: A,
            subHeaderExtra: E,
            featureCards: p,
            changeLogId: m,
            button: I,
            body: C,
            disclaimer: T,
            disclaimerExtra: S,
        } = e,
        { onClose: O, transitionState: R } = s,
        q = (0, V.GV)(),
        X = p.length % 2 == 0,
        Z = (0, v.bG)([U.A], () => U.A.useReducedMotion),
        [Q, J] = r.useState(Date.now()),
        [ee, et] = r.useState(0),
        [en, ei] = r.useState(0),
        [er, ea] = r.useState(!1),
        [el, es] = r.useState(!0),
        eo = r.useRef(Q),
        ed = r.useRef(ee),
        eu = r.useRef(en),
        ec = r.useRef(er),
        e_ = r.useRef(el),
        [eA, eh] = r.useState(z),
        eE = r.useRef(!1);
    function ep() {
        let e = Date.now(),
            t = e - eo.current,
            n = ed.current,
            i = eu.current;
        return ec.current && (et((n += t)), e_.current || ei((i += t))), J(e), [n, i];
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
                    eh(await Promise.all(e));
                } catch (e) {
                    h.A.captureException(e), eh(z);
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
            (eo.current = Q), (ed.current = ee), (eu.current = en), (ec.current = er), (e_.current = el);
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
            (0, B.Vh)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
            let e = Date.now();
            return (
                g.default.track(f.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    g.default.track(f.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, B.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: K.i.DISMISS });
                }
            );
        }, [m, n]),
        (0, i.jsx)(w.EO, {
            "data-migration-pending": !0,
            className: L()(W.zr, W.kv, a),
            transitionState: R,
            "aria-labelledby": q,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(x.h, {
                color: "nitro-pink",
                children: [
                    (0, i.jsx)("div", {
                        className: W.cG,
                        children: (0, i.jsx)(D.J, { "data-migration-pending": !0, onClick: async () => await O() }),
                    }),
                    (0, i.jsxs)(w.$m, {
                        "data-migration-pending": !0,
                        className: W.Qs,
                        children: [
                            "video" === o.type
                                ? (0, i.jsx)(H.A, {
                                      className: L()(W.Ki, d),
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
                                  ? (0, i.jsx)(k.rr, {
                                        className: L()(W.Ki, d),
                                        allowFullScreen: !1,
                                        href: o.href,
                                        thumbnail: o.thumbnail,
                                        video: o.embed,
                                        provider: j.mt.YOUTUBE,
                                        maxWidth: o.embed.width,
                                        maxHeight: o.embed.height,
                                        renderVideoComponent: F.$o,
                                        renderImageComponent: F.LL,
                                        renderLinkComponent: F.bU,
                                        onPlay: () => {
                                            g.default.track(f.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m });
                                        },
                                    })
                                  : "image" === o.type
                                    ? (0, i.jsx)("img", { alt: "", className: L()(W.Ki, d), src: o.src })
                                    : null,
                            null != _ && "" !== _
                                ? (0, i.jsx)(Y.e4, {
                                      text: _,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: W.ON,
                                  })
                                : null,
                            (0, i.jsx)(M.D, { variant: "display-md", className: L()(W.TK, c), children: u }),
                            (0, i.jsxs)(P.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: W.uI,
                                children: [A, E?.()],
                            }),
                            null != C &&
                                "" !== C &&
                                (0, i.jsx)(M.D, { variant: "heading-lg/semibold", className: W.G3, children: C }),
                            p.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: L()(W.IS, { [W.tF]: X }),
                                    children: p.map((e, t) =>
                                        (0, i.jsx)($, { ...e, wideStyle: X }, `${e.header}_${t}`),
                                    ),
                                }),
                            null != T &&
                                "" !== T &&
                                (0, i.jsxs)(P.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: W.ed,
                                    children: [T, S?.()],
                                }),
                            (0, i.jsx)("div", { className: W.UD, children: I() }),
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
        let { isDismissed: e } = (0, A.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
}
function Q(e) {
    let { componentId: t, promotionId: n, renderModalProps: r, properties: a } = e,
        { location: l } = (0, d.p)(),
        { analyticsLocations: s } = (0, _.Ay)(c.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        A = (0, u.Ay)(),
        O = (0, o.q)(A);
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
                { onClose: u } = a,
                c = r.button?.copy ?? N.intl.string(N.t.YScQSF),
                _ = r.button?.buttonAction === p.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                A = (0, T.h)({
                    buttonAction: r.button?.buttonAction,
                    deeplinkSection: r.button?.deeplinkSection,
                    analyticsLocations: l,
                    analyticsLocation: s,
                    onClose: u,
                }),
                h = (0, C.C)(r.helpArticle, r.helpArticleId),
                O =
                    null != h
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(I.Anchor, { className: S.$T, href: h.url, children: h.linkText }),
                                  ],
                              })
                        : void 0,
                L = (0, C.C)(r.disclaimer?.disclaimerHelpArticle, ""),
                y =
                    null != L
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(I.Anchor, { className: S.$T, href: L.url, children: L.linkText }),
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
                    subHeaderExtra: O,
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
                                    cta_type: _,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: d,
                                }),
                                    A();
                            },
                            text: c,
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
            isLightTheme: O,
        });
        return (0, i.jsx)(X, { ...e });
    }
    return (
        h.A.captureMessage(
            `Property type ${a.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
