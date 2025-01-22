r.d(n, {
    DK: function () {
        return b;
    },
    Dx: function () {
        return y;
    },
    EJ: function () {
        return x;
    },
    Ee: function () {
        return I;
    },
    Hh: function () {
        return D;
    },
    II: function () {
        return N;
    },
    MC: function () {
        return C;
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
        return L;
    },
    qE: function () {
        return S;
    },
    v6: function () {
        return w;
    },
    zx: function () {
        return T;
    }
});
var i = r(536091);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(43267),
    c = r(905656),
    d = r(600164),
    f = r(313201),
    p = r(565138),
    h = r(361207),
    _ = r(63063),
    m = r(981631),
    g = r(388032),
    E = r(758803);
let v = l.Avatar;
null == v && (v = () => null);
let y = (e) => {
        let { className: n, id: r, children: i } = e;
        return (0, a.jsx)(l.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: s()(E.title, n),
            id: r,
            children: i
        });
    },
    b = (e) => {
        let { className: n, children: r } = e;
        return (0, a.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: n,
            children: r
        });
    },
    I = (e) => {
        let { className: n, src: r } = e;
        return (0, a.jsx)('img', {
            alt: '',
            src: r,
            className: s()(E.image, n)
        });
    },
    T = (e) => {
        let { className: n, ...r } = e,
            i = r.look === l.Button.Looks.LINK;
        return (0, a.jsx)(l.Button, {
            size: i ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
            fullWidth: !i,
            className: s()(n, {
                [E.button]: !i,
                [E.linkButton]: i
            }),
            ...r
        });
    };
(T.Looks = l.Button.Looks), (T.Colors = l.Button.Colors), (T.Sizes = l.Button.Sizes);
let S = (e) => {
        let { className: n, src: r, size: i } = e;
        return (0, a.jsx)(v, {
            src: r,
            size: i,
            className: s()(E.inviteLargeIcon, n),
            'aria-hidden': !0
        });
    },
    A = (e) => {
        let { guild: n, size: r, animate: i = !1, className: o } = e;
        return (0, a.jsx)(p.Z, {
            active: !0,
            guild: n,
            size: r,
            animate: i,
            className: o
        });
    };
A.Sizes = p.Z.Sizes;
let C = (e) => {
    let { className: n, channel: r, size: i } = e;
    return (0, a.jsx)(v, {
        src: (0, u.x)(r),
        size: i,
        className: s()(E.inviteIcon, n),
        'aria-hidden': !0
    });
};
C.Sizes = l.AvatarSizes;
let N = (e) => {
        let { label: n, error: r, placeholder: i, value: o, className: u, inputClassName: c, setRef: d, type: p = 'text', onChange: h, autoComplete: _, autoFocus: m, maxLength: g, spellCheck: v, name: y, description: b, required: I, onFocus: T, onBlur: S } = e,
            A = (0, f.Dt)();
        return (0, a.jsxs)(l.FormItem, {
            title: n,
            error: r,
            className: u,
            required: I,
            tag: 'label',
            htmlFor: A,
            children: [
                (0, a.jsx)(l.TextInput, {
                    name: y,
                    type: p,
                    value: o,
                    inputRef: d,
                    placeholder: i,
                    inputClassName: s()(c, { [E.inputError]: null != r }),
                    'aria-label': n,
                    onChange: h,
                    autoComplete: _,
                    autoFocus: m,
                    maxLength: g,
                    spellCheck: v,
                    id: A,
                    onFocus: T,
                    onBlur: S
                }),
                null != b
                    ? (0, a.jsx)(l.FormText, {
                          type: l.FormText.Types.DESCRIPTION,
                          className: E.description,
                          children: b
                      })
                    : null
            ]
        });
    },
    R = (e) => {
        let { className: n, children: r } = e;
        return (0, a.jsx)('div', {
            className: s()(E.block, n),
            children: r
        });
    },
    O = (e) => {
        let { className: n, children: r, isProminent: i } = e;
        return (0, a.jsx)(l.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: s()(E.subText, n),
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
    x = (e) => {
        let n,
            { online: r, total: i, className: o, flat: u, textClassName: c } = e;
        return null == i
            ? null
            : (null != r &&
                  r > 0 &&
                  (n = (0, a.jsxs)('div', {
                      className: s()(E.pill, E.pillOnline, u && E.pillFlat),
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
                  className: o,
                  children: [
                      n,
                      (0, a.jsxs)('div', {
                          className: s()(E.pill, u && E.pillFlat),
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
    L = (e) => {
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
                (0, a.jsx)(T, {
                    onClick: () => window.open((0, h.t3)()),
                    children: g.intl.format(g.t.JoS1i4, { platform: (0, h.DW)() })
                }),
                (0, a.jsx)(O, {
                    className: E.downloadButtonSubtext,
                    children: g.intl.format(g.t.wO1VBg, { supportedBrowserURL: _.Z.getArticleURL(m.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    },
    P = (e) => {
        let { className: n, contentClassName: r, tag: i = 'section', onSubmit: o, children: u, expanded: c = !1, theme: d = m.BRd.DARK, style: f } = e;
        return (0, a.jsx)(l.ThemeProvider, {
            theme: d,
            children: (e) =>
                (0, a.jsxs)(i, {
                    'data-theme': d,
                    'data-disable-adaptive-theme': !0,
                    onSubmit: o,
                    style: f,
                    className: s()(c ? E.authBoxExpanded : E.authBox, e, n),
                    children: [
                        (0, a.jsx)('div', { className: E.discordLogo }),
                        (0, a.jsx)('div', {
                            className: s()(E.centeringWrapper, r),
                            children: u
                        })
                    ]
                })
        });
    };
n.ZP = P;
