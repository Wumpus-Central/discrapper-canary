var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(388032),
    f = r(859540);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class h extends (i = s.PureComponent) {
    render() {
        var e;
        let { title: n, actionText: r, children: i, error: a, isLoading: l, maxLength: p, transitionState: h, helpMessage: _, retryPrompt: m, retrySuccessMessage: g } = this.props,
            { code: E, errorMessage: v, retrySuccess: y } = this.state,
            b =
                s.Children.count(i) > 0
                    ? (0, o.jsx)(c.Card, {
                          type: c.Card.Types.WARNING,
                          className: f.card,
                          children: (0, o.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              children: i
                          })
                      })
                    : null,
            I =
                null != m
                    ? (0, o.jsxs)(c.Text, {
                          className: u()(f.__invalid_submitText, f.spacing),
                          variant: 'text-sm/normal',
                          children: [
                              (0, o.jsx)('br', {}),
                              (0, o.jsx)(c.Clickable, {
                                  className: u()(f.spacing, f.__invalid_link),
                                  onClick: this.handleRetry,
                                  children: (0, o.jsx)(c.Anchor, { children: m })
                              })
                          ]
                      })
                    : null,
            T = y
                ? (0, o.jsx)(c.Card, {
                      type: c.Card.Types.SUCCESS,
                      className: f.card,
                      children: (0, o.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          children: g
                      })
                  })
                : null;
        return (0, o.jsx)(c.ModalRoot, {
            transitionState: h,
            children: (0, o.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, o.jsx)(c.ModalHeader, {
                        separator: !1,
                        children: (0, o.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            children: n
                        })
                    }),
                    (0, o.jsxs)(c.ModalContent, {
                        children: [
                            null != _
                                ? (0, o.jsx)(c.Text, {
                                      color: 'text-normal',
                                      variant: 'text-md/normal',
                                      className: f.spacing,
                                      children: _
                                  })
                                : null,
                            b,
                            T,
                            (0, o.jsxs)(c.FormItem, {
                                title: this.getLabelText(),
                                className: f.spacing,
                                children: [
                                    (0, o.jsx)(c.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != p ? p : 10,
                                        value: E,
                                        autoComplete: 'one-time-code',
                                        autoFocus: !0
                                    }),
                                    this.errorPresent()
                                        ? (0, o.jsx)(c.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: f.error,
                                              children: null != a ? a : v
                                          })
                                        : null,
                                    I
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(c.ModalFooter, {
                        children: [
                            (0, o.jsx)(c.Button, {
                                type: 'submit',
                                disabled: l || 0 === E.length,
                                children: null != r ? r : d.intl.string(d.t['cY+Ooa'])
                            }),
                            (0, o.jsx)(c.Button, {
                                onClick: this.handleCancel,
                                disabled: l,
                                look: c.Button.Looks.LINK,
                                color: c.Button.Colors.PRIMARY,
                                children: d.intl.string(d.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, '_input', void 0),
            p(this, 'state', {
                code: '',
                errorMessage: '',
                retrySuccess: !1
            }),
            p(this, 'setRef', (e) => {
                this._input = e;
            }),
            p(this, 'getLabelText', () => {
                var e;
                return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? d.intl.string(d.t.HZPBOT) : d.intl.string(d.t['+NQopK']);
            }),
            p(this, 'getSupportedCodeTypes', () => (this.props.disallowBackupCodes ? d.intl.string(d.t.tARzgo) : d.intl.string(d.t.yO4lAA))),
            p(this, 'getPlaceholder', () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes();
            }),
            p(this, 'errorPresent', () => (null != this.props.error && '' !== this.props.error) || (null != this.state.errorMessage && '' !== this.state.errorMessage)),
            p(this, 'handleRetry', () => {
                let { onRetry: e } = this.props;
                null == e || e().then(() => this.setState({ retrySuccess: !0 }));
            }),
            p(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { handleSubmit: n, onError: r } = this.props;
                n(this.state.code).catch((e) => {
                    if (null != e.body) null == r || r(e.body), e.body.message && this.setState({ errorMessage: e.body.message });
                });
            }),
            p(this, 'handleCancel', () => {
                let { onClose: e, handleEarlyClose: n } = this.props;
                e(), null == n || n();
            }),
            p(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            });
    }
}
p(h, 'defaultProps', {
    btnClass: '',
    isLoading: !1,
    disallowBackupCodes: !1,
    error: null,
    forceNoPlaceholder: !1
}),
    (n.Z = h);
