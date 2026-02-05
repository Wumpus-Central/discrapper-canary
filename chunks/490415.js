n.d(t, { A: () => a });
var i = n(627968),
    s = n(64700),
    r = n(961350);
function a(e) {
    return class extends s.Component {
        state = { isAuthenticated: r.default.isAuthenticated() };
        componentDidMount() {
            r.default.addChangeListener(this.onStoreChange);
        }
        componentWillUnmount() {
            r.default.removeChangeListener(this.onStoreChange);
        }
        onStoreChange = () => {
            this.setState({ isAuthenticated: r.default.isAuthenticated() });
        };
        render() {
            return (0, i.jsx)(e, { ...this.props, isAuthenticated: this.state.isAuthenticated });
        }
    };
}
