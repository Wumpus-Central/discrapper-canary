n.d(t, { Z: () => A }), n(47120), n(411104), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(446411),
    u = n(468846),
    h = n(313201),
    m = n(70097),
    p = n(605236),
    g = n(524444),
    _ = n(626135),
    f = n(960048),
    E = n(565216),
    I = n(981631),
    C = n(921944),
    v = n(388032),
    N = n(616661);
let T = [],
    S = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(o.IGR, {
            className: a()(N.tag, n),
            text: t
        });
    },
    Z = (e) => {
        let { header: t, subHeader: n, imageSrc: l, tagText: r, wideStyle: s } = e;
        return (0, i.jsxs)('div', {
            className: a()(N.featureCard, { [N.wideStyle]: s }),
            children: [
                null != r
                    ? (0, i.jsx)(S, {
                          tagText: r,
                          className: N.featureCardTag
                      })
                    : null,
                (0, i.jsx)('img', {
                    alt: '',
                    className: a()(N.featureCardImg, { [N.wideStyle]: s }),
                    src: l
                }),
                (0, i.jsxs)('div', {
                    className: N.featureCardTextGroup,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: 'heading-md/extrabold',
                            className: N.featureCardTextHeader,
                            children: t
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: n
                        })
                    ]
                })
            ]
        });
    };
function A(e) {
    let { className: t, renderModalProps: n, heroArt: r, heroArtClassName: S, modalDismissibleContent: A, modalTopExtra: x, header: b, headerClassName: L, subHeader: y, subHeaderExtra: P, featureCards: O, changeLogId: R, button: j, body: D } = e,
        { onClose: w, transitionState: M } = n,
        k = (0, h.Dt)(),
        U = O.length % 2 == 0,
        G = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        [B, V] = l.useState(Date.now()),
        [H, F] = l.useState(0),
        [z, W] = l.useState(0),
        [Y, K] = l.useState(!1),
        [q, X] = l.useState(!0),
        Q = l.useRef(B),
        J = l.useRef(H),
        $ = l.useRef(z),
        ee = l.useRef(Y),
        et = l.useRef(q),
        [en, ei] = l.useState(T),
        el = l.useRef(!1);
    function er() {
        let e = Date.now(),
            t = e - Q.current,
            n = J.current,
            i = $.current;
        return ee.current && (F((n += t)), et.current || W((i += t))), V(e), [n, i];
    }
    return (
        l.useEffect(() => {
            let e = async () => {
                try {
                    var e;
                    if ('video' !== r.type || null == r.subtitles) return;
                    let t =
                        null === (e = r.subtitles) || void 0 === e
                            ? void 0
                            : e.map(async (e) => {
                                  let t = await fetch(e.src);
                                  if (!t.ok) throw Error('Failed to fetch the subtitle file '.concat(e.src));
                                  let n = await t.text(),
                                      i = new Blob([n], { type: 'text/vtt' }),
                                      l = URL.createObjectURL(i);
                                  return {
                                      ...e,
                                      src: l
                                  };
                              });
                    ei(await Promise.all(t));
                } catch (e) {
                    f.Z.captureException(e), ei(T);
                }
            };
            !0 !== el.current && e(), (el.current = !0);
        }, [r, en]),
        l.useEffect(
            () => () => {
                null != en &&
                    en.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [en]
        ),
        l.useEffect(() => {
            (Q.current = B), (J.current = H), ($.current = z), (ee.current = Y), (et.current = q);
        }, [B, H, z, Y, q]),
        l.useEffect(
            () => () => {
                if ('video' === r.type || 'embed' === r.type) {
                    let [e, t] = er();
                    _.default.track(I.rMx.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: R,
                        seconds_played: Math.round(e / 1000)
                    }),
                        _.default.track(I.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: R,
                            seconds_unmuted: Math.round(t / 1000)
                        });
                }
            },
            [R, r.type]
        ),
        l.useEffect(() => {
            null != A && (0, p.kk)(A);
            let e = Date.now();
            return (
                _.default.track(I.rMx.CHANGE_LOG_OPENED, { change_log_id: R }),
                () => {
                    _.default.track(I.rMx.CHANGE_LOG_CLOSED, {
                        change_log_id: R,
                        seconds_open: Math.round((Date.now() - e) / 1000)
                    }),
                        null != A && (0, p.EW)(A, { dismissAction: C.L.DISMISS });
                }
            );
        }, [A, R]),
        (0, i.jsxs)(o.Y0X, {
            className: a()(N.root, t),
            transitionState: M,
            'aria-labelledby': k,
            children: [
                (0, i.jsx)(o.olH, {
                    className: N.closeButton,
                    onClick: w
                }),
                (0, i.jsx)(E.Z, { className: N.splash }),
                null == x ? void 0 : x(),
                (0, i.jsxs)(o.hzk, {
                    className: N.content,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: 'display-md',
                            className: a()(N.headerText, L),
                            children: b
                        }),
                        'video' === r.type
                            ? (0, i.jsx)(m.Z, {
                                  className: a()(N.video, S),
                                  autoPlay: !G,
                                  loop: !0,
                                  muted: !0,
                                  controls: !0,
                                  controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
                                  src: r.src,
                                  poster: r.poster,
                                  onPlay: (e) => {
                                      _.default.track(I.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: R }), V(Date.now()), K(!0), X(e.currentTarget.muted);
                                  },
                                  onEnded: (e) => {
                                      er(), X(e.currentTarget.muted), K(!1);
                                  },
                                  onVolumeChange: (e) => {
                                      er(), X(e.currentTarget.muted);
                                  },
                                  onPause: (e) => {
                                      er(), X(e.currentTarget.muted), K(!1);
                                  },
                                  disablePictureInPicture: !0,
                                  children:
                                      null == en
                                          ? void 0
                                          : en.map((e) => {
                                                let t = (0, v.getLanguages)().find((t) => t.code === e.locale);
                                                return null == t
                                                    ? null
                                                    : (0, i.jsx)(
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
                            : 'embed' === r.type
                              ? (0, i.jsx)(d.BC, {
                                    className: a()(N.video, S),
                                    allowFullScreen: !1,
                                    href: r.href,
                                    thumbnail: r.thumbnail,
                                    video: r.embed,
                                    provider: u.pn.YOUTUBE,
                                    maxWidth: r.embed.width,
                                    maxHeight: r.embed.height,
                                    renderVideoComponent: g.lV,
                                    renderImageComponent: g.Yi,
                                    renderLinkComponent: g.iT,
                                    onPlay: () => {
                                        _.default.track(I.rMx.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: R });
                                    }
                                })
                              : 'image' === r.type
                                ? (0, i.jsx)('img', {
                                      alt: '',
                                      className: a()(N.video, S),
                                      src: r.src
                                  })
                                : null,
                        (0, i.jsxs)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            className: N.subHeader,
                            children: [y, null == P ? void 0 : P()]
                        }),
                        null != D &&
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/medium',
                                className: N.bodyText,
                                children: D
                            }),
                        O.length > 0 &&
                            (0, i.jsx)('div', {
                                className: a()(N.featureCardGroup, { [N.wideStyle]: U }),
                                children: O.map((e, t) =>
                                    (0, i.jsx)(
                                        Z,
                                        {
                                            ...e,
                                            wideStyle: U
                                        },
                                        ''.concat(e.header, '_').concat(t)
                                    )
                                )
                            }),
                        j()
                    ]
                })
            ]
        })
    );
}
