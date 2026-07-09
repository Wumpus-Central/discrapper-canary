n.d(t, { default: () => X, H: () => J });
var r = n(627968),
    a = n(64700);
if (21552 == n.j) var i = n(65412);
var l = n(554146),
    o = n(934661),
    s = n(366010),
    c = n(212245),
    d = n(736653),
    u = n(793574),
    m = n(688810),
    h = n(826673),
    p = n(38405),
    _ = n(232582),
    E = n(821609),
    N = n(349288),
    A = n(367727),
    g = n(174459),
    M = n(637706),
    f = n(498470),
    T = n(652215),
    x = n(49999),
    b = n(375708),
    L = n(520609);
n(323874), n(14289), n(35956);
var I = n(503698),
    O = n.n(I),
    y = n(562708),
    k = n(877624),
    C = n(17928),
    j = n(815021),
    v = n(812993),
    R = n(534514),
    P = n(834730),
    S = n(935462),
    D = n(315629),
    w = n(228366),
    G = n(775602),
    U = n(139286),
    H = n(175671),
    K = n(259407),
    V = n(915089),
    F = n(607470),
    $ = n(34337),
    z = n(186111),
    Y = n(774774),
    q = n(660719);
let B = [];
function Q(e) {
    let { tagText: t, className: n } = e;
    return (0, r.jsx)(v.Lp, { className: O()(q.Tc, n), text: t });
}
function W(e) {
    let { header: t, subHeader: n, subHeaderExtra: a, imageSrc: i, tagText: l, wideStyle: o } = e;
    return (0, r.jsxs)("div", {
        className: O()(q.Vr, { [q.tF]: o }),
        children: [
            null != l ? (0, r.jsx)(Q, { tagText: l, className: q.bX }) : null,
            (0, r.jsx)("img", { alt: "", className: O()(q._n, { [q.tF]: o }), src: i }),
            (0, r.jsxs)("div", {
                className: O()(q.Zz, { [q.tF]: o }),
                children: [
                    (0, r.jsx)(R.D, { variant: "heading-md/bold", className: q.Hf, children: t }),
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
            promotion: i,
            className: o,
            renderModalProps: s,
            heroArt: c,
            heroArtClassName: d,
            header: u,
            headerClassName: m,
            modalTopPill: h,
            subHeader: _,
            subHeaderExtra: E,
            featureCards: N,
            changeLogId: M,
            button: f,
            body: L,
            disclaimer: I,
            disclaimerExtra: v,
        } = e,
        { onClose: Q, transitionState: Z } = s,
        J = (0, V.GV)(),
        X = N.length % 2 == 0,
        ee = (0, C.bG)([G.Ay], () => G.Ay.useReducedMotion),
        [et, en] = a.useState(Date.now()),
        [er, ea] = a.useState(0),
        [ei, el] = a.useState(0),
        [eo, es] = a.useState(!1),
        [ec, ed] = a.useState(!0),
        eu = a.useRef(et),
        em = a.useRef(er),
        eh = a.useRef(ei),
        ep = a.useRef(eo),
        e_ = a.useRef(ec),
        [eE, eN] = a.useState(B),
        eA = a.useRef(!1),
        { promotionKey: eg } = null != i ? i : {};
    function eM() {
        let e = Date.now(),
            t = e - eu.current,
            n = em.current,
            r = eh.current;
        return ep.current && (ea((n += t)), e_.current || el((r += t))), en(e), [n, r];
    }
    return (
        (0, U.A)({
            type: y.ImpressionTypes.MODAL,
            name: y.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: k.C.ANNOUNCEMENT_MODAL },
        }),
        a.useEffect(() => {
            let e = async () => {
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
                    p.A.captureException(e), eN(B);
                }
            };
            !0 !== eA.current && e(), (eA.current = !0);
        }, [c, eE]),
        a.useEffect(
            () => () => {
                null != eE &&
                    eE.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eE],
        ),
        a.useEffect(() => {
            (eu.current = et), (em.current = er), (eh.current = ei), (ep.current = eo), (e_.current = ec);
        }, [et, er, ei, eo, ec]),
        a.useEffect(
            () => () => {
                if ("video" === c.type || "embed" === c.type) {
                    let [e, t] = eM();
                    g.default.track(T.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: M,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        g.default.track(T.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: M,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [M, c.type],
        ),
        a.useEffect(() => {
            if (z.A.getLayers().includes(T.zgK.COMPONENT_PLAYGROUND)) return;
            (0, A.Vh)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                g.default.track(T.HAw.CHANGE_LOG_OPENED, { change_log_id: M }),
                () => {
                    g.default.track(T.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: M,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, A.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: x.i.DISMISS }),
                        w.h.dispatch({
                            type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                            promotionId: n,
                            promotionKey: eg,
                        });
                }
            );
        }, [M, n, eg]),
        (0, r.jsx)(S.EO, {
            "data-migration-pending": !0,
            className: O()(q.zr, q.kv, o),
            transitionState: Z,
            "aria-labelledby": J,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(D.h, {
                color: "nitro-pink",
                className: q.YV,
                children: [
                    (0, r.jsx)("div", {
                        className: q.cG,
                        children: (0, r.jsx)(j.J, { "data-migration-pending": !0, onClick: async () => await Q() }),
                    }),
                    (0, r.jsxs)(S.$m, {
                        "data-migration-pending": !0,
                        className: q.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            (() => {
                                switch (c.type) {
                                    case "video":
                                        return (0, r.jsx)(F.A, {
                                            className: O()(q.Ki, d),
                                            autoPlay: !ee,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: c.src,
                                            poster: c.poster,
                                            onPlay: (e) => {
                                                g.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: M,
                                                }),
                                                    en(Date.now()),
                                                    es(!0),
                                                    ed(e.currentTarget.muted);
                                            },
                                            onEnded: (e) => {
                                                eM(), ed(e.currentTarget.muted), es(!1);
                                            },
                                            onVolumeChange: (e) => {
                                                eM(), ed(e.currentTarget.muted);
                                            },
                                            onPause: (e) => {
                                                eM(), ed(e.currentTarget.muted), es(!1);
                                            },
                                            disablePictureInPicture: !0,
                                            children: eE?.map((e) => {
                                                let t = (0, b.getLanguages)().find((t) => t.code === e.locale);
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
                                        return (0, r.jsx)(H.rr, {
                                            className: O()(q.Ki, d),
                                            allowFullScreen: !1,
                                            href: c.href,
                                            thumbnail: c.thumbnail,
                                            video: c.embed,
                                            provider: K.m.YOUTUBE,
                                            maxWidth: c.embed.width,
                                            maxHeight: c.embed.height,
                                            renderVideoComponent: $.$o,
                                            renderImageComponent: $.LL,
                                            renderLinkComponent: $.bU,
                                            onPlay: () => {
                                                g.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: M,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, r.jsx)("img", { alt: "", className: O()(q.Ki, d), src: c.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != h && "" !== h
                                ? (0, r.jsx)(Y.e4, {
                                      text: h,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: q.ON,
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: q.Z,
                                children: [
                                    (0, r.jsx)(R.D, { variant: "display-md", className: O()(q.TK, m), children: u }),
                                    (0, r.jsxs)(P.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: q.uI,
                                        children: [_, E?.()],
                                    }),
                                ],
                            }),
                            null != L &&
                                "" !== L &&
                                (0, r.jsx)(R.D, { variant: "heading-lg/semibold", className: q.G3, children: L }),
                            N.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: q.IS,
                                    children: N.map((e, t) =>
                                        (0, r.jsx)(W, { ...e, wideStyle: X }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: q.xQ,
                        children: [
                            f(),
                            null != I &&
                                "" !== I &&
                                (0, r.jsxs)(P.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: q.ed,
                                    children: [I, v?.()],
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
        a = o.m.fromBinary((0, i.A)(n));
    if ("announcementModalVariant1" !== a.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, h.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !r && e ? null : (r && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function X(e) {
    let { componentId: t, promotionId: n, promotion: a, renderModalProps: i, properties: o } = e,
        { location: h } = (0, c.p)(),
        { analyticsLocations: I } = (0, m.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        O = (0, d.Ay)(),
        y = (0, s.q)(O);
    if ("announcementModalVariant1" === o.properties.oneofKind) {
        let e = (function (e) {
            let {
                    componentId: t,
                    promotionId: n,
                    promotion: a,
                    content: i,
                    renderModalProps: o,
                    analyticsLocations: s,
                    analyticsLocation: c,
                    isLightTheme: d,
                } = e,
                u = `AnnouncementModalVariant1_${t}`,
                { onClose: m } = o,
                h = i.button?.copy ?? b.intl.string(b.t.YScQSF),
                I = i.button?.buttonAction,
                O =
                    I === _.dz.OPEN_MARKETING_PAGE
                        ? "jump_to_mkt_button"
                        : I === _.dz.OPEN_SOCIAL_LAYER_STOREFRONT
                          ? "jump_to_slayer_storefront_button"
                          : "get_nitro_button",
                y = (0, f.h)({
                    buttonAction: i.button?.buttonAction,
                    deeplinkSection: i.button?.deeplinkSection,
                    applicationId: i.button?.navigableStorefrontApplicationId?.value,
                    analyticsLocations: s,
                    analyticsLocation: c,
                    onClose: m,
                }),
                k = (0, M.C)(i.helpArticle, i.helpArticleId),
                C =
                    null != k
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(N.Anchor, { className: L.$T, href: k.url, children: k.linkText }),
                                  ],
                              })
                        : void 0,
                j = (0, M.C)(i.disclaimer?.disclaimerHelpArticle, ""),
                v =
                    null != j
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(N.Anchor, { className: L.$T, href: j.url, children: j.linkText }),
                                  ],
                              })
                        : void 0,
                R = { type: "video", src: d ? i.heroArtVideoLinkLightTheme : i.videoLink };
            return (
                null != i.heroArtVideoSubtitles &&
                    (R.subtitles = i.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== i.heroArtImageLinkDarkTheme || "" !== i.heroArtImageLinkLightTheme) &&
                    (R = { type: "image", src: d ? i.heroArtImageLinkLightTheme : i.heroArtImageLinkDarkTheme }),
                {
                    componentId: t,
                    promotionId: n,
                    promotion: a,
                    renderModalProps: o,
                    header: i.header,
                    modalTopPill: i.modalTopPill,
                    subHeader: i.subheader,
                    subHeaderExtra: C,
                    body: i.body,
                    heroArt: R,
                    featureCards: i.featureCards.map((e) => {
                        let t = (0, M.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, r.jsx)(N.Anchor, {
                                                      className: L.$T,
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
                    button: () => {
                        let e = Date.now(),
                            t = async () => {
                                g.default.track(T.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: u,
                                    cta_type: O,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: u,
                                });
                                try {
                                    (I === _.dz.OPEN_MARKETING_PAGE || I === _.dz.OPEN_SOCIAL_LAYER_STOREFRONT) &&
                                        (await (0, A.qr)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                                            dismissAction: x.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    p.A.captureException(e);
                                } finally {
                                    y();
                                }
                            },
                            { icon: a } = (0, f.x)({ buttonAction: i.button?.buttonAction });
                        return (0, r.jsx)(E.$, { variant: "expressive", size: "md", onClick: t, text: h, icon: a });
                    },
                    disclaimer: i.disclaimer?.disclaimerText !== "" ? i.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: v,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            promotion: a,
            content: o.properties.announcementModalVariant1,
            renderModalProps: i,
            analyticsLocations: I,
            analyticsLocation: h,
            isLightTheme: y,
        });
        return (0, r.jsx)(Z, { ...e });
    }
    return (
        p.A.captureMessage(
            `Property type ${o.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
