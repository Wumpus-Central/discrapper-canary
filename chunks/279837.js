n.r(t), n(47120), n(773603);
var s,
    i = n(200651),
    o = n(192379),
    l = n(481060),
    r = n(388032),
    a = n(943873);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class c extends (s = o.PureComponent) {
    render() {
        let { title: e, actionText: t, children: n, transitionState: s } = this.props,
            { error: h, isLoading: c, value: u } = this.state,
            d =
                o.Children.count(n) > 0
                    ? (0, i.jsx)(l.Card, {
                          type: l.Card.Types.WARNING,
                          className: a.card,
                          children: (0, i.jsx)(l.Text, {
                              className: a.warning,
                              variant: 'text-md/normal',
                              children: n
                          })
                      })
                    : null;
        return (0, i.jsx)(l.ModalRoot, {
            transitionState: s,
            children: (0, i.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(l.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(l.Heading, {
                            variant: 'heading-lg/semibold',
                            children: e
                        })
                    }),
                    (0, i.jsxs)(l.ModalContent, {
                        children: [
                            d,
                            (0, i.jsxs)(l.FormItem, {
                                title: r.intl.string(r.t['CIGa+/']),
                                className: a.spacing,
                                children: [
                                    (0, i.jsx)(l.TextInput, {
                                        type: 'password',
                                        autoComplete: 'off',
                                        autoFocus: !0,
                                        value: u,
                                        onChange: this.handlePasswordChange
                                    }),
                                    null != h && '' !== h
                                        ? (0, i.jsxs)(l.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'text-danger',
                                              className: a.error,
                                              children: [' ', h, ' ']
                                          })
                                        : null
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.ModalFooter, {
                        children: [
                            (0, i.jsx)(l.Button, {
                                type: 'submit',
                                disabled: c || 0 === u.length,
                                children: null != t ? t : r.intl.string(r.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(l.Button, {
                                onClick: this.handleCancel,
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                children: r.intl.string(r.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', {
                value: '',
                error: null,
                isLoading: !1
            }),
            h(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { value: t } = this.state,
                    { handleSubmit: n, onClose: s, onError: i } = this.props;
                this.setState({ isLoading: !0 }),
                    n(t)
                        .then(
                            (e) => s(null != e ? e : void 0),
                            (e) => {
                                if (null == e.body) return;
                                if ((null == i || i(e.body), !this.shouldSkipErrorMsgRender(e.body)))
                                    e.body.password
                                        ? this.setState({
                                              error: e.body.password,
                                              isLoading: !1
                                          })
                                        : e.body.message &&
                                          this.setState({
                                              error: e.body.message,
                                              isLoading: !1
                                          });
                            }
                        )
                        .finally(() => this.setState({ isLoading: !1 }));
            }),
            h(this, 'shouldSkipErrorMsgRender', (e) => {
                let { skipErrorMsgAbortCode: t } = this.props;
                return null != t && (null == e ? void 0 : e.code) === t;
            }),
            h(this, 'handleCancel', () => {
                let { onClose: e } = this.props;
                e();
            }),
            h(this, 'handlePasswordChange', (e) => {
                let { onPasswordChange: t } = this.props;
                null == t || t(e), this.setState({ value: e });
            });
    }
}
h(c, 'key', () => 'password-confirm-modal'), (t.default = c);
