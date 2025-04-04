n.d(t, {
    DK: () => I,
    Dx: () => O,
    EJ: () => L,
    Ee: () => S,
    Hh: () => D,
    II: () => R,
    MC: () => C,
    Vj: () => A,
    ZP: () => k,
    gO: () => P,
    i_: () => w,
    jQ: () => x,
    qE: () => N,
    v6: () => M,
    zx: () => T
}),
    n(266796),
    n(86693),
    n(536091);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(43267),
    l = n(905656),
    c = n(600164),
    u = n(313201),
    d = n(565138),
    f = n(361207),
    _ = n(63063),
    p = n(981631),
    h = n(388032),
    m = n(270313);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = a.qEK;
null == v && (v = () => null);
let O = (e) => {
        let { className: t, id: n, children: i } = e;
        return (0, r.jsx)(a.X6q, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: o()(m.title, t),
            id: n,
            children: i
        });
    },
    I = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(a.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: t,
            children: n
        });
    },
    S = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)('img', {
            alt: '',
            src: n,
            className: o()(m.image, t)
        });
    },
    T = (e) => {
        var { className: t } = e,
            n = b(e, ['className']);
        let i = n.look === a.zxk.Looks.LINK;
        return (0, r.jsx)(
            a.zxk,
            E(
                {
                    size: i ? a.zxk.Sizes.MIN : a.zxk.Sizes.LARGE,
                    fullWidth: !i,
                    className: o()(t, {
                        [m.button]: !i,
                        [m.linkButton]: i
                    })
                },
                n
            )
        );
    };
(T.Looks = a.zxk.Looks), (T.Colors = a.zxk.Colors), (T.Sizes = a.zxk.Sizes);
let N = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(v, {
            src: n,
            size: i,
            className: o()(m.inviteLargeIcon, t),
            'aria-hidden': !0
        });
    },
    A = (e) => {
        let { guild: t, size: n, animate: i = !1, className: o } = e;
        return (0, r.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: o
        });
    };
A.Sizes = d.Z.Sizes;
let C = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(v, {
        src: (0, s.x)(n),
        size: i,
        className: o()(m.inviteIcon, t),
        'aria-hidden': !0
    });
};
C.Sizes = a.EFr;
let R = (e) => {
        let { label: t, error: n, placeholder: i, value: s, className: l, inputClassName: c, setRef: d, type: f = 'text', onChange: _, autoComplete: p, autoFocus: h, maxLength: g, spellCheck: E, name: b, description: y, required: v, onFocus: O, onBlur: I } = e,
            S = (0, u.Dt)();
        return (0, r.jsxs)(a.xJW, {
            title: t,
            error: n,
            className: l,
            required: v,
            tag: 'label',
            htmlFor: S,
            children: [
                (0, r.jsx)(a.oil, {
                    name: b,
                    type: f,
                    value: s,
                    inputRef: d,
                    placeholder: i,
                    inputClassName: o()(c, { [m.inputError]: null != n }),
                    'aria-label': t,
                    onChange: _,
                    autoComplete: p,
                    autoFocus: h,
                    maxLength: g,
                    spellCheck: E,
                    id: S,
                    onFocus: O,
                    onBlur: I
                }),
                null != y
                    ? (0, r.jsx)(a.R94, {
                          type: a.R94.Types.DESCRIPTION,
                          className: m.description,
                          children: y
                      })
                    : null
            ]
        });
    },
    P = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)('div', {
            className: o()(m.block, t),
            children: n
        });
    },
    w = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(a.Text, {
            variant: 'text-xs/normal',
            className: o()(m.subText, t),
            children: n
        });
    },
    D = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: t,
            children: (0, r.jsx)(l.Z, { className: m.spinnerVideo })
        });
    },
    L = (e) => {
        let t,
            { online: n, total: i, className: s, flat: l, textClassName: u } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)('div', {
                      className: o()(m.pill, m.pillOnline, l && m.pillFlat),
                      children: [
                          (0, r.jsx)('i', { className: m.pillIconOnline }),
                          (0, r.jsx)(a.Text, {
                              tag: 'span',
                              className: u,
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: h.NW.format(h.t['LC+S+v'], { membersOnline: n })
                          })
                      ]
                  })),
              (0, r.jsxs)(c.Z, {
                  justify: c.Z.Justify.CENTER,
                  className: s,
                  children: [
                      t,
                      (0, r.jsxs)('div', {
                          className: o()(m.pill, l && m.pillFlat),
                          children: [
                              (0, r.jsx)('i', { className: m.pillIconTotal }),
                              (0, r.jsx)(a.Text, {
                                  tag: 'span',
                                  className: u,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: h.NW.format(h.t.zRl6XV, { count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    x = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, r.jsxs)('div', {
                  className: m.joiningAs,
                  children: [
                      (0, r.jsx)(a.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: h.NW.string(h.t['/8WWvL'])
                      }),
                      (0, r.jsx)(N, {
                          className: m.joiningAsAvatar,
                          src: t.getAvatarURL(void 0, 24),
                          size: a.EFr.SIZE_24,
                          'aria-label': t.username
                      }),
                      (0, r.jsx)(a.Text, {
                          className: m.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: t.username
                      })
                  ]
              });
    },
    M = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(P, {
            className: t,
            children: [
                (0, r.jsx)(T, {
                    onClick: () => window.open((0, f.t3)()),
                    children: h.NW.format(h.t.JoS1i4, { platform: (0, f.DW)() })
                }),
                (0, r.jsx)(w, {
                    className: m.downloadButtonSubtext,
                    children: h.NW.format(h.t.wO1VBg, { supportedBrowserURL: _.Z.getArticleURL(p.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    },
    k = (e) => {
        let { className: t, contentClassName: n, tag: i = 'section', onSubmit: s, children: l, expanded: c = !1, theme: u = p.BRd.DARK, style: d } = e;
        return (0, r.jsx)(a.f6W, {
            theme: u,
            children: (e) =>
                (0, r.jsxs)(i, {
                    'data-theme': u,
                    'data-disable-adaptive-theme': !0,
                    onSubmit: s,
                    style: d,
                    className: o()(c ? m.authBoxExpanded : m.authBox, e, t),
                    children: [
                        (0, r.jsx)('div', { className: m.discordLogo }),
                        (0, r.jsx)('div', {
                            className: o()(m.centeringWrapper, n),
                            children: l
                        })
                    ]
                })
        });
    };
