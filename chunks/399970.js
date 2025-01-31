n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(570140),
    o = n(401430),
    c = n(155268),
    d = n(600164),
    u = n(313201),
    m = n(695103),
    h = n(388032),
    g = n(840891),
    _ = n(232186);
let x = /^\d+$|^$/;
function p(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: p,
            authorizationError: E,
            authorizing: C
        } = (0, r.cj)([m.Z], () => ({
            authorizedApplicationId: m.Z.testModeApplicationId,
            authorizationError: m.Z.error,
            authorizing: m.Z.isFetchingAuthorization
        })),
        [f, T] = s.useState(null != p ? p : ''),
        [N, I] = s.useState('8080'),
        [S, b] = s.useState('localhost'),
        v = (0, u.Dt)(),
        j = x.test(f);
    async function A() {
        o.q$();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(t);
                case 'proxy':
                    return (0, c.Z)(n);
            }
        })(S, N, f);
        null != (await o.Wt(f, e)) && t();
    }
    s.useEffect(() => () => a.Z.wait(() => o.q$()), []);
    let O = null != p && p === f,
        R = O
            ? function () {
                  o.mc(), T(''), b(null);
              }
            : A;
    return (0, i.jsxs)(l.Y0X, {
        'aria-labelledby': v,
        transitionState: n,
        children: [
            (0, i.jsxs)(l.xBx, {
                justify: d.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(l.vwX, {
                        id: v,
                        tag: 'h1',
                        className: _.marginReset,
                        children: h.intl.string(h.t.f8fzk5)
                    }),
                    (0, i.jsx)(l.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: g.modalContent,
                children: [
                    (0, i.jsx)(l.R94, {
                        className: _.marginBottom20,
                        type: l.R94.Types.DESCRIPTION,
                        children: h.intl.string(h.t.a6Vilp)
                    }),
                    null == E
                        ? null
                        : (0, i.jsx)(l.kzN, {
                              className: _.marginBottom20,
                              children: E
                          }),
                    (0, i.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), R();
                        },
                        children: (0, i.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            align: d.Z.Align.START,
                            children: [
                                (0, i.jsx)(l.xJW, {
                                    className: g.inputWrapper,
                                    title: h.intl.string(h.t.P6TzgI),
                                    required: !0,
                                    children: (0, i.jsx)(l.oil, {
                                        value: f,
                                        maxLength: 19,
                                        error: j ? null : h.intl.string(h.t.gPNgKC),
                                        onChange: function (e) {
                                            T(e);
                                        },
                                        disabled: C
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: g.inputWrapper,
                                    title: h.intl.string(h.t['/GTqXF']),
                                    children: (0, i.jsx)(l.q4e, {
                                        isDisabled: !j || '' === f,
                                        value: S,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: h.intl.string(h.t['+Y9Y6u']),
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: h.intl.string(h.t.uaksyc),
                                                key: 'proxy'
                                            }
                                        ],
                                        onChange: function (e) {
                                            b(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== S
                                    ? null
                                    : (0, i.jsx)(l.xJW, {
                                          className: g.inputWrapper,
                                          title: h.intl.string(h.t.fF4zxs),
                                          required: !0,
                                          children: (0, i.jsx)(l.oil, {
                                              value: N,
                                              maxLength: 5,
                                              onChange: (e) => I(e),
                                              disabled: C
                                          })
                                      }),
                                (0, i.jsx)(l.zxk, {
                                    submitting: C,
                                    type: 'submit',
                                    disabled: !j || 0 === f.length || ('localhost' === S && 0 === N.length),
                                    color: O ? l.zxk.Colors.RED : l.zxk.Colors.GREEN,
                                    children: O ? h.intl.string(h.t.d6TR3N) : h.intl.string(h.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
