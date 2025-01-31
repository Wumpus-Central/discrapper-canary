n.d(t, { k: () => a }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(574792);
class a extends s.PureComponent {
    componentDidCatch(e, t) {
        console.error('Error rendering component (LocalErrorBoundary): ', e),
            this.setState({
                error: e,
                info: t
            });
    }
    render() {
        return null != this.state.error
            ? (0, i.jsx)('div', {
                  children: (0, i.jsx)(r.Text, {
                      color: 'text-danger',
                      variant: 'text-md/normal',
                      className: l.labelSpacing,
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
