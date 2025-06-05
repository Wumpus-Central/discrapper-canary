n.d(t, { Z: () => d }), n(388685), n(457542);
var s,
    i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(388032),
    a = n(460268);
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
class c extends (s = r.PureComponent) {
    render() {
        let { title: e, actionText: t, children: n, transitionState: s } = this.props,
            { error: h, isLoading: c, value: d } = this.state,
            u =
                r.Children.count(n) > 0
                    ? (0, i.jsx)(l.Zbd, {
                          type: l.Zbd.Types.WARNING,
                          className: a.card,
                          children: (0, i.jsx)(l.Text, {
                              className: a.warning,
                              variant: 'text-md/normal',
                              children: n
                          })
                      })
                    : null;
        return (0, i.jsx)(l.Y0X, {
            transitionState: s,
            parentComponent: 'PasswordConfirm',
            children: (0, i.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(l.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            children: e
                        })
                    }),
                    (0, i.jsxs)(l.hzk, {
                        children: [
                            u,
                            (0, i.jsxs)(l.xJW, {
                                title: o.intl.string(o.t['CIGa+/']),
                                className: a.spacing,
                                children: [
                                    (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        autoComplete: 'off',
                                        autoFocus: !0,
                                        value: d,
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
                    (0, i.jsxs)(l.mzw, {
                        children: [
                            (0, i.jsx)(l.zxk, {
                                type: 'submit',
                                disabled: c || 0 === d.length,
                                children: null != t ? t : o.intl.string(o.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(l.zxk, {
                                onClick: this.handleCancel,
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.PRIMARY,
                                children: o.intl.string(o.t['ETE/oK'])
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
h(c, 'key', () => 'password-confirm-modal');
let d = c;
