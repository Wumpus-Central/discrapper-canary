r.d(t, { default: () => _ }), r(953529), r(642613), r(388685), r(784620), r(973216);
var n = r(200651),
    i = r(192379),
    l = r(772848),
    a = r(442837),
    o = r(544891),
    s = r(481060),
    c = r(53281),
    u = r(476326),
    d = r(304761),
    m = r(273031),
    h = r(859235),
    f = r(898463),
    p = r(951394),
    x = r(594174),
    v = r(768581),
    g = r(55935),
    j = r(358085),
    y = r(223356),
    b = r(225452),
    W = r(388032),
    N = r(606174);
let O = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function _(e) {
    var t, _, w, S;
    let { transitionState: P, onClose: C } = e,
        E = i.useRef(null),
        k = i.useRef(null),
        [D, T] = i.useState(''),
        [A, R] = i.useState(''),
        [I, L] = i.useState(),
        [Z, z] = i.useState(''),
        [J, M] = i.useState([]),
        [V, q] = i.useState(),
        [B, G] = i.useState(),
        [H, X] = i.useState(!1),
        [U, Y] = i.useState(''),
        [K, F] = i.useState(
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
        [Q, $] = i.useState(''),
        [ee, et] = i.useState(''),
        [er, en] = i.useState(''),
        [ei, el] = i.useState(''),
        [ea, eo] = i.useState(!1),
        [es, ec] = i.useState(!1),
        [eu, ed] = i.useState(!1),
        [em, eh] = i.useState(!1);
    i.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        o.tn
            .get({
                url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                query: { cache: e },
                rejectWithError: !0
            })
            .then((e) => {
                if (null != e.body && '6c9fe4b3ddce2f5cb7ffb668008666e1a2990552' !== e.body.hash) {
                    {
                        let e = new Date('1744734929557'),
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
            null == C || C();
        },
        ev = (e) => {
            M(J.filter((t) => t.id !== e));
        };
    async function eg() {
        var e, t;
        if ((ed(!1), '' === D || null == I)) return void eo(!0);
        let i = null == V || null == (e = V.features) ? void 0 : e.find((e) => (0, y.pD)(e) === B);
        ec(!0), eo(!1);
        let l = (0, b.D)(
                J.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            a = await (0, y.ZD)(
                {
                    name: D,
                    description: A,
                    priority: I,
                    feature: i,
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
                          clientBuildNumber: er,
                          locale: ei
                      }
                    : { overridePlatformInformation: H },
                l
            ).catch(() => ed(!0));
        ec(!1),
            null != a && a.ok
                ? (ef && window.open(a.body.permalink_url, '_blank'),
                  ex(),
                  (0, s.ZDy)(async () => {
                      let { default: e } = await r.e('64648').then(r.bind(r, 81155));
                      return (t) => {
                          var r, i;
                          return (0, n.jsx)(
                              e,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (i = i = { asanaTask: a.body }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              r)
                          );
                      };
                  }))
                : ed(!0);
    }
    i.useEffect(() => {
        async function e() {
            q(await (0, y.WG)());
        }
        ef && e();
    }, [ef]),
        i.useEffect(() => {
            if (J.length > 0) {
                var e;
                null == (e = k.current) ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [J]);
    let ej = i.useCallback(
        (e) => {
            let t = Array.from(e.clipboardData.files)
                .filter((e) => e.type.startsWith('image/'))
                .at(0);
            void 0 === t ||
                J.some((e) => {
                    var r;
                    return e.filename === t.name && (null == (r = e.item.file) ? void 0 : r.size) === t.size;
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
    return (0, n.jsxs)(s.Y0X, {
        transitionState: P,
        'aria-label': W.NW.string(W.t.mCCdws),
        size: s.CgR.MEDIUM,
        children: [
            (0, n.jsx)(s.xBx, {
                children: (0, n.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    children: (0, n.jsx)(s.H, { children: W.NW.string(W.t['5Lqopa']) })
                })
            }),
            (0, n.jsx)(s.hzk, {
                onPaste: ej,
                children: (0, n.jsxs)('form', {
                    onSubmit: eg,
                    children: [
                        null != ep &&
                            (0, n.jsx)(s.ToO, {
                                type: s.ToO.Types.DANGER,
                                body: W.NW.format(W.t['yY60+/'], { buildOverrideHook: () => (0, n.jsx)('b', { children: null == ep ? void 0 : ep.id }) }),
                                title: W.NW.string(W.t['ZP/hEx'])
                            }),
                        null == ep &&
                            em &&
                            (0, n.jsx)(s.ToO, {
                                type: s.ToO.Types.DANGER,
                                body: W.NW.string(W.t.x18RUl),
                                title: W.NW.string(W.t.cTVCIC)
                            }),
                        (0, n.jsxs)(s.Kqy, {
                            gap: 24,
                            padding: {
                                top: 8,
                                bottom: 8
                            },
                            children: [
                                (0, n.jsx)(s.xJW, {
                                    error: ea && '' === D ? W.NW.string(W.t.EkokLy) : null,
                                    title: W.NW.string(W.t.OZRgj4),
                                    children: (0, n.jsx)(s.oil, {
                                        placeholder: 'Something is broken on this screen.',
                                        type: 'text',
                                        value: D,
                                        maxLength: 100,
                                        onChange: T
                                    })
                                }),
                                (0, n.jsxs)(s.xJW, {
                                    title: W.NW.string(W.t['1SplHx']),
                                    children: [
                                        (0, n.jsx)(s.Kx8, {
                                            placeholder: 'What did you expect to see?',
                                            value: A,
                                            onChange: R
                                        }),
                                        (0, n.jsx)(s.R94, {
                                            type: s.geA.DESCRIPTION,
                                            children: 'You can add additional information/media on the ticket after submitting'
                                        })
                                    ]
                                }),
                                (0, n.jsx)(s.xJW, {
                                    error: ea && void 0 === I ? W.NW.string(W.t.EkokLy) : null,
                                    title: W.NW.string(W.t.xMXLdX),
                                    children: (0, n.jsx)(s.q4e, {
                                        renderOptionLabel: (e) =>
                                            (function (e) {
                                                let t = e.priority;
                                                return (0, n.jsxs)('div', {
                                                    className: N.formPriorityImageContainer,
                                                    children: [
                                                        (0, n.jsxs)('div', {
                                                            className: N.formPriorityTitleContainer,
                                                            children: [
                                                                (0, n.jsx)('img', {
                                                                    alt: '',
                                                                    className: N.formPriorityImage,
                                                                    src: (0, v.gT)({
                                                                        id: t.emoji,
                                                                        animated: !0,
                                                                        size: 48
                                                                    })
                                                                }),
                                                                (0, n.jsx)(s.Text, {
                                                                    color: 'header-primary',
                                                                    variant: 'text-sm/semibold',
                                                                    className: N.formPriorityTitle,
                                                                    children: t.title
                                                                })
                                                            ]
                                                        }),
                                                        (0, n.jsx)(s.Text, {
                                                            color: 'header-secondary',
                                                            variant: 'text-xs/normal',
                                                            className: N.formPriorityDescription,
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
                                    (0, n.jsx)(s.xJW, {
                                        title: W.NW.string(W.t['77VVd3']),
                                        children: (0, n.jsx)(s.VcW, {
                                            value: B,
                                            options:
                                                null !=
                                                (S =
                                                    null == V ||
                                                    null == (w = V.features) ||
                                                    null == (_ = w.filter((e) => '' !== (0, y.pD)(e))) ||
                                                    null ==
                                                        (t = _.map((e) => {
                                                            var t;
                                                            return {
                                                                label: null != (t = e.name) ? t : '',
                                                                value: (0, y.pD)(e)
                                                            };
                                                        }))
                                                        ? void 0
                                                        : t.sort((e, t) => e.label.localeCompare(t.label)))
                                                    ? S
                                                    : [],
                                            isDisabled: null == V,
                                            onChange: (e) => G(e)
                                        })
                                    }),
                                (0, n.jsx)(s.xJW, {
                                    title: W.NW.string(W.t['7p5pqq']),
                                    children: (0, n.jsx)(s.oil, {
                                        placeholder: W.NW.string(W.t.HewMzs),
                                        type: 'text',
                                        value: Z,
                                        maxLength: 5000,
                                        onChange: z
                                    })
                                }),
                                (0, n.jsx)(s.xJW, {
                                    children: (0, n.jsx)(s.XZJ, {
                                        value: H,
                                        onChange: (e, t) => X(t),
                                        children: W.NW.string(W.t.ayhqiI)
                                    })
                                }),
                                H
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.rrI4Tk),
                                                  children: (0, n.jsx)(s.oil, {
                                                      placeholder: 'Device',
                                                      value: U,
                                                      onChange: (e) => Y(e)
                                                  })
                                              }),
                                              (0, n.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.kcHxi4),
                                                  children: (0, n.jsx)(s.q4e, {
                                                      value: K,
                                                      options: O,
                                                      onChange: (e) => F(e)
                                                  })
                                              }),
                                              (0, n.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.rEtxdn),
                                                  children: (0, n.jsx)(s.oil, {
                                                      placeholder: 'Operating System Version',
                                                      value: Q,
                                                      onChange: (e) => $(e)
                                                  })
                                              }),
                                              (0, n.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t['wy1M/v']),
                                                  children: (0, n.jsx)(s.oil, {
                                                      placeholder: 'Client Version',
                                                      value: ee,
                                                      onChange: (e) => et(e)
                                                  })
                                              }),
                                              (0, n.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.f7kbVl),
                                                  children: (0, n.jsx)(s.oil, {
                                                      placeholder: 'Client Build Number',
                                                      value: er,
                                                      onChange: (e) => en(e)
                                                  })
                                              }),
                                              (0, n.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t['4Z5+zs']),
                                                  children: (0, n.jsx)(s.oil, {
                                                      placeholder: 'Locale',
                                                      value: ei,
                                                      onChange: (e) => el(e)
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, n.jsxs)(s.zxk, {
                                    color: s.zxk.Colors.PRIMARY,
                                    children: [
                                        W.NW.string(W.t.HVxmOD),
                                        (0, n.jsx)(c.Z, {
                                            ref: E,
                                            onChange: (e) => {
                                                var t, r;
                                                (null == (r = e.currentTarget) || null == (t = r.files) ? void 0 : t[0]) != null &&
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
                                    ? (0, n.jsxs)(s.hjN, {
                                          children: [
                                              (0, n.jsx)(s.vwX, { children: 'Preview' }),
                                              (0, n.jsx)('div', {
                                                  ref: k,
                                                  className: N.attachments,
                                                  children:
                                                      J.length > 0 &&
                                                      J.map((e) =>
                                                          (0, n.jsxs)(
                                                              'div',
                                                              {
                                                                  className: N.attachment,
                                                                  children: [
                                                                      (0, n.jsxs)('div', {
                                                                          children: [
                                                                              (0, n.jsx)(f.r, {
                                                                                  size: h.q.SMALL,
                                                                                  upload: e
                                                                              }),
                                                                              (0, n.jsx)('div', {
                                                                                  className: N.removeAttachment,
                                                                                  children: (0, n.jsx)(p.ZP, {
                                                                                      children: (0, n.jsx)(m.Z, {
                                                                                          tooltip: W.NW.string(W.t.vN7REx),
                                                                                          onClick: () => ev(e.id),
                                                                                          dangerous: !0,
                                                                                          children: (0, n.jsx)(s.XHJ, {
                                                                                              size: 'md',
                                                                                              color: 'currentColor'
                                                                                          })
                                                                                      })
                                                                                  })
                                                                              })
                                                                          ]
                                                                      }),
                                                                      (0, n.jsx)(s.Text, {
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
                                    ? (0, n.jsx)(s.Text, {
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
            (0, n.jsx)(s.mzw, {
                children: (0, n.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    gap: 8,
                    justify: 'end',
                    children: [
                        (0, n.jsx)(s.zxk, {
                            submitting: es,
                            onClick: eg,
                            children: 'Submit and Open Report'
                        }),
                        (0, n.jsx)(s.zxk, {
                            color: s.zxk.Colors.PRIMARY,
                            onClick: ex,
                            children: W.NW.string(W.t['ETE/oK'])
                        })
                    ]
                })
            })
        ]
    });
}
