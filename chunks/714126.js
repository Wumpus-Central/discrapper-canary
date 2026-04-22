"use strict";
a.d(t, { W: () => s });
var r = a(627968),
    l = a(64700),
    n = a(834730),
    i = a(723680);
class s extends l.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e), this.setState({ error: e, info: t });
    }
    render() {
        return null != this.state.error
            ? (0, r.jsx)("div", {
                  children: (0, r.jsx)(n.E, {
                      color: "text-feedback-critical",
                      variant: "text-md/normal",
                      className: i.cW,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
}
