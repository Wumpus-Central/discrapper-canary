n.r(t),
    n.d(t, {
        default: function () {
            return T;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(772848),
    o = n(442837),
    a = n(544891),
    s = n(481060),
    u = n(53281),
    d = n(476326),
    c = n(304761),
    m = n(273031),
    h = n(859235),
    v = n(898463),
    x = n(951394),
    p = n(594174),
    f = n(768581),
    g = n(55935),
    j = n(358085),
    y = n(223356),
    b = n(225452),
    S = n(388032),
    C = n(466443);
let I = ['Android', 'iOS', 'Windows Mobile', 'Windows', 'Linux', 'Mac OS X'].map((e) => ({
    label: e,
    value: e
}));
function T(e) {
    var t, T, _, w, E;
    let { transitionState: P, onClose: N } = e,
        k = r.useRef(null),
        A = r.useRef(null),
        [D, F] = r.useState(''),
        [O, L] = r.useState(''),
        [R, M] = r.useState(),
        [B, V] = r.useState(''),
        [W, Z] = r.useState([]),
        [G, H] = r.useState(),
        [z, q] = r.useState(),
        [U, Y] = r.useState(!1),
        [X, K] = r.useState(''),
        [J, Q] = r.useState(
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
        [$, ee] = r.useState(''),
        [et, en] = r.useState(''),
        [ei, er] = r.useState(''),
        [el, eo] = r.useState(''),
        [ea, es] = r.useState(!1),
        [eu, ed] = r.useState(!1),
        [ec, em] = r.useState(!1),
        [eh, ev] = r.useState(!1);
    r.useEffect(() => {
        let e = Math.random().toString(16).slice(2);
        a.tn
            .get({
                url: ''.concat(location.protocol, '//').concat(location.host).concat('/assets/', 'version.').concat(window.GLOBAL_ENV.RELEASE_CHANNEL, '.json'),
                query: { cache: e },
                rejectWithError: !0
            })
            .then((e) => {
                if (null != e.body && 'bd7fc948df7bf3608bd3720b5d34400b81d5e555' !== e.body.hash) {
                    {
                        let e = new Date('1737704300078'),
                            t = new Date();
                        (0, g.TD)(t, e).hours > 6 && ev(!0);
                    }
                    ev(!0);
                }
            });
    }, []);
    let ex = (0, o.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        ep = (0, o.e7)([c.C], () => {
            var e;
            return null === (e = c.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web;
        }),
        ef = () => {
            null == N || N();
        },
        eg = (e) => {
            Z(W.filter((t) => t.id !== e));
        };
    async function ej() {
        var e, t;
        if ((em(!1), '' === D || null == R)) {
            es(!0);
            return;
        }
        let r = null == G ? void 0 : null === (e = G.features) || void 0 === e ? void 0 : e.find((e) => (0, y.pD)(e) === z);
        ed(!0), es(!1);
        let l = (0, b.D)(
                W.map((e) => {
                    let { item: t } = e;
                    return t;
                })
            ),
            o =
                !0 === U
                    ? {
                          overridePlatformInformation: U,
                          device: X,
                          operatingSystem: J,
                          operatingSystemVersion: $,
                          clientVersion: et,
                          clientBuildNumber: ei,
                          locale: el
                      }
                    : { overridePlatformInformation: U },
            a = await (0, y.ZD)(
                {
                    name: D,
                    description: O,
                    priority: R,
                    feature: r,
                    url: B,
                    buildOverride: null !== (t = null == ep ? void 0 : ep.id) && void 0 !== t ? t : null
                },
                o,
                l
            ).catch(() => em(!0));
        ed(!1),
            null != a && a.ok
                ? (ex && window.open(a.body.permalink_url, '_blank'),
                  ef(),
                  (0, s.openModalLazy)(async () => {
                      let { default: e } = await n.e('64648').then(n.bind(n, 81155));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              asanaTask: a.body
                          });
                  }))
                : em(!0);
    }
    return (
        r.useEffect(() => {
            async function e() {
                H(await (0, y.WG)());
            }
            ex && e();
        }, [ex]),
        r.useEffect(() => {
            if (W.length > 0) {
                var e;
                null === (e = A.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
            }
        }, [W]),
        (0, i.jsxs)(s.ModalRoot, {
            transitionState: P,
            'aria-label': S.intl.string(S.t.mCCdws),
            size: s.ModalSize.MEDIUM,
            children: [
                (0, i.jsx)(s.ModalHeader, {
                    children: (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: (0, i.jsx)(s.H, { children: S.intl.string(S.t['5Lqopa']) })
                    })
                }),
                (0, i.jsx)(s.ModalContent, {
                    children: (0, i.jsxs)('form', {
                        onSubmit: ej,
                        children: [
                            null != ep &&
                                (0, i.jsx)(s.FormNotice, {
                                    type: s.FormNotice.Types.WARNING,
                                    body: S.intl.format(S.t['yY60+/'], { buildOverrideHook: () => (0, i.jsx)('b', { children: null == ep ? void 0 : ep.id }) }),
                                    title: S.intl.string(S.t['ZP/hEx'])
                                }),
                            null == ep &&
                                eh &&
                                (0, i.jsx)(s.FormNotice, {
                                    type: s.FormNotice.Types.WARNING,
                                    body: S.intl.string(S.t.x18RUl),
                                    title: S.intl.string(S.t.cTVCIC)
                                }),
                            (0, i.jsxs)(s.Stack, {
                                gap: 24,
                                padding: {
                                    top: 8,
                                    bottom: 8
                                },
                                children: [
                                    (0, i.jsx)(s.FormItem, {
                                        error: ea && '' === D ? S.intl.string(S.t.EkokLy) : null,
                                        title: S.intl.string(S.t.OZRgj4),
                                        children: (0, i.jsx)(s.TextInput, {
                                            placeholder: 'Something is broken on this screen.',
                                            type: 'text',
                                            value: D,
                                            maxLength: 100,
                                            onChange: F
                                        })
                                    }),
                                    (0, i.jsxs)(s.FormItem, {
                                        title: S.intl.string(S.t['1SplHx']),
                                        children: [
                                            (0, i.jsx)(s.TextArea, {
                                                placeholder: 'What did you expect to see?',
                                                value: O,
                                                onChange: L
                                            }),
                                            (0, i.jsx)(s.FormText, {
                                                type: s.FormTextTypes.DESCRIPTION,
                                                children: 'You can add additional information/media on the ticket after submitting'
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(s.FormItem, {
                                        error: ea && void 0 === R ? S.intl.string(S.t.EkokLy) : null,
                                        title: S.intl.string(S.t.xMXLdX),
                                        children: (0, i.jsx)(s.SingleSelect, {
                                            renderOptionLabel: (e) =>
                                                (function (e) {
                                                    let t = e.priority;
                                                    return (0, i.jsxs)('div', {
                                                        className: C.formPriorityImageContainer,
                                                        children: [
                                                            (0, i.jsxs)('div', {
                                                                className: C.formPriorityTitleContainer,
                                                                children: [
                                                                    (0, i.jsx)('img', {
                                                                        alt: '',
                                                                        className: C.formPriorityImage,
                                                                        src: (0, f.gT)({
                                                                            id: t.emoji,
                                                                            animated: !0,
                                                                            size: 48
                                                                        })
                                                                    }),
                                                                    (0, i.jsx)(s.Text, {
                                                                        color: 'header-primary',
                                                                        variant: 'text-sm/semibold',
                                                                        className: C.formPriorityTitle,
                                                                        children: t.title
                                                                    })
                                                                ]
                                                            }),
                                                            (0, i.jsx)(s.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                className: C.formPriorityDescription,
                                                                children: t.description
                                                            })
                                                        ]
                                                    });
                                                })(e),
                                            onChange: M,
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
                                    ex &&
                                        (0, i.jsx)(s.FormItem, {
                                            title: S.intl.string(S.t['77VVd3']),
                                            children: (0, i.jsx)(s.SearchableSelect, {
                                                value: z,
                                                options:
                                                    null !==
                                                        (E =
                                                            null == (t = G)
                                                                ? void 0
                                                                : null === (w = t.features) || void 0 === w
                                                                  ? void 0
                                                                  : null === (_ = w.filter((e) => '' !== (0, y.pD)(e))) || void 0 === _
                                                                    ? void 0
                                                                    : null ===
                                                                            (T = _.map((e) => {
                                                                                var t;
                                                                                return {
                                                                                    label: null !== (t = e.name) && void 0 !== t ? t : '',
                                                                                    value: (0, y.pD)(e)
                                                                                };
                                                                            })) || void 0 === T
                                                                      ? void 0
                                                                      : T.sort((e, t) => e.label.localeCompare(t.label))) && void 0 !== E
                                                        ? E
                                                        : [],
                                                isDisabled: null == G,
                                                onChange: (e) => q(e)
                                            })
                                        }),
                                    (0, i.jsx)(s.FormItem, {
                                        title: S.intl.string(S.t['7p5pqq']),
                                        children: (0, i.jsx)(s.TextInput, {
                                            placeholder: S.intl.string(S.t.HewMzs),
                                            type: 'text',
                                            value: B,
                                            maxLength: 5000,
                                            onChange: V
                                        })
                                    }),
                                    (0, i.jsx)(s.FormItem, {
                                        children: (0, i.jsx)(s.Checkbox, {
                                            value: U,
                                            onChange: (e, t) => Y(t),
                                            children: S.intl.string(S.t.ayhqiI)
                                        })
                                    }),
                                    U
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: S.intl.string(S.t.rrI4Tk),
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Device',
                                                          value: X,
                                                          onChange: (e) => K(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: S.intl.string(S.t.kcHxi4),
                                                      children: (0, i.jsx)(s.SingleSelect, {
                                                          value: J,
                                                          options: I,
                                                          onChange: (e) => Q(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: S.intl.string(S.t.rEtxdn),
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Operating System Version',
                                                          value: $,
                                                          onChange: (e) => ee(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: S.intl.string(S.t['wy1M/v']),
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Client Version',
                                                          value: et,
                                                          onChange: (e) => en(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: S.intl.string(S.t.f7kbVl),
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Client Build Number',
                                                          value: ei,
                                                          onChange: (e) => er(e)
                                                      })
                                                  }),
                                                  (0, i.jsx)(s.FormItem, {
                                                      title: S.intl.string(S.t['4Z5+zs']),
                                                      children: (0, i.jsx)(s.TextInput, {
                                                          placeholder: 'Locale',
                                                          value: el,
                                                          onChange: (e) => eo(e)
                                                      })
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsxs)(s.Button, {
                                        color: s.Button.Colors.PRIMARY,
                                        children: [
                                            S.intl.string(S.t.HVxmOD),
                                            (0, i.jsx)(u.Z, {
                                                ref: k,
                                                onChange: (e) => {
                                                    var t, n;
                                                    (null === (n = e.currentTarget) || void 0 === n ? void 0 : null === (t = n.files) || void 0 === t ? void 0 : t[0]) != null &&
                                                        Z([
                                                            ...W,
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
                                    W.length > 0
                                        ? (0, i.jsxs)(s.FormSection, {
                                              children: [
                                                  (0, i.jsx)(s.FormTitle, { children: 'Preview' }),
                                                  (0, i.jsx)('div', {
                                                      ref: A,
                                                      className: C.attachments,
                                                      children:
                                                          W.length > 0 &&
                                                          W.map((e) =>
                                                              (0, i.jsxs)(
                                                                  'div',
                                                                  {
                                                                      className: C.attachment,
                                                                      children: [
                                                                          (0, i.jsxs)('div', {
                                                                              children: [
                                                                                  (0, i.jsx)(v.r, {
                                                                                      size: h.q.SMALL,
                                                                                      upload: e
                                                                                  }),
                                                                                  (0, i.jsx)('div', {
                                                                                      className: C.removeAttachment,
                                                                                      children: (0, i.jsx)(x.ZP, {
                                                                                          children: (0, i.jsx)(m.Z, {
                                                                                              tooltip: S.intl.string(S.t.vN7REx),
                                                                                              onClick: () => eg(e.id),
                                                                                              dangerous: !0,
                                                                                              children: (0, i.jsx)(s.TrashIcon, {
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
                                    ec
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
                (0, i.jsx)(s.ModalFooter, {
                    children: (0, i.jsxs)(s.Stack, {
                        direction: 'horizontal',
                        gap: 8,
                        justify: 'end',
                        children: [
                            (0, i.jsx)(s.Button, {
                                submitting: eu,
                                onClick: ej,
                                children: 'Submit and Open Report'
                            }),
                            (0, i.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                onClick: ef,
                                children: S.intl.string(S.t['ETE/oK'])
                            })
                        ]
                    })
                })
            ]
        })
    );
}
