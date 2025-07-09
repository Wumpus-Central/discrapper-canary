(n.d(e, { default: () => g }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(755721),
    a = n(481060),
    s = n(600164),
    o = n(538211),
    c = n(698066),
    u = n(648159),
    d = n(388032),
    b = n(424698),
    m = n(679335);
function f(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class p extends r.PureComponent {
    render() {
        let { isStreamer: t, transitionState: e, onClose: n } = this.props,
            { problem: r } = this.state;
        return (0, l.jsxs)(a.Y0X, {
            transitionState: e,
            size: a.CgR.SMALL,
            'aria-label': d.intl.string(d.t.qnJ9W1),
            parentComponent: 'ReportProblem',
            children: [
                (0, l.jsx)(u.Z, {}),
                (0, l.jsxs)(a.xBx, {
                    separator: !1,
                    className: b.modalHeader,
                    children: [
                        (0, l.jsx)(a.X6q, {
                            variant: 'text-md/semibold',
                            className: m.title,
                            children: d.intl.string(d.t.qnJ9W1)
                        }),
                        (0, l.jsx)(a.olH, {
                            className: m.closeButton,
                            innerClassName: b.modalInnerCloseButton,
                            onClick: n
                        })
                    ]
                }),
                (0, l.jsxs)(a.hzk, {
                    className: m.content,
                    children: [
                        (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t['7vw0h4'])
                        }),
                        (0, l.jsx)(a.xJW, {
                            title: d.intl.string(d.t['6Y1t5O']),
                            children: (0, l.jsx)(a.q4e, {
                                placeholder: d.intl.string(d.t.U0kGk5),
                                options: (0, o.Z)({
                                    isStreamer: t,
                                    isEndStream: !1,
                                    showVibesHoneypot: !1
                                }),
                                onChange: this.handleChanged,
                                value: r,
                                maxVisibleItems: 4
                            })
                        }),
                        (0, l.jsx)('div', { className: b.art })
                    ]
                }),
                (0, l.jsxs)(a.mzw, {
                    className: m.__invalid_footer,
                    children: [
                        (0, l.jsx)(a.zxk, {
                            variant: 'primary',
                            text: d.intl.string(d.t.E48BIS),
                            disabled: null == r,
                            onClick: this.handleSubmit
                        }),
                        (0, l.jsx)(s.Z, {
                            children: (0, l.jsx)(i.zx, {
                                look: i.zx.Looks.LINK,
                                color: i.zx.Colors.PRIMARY,
                                size: i.zx.Sizes.NONE,
                                onClick: n,
                                children: d.intl.string(d.t['ETE/oK'])
                            })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...t) {
        (super(...t),
            f(this, 'state', { problem: null }),
            f(this, 'handleChanged', (t) => {
                this.setState({ problem: null != t ? t : null });
            }),
            f(this, 'handleSubmit', () => {
                let { stream: t, streamApplication: e, analyticsData: r, onClose: i } = this.props,
                    { problem: s } = this.state;
                ((0, c.Z)({
                    problem: s,
                    stream: t,
                    feedback: '',
                    streamApplication: e,
                    analyticsData: r,
                    location: 'Stream'
                }),
                    i(),
                    (0, a.ZDy)(async () => {
                        let { default: t } = await n.e('14466').then(n.bind(n, 729328));
                        return (e) =>
                            (0, l.jsx)(
                                t,
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            l = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                })
                                            )),
                                            l.forEach(function (e) {
                                                f(t, e, n[e]);
                                            }));
                                    }
                                    return t;
                                })({ body: d.intl.string(d.t.mMTVnp) }, e)
                            );
                    }));
            }));
    }
}
let g = p;
