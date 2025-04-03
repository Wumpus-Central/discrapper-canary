n.d(t, { default: () => d }), n(47120), n(773603);
var s,
    i = n(200651),
    r = n(192379),
    o = n(481060),
    l = n(388032),
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
                    ? (0, i.jsx)(o.Zbd, {
                          type: o.Zbd.Types.WARNING,
                          className: a.card,
                          children: (0, i.jsx)(o.Text, {
                              className: a.warning,
                              variant: 'text-md/normal',
                              children: n
                          })
                      })
                    : null;
        return (0, i.jsx)(o.Y0X, {
            transitionState: s,
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
                            u,
                            (0, i.jsxs)(o.xJW, {
                                title: l.NW.string(l.t['CIGa+/']),
                                className: a.spacing,
                                children: [
                                    (0, i.jsx)(o.oil, {
                                        type: 'password',
                                        autoComplete: 'off',
                                        autoFocus: !0,
                                        value: d,
                                        onChange: this.handlePasswordChange
                                    }),
                                    null != h && '' !== h
                                        ? (0, i.jsxs)(o.Text, {
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
                    (0, i.jsxs)(o.mzw, {
                        children: [
                            (0, i.jsx)(o.zxk, {
                                type: 'submit',
                                disabled: c || 0 === d.length,
                                children: null != t ? t : l.NW.string(l.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(o.zxk, {
                                onClick: this.handleCancel,
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                children: l.NW.string(l.t['ETE/oK'])
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
