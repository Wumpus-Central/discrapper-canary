var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(388032),
    f = r(859540);
function _(e, n, r) {
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
class h extends (i = o.PureComponent) {
    render() {
        var e;
        let { title: n, actionText: r, children: i, error: a, isLoading: l, maxLength: _, transitionState: h, helpMessage: p, retryPrompt: m, retrySuccessMessage: g } = this.props,
            { code: E, errorMessage: v, retrySuccess: I } = this.state,
            T =
                o.Children.count(i) > 0
                    ? (0, s.jsx)(c.Card, {
                          type: c.Card.Types.WARNING,
                          className: f.card,
                          children: (0, s.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              children: i
                          })
                      })
                    : null,
            b =
                null != m
                    ? (0, s.jsxs)(c.Text, {
                          className: u()(f.__invalid_submitText, f.spacing),
                          variant: 'text-sm/normal',
                          children: [
                              (0, s.jsx)('br', {}),
                              (0, s.jsx)(c.Clickable, {
                                  className: u()(f.spacing, f.__invalid_link),
                                  onClick: this.handleRetry,
                                  children: (0, s.jsx)(c.Anchor, { children: m })
                              })
                          ]
                      })
                    : null,
            y = I
                ? (0, s.jsx)(c.Card, {
                      type: c.Card.Types.SUCCESS,
                      className: f.card,
                      children: (0, s.jsx)(c.Text, {
                          variant: 'text-md/normal',
                          children: g
                      })
                  })
                : null;
        return (0, s.jsx)(c.ModalRoot, {
            transitionState: h,
            children: (0, s.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, s.jsx)(c.ModalHeader, {
                        separator: !1,
                        children: (0, s.jsx)(c.Heading, {
                            variant: 'heading-lg/semibold',
                            children: n
                        })
                    }),
                    (0, s.jsxs)(c.ModalContent, {
                        children: [
                            null != p
                                ? (0, s.jsx)(c.Text, {
                                      color: 'text-normal',
                                      variant: 'text-md/normal',
                                      className: f.spacing,
                                      children: p
                                  })
                                : null,
                            T,
                            y,
                            (0, s.jsxs)(c.FormItem, {
                                title: this.getLabelText(),
                                className: f.spacing,
                                children: [
                                    (0, s.jsx)(c.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: E,
                                        autoComplete: 'one-time-code',
                                        autoFocus: !0
                                    }),
                                    this.errorPresent()
                                        ? (0, s.jsx)(c.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: f.error,
                                              children: null != a ? a : v
                                          })
                                        : null,
                                    b
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)(c.ModalFooter, {
                        children: [
                            (0, s.jsx)(c.Button, {
                                type: 'submit',
                                disabled: l || 0 === E.length,
                                children: null != r ? r : d.intl.string(d.t['cY+Ooa'])
                            }),
                            (0, s.jsx)(c.Button, {
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
            _(this, '_input', void 0),
            _(this, 'state', {
                code: '',
                errorMessage: '',
                retrySuccess: !1
            }),
            _(this, 'setRef', (e) => {
                this._input = e;
            }),
            _(this, 'getLabelText', () => {
                var e;
                return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? d.intl.string(d.t.HZPBOT) : d.intl.string(d.t['+NQopK']);
            }),
            _(this, 'getSupportedCodeTypes', () => (this.props.disallowBackupCodes ? d.intl.string(d.t.tARzgo) : d.intl.string(d.t.yO4lAA))),
            _(this, 'getPlaceholder', () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes();
            }),
            _(this, 'errorPresent', () => (null != this.props.error && '' !== this.props.error) || (null != this.state.errorMessage && '' !== this.state.errorMessage)),
            _(this, 'handleRetry', () => {
                let { onRetry: e } = this.props;
                null == e || e().then(() => this.setState({ retrySuccess: !0 }));
            }),
            _(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { handleSubmit: n, onError: r } = this.props;
                n(this.state.code).catch((e) => {
                    if (null != e.body) null == r || r(e.body), e.body.message && this.setState({ errorMessage: e.body.message });
                });
            }),
            _(this, 'handleCancel', () => {
                let { onClose: e, handleEarlyClose: n } = this.props;
                e(), null == n || n();
            }),
            _(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            });
    }
}
_(h, 'defaultProps', {
    btnClass: '',
    isLoading: !1,
    disallowBackupCodes: !1,
    error: null,
    forceNoPlaceholder: !1
}),
    (n.Z = h);
