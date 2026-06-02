"use strict";
n.d(t, { default: () => J, H: () => Q });
var i = n(627968),
    r = n(64700),
    s = n(65412),
    a = n(554146),
    o = n(285402),
    l = n(366010),
    u = n(212245),
    c = n(736653),
    d = n(793574),
    _ = n(688810),
    h = n(826673),
    f = n(38405),
    p = n(403581),
    E = n(232582),
    m = n(821609),
    g = n(349288),
    A = n(367727),
    I = n(174459),
    T = n(637706),
    S = n(498470),
    y = n(652215),
    N = n(49999),
    v = n(375708),
    C = n(870433);
n(323874), n(14289), n(35956);
var R = n(503698),
    O = n.n(R),
    b = n(562708),
    D = n(877624),
    L = n(17928),
    w = n(815021),
    M = n(777666),
    P = n(534514),
    x = n(834730),
    k = n(935462),
    U = n(315629),
    G = n(775602),
    F = n(139286),
    V = n(392056),
    B = n(259407),
    H = n(915089),
    j = n(607470),
    Y = n(34337),
    W = n(186111),
    K = n(774774),
    $ = n(777135);
let z = [],
    q = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(M.Lp, { className: O()($.Tc, n), text: t });
    },
    X = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: s, wideStyle: a } = e;
        return (0, i.jsxs)("div", {
            className: O()($.Vr, { [$.tF]: a }),
            children: [
                null != s ? (0, i.jsx)(q, { tagText: s, className: $.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: O()($._n, { [$.tF]: a }), src: r }),
                (0, i.jsxs)("div", {
                    className: O()($.Zz, { [$.tF]: a }),
                    children: [
                        (0, i.jsx)(P.D, { variant: "heading-md/bold", className: $.Hf, children: t }),
                        (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
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
            button: g,
            body: T,
            disclaimer: S,
            disclaimerExtra: C,
        } = e,
        { onClose: R, transitionState: M } = o,
        q = (0, H.GV)(),
        Z = E.length % 2 == 0,
        Q = (0, L.bG)([G.A], () => G.A.useReducedMotion),
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
        [ef, ep] = r.useState(z),
        eE = r.useRef(!1);
    function em() {
        let e = Date.now(),
            t = e - eu.current,
            n = ec.current,
            i = ed.current;
        return e_.current && (en((n += t)), eh.current || er((i += t))), ee(e), [n, i];
    }
    return (
        (0, F.A)({
            type: b.ImpressionTypes.MODAL,
            name: b.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: D.C.ANNOUNCEMENT_MODAL },
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
                    f.A.captureException(e), ep(z);
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
                    I.default.track(y.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: m,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        I.default.track(y.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: m,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [m, l.type],
        ),
        r.useEffect(() => {
            if (W.A.getLayers().includes(y.zgK.COMPONENT_PLAYGROUND)) return;
            (0, A.Vh)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, { snowflakeId: n });
            let e = Date.now();
            return (
                I.default.track(y.HAw.CHANGE_LOG_OPENED, { change_log_id: m }),
                () => {
                    I.default.track(y.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: m,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, A.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: N.i.DISMISS });
                }
            );
        }, [m, n]),
        (0, i.jsx)(k.EO, {
            "data-migration-pending": !0,
            className: O()($.zr, $.kv, s),
            transitionState: M,
            "aria-labelledby": q,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(U.h, {
                color: "nitro-pink",
                className: $.YV,
                children: [
                    (0, i.jsx)("div", {
                        className: $.cG,
                        children: (0, i.jsx)(w.J, { "data-migration-pending": !0, onClick: async () => await R() }),
                    }),
                    (0, i.jsxs)(k.$m, {
                        "data-migration-pending": !0,
                        className: $.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        children: [
                            "video" === l.type
                                ? (0, i.jsx)(j.A, {
                                      className: O()($.Ki, u),
                                      autoPlay: !Q,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: l.src,
                                      poster: l.poster,
                                      onPlay: (e) => {
                                          I.default.track(y.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m }),
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
                                          let t = (0, v.getLanguages)().find((t) => t.code === e.locale);
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
                                : "embed" === l.type
                                  ? (0, i.jsx)(V.rr, {
                                        className: O()($.Ki, u),
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
                                            I.default.track(y.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: m });
                                        },
                                    })
                                  : "image" === l.type
                                    ? (0, i.jsx)("img", { alt: "", className: O()($.Ki, u), src: l.src })
                                    : null,
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
                                    (0, i.jsx)(P.D, { variant: "display-md", className: O()($.TK, d), children: c }),
                                    (0, i.jsxs)(x.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        className: $.uI,
                                        children: [h, p?.()],
                                    }),
                                ],
                            }),
                            null != T &&
                                "" !== T &&
                                (0, i.jsx)(P.D, { variant: "heading-lg/semibold", className: $.G3, children: T }),
                            E.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: $.IS,
                                    children: E.map((e, t) =>
                                        (0, i.jsx)(X, { ...e, wideStyle: Z }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: $.xQ,
                        children: [
                            g(),
                            null != S &&
                                "" !== S &&
                                (0, i.jsxs)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: $.ed,
                                    children: [S, C?.()],
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
        R = (0, c.Ay)(),
        O = (0, l.q)(R);
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
                _ = r.button?.copy ?? v.intl.string(v.t.YScQSF),
                h = r.button?.buttonAction === E.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button",
                R = (0, S.h)({
                    buttonAction: r.button?.buttonAction,
                    deeplinkSection: r.button?.deeplinkSection,
                    analyticsLocations: o,
                    analyticsLocation: l,
                    onClose: d,
                }),
                O = (0, T.C)(r.helpArticle, r.helpArticleId),
                b =
                    null != O
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(g.Anchor, { className: C.$T, href: O.url, children: O.linkText }),
                                  ],
                              })
                        : void 0,
                D = (0, T.C)(r.disclaimer?.disclaimerHelpArticle, ""),
                L =
                    null != D
                        ? () =>
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, i.jsx)(g.Anchor, { className: C.$T, href: D.url, children: D.linkText }),
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
                    featureCards: r.featureCards.map((e) => ({
                        header: e.header,
                        subHeader: e.body,
                        imageSrc: u ? e.imageLinkLightTheme : e.imageLink,
                        tagText: "" !== e.pill ? e.pill : void 0,
                    })),
                    changeLogId: c,
                    button: () => {
                        let e = Date.now(),
                            t = async () => {
                                I.default.track(y.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: c,
                                    cta_type: h,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: c,
                                });
                                try {
                                    r.button?.buttonAction === E.dz.OPEN_MARKETING_PAGE &&
                                        (await (0, A.qr)(a.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, {
                                            dismissAction: N.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    f.A.captureException(e);
                                } finally {
                                    R();
                                }
                            };
                        return (0, i.jsx)(m.$, { variant: "expressive", size: "md", onClick: t, text: _, icon: p.t });
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
            isLightTheme: O,
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
