n.d(t, { Z: () => j }), n(388685), n(415506), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(159691),
    c = n(481060),
    u = n(607070),
    d = n(446411),
    p = n(468846),
    f = n(313201),
    h = n(70097),
    g = n(266454),
    m = n(605236),
    b = n(524444),
    _ = n(626135),
    E = n(960048),
    O = n(981631),
    v = n(921944),
    y = n(388032),
    I = n(188784);
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
let N = [],
    T = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(c.IGR, {
            className: a()(I.tag, n),
            text: t,
        });
    },
    P = (e) => {
        let { header: t, subHeader: n, imageSrc: i, tagText: l, wideStyle: o } = e;
        return (0, r.jsxs)("div", {
            className: a()(I.featureCard, { [I.wideStyle]: o }),
            children: [
                null != l
                    ? (0, r.jsx)(T, {
                          tagText: l,
                          className: I.featureCardTag,
                      })
                    : null,
                (0, r.jsx)("img", {
                    alt: "",
                    className: a()(I.featureCardImg, { [I.wideStyle]: o }),
                    src: i,
                }),
                (0, r.jsxs)("div", {
                    className: I.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            className: I.featureCardTextHeader,
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
function j(e) {
    let {
            className: t,
            renderModalProps: n,
            heroArt: l,
            heroArtClassName: T,
            modalDismissibleContent: j,
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
        V = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        [F, z] = i.useState(Date.now()),
        [W, Y] = i.useState(0),
        [q, K] = i.useState(0),
        [Q, X] = i.useState(!1),
        [J, $] = i.useState(!0),
        ee = i.useRef(F),
        et = i.useRef(W),
        en = i.useRef(q),
        er = i.useRef(Q),
        ei = i.useRef(J),
        [el, ea] = i.useState(N),
        eo = i.useRef(!1);
    function es() {
        let e = Date.now(),
            t = e - ee.current,
            n = et.current,
            r = en.current;
        return er.current && (Y((n += t)), ei.current || K((r += t))), z(e), [n, r];
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
                    E.Z.captureException(e), ea(N);
                }
            };
            !0 !== eo.current && e(), (eo.current = !0);
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
            (ee.current = F), (et.current = W), (en.current = q), (er.current = Q), (ei.current = J);
        }, [F, W, q, Q, J]),
        i.useEffect(
            () => () => {
                if ("video" === l.type || "embed" === l.type) {
                    let [e, t] = es();
                    _.default.track(O.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: D,
                        seconds_played: Math.round(e / 1000),
                    }),
                        _.default.track(O.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: D,
                            seconds_unmuted: Math.round(t / 1000),
                        });
                }
            },
            [D, l.type],
        ),
        i.useEffect(() => {
            null != j && (0, m.kk)(j);
            let e = Date.now();
            return (
                _.default.track(O.rMx.CHANGE_LOG_OPENED, { change_log_id: D }),
                () => {
                    _.default.track(O.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: D,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                    }),
                        null != j && (0, g.Q3)(j, { dismissAction: v.L.DISMISS });
                }
            );
        }, [j, D]),
        (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: a()(I.root, I.largeBorderRadius, t),
            transitionState: G,
            "aria-labelledby": B,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(c.$1m, {
                color: "nitro-pink",
                children: [
                    (0, r.jsx)("div", {
                        className: I.closeButtonContainer,
                        children: (0, r.jsx)(s.PZ7, {
                            "data-migration-pending": !0,
                            onClick: async () => await U(),
                        }),
                    }),
                    null == x ? void 0 : x(),
                    (0, r.jsxs)(c.hzk, {
                        "data-migration-pending": !0,
                        className: I.content,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "display-md",
                                className: a()(I.headerText, Z),
                                children: A,
                            }),
                            "video" === l.type
                                ? (0, r.jsx)(h.Z, {
                                      className: a()(I.video, T),
                                      autoPlay: !V,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: l.src,
                                      poster: l.poster,
                                      onPlay: (e) => {
                                          _.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: D }),
                                              z(Date.now()),
                                              X(!0),
                                              $(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          es(), $(e.currentTarget.muted), X(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          es(), $(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          es(), $(e.currentTarget.muted), X(!1);
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
                                        className: a()(I.video, T),
                                        allowFullScreen: !1,
                                        href: l.href,
                                        thumbnail: l.thumbnail,
                                        video: l.embed,
                                        provider: p.pn.YOUTUBE,
                                        maxWidth: l.embed.width,
                                        maxHeight: l.embed.height,
                                        renderVideoComponent: b.lV,
                                        renderImageComponent: b.Yi,
                                        renderLinkComponent: b.iT,
                                        onPlay: () => {
                                            _.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: D });
                                        },
                                    })
                                  : "image" === l.type
                                    ? (0, r.jsx)("img", {
                                          alt: "",
                                          className: a()(I.video, T),
                                          src: l.src,
                                      })
                                    : null,
                            (0, r.jsxs)(c.Text, {
                                variant: "text-md/normal",
                                color: "text-secondary",
                                className: I.subHeader,
                                children: [w, null == L ? void 0 : L()],
                            }),
                            null != k &&
                                "" !== k &&
                                (0, r.jsx)(c.Heading, {
                                    variant: "heading-lg/semibold",
                                    className: I.bodyText,
                                    children: k,
                                }),
                            R.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: a()(I.featureCardGroup, { [I.wideStyle]: H }),
                                    children: R.map((e, t) =>
                                        (0, r.jsx)(
                                            P,
                                            S(C({}, e), { wideStyle: H }),
                                            "".concat(e.header, "_").concat(t),
                                        ),
                                    ),
                                }),
                            (0, r.jsx)("div", {
                                className: I.buttonContainer,
                                children: M(),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
