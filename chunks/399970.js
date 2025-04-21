n.d(t, { Z: () => b }), n(388685), n(35282);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(570140),
    o = n(401430),
    c = n(155268),
    d = n(600164),
    u = n(313201),
    m = n(695103),
    g = n(388032),
    p = n(458240),
    h = n(20493);
let f = /^\d+$|^$/;
function b(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: b,
            authorizationError: _,
            authorizing: x
        } = (0, s.cj)([m.Z], () => ({
            authorizedApplicationId: m.Z.testModeApplicationId,
            authorizationError: m.Z.error,
            authorizing: m.Z.isFetchingAuthorization
        })),
        [E, j] = r.useState(null != b ? b : ''),
        [C, O] = r.useState('8080'),
        [S, v] = r.useState('localhost'),
        T = (0, u.Dt)(),
        I = f.test(E);
    async function N() {
        o.q$();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(t);
                case 'proxy':
                    return (0, c.ZP)(n);
            }
        })(S, C, E);
        null != (await o.Wt(E, e)) && t();
    }
    r.useEffect(() => () => a.Z.wait(() => o.q$()), []);
    let y = null != b && b === E,
        A = y
            ? function () {
                  o.mc(), j(''), v(null);
              }
            : N;
    return (0, i.jsxs)(l.Y0X, {
        'aria-labelledby': T,
        transitionState: n,
        children: [
            (0, i.jsxs)(l.xBx, {
                justify: d.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(l.vwX, {
                        id: T,
                        tag: 'h1',
                        className: h.marginReset,
                        children: g.intl.string(g.t.f8fzk5)
                    }),
                    (0, i.jsx)(l.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: p.modalContent,
                children: [
                    (0, i.jsx)(l.R94, {
                        className: h.marginBottom20,
                        type: l.R94.Types.DESCRIPTION,
                        children: g.intl.string(g.t.a6Vilp)
                    }),
                    null == _
                        ? null
                        : (0, i.jsx)(l.kzN, {
                              className: h.marginBottom20,
                              children: _
                          }),
                    (0, i.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), A();
                        },
                        children: (0, i.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            align: d.Z.Align.START,
                            children: [
                                (0, i.jsx)(l.xJW, {
                                    className: p.inputWrapper,
                                    title: g.intl.string(g.t.P6TzgI),
                                    required: !0,
                                    children: (0, i.jsx)(l.oil, {
                                        value: E,
                                        maxLength: 19,
                                        error: I ? null : g.intl.string(g.t.gPNgKC),
                                        onChange: function (e) {
                                            j(e);
                                        },
                                        disabled: x
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: p.inputWrapper,
                                    title: g.intl.string(g.t['/GTqXF']),
                                    children: (0, i.jsx)(l.q4e, {
                                        isDisabled: !I || '' === E,
                                        value: S,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: g.intl.string(g.t['+Y9Y6u']),
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: g.intl.string(g.t.uaksyc),
                                                key: 'proxy'
                                            }
                                        ],
                                        onChange: function (e) {
                                            v(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== S
                                    ? null
                                    : (0, i.jsx)(l.xJW, {
                                          className: p.inputWrapper,
                                          title: g.intl.string(g.t.fF4zxs),
                                          required: !0,
                                          children: (0, i.jsx)(l.oil, {
                                              value: C,
                                              maxLength: 5,
                                              onChange: (e) => O(e),
                                              disabled: x
                                          })
                                      }),
                                (0, i.jsx)(l.zxk, {
                                    submitting: x,
                                    type: 'submit',
                                    disabled: !I || 0 === E.length || ('localhost' === S && 0 === C.length),
                                    color: y ? l.zxk.Colors.RED : l.zxk.Colors.GREEN,
                                    children: y ? g.intl.string(g.t.d6TR3N) : g.intl.string(g.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
