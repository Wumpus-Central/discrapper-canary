"use strict";
n.d(t, { default: () => J, H: () => Q });
var i = n(627968),
    r = n(64700),
    a = n(65412),
    s = n(554146),
    l = n(934661),
    o = n(366010),
    d = n(212245),
    c = n(736653),
    u = n(793574),
    _ = n(688810),
    E = n(826673),
    A = n(38405),
    h = n(232582),
    I = n(821609),
    f = n(349288),
    p = n(367727),
    T = n(174459),
    m = n(637706),
    g = n(498470),
    S = n(652215),
    N = n(49999),
    C = n(375708),
    R = n(870433);
n(323874), n(14289), n(35956);
var O = n(503698),
    L = n.n(O),
    D = n(562708),
    y = n(877624),
    v = n(17928),
    b = n(815021),
    M = n(812993),
    P = n(297264),
    U = n(834730),
    w = n(935462),
    G = n(315629),
    x = n(228366),
    k = n(775602),
    F = n(139286),
    V = n(175671),
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
    return (0, i.jsx)(M.Lp, { className: L()($.Tc, n), text: t });
}
function Z(e) {
    let { header: t, subHeader: n, subHeaderExtra: r, imageSrc: a, tagText: s, wideStyle: l } = e;
    return (0, i.jsxs)("div", {
        className: L()($.Vr, { [$.tF]: l }),
        children: [
            null != s ? (0, i.jsx)(q, { tagText: s, className: $.bX }) : null,
            (0, i.jsx)("img", { alt: "", className: L()($._n, { [$.tF]: l }), src: a }),
            (0, i.jsxs)("div", {
                className: L()($.Zz, { [$.tF]: l }),
                children: [
                    (0, i.jsx)(P.D, { variant: "heading-md/bold", className: $.Hf, children: t }),
                    (0, i.jsxs)(U.E, { variant: "text-md/medium", color: "text-subtle", children: [n, r?.()] }),
                ],
            }),
        ],
    });
}
function X(e) {
    let {
            componentId: t,
            promotionId: n,
            promotion: a,
            className: l,
            renderModalProps: o,
            heroArt: d,
            heroArtClassName: c,
            header: u,
            headerClassName: _,
            modalTopPill: E,
            subHeader: h,
            subHeaderExtra: I,
            featureCards: f,
            changeLogId: m,
            button: g,
            body: R,
            disclaimer: O,
            disclaimerExtra: M,
        } = e,
        { onClose: q, transitionState: X } = o,
        Q = (0, H.GV)(),
        J = f.length % 2 == 0,
        ee = (0, v.bG)([k.Ay], () => k.Ay.useReducedMotion),
        [et, en] = r.useState(Date.now()),
        [ei, er] = r.useState(0),
        [ea, es] = r.useState(0),
        [el, eo] = r.useState(!1),
        [ed, ec] = r.useState(!0),
        eu = r.useRef(et),
        e_ = r.useRef(ei),
        eE = r.useRef(ea),
        eA = r.useRef(el),
        eh = r.useRef(ed),
        [eI, ef] = r.useState(z),
        ep = r.useRef(!1),
        { promotionKey: eT } = null != a ? a : {};
    function em() {
        let e = Date.now(),
            t = e - eu.current,
            n = e_.current,
            i = eE.current;
        return eA.current && (er((n += t)), eh.current || es((i += t))), en(e), [n, i];
    }
    return (
        (0, F.A)({
            type: D.ImpressionTypes.MODAL,
            name: D.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: y.C.ANNOUNCEMENT_MODAL },
        }),
        r.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== d.type || null == d.subtitles) return;
                    let e = d.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            r = URL.createObjectURL(i);
                        return { ...e, src: r };
                    });
                    ef(await Promise.all(e));
                } catch (e) {
                    A.A.captureException(e), ef(z);
                }
            };
            !0 !== ep.current && e(), (ep.current = !0);
        }, [d, eI]),
        r.useEffect(
            () => () => {
                null != eI &&
                    eI.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eI],
        ),
        r.useEffect(() => {
            (eu.current = et), (e_.current = ei), (eE.current = ea), (eA.current = el), (eh.current = ed);
        }, [et, ei, ea, el, ed]),
        r.useEffect(
            () => () => {
                if ("video" === d.type || "embed" === d.type) {
                    let [e, t] = em();
                    T.default.track(S.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: m,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        T.default.track(S.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: m,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [m, d.type],
        ),
        r.useEffect(() => {
            if (Y.A.getLayers().includes(S.zgK.COMPONENT_PLAYGROUND)) return;
            (0, p.Vh)(s.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, { snowflakeId: n });
            let e = Date.now();
            return (
                T.default.track(S.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    T.default.track(S.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, p.qr)(s.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                            dismissAction: N.i.DISMISS,
                        }),
                        x.h.dispatch({
                            type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                            promotionId: n,
                            promotionKey: eT,
                        });
                }
            );
        }, [m, n, eT]),
        (0, i.jsx)(w.EO, {
            "data-migration-pending": !0,
            className: L()($.zr, $.kv, l),
            transitionState: X,
            "aria-labelledby": Q,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(G.h, {
                color: "nitro-pink",
                className: $.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: $.cG,
                        children: (0, i.jsx)(b.J, { "data-migration-pending": !0, onClick: async () => await q() }),
                    }),
                    (0, i.jsxs)(w.$m, {
                        "data-migration-pending": !0,
                        className: $.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            (() => {
                                switch (d.type) {
                                    case "video":
                                        return (0, i.jsx)(j.A, {
                                            className: L()($.Ki, c),
                                            autoPlay: !ee,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: d.src,
                                            poster: d.poster,
                                            onPlay: (e) => {
                                                T.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: m,
                                                }),
                                                    en(Date.now()),
                                                    eo(!0),
                                                    ec(e.currentTarget.muted);
                                            },
                                            onEnded: (e) => {
                                                em(), ec(e.currentTarget.muted), eo(!1);
                                            },
                                            onVolumeChange: (e) => {
                                                em(), ec(e.currentTarget.muted);
                                            },
                                            onPause: (e) => {
                                                em(), ec(e.currentTarget.muted), eo(!1);
                                            },
                                            disablePictureInPicture: !0,
                                            children: eI?.map((e) => {
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
                                            className: L()($.Ki, c),
                                            allowFullScreen: !1,
                                            href: d.href,
                                            thumbnail: d.thumbnail,
                                            video: d.embed,
                                            provider: B.m.YOUTUBE,
                                            maxWidth: d.embed.width,
                                            maxHeight: d.embed.height,
                                            renderVideoComponent: W.$o,
                                            renderImageComponent: W.LL,
                                            renderLinkComponent: W.bU,
                                            onPlay: () => {
                                                T.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: m,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, i.jsx)("img", { alt: "", className: L()($.Ki, c), src: d.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != E && "" !== E
                                ? (0, i.jsx)(K.e4, {
                                      text: E,
                                      colorOptions: K.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: $.ON,
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: $.Z,
                                children: [
                                    (0, i.jsx)(P.D, { variant: "display-md", className: L()($.TK, _), children: u }),
                                    (0, i.jsxs)(U.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: $.uI,
                                        children: [h, I?.()],
                                    }),
                                ],
                            }),
                            null != R &&
                                "" !== R &&
                                (0, i.jsx)(P.D, { variant: "heading-lg/semibold", className: $.G3, children: R }),
                            f.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: $.IS,
                                    children: f.map((e, t) =>
                                        (0, i.jsx)(Z, { ...e, wideStyle: J }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: $.xQ,
                        children: [
                            g(),
                            null != O &&
                                "" !== O &&
                                (0, i.jsxs)(U.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: $.ed,
                                    children: [O, M?.()],
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
        r = l.m.fromBinary((0, a.A)(n));
    if ("announcementModalVariant1" !== r.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, E.u$)(s.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, t);
        return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
}
function J(e) {
    let { componentId: t, promotionId: n, promotion: r, renderModalProps: a, properties: l } = e,
        { location: E } = (0, d.p)(),
        { analyticsLocations: O } = (0, _.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        L = (0, c.Ay)(),
        D = (0, o.q)(L);
    if ("announcementModalVariant1" === l.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    promotion: r,
                    content: a,
                    renderModalProps: l,
                    analyticsLocations: o,
                    analyticsLocation: d,
                    isLightTheme: c,
                } = e,
                u = `AnnouncementModalVariant1_${t}`,
                { onClose: _ } = l,
                E = a.button?.copy ?? C.intl.string(C.t.YScQSF),
                O = a.button?.buttonAction,
                L =
                    O === h.dz.OPEN_MARKETING_PAGE
                        ? "jump_to_mkt_button"
                        : O === h.dz.OPEN_SOCIAL_LAYER_STOREFRONT
                          ? "jump_to_slayer_storefront_button"
                          : "get_nitro_button",
                D = (0, g.h)({
                    buttonAction: a.button?.buttonAction,
                    deeplinkSection: a.button?.deeplinkSection,
                    applicationId: a.button?.navigableStorefrontApplicationId?.value,
                    analyticsLocations: o,
                    analyticsLocation: d,
                    onClose: _,
                }),
                y = (0, m.C)(a.helpArticle, a.helpArticleId),
                v =
                    null != y
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(f.Anchor, { className: R.$T, href: y.url, children: y.linkText }),
                                  ],
                              })
                        : void 0,
                b = (0, m.C)(a.disclaimer?.disclaimerHelpArticle, ""),
                M =
                    null != b
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(f.Anchor, { className: R.$T, href: b.url, children: b.linkText }),
                                  ],
                              })
                        : void 0,
                P = { type: "video", src: c ? a.heroArtVideoLinkLightTheme : a.videoLink };
            return (
                null != a.heroArtVideoSubtitles &&
                    (P.subtitles = a.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== a.heroArtImageLinkDarkTheme || "" !== a.heroArtImageLinkLightTheme) &&
                    (P = { type: "image", src: c ? a.heroArtImageLinkLightTheme : a.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    promotion: r,
                    renderModalProps: l,
                    header: a.header,
                    modalTopPill: a.modalTopPill,
                    subHeader: a.subheader,
                    subHeaderExtra: v,
                    body: a.body,
                    heroArt: P,
                    featureCards: a.featureCards.map((e) => {
                        let t = (0, m.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, i.jsx)(f.Anchor, {
                                                      className: R.$T,
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
                    changeLogId: u,
                    button: () => {
                        let e = Date.now(),
                            t = async () => {
                                T.default.track(S.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: u,
                                    cta_type: L,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: u,
                                });
                                try {
                                    (O === h.dz.OPEN_MARKETING_PAGE || O === h.dz.OPEN_SOCIAL_LAYER_STOREFRONT) &&
                                        (await (0, p.qr)(s.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                                            dismissAction: N.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    A.A.captureException(e);
                                } finally {
                                    D();
                                }
                            },
                            { icon: r } = (0, g.x)({ buttonAction: a.button?.buttonAction });
                        return (0, i.jsx)(I.$, { variant: "expressive", size: "md", onClick: t, text: E, icon: r });
                    },
                    disclaimer: a.disclaimer?.disclaimerText !== "" ? a.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: M,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            promotion: r,
            content: l.properties.announcementModalVariant1,
            renderModalProps: a,
            analyticsLocations: O,
            analyticsLocation: E,
            isLightTheme: D,
        });
        return (0, i.jsx)(X, { ...e });
    }
    return (
        A.A.captureMessage(
            `Property type ${l.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
l`),null}
