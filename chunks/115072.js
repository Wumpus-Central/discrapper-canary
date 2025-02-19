r.d(t, { default: () => _ }), r(266796), r(230036), r(47120);
var i = r(200651),
    n = r(192379),
    l = r(772848),
    o = r(442837),
    a = r(544891),
    s = r(481060),
    c = r(53281),
    u = r(476326),
    d = r(304761),
    m = r(273031),
    h = r(859235),
    v = r(898463),
    x = r(951394),
    f = r(594174),
    p = r(768581),
    g = r(55935),
    j = r(358085),
    y = r(223356),
    b = r(225452),
    N = r(388032),
    W = r(269922);
let O = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function _(e) {
    var t, _, S, w;
    let { transitionState: C, onClose: P } = e,
        E = n.useRef(null),
        k = n.useRef(null),
        [T, D] = n.useState(''),
        [A, I] = n.useState(''),
        [R, L] = n.useState(),
        [J, M] = n.useState(''),
        [V, Z] = n.useState([]),
        [z, q] = n.useState(),
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
        [er, ei] = n.useState(''),
        [en, el] = n.useState(''),
        [eo, ea] = n.useState(!1),
        [es, ec] = n.useState(!1),
        [eu, ed] = n.useState(!1),
        [em, eh] = n.useState(!1);
    n.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        a.tn
            .get({
                url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                query: { cache: e },
                rejectWithError: !0
            })
            .then((e) => {
                if (null != e.body && '25a4f8c314369040c8e94d0a860b7fe53461f1a4' !== e.body.hash) {
                    {
                        let e = new Date('1739926259036'),
                            t = new Date();
                        (0, g.TD)(t, e).hours > 6 && eh(!0);
                    }
                    eh(!0);
                }
            });
    }, []);
    let ev = (0, o.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ex = (0, o.e7)([d.C], () => {
            var e;
            return null === (e = d.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web;
        }),
        ef = () => {
            null == P || P();
        },
        ep = (e) => {
            Z(V.filter((t) => t.id !== e));
        };
    async function eg() {
        var e, t;
        if ((ed(!1), '' === T || null == R)) {
            ea(!0);
            return;
        }
        let n = null == z ? void 0 : null === (e = z.features) || void 0 === e ? void 0 : e.find((e) => (0, y.pD)(e) === B);
        ec(!0), ea(!1);
        let l = (0, b.D)(
                V.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            o = await (0, y.ZD)(
                {
                    name: T,
                    description: A,
                    priority: R,
                    feature: n,
                    url: J,
                    buildOverride: null !== (t = null == ex ? void 0 : ex.id) && void 0 !== t ? t : null
                },
                !0 === H
                    ? {
                          overridePlatformInformation: H,
                          device: U,
                          operatingSystem: K,
                          operatingSystemVersion: Q,
                          clientVersion: ee,
                          clientBuildNumber: er,
                          locale: en
                      }
                    : { overridePlatformInformation: H },
                l
            ).catch(() => ed(!0));
        ec(!1),
            null != o && o.ok
                ? (ev && window.open(o.body.permalink_url, '_blank'),
                  ef(),
                  (0, s.ZDy)(async () => {
                      let { default: e } = await r.e('64648').then(r.bind(r, 81155));
                      return (t) => {
                          var r, n;
                          return (0, i.jsx)(
                              e,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = r[t]),
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
                              (n = n = { asanaTask: o.body }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, i);
                                        }
                                        return r;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              r)
                          );
                      };
                  }))
                : ed(!0);
    }
    return (
        n.useEffect(() => {
            async function e() {
                q(await (0, y.WG)());
            }
            ev && e();
        }, [ev]),
        n.useEffect(() => {
            if (V.length > 0) {
                var e;
                null === (e = k.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [V]),
        (0, i.jsxs)(s.Y0X, {
            transitionState: C,
            'aria-label': N.NW.string(N.t.mCCdws),
            size: s.CgR.MEDIUM,
            children: [
                (0, i.jsx)(s.xBx, {
                    children: (0, i.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: (0, i.jsx)(s.H, { children: N.NW.string(N.t['5Lqopa']) })
                    })
                }),
                (0, i.jsx)(s.hzk, {
                    children: (0, i.jsxs)('form', {
                        onSubmit: eg,
                        children: [
                            null != ex &&
                                (0, i.jsx)(s.ToO, {
                                    type: s.ToO.Types.WARNING,
                                    body: N.NW.format(N.t['yY60+/'], { buildOverrideHook: () => (0, i.jsx)('b', { children: null == ex ? void 0 : ex.id }) }),
                                    title: N.NW.string(N.t['ZP/hEx'])
                                }),
                            null == ex &&
                                em &&
                                (0, i.jsx)(s.ToO, {
                                    type: s.ToO.Types.WARNING,
                                    body: N.NW.string(N.t.x18RUl),
                                    title: N.NW.string(N.t.cTVCIC)
                                }),
                            (0, i.jsxs)(s.Kqy, {
                                gap: 24,
                                padding: {
                                    top: 8,
                                    bottom: 8
                                },
                                children: [
                                    (0, i.jsx)(s.xJW, {
                                        error: eo && '' === T ? N.NW.string(N.t.EkokLy) : null,
                                        title: N.NW.string(N.t.OZRgj4),
                                        children: (0, i.jsx)(s.oil, {
                                            placeholder: 'Something is broken on this screen.',
                                            type: 'text',
                                            value: T,
                                            maxLength: 100,
                                            onChange: D
                                        })
                                    }),
                                    (0, i.jsxs)(s.xJW, {
                                        title: N.NW.string(N.t['1SplHx']),
                                        children: [
                                            (0, i.jsx)(s.Kx8, {
                                                placeholder: 'What did you expect to see?',
                                                value: A,
                                                onChange: I
                                            }),
                                            (0, i.jsx)(s.R94, {
                                                type: s.geA.DESCRIPTION,
                                                children: 'You can add additional information/media on the ticket after submitting'
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(s.xJW, {
                                        error: eo && void 0 === R ? N.NW.string(N.t.EkokLy) : null,
                                        title: N.NW.string(N.t.xMXLdX),
                                        children: (0, i.jsx)(s.q4e, {
                                            renderOptionLabel: (e) =>
                                                (function (e) {
                                                    let t = e.priority;
                                                    return (0, i.jsxs)('div', {
                                                        className: W.formPriorityImageContainer,
                                                        children: [
                                                            (0, i.jsxs)('div', {
                                                                className: W.formPriorityTitleContainer,
                                                                children: [
                                                                    (0, i.jsx)('img', {
                                                                        alt: '',
                                                                        className: W.formPriorityImage,
                                                                        src: (0, p.gT)({
                                                                            id: t.emoji,
                                                                            animated: !0,
                                                                            size: 48
                                                                        })
                                                                    }),
                                                                    (0, i.jsx)(s.Text, {
                                                                        color: 'header-primary',
                                                                        variant: 'text-sm/semibold',
                                                                        className: W.formPriorityTitle,
                                                                        children: t.title
                                                                    })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(s.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                className: W.formPriorityDescription,
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
                                    ev &&
                                        (0, i.jsx)(s.xJW, {
                                            title: N.NW.string(N.t['77VVd3']),
                                            children: (0, i.jsx)(s.VcW, {
                                                value: B,
                                                options:
                                                    null !==
                                                        (w =
                                                            null == z
                                                                ? void 0
                                                                : null === (S = z.features) || void 0 === S
                                                                  ? void 0
                                                                  : null === (_ = S.filter((e) => '' !== (0, y.pD)(e))) || void 0 === _
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
                                                                      : t.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== w
                                                        ? w
                                                        : [],
                                                isDisabled: null == z,
                                                onChange: (e) => G(e)
                                            })
                                        }),
                                    (0, i.jsx)(s.xJW, {
                                        title: N.NW.string(N.t['7p5pqq']),
                                        children: (0, i.jsx)(s.oil, {
                                            placeholder: N.NW.string(N.t.HewMzs),
                                            type: 'text',
                                            value: J,
                                            maxLength: 5000,
                                            onChange: M
                                        })
                                    }),
                                    (0, i.jsx)(s.xJW, {
                                        children: (0, i.jsx)(s.XZJ, {
                                            value: H,
                                            onChange: (e, t) => X(t),
                                            children: N.NW.string(N.t.ayhqiI)
                                        })
                                    }),
                                    H
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.xJW, {
                                                      title: N.NW.string(N.t.rrI4Tk),
                                                      children: (0, i.jsx)(s.oil, {
                                                          placeholder: 'Device',
                                                          value: U,
                                                          onChange: (e) => Y(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.xJW, {
                                                      title: N.NW.string(N.t.kcHxi4),
                                                      children: (0, i.jsx)(s.q4e, {
                                                          value: K,
                                                          options: O,
                                                          onChange: (e) => F(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.xJW, {
                                                      title: N.NW.string(N.t.rEtxdn),
                                                      children: (0, i.jsx)(s.oil, {
                                                          placeholder: 'Operating System Version',
                                                          value: Q,
                                                          onChange: (e) => $(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.xJW, {
                                                      title: N.NW.string(N.t['wy1M/v']),
                                                      children: (0, i.jsx)(s.oil, {
                                                          placeholder: 'Client Version',
                                                          value: ee,
                                                          onChange: (e) => et(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.xJW, {
                                                      title: N.NW.string(N.t.f7kbVl),
                                                      children: (0, i.jsx)(s.oil, {
                                                          placeholder: 'Client Build Number',
                                                          value: er,
                                                          onChange: (e) => ei(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.xJW, {
                                                      title: N.NW.string(N.t['4Z5+zs']),
                                                      children: (0, i.jsx)(s.oil, {
                                                          placeholder: 'Locale',
                                                          value: en,
                                                          onChange: (e) => el(e)
                                                      })
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsxs)(s.zxk, {
                                        color: s.zxk.Colors.PRIMARY,
                                        children: [
                                            N.NW.string(N.t.HVxmOD),
                                            (0, i.jsx)(c.Z, {
                                                ref: E,
                                                onChange: (e) => {
                                                    var t, r;
                                                    (null === (r = e.currentTarget) || void 0 === r ? void 0 : null === (t = r.files) || void 0 === t ? void 0 : t[0]) != null &&
                                                        Z([
                                                            ...V,
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
                                    V.length > 0
                                        ? (0, i.jsxs)(s.hjN, {
                                              children: [
                                                  (0, i.jsx)(s.vwX, { children: 'Preview' }),
                                                  (0, i.jsx)('div', {
                                                      ref: k,
                                                      className: W.attachments,
                                                      children:
                                                          V.length > 0 &&
                                                          V.map((e) =>
                                                              (0, i.jsxs)(
                                                                  'div',
                                                                  {
                                                                      className: W.attachment,
                                                                      children: [
                                                                          (0, i.jsxs)('div', {
                                                                              children: [
                                                                                  (0, i.jsx)(v.r, {
                                                                                      size: h.q.SMALL,
                                                                                      upload: e
                                                                                  }),
                                                                                  (0, i.jsx)('div', {
                                                                                      className: W.removeAttachment,
                                                                                      children: (0, i.jsx)(x.ZP, {
                                                                                          children: (0, i.jsx)(m.Z, {
                                                                                              tooltip: N.NW.string(N.t.vN7REx),
                                                                                              onClick: () => ep(e.id),
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
                                onClick: ef,
                                children: N.NW.string(N.t['ETE/oK'])
                            })
                        ]
                    })
                })
            ]
        })
    );
}
