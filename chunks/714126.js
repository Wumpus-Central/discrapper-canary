n.d(t, { W: () => l }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(798233);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class l extends i.PureComponent {
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e),
            this.setState({
                error: e,
                info: t,
            });
    }
    render() {
        return null != this.state.error
            ? (0, r.jsx)("div", {
                  children: (0, r.jsx)(a.Text, {
                      color: "text-feedback-critical",
                      variant: "text-md/normal",
                      className: s.cW,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e),
            o(this, "state", {
                error: null,
                info: null,
            });
    }
}
