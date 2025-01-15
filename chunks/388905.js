r.d(n, {
    DK: function () {
        return T;
    },
    Dx: function () {
        return I;
    },
    EJ: function () {
        return L;
    },
    Ee: function () {
        return b;
    },
    Hh: function () {
        return D;
    },
    II: function () {
        return C;
    },
    MC: function () {
        return N;
    },
    Vj: function () {
        return A;
    },
    gO: function () {
        return R;
    },
    i_: function () {
        return O;
    },
    jQ: function () {
        return x;
    },
    qE: function () {
        return S;
    },
    v6: function () {
        return w;
    },
    zx: function () {
        return y;
    }
});
var i = r(536091);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(43267),
    c = r(905656),
    d = r(600164),
    f = r(313201),
    _ = r(565138),
    h = r(361207),
    p = r(63063),
    m = r(981631),
    g = r(388032),
    E = r(331081);
let v = l.Avatar;
null == v && (v = () => null);
let I = (e) => {
        let { className: n, id: r, children: i } = e;
        return (0, a.jsx)(l.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: o()(E.title, n),
            id: r,
            children: i
        });
    },
    T = (e) => {
        let { className: n, children: r } = e;
        return (0, a.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: n,
            children: r
        });
    },
    b = (e) => {
        let { className: n, src: r } = e;
        return (0, a.jsx)('img', {
            alt: '',
            src: r,
            className: o()(E.image, n)
        });
    },
    y = (e) => {
        let { className: n, ...r } = e,
            i = r.look === l.Button.Looks.LINK;
        return (0, a.jsx)(l.Button, {
            size: i ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
            fullWidth: !i,
            className: o()(n, {
                [E.button]: !i,
                [E.linkButton]: i
            }),
            ...r
        });
    };
(y.Looks = l.Button.Looks), (y.Colors = l.Button.Colors), (y.Sizes = l.Button.Sizes);
let S = (e) => {
        let { className: n, src: r, size: i } = e;
        return (0, a.jsx)(v, {
            src: r,
            size: i,
            className: o()(E.inviteLargeIcon, n),
            'aria-hidden': !0
        });
    },
    A = (e) => {
        let { guild: n, size: r, animate: i = !1, className: s } = e;
        return (0, a.jsx)(_.Z, {
            active: !0,
            guild: n,
            size: r,
            animate: i,
            className: s
        });
    };
A.Sizes = _.Z.Sizes;
let N = (e) => {
    let { className: n, channel: r, size: i } = e;
    return (0, a.jsx)(v, {
        src: (0, u.x)(r),
        size: i,
        className: o()(E.inviteIcon, n),
        'aria-hidden': !0
    });
};
N.Sizes = l.AvatarSizes;
let C = (e) => {
        let { label: n, error: r, placeholder: i, value: s, className: u, inputClassName: c, setRef: d, type: _ = 'text', onChange: h, autoComplete: p, autoFocus: m, maxLength: g, spellCheck: v, name: I, description: T, required: b, onFocus: y, onBlur: S } = e,
            A = (0, f.Dt)();
        return (0, a.jsxs)(l.FormItem, {
            title: n,
            error: r,
            className: u,
            required: b,
            tag: 'label',
            htmlFor: A,
            children: [
                (0, a.jsx)(l.TextInput, {
                    name: I,
                    type: _,
                    value: s,
                    inputRef: d,
                    placeholder: i,
                    inputClassName: o()(c, { [E.inputError]: null != r }),
                    'aria-label': n,
                    onChange: h,
                    autoComplete: p,
                    autoFocus: m,
                    maxLength: g,
                    spellCheck: v,
                    id: A,
                    onFocus: y,
                    onBlur: S
                }),
                null != T
                    ? (0, a.jsx)(l.FormText, {
                          type: l.FormText.Types.DESCRIPTION,
                          className: E.description,
                          children: T
                      })
                    : null
            ]
        });
    },
    R = (e) => {
        let { className: n, children: r } = e;
        return (0, a.jsx)('div', {
            className: o()(E.block, n),
            children: r
        });
    },
    O = (e) => {
        let { className: n, children: r, isProminent: i } = e;
        return (0, a.jsx)(l.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: o()(E.subText, n),
            children: r
        });
    },
    D = (e) => {
        let { className: n } = e;
        return (0, a.jsx)(d.Z, {
            direction: d.Z.Direction.VERTICAL,
            align: d.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(c.Z, { className: E.spinnerVideo })
        });
    },
    L = (e) => {
        let n,
            { online: r, total: i, className: s, flat: u, textClassName: c } = e;
        return null == i
            ? null
            : (null != r &&
                  r > 0 &&
                  (n = (0, a.jsxs)('div', {
                      className: o()(E.pill, E.pillOnline, u && E.pillFlat),
                      children: [
                          (0, a.jsx)('i', { className: E.pillIconOnline }),
                          (0, a.jsx)(l.Text, {
                              tag: 'span',
                              className: c,
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: g.intl.format(g.t['LC+S+v'], { membersOnline: r })
                          })
                      ]
                  })),
              (0, a.jsxs)(d.Z, {
                  justify: d.Z.Justify.CENTER,
                  className: s,
                  children: [
                      n,
                      (0, a.jsxs)('div', {
                          className: o()(E.pill, u && E.pillFlat),
                          children: [
                              (0, a.jsx)('i', { className: E.pillIconTotal }),
                              (0, a.jsx)(l.Text, {
                                  tag: 'span',
                                  className: c,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: g.intl.format(g.t.zRl6XV, { count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    x = (e) => {
        let { user: n } = e;
        return null == n
            ? null
            : (0, a.jsxs)('div', {
                  className: E.joiningAs,
                  children: [
                      (0, a.jsx)(l.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: g.intl.string(g.t['/8WWvL'])
                      }),
                      (0, a.jsx)(S, {
                          className: E.joiningAsAvatar,
                          src: n.getAvatarURL(void 0, 24),
                          size: l.AvatarSizes.SIZE_24,
                          'aria-label': n.username
                      }),
                      (0, a.jsx)(l.Text, {
                          className: E.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: n.username
                      })
                  ]
              });
    },
    w = (e) => {
        let { className: n } = e;
        return (0, a.jsxs)(R, {
            className: n,
            children: [
                (0, a.jsx)(y, {
                    onClick: () => window.open((0, h.t3)()),
                    children: g.intl.format(g.t.JoS1i4, { platform: (0, h.DW)() })
                }),
                (0, a.jsx)(O, {
                    className: E.downloadButtonSubtext,
                    children: g.intl.format(g.t.wO1VBg, { supportedBrowserURL: p.Z.getArticleURL(m.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    },
    P = (e) => {
        let { className: n, contentClassName: r, tag: i = 'section', onSubmit: s, children: u, expanded: c = !1, theme: d = m.BRd.DARK, style: f } = e;
        return (0, a.jsx)(l.ThemeProvider, {
            theme: d,
            children: (e) =>
                (0, a.jsxs)(i, {
                    'data-theme': d,
                    'data-disable-adaptive-theme': !0,
                    onSubmit: s,
                    style: f,
                    className: o()(c ? E.authBoxExpanded : E.authBox, e, n),
                    children: [
                        (0, a.jsx)('div', { className: E.discordLogo }),
                        (0, a.jsx)('div', {
                            className: o()(E.centeringWrapper, r),
                            children: u
                        })
                    ]
                })
        });
    };
n.ZP = P;
