n.d(t, { Z: () => _ }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(388032),
    c = n(859540);
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
class f extends (i = a.PureComponent) {
    render() {
        var e;
        let { title: t, actionText: n, children: i, error: s, isLoading: d, maxLength: f, transitionState: _, helpMessage: p, retryPrompt: h, retrySuccessMessage: m } = this.props,
            { code: g, errorMessage: E, retrySuccess: v } = this.state,
            y =
                a.Children.count(i) > 0
                    ? (0, r.jsx)(l.Zbd, {
                          type: l.Zbd.Types.WARNING,
                          className: c.card,
                          children: (0, r.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              children: i
                          })
                      })
                    : null,
            I =
                null != h
                    ? (0, r.jsxs)(l.Text, {
                          className: o()(c.__invalid_submitText, c.spacing),
                          variant: 'text-sm/normal',
                          children: [
                              (0, r.jsx)('br', {}),
                              (0, r.jsx)(l.P3F, {
                                  className: o()(c.spacing, c.__invalid_link),
                                  onClick: this.handleRetry,
                                  children: (0, r.jsx)(l.eee, { children: h })
                              })
                          ]
                      })
                    : null,
            T = v
                ? (0, r.jsx)(l.Zbd, {
                      type: l.Zbd.Types.SUCCESS,
                      className: c.card,
                      children: (0, r.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          children: m
                      })
                  })
                : null;
        return (0, r.jsx)(l.Y0X, {
            transitionState: _,
            children: (0, r.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, r.jsx)(l.xBx, {
                        separator: !1,
                        children: (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            children: t
                        })
                    }),
                    (0, r.jsxs)(l.hzk, {
                        children: [
                            null != p
                                ? (0, r.jsx)(l.Text, {
                                      color: 'text-normal',
                                      variant: 'text-md/normal',
                                      className: c.spacing,
                                      children: p
                                  })
                                : null,
                            y,
                            T,
                            (0, r.jsxs)(l.xJW, {
                                title: this.getLabelText(),
                                className: c.spacing,
                                children: [
                                    (0, r.jsx)(l.oil, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: g,
                                        autoComplete: 'one-time-code',
                                        autoFocus: !0
                                    }),
                                    this.errorPresent()
                                        ? (0, r.jsx)(l.Text, {
                                              color: 'text-danger',
                                              variant: 'text-xs/normal',
                                              className: c.error,
                                              children: null != s ? s : E
                                          })
                                        : null,
                                    I
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(l.mzw, {
                        children: [
                            (0, r.jsx)(l.zxk, {
                                type: 'submit',
                                disabled: d || 0 === g.length,
                                children: null != n ? n : u.intl.string(u.t['cY+Ooa'])
                            }),
                            (0, r.jsx)(l.zxk, {
                                onClick: this.handleCancel,
                                disabled: d,
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.PRIMARY,
                                children: u.intl.string(u.t['ETE/oK'])
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
                return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.intl.string(u.t.HZPBOT) : u.intl.string(u.t['+NQopK']);
            }),
            d(this, 'getSupportedCodeTypes', () => (this.props.disallowBackupCodes ? u.intl.string(u.t.tARzgo) : u.intl.string(u.t.yO4lAA))),
            d(this, 'getPlaceholder', () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes();
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
