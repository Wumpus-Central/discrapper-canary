n.d(t, { default: () => X, H: () => J });
var r = n(627968),
    a = n(64700);
if (21552 == n.j) var i = n(65412);
var l = n(554146),
    s = n(875676),
    o = n(366010),
    c = n(212245),
    d = n(736653),
    u = n(793574),
    m = n(688810),
    h = n(826673),
    p = n(38405),
    E = n(403581),
    N = n(232582),
    _ = n(821609),
    A = n(349288),
    g = n(367727),
    M = n(174459),
    x = n(637706),
    f = n(498470),
    T = n(652215),
    b = n(49999),
    L = n(375708),
    y = n(870433);
n(323874), n(14289), n(35956);
var I = n(503698),
    k = n.n(I),
    O = n(562708),
    j = n(877624),
    C = n(17928),
    v = n(815021),
    P = n(812993),
    D = n(534514),
    R = n(834730),
    w = n(935462),
    G = n(315629),
    U = n(775602),
    S = n(139286),
    H = n(175671),
    K = n(259407),
    V = n(915089),
    $ = n(607470),
    F = n(34337),
    z = n(186111),
    Y = n(774774),
    q = n(777135);
let B = [],
    Q = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(P.Lp, { className: k()(q.Tc, n), text: t });
    },
    W = (e) => {
        let { header: t, subHeader: n, subHeaderExtra: a, imageSrc: i, tagText: l, wideStyle: s } = e;
        return (0, r.jsxs)("div", {
            className: k()(q.Vr, { [q.tF]: s }),
            children: [
                null != l ? (0, r.jsx)(Q, { tagText: l, className: q.bX }) : null,
                (0, r.jsx)("img", { alt: "", className: k()(q._n, { [q.tF]: s }), src: i }),
                (0, r.jsxs)("div", {
                    className: k()(q.Zz, { [q.tF]: s }),
                    children: [
                        (0, r.jsx)(D.D, { variant: "heading-md/bold", className: q.Hf, children: t }),
                        (0, r.jsxs)(R.E, { variant: "text-md/medium", color: "text-subtle", children: [n, a?.()] }),
                    ],
                }),
            ],
        });
    };
