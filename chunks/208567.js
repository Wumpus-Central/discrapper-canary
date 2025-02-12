t.d(n, {
    S: () => j,
    Z: () => p
}),
    t(47120);
var l,
    i = t(200651),
    r = t(192379),
    s = t(120356),
    a = t.n(s),
    o = t(512722),
    d = t.n(o),
    c = t(481060),
    u = t(624138),
    x = t(813197),
    h = t(981631),
    m = t(388032),
    v = t(223760);
function g(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
function j(e) {
    let { className: n, icon: t = null } = e;
    return (0, i.jsx)(c.f6W, {
        theme: h.BRd.LIGHT,
        children: (e) =>
            (0, i.jsx)('div', {
                className: a()(v.imageUploaderIcon, n, e),
                children: t
            })
    });
}
class N extends (l = r.PureComponent) {
    handleExternalFileChange(e) {
        d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let n, t, l, r;
        let { image: s, hint: o, name: d, makeURL: g, disabled: N, onChange: p, showIcon: f, showIconDisabled: C, className: E, imageClassName: I, iconClassName: S, iconWrapperClassName: T, icon: Z, hideSize: y, imageStyle: b, showRemoveButton: k, maxFileSizeBytes: _, onFileSizeError: R, onOpenImageSelectModal: z, 'aria-label': A } = this.props;
        if (
            (null != (n = null != s && /^data:/.test(s) ? s : g(s))
                ? (t = 'url("'.concat(n, '")'))
                : null != d &&
                  (l = (0, i.jsx)(c.X6q, {
                      variant: 'heading-xxl/normal',
                      color: 'always-white',
                      className: v.imageUploaderAcronym,
                      children: (0, u.Zg)(d)
                  })),
            N)
        )
            return (0, i.jsx)('div', {
                className: a()(v.imageUploader, v.disabled, E),
                children: (0, i.jsxs)('div', {
                    className: a()(v.imageUploaderInner, I),
                    style: {
                        ...b,
                        backgroundImage: t
                    },
                    children: [
                        l,
                        C &&
                            (0, i.jsx)('div', {
                                className: a()(v.imageUploaderIcon, v.imageUploaderIconDisabled, S),
                                children: Z
                            })
                    ]
                })
            });
        null != s
            ? (r = (0, i.jsx)(c.eee, {
                  className: v.removeButton,
                  onClick: this.handleRemove,
                  children: m.intl.string(m.t.N86XcH)
              }))
            : y ||
              (r = (0, i.jsx)('small', {
                  className: v.sizeInfo,
                  children: m.intl.format(m.t.AH4c7e, { size: h.IXf })
              }));
        let D = null !== (e = null != A ? A : o) && void 0 !== e ? e : m.intl.string(m.t['Ge+94+']);
        return (0, i.jsxs)('div', {
            className: a()(v.imageUploader, E),
            children: [
                (0, i.jsx)(c.tEY, {
                    within: !0,
                    children: (0, i.jsxs)('div', {
                        className: f ? a()(v.imageUploaderIconWrapper, T) : void 0,
                        children: [
                            (0, i.jsxs)('div', {
                                className: a()(v.imageUploaderInner, I),
                                style: {
                                    ...b,
                                    backgroundImage: t
                                },
                                children: [
                                    (0, i.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: l
                                    }),
                                    null != z
                                        ? (0, i.jsx)(c.P3F, {
                                              className: v.imageUploaderFileInput,
                                              'aria-label': D,
                                              onClick: z
                                          })
                                        : (0, i.jsx)(x.ZP, {
                                              ref: this.inputRef,
                                              onChange: p,
                                              className: v.imageUploaderFileInput,
                                              'aria-label': D,
                                              tabIndex: 0,
                                              maxFileSizeBytes: _,
                                              onFileSizeError: R
                                          })
                                ]
                            }),
                            null != o &&
                                (0, i.jsx)('div', {
                                    className: v.imageUploaderHint,
                                    'aria-hidden': 'true',
                                    children: o
                                }),
                            f &&
                                (0, i.jsx)(j, {
                                    className: S,
                                    icon: Z
                                })
                        ]
                    })
                }),
                k ? r : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'inputRef', r.createRef()),
            g(this, 'handleRemove', () => {
                this.props.onChange(null);
            });
    }
}
g(N, 'defaultProps', {
    name: '',
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
});
let p = N;
