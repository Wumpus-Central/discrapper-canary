n.d(t, { default: () => X, H: () => J });
var r = n(627968),
    a = n(64700);
if (21552 == n.j) var o = n(65412);
var i = n(554146),
    l = n(934661),
    s = n(366010),
    c = n(212245),
    d = n(736653),
    u = n(793574),
    m = n(688810),
    _ = n(826673),
    p = n(38405),
    E = n(232582),
    h = n(821609),
    N = n(349288),
    A = n(367727),
    M = n(174459),
    f = n(637706),
    T = n(498470),
    g = n(652215),
    O = n(49999),
    x = n(375708),
    b = n(891945);
n(323874), n(14289), n(35956);
var I = n(503698),
    L = n.n(I),
    y = n(562708),
    v = n(877624),
    R = n(17928),
    C = n(815021),
    D = n(935462),
    k = n(812993),
    j = n(297264),
    P = n(834730),
    S = n(315629),
    w = n(228366),
    G = n(775602),
    U = n(139286),
    K = n(175671),
    H = n(259407),
    V = n(915089),
    F = n(607470),
    $ = n(34337),
    z = n(186111),
    Y = n(774774),
    B = n(628327);
let q = [];
function Q(e) {
    let { tagText: t, className: n } = e;
    return (0, r.jsx)(k.Lp, { className: L()(B.Tc, n), text: t });
}
function W(e) {
    let { header: t, subHeader: n, subHeaderExtra: a, imageSrc: o, tagText: i, wideStyle: l } = e;
    return (0, r.jsxs)("div", {
        className: L()(B.Vr, { [B.tF]: l }),
        children: [
            null != i ? (0, r.jsx)(Q, { tagText: i, className: B.bX }) : null,
            (0, r.jsx)("img", { alt: "", className: L()(B._n, { [B.tF]: l }), src: o }),
            (0, r.jsxs)("div", {
                className: L()(B.Zz, { [B.tF]: l }),
                children: [
                    (0, r.jsx)(j.D, { variant: "heading-md/bold", className: B.Hf, children: t }),
                    (0, r.jsxs)(P.E, { variant: "text-md/medium", color: "text-subtle", children: [n, a?.()] }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let {
            componentId: t,
            promotionId: n,
            promotion: o,
            className: l,
            renderModalProps: s,
            heroArt: c,
            heroArtClassName: d,
            header: u,
            headerClassName: m,
            modalTopPill: _,
            subHeader: E,
            subHeaderExtra: h,
            featureCards: N,
            changeLogId: f,
            button: T,
            body: b,
            disclaimer: I,
            disclaimerExtra: k,
        } = e,
        { onClose: Q, transitionState: Z } = s,
        J = (0, V.GV)(),
        X = N.length % 2 == 0,
        ee = (0, R.bG)([G.Ay], () => G.Ay.useReducedMotion),
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
        [eh, eN] = a.useState(q),
        eA = a.useRef(!1),
        { promotionKey: eM } = null != o ? o : {};
    (0, U.A)({
        type: y.ImpressionTypes.MODAL,
        name: y.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_id: t, component_type: v.C.ANNOUNCEMENT_MODAL, promotion_id: n },
    });
    let ef = a.useRef(null),
        eT = a.useRef(!1);
    function eg() {
        let e = Date.now(),
            t = e - eu.current,
            n = em.current,
            r = e_.current;
        return ep.current && (ea((n += t)), eE.current || ei((r += t))), en(e), [n, r];
    }
    return (
        a.useEffect(() => {
            let e = ef.current?.getScrollerNode();
            if (null == e) return;
            function r() {
                eT.current ||
                    ef.current?.isScrolledToBottom() !== !0 ||
                    ((eT.current = !0),
                    M.default.track(g.HAw.PREMIUM_MARKETING_COMPONENT_BOTTOM_VIEWED, {
                        component_id: t,
                        component_type: v.C.ANNOUNCEMENT_MODAL,
                        visible_on_mount: ef.current?.isScrolledToTop() ?? !1,
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
                    p.A.captureException(e), eN(q);
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
                    M.default.track(g.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: f,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        M.default.track(g.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: f,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [f, c.type],
        ),
        a.useEffect(() => {
            if (z.A.getLayers().includes(g.zgK.COMPONENT_PLAYGROUND)) return;
            (0, A.Vh)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, { snowflakeId: n });
            let e = Date.now();
            return (
                M.default.track(g.HAw.CHANGE_LOG_OPENED, { change_log_id: f }),
                () => {
                    M.default.track(g.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: f,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, A.qr)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                            dismissAction: O.i.DISMISS,
                        }),
                        w.h.dispatch({
                            type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                            promotionId: n,
                            promotionKey: eM,
                        });
                }
            );
        }, [f, n, eM]),
        (0, r.jsx)(D.EO, {
            "data-migration-pending": !0,
            className: L()(B.zr, B.kv, l),
            transitionState: Z,
            "aria-labelledby": J,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(S.h, {
                color: "nitro-pink",
                className: B.YV,
                children: [
                    (0, r.jsx)("div", {
                        className: B.cG,
                        children: (0, r.jsx)(C.J, { "data-migration-pending": !0, onClick: async () => await Q() }),
                    }),
                    (0, r.jsxs)(D.$m, {
                        "data-migration-pending": !0,
                        className: B.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        scrollerRef: ef,
                        children: [
                            (function () {
                                switch (c.type) {
                                    case "video":
                                        return (0, r.jsx)(F.A, {
                                            className: L()(B.Ki, d),
                                            autoPlay: !ee,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: c.src,
                                            poster: c.poster,
                                            onPlay: (e) => {
                                                M.default.track(g.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: f,
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
                                                let t = (0, x.getLanguages)().find((t) => t.code === e.locale);
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
                                        return (0, r.jsx)(K.rr, {
                                            className: L()(B.Ki, d),
                                            allowFullScreen: !1,
                                            href: c.href,
                                            thumbnail: c.thumbnail,
                                            video: c.embed,
                                            provider: H.m.YOUTUBE,
                                            maxWidth: c.embed.width,
                                            maxHeight: c.embed.height,
                                            renderVideoComponent: $.$o,
                                            renderImageComponent: $.LL,
                                            renderLinkComponent: $.bU,
                                            onPlay: () => {
                                                M.default.track(g.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: f,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, r.jsx)("img", { alt: "", className: L()(B.Ki, d), src: c.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != _ && "" !== _
                                ? (0, r.jsx)(Y.e4, {
                                      text: _,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: B.ON,
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: B.Z,
                                children: [
                                    (0, r.jsx)(j.D, { variant: "display-md", className: L()(B.TK, m), children: u }),
                                    (0, r.jsxs)(P.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: B.uI,
                                        children: [E, h?.()],
                                    }),
                                ],
                            }),
                            null != b &&
                                "" !== b &&
                                (0, r.jsx)(j.D, { variant: "heading-lg/semibold", className: B.G3, children: b }),
                            N.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: B.IS,
                                    children: N.map((e, t) =>
                                        (0, r.jsx)(W, { ...e, wideStyle: X }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: B.xQ,
                        children: [
                            T(),
                            null != I &&
                                "" !== I &&
                                (0, r.jsxs)(P.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: B.ed,
                                    children: [I, k?.()],
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
        a = l.m.fromBinary((0, o.A)(n));
    if ("announcementModalVariant1" !== a.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, _.u$)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, t);
        return !r && e ? null : (r && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function X(e) {
    let { componentId: t, promotionId: n, promotion: a, renderModalProps: o, properties: l } = e,
        { location: _ } = (0, c.p)(),
        { analyticsLocations: I } = (0, m.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        L = (0, d.Ay)(),
        y = (0, s.q)(L);
    if ("announcementModalVariant1" === l.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    promotion: a,
                    content: o,
                    renderModalProps: l,
                    analyticsLocations: s,
                    analyticsLocation: c,
                    isLightTheme: d,
                } = e,
                u = `AnnouncementModalVariant1_${t}`,
                { onClose: m } = l,
                _ = o.button?.copy ?? x.intl.string(x.t.YScQSF),
                I = o.button?.buttonAction,
                L =
                    I === E.dz.OPEN_MARKETING_PAGE
                        ? "jump_to_mkt_button"
                        : I === E.dz.OPEN_SOCIAL_LAYER_STOREFRONT
                          ? "jump_to_slayer_storefront_button"
                          : "get_nitro_button",
                y = (0, T.h)({
                    buttonAction: o.button?.buttonAction,
                    deeplinkSection: o.button?.deeplinkSection,
                    applicationId: o.button?.navigableStorefrontApplicationId?.value,
                    analyticsLocations: s,
                    analyticsLocation: c,
                    onClose: m,
                }),
                v = (0, f.C)(o.helpArticle, o.helpArticleId),
                R =
                    null != v
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(N.Anchor, { className: b.$T, href: v.url, children: v.linkText }),
                                  ],
                              })
                        : void 0,
                C = (0, f.C)(o.disclaimer?.disclaimerHelpArticle, ""),
                D =
                    null != C
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(N.Anchor, { className: b.$T, href: C.url, children: C.linkText }),
                                  ],
                              })
                        : void 0,
                k = { type: "video", src: d ? o.heroArtVideoLinkLightTheme : o.videoLink };
            return (
                null != o.heroArtVideoSubtitles &&
                    (k.subtitles = o.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== o.heroArtImageLinkDarkTheme || "" !== o.heroArtImageLinkLightTheme) &&
                    (k = { type: "image", src: d ? o.heroArtImageLinkLightTheme : o.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    promotion: a,
                    renderModalProps: l,
                    header: o.header,
                    modalTopPill: o.modalTopPill,
                    subHeader: o.subheader,
                    subHeaderExtra: R,
                    body: o.body,
                    heroArt: k,
                    featureCards: o.featureCards.map((e) => {
                        let t = (0, f.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, r.jsx)(N.Anchor, {
                                                      className: b.$T,
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
                            M.default.track(g.HAw.CHANGE_LOG_CTA_CLICKED, {
                                change_log_id: u,
                                cta_type: L,
                                seconds_open: Math.round((Date.now() - e) / 1e3),
                                target: u,
                            });
                            try {
                                (I === E.dz.OPEN_MARKETING_PAGE || I === E.dz.OPEN_SOCIAL_LAYER_STOREFRONT) &&
                                    (await (0, A.qr)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, n, {
                                        dismissAction: O.i.TAKE_ACTION,
                                    }));
                            } catch (e) {
                                p.A.captureException(e);
                            } finally {
                                y();
                            }
                        }
                        let { icon: a } = (0, T.x)({ buttonAction: o.button?.buttonAction });
                        return (0, r.jsx)(h.$, { variant: "expressive", size: "md", onClick: t, text: _, icon: a });
                    },
                    disclaimer: o.disclaimer?.disclaimerText !== "" ? o.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: D,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            promotion: a,
            content: l.properties.announcementModalVariant1,
            renderModalProps: o,
            analyticsLocations: I,
            analyticsLocation: _,
            isLightTheme: y,
        });
        return (0, r.jsx)(Z, { ...e });
    }
    return (
        p.A.captureMessage(
            `Property type ${l.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
