n.d(t, { Z: () => P }), n(388685), n(415506), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(159691),
    c = n(481060),
    u = n(607070),
    d = n(446411),
    p = n(468846),
    f = n(313201),
    m = n(70097),
    h = n(266454),
    g = n(605236),
    _ = n(524444),
    b = n(626135),
    E = n(960048),
    O = n(981631),
    I = n(921944),
    y = n(388032),
    v = n(188784);
function C(e) {
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
function S(e, t) {
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
let T = [],
    N = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(c.IGR, {
            className: a()(v.tag, n),
            text: t,
        });
    },
    j = (e) => {
        let { header: t, subHeader: n, imageSrc: i, tagText: l, wideStyle: s } = e;
        return (0, r.jsxs)("div", {
            className: a()(v.featureCard, { [v.wideStyle]: s }),
            children: [
                null != l
                    ? (0, r.jsx)(N, {
                          tagText: l,
                          className: v.featureCardTag,
                      })
                    : null,
                (0, r.jsx)("img", {
                    alt: "",
                    className: a()(v.featureCardImg, { [v.wideStyle]: s }),
                    src: i,
                }),
                (0, r.jsxs)("div", {
                    className: v.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            className: v.featureCardTextHeader,
                            children: t,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: n,
                        }),
                    ],
                }),
            ],
        });
    };
function P(e) {
    let {
            className: t,
            renderModalProps: n,
            heroArt: l,
            heroArtClassName: N,
            modalDismissibleContent: P,
            modalTopExtra: x,
            header: A,
            headerClassName: Z,
            subHeader: w,
            subHeaderExtra: L,
            featureCards: R,
            changeLogId: D,
            button: M,
            body: k,
        } = e,
        { onClose: U, transitionState: G } = n,
        B = (0, f.Dt)(),
        H = R.length % 2 == 0,
        V = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [F, z] = i.useState(Date.now()),
        [Y, W] = i.useState(0),
        [q, K] = i.useState(0),
        [Q, J] = i.useState(!1),
        [X, $] = i.useState(!0),
        ee = i.useRef(F),
        et = i.useRef(Y),
        en = i.useRef(q),
        er = i.useRef(Q),
        ei = i.useRef(X),
        [el, ea] = i.useState(T),
        es = i.useRef(!1);
    function eo() {
        let e = Date.now(),
            t = e - ee.current,
            n = et.current,
            r = en.current;
        return er.current && (W((n += t)), ei.current || K((r += t))), z(e), [n, r];
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
                                  return S(C({}, e), { src: i });
                              });
                    ea(await Promise.all(t));
                } catch (e) {
                    E.Z.captureException(e), ea(T);
                }
            };
            !0 !== es.current && e(), (es.current = !0);
        }, [l, el]),
        i.useEffect(
            () => () => {
                null != el &&
                    el.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [el],
        ),
        i.useEffect(() => {
            (ee.current = F), (et.current = Y), (en.current = q), (er.current = Q), (ei.current = X);
        }, [F, Y, q, Q, X]),
        i.useEffect(
            () => () => {
                if ("video" === l.type || "embed" === l.type) {
                    let [e, t] = eo();
                    b.default.track(O.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: D,
                        seconds_played: Math.round(e / 1000),
                    }),
                        b.default.track(O.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: D,
                            seconds_unmuted: Math.round(t / 1000),
                        });
                }
            },
            [D, l.type],
        ),
        i.useEffect(() => {
            null != P && (0, g.kk)(P);
            let e = Date.now();
            return (
                b.default.track(O.rMx.CHANGE_LOG_OPENED, { change_log_id: D }),
                () => {
                    b.default.track(O.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: D,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                    }),
                        null != P && (0, h.Q3)(P, { dismissAction: I.L.DISMISS });
                }
            );
        }, [P, D]),
        (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: a()(v.root, v.largeBorderRadius, t),
            transitionState: G,
            "aria-labelledby": B,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(c.$1m, {
                color: "nitro-pink",
                children: [
                    (0, r.jsx)("div", {
                        className: v.closeButtonContainer,
                        children: (0, r.jsx)(o.PZ7, {
                            "data-migration-pending": !0,
                            onClick: async () => await U(),
                        }),
                    }),
                    null == x ? void 0 : x(),
                    (0, r.jsxs)(c.hzk, {
                        "data-migration-pending": !0,
                        className: v.content,
                        children: [
                            "video" === l.type
                                ? (0, r.jsx)(m.Z, {
                                      className: a()(v.video, N),
                                      autoPlay: !V,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: l.src,
                                      poster: l.poster,
                                      onPlay: (e) => {
                                          b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: D }),
                                              z(Date.now()),
                                              J(!0),
                                              $(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          eo(), $(e.currentTarget.muted), J(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          eo(), $(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          eo(), $(e.currentTarget.muted), J(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children:
                                          null == el
                                              ? void 0
                                              : el.map((e) => {
                                                    let t = (0, y.getLanguages)().find((t) => t.code === e.locale);
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
                                  ? (0, r.jsx)(d.BC, {
                                        className: a()(v.video, N),
                                        allowFullScreen: !1,
                                        href: l.href,
                                        thumbnail: l.thumbnail,
                                        video: l.embed,
                                        provider: p.pn.YOUTUBE,
                                        maxWidth: l.embed.width,
                                        maxHeight: l.embed.height,
                                        renderVideoComponent: _.lV,
                                        renderImageComponent: _.Yi,
                                        renderLinkComponent: _.iT,
                                        onPlay: () => {
                                            b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: D });
                                        },
                                    })
                                  : "image" === l.type
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: a()(v.video, N),
                                          src: l.src,
                                      })
                                    : null,
                            (0, r.jsx)(c.Heading, {
                                variant: "display-md",
                                className: a()(v.headerText, Z),
                                children: A,
                            }),
                            (0, r.jsxs)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-secondary",
                                className: v.subHeader,
                                children: [w, null == L ? void 0 : L()],
                            }),
                            null != k &&
                                "" !== k &&
                                (0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: v.bodyText,
                                    children: k,
                                }),
                            R.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: a()(v.featureCardGroup, { [v.wideStyle]: H }),
                                    children: R.map((e, t) =>
                                        (0, r.jsx)(
                                            j,
                                            S(C({}, e), { wideStyle: H }),
                                            "".concat(e.header, "_").concat(t),
                                        ),
                                    ),
                                }),
                            (0, r.jsx)("div", {
                                className: v.buttonContainer,
                                children: M(),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
