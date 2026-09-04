n.d(t, { default: () => J, H: () => Z });
var r = n(477900),
    a = n(582128),
    o = n(554146),
    i = n(384939),
    l = n(366010),
    s = n(212245),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    m = n(826673),
    _ = n(38405),
    p = n(308588),
    E = n(821609),
    h = n(28863),
    N = n(367727),
    A = n(174459),
    M = n(637706),
    T = n(498470),
    f = n(652215),
    g = n(49999),
    O = n(375708),
    x = n(696918);
n(323874), n(14289), n(35956);
var b = n(503698),
    I = n.n(b),
    L = n(562708),
    y = n(877624),
    R = n(17928),
    v = n(815021),
    C = n(935462),
    D = n(812993),
    k = n(297264),
    P = n(834730),
    j = n(315629),
    S = n(228366),
    w = n(775602),
    G = n(139286),
    U = n(175671),
    K = n(259407),
    H = n(915089),
    V = n(607470),
    F = n(966245),
    $ = n(186111),
    Y = n(774774),
    z = n(209012);
let B = [];
function q(e) {
    let { tagText: t, className: n } = e;
    return (0, r.jsx)(D.Lp, { className: I()(z.Tc, n), text: t });
}
function Q(e) {
    let { header: t, subHeader: n, subHeaderExtra: a, imageSrc: o, tagText: i, wideStyle: l } = e;
    return (0, r.jsxs)("div", {
        className: I()(z.Vr, { [z.tF]: l }),
        children: [
            null != i ? (0, r.jsx)(q, { tagText: i, className: z.bX }) : null,
            (0, r.jsx)("img", { alt: "", className: I()(z._n, { [z.tF]: l }), src: o }),
            (0, r.jsxs)("div", {
                className: I()(z.Zz, { [z.tF]: l }),
                children: [
                    (0, r.jsx)(k.D, { variant: "heading-md/bold", className: z.Hf, children: t }),
                    (0, r.jsxs)(P.E, { variant: "text-md/medium", color: "text-subtle", children: [n, a?.()] }),
                ],
            }),
        ],
    });
}
function W(e) {
    let {
            componentId: t,
            promotionId: n,
            promotion: i,
            className: l,
            renderModalProps: s,
            heroArt: c,
            heroArtClassName: d,
            header: u,
            headerClassName: m,
            modalTopPill: p,
            subHeader: E,
            subHeaderExtra: h,
            featureCards: M,
            changeLogId: T,
            button: x,
            body: b,
            disclaimer: D,
            disclaimerExtra: q,
        } = e,
        { onClose: W, transitionState: Z } = s,
        J = (0, H.GV)(),
        X = M.length % 2 == 0,
        ee = (0, R.bG)([w.Ay], () => w.Ay.useReducedMotion),
        [et, en] = a.useState(Date.now()),
        [er, ea] = a.useState(0),
        [eo, ei] = a.useState(0),
        [el, es] = a.useState(!1),
        [ec, ed] = a.useState(!0),
        eu = a.useRef(et),
        em = a.useRef(er),
        e_ = a.useRef(eo),
        ep = a.useRef(el),
        eE = a.useRef(ec),
        [eh, eN] = a.useState(B),
        eA = a.useRef(!1),
        { promotionKey: eM } = null != i ? i : {};
    (0, G.A)({
        type: L.ImpressionTypes.MODAL,
        name: L.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_id: t, component_type: y.C.ANNOUNCEMENT_MODAL, promotion_id: n },
    });
    let eT = a.useRef(null),
        ef = a.useRef(!1);
    function eg() {
        let e = Date.now(),
            t = e - eu.current,
            n = em.current,
            r = e_.current;
        return ep.current && (ea((n += t)), eE.current || ei((r += t))), en(e), [n, r];
    }
    return (
        a.useEffect(() => {
            let e = eT.current?.getScrollerNode();
            if (null == e) return;
            function r() {
                ef.current ||
                    eT.current?.isScrolledToBottom() !== !0 ||
                    ((ef.current = !0),
                    A.default.track(f.HAw.PREMIUM_MARKETING_COMPONENT_BOTTOM_VIEWED, {
                        component_id: t,
                        component_type: y.C.ANNOUNCEMENT_MODAL,
                        visible_on_mount: eT.current?.isScrolledToTop() ?? !1,
                        promotion_id: n,
                    }));
            }
            let a = new ResizeObserver(r);
            return (
                e.addEventListener("scroll", r, { passive: !0 }),
                a.observe(e),
                r(),
                () => {
                    e.removeEventListener("scroll", r), a.disconnect();
                }
            );
        }, [t, n]),
        a.useEffect(() => {
            async function e() {
                try {
                    if ("video" !== c.type || null == c.subtitles) return;
                    let e = c.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            r = new Blob([n], { type: "text/vtt" }),
                            a = URL.createObjectURL(r);
                        return { ...e, src: a };
                    });
                    eN(await Promise.all(e));
                } catch (e) {
                    _.A.captureException(e), eN(B);
                }
            }
            !0 !== eA.current && e(), (eA.current = !0);
        }, [c, eh]),
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
            (eu.current = et), (em.current = er), (e_.current = eo), (ep.current = el), (eE.current = ec);
        }, [et, er, eo, el, ec]),
        a.useEffect(
            () => () => {
                if ("video" === c.type || "embed" === c.type) {
                    let [e, t] = eg();
                    A.default.track(f.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: T,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        A.default.track(f.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: T,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [T, c.type],
        ),
        a.useEffect(() => {
            if ($.A.getLayers().includes(f.zgK.COMPONENT_PLAYGROUND)) return;
            (0, N.Vh)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, { snowflakeId: n });
            let e = Date.now();
            return (
                A.default.track(f.HAw.CHANGE_LOG_OPENED, { change_log_id: T }),
                () => {
                    A.default.track(f.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: T,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, N.qr)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                            dismissAction: g.i.DISMISS,
                        }),
                        S.h.dispatch({
                            type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                            promotionId: n,
                            promotionKey: eM,
                        });
                }
            );
        }, [T, n, eM]),
        (0, r.jsx)(C.EO, {
            "data-migration-pending": !0,
            className: I()(z.zr, z.kv, l),
            transitionState: Z,
            "aria-labelledby": J,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(j.h, {
                color: "nitro-pink",
                className: z.YV,
                children: [
                    (0, r.jsx)("div", {
                        className: z.cG,
                        children: (0, r.jsx)(v.J, { "data-migration-pending": !0, onClick: async () => await W() }),
                    }),
                    (0, r.jsxs)(C.$m, {
                        "data-migration-pending": !0,
                        className: z.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        scrollerRef: eT,
                        children: [
                            (function () {
                                switch (c.type) {
                                    case "video":
                                        return (0, r.jsx)(V.A, {
                                            className: I()(z.Ki, d),
                                            autoPlay: !ee,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: c.src,
                                            poster: c.poster,
                                            onPlay: (e) => {
                                                A.default.track(f.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: T,
                                                }),
                                                    en(Date.now()),
                                                    es(!0),
                                                    ed(e.currentTarget.muted);
                                            },
                                            onEnded: (e) => {
                                                eg(), ed(e.currentTarget.muted), es(!1);
                                            },
                                            onVolumeChange: (e) => {
                                                eg(), ed(e.currentTarget.muted);
                                            },
                                            onPause: (e) => {
                                                eg(), ed(e.currentTarget.muted), es(!1);
                                            },
                                            disablePictureInPicture: !0,
                                            children: eh?.map((e) => {
                                                let t = (0, O.getLanguages)().find((t) => t.code === e.locale);
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
                                        });
                                    case "embed":
                                        return (0, r.jsx)(U.rr, {
                                            className: I()(z.Ki, d),
                                            allowFullScreen: !1,
                                            href: c.href,
                                            thumbnail: c.thumbnail,
                                            video: c.embed,
                                            provider: K.m.YOUTUBE,
                                            maxWidth: c.embed.width,
                                            maxHeight: c.embed.height,
                                            renderVideoComponent: F.$o,
                                            renderImageComponent: F.LL,
                                            renderLinkComponent: F.bU,
                                            onPlay: () => {
                                                A.default.track(f.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: T,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, r.jsx)("img", { alt: "", className: I()(z.Ki, d), src: c.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != p && "" !== p
                                ? (0, r.jsx)(Y.e4, {
                                      text: p,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: z.ON,
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: z.Z,
                                children: [
                                    (0, r.jsx)(k.D, { variant: "nitro-md", className: I()(z.TK, m), children: u }),
                                    (0, r.jsxs)(P.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: z.uI,
                                        children: [E, h?.()],
                                    }),
                                ],
                            }),
                            null != b &&
                                "" !== b &&
                                (0, r.jsx)(k.D, { variant: "heading-lg/semibold", className: z.G3, children: b }),
                            M.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: z.IS,
                                    children: M.map((e, t) =>
                                        (0, r.jsx)(Q, { ...e, wideStyle: X }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: z.xQ,
                        children: [
                            x(),
                            null != D &&
                                "" !== D &&
                                (0, r.jsxs)(P.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: z.ed,
                                    children: [D, q?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function Z(e) {
    let { promotionId: t, properties: n, isPreview: r } = e,
        a = i.m.clone(n);
    if ("announcementModalVariant1" !== a.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, m.u$)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, t);
        return !r && e ? null : (r && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function J(e) {
    let { componentId: t, promotionId: n, promotion: a, renderModalProps: i, properties: m } = e,
        { location: b } = (0, s.p)(),
        { analyticsLocations: I } = (0, u.Ay)(d.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        L = (0, c.Ay)(),
        y = (0, l.q)(L);
    if ("announcementModalVariant1" === m.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    promotion: a,
                    content: i,
                    renderModalProps: l,
                    analyticsLocations: s,
                    analyticsLocation: c,
                    isLightTheme: d,
                } = e,
                u = `AnnouncementModalVariant1_${t}`,
                { onClose: m } = l,
                b = i.button?.copy ?? O.intl.string(O.t.YScQSF),
                I = i.button?.buttonAction,
                L =
                    I === p.d.OPEN_MARKETING_PAGE
                        ? "jump_to_mkt_button"
                        : I === p.d.OPEN_SOCIAL_LAYER_STOREFRONT
                          ? "jump_to_slayer_storefront_button"
                          : "get_nitro_button",
                y = (0, T.h)({
                    buttonAction: i.button?.buttonAction,
                    deeplinkSection: i.button?.deeplinkSection,
                    applicationId: i.button?.navigableStorefrontApplicationId?.value,
                    analyticsLocations: s,
                    analyticsLocation: c,
                    onClose: m,
                }),
                R = (0, M.C)(i.helpArticle, i.helpArticleId),
                v =
                    null != R
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(h.Anchor, { className: x.$T, href: R.url, children: R.linkText }),
                                  ],
                              })
                        : void 0,
                C = (0, M.C)(i.disclaimer?.disclaimerHelpArticle, ""),
                D =
                    null != C
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(h.Anchor, { className: x.$T, href: C.url, children: C.linkText }),
                                  ],
                              })
                        : void 0,
                k = { type: "video", src: d ? i.heroArtVideoLinkLightTheme : i.videoLink };
            return (
                null != i.heroArtVideoSubtitles &&
                    (k.subtitles = i.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== i.heroArtImageLinkDarkTheme || "" !== i.heroArtImageLinkLightTheme) &&
                    (k = { type: "image", src: d ? i.heroArtImageLinkLightTheme : i.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    promotion: a,
                    renderModalProps: l,
                    header: i.header,
                    modalTopPill: i.modalTopPill,
                    subHeader: i.subheader,
                    subHeaderExtra: v,
                    body: i.body,
                    heroArt: k,
                    featureCards: i.featureCards.map((e) => {
                        let t = (0, M.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, r.jsx)(h.Anchor, {
                                                      className: x.$T,
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
                            imageSrc: d ? e.imageLinkLightTheme : e.imageLink,
                            tagText: "" !== e.pill ? e.pill : void 0,
                        };
                    }),
                    changeLogId: u,
                    button: function () {
                        let e = Date.now();
                        async function t() {
                            A.default.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
                                change_log_id: u,
                                cta_type: L,
                                seconds_open: Math.round((Date.now() - e) / 1e3),
                                target: u,
                            });
                            try {
                                (I === p.d.OPEN_MARKETING_PAGE || I === p.d.OPEN_SOCIAL_LAYER_STOREFRONT) &&
                                    (await (0, N.qr)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                                        dismissAction: g.i.TAKE_ACTION,
                                    }));
                            } catch (e) {
                                _.A.captureException(e);
                            } finally {
                                y();
                            }
                        }
                        let { icon: a } = (0, T.x)({ buttonAction: i.button?.buttonAction });
                        return (0, r.jsx)(E.$, { variant: "expressive", size: "md", onClick: t, text: b, icon: a });
                    },
                    disclaimer: i.disclaimer?.disclaimerText !== "" ? i.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: D,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            promotion: a,
            content: m.properties.announcementModalVariant1,
            renderModalProps: i,
            analyticsLocations: I,
            analyticsLocation: b,
            isLightTheme: y,
        });
        return (0, r.jsx)(W, { ...e });
    }
    return (
        _.A.captureMessage(
            `Property type ${m.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
