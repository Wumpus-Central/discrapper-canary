n.d(e, { default: () => h }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(481060),
    s = n(600164),
    a = n(538211),
    o = n(698066),
    c = n(648159),
    u = n(388032),
    d = n(424698),
    b = n(679335);
function m(t, e, n) {
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
class f extends r.PureComponent {
    render() {
        let { isStreamer: t, transitionState: e, onClose: n } = this.props,
            { problem: r } = this.state;
        return (0, l.jsxs)(i.Y0X, {
            transitionState: e,
            size: i.CgR.SMALL,
            'aria-label': u.intl.string(u.t.qnJ9W1),
            children: [
                (0, l.jsx)(c.Z, {}),
                (0, l.jsxs)(i.xBx, {
                    separator: !1,
                    className: d.modalHeader,
                    children: [
                        (0, l.jsx)(i.X6q, {
                            variant: 'text-md/semibold',
                            className: b.title,
                            children: u.intl.string(u.t.qnJ9W1)
                        }),
                        (0, l.jsx)(i.olH, {
                            className: b.closeButton,
                            innerClassName: d.modalInnerCloseButton,
                            onClick: n
                        })
                    ]
                }),
                (0, l.jsxs)(i.hzk, {
                    className: b.content,
                    children: [
                        (0, l.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            children: u.intl.string(u.t['7vw0h4'])
                        }),
                        (0, l.jsx)(i.xJW, {
                            title: u.intl.string(u.t['6Y1t5O']),
                            children: (0, l.jsx)(i.q4e, {
                                placeholder: u.intl.string(u.t.U0kGk5),
                                options: (0, a.Z)({
                                    isStreamer: t,
                                    isEndStream: !1,
                                    showVibesHoneypot: !1
                                }),
                                onChange: this.handleChanged,
                                value: r,
                                maxVisibleItems: 4
                            })
                        }),
                        (0, l.jsx)('div', { className: d.art })
                    ]
                }),
                (0, l.jsxs)(i.mzw, {
                    className: b.__invalid_footer,
                    children: [
                        (0, l.jsx)(i.zxk, {
                            color: i.zxk.Colors.BRAND,
                            disabled: null == r,
                            onClick: this.handleSubmit,
                            children: u.intl.string(u.t.E48BIS)
                        }),
                        (0, l.jsx)(s.Z, {
                            children: (0, l.jsx)(i.zxk, {
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.PRIMARY,
                                size: i.zxk.Sizes.NONE,
                                onClick: n,
                                children: u.intl.string(u.t['ETE/oK'])
                            })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            m(this, 'state', { problem: null }),
            m(this, 'handleChanged', (t) => {
                this.setState({ problem: null != t ? t : null });
            }),
            m(this, 'handleSubmit', () => {
                let { stream: t, streamApplication: e, analyticsData: r, onClose: s } = this.props,
                    { problem: a } = this.state;
                (0, o.Z)({
                    problem: a,
                    stream: t,
                    feedback: '',
                    streamApplication: e,
                    analyticsData: r,
                    location: 'Stream'
                }),
                    s(),
                    (0, i.ZDy)(async () => {
                        let { default: t } = await n.e('14466').then(n.bind(n, 729328));
                        return (e) =>
                            (0, l.jsx)(
                                t,
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            l = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                })
                                            )),
                                            l.forEach(function (e) {
                                                m(t, e, n[e]);
                                            });
                                    }
                                    return t;
                                })({ body: u.intl.string(u.t.mMTVnp) }, e)
                            );
                    });
            });
    }
}
let h = f;
