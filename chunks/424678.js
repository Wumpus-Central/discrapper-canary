n.d(t, { Z: () => l }), n(388685), n(35282);
var r = n(200651),
    i = n(192379),
    a = n(481060);
function o(e, t, n) {
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
class s extends i.PureComponent {
    render() {
        let { text: e, lastItem: t, className: n } = this.props;
        return (0, r.jsxs)('span', {
            children: [
                (0, r.jsx)(a.eee, {
                    className: n,
                    onClick: this.handleClick,
                    children: e
                }),
                t ? '' : ', '
            ]
        });
    }
    constructor(...e) {
        super(...e),
            o(this, 'handleClick', () => {
                let { onClick: e, index: t } = this.props;
                null == e || e(t);
            });
    }
}
class l extends i.PureComponent {
    render() {
        let e = this.props.artists.split(';');
        if (!this.props.canOpen) return e.join(', ');
        let t = e.length - 1;
        return e.map((e, n) =>
            (0, r.jsx)(
                s,
                {
                    text: e,
                    index: n,
                    lastItem: n === t,
                    onClick: this.handleOpenSpotifyArtist,
                    className: this.props.linkClassName
                },
                'spotify-artist-'.concat(n)
            )
        );
    }
    constructor(...e) {
        super(...e),
            o(this, 'handleOpenSpotifyArtist', (e) => {
                let { onOpenSpotifyArtist: t } = this.props;
                null == t || t(e);
            });
    }
}
