n.d(t, { A: () => s });
var r = n(627968),
    l = n(64700),
    i = n(349288);
class a extends l.PureComponent {
    render() {
        let { text: e, lastItem: t, className: n } = this.props;
        return (0, r.jsxs)("span", {
            children: [(0, r.jsx)(i.Anchor, { className: n, onClick: this.handleClick, children: e }), t ? "" : ", "],
        });
    }
    handleClick = () => {
        let { onClick: e, index: t } = this.props;
        e?.(t);
    };
}
class s extends l.PureComponent {
    render() {
        let e = this.props.artists.split("; ");
        if (!this.props.canOpen) return e.join(", ");
        let t = e.length - 1;
        return e.map((e, n) =>
            (0, r.jsx)(
                a,
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
