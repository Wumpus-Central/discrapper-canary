n.d(t, {
    k: function () {
        return l;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(19246);
class l extends r.PureComponent {
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
                  children: (0, i.jsx)(s.Text, {
                      color: 'text-danger',
                      variant: 'text-md/normal',
                      className: a.labelSpacing,
                      children: 'Error rendering component. Check console for more information on the error.'
                  })
              })
            : this.props.children;
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (i = {
                error: null,
                info: null
            }),
            (n = 'state') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
