n.d(t, { Z: () => s }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(314897);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    return class extends l.Component {
        componentDidMount() {
            r.default.addChangeListener(this.onStoreChange);
        }
        componentWillUnmount() {
            r.default.removeChangeListener(this.onStoreChange);
        }
        render() {
            return (0, i.jsx)(e, {
                ...this.props,
                isAuthenticated: this.state.isAuthenticated
            });
        }
        constructor(...e) {
            super(...e),
                a(this, 'state', { isAuthenticated: r.default.isAuthenticated() }),
                a(this, 'onStoreChange', () => {
                    this.setState({ isAuthenticated: r.default.isAuthenticated() });
                });
        }
    };
}
