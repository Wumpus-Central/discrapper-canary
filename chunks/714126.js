l.d(t, { W: () => o });
var a = l(627968),
    n = l(64700),
    r = l(834730),
    i = l(723680);
class o extends n.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e), this.setState({ error: e, info: t });
    }
    render() {
        return null != this.state.error
            ? (0, a.jsx)("div", {
                  children: (0, a.jsx)(r.E, {
                      color: "text-feedback-critical",
                      variant: "text-md/normal",
                      className: i.cW,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
}
