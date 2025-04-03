n.d(t, { k: () => l }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(517791);
class l extends i.PureComponent {
    componentDidCatch(e, t) {
        console.error('Error rendering component (LocalErrorBoundary): ', e),
            this.setState({
                error: e,
                info: t
            });
    }
    render() {
        return null != this.state.error
            ? (0, r.jsx)('div', {
                  children: (0, r.jsx)(s.Text, {
                      color: 'text-danger',
                      variant: 'text-md/normal',
                      className: a.labelSpacing,
                      children: 'Error rendering component. Check console for more information on the error.'
                  })
              })
            : this.props.children;
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (n = {
                error: null,
                info: null
            }),
            (t = 'state') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
