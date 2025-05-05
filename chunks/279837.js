n.d(t, { Z: () => d }), n(388685), n(457542);
var s,
    i = n(255367),
    l = n(73800),
    r = n(481060),
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
class c extends (s = l.PureComponent) {
    render() {
        let { title: e, actionText: t, children: n, transitionState: s } = this.props,
            { error: h, isLoading: c, value: d } = this.state,
            u =
                l.Children.count(n) > 0
                    ? (0, i.jsx)(r.Zbd, {
                          type: r.Zbd.Types.WARNING,
                          className: a.card,
                          children: (0, i.jsx)(r.Text, {
                              className: a.warning,
                              variant: 'text-md/normal',
                              children: n
                          })
                      })
                    : null;
        return (0, i.jsx)(r.Y0X, {
            transitionState: s,
            children: (0, i.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(r.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            children: e
                        })
                    }),
                    (0, i.jsxs)(r.hzk, {
                        children: [
                            u,
                            (0, i.jsxs)(r.xJW, {
                                title: o.intl.string(o.t['CIGa+/']),
                                className: a.spacing,
                                children: [
                                    (0, i.jsx)(r.oil, {
                                        type: 'password',
                                        autoComplete: 'off',
                                        autoFocus: !0,
                                        value: d,
                                        onChange: this.handlePasswordChange
                                    }),
                                    null != h && '' !== h
                                        ? (0, i.jsxs)(r.Text, {
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
                    (0, i.jsxs)(r.mzw, {
                        children: [
                            (0, i.jsx)(r.zxk, {
                                type: 'submit',
                                disabled: c || 0 === d.length,
                                children: null != t ? t : o.intl.string(o.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(r.zxk, {
                                onClick: this.handleCancel,
                                look: r.zxk.Looks.LINK,
                                color: r.zxk.Colors.PRIMARY,
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
