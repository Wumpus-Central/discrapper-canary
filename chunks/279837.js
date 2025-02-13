s.d(t, { default: () => c }), s(47120), s(773603);
var n,
    i = s(200651),
    l = s(192379),
    o = s(481060),
    a = s(388032),
    r = s(204905);
function h(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class d extends (n = l.PureComponent) {
    render() {
        let { title: e, actionText: t, children: s, transitionState: n } = this.props,
            { error: h, isLoading: d, value: c } = this.state,
            u =
                l.Children.count(s) > 0
                    ? (0, i.jsx)(o.Zbd, {
                          type: o.Zbd.Types.WARNING,
                          className: r.card,
                          children: (0, i.jsx)(o.Text, {
                              className: r.warning,
                              variant: 'text-md/normal',
                              children: s
                          })
                      })
                    : null;
        return (0, i.jsx)(o.Y0X, {
            transitionState: n,
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
                                title: a.intl.string(a.t['CIGa+/']),
                                className: r.spacing,
                                children: [
                                    (0, i.jsx)(o.oil, {
                                        type: 'password',
                                        autoComplete: 'off',
                                        autoFocus: !0,
                                        value: c,
                                        onChange: this.handlePasswordChange
                                    }),
                                    null != h && '' !== h
                                        ? (0, i.jsxs)(o.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'text-danger',
                                              className: r.error,
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
                                disabled: d || 0 === c.length,
                                children: null != t ? t : a.intl.string(a.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(o.zxk, {
                                onClick: this.handleCancel,
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                children: a.intl.string(a.t['ETE/oK'])
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
                    { handleSubmit: s, onClose: n, onError: i } = this.props;
                this.setState({ isLoading: !0 }),
                    s(t)
                        .then(
                            (e) => n(null != e ? e : void 0),
                            (e) => {
                                if (null != e.body)
                                    null == i || i(e.body),
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
                                                  }));
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
h(d, 'key', () => 'password-confirm-modal');
let c = d;
