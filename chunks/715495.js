(n.d(t, { Z: () => O }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(755721),
    l = n(481060),
    o = n(276264),
    c = n(205822),
    d = n(329013),
    u = n(594174),
    m = n(396821),
    p = n(780771),
    g = n(4242),
    h = n(996746),
    f = n(711325),
    b = n(852630),
    x = n(731994),
    _ = n(396921);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O() {
    var e;
    let [t, n] = (0, r.useState)(!1),
        [s, o] = (0, r.useState)(!1),
        [u, h] = (0, r.useState)(null),
        [b, O] = (0, r.useState)(320),
        y = (0, r.useRef)(null),
        A = (0, r.useRef)(null),
        P = (0, r.useRef)(null),
        R = (0, m.ZP)((e) => e.toolsCache),
        { setToolsCache: D, removeToolsCache: Z } = (0, m.L3)(),
        { setImgCache: w } = (0, m.W_)(),
        k = (0, r.useCallback)(
            (e) => {
                let t = R[e];
                (null != t &&
                    h({
                        src: t.url,
                        palette: t.palette,
                        preview: !0
                    }),
                    h((t) =>
                        null == t
                            ? {
                                  src: e,
                                  palette: p.jD,
                                  preview: !0
                              }
                            : E(j({}, t), {
                                  src: e,
                                  preview: !0
                              })
                    ));
            },
            [R]
        ),
        L = (0, r.useCallback)((e) => {
            h((t) =>
                null == t
                    ? null
                    : E(j({}, t), {
                          palette: e,
                          preview: !0
                      })
            );
        }, []),
        B = (0, r.useCallback)(
            (e) => {
                Z(e);
            },
            [Z]
        ),
        M = (0, r.useCallback)((e) => {
            if (null != y.current) {
                let t = y.current.getBoundingClientRect();
                O(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        U = (0, r.useCallback)(
            (e) => {
                (e.preventDefault(), e.stopPropagation());
                let t = (e) => {
                        (e.preventDefault(), M(e));
                    },
                    n = () => {
                        (null != A.current && (document.removeEventListener('mousemove', A.current), (A.current = null)), null != P.current && (document.removeEventListener('mouseup', P.current), (P.current = null)));
                    };
                ((A.current = t), (P.current = n), document.addEventListener('mousemove', t), document.addEventListener('mouseup', n));
            },
            [M]
        );
    return (
        (0, r.useEffect)(
            () => () => {
                (null != A.current && (document.removeEventListener('mousemove', A.current), (A.current = null)), null != P.current && (document.removeEventListener('mouseup', P.current), (P.current = null)));
            },
            []
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: _.controls,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.toggles,
                            children: [
                                (0, i.jsx)(a.zx, {
                                    className: _.toggleButton,
                                    size: a.Ph.SMALL,
                                    onClick: () => {
                                        (o(!1), n((e) => !e));
                                    },
                                    color: a.Tt.PRIMARY,
                                    children: 'Toggle Themes'
                                }),
                                (0, i.jsx)(a.zx, {
                                    className: _.toggleButton,
                                    size: a.Ph.SMALL,
                                    onClick: () => {
                                        (n(!1), o((e) => !e));
                                    },
                                    color: a.Tt.PRIMARY,
                                    children: 'Toggle Gradients'
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: _.themePicker,
                            children: [
                                t && (0, i.jsx)(d.i, {}),
                                s &&
                                    (0, i.jsx)(f.Z, {
                                        selected: null == u || null == (e = u.palette) ? void 0 : e.name,
                                        onSelect: (e) => {
                                            ((null == u ? void 0 : u.src) != null && D(u.src, u.src, e), L(e));
                                        }
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: _.main,
                    children: [
                        (0, i.jsxs)('div', {
                            ref: y,
                            className: _.previews,
                            style: { width: ''.concat(b, 'px') },
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'Memberlist'
                                }),
                                (0, i.jsx)(T, { nameplate: u }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'DMs'
                                }),
                                (0, i.jsx)(N, { nameplate: u }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'RTC'
                                }),
                                (0, i.jsx)(I, { nameplate: u }),
                                (0, i.jsx)('div', {
                                    className: _.resizeHandle,
                                    onMouseDown: U
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: _.buttons,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'Drag background image to screen'
                                }),
                                (0, i.jsx)(c.Z, {
                                    title: 'upload image',
                                    description: 'upload the background',
                                    icons: x.pA,
                                    onDrop: async (e) => {
                                        let t = URL.createObjectURL(e[0]),
                                            n = e[0],
                                            i = await n.arrayBuffer();
                                        (w(t, t, (0, g.xh)(i)), D(t, t, p.jD));
                                    }
                                }),
                                (0, i.jsx)('div', {
                                    className: _.uploadedArea,
                                    children: Object.values(R).map((e) => {
                                        let { url: t } = e;
                                        return (0, i.jsx)(
                                            C,
                                            {
                                                src: t,
                                                onSetStatic: k,
                                                removeAsset: B
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, i.jsx)(S, {
                                    label: 'gradient override',
                                    onChange: (e) =>
                                        L({
                                            name: p._j,
                                            darkBackground: e,
                                            lightBackground: e
                                        })
                                }),
                                (0, i.jsx)(v, {
                                    label: 'set',
                                    onClick: () => {}
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
function C(e) {
    let { src: t, onSetStatic: n, removeAsset: r } = e;
    return (0, i.jsxs)('div', {
        className: _.uploaded,
        children: [
            (0, i.jsx)(l.P3F, {
                onClick: () => r(t),
                className: _.xicon,
                children: (0, i.jsx)(l.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, i.jsx)('img', {
                className: _.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, i.jsx)('div', {
                className: _.uploadedControls,
                children: (0, i.jsx)(a.zx, {
                    onClick: () => n(t),
                    size: a.Ph.TINY,
                    color: a.Tt.PRIMARY,
                    children: 'set nameplate'
                })
            })
        ]
    });
}
function v(e) {
    let { label: t, onClick: n } = e;
    return (0, i.jsxs)('div', {
        className: _.flex,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: 'coming soon'
            }),
            (0, i.jsx)(l.zxk, {
                variant: 'secondary',
                size: 'sm',
                text: t,
                disabled: !0,
                onClick: n
            })
        ]
    });
}
function S(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: _.hexInput,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: _.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function T(e) {
    let { nameplate: t } = e,
        n = (0, s.e7)([u.default], () => u.default.getCurrentUser());
    return (0, i.jsx)('div', {
        className: _.preview,
        children: (0, i.jsxs)('div', {
            className: _.simArea,
            children: [
                (0, i.jsx)(l.Text, {
                    className: _.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(o.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, i.jsx)(l.Text, {
                    className: _.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(o.Z, {
                            nameplate: t,
                            selected: !0,
                            user: n,
                            currentUser: n
                        }),
                        (0, i.jsx)(o.Z, {
                            selected: !0,
                            user: n,
                            currentUser: n
                        })
                    ]
                })
            ]
        })
    });
}
function N(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: _.preview,
        children: (0, i.jsxs)('div', {
            className: _.simArea,
            children: [
                (0, i.jsx)(l.Text, {
                    className: _.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(b.Z, { nameplate: t }),
                (0, i.jsx)(l.Text, {
                    className: _.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(b.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, i.jsx)(b.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
function I(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: _.preview,
        children: (0, i.jsx)('div', {
            className: _.rtcSim,
            children: (0, i.jsx)(h.Z, { nameplate: t })
        })
    });
}
