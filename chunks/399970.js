n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(570140),
    o = n(401430),
    c = n(155268),
    d = n(600164),
    u = n(313201),
    h = n(695103),
    m = n(388032),
    g = n(635490),
    x = n(814632);
let _ = /^\d+$|^$/;
function p(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: p,
            authorizationError: E,
            authorizing: C
        } = (0, l.cj)([h.Z], () => ({
            authorizedApplicationId: h.Z.testModeApplicationId,
            authorizationError: h.Z.error,
            authorizing: h.Z.isFetchingAuthorization
        })),
        [N, f] = s.useState(null != p ? p : ''),
        [I, T] = s.useState('8080'),
        [S, j] = s.useState('localhost'),
        v = (0, u.Dt)(),
        b = _.test(N);
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
        })(S, I, N);
        null != (await o.Wt(N, e)) && t();
    }
    s.useEffect(() => () => a.Z.wait(() => o.q$()), []);
    let O = null != p && p === N,
        R = O
            ? function () {
                  o.mc(), f(''), j(null);
              }
            : A;
    return (0, i.jsxs)(r.Y0X, {
        'aria-labelledby': v,
        transitionState: n,
        children: [
            (0, i.jsxs)(r.xBx, {
                justify: d.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(r.vwX, {
                        id: v,
                        tag: 'h1',
                        className: x.marginReset,
                        children: m.intl.string(m.t.f8fzk5)
                    }),
                    (0, i.jsx)(r.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(r.hzk, {
                className: g.modalContent,
                children: [
                    (0, i.jsx)(r.R94, {
                        className: x.marginBottom20,
                        type: r.R94.Types.DESCRIPTION,
                        children: m.intl.string(m.t.a6Vilp)
                    }),
                    null == E
                        ? null
                        : (0, i.jsx)(r.kzN, {
                              className: x.marginBottom20,
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
                                (0, i.jsx)(r.xJW, {
                                    className: g.inputWrapper,
                                    title: m.intl.string(m.t.P6TzgI),
                                    required: !0,
                                    children: (0, i.jsx)(r.oil, {
                                        value: N,
                                        maxLength: 19,
                                        error: b ? null : m.intl.string(m.t.gPNgKC),
                                        onChange: function (e) {
                                            f(e);
                                        },
                                        disabled: C
                                    })
                                }),
                                (0, i.jsx)(r.xJW, {
                                    className: g.inputWrapper,
                                    title: m.intl.string(m.t['/GTqXF']),
                                    children: (0, i.jsx)(r.q4e, {
                                        isDisabled: !b || '' === N,
                                        value: S,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: m.intl.string(m.t['+Y9Y6u']),
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: m.intl.string(m.t.uaksyc),
                                                key: 'proxy'
                                            }
                                        ],
                                        onChange: function (e) {
                                            j(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== S
                                    ? null
                                    : (0, i.jsx)(r.xJW, {
                                          className: g.inputWrapper,
                                          title: m.intl.string(m.t.fF4zxs),
                                          required: !0,
                                          children: (0, i.jsx)(r.oil, {
                                              value: I,
                                              maxLength: 5,
                                              onChange: (e) => T(e),
                                              disabled: C
                                          })
                                      }),
                                (0, i.jsx)(r.zxk, {
                                    submitting: C,
                                    type: 'submit',
                                    disabled: !b || 0 === N.length || ('localhost' === S && 0 === I.length),
                                    color: O ? r.zxk.Colors.RED : r.zxk.Colors.GREEN,
                                    children: O ? m.intl.string(m.t.d6TR3N) : m.intl.string(m.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
