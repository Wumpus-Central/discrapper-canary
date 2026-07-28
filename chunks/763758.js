"use strict";
n.d(t, { A: () => l });
var i = n(477900),
    r = n(582128),
    a = n(349288);
class s extends r.PureComponent {
    render() {
        let { text: e, lastItem: t, className: n } = this.props;
        return (0, i.jsxs)("span", {
            children: [(0, i.jsx)(a.Anchor, { className: n, onClick: this.handleClick, children: e }), t ? "" : ", "],
        });
    }
    handleClick = () => {
        let { onClick: e, index: t } = this.props;
        e?.(t);
    };
}
class l extends r.PureComponent {
    render() {
        let e = this.props.artists.split("; ");
        if (!this.props.canOpen) return e.join(", ");
        let t = e.length - 1;
        return e.map((e, n) =>
            (0, i.jsx)(
                s,
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