function Z(e) {
    let {
            componentId: t,
            promotionId: n,
            className: i,
            renderModalProps: s,
            heroArt: o,
            heroArtClassName: c,
            header: d,
            headerClassName: u,
            modalTopPill: m,
            subHeader: h,
            subHeaderExtra: E,
            featureCards: N,
            changeLogId: _,
            button: A,
            body: x,
            disclaimer: f,
            disclaimerExtra: y,
        } = e,
        { onClose: I, transitionState: P } = s,
        Q = (0, V.GV)(),
        Z = N.length % 2 == 0,
        J = (0, C.bG)([U.Ay], () => U.Ay.useReducedMotion),
        [X, ee] = a.useState(Date.now()),
        [et, en] = a.useState(0),
        [er, ea] = a.useState(0),
        [ei, el] = a.useState(!1),
        [es, eo] = a.useState(!0),
        ec = a.useRef(X),
        ed = a.useRef(et),
        eu = a.useRef(er),
        em = a.useRef(ei),
        eh = a.useRef(es),
        [ep, eE] = a.useState(B),
        eN = a.useRef(!1);
    function e_() {
        let e = Date.now(),
            t = e - ec.current,
            n = ed.current,
            r = eu.current;
        return em.current && (en((n += t)), eh.current || ea((r += t))), ee(e), [n, r];
    }
    return (
        (0, S.A)({
            type: O.ImpressionTypes.MODAL,
            name: O.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: j.C.ANNOUNCEMENT_MODAL },
        }),
        a.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== o.type || null == o.subtitles) return;
                    let e = o.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            r = new Blob([n], { type: "text/vtt" }),
                            a = URL.createObjectURL(r);
                        return { ...e, src: a };
                    });
                    eE(await Promise.all(e));
                } catch (e) {
                    p.A.captureException(e), eE(B);
                }
            };
            !0 !== eN.current && e(), (eN.current = !0);
        }, [o, ep]),
        a.useEffect(
            () => () => {
                null != ep &&
                    ep.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ep],
        ),
        a.useEffect(() => {
            (ec.current = X), (ed.current = et), (eu.current = er), (em.current = ei), (eh.current = es);
        }, [X, et, er, ei, es]),
        a.useEffect(
            () => () => {
                if ("video" === o.type || "embed" === o.type) {
                    let [e, t] = e_();
                    M.default.track(T.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: _,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        M.default.track(T.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: _,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [_, o.type],
        ),
        a.useEffect(() => {
            if (z.A.getLayers().includes(T.zgK.COMPONENT_PLAYGROUND)) return;
            (0, g.Vh)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                M.default.track(T.HAw.CHANGE_LOG_OPENED, { change_log_id: _ }),
                () => {
                    M.default.track(T.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: _,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, g.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: b.i.DISMISS });
                }
            );
        }, [_, n]),
        (0, r.jsx)(w.EO, {
            "data-migration-pending": !0,
            className: k()(q.zr, q.kv, i),
            transitionState: P,
            "aria-labelledby": Q,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(G.h, {
                color: "nitro-pink",
                className: q.YV,
                children: [
                    (0, r.jsx)("div", {
                        className: q.cG,
                        children: (0, r.jsx)(v.J, { "data-migration-pending": !0, onClick: async () => await I() }),
                    }),
                    (0, r.jsxs)(w.$m, {
                        "data-migration-pending": !0,
                        className: q.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            "video" === o.type
                                ? (0, r.jsx)($.A, {
                                      className: k()(q.Ki, c),
                                      autoPlay: !J,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: o.src,
                                      poster: o.poster,
                                      onPlay: (e) => {
                                          M.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: _ }),
                                              ee(Date.now()),
                                              el(!0),
                                              eo(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          e_(), eo(e.currentTarget.muted), el(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          e_(), eo(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          e_(), eo(e.currentTarget.muted), el(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children: ep?.map((e) => {
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
                                : "embed" === o.type
                                  ? (0, r.jsx)(H.rr, {
                                        className: k()(q.Ki, c),
                                        allowFullScreen: !1,
                                        href: o.href,
                                        thumbnail: o.thumbnail,
                                        video: o.embed,
                                        provider: K.m.YOUTUBE,
                                        maxWidth: o.embed.width,
                                        maxHeight: o.embed.height,
                                        renderVideoComponent: F.$o,
                                        renderImageComponent: F.LL,
                                        renderLinkComponent: F.bU,
                                        onPlay: () => {
                                            M.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: _ });
                                        },
                                    })
                                  : "image" === o.type
                                    ? (0, r.jsx)("img", { alt: "", className: k()(q.Ki, c), src: o.src })
                                    : null,
                            null != m && "" !== m
                                ? (0, r.jsx)(Y.e4, {
                                      text: m,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: q.ON,
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: q.Z,
                                children: [
                                    (0, r.jsx)(D.D, { variant: "display-md", className: k()(q.TK, u), children: d }),
                                    (0, r.jsxs)(R.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: q.uI,
                                        children: [h, E?.()],
                                    }),
                                ],
                            }),
                            null != x &&
                                "" !== x &&
                                (0, r.jsx)(D.D, { variant: "heading-lg/semibold", className: q.G3, children: x }),
                            N.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: q.IS,
                                    children: N.map((e, t) =>
                                        (0, r.jsx)(W, { ...e, wideStyle: Z }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: q.xQ,
                        children: [
                            A(),
                            null != f &&
                                "" !== f &&
                                (0, r.jsxs)(R.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: q.ed,
                                    children: [f, y?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function J(e) {
    let { promotionId: t, content: n, isPreview: r } = e,
        a = s.m.fromBinary((0, i.A)(n));
    if ("announcementModalVariant1" !== a.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, h.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !r && e ? null : (r && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function X(e) {
    let { componentId: t, promotionId: n, renderModalProps: a, properties: i } = e,
        { location: s } = (0, c.p)(),
        { analyticsLocations: h } = (0, m.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        I = (0, d.Ay)(),
        k = (0, o.q)(I);
    if ("announcementModalVariant1" === i.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    content: a,
                    renderModalProps: i,
                    analyticsLocations: s,
                    analyticsLocation: o,
                    isLightTheme: c,
                } = e,
                d = `AnnouncementModalVariant1_${t}`,
                { onClose: u } = i,
                m = a.button?.copy ?? L.intl.string(L.t.YScQSF),
                h = a.button?.buttonAction === N.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                I = (0, f.h)({
                    buttonAction: a.button?.buttonAction,
                    deeplinkSection: a.button?.deeplinkSection,
                    analyticsLocations: s,
                    analyticsLocation: o,
                    onClose: u,
                }),
                k = (0, x.C)(a.helpArticle, a.helpArticleId),
                O =
                    null != k
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(A.Anchor, { className: y.$T, href: k.url, children: k.linkText }),
                                  ],
                              })
                        : void 0,
                j = (0, x.C)(a.disclaimer?.disclaimerHelpArticle, ""),
                C =
                    null != j
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(A.Anchor, { className: y.$T, href: j.url, children: j.linkText }),
                                  ],
                              })
                        : void 0,
                v = { type: "video", src: c ? a.heroArtVideoLinkLightTheme : a.videoLink };
            return (
                null != a.heroArtVideoSubtitles &&
                    (v.subtitles = a.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== a.heroArtImageLinkDarkTheme || "" !== a.heroArtImageLinkLightTheme) &&
                    (v = { type: "image", src: c ? a.heroArtImageLinkLightTheme : a.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    renderModalProps: i,
                    header: a.header,
                    modalTopPill: a.modalTopPill,
                    subHeader: a.subheader,
                    subHeaderExtra: O,
                    body: a.body,
                    heroArt: v,
                    featureCards: a.featureCards.map((e) => {
                        let t = (0, x.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, r.jsx)(A.Anchor, {
                                                      className: y.$T,
                                                      href: t.url,
                                                      children: t.linkText,
                                                  }),
                                              ],
                                          })
                                    : void 0;
                        return {
                            header: e.header,
                            subHeader: e.body,
                            subHeaderExtra: n,
                            imageSrc: c ? e.imageLinkLightTheme : e.imageLink,
                            tagText: "" !== e.pill ? e.pill : void 0,
                        };
                    }),
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
                                    a.button?.buttonAction === N.dz.OPEN_MARKETING_PAGE &&
                                        (await (0, g.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                                            dismissAction: b.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    p.A.captureException(e);
                                } finally {
                                    I();
                                }
                            };
                        return (0, r.jsx)(_.$, { variant: "expressive", size: "md", onClick: t, text: m, icon: E.t });
                    },
                    disclaimer: a.disclaimer?.disclaimerText !== "" ? a.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: C,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            content: i.properties.announcementModalVariant1,
            renderModalProps: a,
            analyticsLocations: h,
            analyticsLocation: s,
            isLightTheme: k,
        });
        return (0, r.jsx)(Z, { ...e });
    }
    return (
        p.A.captureMessage(
            `Property type ${i.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
