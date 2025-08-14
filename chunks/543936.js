n.d(t, { x: () => l }), n(388685);
var r = n(73800),
    i = n(960048);
class l extends r.PureComponent {
    componentDidCatch(e, t) {
        i.Z.captureException(e, {
            tags: {
                app_context: "virtual_currency",
                source: this.props.errorSource,
            },
            extra: { info: t },
        }),
            this.setState({
                error: e,
                info: t,
            });
    }
    render() {
        return null != this.state.error
            ? null != this.props.renderCustomErrorComponent
                ? this.props.renderCustomErrorComponent()
                : null
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
