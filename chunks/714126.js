n.d(e, { W: () => o });
var t = n(477900),
    s = n(582128),
    c = n(834730),
    i = n(175795);
class o extends s.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(r, e) {
        console.error("Error rendering component (LocalErrorBoundary): ", r), this.setState({ error: r, info: e });
    }
    render() {
        return null != this.state.error
            ? (0, t.jsx)("div", {
                  children: (0, t.jsx)(c.E, {
                      color: "text-feedback-critical",
                      variant: "text-md/normal",
                      className: i.cW,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
}
