i.d(t, { default: () => w }), i(47120);
var n = i(200651),
    l = i(192379),
    r = i(772848),
    a = i(442837),
    o = i(544891),
    s = i(481060),
    d = i(53281),
    u = i(476326),
    c = i(304761),
    m = i(273031),
    h = i(859235),
    v = i(898463),
    x = i(951394),
    f = i(594174),
    p = i(768581),
    g = i(55935),
    j = i(358085),
    y = i(223356),
    b = i(225452),
    _ = i(388032),
    C = i(54782);
let S = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function w(e) {
    var t, w, E, k;
    let { transitionState: P, onClose: T } = e,
        N = l.useRef(null),
        O = l.useRef(null),
        [W, D] = l.useState(''),
        [A, I] = l.useState(''),
        [R, L] = l.useState(),
        [J, M] = l.useState(''),
        [V, Z] = l.useState([]),
        [z, q] = l.useState(),
        [B, G] = l.useState(),
        [H, X] = l.useState(!1),
        [U, Y] = l.useState(''),
        [K, F] = l.useState(
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
        [Q, $] = l.useState(''),
        [ee, et] = l.useState(''),
        [ei, en] = l.useState(''),
        [el, er] = l.useState(''),
        [ea, eo] = l.useState(!1),
        [es, ed] = l.useState(!1),
        [eu, ec] = l.useState(!1),
        [em, eh] = l.useState(!1);
    l.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        o.tn
            .get({
                url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                query: { cache: e },
                rejectWithError: !0
            })
            .then((e) => {
                if (null != e.body && '459d31bcdee3c2c467aa1ddfa06589e29a97d16c' !== e.body.hash) {
                    {
                        let e = new Date('1739407748173'),
                            t = new Date();
                        (0, g.TD)(t, e).hours > 6 && eh(!0);
                    }
                    eh(!0);
                }
            });
    }, []);
    let ev = (0, a.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ex = (0, a.e7)([c.C], () => {
            var e;
            return null === (e = c.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web;
        }),
        ef = () => {
            null == T || T();
        },
        ep = (e) => {
            Z(V.filter((t) => t.id !== e));
        };
    async function eg() {
        var e, t;
        if ((ec(!1), '' === W || null == R)) {
            eo(!0);
            return;
        }
        let l = null == z ? void 0 : null === (e = z.features) || void 0 === e ? void 0 : e.find((e) => (0, y.pD)(e) === B);
        ed(!0), eo(!1);
        let r = (0, b.D)(
                V.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            a =
                !0 === H
                    ? {
                          overridePlatformInformation: H,
                          device: U,
                          operatingSystem: K,
                          operatingSystemVersion: Q,
                          clientVersion: ee,
                          clientBuildNumber: ei,
                          locale: el
                      }
                    : { overridePlatformInformation: H },
            o = await (0, y.ZD)(
                {
                    name: W,
                    description: A,
                    priority: R,
                    feature: l,
                    url: J,
                    buildOverride: null !== (t = null == ex ? void 0 : ex.id) && void 0 !== t ? t : null
                },
                a,
                r
            ).catch(() => ec(!0));
        ed(!1),
            null != o && o.ok
                ? (ev && window.open(o.body.permalink_url, '_blank'),
                  ef(),
                  (0, s.ZDy)(async () => {
                      let { default: e } = await i.e('64648').then(i.bind(i, 81155));
                      return (t) =>
                          (0, n.jsx)(e, {
                              ...t,
                              asanaTask: o.body
                          });
                  }))
                : ec(!0);
    }
    return (
        l.useEffect(() => {
            async function e() {
                q(await (0, y.WG)());
            }
            ev && e();
        }, [ev]),
        l.useEffect(() => {
            if (V.length > 0) {
                var e;
                null === (e = O.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [V]),
        (0, n.jsxs)(s.Y0X, {
            transitionState: P,
            'aria-label': _.intl.string(_.t.mCCdws),
            size: s.CgR.MEDIUM,
            children: [
                (0, n.jsx)(s.xBx, {
                    children: (0, n.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: (0, n.jsx)(s.H, { children: _.intl.string(_.t['5Lqopa']) })
                    })
                }),
                (0, n.jsx)(s.hzk, {
                    children: (0, n.jsxs)('form', {
                        onSubmit: eg,
                        children: [
                            null != ex &&
                                (0, n.jsx)(s.ToO, {
                                    type: s.ToO.Types.WARNING,
                                    body: _.intl.format(_.t['yY60+/'], { buildOverrideHook: () => (0, n.jsx)('b', { children: null == ex ? void 0 : ex.id }) }),
                                    title: _.intl.string(_.t['ZP/hEx'])
                                }),
                            null == ex &&
                                em &&
                                (0, n.jsx)(s.ToO, {
                                    type: s.ToO.Types.WARNING,
                                    body: _.intl.string(_.t.x18RUl),
                                    title: _.intl.string(_.t.cTVCIC)
                                }),
                            (0, n.jsxs)(s.Kqy, {
                                gap: 24,
                                padding: {
                                    top: 8,
                                    bottom: 8
                                },
                                children: [
                                    (0, n.jsx)(s.xJW, {
                                        error: ea && '' === W ? _.intl.string(_.t.EkokLy) : null,
                                        title: _.intl.string(_.t.OZRgj4),
                                        children: (0, n.jsx)(s.oil, {
                                            placeholder: 'Something is broken on this screen.',
                                            type: 'text',
                                            value: W,
                                            maxLength: 100,
                                            onChange: D
                                        })
                                    }),
                                    (0, n.jsxs)(s.xJW, {
                                        title: _.intl.string(_.t['1SplHx']),
                                        children: [
                                            (0, n.jsx)(s.Kx8, {
                                                placeholder: 'What did you expect to see?',
                                                value: A,
                                                onChange: I
                                            }),
                                            (0, n.jsx)(s.R94, {
                                                type: s.geA.DESCRIPTION,
                                                children: 'You can add additional information/media on the ticket after submitting'
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(s.xJW, {
                                        error: ea && void 0 === R ? _.intl.string(_.t.EkokLy) : null,
                                        title: _.intl.string(_.t.xMXLdX),
                                        children: (0, n.jsx)(s.q4e, {
                                            renderOptionLabel: (e) =>
                                                (function (e) {
                                                    let t = e.priority;
                                                    return (0, n.jsxs)('div', {
                                                        className: C.formPriorityImageContainer,
                                                        children: [
                                                            (0, n.jsxs)('div', {
                                                                className: C.formPriorityTitleContainer,
                                                                children: [
                                                                    (0, n.jsx)('img', {
                                                                        alt: '',
                                                                        className: C.formPriorityImage,
                                                                        src: (0, p.gT)({
                                                                            id: t.emoji,
                                                                            animated: !0,
                                                                            size: 48
                                                                        })
                                                                    }),
                                                                    (0, n.jsx)(s.Text, {
                                                                        color: 'header-primary',
                                                                        variant: 'text-sm/semibold',
                                                                        className: C.formPriorityTitle,
                                                                        children: t.title
                                                                    })
                                                                ]
                                                            }),
                                                            (0, n.jsx)(s.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                className: C.formPriorityDescription,
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
                                        (0, n.jsx)(s.xJW, {
                                            title: _.intl.string(_.t['77VVd3']),
                                            children: (0, n.jsx)(s.VcW, {
                                                value: B,
                                                options:
                                                    null !==
                                                        (k =
                                                            null == z
                                                                ? void 0
                                                                : null === (E = z.features) || void 0 === E
                                                                  ? void 0
                                                                  : null === (w = E.filter((e) => '' !== (0, y.pD)(e))) || void 0 === w
                                                                    ? void 0
                                                                    : null ===
                                                                            (t = w.map((e) => {
                                                                                var t;
                                                                                return {
                                                                                    label: null !== (t = e.name) && void 0 !== t ? t : '',
                                                                                    value: (0, y.pD)(e)
                                                                                };
                                                                            })) || void 0 === t
                                                                      ? void 0
                                                                      : t.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== k
                                                        ? k
                                                        : [],
                                                isDisabled: null == z,
                                                onChange: (e) => G(e)
                                            })
                                        }),
                                    (0, n.jsx)(s.xJW, {
                                        title: _.intl.string(_.t['7p5pqq']),
                                        children: (0, n.jsx)(s.oil, {
                                            placeholder: _.intl.string(_.t.HewMzs),
                                            type: 'text',
                                            value: J,
                                            maxLength: 5000,
                                            onChange: M
                                        })
                                    }),
                                    (0, n.jsx)(s.xJW, {
                                        children: (0, n.jsx)(s.XZJ, {
                                            value: H,
                                            onChange: (e, t) => X(t),
                                            children: _.intl.string(_.t.ayhqiI)
                                        })
                                    }),
                                    H
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(s.xJW, {
                                                      title: _.intl.string(_.t.rrI4Tk),
                                                      children: (0, n.jsx)(s.oil, {
                                                          placeholder: 'Device',
                                                          value: U,
                                                          onChange: (e) => Y(e)
                                                      })
                                                  }),
                                                  (0, n.jsx)(s.xJW, {
                                                      title: _.intl.string(_.t.kcHxi4),
                                                      children: (0, n.jsx)(s.q4e, {
                                                          value: K,
                                                          options: S,
                                                          onChange: (e) => F(e)
                                                      })
                                                  }),
                                                  (0, n.jsx)(s.xJW, {
                                                      title: _.intl.string(_.t.rEtxdn),
                                                      children: (0, n.jsx)(s.oil, {
                                                          placeholder: 'Operating System Version',
                                                          value: Q,
                                                          onChange: (e) => $(e)
                                                      })
                                                  }),
                                                  (0, n.jsx)(s.xJW, {
                                                      title: _.intl.string(_.t['wy1M/v']),
                                                      children: (0, n.jsx)(s.oil, {
                                                          placeholder: 'Client Version',
                                                          value: ee,
                                                          onChange: (e) => et(e)
                                                      })
                                                  }),
                                                  (0, n.jsx)(s.xJW, {
                                                      title: _.intl.string(_.t.f7kbVl),
                                                      children: (0, n.jsx)(s.oil, {
                                                          placeholder: 'Client Build Number',
                                                          value: ei,
                                                          onChange: (e) => en(e)
                                                      })
                                                  }),
                                                  (0, n.jsx)(s.xJW, {
                                                      title: _.intl.string(_.t['4Z5+zs']),
                                                      children: (0, n.jsx)(s.oil, {
                                                          placeholder: 'Locale',
                                                          value: el,
                                                          onChange: (e) => er(e)
                                                      })
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, n.jsxs)(s.zxk, {
                                        color: s.zxk.Colors.PRIMARY,
                                        children: [
                                            _.intl.string(_.t.HVxmOD),
                                            (0, n.jsx)(d.Z, {
                                                ref: N,
                                                onChange: (e) => {
                                                    var t, i;
                                                    (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (t = i.files) || void 0 === t ? void 0 : t[0]) != null &&
                                                        Z([
                                                            ...V,
                                                            ...Array.from(e.currentTarget.files).map(
                                                                (e) =>
                                                                    new u.ZP({
                                                                        id: (0, r.Z)(),
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
                                        ? (0, n.jsxs)(s.hjN, {
                                              children: [
                                                  (0, n.jsx)(s.vwX, { children: 'Preview' }),
                                                  (0, n.jsx)('div', {
                                                      ref: O,
                                                      className: C.attachments,
                                                      children:
                                                          V.length > 0 &&
                                                          V.map((e) =>
                                                              (0, n.jsxs)(
                                                                  'div',
                                                                  {
                                                                      className: C.attachment,
                                                                      children: [
                                                                          (0, n.jsxs)('div', {
                                                                              children: [
                                                                                  (0, n.jsx)(v.r, {
                                                                                      size: h.q.SMALL,
                                                                                      upload: e
                                                                                  }),
                                                                                  (0, n.jsx)('div', {
                                                                                      className: C.removeAttachment,
                                                                                      children: (0, n.jsx)(x.ZP, {
                                                                                          children: (0, n.jsx)(m.Z, {
                                                                                              tooltip: _.intl.string(_.t.vN7REx),
                                                                                              onClick: () => ep(e.id),
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
                                onClick: ef,
                                children: _.intl.string(_.t['ETE/oK'])
                            })
                        ]
                    })
                })
            ]
        })
    );
}
