(n.d(t, { Z: () => x }), n(388685), n(35282));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(755721),
    l = n(481060),
    o = n(570140),
    c = n(401430),
    d = n(155268),
    u = n(600164),
    m = n(313201),
    p = n(695103),
    g = n(388032),
    h = n(458240),
    f = n(20493);
let b = /^\d+$|^$/;
function x(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: x,
            authorizationError: _,
            authorizing: j
        } = (0, s.cj)([p.Z], () => ({
            authorizedApplicationId: p.Z.testModeApplicationId,
            authorizationError: p.Z.error,
            authorizing: p.Z.isFetchingAuthorization
        })),
        [C, E] = r.useState(null != x ? x : ''),
        [O, v] = r.useState('8080'),
        [S, T] = r.useState('localhost'),
        N = (0, m.Dt)(),
        I = b.test(C);
    async function y() {
        c.q$();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(t);
                case 'proxy':
                    return (0, d.ZP)(n);
            }
        })(S, O, C);
        null != (await c.Wt(C, e)) && t();
    }
    r.useEffect(() => () => o.Z.wait(() => c.q$()), []);
    let A = null != x && x === C,
        P = A
            ? function () {
                  (c.mc(), E(''), T(null));
              }
            : y;
    return (0, i.jsxs)(l.Y0X, {
        'aria-labelledby': N,
        transitionState: n,
        parentComponent: 'TestModeModal',
        children: [
            (0, i.jsxs)(l.xBx, {
                justify: u.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(l.vwX, {
                        id: N,
                        tag: 'h1',
                        className: f.marginReset,
                        children: g.intl.string(g.t.f8fzk5)
                    }),
                    (0, i.jsx)(l.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: h.modalContent,
                children: [
                    (0, i.jsx)(l.R94, {
                        className: f.marginBottom20,
                        type: l.R94.Types.DESCRIPTION,
                        children: g.intl.string(g.t.a6Vilp)
                    }),
                    null == _
                        ? null
                        : (0, i.jsx)(l.kzN, {
                              className: f.marginBottom20,
                              children: _
                          }),
                    (0, i.jsx)('form', {
                        onSubmit: (e) => {
                            (e.preventDefault(), P());
                        },
                        children: (0, i.jsxs)(u.Z, {
                            direction: u.Z.Direction.VERTICAL,
                            align: u.Z.Align.START,
                            children: [
                                (0, i.jsx)(l.xJW, {
                                    className: h.inputWrapper,
                                    title: g.intl.string(g.t.P6TzgI),
                                    required: !0,
                                    children: (0, i.jsx)(l.oil, {
                                        value: C,
                                        maxLength: 19,
                                        error: I ? null : g.intl.string(g.t.gPNgKC),
                                        onChange: function (e) {
                                            E(e);
                                        },
                                        disabled: j
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: h.inputWrapper,
                                    title: g.intl.string(g.t['/GTqXF']),
                                    children: (0, i.jsx)(l.q4e, {
                                        isDisabled: !I || '' === C,
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
                                            T(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== S
                                    ? null
                                    : (0, i.jsx)(l.xJW, {
                                          className: h.inputWrapper,
                                          title: g.intl.string(g.t.fF4zxs),
                                          required: !0,
                                          children: (0, i.jsx)(l.oil, {
                                              value: O,
                                              maxLength: 5,
                                              onChange: (e) => v(e),
                                              disabled: j
                                          })
                                      }),
                                (0, i.jsx)(a.zx, {
                                    submitting: j,
                                    type: 'submit',
                                    disabled: !I || 0 === C.length || ('localhost' === S && 0 === O.length),
                                    color: A ? a.zx.Colors.RED : a.zx.Colors.GREEN,
                                    children: A ? g.intl.string(g.t.d6TR3N) : g.intl.string(g.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
