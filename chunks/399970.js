n.d(t, { Z: () => b }), n(47120), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(570140),
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
            authorizationError: N,
            authorizing: x
        } = (0, s.cj)([m.Z], () => ({
            authorizedApplicationId: m.Z.testModeApplicationId,
            authorizationError: m.Z.error,
            authorizing: m.Z.isFetchingAuthorization
        })),
        [_, E] = i.useState(null != b ? b : ''),
        [j, O] = i.useState('8080'),
        [C, S] = i.useState('localhost'),
        v = (0, u.Dt)(),
        T = f.test(_);
    async function I() {
        o.q$();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(t);
                case 'proxy':
                    return (0, c.ZP)(n);
            }
        })(C, j, _);
        null != (await o.Wt(_, e)) && t();
    }
    i.useEffect(() => () => l.Z.wait(() => o.q$()), []);
    let y = null != b && b === _,
        A = y
            ? function () {
                  o.mc(), E(''), S(null);
              }
            : I;
    return (0, r.jsxs)(a.Y0X, {
        'aria-labelledby': v,
        transitionState: n,
        children: [
            (0, r.jsxs)(a.xBx, {
                justify: d.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(a.vwX, {
                        id: v,
                        tag: 'h1',
                        className: h.marginReset,
                        children: g.NW.string(g.t.f8fzk5)
                    }),
                    (0, r.jsx)(a.olH, { onClick: t })
                ]
            }),
            (0, r.jsxs)(a.hzk, {
                className: p.modalContent,
                children: [
                    (0, r.jsx)(a.R94, {
                        className: h.marginBottom20,
                        type: a.R94.Types.DESCRIPTION,
                        children: g.NW.string(g.t.a6Vilp)
                    }),
                    null == N
                        ? null
                        : (0, r.jsx)(a.kzN, {
                              className: h.marginBottom20,
                              children: N
                          }),
                    (0, r.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), A();
                        },
                        children: (0, r.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            align: d.Z.Align.START,
                            children: [
                                (0, r.jsx)(a.xJW, {
                                    className: p.inputWrapper,
                                    title: g.NW.string(g.t.P6TzgI),
                                    required: !0,
                                    children: (0, r.jsx)(a.oil, {
                                        value: _,
                                        maxLength: 19,
                                        error: T ? null : g.NW.string(g.t.gPNgKC),
                                        onChange: function (e) {
                                            E(e);
                                        },
                                        disabled: x
                                    })
                                }),
                                (0, r.jsx)(a.xJW, {
                                    className: p.inputWrapper,
                                    title: g.NW.string(g.t['/GTqXF']),
                                    children: (0, r.jsx)(a.q4e, {
                                        isDisabled: !T || '' === _,
                                        value: C,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: g.NW.string(g.t['+Y9Y6u']),
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: g.NW.string(g.t.uaksyc),
                                                key: 'proxy'
                                            }
                                        ],
                                        onChange: function (e) {
                                            S(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== C
                                    ? null
                                    : (0, r.jsx)(a.xJW, {
                                          className: p.inputWrapper,
                                          title: g.NW.string(g.t.fF4zxs),
                                          required: !0,
                                          children: (0, r.jsx)(a.oil, {
                                              value: j,
                                              maxLength: 5,
                                              onChange: (e) => O(e),
                                              disabled: x
                                          })
                                      }),
                                (0, r.jsx)(a.zxk, {
                                    submitting: x,
                                    type: 'submit',
                                    disabled: !T || 0 === _.length || ('localhost' === C && 0 === j.length),
                                    color: y ? a.zxk.Colors.RED : a.zxk.Colors.GREEN,
                                    children: y ? g.NW.string(g.t.d6TR3N) : g.NW.string(g.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
