n.d(t, {
    A: () => l,
}),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(397927);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o extends i.PureComponent {
    render() {
        let { text: e, lastItem: t, className: n } = this.props;
        return (0, r.jsxs)("span", {
            children: [
                (0, r.jsx)(a.MzZ, {
                    className: n,
                    onClick: this.handleClick,
                    children: e,
                }),
                t ? "" : ", ",
            ],
        });
    }
    constructor(...e) {
        super(...e),
            s(this, "handleClick", () => {
                let { onClick: e, index: t } = this.props;
                null == e || e(t);
            });
    }
}
class l extends i.PureComponent {
    render() {
        let e = this.props.artists.split("; ");
        if (!this.props.canOpen) return e.join(", ");
        let t = e.length - 1;
        return e.map((e, n) =>
            (0, r.jsx)(
                o,
                {
                    text: e,
                    index: n,
                    lastItem: n === t,
                    onClick: this.handleOpenSpotifyArtist,
                    className: this.props.linkClassName,
                },
                "spotify-artist-".concat(n),
            ),
        );
    }
    constructor(...e) {
        super(...e),
            s(this, "handleOpenSpotifyArtist", (e) => {
                let { onOpenSpotifyArtist: t } = this.props;
                null == t || t(e);
            });
    }
}
