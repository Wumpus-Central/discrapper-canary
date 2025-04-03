n.d(t, { Z: () => P }), n(47120), n(411104), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(200651),
    i = n(192379),
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
    _ = n(565216),
    E = n(981631),
    O = n(921944),
    N = n(388032),
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
    T = (e) => {
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
function P(e) {
    let { className: t, renderModalProps: n, heroArt: l, heroArtClassName: S, modalDismissibleContent: P, modalTopExtra: j, header: A, headerClassName: Z, subHeader: x, subHeaderExtra: L, featureCards: w, changeLogId: R, button: D, body: k } = e,
        { onClose: M, transitionState: U } = n,
        G = (0, p.Dt)(),
        W = w.length % 2 == 0,
        V = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [B, H] = i.useState(Date.now()),
        [F, z] = i.useState(0),
        [Y, K] = i.useState(0),
        [q, Q] = i.useState(!1),
        [X, J] = i.useState(!0),
        $ = i.useRef(B),
        ee = i.useRef(F),
        et = i.useRef(Y),
        en = i.useRef(q),
        er = i.useRef(X),
        [ei, el] = i.useState(C),
        ea = i.useRef(!1);
    function eo() {
        let e = Date.now(),
            t = e - $.current,
            n = ee.current,
            r = et.current;
        return en.current && (z((n += t)), er.current || K((r += t))), H(e), [n, r];
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
                    el(await Promise.all(t));
                } catch (e) {
                    b.Z.captureException(e), el(C);
                }
            };
            !0 !== ea.current && e(), (ea.current = !0);
        }, [l, ei]),
        i.useEffect(
            () => () => {
                null != ei &&
                    ei.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [ei]
        ),
        i.useEffect(() => {
            ($.current = B), (ee.current = F), (et.current = Y), (en.current = q), (er.current = X);
        }, [B, F, Y, q, X]),
        i.useEffect(
            () => () => {
                if ('video' === l.type || 'embed' === l.type) {
                    let [e, t] = eo();
                    m.default.track(E.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: R,
                        seconds_played: Math.round(e / 1000)
                    }),
                        m.default.track(E.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: R,
                            seconds_unmuted: Math.round(t / 1000)
                        });
                }
            },
            [R, l.type]
        ),
        i.useEffect(() => {
            null != P && (0, f.kk)(P);
            let e = Date.now();
            return (
                m.default.track(E.rMx.CHANGE_LOG_OPENED, { change_log_id: R }),
                () => {
                    m.default.track(E.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: R,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != P && (0, f.EW)(P, { dismissAction: O.L.DISMISS });
                }
            );
        }, [P, R]),
        (0, r.jsxs)(s.Y0X, {
            className: a()(y.root, t),
            transitionState: U,
            'aria-labelledby': G,
            children: [
                (0, r.jsx)(s.olH, {
                    className: y.closeButton,
                    onClick: M
                }),
                (0, r.jsx)(_.Z, { className: y.splash }),
                null == j ? void 0 : j(),
                (0, r.jsxs)(s.hzk, {
                    className: y.content,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'display-md',
                            className: a()(y.headerText, Z),
                            children: A
                        }),
                        'video' === l.type
                            ? (0, r.jsx)(h.Z, {
                                  className: a()(y.video, S),
                                  autoPlay: !V,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: l.src,
                                  poster: l.poster,
                                  onPlay: (e) => {
                                      m.default.track(E.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: R }), H(Date.now()), Q(!0), J(e.currentTarget.muted);
                                  },
                                  onEnded: (e) => {
                                      eo(), J(e.currentTarget.muted), Q(!1);
                                  },
                                  onVolumeChange: (e) => {
                                      eo(), J(e.currentTarget.muted);
                                  },
                                  onPause: (e) => {
                                      eo(), J(e.currentTarget.muted), Q(!1);
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == ei
                                          ? void 0
                                          : ei.map((e) => {
                                                let t = (0, N.Vb)().find((t) => t.code === e.locale);
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
                                        m.default.track(E.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: R });
                                    }
                                })
                              : 'image' === l.type
                                ? (0, r.jsx)('img', {
                                      alt: '',
                                      className: a()(y.video, S),
                                      src: l.src
                                  })
                                : null,
                        (0, r.jsxs)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            className: y.subHeader,
                            children: [x, null == L ? void 0 : L()]
                        }),
                        null != k &&
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/medium',
                                className: y.bodyText,
                                children: k
                            }),
                        w.length > 0 &&
                            (0, r.jsx)('div', {
                                className: a()(y.featureCardGroup, { [y.wideStyle]: W }),
                                children: w.map((e, t) => (0, r.jsx)(T, v(I({}, e), { wideStyle: W }), ''.concat(e.header, '_').concat(t)))
                            }),
                        D()
                    ]
                })
            ]
        })
    );
}
