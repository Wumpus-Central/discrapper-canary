i.d(t, { default: () => _ }), i(266796), i(230036), i(47120), i(571269), i(298267);
var r = i(200651),
    n = i(192379),
    l = i(772848),
    a = i(442837),
    o = i(544891),
    s = i(481060),
    c = i(53281),
    u = i(476326),
    d = i(304761),
    m = i(273031),
    v = i(859235),
    h = i(898463),
    f = i(951394),
    p = i(594174),
    x = i(768581),
    g = i(55935),
    j = i(358085),
    y = i(223356),
    b = i(225452),
    W = i(388032),
    N = i(561402);
let O = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function _(e) {
    var t, _, w, S;
    let { transitionState: P, onClose: C } = e,
        E = n.useRef(null),
        k = n.useRef(null),
        [T, D] = n.useState(''),
        [A, I] = n.useState(''),
        [R, L] = n.useState(),
        [Z, z] = n.useState(''),
        [J, M] = n.useState([]),
        [V, q] = n.useState(),
        [B, G] = n.useState(),
        [H, X] = n.useState(!1),
        [U, Y] = n.useState(''),
        [K, F] = n.useState(
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
        [Q, $] = n.useState(''),
        [ee, et] = n.useState(''),
        [ei, er] = n.useState(''),
        [en, el] = n.useState(''),
        [ea, eo] = n.useState(!1),
        [es, ec] = n.useState(!1),
        [eu, ed] = n.useState(!1),
        [em, ev] = n.useState(!1);
    n.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        o.tn
            .get({
                url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                query: { cache: e },
                rejectWithError: !0
            })
            .then((e) => {
                if (null != e.body && '645a7cf9d96332092587ab5d2ac159b719a54edf' !== e.body.hash) {
                    {
                        let e = new Date('1743123831296'),
                            t = new Date();
                        (0, g.TD)(t, e).hours > 6 && ev(!0);
                    }
                    ev(!0);
                }
            });
    }, []);
    let eh = (0, a.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ef = (0, a.e7)([d.C], () => {
            var e;
            return null === (e = d.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web;
        }),
        ep = () => {
            null == C || C();
        },
        ex = (e) => {
            M(J.filter((t) => t.id !== e));
        };
    async function eg() {
        var e, t;
        if ((ed(!1), '' === T || null == R)) {
            eo(!0);
            return;
        }
        let n = null == V ? void 0 : null === (e = V.features) || void 0 === e ? void 0 : e.find((e) => (0, y.pD)(e) === B);
        ec(!0), eo(!1);
        let l = (0, b.D)(
                J.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            a = await (0, y.ZD)(
                {
                    name: T,
                    description: A,
                    priority: R,
                    feature: n,
                    url: Z,
                    buildOverride: null !== (t = null == ef ? void 0 : ef.id) && void 0 !== t ? t : null
                },
                !0 === H
                    ? {
                          overridePlatformInformation: H,
                          device: U,
                          operatingSystem: K,
                          operatingSystemVersion: Q,
                          clientVersion: ee,
                          clientBuildNumber: ei,
                          locale: en
                      }
                    : { overridePlatformInformation: H },
                l
            ).catch(() => ed(!0));
        ec(!1),
            null != a && a.ok
                ? (eh && window.open(a.body.permalink_url, '_blank'),
                  ep(),
                  (0, s.ZDy)(async () => {
                      let { default: e } = await i.e('64648').then(i.bind(i, 81155));
                      return (t) => {
                          var i, n;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var i = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(i);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(i).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = i[t]),
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
                              })({}, t)),
                              (n = n = { asanaTask: a.body }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var i = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            i.push.apply(i, r);
                                        }
                                        return i;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              i)
                          );
                      };
                  }))
                : ed(!0);
    }
    n.useEffect(() => {
        async function e() {
            q(await (0, y.WG)());
        }
        eh && e();
    }, [eh]),
        n.useEffect(() => {
            if (J.length > 0) {
                var e;
                null === (e = k.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [J]);
    let ej = n.useCallback(
        (e) => {
            let t = Array.from(e.clipboardData.files)
                .filter((e) => e.type.startsWith('image/'))
                .at(0);
            void 0 === t ||
                J.some((e) => {
                    var i;
                    return e.filename === t.name && (null === (i = e.item.file) || void 0 === i ? void 0 : i.size) === t.size;
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
    return (0, r.jsxs)(s.Y0X, {
        transitionState: P,
        'aria-label': W.NW.string(W.t.mCCdws),
        size: s.CgR.MEDIUM,
        children: [
            (0, r.jsx)(s.xBx, {
                children: (0, r.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    children: (0, r.jsx)(s.H, { children: W.NW.string(W.t['5Lqopa']) })
                })
            }),
            (0, r.jsx)(s.hzk, {
                onPaste: ej,
                children: (0, r.jsxs)('form', {
                    onSubmit: eg,
                    children: [
                        null != ef &&
                            (0, r.jsx)(s.ToO, {
                                type: s.ToO.Types.WARNING,
                                body: W.NW.format(W.t['yY60+/'], { buildOverrideHook: () => (0, r.jsx)('b', { children: null == ef ? void 0 : ef.id }) }),
                                title: W.NW.string(W.t['ZP/hEx'])
                            }),
                        null == ef &&
                            em &&
                            (0, r.jsx)(s.ToO, {
                                type: s.ToO.Types.WARNING,
                                body: W.NW.string(W.t.x18RUl),
                                title: W.NW.string(W.t.cTVCIC)
                            }),
                        (0, r.jsxs)(s.Kqy, {
                            gap: 24,
                            padding: {
                                top: 8,
                                bottom: 8
                            },
                            children: [
                                (0, r.jsx)(s.xJW, {
                                    error: ea && '' === T ? W.NW.string(W.t.EkokLy) : null,
                                    title: W.NW.string(W.t.OZRgj4),
                                    children: (0, r.jsx)(s.oil, {
                                        placeholder: 'Something is broken on this screen.',
                                        type: 'text',
                                        value: T,
                                        maxLength: 100,
                                        onChange: D
                                    })
                                }),
                                (0, r.jsxs)(s.xJW, {
                                    title: W.NW.string(W.t['1SplHx']),
                                    children: [
                                        (0, r.jsx)(s.Kx8, {
                                            placeholder: 'What did you expect to see?',
                                            value: A,
                                            onChange: I
                                        }),
                                        (0, r.jsx)(s.R94, {
                                            type: s.geA.DESCRIPTION,
                                            children: 'You can add additional information/media on the ticket after submitting'
                                        })
                                    ]
                                }),
                                (0, r.jsx)(s.xJW, {
                                    error: ea && void 0 === R ? W.NW.string(W.t.EkokLy) : null,
                                    title: W.NW.string(W.t.xMXLdX),
                                    children: (0, r.jsx)(s.q4e, {
                                        renderOptionLabel: (e) =>
                                            (function (e) {
                                                let t = e.priority;
                                                return (0, r.jsxs)('div', {
                                                    className: N.formPriorityImageContainer,
                                                    children: [
                                                        (0, r.jsxs)('div', {
                                                            className: N.formPriorityTitleContainer,
                                                            children: [
                                                                (0, r.jsx)('img', {
                                                                    alt: '',
                                                                    className: N.formPriorityImage,
                                                                    src: (0, x.gT)({
                                                                        id: t.emoji,
                                                                        animated: !0,
                                                                        size: 48
                                                                    })
                                                                }),
                                                                (0, r.jsx)(s.Text, {
                                                                    color: 'header-primary',
                                                                    variant: 'text-sm/semibold',
                                                                    className: N.formPriorityTitle,
                                                                    children: t.title
                                                                })
                                                            ]
                                                        }),
                                                        (0, r.jsx)(s.Text, {
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
                                        value: R,
                                        maxVisibleItems: 3,
                                        closeOnSelect: !0
                                    })
                                }),
                                eh &&
                                    (0, r.jsx)(s.xJW, {
                                        title: W.NW.string(W.t['77VVd3']),
                                        children: (0, r.jsx)(s.VcW, {
                                            value: B,
                                            options:
                                                null !==
                                                    (S =
                                                        null == V
                                                            ? void 0
                                                            : null === (w = V.features) || void 0 === w
                                                              ? void 0
                                                              : null === (_ = w.filter((e) => '' !== (0, y.pD)(e))) || void 0 === _
                                                                ? void 0
                                                                : null ===
                                                                        (t = _.map((e) => {
                                                                            var t;
                                                                            return {
                                                                                label: null !== (t = e.name) && void 0 !== t ? t : '',
                                                                                value: (0, y.pD)(e)
                                                                            };
                                                                        })) || void 0 === t
                                                                  ? void 0
                                                                  : t.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== S
                                                    ? S
                                                    : [],
                                            isDisabled: null == V,
                                            onChange: (e) => G(e)
                                        })
                                    }),
                                (0, r.jsx)(s.xJW, {
                                    title: W.NW.string(W.t['7p5pqq']),
                                    children: (0, r.jsx)(s.oil, {
                                        placeholder: W.NW.string(W.t.HewMzs),
                                        type: 'text',
                                        value: Z,
                                        maxLength: 5000,
                                        onChange: z
                                    })
                                }),
                                (0, r.jsx)(s.xJW, {
                                    children: (0, r.jsx)(s.XZJ, {
                                        value: H,
                                        onChange: (e, t) => X(t),
                                        children: W.NW.string(W.t.ayhqiI)
                                    })
                                }),
                                H
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.rrI4Tk),
                                                  children: (0, r.jsx)(s.oil, {
                                                      placeholder: 'Device',
                                                      value: U,
                                                      onChange: (e) => Y(e)
                                                  })
                                              }),
                                              (0, r.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.kcHxi4),
                                                  children: (0, r.jsx)(s.q4e, {
                                                      value: K,
                                                      options: O,
                                                      onChange: (e) => F(e)
                                                  })
                                              }),
                                              (0, r.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.rEtxdn),
                                                  children: (0, r.jsx)(s.oil, {
                                                      placeholder: 'Operating System Version',
                                                      value: Q,
                                                      onChange: (e) => $(e)
                                                  })
                                              }),
                                              (0, r.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t['wy1M/v']),
                                                  children: (0, r.jsx)(s.oil, {
                                                      placeholder: 'Client Version',
                                                      value: ee,
                                                      onChange: (e) => et(e)
                                                  })
                                              }),
                                              (0, r.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t.f7kbVl),
                                                  children: (0, r.jsx)(s.oil, {
                                                      placeholder: 'Client Build Number',
                                                      value: ei,
                                                      onChange: (e) => er(e)
                                                  })
                                              }),
                                              (0, r.jsx)(s.xJW, {
                                                  title: W.NW.string(W.t['4Z5+zs']),
                                                  children: (0, r.jsx)(s.oil, {
                                                      placeholder: 'Locale',
                                                      value: en,
                                                      onChange: (e) => el(e)
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, r.jsxs)(s.zxk, {
                                    color: s.zxk.Colors.PRIMARY,
                                    children: [
                                        W.NW.string(W.t.HVxmOD),
                                        (0, r.jsx)(c.Z, {
                                            ref: E,
                                            onChange: (e) => {
                                                var t, i;
                                                (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (t = i.files) || void 0 === t ? void 0 : t[0]) != null &&
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
                                    ? (0, r.jsxs)(s.hjN, {
                                          children: [
                                              (0, r.jsx)(s.vwX, { children: 'Preview' }),
                                              (0, r.jsx)('div', {
                                                  ref: k,
                                                  className: N.attachments,
                                                  children:
                                                      J.length > 0 &&
                                                      J.map((e) =>
                                                          (0, r.jsxs)(
                                                              'div',
                                                              {
                                                                  className: N.attachment,
                                                                  children: [
                                                                      (0, r.jsxs)('div', {
                                                                          children: [
                                                                              (0, r.jsx)(h.r, {
                                                                                  size: v.q.SMALL,
                                                                                  upload: e
                                                                              }),
                                                                              (0, r.jsx)('div', {
                                                                                  className: N.removeAttachment,
                                                                                  children: (0, r.jsx)(f.ZP, {
                                                                                      children: (0, r.jsx)(m.Z, {
                                                                                          tooltip: W.NW.string(W.t.vN7REx),
                                                                                          onClick: () => ex(e.id),
                                                                                          dangerous: !0,
                                                                                          children: (0, r.jsx)(s.XHJ, {
                                                                                              size: 'md',
                                                                                              color: 'currentColor'
                                                                                          })
                                                                                      })
                                                                                  })
                                                                              })
                                                                          ]
                                                                      }),
                                                                      (0, r.jsx)(s.Text, {
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
                                    ? (0, r.jsx)(s.Text, {
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
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    gap: 8,
                    justify: 'end',
                    children: [
                        (0, r.jsx)(s.zxk, {
                            submitting: es,
                            onClick: eg,
                            children: 'Submit and Open Report'
                        }),
                        (0, r.jsx)(s.zxk, {
                            color: s.zxk.Colors.PRIMARY,
                            onClick: ep,
                            children: W.NW.string(W.t['ETE/oK'])
                        })
                    ]
                })
            })
        ]
    });
}
