n.d(t, { k: () => l }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(481060),
    a = n(959591);
class l extends r.PureComponent {
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e),
            this.setState({
                error: e,
                info: t,
            });
    }
    render() {
        return null != this.state.error
            ? (0, i.jsx)("div", {
                  children: (0, i.jsx)(s.Text, {
                      color: "text-danger",
                      variant: "text-md/normal",
                      className: a.labelSpacing,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "state", {
                error: null,
                info: null,
            });
    }
}
