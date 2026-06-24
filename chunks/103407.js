"use strict";
n.d(t, { default: () => J, H: () => Q });
var i = n(627968),
    r = n(64700),
    s = n(65412),
    a = n(554146),
    o = n(875676),
    l = n(366010),
    u = n(212245),
    c = n(736653),
    d = n(793574),
    _ = n(688810),
    h = n(826673),
    f = n(38405),
    p = n(232582),
    E = n(821609),
    m = n(349288),
    g = n(367727),
    A = n(174459),
    I = n(637706),
    T = n(498470),
    S = n(652215),
    y = n(49999),
    C = n(375708),
    N = n(870433);
n(323874), n(14289), n(35956);
var v = n(503698),
    R = n.n(v),
    O = n(562708),
    b = n(877624),
    D = n(17928),
    L = n(815021),
    w = n(812993),
    M = n(534514),
    P = n(834730),
    x = n(935462),
    k = n(315629),
    U = n(228366),
    G = n(775602),
    F = n(139286),
    V = n(175671),
    B = n(259407),
    j = n(915089),
    H = n(607470),
    Y = n(34337),
    W = n(186111),
    K = n(774774),
    $ = n(777135);
let z = [];
function q(e) {
    let { tagText: t, className: n } = e;
    return (0, i.jsx)(w.Lp, { className: R()($.Tc, n), text: t });
}
function Z(e) {
    let { header: t, subHeader: n, subHeaderExtra: r, imageSrc: s, tagText: a, wideStyle: o } = e;
    return (0, i.jsxs)("div", {
        className: R()($.Vr, { [$.tF]: o }),
        children: [
            null != a ? (0, i.jsx)(q, { tagText: a, className: $.bX }) : null,
            (0, i.jsx)("img", { alt: "", className: R()($._n, { [$.tF]: o }), src: s }),
            (0, i.jsxs)("div", {
                className: R()($.Zz, { [$.tF]: o }),
                children: [
                    (0, i.jsx)(M.D, { variant: "heading-md/bold", className: $.Hf, children: t }),
                    (0, i.jsxs)(P.E, { variant: "text-md/medium", color: "text-subtle", children: [n, r?.()] }),
                ],
            }),
        ],
    });
}
function X(e) {
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
            subHeader: h,
            subHeaderExtra: p,
            featureCards: E,
            changeLogId: m,
            button: I,
            body: T,
            disclaimer: N,
            disclaimerExtra: v,
        } = e,
        { onClose: w, transitionState: q } = o,
        X = (0, j.GV)(),
        Q = E.length % 2 == 0,
        J = (0, D.bG)([G.Ay], () => G.Ay.useReducedMotion),
        [ee, et] = r.useState(Date.now()),
        [en, ei] = r.useState(0),
        [er, es] = r.useState(0),
        [ea, eo] = r.useState(!1),
        [el, eu] = r.useState(!0),
        ec = r.useRef(ee),
        ed = r.useRef(en),
        e_ = r.useRef(er),
        eh = r.useRef(ea),
        ef = r.useRef(el),
        [ep, eE] = r.useState(z),
        em = r.useRef(!1);
    function eg() {
        let e = Date.now(),
            t = e - ec.current,
            n = ed.current,
            i = e_.current;
        return eh.current && (ei((n += t)), ef.current || es((i += t))), et(e), [n, i];
    }
    return (
        (0, F.A)({
            type: O.ImpressionTypes.MODAL,
            name: O.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: b.C.ANNOUNCEMENT_MODAL },
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
                    eE(await Promise.all(e));
                } catch (e) {
                    f.A.captureException(e), eE(z);
                }
            };
            !0 !== em.current && e(), (em.current = !0);
        }, [l, ep]),
        r.useEffect(
            () => () => {
                null != ep &&
                    ep.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ep],
        ),
        r.useEffect(() => {
            (ec.current = ee), (ed.current = en), (e_.current = er), (eh.current = ea), (ef.current = el);
        }, [ee, en, er, ea, el]),
        r.useEffect(
            () => () => {
                if ("video" === l.type || "embed" === l.type) {
                    let [e, t] = eg();
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
            if (W.A.getLayers().includes(S.zgK.COMPONENT_PLAYGROUND)) return;
            (0, g.Vh)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                A.default.track(S.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    A.default.track(S.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, g.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: y.i.DISMISS }),
                        U.h.dispatch({ type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId: n });
                }
            );
        }, [m, n]),
        (0, i.jsx)(x.EO, {
            "data-migration-pending": !0,
            className: R()($.zr, $.kv, s),
            transitionState: q,
            "aria-labelledby": X,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(k.h, {
                color: "nitro-pink",
                className: $.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: $.cG,
                        children: (0, i.jsx)(L.J, { "data-migration-pending": !0, onClick: async () => await w() }),
                    }),
                    (0, i.jsxs)(x.$m, {
                        "data-migration-pending": !0,
                        className: $.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            (() => {
                                switch (l.type) {
                                    case "video":
                                        return (0, i.jsx)(H.A, {
                                            className: R()($.Ki, u),
                                            autoPlay: !J,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: l.src,
                                            poster: l.poster,
                                            onPlay: (e) => {
                                                A.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: m,
                                                }),
                                                    et(Date.now()),
                                                    eo(!0),
                                                    eu(e.currentTarget.muted);
                                            },
                                            onEnded: (e) => {
                                                eg(), eu(e.currentTarget.muted), eo(!1);
                                            },
                                            onVolumeChange: (e) => {
                                                eg(), eu(e.currentTarget.muted);
                                            },
                                            onPause: (e) => {
                                                eg(), eu(e.currentTarget.muted), eo(!1);
                                            },
                                            disablePictureInPicture: !0,
                                            children: ep?.map((e) => {
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
                                        });
                                    case "embed":
                                        return (0, i.jsx)(V.rr, {
                                            className: R()($.Ki, u),
                                            allowFullScreen: !1,
                                            href: l.href,
                                            thumbnail: l.thumbnail,
                                            video: l.embed,
                                            provider: B.m.YOUTUBE,
                                            maxWidth: l.embed.width,
                                            maxHeight: l.embed.height,
                                            renderVideoComponent: Y.$o,
                                            renderImageComponent: Y.LL,
                                            renderLinkComponent: Y.bU,
                                            onPlay: () => {
                                                A.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: m,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, i.jsx)("img", { alt: "", className: R()($.Ki, u), src: l.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != _ && "" !== _
                                ? (0, i.jsx)(K.e4, {
                                      text: _,
                                      colorOptions: K.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: $.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: $.Z,
                                children: [
                                    (0, i.jsx)(M.D, { variant: "display-md", className: R()($.TK, d), children: c }),
                                    (0, i.jsxs)(P.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: $.uI,
                                        children: [h, p?.()],
                                    }),
                                ],
                            }),
                            null != T &&
                                "" !== T &&
                                (0, i.jsx)(M.D, { variant: "heading-lg/semibold", className: $.G3, children: T }),
                            E.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: $.IS,
                                    children: E.map((e, t) =>
                                        (0, i.jsx)(Z, { ...e, wideStyle: Q }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: $.xQ,
                        children: [
                            I(),
                            null != N &&
                                "" !== N &&
                                (0, i.jsxs)(P.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: $.ed,
                                    children: [N, v?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function Q(e) {
    let { promotionId: t, content: n, isPreview: i } = e,
        r = o.m.fromBinary((0, s.A)(n));
    if ("announcementModalVariant1" !== r.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, h.u$)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
}
function J(e) {
    let { componentId: t, promotionId: n, renderModalProps: r, properties: s } = e,
        { location: o } = (0, u.p)(),
        { analyticsLocations: h } = (0, _.Ay)(d.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        v = (0, c.Ay)(),
        R = (0, l.q)(v);
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
                h = r.button?.buttonAction,
                v =
                    h === p.dz.OPEN_MARKETING_PAGE
                        ? "jump_to_mkt_button"
                        : h === p.dz.OPEN_SOCIAL_LAYER_STOREFRONT
                          ? "jump_to_slayer_storefront_button"
                          : "get_nitro_button",
                R = (0, T.h)({
                    buttonAction: r.button?.buttonAction,
                    deeplinkSection: r.button?.deeplinkSection,
                    applicationId: r.button?.navigableStorefrontApplicationId?.value,
                    analyticsLocations: o,
                    analyticsLocation: l,
                    onClose: d,
                }),
                O = (0, I.C)(r.helpArticle, r.helpArticleId),
                b =
                    null != O
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(m.Anchor, { className: N.$T, href: O.url, children: O.linkText }),
                                  ],
                              })
                        : void 0,
                D = (0, I.C)(r.disclaimer?.disclaimerHelpArticle, ""),
                L =
                    null != D
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(m.Anchor, { className: N.$T, href: D.url, children: D.linkText }),
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
                    featureCards: r.featureCards.map((e) => {
                        let t = (0, I.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, i.jsx)(m.Anchor, {
                                                      className: N.$T,
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
                            imageSrc: u ? e.imageLinkLightTheme : e.imageLink,
                            tagText: "" !== e.pill ? e.pill : void 0,
                        };
                    }),
                    changeLogId: c,
                    button: () => {
                        let e = Date.now(),
                            t = async () => {
                                A.default.track(S.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: c,
                                    cta_type: v,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: c,
                                });
                                try {
                                    (h === p.dz.OPEN_MARKETING_PAGE || h === p.dz.OPEN_SOCIAL_LAYER_STOREFRONT) &&
                                        (await (0, g.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                                            dismissAction: y.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    f.A.captureException(e);
                                } finally {
                                    R();
                                }
                            },
                            { icon: s } = (0, T.x)({ buttonAction: r.button?.buttonAction });
                        return (0, i.jsx)(E.$, { variant: "expressive", size: "md", onClick: t, text: _, icon: s });
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
            analyticsLocations: h,
            analyticsLocation: o,
            isLightTheme: R,
        });
        return (0, i.jsx)(X, { ...e });
    }
    return (
        f.A.captureMessage(
            `Property type ${s.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
