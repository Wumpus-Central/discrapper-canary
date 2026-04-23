a.d(t, { A: () => r });
var s = a(627968),
    l = a(64700);
class r extends l.PureComponent {
    static defaultProps = { tag: "a", data: {} };
    handleClick = (e) => {
        let { eventName: t, data: a, href: s, onClick: l, trackOutboundLink: r, track: i } = this.props;
        if (
            (a.googleAnalytics &&
                r &&
                (null != s
                    ? r(s)
                    : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")),
            l && l(e),
            !t)
        )
            return !1;
        i(t, a);
    };
    render() {
        let { tag: e, children: t, eventName: a, data: l, track: r, trackOutboundLink: i, ...n } = this.props;
        return null == e ? null : (0, s.jsx)(e, { ...n, onClick: this.handleClick, children: t });
    }
}
