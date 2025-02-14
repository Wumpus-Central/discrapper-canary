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
    g = n(388032),
    h = n(557562),
    x = n(483938);
let _ = /^\d+$|^$/;
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
        [N, S] = s.useState('8080'),
        [I, b] = s.useState('localhost'),
        v = (0, u.Dt)(),
        j = _.test(f);
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
        })(I, N, f);
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
                        className: x.marginReset,
                        children: g.intl.string(g.t.f8fzk5)
                    }),
                    (0, i.jsx)(l.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: h.modalContent,
                children: [
                    (0, i.jsx)(l.R94, {
                        className: x.marginBottom20,
                        type: l.R94.Types.DESCRIPTION,
                        children: g.intl.string(g.t.a6Vilp)
                    }),
                    null == E
                        ? null
                        : (0, i.jsx)(l.kzN, {
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
                                (0, i.jsx)(l.xJW, {
                                    className: h.inputWrapper,
                                    title: g.intl.string(g.t.P6TzgI),
                                    required: !0,
                                    children: (0, i.jsx)(l.oil, {
                                        value: f,
                                        maxLength: 19,
                                        error: j ? null : g.intl.string(g.t.gPNgKC),
                                        onChange: function (e) {
                                            T(e);
                                        },
                                        disabled: C
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: h.inputWrapper,
                                    title: g.intl.string(g.t['/GTqXF']),
                                    children: (0, i.jsx)(l.q4e, {
                                        isDisabled: !j || '' === f,
                                        value: I,
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
                                            b(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== I
                                    ? null
                                    : (0, i.jsx)(l.xJW, {
                                          className: h.inputWrapper,
                                          title: g.intl.string(g.t.fF4zxs),
                                          required: !0,
                                          children: (0, i.jsx)(l.oil, {
                                              value: N,
                                              maxLength: 5,
                                              onChange: (e) => S(e),
                                              disabled: C
                                          })
                                      }),
                                (0, i.jsx)(l.zxk, {
                                    submitting: C,
                                    type: 'submit',
                                    disabled: !j || 0 === f.length || ('localhost' === I && 0 === N.length),
                                    color: O ? l.zxk.Colors.RED : l.zxk.Colors.GREEN,
                                    children: O ? g.intl.string(g.t.d6TR3N) : g.intl.string(g.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
