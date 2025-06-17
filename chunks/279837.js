n.d(t, { Z: () => u }), n(388685), n(457542);
var s,
    i = n(255367),
    r = n(73800),
    o = n(481060),
    l = n(388032),
    a = n(460268);
function c(e, t, n) {
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
class h extends (s = r.PureComponent) {
    render() {
        let { title: e, actionText: t, children: n, transitionState: s } = this.props,
            { error: c, isLoading: h, value: u } = this.state,
            d =
                r.Children.count(n) > 0
                    ? (0, i.jsx)(o.Zbd, {
                          type: o.Zbd.Types.WARNING,
                          className: a.card,
                          children: (0, i.jsx)(o.Text, {
                              color: 'currentColor',
                              variant: 'text-md/normal',
                              children: n
                          })
                      })
                    : null;
        return (0, i.jsx)(o.Y0X, {
            transitionState: s,
            parentComponent: 'PasswordConfirm',
            children: (0, i.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(o.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            children: e
                        })
                    }),
                    (0, i.jsxs)(o.hzk, {
                        children: [
                            d,
                            (0, i.jsxs)(o.xJW, {
                                title: l.intl.string(l.t['CIGa+/']),
                                className: a.spacing,
                                children: [
                                    (0, i.jsx)(o.oil, {
                                        type: 'password',
                                        autoComplete: 'off',
                                        autoFocus: !0,
                                        value: u,
                                        onChange: this.handlePasswordChange
                                    }),
                                    null != c && '' !== c
                                        ? (0, i.jsxs)(o.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'text-danger',
                                              className: a.error,
                                              children: [' ', c, ' ']
                                          })
                                        : null
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(o.mzw, {
                        children: [
                            (0, i.jsx)(o.zxk, {
                                type: 'submit',
                                disabled: h || 0 === u.length,
                                children: null != t ? t : l.intl.string(l.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(o.zxk, {
                                onClick: this.handleCancel,
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                children: l.intl.string(l.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', {
                value: '',
                error: null,
                isLoading: !1
            }),
            c(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { value: t } = this.state,
                    { handleSubmit: n, onClose: s, onError: i } = this.props;
                this.setState({ isLoading: !0 }),
                    n(t)
                        .then(
                            (e) => s(null != e ? e : void 0),
                            (e) => {
                                null != e.body &&
                                    (null == i || i(e.body),
                                    !this.shouldSkipErrorMsgRender(e.body) &&
                                        (e.body.password
                                            ? this.setState({
                                                  error: e.body.password,
                                                  isLoading: !1
                                              })
                                            : e.body.message &&
                                              this.setState({
                                                  error: e.body.message,
                                                  isLoading: !1
                                              })));
                            }
                        )
                        .finally(() => this.setState({ isLoading: !1 }));
            }),
            c(this, 'shouldSkipErrorMsgRender', (e) => {
                let { skipErrorMsgAbortCode: t } = this.props;
                return null != t && (null == e ? void 0 : e.code) === t;
            }),
            c(this, 'handleCancel', () => {
                let { onClose: e } = this.props;
                e();
            }),
            c(this, 'handlePasswordChange', (e) => {
                let { onPasswordChange: t } = this.props;
                null == t || t(e), this.setState({ value: e });
            });
    }
}
c(h, 'key', () => 'password-confirm-modal');
let u = h;
