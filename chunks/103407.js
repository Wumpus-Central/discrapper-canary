"use strict";
n.d(t, { default: () => Q, H: () => X });
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
    U = n(775602),
    G = n(139286),
    F = n(175671),
    V = n(259407),
    B = n(915089),
    j = n(607470),
    H = n(34337),
    Y = n(186111),
    W = n(774774),
    K = n(777135);
let $ = [];
function z(e) {
    let { tagText: t, className: n } = e;
    return (0, i.jsx)(w.Lp, { className: R()(K.Tc, n), text: t });
}
function q(e) {
    let { header: t, subHeader: n, subHeaderExtra: r, imageSrc: s, tagText: a, wideStyle: o } = e;
    return (0, i.jsxs)("div", {
        className: R()(K.Vr, { [K.tF]: o }),
        children: [
            null != a ? (0, i.jsx)(z, { tagText: a, className: K.bX }) : null,
            (0, i.jsx)("img", { alt: "", className: R()(K._n, { [K.tF]: o }), src: s }),
            (0, i.jsxs)("div", {
                className: R()(K.Zz, { [K.tF]: o }),
                children: [
                    (0, i.jsx)(M.D, { variant: "heading-md/bold", className: K.Hf, children: t }),
                    (0, i.jsxs)(P.E, { variant: "text-md/medium", color: "text-subtle", children: [n, r?.()] }),
                ],
            }),
        ],
    });
}
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
            subHeader: h,
            subHeaderExtra: p,
            featureCards: E,
            changeLogId: m,
            button: I,
            body: T,
            disclaimer: N,
            disclaimerExtra: v,
        } = e,
        { onClose: w, transitionState: z } = o,
        Z = (0, B.GV)(),
        X = E.length % 2 == 0,
        Q = (0, D.bG)([U.Ay], () => U.Ay.useReducedMotion),
        [J, ee] = r.useState(Date.now()),
        [et, en] = r.useState(0),
        [ei, er] = r.useState(0),
        [es, ea] = r.useState(!1),
        [eo, el] = r.useState(!0),
        eu = r.useRef(J),
        ec = r.useRef(et),
        ed = r.useRef(ei),
        e_ = r.useRef(es),
        eh = r.useRef(eo),
        [ef, ep] = r.useState($),
        eE = r.useRef(!1);
    function em() {
        let e = Date.now(),
            t = e - eu.current,
            n = ec.current,
            i = ed.current;
        return e_.current && (en((n += t)), eh.current || er((i += t))), ee(e), [n, i];
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
                    if ("video" !== l.type || null == l.subtitles) return;
                    let e = l.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            r = URL.createObjectURL(i);
                        return { ...e, src: r };
                    });
                    ep(await Promise.all(e));
                } catch (e) {
                    f.A.captureException(e), ep($);
                }
            };
            !0 !== eE.current && e(), (eE.current = !0);
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
            (eu.current = J), (ec.current = et), (ed.current = ei), (e_.current = es), (eh.current = eo);
        }, [J, et, ei, es, eo]),
        r.useEffect(
            () => () => {
                if ("video" === l.type || "embed" === l.type) {
                    let [e, t] = em();
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
            if (Y.A.getLayers().includes(S.zgK.COMPONENT_PLAYGROUND)) return;
            (0, g.Vh)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                A.default.track(S.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    A.default.track(S.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, g.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: y.i.DISMISS });
                }
            );
        }, [m, n]),
        (0, i.jsx)(x.EO, {
            "data-migration-pending": !0,
            className: R()(K.zr, K.kv, s),
            transitionState: z,
            "aria-labelledby": Z,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(k.h, {
                color: "nitro-pink",
                className: K.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: K.cG,
                        children: (0, i.jsx)(L.J, { "data-migration-pending": !0, onClick: async () => await w() }),
                    }),
                    (0, i.jsxs)(x.$m, {
                        "data-migration-pending": !0,
                        className: K.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            (() => {
                                switch (l.type) {
                                    case "video":
                                        return (0, i.jsx)(j.A, {
                                            className: R()(K.Ki, u),
                                            autoPlay: !Q,
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
                                                    ee(Date.now()),
                                                    ea(!0),
                                                    el(e.currentTarget.muted);
                                            },
                                            onEnded: (e) => {
                                                em(), el(e.currentTarget.muted), ea(!1);
                                            },
                                            onVolumeChange: (e) => {
                                                em(), el(e.currentTarget.muted);
                                            },
                                            onPause: (e) => {
                                                em(), el(e.currentTarget.muted), ea(!1);
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
                                        });
                                    case "embed":
                                        return (0, i.jsx)(F.rr, {
                                            className: R()(K.Ki, u),
                                            allowFullScreen: !1,
                                            href: l.href,
                                            thumbnail: l.thumbnail,
                                            video: l.embed,
                                            provider: V.m.YOUTUBE,
                                            maxWidth: l.embed.width,
                                            maxHeight: l.embed.height,
                                            renderVideoComponent: H.$o,
                                            renderImageComponent: H.LL,
                                            renderLinkComponent: H.bU,
                                            onPlay: () => {
                                                A.default.track(S.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: m,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, i.jsx)("img", { alt: "", className: R()(K.Ki, u), src: l.src });
                                    default:
                                        return null;
                                }
                            })(),
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
                                    (0, i.jsx)(M.D, { variant: "display-md", className: R()(K.TK, d), children: c }),
                                    (0, i.jsxs)(P.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: K.uI,
                                        children: [h, p?.()],
                                    }),
                                ],
                            }),
                            null != T &&
                                "" !== T &&
                                (0, i.jsx)(M.D, { variant: "heading-lg/semibold", className: K.G3, children: T }),
                            E.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: K.IS,
                                    children: E.map((e, t) =>
                                        (0, i.jsx)(q, { ...e, wideStyle: X }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: K.xQ,
                        children: [
                            I(),
                            null != N &&
                                "" !== N &&
                                (0, i.jsxs)(P.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: K.ed,
                                    children: [N, v?.()],
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
        let { isDismissed: e } = (0, h.u$)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (r.properties.announcementModalVariant1.dismissKey = ""), r);
    }
}
function Q(e) {
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
        return (0, i.jsx)(Z, { ...e });
    }
    return (
        f.A.captureMessage(
            `Property type ${s.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
