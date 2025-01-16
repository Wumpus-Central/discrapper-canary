l.r(n), l(47120);
var e = l(200651),
    i = l(192379),
    r = l(481060),
    s = l(600164),
    a = l(538211),
    o = l(698066),
    u = l(648159),
    c = l(388032),
    d = l(260775),
    h = l(434204);
function g(t, n, l) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = l),
        t
    );
}
class m extends i.PureComponent {
    render() {
        let { isStreamer: t, transitionState: n, onClose: l } = this.props,
            { problem: i } = this.state;
        return (0, e.jsxs)(r.ModalRoot, {
            transitionState: n,
            size: r.ModalSize.SMALL,
            'aria-label': c.intl.string(c.t.qnJ9W1),
            children: [
                (0, e.jsx)(u.Z, {}),
                (0, e.jsxs)(r.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, e.jsx)(r.ModalCloseButton, {
                            className: h.closeButton,
                            onClick: l
                        }),
                        (0, e.jsx)(r.FormTitle, {
                            tag: 'h2',
                            className: h.title,
                            children: c.intl.string(c.t.qnJ9W1)
                        })
                    ]
                }),
                (0, e.jsxs)(r.ModalContent, {
                    className: h.content,
                    children: [
                        (0, e.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t['7vw0h4'])
                        }),
                        (0, e.jsx)(r.FormItem, {
                            title: c.intl.string(c.t['6Y1t5O']),
                            children: (0, e.jsx)(r.SingleSelect, {
                                placeholder: c.intl.string(c.t.U0kGk5),
                                options: (0, a.Z)(t, !1),
                                onChange: this.handleChanged,
                                value: i,
                                maxVisibleItems: 4
                            })
                        }),
                        (0, e.jsx)('div', { className: d.art })
                    ]
                }),
                (0, e.jsxs)(r.ModalFooter, {
                    className: h.__invalid_footer,
                    children: [
                        (0, e.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            disabled: null == i,
                            onClick: this.handleSubmit,
                            children: c.intl.string(c.t.E48BIS)
                        }),
                        (0, e.jsx)(s.Z, {
                            children: (0, e.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                size: r.Button.Sizes.NONE,
                                onClick: l,
                                children: c.intl.string(c.t['ETE/oK'])
                            })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            g(this, 'state', { problem: null }),
            g(this, 'handleChanged', (t) => {
                this.setState({ problem: null != t ? t : null });
            }),
            g(this, 'handleSubmit', () => {
                let { stream: t, streamApplication: n, analyticsData: i, onClose: s } = this.props,
                    { problem: a } = this.state;
                (0, o.Z)({
                    problem: a,
                    stream: t,
                    feedback: '',
                    streamApplication: n,
                    analyticsData: i,
                    location: 'Stream'
                }),
                    s(),
                    (0, r.openModalLazy)(async () => {
                        let { default: t } = await l.e('14466').then(l.bind(l, 729328));
                        return (n) =>
                            (0, e.jsx)(t, {
                                body: c.intl.string(c.t.mMTVnp),
                                ...n
                            });
                    });
            });
    }
}
n.default = m;
