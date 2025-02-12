e.d(n, { default: () => g }), e(47120);
var l = e(200651),
    i = e(192379),
    s = e(481060),
    a = e(600164),
    r = e(538211),
    o = e(698066),
    c = e(648159),
    d = e(388032),
    u = e(110701),
    m = e(799092);
function h(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
        t
    );
}
class b extends i.PureComponent {
    render() {
        let { isStreamer: t, transitionState: n, onClose: e } = this.props,
            { problem: i } = this.state;
        return (0, l.jsxs)(s.Y0X, {
            transitionState: n,
            size: s.CgR.SMALL,
            'aria-label': d.intl.string(d.t.qnJ9W1),
            children: [
                (0, l.jsx)(c.Z, {}),
                (0, l.jsxs)(s.xBx, {
                    separator: !1,
                    className: u.modalHeader,
                    children: [
                        (0, l.jsx)(s.X6q, {
                            variant: 'text-md/semibold',
                            className: m.title,
                            children: d.intl.string(d.t.qnJ9W1)
                        }),
                        (0, l.jsx)(s.olH, {
                            className: m.closeButton,
                            innerClassName: u.modalInnerCloseButton,
                            onClick: e
                        })
                    ]
                }),
                (0, l.jsxs)(s.hzk, {
                    className: m.content,
                    children: [
                        (0, l.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t['7vw0h4'])
                        }),
                        (0, l.jsx)(s.xJW, {
                            title: d.intl.string(d.t['6Y1t5O']),
                            children: (0, l.jsx)(s.q4e, {
                                placeholder: d.intl.string(d.t.U0kGk5),
                                options: (0, r.Z)(t, !1),
                                onChange: this.handleChanged,
                                value: i,
                                maxVisibleItems: 4
                            })
                        }),
                        (0, l.jsx)('div', { className: u.art })
                    ]
                }),
                (0, l.jsxs)(s.mzw, {
                    className: m.__invalid_footer,
                    children: [
                        (0, l.jsx)(s.zxk, {
                            color: s.zxk.Colors.BRAND,
                            disabled: null == i,
                            onClick: this.handleSubmit,
                            children: d.intl.string(d.t.E48BIS)
                        }),
                        (0, l.jsx)(a.Z, {
                            children: (0, l.jsx)(s.zxk, {
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                size: s.zxk.Sizes.NONE,
                                onClick: e,
                                children: d.intl.string(d.t['ETE/oK'])
                            })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            h(this, 'state', { problem: null }),
            h(this, 'handleChanged', (t) => {
                this.setState({ problem: null != t ? t : null });
            }),
            h(this, 'handleSubmit', () => {
                let { stream: t, streamApplication: n, analyticsData: i, onClose: a } = this.props,
                    { problem: r } = this.state;
                (0, o.Z)({
                    problem: r,
                    stream: t,
                    feedback: '',
                    streamApplication: n,
                    analyticsData: i,
                    location: 'Stream'
                }),
                    a(),
                    (0, s.ZDy)(async () => {
                        let { default: t } = await e.e('14466').then(e.bind(e, 729328));
                        return (n) =>
                            (0, l.jsx)(t, {
                                body: d.intl.string(d.t.mMTVnp),
                                ...n
                            });
                    });
            });
    }
}
let g = b;
