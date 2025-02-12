n.d(t, {
    DK: () => v,
    Dx: () => E,
    EJ: () => O,
    Ee: () => y,
    Hh: () => R,
    II: () => A,
    MC: () => S,
    Vj: () => b,
    ZP: () => x,
    gO: () => N,
    i_: () => C,
    jQ: () => D,
    qE: () => T,
    v6: () => L,
    zx: () => I
}),
    n(536091);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(43267),
    l = n(905656),
    u = n(600164),
    c = n(313201),
    d = n(565138),
    f = n(361207),
    _ = n(63063),
    p = n(981631),
    h = n(388032),
    m = n(184969);
let g = s.qEK;
null == g && (g = () => null);
let E = (e) => {
        let { className: t, id: n, children: r } = e;
        return (0, i.jsx)(s.X6q, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: a()(m.title, t),
            id: n,
            children: r
        });
    },
    v = (e) => {
        let { className: t, children: n } = e;
        return (0, i.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: t,
            children: n
        });
    },
    y = (e) => {
        let { className: t, src: n } = e;
        return (0, i.jsx)('img', {
            alt: '',
            src: n,
            className: a()(m.image, t)
        });
    },
    I = (e) => {
        let { className: t, ...n } = e,
            r = n.look === s.zxk.Looks.LINK;
        return (0, i.jsx)(s.zxk, {
            size: r ? s.zxk.Sizes.MIN : s.zxk.Sizes.LARGE,
            fullWidth: !r,
            className: a()(t, {
                [m.button]: !r,
                [m.linkButton]: r
            }),
            ...n
        });
    };
(I.Looks = s.zxk.Looks), (I.Colors = s.zxk.Colors), (I.Sizes = s.zxk.Sizes);
let T = (e) => {
        let { className: t, src: n, size: r } = e;
        return (0, i.jsx)(g, {
            src: n,
            size: r,
            className: a()(m.inviteLargeIcon, t),
            'aria-hidden': !0
        });
    },
    b = (e) => {
        let { guild: t, size: n, animate: r = !1, className: a } = e;
        return (0, i.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: r,
            className: a
        });
    };
b.Sizes = d.Z.Sizes;
let S = (e) => {
    let { className: t, channel: n, size: r } = e;
    return (0, i.jsx)(g, {
        src: (0, o.x)(n),
        size: r,
        className: a()(m.inviteIcon, t),
        'aria-hidden': !0
    });
};
S.Sizes = s.EFr;
let A = (e) => {
        let { label: t, error: n, placeholder: r, value: o, className: l, inputClassName: u, setRef: d, type: f = 'text', onChange: _, autoComplete: p, autoFocus: h, maxLength: g, spellCheck: E, name: v, description: y, required: I, onFocus: T, onBlur: b } = e,
            S = (0, c.Dt)();
        return (0, i.jsxs)(s.xJW, {
            title: t,
            error: n,
            className: l,
            required: I,
            tag: 'label',
            htmlFor: S,
            children: [
                (0, i.jsx)(s.oil, {
                    name: v,
                    type: f,
                    value: o,
                    inputRef: d,
                    placeholder: r,
                    inputClassName: a()(u, { [m.inputError]: null != n }),
                    'aria-label': t,
                    onChange: _,
                    autoComplete: p,
                    autoFocus: h,
                    maxLength: g,
                    spellCheck: E,
                    id: S,
                    onFocus: T,
                    onBlur: b
                }),
                null != y
                    ? (0, i.jsx)(s.R94, {
                          type: s.R94.Types.DESCRIPTION,
                          className: m.description,
                          children: y
                      })
                    : null
            ]
        });
    },
    N = (e) => {
        let { className: t, children: n } = e;
        return (0, i.jsx)('div', {
            className: a()(m.block, t),
            children: n
        });
    },
    C = (e) => {
        let { className: t, children: n, isProminent: r } = e;
        return (0, i.jsx)(s.Text, {
            variant: r ? 'text-sm/normal' : 'text-xs/normal',
            className: a()(m.subText, t),
            children: n
        });
    },
    R = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: t,
            children: (0, i.jsx)(l.Z, { className: m.spinnerVideo })
        });
    },
    O = (e) => {
        let t,
            { online: n, total: r, className: o, flat: l, textClassName: c } = e;
        return null == r
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, i.jsxs)('div', {
                      className: a()(m.pill, m.pillOnline, l && m.pillFlat),
                      children: [
                          (0, i.jsx)('i', { className: m.pillIconOnline }),
                          (0, i.jsx)(s.Text, {
                              tag: 'span',
                              className: c,
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: h.intl.format(h.t['LC+S+v'], { membersOnline: n })
                          })
                      ]
                  })),
              (0, i.jsxs)(u.Z, {
                  justify: u.Z.Justify.CENTER,
                  className: o,
                  children: [
                      t,
                      (0, i.jsxs)('div', {
                          className: a()(m.pill, l && m.pillFlat),
                          children: [
                              (0, i.jsx)('i', { className: m.pillIconTotal }),
                              (0, i.jsx)(s.Text, {
                                  tag: 'span',
                                  className: c,
                                  variant: 'text-sm/normal',
                                  color: 'header-secondary',
                                  children: h.intl.format(h.t.zRl6XV, { count: r })
                              })
                          ]
                      })
                  ]
              }));
    },
    D = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, i.jsxs)('div', {
                  className: m.joiningAs,
                  children: [
                      (0, i.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: h.intl.string(h.t['/8WWvL'])
                      }),
                      (0, i.jsx)(T, {
                          className: m.joiningAsAvatar,
                          src: t.getAvatarURL(void 0, 24),
                          size: s.EFr.SIZE_24,
                          'aria-label': t.username
                      }),
                      (0, i.jsx)(s.Text, {
                          className: m.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: t.username
                      })
                  ]
              });
    },
    L = (e) => {
        let { className: t } = e;
        return (0, i.jsxs)(N, {
            className: t,
            children: [
                (0, i.jsx)(I, {
                    onClick: () => window.open((0, f.t3)()),
                    children: h.intl.format(h.t.JoS1i4, { platform: (0, f.DW)() })
                }),
                (0, i.jsx)(C, {
                    className: m.downloadButtonSubtext,
                    children: h.intl.format(h.t.wO1VBg, { supportedBrowserURL: _.Z.getArticleURL(p.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    },
    x = (e) => {
        let { className: t, contentClassName: n, tag: r = 'section', onSubmit: o, children: l, expanded: u = !1, theme: c = p.BRd.DARK, style: d } = e;
        return (0, i.jsx)(s.f6W, {
            theme: c,
            children: (e) =>
                (0, i.jsxs)(r, {
                    'data-theme': c,
                    'data-disable-adaptive-theme': !0,
                    onSubmit: o,
                    style: d,
                    className: a()(u ? m.authBoxExpanded : m.authBox, e, t),
                    children: [
                        (0, i.jsx)('div', { className: m.discordLogo }),
                        (0, i.jsx)('div', {
                            className: a()(m.centeringWrapper, n),
                            children: l
                        })
                    ]
                })
        });
    };
