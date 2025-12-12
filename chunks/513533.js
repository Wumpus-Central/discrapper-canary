n.d(t, { k: () => l }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(481060),
    a = n(534924);
function s(e, t, n) {
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
                  children: (0, r.jsx)(o.Text, {
                      color: "text-feedback-critical",
                      variant: "text-md/normal",
                      className: a.labelSpacing,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e),
            s(this, "state", {
                error: null,
                info: null,
            });
    }
}
