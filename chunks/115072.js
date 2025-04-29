n.d(t, { default: () => S }), n(953529), n(642613), n(388685), n(784620), n(973216);
var i = n(200651),
    r = n(192379),
    l = n(772848),
    a = n(442837),
    o = n(544891),
    s = n(481060),
    c = n(53281),
    u = n(476326),
    d = n(304761),
    m = n(273031),
    h = n(859235),
    f = n(898463),
    p = n(951394),
    x = n(594174),
    v = n(768581),
    g = n(55935),
    j = n(358085),
    y = n(223356),
    b = n(225452),
    O = n(388032),
    _ = n(606174);
let w = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function S(e) {
    var t, S, P, C;
    let { transitionState: E, onClose: k } = e,
        D = r.useRef(null),
        T = r.useRef(null),
        [W, N] = r.useState(''),
        [A, R] = r.useState(''),
        [I, L] = r.useState(),
        [Z, z] = r.useState(''),
        [J, M] = r.useState([]),
        [V, q] = r.useState(),
        [B, G] = r.useState(),
        [H, X] = r.useState(!1),
        [U, Y] = r.useState(''),
        [K, F] = r.useState(
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
            })((0, j.getOS)())
        ),
        [Q, $] = r.useState(''),
        [ee, et] = r.useState(''),
        [en, ei] = r.useState(''),
        [er, el] = r.useState(''),
        [ea, eo] = r.useState(!1),
        [es, ec] = r.useState(!1),
        [eu, ed] = r.useState(!1),
        [em, eh] = r.useState(!1);
    r.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        o.tn
            .get({
                url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                query: { cache: e },
                rejectWithError: !0
            })
            .then((e) => {
                if (null != e.body && '6cf8cfa52a982174825a1a40737a45a175f5d855' !== e.body.hash) {
                    {
                        let e = new Date('1745902505266'),
                            t = new Date();
                        (0, g.TD)(t, e).hours > 6 && eh(!0);
                    }
                    eh(!0);
                }
            });
    }, []);
    let ef = (0, a.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ep = (0, a.e7)([d.C], () => {
            var e;
            return null == (e = d.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web;
        }),
        ex = () => {
            null == k || k();
        },
        ev = (e) => {
            M(J.filter((t) => t.id !== e));
        };
    async function eg() {
        var e, t;
        if ((ed(!1), '' === W || null == I)) return void eo(!0);
        let r = null == V || null == (e = V.features) ? void 0 : e.find((e) => (0, y.pD)(e) === B);
        ec(!0), eo(!1);
        let l = (0, b.D)(
                J.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            a = await (0, y.ZD)(
                {
                    name: W,
                    description: A,
                    priority: I,
                    feature: r,
                    url: Z,
                    buildOverride: null != (t = null == ep ? void 0 : ep.id) ? t : null
                },
                !0 === H
                    ? {
                          overridePlatformInformation: H,
                          device: U,
                          operatingSystem: K,
                          operatingSystemVersion: Q,
                          clientVersion: ee,
                          clientBuildNumber: en,
                          locale: er
                      }
                    : { overridePlatformInformation: H },
                l
            ).catch(() => ed(!0));
        ec(!1),
            null != a && a.ok
                ? (ef && window.open(a.body.permalink_url, '_blank'),
                  ex(),
                  (0, s.ZDy)(async () => {
                      let { default: e } = await n.e('64648').then(n.bind(n, 81155));
                      return (t) => {
                          var n, r;
                          return (0, i.jsx)(
                              e,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
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
                : ed(!0);
    }
    r.useEffect(() => {
        async function e() {
            q(await (0, y.WG)());
        }
        ef && e();
    }, [ef]),
        r.useEffect(() => {
            if (J.length > 0) {
                var e;
                null == (e = T.current) ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [J]);
    let ej = r.useCallback(
        (e) => {
            let t = Array.from(e.clipboardData.files)
                .filter((e) => e.type.startsWith('image/'))
                .at(0);
            void 0 === t ||
                J.some((e) => {
                    var n;
                    return e.filename === t.name && (null == (n = e.item.file) ? void 0 : n.size) === t.size;
                }) ||
                M([
                    ...J,
                    new u.ZP({
                        id: (0, l.Z)(),
                        file: t,
                        platform: u.ow.WEB
                    })
                ]);
        },
        [J]
    );
    return (0, i.jsxs)(s.Y0X, {
        transitionState: E,
        'aria-label': O.intl.string(O.t.mCCdws),
        size: s.CgR.MEDIUM,
        children: [
            (0, i.jsx)(s.xBx, {
                children: (0, i.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    children: (0, i.jsx)(s.H, { children: O.intl.string(O.t['5Lqopa']) })
                })
            }),
            (0, i.jsx)(s.hzk, {
                onPaste: ej,
                children: (0, i.jsxs)('form', {
                    onSubmit: eg,
                    children: [
                        null != ep &&
                            (0, i.jsx)(s.ToO, {
                                type: s.ToO.Types.DANGER,
                                body: O.intl.format(O.t['yY60+/'], { buildOverrideHook: () => (0, i.jsx)('b', { children: null == ep ? void 0 : ep.id }) }),
                                title: O.intl.string(O.t['ZP/hEx'])
                            }),
                        null == ep &&
                            em &&
                            (0, i.jsx)(s.ToO, {
                                type: s.ToO.Types.DANGER,
                                body: O.intl.string(O.t.x18RUl),
                                title: O.intl.string(O.t.cTVCIC)
                            }),
                        (0, i.jsxs)(s.Kqy, {
                            gap: 24,
                            padding: {
                                top: 8,
                                bottom: 8
                            },
                            children: [
                                (0, i.jsx)(s.xJW, {
                                    error: ea && '' === W ? O.intl.string(O.t.EkokLy) : null,
                                    title: O.intl.string(O.t.OZRgj4),
                                    children: (0, i.jsx)(s.oil, {
                                        placeholder: 'Something is broken on this screen.',
                                        type: 'text',
                                        value: W,
                                        maxLength: 100,
                                        onChange: N
                                    })
                                }),
                                (0, i.jsxs)(s.xJW, {
                                    title: O.intl.string(O.t['1SplHx']),
                                    children: [
                                        (0, i.jsx)(s.Kx8, {
                                            placeholder: 'What did you expect to see?',
                                            value: A,
                                            onChange: R
                                        }),
                                        (0, i.jsx)(s.R94, {
                                            type: s.geA.DESCRIPTION,
                                            children: 'You can add additional information/media on the ticket after submitting'
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.xJW, {
                                    error: ea && void 0 === I ? O.intl.string(O.t.EkokLy) : null,
                                    title: O.intl.string(O.t.xMXLdX),
                                    children: (0, i.jsx)(s.q4e, {
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
                                                                    src: (0, v.gT)({
                                                                        id: t.emoji,
                                                                        animated: !0,
                                                                        size: 48
                                                                    })
                                                                }),
                                                                (0, i.jsx)(s.Text, {
                                                                    color: 'header-primary',
                                                                    variant: 'text-sm/semibold',
                                                                    className: _.formPriorityTitle,
                                                                    children: t.title
                                                                })
                                                            ]
                                                        }),
                                                        (0, i.jsx)(s.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            className: _.formPriorityDescription,
                                                            children: t.description
                                                        })
                                                    ]
                                                });
                                            })(e),
                                        onChange: L,
                                        options: (0, y.Tj)().map((e) => ({
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
                                    (0, i.jsx)(s.xJW, {
                                        title: O.intl.string(O.t['77VVd3']),
                                        children: (0, i.jsx)(s.VcW, {
                                            value: B,
                                            options:
                                                null !=
                                                (C =
                                                    null == V ||
                                                    null == (P = V.features) ||
                                                    null == (S = P.filter((e) => '' !== (0, y.pD)(e))) ||
                                                    null ==
                                                        (t = S.map((e) => {
                                                            var t;
                                                            return {
                                                                label: null != (t = e.name) ? t : '',
                                                                value: (0, y.pD)(e)
                                                            };
                                                        }))
                                                        ? void 0
                                                        : t.sort((e, t) => e.label.localeCompare(t.label)))
                                                    ? C
                                                    : [],
                                            isDisabled: null == V,
                                            onChange: (e) => G(e)
                                        })
                                    }),
                                (0, i.jsx)(s.xJW, {
                                    title: O.intl.string(O.t['7p5pqq']),
                                    children: (0, i.jsx)(s.oil, {
                                        placeholder: O.intl.string(O.t.HewMzs),
                                        type: 'text',
                                        value: Z,
                                        maxLength: 5000,
                                        onChange: z
                                    })
                                }),
                                (0, i.jsx)(s.xJW, {
                                    children: (0, i.jsx)(s.XZJ, {
                                        value: H,
                                        onChange: (e, t) => X(t),
                                        children: O.intl.string(O.t.ayhqiI)
                                    })
                                }),
                                H
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(s.xJW, {
                                                  title: O.intl.string(O.t.rrI4Tk),
                                                  children: (0, i.jsx)(s.oil, {
                                                      placeholder: 'Device',
                                                      value: U,
                                                      onChange: (e) => Y(e)
                                                  })
                                              }),
                                              (0, i.jsx)(s.xJW, {
                                                  title: O.intl.string(O.t.kcHxi4),
                                                  children: (0, i.jsx)(s.q4e, {
                                                      value: K,
                                                      options: w,
                                                      onChange: (e) => F(e)
                                                  })
                                              }),
                                              (0, i.jsx)(s.xJW, {
                                                  title: O.intl.string(O.t.rEtxdn),
                                                  children: (0, i.jsx)(s.oil, {
                                                      placeholder: 'Operating System Version',
                                                      value: Q,
                                                      onChange: (e) => $(e)
                                                  })
                                              }),
                                              (0, i.jsx)(s.xJW, {
                                                  title: O.intl.string(O.t['wy1M/v']),
                                                  children: (0, i.jsx)(s.oil, {
                                                      placeholder: 'Client Version',
                                                      value: ee,
                                                      onChange: (e) => et(e)
                                                  })
                                              }),
                                              (0, i.jsx)(s.xJW, {
                                                  title: O.intl.string(O.t.f7kbVl),
                                                  children: (0, i.jsx)(s.oil, {
                                                      placeholder: 'Client Build Number',
                                                      value: en,
                                                      onChange: (e) => ei(e)
                                                  })
                                              }),
                                              (0, i.jsx)(s.xJW, {
                                                  title: O.intl.string(O.t['4Z5+zs']),
                                                  children: (0, i.jsx)(s.oil, {
                                                      placeholder: 'Locale',
                                                      value: er,
                                                      onChange: (e) => el(e)
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, i.jsxs)(s.zxk, {
                                    color: s.zxk.Colors.PRIMARY,
                                    children: [
                                        O.intl.string(O.t.HVxmOD),
                                        (0, i.jsx)(c.Z, {
                                            ref: D,
                                            onChange: (e) => {
                                                var t, n;
                                                (null == (n = e.currentTarget) || null == (t = n.files) ? void 0 : t[0]) != null &&
                                                    M([
                                                        ...J,
                                                        ...Array.from(e.currentTarget.files).map(
                                                            (e) =>
                                                                new u.ZP({
                                                                    id: (0, l.Z)(),
                                                                    file: e,
                                                                    platform: u.ow.WEB
                                                                })
                                                        )
                                                    ]);
                                            },
                                            multiple: !0
                                        })
                                    ]
                                }),
                                J.length > 0
                                    ? (0, i.jsxs)(s.hjN, {
                                          children: [
                                              (0, i.jsx)(s.vwX, { children: 'Preview' }),
                                              (0, i.jsx)('div', {
                                                  ref: T,
                                                  className: _.attachments,
                                                  children:
                                                      J.length > 0 &&
                                                      J.map((e) =>
                                                          (0, i.jsxs)(
                                                              'div',
                                                              {
                                                                  className: _.attachment,
                                                                  children: [
                                                                      (0, i.jsxs)('div', {
                                                                          children: [
                                                                              (0, i.jsx)(f.r, {
                                                                                  size: h.q.SMALL,
                                                                                  upload: e
                                                                              }),
                                                                              (0, i.jsx)('div', {
                                                                                  className: _.removeAttachment,
                                                                                  children: (0, i.jsx)(p.ZP, {
                                                                                      children: (0, i.jsx)(m.Z, {
                                                                                          tooltip: O.intl.string(O.t.vN7REx),
                                                                                          onClick: () => ev(e.id),
                                                                                          dangerous: !0,
                                                                                          children: (0, i.jsx)(s.XHJ, {
                                                                                              size: 'md',
                                                                                              color: 'currentColor'
                                                                                          })
                                                                                      })
                                                                                  })
                                                                              })
                                                                          ]
                                                                      }),
                                                                      (0, i.jsx)(s.Text, {
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
                                eu
                                    ? (0, i.jsx)(s.Text, {
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
            (0, i.jsx)(s.mzw, {
                children: (0, i.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    gap: 8,
                    justify: 'end',
                    children: [
                        (0, i.jsx)(s.zxk, {
                            submitting: es,
                            onClick: eg,
                            children: 'Submit and Open Report'
                        }),
                        (0, i.jsx)(s.zxk, {
                            color: s.zxk.Colors.PRIMARY,
                            onClick: ex,
                            children: O.intl.string(O.t['ETE/oK'])
                        })
                    ]
                })
            })
        ]
    });
}
