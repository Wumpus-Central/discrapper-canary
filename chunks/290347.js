n.d(t, { Z: () => Z }), n(388685), n(415506), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(990547),
    o = n(79766),
    c = n(442837),
    u = n(159691),
    d = n(481060),
    p = n(607070),
    f = n(213609),
    h = n(446411),
    g = n(468846),
    m = n(313201),
    _ = n(70097),
    b = n(266454),
    E = n(605236),
    O = n(524444),
    y = n(626135),
    v = n(960048),
    I = n(981631),
    C = n(921944),
    S = n(388032),
    T = n(188784);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = [],
    x = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(d.IGR, {
            className: a()(T.tag, n),
            text: t,
        });
    },
    A = (e) => {
        let { header: t, subHeader: n, imageSrc: i, tagText: l, wideStyle: s } = e;
        return (0, r.jsxs)("div", {
            className: a()(T.featureCard, { [T.wideStyle]: s }),
            children: [
                null != l
                    ? (0, r.jsx)(x, {
                          tagText: l,
                          className: T.featureCardTag,
                      })
                    : null,
                (0, r.jsx)("img", {
                    alt: "",
                    className: a()(T.featureCardImg, { [T.wideStyle]: s }),
                    src: i,
                }),
                (0, r.jsxs)("div", {
                    className: T.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: "heading-md/bold",
                            className: T.featureCardTextHeader,
                            children: t,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: n,
                        }),
                    ],
                }),
            ],
        });
    };
function Z(e) {
    let {
            componentId: t,
            className: n,
            renderModalProps: l,
            heroArt: x,
            heroArtClassName: Z,
            modalDismissibleContent: w,
            modalTopExtra: L,
            header: R,
            headerClassName: D,
            subHeader: M,
            subHeaderExtra: k,
            featureCards: U,
            changeLogId: G,
            button: B,
            body: H,
        } = e,
        { onClose: V, transitionState: F } = l,
        z = (0, m.Dt)(),
        Y = U.length % 2 == 0,
        W = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [q, K] = i.useState(Date.now()),
        [Q, J] = i.useState(0),
        [X, $] = i.useState(0),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!0),
        ei = i.useRef(q),
        el = i.useRef(Q),
        ea = i.useRef(X),
        es = i.useRef(ee),
        eo = i.useRef(en),
        [ec, eu] = i.useState(P),
        ed = i.useRef(!1);
    function ep() {
        let e = Date.now(),
            t = e - ei.current,
            n = el.current,
            r = ea.current;
        return es.current && (J((n += t)), eo.current || $((r += t))), K(e), [n, r];
    }
    return (
        (0, f.Z)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: {
                component_id: t,
                component_type: o.I.ANNOUNCEMENT_MODAL,
            },
        }),
        i.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ("video" !== x.type || null == x.subtitles) return;
                    let t =
                        null == (e = x.subtitles)
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error("Failed to fetch the subtitle file ".concat(e.src));
                                  let n = await t.text(),
                                      r = new Blob([n], { type: "text/vtt" }),
                                      i = URL.createObjectURL(r);
                                  return j(N({}, e), { src: i });
                              });
                    eu(await Promise.all(t));
                } catch (e) {
                    v.Z.captureException(e), eu(P);
                }
            };
            !0 !== ed.current && e(), (ed.current = !0);
        }, [x, ec]),
        i.useEffect(
            () => () => {
                null != ec &&
                    ec.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ec],
        ),
        i.useEffect(() => {
            (ei.current = q), (el.current = Q), (ea.current = X), (es.current = ee), (eo.current = en);
        }, [q, Q, X, ee, en]),
        i.useEffect(
            () => () => {
                if ("video" === x.type || "embed" === x.type) {
                    let [e, t] = ep();
                    y.default.track(I.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: G,
                        seconds_played: Math.round(e / 1000),
                    }),
                        y.default.track(I.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: G,
                            seconds_unmuted: Math.round(t / 1000),
                        });
                }
            },
            [G, x.type],
        ),
        i.useEffect(() => {
            null != w && (0, E.kk)(w);
            let e = Date.now();
            return (
                y.default.track(I.rMx.CHANGE_LOG_OPENED, { change_log_id: G }),
                () => {
                    y.default.track(I.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: G,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                    }),
                        null != w && (0, b.Q3)(w, { dismissAction: C.L.DISMISS });
                }
            );
        }, [w, G]),
        (0, r.jsx)(d.Y0X, {
            "data-migration-pending": !0,
            className: a()(T.root, T.largeBorderRadius, n),
            transitionState: F,
            "aria-labelledby": z,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(d.$1m, {
                color: "nitro-pink",
                children: [
                    (0, r.jsx)("div", {
                        className: T.closeButtonContainer,
                        children: (0, r.jsx)(u.PZ7, {
                            "data-migration-pending": !0,
                            onClick: async () => await V(),
                        }),
                    }),
                    null == L ? void 0 : L(),
                    (0, r.jsxs)(d.hzk, {
                        "data-migration-pending": !0,
                        className: T.content,
                        children: [
                            "video" === x.type
                                ? (0, r.jsx)(_.Z, {
                                      className: a()(T.video, Z),
                                      autoPlay: !W,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: x.src,
                                      poster: x.poster,
                                      onPlay: (e) => {
                                          y.default.track(I.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: G }),
                                              K(Date.now()),
                                              et(!0),
                                              er(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          ep(), er(e.currentTarget.muted), et(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          ep(), er(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          ep(), er(e.currentTarget.muted), et(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children:
                                          null == ec
                                              ? void 0
                                              : ec.map((e) => {
                                                    let t = (0, S.getLanguages)().find((t) => t.code === e.locale);
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
                                : "embed" === x.type
                                  ? (0, r.jsx)(h.BC, {
                                        className: a()(T.video, Z),
                                        allowFullScreen: !1,
                                        href: x.href,
                                        thumbnail: x.thumbnail,
                                        video: x.embed,
                                        provider: g.pn.YOUTUBE,
                                        maxWidth: x.embed.width,
                                        maxHeight: x.embed.height,
                                        renderVideoComponent: O.lV,
                                        renderImageComponent: O.Yi,
                                        renderLinkComponent: O.iT,
                                        onPlay: () => {
                                            y.default.track(I.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: G });
                                        },
                                    })
                                  : "image" === x.type
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: a()(T.video, Z),
                                          src: x.src,
                                      })
                                    : null,
                            (0, r.jsx)(d.Heading, {
                                variant: "display-md",
                                className: a()(T.headerText, D),
                                children: R,
                            }),
                            (0, r.jsxs)(d.Text, {
                                variant: "text-md/normal",
                                color: "text-secondary",
                                className: T.subHeader,
                                children: [M, null == k ? void 0 : k()],
                            }),
                            null != H &&
                                "" !== H &&
                                (0, r.jsx)(d.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: T.bodyText,
                                    children: H,
                                }),
                            U.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: a()(T.featureCardGroup, { [T.wideStyle]: Y }),
                                    children: U.map((e, t) =>
                                        (0, r.jsx)(
                                            A,
                                            j(N({}, e), { wideStyle: Y }),
                                            "".concat(e.header, "_").concat(t),
                                        ),
                                    ),
                                }),
                            (0, r.jsx)("div", {
                                className: T.buttonContainer,
                                children: B(),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
