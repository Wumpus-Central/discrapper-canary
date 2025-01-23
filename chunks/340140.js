e.r(n), e(47120);
var l = e(200651),
    i = e(192379),
    a = e(481060),
    r = e(600164),
    s = e(538211),
    o = e(698066),
    u = e(648159),
    c = e(388032),
    d = e(260775),
    m = e(434204);
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
class g extends i.PureComponent {
    render() {
        let { isStreamer: t, transitionState: n, onClose: e } = this.props,
            { problem: i } = this.state;
        return (0, l.jsxs)(a.ModalRoot, {
            transitionState: n,
            size: a.ModalSize.SMALL,
            'aria-label': c.intl.string(c.t.qnJ9W1),
            children: [
                (0, l.jsx)(u.Z, {}),
                (0, l.jsxs)(a.ModalHeader, {
                    separator: !1,
                    className: d.modalHeader,
                    children: [
                        (0, l.jsx)(a.Heading, {
                            variant: 'text-md/semibold',
                            className: m.title,
                            children: c.intl.string(c.t.qnJ9W1)
                        }),
                        (0, l.jsx)(a.ModalCloseButton, {
                            className: m.closeButton,
                            innerClassName: d.modalInnerCloseButton,
                            onClick: e
                        })
                    ]
                }),
                (0, l.jsxs)(a.ModalContent, {
                    className: m.content,
                    children: [
                        (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t['7vw0h4'])
                        }),
                        (0, l.jsx)(a.FormItem, {
                            title: c.intl.string(c.t['6Y1t5O']),
                            children: (0, l.jsx)(a.SingleSelect, {
                                placeholder: c.intl.string(c.t.U0kGk5),
                                options: (0, s.Z)(t, !1),
                                onChange: this.handleChanged,
                                value: i,
                                maxVisibleItems: 4
                            })
                        }),
                        (0, l.jsx)('div', { className: d.art })
                    ]
                }),
                (0, l.jsxs)(a.ModalFooter, {
                    className: m.__invalid_footer,
                    children: [
                        (0, l.jsx)(a.Button, {
                            color: a.Button.Colors.BRAND,
                            disabled: null == i,
                            onClick: this.handleSubmit,
                            children: c.intl.string(c.t.E48BIS)
                        }),
                        (0, l.jsx)(r.Z, {
                            children: (0, l.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                size: a.Button.Sizes.NONE,
                                onClick: e,
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
            h(this, 'state', { problem: null }),
            h(this, 'handleChanged', (t) => {
                this.setState({ problem: null != t ? t : null });
            }),
            h(this, 'handleSubmit', () => {
                let { stream: t, streamApplication: n, analyticsData: i, onClose: r } = this.props,
                    { problem: s } = this.state;
                (0, o.Z)({
                    problem: s,
                    stream: t,
                    feedback: '',
                    streamApplication: n,
                    analyticsData: i,
                    location: 'Stream'
                }),
                    r(),
                    (0, a.openModalLazy)(async () => {
                        let { default: t } = await e.e('14466').then(e.bind(e, 729328));
                        return (n) =>
                            (0, l.jsx)(t, {
                                body: c.intl.string(c.t.mMTVnp),
                                ...n
                            });
                    });
            });
    }
}
n.default = g;
