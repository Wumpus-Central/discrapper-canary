"use strict";
n.d(t, { default: () => J, H: () => Q });
var i = n(627968),
    r = n(64700),
    s = n(65412),
    a = n(554146),
    o = n(865678),
    l = n(366010),
    u = n(212245),
    c = n(736653),
    d = n(793574),
    _ = n(688810),
    h = n(826673),
    f = n(38405),
    E = n(232582),
    p = n(821609),
    m = n(349288),
    g = n(367727),
    A = n(174459),
    I = n(637706),
    T = n(498470),
    S = n(652215),
    N = n(49999),
    C = n(375708),
    y = n(870433);
n(323874), n(14289), n(35956);
var O = n(503698),
    R = n.n(O),
    v = n(562708),
    b = n(877624),
    L = n(17928),
    D = n(815021),
    w = n(812993),
    P = n(534514),
    M = n(834730),
    x = n(935462),
    U = n(315629),
    k = n(228366),
    G = n(775602),
    V = n(139286),
    F = n(175671),
    B = n(259407),
    H = n(915089),
    j = n(607470),
    W = n(34337),
    Y = n(186111),
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
                    (0, i.jsx)(P.D, { variant: "heading-md/bold", className: $.Hf, children: t }),
                    (0, i.jsxs)(M.E, { variant: "text-md/medium", color: "text-subtle", children: [n, r?.()] }),
                ],
            }),
        ],
    });
}
function X(e) {
    let {
            componentId: t,
            promotionId: n,
            promotion: s,
            className: o,
            renderModalProps: l,
            heroArt: u,
            heroArtClassName: c,
            header: d,
            headerClassName: _,
            modalTopPill: h,
            subHeader: E,
            subHeaderExtra: p,
            featureCards: m,
            changeLogId: I,
            button: T,
            body: y,
            disclaimer: O,
            disclaimerExtra: w,
        } = e,
        { onClose: q, transitionState: X } = l,
        Q = (0, H.GV)(),
        J = m.length % 2 == 0,
        ee = (0, L.bG)([G.Ay], () => G.Ay.useReducedMotion),
        [et, en] = r.useState(Date.now()),
        [ei, er] = r.useState(0),
        [es, ea] = r.useState(0),
        [eo, el] = r.useState(!1),
        [eu, ec] = r.useState(!0),
        ed = r.useRef(et),
        e_ = r.useRef(ei),
        eh = r.useRef(es),
        ef = r.useRef(eo),
        eE = r.useRef(eu),
        [ep, em] = r.useState(z),
        eg = r.useRef(!1),
        { promotionKey: eA } = null != s ? s : {};
    function eI() {
        let e = Date.now(),
            t = e - ed.current,
            n = e_.current,
            i = eh.current;
        return ef.current && (er((n += t)), eE.current || ea((i += t))), en(e), [n, i];
    }
    return (
        (0, V.A)({
            type: v.ImpressionTypes.MODAL,
            name: v.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: b.C.ANNOUNCEMENT_MODAL },
        }),
        r.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== u.type || null == u.subtitles) return;
                    let e = u.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            r = URL.createObjectURL(i);
                        return { ...e, src: r };
                    });
                    em(await Promise.all(e));
                } catch (e) {
                    f.A.captureException(e), em(z);
                }
            };
            !0 !== eg.current && e(), (eg.current = !0);
        }, [u, ep]),
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
            (ed.current = et), (e_.current = ei), (eh.current = es), (ef.current = eo), (eE.current = eu);
        }, [et, ei, es, eo, eu]),
        r.useEffect(
            () => () => {
                if ("video" === u.type || "embed" === u.type) {
                    let [e, t] = eI();
                    A.default.track(S.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: I,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        A.default.track(S.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: I,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [I, u.type],
        ),
        r.useEffect(() => {
            if (Y.A.getLayers().includes(S.zgK.COMPONENT_PLAYGROUND)) return;
            (0, g.Vh)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                A.default.track(S.HAw.CHANGE_LOG_OPENED, { change_log_id: I }),
                () => {
                    A.default.track(S.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: I,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, g.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: N.i.DISMISS }),
                        k.h.dispatch({
                            type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                            promotionId: n,
                            promotionKey: eA,
                        });
                }
            );
        }, [I, n, eA]),
        (0, i.jsx)(x.EO, {
            "data-migration-pending": !0,
            className: R()($.zr, $.kv, o),
            transitionState: X,
            "aria-labelledby": Q,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(U.h, {
                color: "nitro-pink",
                className: $.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: $.cG,
                        children: (0, i.jsx)(D.J, { "data-migration-pending": !0, onClick: async () => await q() }),
                    }),
                    (0, i.jsxs)(x.$m, {
                        "data-migration-pending": !0,
                        className: $.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            (() => {
                                switch (u.type) {
                                    case "video":
                                        return (0, i.jsx)(j.A, {
                                            className: R()($.Ki, c),
                                            autoPlay: !ee,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: u.src,
                                            poster: u.poster,
                                            onPlay: (e) => {
                                                A.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: I,
                                                }),
                                                    en(Date.now()),
                                                    el(!0),
                                                    ec(e.currentTarget.muted);
                                            },
                                            onEnded: (e) => {
                                                eI(), ec(e.currentTarget.muted), el(!1);
                                            },
                                            onVolumeChange: (e) => {
                                                eI(), ec(e.currentTarget.muted);
                                            },
                                            onPause: (e) => {
                                                eI(), ec(e.currentTarget.muted), el(!1);
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
                                        return (0, i.jsx)(F.rr, {
                                            className: R()($.Ki, c),
                                            allowFullScreen: !1,
                                            href: u.href,
                                            thumbnail: u.thumbnail,
                                            video: u.embed,
                                            provider: B.m.YOUTUBE,
                                            maxWidth: u.embed.width,
                                            maxHeight: u.embed.height,
                                            renderVideoComponent: W.$o,
                                            renderImageComponent: W.LL,
                                            renderLinkComponent: W.bU,
                                            onPlay: () => {
                                                A.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: I,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, i.jsx)("img", { alt: "", className: R()($.Ki, c), src: u.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != h && "" !== h
                                ? (0, i.jsx)(K.e4, {
                                      text: h,
                                      colorOptions: K.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: $.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: $.Z,
                                children: [
                                    (0, i.jsx)(P.D, { variant: "display-md", className: R()($.TK, _), children: d }),
                                    (0, i.jsxs)(M.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: $.uI,
                                        children: [E, p?.()],
                                    }),
                                ],
                            }),
                            null != y &&
                                "" !== y &&
                                (0, i.jsx)(P.D, { variant: "heading-lg/semibold", className: $.G3, children: y }),
                            m.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: $.IS,
                                    children: m.map((e, t) =>
                                        (0, i.jsx)(Z, { ...e, wideStyle: J }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: $.xQ,
                        children: [
                            T(),
                            null != O &&
                                "" !== O &&
                                (0, i.jsxs)(M.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: $.ed,
                                    children: [O, w?.()],
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
    let { componentId: t, promotionId: n, promotion: r, renderModalProps: s, properties: o } = e,
        { location: h } = (0, u.p)(),
        { analyticsLocations: O } = (0, _.Ay)(d.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        R = (0, c.Ay)(),
        v = (0, l.q)(R);
    if ("announcementModalVariant1" === o.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    promotion: r,
                    content: s,
                    renderModalProps: o,
                    analyticsLocations: l,
                    analyticsLocation: u,
                    isLightTheme: c,
                } = e,
                d = `AnnouncementModalVariant1_${t}`,
                { onClose: _ } = o,
                h = s.button?.copy ?? C.intl.string(C.t.YScQSF),
                O = s.button?.buttonAction,
                R =
                    O === E.dz.OPEN_MARKETING_PAGE
                        ? "jump_to_mkt_button"
                        : O === E.dz.OPEN_SOCIAL_LAYER_STOREFRONT
                          ? "jump_to_slayer_storefront_button"
                          : "get_nitro_button",
                v = (0, T.h)({
                    buttonAction: s.button?.buttonAction,
                    deeplinkSection: s.button?.deeplinkSection,
                    applicationId: s.button?.navigableStorefrontApplicationId?.value,
                    analyticsLocations: l,
                    analyticsLocation: u,
                    onClose: _,
                }),
                b = (0, I.C)(s.helpArticle, s.helpArticleId),
                L =
                    null != b
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(m.Anchor, { className: y.$T, href: b.url, children: b.linkText }),
                                  ],
                              })
                        : void 0,
                D = (0, I.C)(s.disclaimer?.disclaimerHelpArticle, ""),
                w =
                    null != D
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(m.Anchor, { className: y.$T, href: D.url, children: D.linkText }),
                                  ],
                              })
                        : void 0,
                P = { type: "video", src: c ? s.heroArtVideoLinkLightTheme : s.videoLink };
            return (
                null != s.heroArtVideoSubtitles &&
                    (P.subtitles = s.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== s.heroArtImageLinkDarkTheme || "" !== s.heroArtImageLinkLightTheme) &&
                    (P = { type: "image", src: c ? s.heroArtImageLinkLightTheme : s.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    promotion: r,
                    renderModalProps: o,
                    header: s.header,
                    modalTopPill: s.modalTopPill,
                    subHeader: s.subheader,
                    subHeaderExtra: L,
                    body: s.body,
                    heroArt: P,
                    featureCards: s.featureCards.map((e) => {
                        let t = (0, I.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, i.jsx)(m.Anchor, {
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
                                A.default.track(S.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: d,
                                    cta_type: R,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: d,
                                });
                                try {
                                    (O === E.dz.OPEN_MARKETING_PAGE || O === E.dz.OPEN_SOCIAL_LAYER_STOREFRONT) &&
                                        (await (0, g.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                                            dismissAction: N.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    f.A.captureException(e);
                                } finally {
                                    v();
                                }
                            },
                            { icon: r } = (0, T.x)({ buttonAction: s.button?.buttonAction });
                        return (0, i.jsx)(p.$, { variant: "expressive", size: "md", onClick: t, text: h, icon: r });
                    },
                    disclaimer: s.disclaimer?.disclaimerText !== "" ? s.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: w,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            promotion: r,
            content: o.properties.announcementModalVariant1,
            renderModalProps: s,
            analyticsLocations: O,
            analyticsLocation: h,
            isLightTheme: v,
        });
        return (0, i.jsx)(X, { ...e });
    }
    return (
        f.A.captureMessage(
            `Property type ${o.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
