"use strict";
n.d(t, { W: () => o });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(798233);
class o extends i.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e), this.setState({ error: e, info: t });
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
}
