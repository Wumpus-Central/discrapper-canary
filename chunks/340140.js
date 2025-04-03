n.d(e, { default: () => h }), n(47120);
var r = n(200651),
    l = n(192379),
    s = n(481060),
    a = n(600164),
    i = n(538211),
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
class f extends l.PureComponent {
    render() {
        let { isStreamer: t, transitionState: e, onClose: n } = this.props,
            { problem: l } = this.state;
        return (0, r.jsxs)(s.Y0X, {
            transitionState: e,
            size: s.CgR.SMALL,
            'aria-label': u.NW.string(u.t.qnJ9W1),
            children: [
                (0, r.jsx)(c.Z, {}),
                (0, r.jsxs)(s.xBx, {
                    separator: !1,
                    className: d.modalHeader,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'text-md/semibold',
                            className: b.title,
                            children: u.NW.string(u.t.qnJ9W1)
                        }),
                        (0, r.jsx)(s.olH, {
                            className: b.closeButton,
                            innerClassName: d.modalInnerCloseButton,
                            onClick: n
                        })
                    ]
                }),
                (0, r.jsxs)(s.hzk, {
                    className: b.content,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: u.NW.string(u.t['7vw0h4'])
                        }),
                        (0, r.jsx)(s.xJW, {
                            title: u.NW.string(u.t['6Y1t5O']),
                            children: (0, r.jsx)(s.q4e, {
                                placeholder: u.NW.string(u.t.U0kGk5),
                                options: (0, i.Z)({
                                    isStreamer: t,
                                    isEndStream: !1,
                                    showVibesHoneypot: !1
                                }),
                                onChange: this.handleChanged,
                                value: l,
                                maxVisibleItems: 4
                            })
                        }),
                        (0, r.jsx)('div', { className: d.art })
                    ]
                }),
                (0, r.jsxs)(s.mzw, {
                    className: b.__invalid_footer,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            color: s.zxk.Colors.BRAND,
                            disabled: null == l,
                            onClick: this.handleSubmit,
                            children: u.NW.string(u.t.E48BIS)
                        }),
                        (0, r.jsx)(a.Z, {
                            children: (0, r.jsx)(s.zxk, {
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                size: s.zxk.Sizes.NONE,
                                onClick: n,
                                children: u.NW.string(u.t['ETE/oK'])
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
                let { stream: t, streamApplication: e, analyticsData: l, onClose: a } = this.props,
                    { problem: i } = this.state;
                (0, o.Z)({
                    problem: i,
                    stream: t,
                    feedback: '',
                    streamApplication: e,
                    analyticsData: l,
                    location: 'Stream'
                }),
                    a(),
                    (0, s.ZDy)(async () => {
                        let { default: t } = await n.e('14466').then(n.bind(n, 729328));
                        return (e) =>
                            (0, r.jsx)(
                                t,
                                (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                })
                                            )),
                                            r.forEach(function (e) {
                                                m(t, e, n[e]);
                                            });
                                    }
                                    return t;
                                })({ body: u.NW.string(u.t.mMTVnp) }, e)
                            );
                    });
            });
    }
}
let h = f;
