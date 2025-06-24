n.d(t, { Z: () => T }), n(388685), n(415506), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(446411),
    d = n(468846),
    p = n(313201),
    h = n(70097),
    f = n(605236),
    g = n(524444),
    m = n(626135),
    b = n(960048),
    _ = n(981631),
    E = n(921944),
    O = n(388032),
    y = n(937976);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
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
let C = [],
    S = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(s.IGR, {
            className: a()(y.tag, n),
            text: t
        });
    },
    N = (e) => {
        let { header: t, subHeader: n, imageSrc: i, tagText: l, wideStyle: o } = e;
        return (0, r.jsxs)('div', {
            className: a()(y.featureCard, { [y.wideStyle]: o }),
            children: [
                null != l
                    ? (0, r.jsx)(S, {
                          tagText: l,
                          className: y.featureCardTag
                      })
                    : null,
                (0, r.jsx)('img', {
                    alt: '',
                    className: a()(y.featureCardImg, { [y.wideStyle]: o }),
                    src: i
                }),
                (0, r.jsxs)('div', {
                    className: y.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-md/extrabold',
                            className: y.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                    ]
                })
            ]
        });
    };
function T(e) {
    let { className: t, renderModalProps: n, heroArt: l, heroArtClassName: S, modalDismissibleContent: T, modalTopExtra: P, header: j, headerClassName: A, subHeader: Z, subHeaderExtra: x, featureCards: w, changeLogId: L, button: R, body: D } = e,
        { onClose: k, transitionState: M } = n,
        U = (0, p.Dt)(),
        G = w.length % 2 == 0,
        B = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [V, H] = i.useState(Date.now()),
        [F, z] = i.useState(0),
        [W, Y] = i.useState(0),
        [K, q] = i.useState(!1),
        [X, Q] = i.useState(!0),
        J = i.useRef(V),
        $ = i.useRef(F),
        ee = i.useRef(W),
        et = i.useRef(K),
        en = i.useRef(X),
        [er, ei] = i.useState(C),
        el = i.useRef(!1);
    function ea() {
        let e = Date.now(),
            t = e - J.current,
            n = $.current,
            r = ee.current;
        return et.current && (z((n += t)), en.current || Y((r += t))), H(e), [n, r];
    }
    return (
        i.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ('video' !== l.type || null == l.subtitles) return;
                    let t =
                        null == (e = l.subtitles)
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error('Failed to fetch the subtitle file '.concat(e.src));
                                  let n = await t.text(),
                                      r = new Blob([n], { type: 'text/vtt' }),
                                      i = URL.createObjectURL(r);
                                  return v(I({}, e), { src: i });
                              });
                    ei(await Promise.all(t));
                } catch (e) {
                    b.Z.captureException(e), ei(C);
                }
            };
            !0 !== el.current && e(), (el.current = !0);
        }, [l, er]),
        i.useEffect(
            () => () => {
                null != er &&
                    er.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [er]
        ),
        i.useEffect(() => {
            (J.current = V), ($.current = F), (ee.current = W), (et.current = K), (en.current = X);
        }, [V, F, W, K, X]),
        i.useEffect(
            () => () => {
                if ('video' === l.type || 'embed' === l.type) {
                    let [e, t] = ea();
                    m.default.track(_.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: L,
                        seconds_played: Math.round(e / 1000)
                    }),
                        m.default.track(_.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: L,
                            seconds_unmuted: Math.round(t / 1000)
                        });
                }
            },
            [L, l.type]
        ),
        i.useEffect(() => {
            null != T && (0, f.kk)(T);
            let e = Date.now();
            return (
                m.default.track(_.rMx.CHANGE_LOG_OPENED, { change_log_id: L }),
                () => {
                    m.default.track(_.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: L,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != T && (0, f.EW)(T, { dismissAction: E.L.DISMISS });
                }
            );
        }, [T, L]),
        (0, r.jsxs)(s.Y0X, {
            className: a()(y.root, t),
            transitionState: M,
            'aria-labelledby': U,
            parentComponent: 'PremiumAnnouncementModalVariant1',
            children: [
                (0, r.jsx)(s.olH, {
                    className: y.closeButton,
                    onClick: k
                }),
                null == P ? void 0 : P(),
                (0, r.jsxs)(s.hzk, {
                    className: y.content,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'display-md',
                            className: a()(y.headerText, A),
                            children: j
                        }),
                        'video' === l.type
                            ? (0, r.jsx)(h.Z, {
                                  className: a()(y.video, S),
                                  autoPlay: !B,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: l.src,
                                  poster: l.poster,
                                  onPlay: (e) => {
                                      m.default.track(_.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: L }), H(Date.now()), q(!0), Q(e.currentTarget.muted);
                                  },
                                  onEnded: (e) => {
                                      ea(), Q(e.currentTarget.muted), q(!1);
                                  },
                                  onVolumeChange: (e) => {
                                      ea(), Q(e.currentTarget.muted);
                                  },
                                  onPause: (e) => {
                                      ea(), Q(e.currentTarget.muted), q(!1);
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == er
                                          ? void 0
                                          : er.map((e) => {
                                                let t = (0, O.getLanguages)().find((t) => t.code === e.locale);
                                                return null == t
                                                    ? null
                                                    : (0, r.jsx)(
                                                          'track',
                                                          {
                                                              label: t.englishName,
                                                              kind: 'captions',
                                                              srcLang: t.code,
                                                              src: e.src,
                                                              default: e.isDefault
                                                          },
                                                          e.locale
                                                      );
                                            })
                              })
                            : 'embed' === l.type
                              ? (0, r.jsx)(u.BC, {
                                    className: a()(y.video, S),
                                    allowFullScreen: !1,
                                    href: l.href,
                                    thumbnail: l.thumbnail,
                                    video: l.embed,
                                    provider: d.pn.YOUTUBE,
                                    maxWidth: l.embed.width,
                                    maxHeight: l.embed.height,
                                    renderVideoComponent: g.lV,
                                    renderImageComponent: g.Yi,
                                    renderLinkComponent: g.iT,
                                    onPlay: () => {
                                        m.default.track(_.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: L });
                                    }
                                })
                              : 'image' === l.type
                                ? (0, r.jsx)('img', {
                                      alt: '',
                                      className: a()(y.video, S),
                                      src: l.src
                                  })
                                : null,
                        (0, r.jsxs)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            className: y.subHeader,
                            children: [Z, null == x ? void 0 : x()]
                        }),
                        null != D &&
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/medium',
                                className: y.bodyText,
                                children: D
                            }),
                        w.length > 0 &&
                            (0, r.jsx)('div', {
                                className: a()(y.featureCardGroup, { [y.wideStyle]: G }),
                                children: w.map((e, t) => (0, r.jsx)(N, v(I({}, e), { wideStyle: G }), ''.concat(e.header, '_').concat(t)))
                            }),
                        R()
                    ]
                })
            ]
        })
    );
}
