(n.d(t, { Z: () => P }), n(388685), n(415506), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
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
    f = n(266454),
    g = n(605236),
    m = n(524444),
    b = n(626135),
    _ = n(960048),
    O = n(981631),
    E = n(921944),
    y = n(388032),
    v = n(937976);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function C(e, t) {
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
let S = [],
    N = (e) => {
        let { tagText: t, className: n } = e;
        return (0, r.jsx)(s.IGR, {
            className: a()(v.tag, n),
            text: t
        });
    },
    T = (e) => {
        let { header: t, subHeader: n, imageSrc: i, tagText: l, wideStyle: o } = e;
        return (0, r.jsxs)('div', {
            className: a()(v.featureCard, { [v.wideStyle]: o }),
            children: [
                null != l
                    ? (0, r.jsx)(N, {
                          tagText: l,
                          className: v.featureCardTag
                      })
                    : null,
                (0, r.jsx)('img', {
                    alt: '',
                    className: a()(v.featureCardImg, { [v.wideStyle]: o }),
                    src: i
                }),
                (0, r.jsxs)('div', {
                    className: v.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-md/extrabold',
                            className: v.featureCardTextHeader,
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
    let { className: t, renderModalProps: n, heroArt: l, heroArtClassName: N, modalDismissibleContent: P, modalTopExtra: j, header: A, headerClassName: Z, subHeader: x, subHeaderExtra: w, featureCards: L, changeLogId: R, button: D, body: k } = e,
        { onClose: M, transitionState: U } = n,
        G = (0, p.Dt)(),
        V = L.length % 2 == 0,
        H = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [B, F] = i.useState(Date.now()),
        [z, W] = i.useState(0),
        [Y, K] = i.useState(0),
        [q, Q] = i.useState(!1),
        [X, J] = i.useState(!0),
        $ = i.useRef(B),
        ee = i.useRef(z),
        et = i.useRef(Y),
        en = i.useRef(q),
        er = i.useRef(X),
        [ei, el] = i.useState(S),
        ea = i.useRef(!1);
    function eo() {
        let e = Date.now(),
            t = e - $.current,
            n = ee.current,
            r = et.current;
        return (en.current && (W((n += t)), er.current || K((r += t))), F(e), [n, r]);
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
                                  return C(I({}, e), { src: i });
                              });
                    el(await Promise.all(t));
                } catch (e) {
                    (_.Z.captureException(e), el(S));
                }
            };
            (!0 !== ea.current && e(), (ea.current = !0));
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
            (($.current = B), (ee.current = z), (et.current = Y), (en.current = q), (er.current = X));
        }, [B, z, Y, q, X]),
        i.useEffect(
            () => () => {
                if ('video' === l.type || 'embed' === l.type) {
                    let [e, t] = eo();
                    (b.default.track(O.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: R,
                        seconds_played: Math.round(e / 1000)
                    }),
                        b.default.track(O.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: R,
                            seconds_unmuted: Math.round(t / 1000)
                        }));
                }
            },
            [R, l.type]
        ),
        i.useEffect(() => {
            null != P && (0, g.kk)(P);
            let e = Date.now();
            return (
                b.default.track(O.rMx.CHANGE_LOG_OPENED, { change_log_id: R }),
                () => {
                    (b.default.track(O.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: R,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != P && (0, f.Q3)(P, { dismissAction: E.L.DISMISS }));
                }
            );
        }, [P, R]),
        (0, r.jsxs)(s.Y0X, {
            className: a()(v.root, t),
            transitionState: U,
            'aria-labelledby': G,
            parentComponent: 'PremiumAnnouncementModalVariant1',
            children: [
                (0, r.jsx)(s.olH, {
                    className: v.closeButton,
                    onClick: M
                }),
                null == j ? void 0 : j(),
                (0, r.jsxs)(s.hzk, {
                    className: v.content,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'display-md',
                            className: a()(v.headerText, Z),
                            children: A
                        }),
                        'video' === l.type
                            ? (0, r.jsx)(h.Z, {
                                  className: a()(v.video, N),
                                  autoPlay: !H,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: l.src,
                                  poster: l.poster,
                                  onPlay: (e) => {
                                      (b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: R }), F(Date.now()), Q(!0), J(e.currentTarget.muted));
                                  },
                                  onEnded: (e) => {
                                      (eo(), J(e.currentTarget.muted), Q(!1));
                                  },
                                  onVolumeChange: (e) => {
                                      (eo(), J(e.currentTarget.muted));
                                  },
                                  onPause: (e) => {
                                      (eo(), J(e.currentTarget.muted), Q(!1));
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == ei
                                          ? void 0
                                          : ei.map((e) => {
                                                let t = (0, y.getLanguages)().find((t) => t.code === e.locale);
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
                                    className: a()(v.video, N),
                                    allowFullScreen: !1,
                                    href: l.href,
                                    thumbnail: l.thumbnail,
                                    video: l.embed,
                                    provider: d.pn.YOUTUBE,
                                    maxWidth: l.embed.width,
                                    maxHeight: l.embed.height,
                                    renderVideoComponent: m.lV,
                                    renderImageComponent: m.Yi,
                                    renderLinkComponent: m.iT,
                                    onPlay: () => {
                                        b.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: R });
                                    }
                                })
                              : 'image' === l.type
                                ? (0, r.jsx)('img', {
                                      alt: '',
                                      className: a()(v.video, N),
                                      src: l.src
                                  })
                                : null,
                        (0, r.jsxs)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            className: v.subHeader,
                            children: [x, null == w ? void 0 : w()]
                        }),
                        null != k &&
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/medium',
                                className: v.bodyText,
                                children: k
                            }),
                        L.length > 0 &&
                            (0, r.jsx)('div', {
                                className: a()(v.featureCardGroup, { [v.wideStyle]: V }),
                                children: L.map((e, t) => (0, r.jsx)(T, C(I({}, e), { wideStyle: V }), ''.concat(e.header, '_').concat(t)))
                            }),
                        D()
                    ]
                })
            ]
        })
    );
}
