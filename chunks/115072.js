(n.d(t, { default: () => P }), n(953529), n(642613), n(388685), n(784620), n(973216));
var i = n(255367),
    r = n(73800),
    l = n(772848),
    a = n(442837),
    o = n(544891),
    s = n(755721),
    u = n(481060),
    c = n(53281),
    d = n(476326),
    m = n(304761),
    h = n(273031),
    p = n(859235),
    f = n(898463),
    x = n(951394),
    v = n(594174),
    g = n(768581),
    j = n(55935),
    y = n(358085),
    b = n(223356),
    O = n(225452),
    S = n(388032),
    _ = n(606174);
let w = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function P(e) {
    var t, P, C, E;
    let { transitionState: k, onClose: D } = e,
        T = r.useRef(null),
        W = r.useRef(null),
        [N, A] = r.useState(''),
        [R, L] = r.useState(''),
        [I, Z] = r.useState(),
        [z, J] = r.useState(''),
        [M, q] = r.useState([]),
        [B, V] = r.useState(),
        [G, H] = r.useState(),
        [X, U] = r.useState(!1),
        [K, Y] = r.useState(''),
        [F, Q] = r.useState(
            (function (e) {
                switch (e) {
                    case 'windows':
                        return 'Windows';
                    case 'macos':
                        return 'Mac OS X';
                    case 'linux':
                        return 'Linux';
                }
                return '';
            })((0, y.getOS)())
        ),
        [$, ee] = r.useState(''),
        [et, en] = r.useState(''),
        [ei, er] = r.useState(''),
        [el, ea] = r.useState(''),
        [eo, es] = r.useState(!1),
        [eu, ec] = r.useState(!1),
        [ed, em] = r.useState(!1),
        [eh, ep] = r.useState(null);
    r.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        o.tn
            .get({
                url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                query: { cache: e },
                rejectWithError: !0
            })
            .then((e) => {
                if (null != e.body && '0fe9a64eeed2b40e087cbb720c67eea2a44d7a36' !== e.body.hash) {
                    let e = new Date('1754078349097'),
                        t = new Date(),
                        n = (0, j.TD)(t, e);
                    n.hours > 6 && ep(n.hours);
                }
            });
    }, []);
    let ef = (0, a.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ex = (0, a.e7)([m.C], () => {
            var e;
            return null == (e = m.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web;
        }),
        ev = () => {
            null == D || D();
        },
        eg = (e) => {
            q(M.filter((t) => t.id !== e));
        };
    async function ej() {
        var e, t;
        if ((em(!1), '' === N || '' === R || null == I)) return void es(!0);
        let r = null == B || null == (e = B.features) ? void 0 : e.find((e) => (0, b.pD)(e) === G);
        (ec(!0), es(!1));
        let l = (0, O.D)(
                M.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            a = await (0, b.ZD)(
                {
                    name: N,
                    description: R,
                    priority: I,
                    feature: r,
                    url: z,
                    buildOverride: null != (t = null == ex ? void 0 : ex.id) ? t : null
                },
                !0 === X
                    ? {
                          overridePlatformInformation: X,
                          device: K,
                          operatingSystem: F,
                          operatingSystemVersion: $,
                          clientVersion: et,
                          clientBuildNumber: ei,
                          locale: el
                      }
                    : { overridePlatformInformation: X },
                l
            ).catch(() => em(!0));
        (ec(!1),
            null != a && a.ok
                ? (ef && window.open(a.body.permalink_url, '_blank'),
                  ev(),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('64648').then(n.bind(n, 81155));
                      return (t) => {
                          var n, r;
                          return (0, i.jsx)(
                              e,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              ((i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i));
                                          }));
                                  }
                                  return e;
                              })({}, t)),
                              (r = r = { asanaTask: a.body }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              n)
                          );
                      };
                  }))
                : em(!0));
    }
    (r.useEffect(() => {
        async function e() {
            V(await (0, b.WG)());
        }
        ef && e();
    }, [ef]),
        r.useEffect(() => {
            if (M.length > 0) {
                var e;
                null == (e = W.current) ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [M]));
    let ey = r.useCallback(
        (e) => {
            let t = Array.from(e.clipboardData.files)
                .filter((e) => e.type.startsWith('image/'))
                .at(0);
            void 0 === t ||
                M.some((e) => {
                    var n;
                    return e.filename === t.name && (null == (n = e.item.file) ? void 0 : n.size) === t.size;
                }) ||
                q([
                    ...M,
                    new d.ZP({
                        id: (0, l.Z)(),
                        file: t,
                        platform: d.ow.WEB
                    })
                ]);
        },
        [M]
    );
    return (0, i.jsxs)(u.Y0X, {
        transitionState: k,
        'aria-label': S.intl.string(S.t.mCCdws),
        size: u.CgR.MEDIUM,
        parentComponent: 'BugReporterModal',
        children: [
            (0, i.jsx)(u.xBx, {
                children: (0, i.jsx)(u.X6q, {
                    variant: 'heading-lg/semibold',
                    children: (0, i.jsx)(u.H, { children: S.intl.string(S.t['5Lqopa']) })
                })
            }),
            (0, i.jsx)(u.hzk, {
                onPaste: ey,
                children: (0, i.jsxs)('form', {
                    onSubmit: ej,
                    children: [
                        null != ex &&
                            (0, i.jsx)(u.ToO, {
                                type: u.ToO.Types.DANGER,
                                body: S.intl.format(S.t['yY60+/'], { buildOverrideHook: () => (0, i.jsx)('b', { children: null == ex ? void 0 : ex.id }) }),
                                title: S.intl.string(S.t['ZP/hEx'])
                            }),
                        null == ex &&
                            null != eh &&
                            (0, i.jsx)(u.ToO, {
                                type: u.ToO.Types.DANGER,
                                title: S.intl.formatToPlainString(S.t['ql2Q/f'], { hours: eh }),
                                body: S.intl.string(S.t.x18RUl)
                            }),
                        (0, i.jsxs)(u.Kqy, {
                            gap: 24,
                            padding: {
                                top: 8,
                                bottom: 8
                            },
                            children: [
                                (0, i.jsx)(u.xJW, {
                                    error: eo && '' === N ? S.intl.string(S.t.EkokLy) : null,
                                    title: S.intl.string(S.t.OZRgj4),
                                    children: (0, i.jsx)(u.oil, {
                                        placeholder: 'Something is broken on this screen.',
                                        type: 'text',
                                        value: N,
                                        maxLength: 100,
                                        onChange: A
                                    })
                                }),
                                (0, i.jsxs)(u.xJW, {
                                    error: eo && '' === R ? S.intl.string(S.t.EkokLy) : null,
                                    title: S.intl.string(S.t['1SplHx']),
                                    children: [
                                        (0, i.jsx)(u.Kx8, {
                                            placeholder: 'What did you expect to see?',
                                            value: R,
                                            onChange: L
                                        }),
                                        ef &&
                                            (0, i.jsx)(u.R94, {
                                                type: u.geA.DESCRIPTION,
                                                children: 'You can add additional information/media on the ticket after submitting'
                                            })
                                    ]
                                }),
                                (0, i.jsx)(u.xJW, {
                                    error: eo && void 0 === I ? S.intl.string(S.t.EkokLy) : null,
                                    title: S.intl.string(S.t.xMXLdX),
                                    children: (0, i.jsx)(u.q4e, {
                                        renderOptionLabel: (e) =>
                                            (function (e) {
                                                let t = e.priority;
                                                return (0, i.jsxs)('div', {
                                                    className: _.formPriorityImageContainer,
                                                    children: [
                                                        (0, i.jsxs)('div', {
                                                            className: _.formPriorityTitleContainer,
                                                            children: [
                                                                (0, i.jsx)('img', {
                                                                    alt: '',
                                                                    className: _.formPriorityImage,
                                                                    src: (0, g.gT)({
                                                                        id: t.emoji,
                                                                        animated: !0,
                                                                        size: 48
                                                                    })
                                                                }),
                                                                (0, i.jsx)(u.Text, {
                                                                    color: 'header-primary',
                                                                    variant: 'text-sm/semibold',
                                                                    className: _.formPriorityTitle,
                                                                    children: t.title
                                                                })
                                                            ]
                                                        }),
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            className: _.formPriorityDescription,
                                                            children: t.description
                                                        })
                                                    ]
                                                });
                                            })(e),
                                        onChange: Z,
                                        options: (0, b.Tj)().map((e) => ({
                                            priority: e,
                                            value: e.value,
                                            label: e.title
                                        })),
                                        value: I,
                                        maxVisibleItems: 3,
                                        closeOnSelect: !0
                                    })
                                }),
                                ef &&
                                    (0, i.jsx)(u.xJW, {
                                        title: S.intl.string(S.t['77VVd3']),
                                        children: (0, i.jsx)(u.VcW, {
                                            value: G,
                                            options:
                                                null !=
                                                (E =
                                                    null == B ||
                                                    null == (C = B.features) ||
                                                    null == (P = C.filter((e) => '' !== (0, b.pD)(e))) ||
                                                    null ==
                                                        (t = P.map((e) => {
                                                            var t;
                                                            return {
                                                                label: null != (t = e.name) ? t : '',
                                                                value: (0, b.pD)(e)
                                                            };
                                                        }))
                                                        ? void 0
                                                        : t.sort((e, t) => e.label.localeCompare(t.label)))
                                                    ? E
                                                    : [],
                                            isDisabled: null == B,
                                            onChange: (e) => H(e)
                                        })
                                    }),
                                (0, i.jsx)(u.xJW, {
                                    title: S.intl.string(S.t['7p5pqq']),
                                    children: (0, i.jsx)(u.oil, {
                                        placeholder: S.intl.string(S.t.HewMzs),
                                        type: 'text',
                                        value: z,
                                        maxLength: 5000,
                                        onChange: J
                                    })
                                }),
                                (0, i.jsx)(u.xJW, {
                                    children: (0, i.jsx)(u.XZJ, {
                                        value: X,
                                        onChange: (e, t) => U(t),
                                        children: S.intl.string(S.t.ayhqiI)
                                    })
                                }),
                                X
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(u.xJW, {
                                                  title: S.intl.string(S.t.rrI4Tk),
                                                  children: (0, i.jsx)(u.oil, {
                                                      placeholder: 'Device',
                                                      value: K,
                                                      onChange: (e) => Y(e)
                                                  })
                                              }),
                                              (0, i.jsx)(u.xJW, {
                                                  title: S.intl.string(S.t.kcHxi4),
                                                  children: (0, i.jsx)(u.q4e, {
                                                      value: F,
                                                      options: w,
                                                      onChange: (e) => Q(e)
                                                  })
                                              }),
                                              (0, i.jsx)(u.xJW, {
                                                  title: S.intl.string(S.t.rEtxdn),
                                                  children: (0, i.jsx)(u.oil, {
                                                      placeholder: 'Operating System Version',
                                                      value: $,
                                                      onChange: (e) => ee(e)
                                                  })
                                              }),
                                              (0, i.jsx)(u.xJW, {
                                                  title: S.intl.string(S.t['wy1M/v']),
                                                  children: (0, i.jsx)(u.oil, {
                                                      placeholder: 'Client Version',
                                                      value: et,
                                                      onChange: (e) => en(e)
                                                  })
                                              }),
                                              (0, i.jsx)(u.xJW, {
                                                  title: S.intl.string(S.t.f7kbVl),
                                                  children: (0, i.jsx)(u.oil, {
                                                      placeholder: 'Client Build Number',
                                                      value: ei,
                                                      onChange: (e) => er(e)
                                                  })
                                              }),
                                              (0, i.jsx)(u.xJW, {
                                                  title: S.intl.string(S.t['4Z5+zs']),
                                                  children: (0, i.jsx)(u.oil, {
                                                      placeholder: 'Locale',
                                                      value: el,
                                                      onChange: (e) => ea(e)
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, i.jsxs)(s.zx, {
                                    color: s.zx.Colors.PRIMARY,
                                    children: [
                                        S.intl.string(S.t.HVxmOD),
                                        (0, i.jsx)(c.Z, {
                                            ref: T,
                                            onChange: (e) => {
                                                var t, n;
                                                (null == (n = e.currentTarget) || null == (t = n.files) ? void 0 : t[0]) != null &&
                                                    q([
                                                        ...M,
                                                        ...Array.from(e.currentTarget.files).map(
                                                            (e) =>
                                                                new d.ZP({
                                                                    id: (0, l.Z)(),
                                                                    file: e,
                                                                    platform: d.ow.WEB
                                                                })
                                                        )
                                                    ]);
                                            },
                                            multiple: !0
                                        })
                                    ]
                                }),
                                M.length > 0
                                    ? (0, i.jsxs)(u.hjN, {
                                          children: [
                                              (0, i.jsx)(u.vwX, { children: 'Preview' }),
                                              (0, i.jsx)('div', {
                                                  ref: W,
                                                  className: _.attachments,
                                                  children:
                                                      M.length > 0 &&
                                                      M.map((e) =>
                                                          (0, i.jsxs)(
                                                              'div',
                                                              {
                                                                  className: _.attachment,
                                                                  children: [
                                                                      (0, i.jsxs)('div', {
                                                                          children: [
                                                                              (0, i.jsx)(f.r, {
                                                                                  size: p.q.SMALL,
                                                                                  upload: e
                                                                              }),
                                                                              (0, i.jsx)('div', {
                                                                                  className: _.removeAttachment,
                                                                                  children: (0, i.jsx)(x.ZP, {
                                                                                      children: (0, i.jsx)(h.Z, {
                                                                                          tooltip: S.intl.string(S.t.vN7REx),
                                                                                          onClick: () => eg(e.id),
                                                                                          dangerous: !0,
                                                                                          children: (0, i.jsx)(u.XHJ, {
                                                                                              size: 'md',
                                                                                              color: 'currentColor'
                                                                                          })
                                                                                      })
                                                                                  })
                                                                              })
                                                                          ]
                                                                      }),
                                                                      (0, i.jsx)(u.Text, {
                                                                          variant: 'text-xxs/medium',
                                                                          color: 'text-secondary',
                                                                          children: e.filename
                                                                      })
                                                                  ]
                                                              },
                                                              e.id
                                                          )
                                                      )
                                              })
                                          ]
                                      })
                                    : null,
                                ed
                                    ? (0, i.jsx)(u.Text, {
                                          color: 'text-danger',
                                          variant: 'text-sm/normal',
                                          children: 'Something went wrong, try again!'
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.mzw, {
                children: (0, i.jsxs)(u.Kqy, {
                    direction: 'horizontal',
                    gap: 8,
                    justify: 'end',
                    children: [
                        (0, i.jsx)(u.zxk, {
                            variant: 'primary',
                            text: ef ? 'Submit and Open Report' : 'Submit Report',
                            loading: eu,
                            onClick: ej
                        }),
                        (0, i.jsx)(u.zxk, {
                            variant: 'secondary',
                            text: S.intl.string(S.t['ETE/oK']),
                            onClick: ev
                        })
                    ]
                })
            })
        ]
    });
}
