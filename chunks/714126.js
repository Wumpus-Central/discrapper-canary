n.d(e, { W: () => i });
var s = n(477900),
    t = n(582128),
    c = n(834730),
    o = n(175795);
class i extends t.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(r, e) {
        (console.error("Error rendering component (LocalErrorBoundary): ", r), this.setState({ error: r, info: e }));
    }
    render() {
        return null != this.state.error
            ? (0, s.jsx)("div", {
                  children: (0, s.jsx)(c.E, {
                      color: "text-feedback-critical",
                      variant: "body-md/normal",
                      className: o.cW,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
}
