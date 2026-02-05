a.d(t, { A: () => i });
var s = a(627968),
    l = a(64700);
class i extends l.PureComponent {
    static defaultProps = { tag: "a", data: {} };
    handleClick = (e) => {
        let { eventName: t, data: a, href: s, onClick: l, trackOutboundLink: i, track: r } = this.props;
        if (
            (a.googleAnalytics &&
                i &&
                (null != s
                    ? i(s)
                    : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")),
            l && l(e),
            !t)
        )
            return !1;
        r(t, a);
    };
    render() {
        let { tag: e, children: t, eventName: a, data: l, track: i, trackOutboundLink: r, ...n } = this.props;
        return null == e ? null : (0, s.jsx)(e, { ...n, onClick: this.handleClick, children: t });
    }
}
