n.d(t, { Z: () => x }), n(388685), n(415506), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(304789),
    c = n(159691),
    u = n(481060),
    d = n(607070),
    p = n(446411),
    f = n(468846),
    h = n(313201),
    g = n(70097),
    m = n(266454),
    b = n(605236),
    _ = n(524444),
    O = n(626135),
    E = n(960048),
    y = n(981631),
    v = n(921944),
    I = n(388032),
    C = n(188784);
function S(e) {
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
function T(e, t) {
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
let N = [],
    j = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(u.IGR, {
            className: a()(C.tag, n),
            text: t,
        });
    },
    P = (e) => {
        let { header: t, subHeader: n, imageSrc: i, tagText: l, wideStyle: o } = e;
        return (0, r.jsxs)("div", {
            className: a()(C.featureCard, { [C.wideStyle]: o }),
            children: [
                null != l
                    ? (0, r.jsx)(j, {
                          tagText: l,
                          className: C.featureCardTag,
                      })
                    : null,
                (0, r.jsx)("img", {
                    alt: "",
                    className: a()(C.featureCardImg, { [C.wideStyle]: o }),
                    src: i,
                }),
                (0, r.jsxs)("div", {
                    className: C.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: "heading-md/bold",
                            className: C.featureCardTextHeader,
                            children: t,
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: n,
                        }),
                    ],
                }),
            ],
        });
    };
function x(e) {
    let {
            className: t,
            renderModalProps: n,
            heroArt: l,
            heroArtClassName: j,
            modalDismissibleContent: x,
            modalTopExtra: A,
            header: Z,
            headerClassName: w,
            subHeader: L,
            subHeaderExtra: R,
            featureCards: D,
            changeLogId: k,
            button: M,
            body: U,
        } = e,
        { onClose: G, transitionState: B } = n,
        V = (0, h.Dt)(),
        H = D.length % 2 == 0,
        F = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [z, W] = i.useState(Date.now()),
        [Y, K] = i.useState(0),
        [q, Q] = i.useState(0),
        [X, J] = i.useState(!1),
        [$, ee] = i.useState(!0),
        et = i.useRef(z),
        en = i.useRef(Y),
        er = i.useRef(q),
        ei = i.useRef(X),
        el = i.useRef($),
        [ea, eo] = i.useState(N),
        es = i.useRef(!1);
    function ec() {
        let e = Date.now(),
            t = e - et.current,
            n = en.current,
            r = er.current;
        return ei.current && (K((n += t)), el.current || Q((r += t))), W(e), [n, r];
    }
    return (
        i.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ("video" !== l.type || null == l.subtitles) return;
                    let t =
                        null == (e = l.subtitles)
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error("Failed to fetch the subtitle file ".concat(e.src));
                                  let n = await t.text(),
                                      r = new Blob([n], { type: "text/vtt" }),
                                      i = URL.createObjectURL(r);
                                  return T(S({}, e), { src: i });
                              });
                    eo(await Promise.all(t));
                } catch (e) {
                    E.Z.captureException(e), eo(N);
                }
            };
            !0 !== es.current && e(), (es.current = !0);
        }, [l, ea]),
        i.useEffect(
            () => () => {
                null != ea &&
                    ea.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ea],
        ),
        i.useEffect(() => {
            (et.current = z), (en.current = Y), (er.current = q), (ei.current = X), (el.current = $);
        }, [z, Y, q, X, $]),
        i.useEffect(
            () => () => {
                if ("video" === l.type || "embed" === l.type) {
                    let [e, t] = ec();
                    O.default.track(y.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: k,
                        seconds_played: Math.round(e / 1000),
                    }),
                        O.default.track(y.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: k,
                            seconds_unmuted: Math.round(t / 1000),
                        });
                }
            },
            [k, l.type],
        ),
        i.useEffect(() => {
            null != x && (0, b.kk)(x);
            let e = Date.now();
            return (
                O.default.track(y.rMx.CHANGE_LOG_OPENED, { change_log_id: k }),
                () => {
                    O.default.track(y.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: k,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                    }),
                        null != x && (0, m.Q3)(x, { dismissAction: v.L.DISMISS });
                }
            );
        }, [x, k]),
        (0, r.jsx)(u.Y0X, {
            "data-migration-pending": !0,
            className: a()(C.root, C.largeBorderRadius, t),
            transitionState: B,
            "aria-labelledby": V,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(s.$, {
                color: "nitro-pink",
                children: [
                    (0, r.jsx)("div", {
                        className: C.closeButtonContainer,
                        children: (0, r.jsx)(c.PZ7, {
                            "data-migration-pending": !0,
                            onClick: async () => await G(),
                        }),
                    }),
                    null == A ? void 0 : A(),
                    (0, r.jsxs)(u.hzk, {
                        "data-migration-pending": !0,
                        className: C.content,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                variant: "display-md",
                                className: a()(C.headerText, w),
                                children: Z,
                            }),
                            "video" === l.type
                                ? (0, r.jsx)(g.Z, {
                                      className: a()(C.video, j),
                                      autoPlay: !F,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: l.src,
                                      poster: l.poster,
                                      onPlay: (e) => {
                                          O.default.track(y.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: k }),
                                              W(Date.now()),
                                              J(!0),
                                              ee(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          ec(), ee(e.currentTarget.muted), J(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          ec(), ee(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          ec(), ee(e.currentTarget.muted), J(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children:
                                          null == ea
                                              ? void 0
                                              : ea.map((e) => {
                                                    let t = (0, I.getLanguages)().find((t) => t.code === e.locale);
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
                                : "embed" === l.type
                                  ? (0, r.jsx)(p.BC, {
                                        className: a()(C.video, j),
                                        allowFullScreen: !1,
                                        href: l.href,
                                        thumbnail: l.thumbnail,
                                        video: l.embed,
                                        provider: f.pn.YOUTUBE,
                                        maxWidth: l.embed.width,
                                        maxHeight: l.embed.height,
                                        renderVideoComponent: _.lV,
                                        renderImageComponent: _.Yi,
                                        renderLinkComponent: _.iT,
                                        onPlay: () => {
                                            O.default.track(y.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: k });
                                        },
                                    })
                                  : "image" === l.type
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: a()(C.video, j),
                                          src: l.src,
                                      })
                                    : null,
                            (0, r.jsxs)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-secondary",
                                className: C.subHeader,
                                children: [L, null == R ? void 0 : R()],
                            }),
                            null != U &&
                                "" !== U &&
                                (0, r.jsx)(u.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: C.bodyText,
                                    children: U,
                                }),
                            D.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: a()(C.featureCardGroup, { [C.wideStyle]: H }),
                                    children: D.map((e, t) =>
                                        (0, r.jsx)(
                                            P,
                                            T(S({}, e), { wideStyle: H }),
                                            "".concat(e.header, "_").concat(t),
                                        ),
                                    ),
                                }),
                            (0, r.jsx)("div", {
                                className: C.buttonContainer,
                                children: M(),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
