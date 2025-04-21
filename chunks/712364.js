n.d(t, { Z: () => _ }), n(388685);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(388032),
    u = n(573855);
function d(e, t, n) {
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
class f extends (r = a.PureComponent) {
    render() {
        var e;
        let { title: t, actionText: n, children: r, error: o, isLoading: d, maxLength: f, transitionState: _, helpMessage: p, retryPrompt: h, retrySuccessMessage: m } = this.props,
            { code: g, errorMessage: E, retrySuccess: b } = this.state,
            y =
                a.Children.count(r) > 0
                    ? (0, i.jsx)(l.Zbd, {
                          type: l.Zbd.Types.WARNING,
                          className: u.card,
                          children: (0, i.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              children: r
                          })
                      })
                    : null,
            v =
                null != h
                    ? (0, i.jsxs)(l.Text, {
                          className: s()(u.__invalid_submitText, u.spacing),
                          variant: 'text-sm/normal',
                          children: [
                              (0, i.jsx)('br', {}),
                              (0, i.jsx)(l.P3F, {
                                  className: s()(u.spacing, u.__invalid_link),
                                  onClick: this.handleRetry,
                                  children: (0, i.jsx)(l.eee, { children: h })
                              })
                          ]
                      })
                    : null,
            O = b
                ? (0, i.jsx)(l.Zbd, {
                      type: l.Zbd.Types.SUCCESS,
                      className: u.card,
                      children: (0, i.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: m
                      })
                  })
                : null;
        return (0, i.jsx)(l.Y0X, {
            transitionState: _,
            children: (0, i.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(l.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            children: t
                        })
                    }),
                    (0, i.jsxs)(l.hzk, {
                        children: [
                            null != p
                                ? (0, i.jsx)(l.Text, {
                                      color: 'text-normal',
                                      variant: 'text-md/normal',
                                      className: u.spacing,
                                      children: p
                                  })
                                : null,
                            y,
                            O,
                            (0, i.jsxs)(l.xJW, {
                                title: this.getLabelText(),
                                className: u.spacing,
                                children: [
                                    (0, i.jsx)(l.oil, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null != (e = this.getPlaceholder()) ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: 'one-time-code',
                                        autoFocus: !0
                                    }),
                                    this.errorPresent()
                                        ? (0, i.jsx)(l.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: u.error,
                                              children: null != o ? o : E
                                          })
                                        : null,
                                    v
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.mzw, {
                        children: [
                            (0, i.jsx)(l.zxk, {
                                type: 'submit',
                                disabled: d || 0 === g.length,
                                children: null != n ? n : c.intl.string(c.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(l.zxk, {
                                onClick: this.handleCancel,
                                disabled: d,
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.PRIMARY,
                                children: c.intl.string(c.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, '_input', void 0),
            d(this, 'state', {
                code: '',
                errorMessage: '',
                retrySuccess: !1
            }),
            d(this, 'setRef', (e) => {
                this._input = e;
            }),
            d(this, 'getLabelText', () => {
                var e;
                return null != (e = this.props.label) ? e : this.props.disallowBackupCodes ? c.intl.string(c.t.HZPBOT) : c.intl.string(c.t['+NQopK']);
            }),
            d(this, 'getSupportedCodeTypes', () => (this.props.disallowBackupCodes ? c.intl.string(c.t.tARzgo) : c.intl.string(c.t.yO4lAA))),
            d(this, 'getPlaceholder', () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null != (e = this.props.placeholder) ? e : this.getSupportedCodeTypes();
            }),
            d(this, 'errorPresent', () => (null != this.props.error && '' !== this.props.error) || (null != this.state.errorMessage && '' !== this.state.errorMessage)),
            d(this, 'handleRetry', () => {
                let { onRetry: e } = this.props;
                null == e || e().then(() => this.setState({ retrySuccess: !0 }));
            }),
            d(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { handleSubmit: t, onError: n } = this.props;
                t(this.state.code).catch((e) => {
                    null != e.body && (null == n || n(e.body), e.body.message && this.setState({ errorMessage: e.body.message }));
                });
            }),
            d(this, 'handleCancel', () => {
                let { onClose: e, handleEarlyClose: t } = this.props;
                e(), null == t || t();
            }),
            d(this, 'handleCodeChange', (e) => {
                this.setState({ code: e });
            });
    }
}
d(f, 'defaultProps', {
    btnClass: '',
    isLoading: !1,
    disallowBackupCodes: !1,
    error: null,
    forceNoPlaceholder: !1
});
let _ = f;
