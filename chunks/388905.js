(n.d(t, {
    DK: () => T,
    Dx: () => I,
    EJ: () => x,
    Ee: () => S,
    Hh: () => L,
    II: () => P,
    MC: () => R,
    Vj: () => C,
    ZP: () => j,
    gO: () => w,
    i_: () => D,
    jQ: () => k,
    qE: () => N,
    v6: () => M,
    zx: () => A
}),
    n(953529),
    n(472816),
    n(794429));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(43267),
    c = n(905656),
    u = n(600164),
    d = n(313201),
    f = n(565138),
    _ = n(361207),
    p = n(63063),
    h = n(981631),
    m = n(388032),
    g = n(270313);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let v = s.qEK;
null == v && (v = () => null);
let I = (e) => {
        let { className: t, id: n, children: i } = e;
        return (0, r.jsx)(s.X6q, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: a()(g.title, t),
            id: n,
            children: i
        });
    },
    T = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.Text, {
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
            className: a()(g.image, t)
        });
    },
    A = (e) => {
        var { className: t } = e,
            n = y(e, ['className']);
        let i = n.look === o.zx.Looks.LINK;
        return (0, r.jsx)(
            o.zx,
            b(
                {
                    size: i ? o.zx.Sizes.MIN : o.zx.Sizes.LARGE,
                    fullWidth: !i,
                    className: a()(t, {
                        [g.button]: !i,
                        [g.linkButton]: i
                    })
                },
                n
            )
        );
    };
((A.Looks = o.zx.Looks), (A.Colors = o.zx.Colors), (A.Sizes = o.zx.Sizes));
let N = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(v, {
            src: n,
            size: i,
            className: a()(g.inviteLargeIcon, t),
            'aria-hidden': !0
        });
    },
    C = (e) => {
        let { guild: t, size: n, animate: i = !1, className: a } = e;
        return (0, r.jsx)(f.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: a
        });
    };
C.Sizes = f.Z.Sizes;
let R = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(v, {
        src: (0, l.x)(n),
        size: i,
        className: a()(g.inviteIcon, t),
        'aria-hidden': !0
    });
};
R.Sizes = s.EFr;
let P = (e) => {
        let { label: t, error: n, placeholder: i, value: o, className: l, inputClassName: c, setRef: u, type: f = 'text', onChange: _, autoComplete: p, autoFocus: h, maxLength: m, spellCheck: E, name: b, description: y, required: O, onFocus: v, onBlur: I } = e,
            T = (0, d.Dt)();
        return (0, r.jsxs)(s.xJW, {
            title: t,
            error: n,
            className: l,
            required: O,
            tag: 'label',
            htmlFor: T,
            children: [
                (0, r.jsx)(s.oil, {
                    name: b,
                    type: f,
                    value: o,
                    inputRef: u,
                    placeholder: i,
                    inputClassName: a()(c, { [g.inputError]: null != n }),
                    'aria-label': t,
                    onChange: _,
                    autoComplete: p,
                    autoFocus: h,
                    maxLength: m,
                    spellCheck: E,
                    id: T,
                    onFocus: v,
                    onBlur: I
                }),
                null != y
                    ? (0, r.jsx)(s.R94, {
                          type: s.R94.Types.DESCRIPTION,
                          className: g.description,
                          children: y
                      })
                    : null
            ]
        });
    },
    w = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)('div', {
            className: a()(g.block, t),
            children: n
        });
    },
    D = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.Text, {
            variant: 'text-xs/normal',
            className: a()(g.subText, t),
            children: n
        });
    },
    L = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: t,
            children: (0, r.jsx)(c.Z, { className: g.spinnerVideo })
        });
    },
    x = (e) => {
        let t,
            { online: n, total: i, className: o, flat: l, textClassName: c } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)('div', {
                      className: a()(g.pill, g.pillOnline, l && g.pillFlat),
                      children: [
                          (0, r.jsx)('i', { className: g.pillIconOnline }),
                          (0, r.jsx)(s.Text, {
                              tag: 'span',
                              className: c,
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: m.intl.format(m.t['LC+S+v'], { membersOnline: n })
                          })
                      ]
                  })),
              (0, r.jsxs)(u.Z, {
                  justify: u.Z.Justify.CENTER,
                  className: o,
                  children: [
                      t,
                      (0, r.jsxs)('div', {
                          className: a()(g.pill, l && g.pillFlat),
                          children: [
                              (0, r.jsx)('i', { className: g.pillIconTotal }),
                              (0, r.jsx)(s.Text, {
                                  tag: 'span',
                                  className: c,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: m.intl.format(m.t.zRl6XV, { count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    k = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, r.jsxs)('div', {
                  className: g.joiningAs,
                  children: [
                      (0, r.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: m.intl.string(m.t['/8WWvL'])
                      }),
                      (0, r.jsx)(N, {
                          className: g.joiningAsAvatar,
                          src: t.getAvatarURL(void 0, 24),
                          size: s.EFr.SIZE_24,
                          'aria-label': t.username
                      }),
                      (0, r.jsx)(s.Text, {
                          className: g.joiningAsUsername,
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
        return (0, r.jsxs)(w, {
            className: t,
            children: [
                (0, r.jsx)(o.zx, {
                    onClick: () => window.open((0, _.t3)()),
                    children: m.intl.format(m.t.JoS1i4, { platform: (0, _.DW)() })
                }),
                (0, r.jsx)(D, {
                    className: g.downloadButtonSubtext,
                    children: m.intl.format(m.t.wO1VBg, { supportedBrowserURL: p.Z.getArticleURL(h.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    },
    j = (e) => {
        let { className: t, contentClassName: n, tag: i = 'section', onSubmit: o, children: l, expanded: c = !1, theme: u = h.BRd.DARK, style: d } = e;
        return (0, r.jsx)(s.f6W, {
            theme: u,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsxs)(i, {
                    'data-theme': u,
                    onSubmit: o,
                    style: d,
                    className: a()(c ? g.authBoxExpanded : g.authBox, e, t),
                    children: [
                        (0, r.jsx)('div', { className: g.discordLogo }),
                        (0, r.jsx)('div', {
                            className: a()(g.centeringWrapper, n),
                            children: l
                        })
                    ]
                })
        });
    };
