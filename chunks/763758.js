n.d(t, { A: () => a });
var l = n(477900),
    i = n(582128),
    s = n(28863);
class r extends i.PureComponent {
    render() {
        let { text: e, lastItem: t, className: n } = this.props;
        return (0, l.jsxs)("span", {
            children: [(0, l.jsx)(s.Anchor, { className: n, onClick: this.handleClick, children: e }), t ? "" : ", "],
        });
    }
    handleClick = () => {
        let { onClick: e, index: t } = this.props;
        e?.(t);
    };
}
class a extends i.PureComponent {
    render() {
        let e = this.props.artists.split("; ");
        if (!this.props.canOpen) return e.join(", ");
        let t = e.length - 1;
        return e.map((e, n) =>
            (0, l.jsx)(
                r,
                {
                    text: e,
                    index: n,
                    lastItem: n === t,
                    onClick: this.handleOpenSpotifyArtist,
                    className: this.props.linkClassName,
                },
                `spotify-artist-${n}`,
            ),
        );
    }
    handleOpenSpotifyArtist = (e) => {
        let { onOpenSpotifyArtist: t } = this.props;
        t?.(e);
    };
}
