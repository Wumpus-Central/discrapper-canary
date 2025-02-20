n.d(t, { Z: () => s }), n(47120), n(301563);
var r = n(200651),
    l = n(192379),
    o = n(481060);
function i(e, t, n) {
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
class a extends l.PureComponent {
    render() {
        let { text: e, lastItem: t, className: n } = this.props;
        return (0, r.jsxs)('span', {
            children: [
                (0, r.jsx)(o.eee, {
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
            i(this, 'handleClick', () => {
                let { onClick: e, index: t } = this.props;
                null == e || e(t);
            });
    }
}
class s extends l.PureComponent {
    render() {
        let e = this.props.artists.split(';');
        if (!this.props.canOpen) return e.join(', ');
        let t = e.length - 1;
        return e.map((e, n) =>
            (0, r.jsx)(
                a,
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
            i(this, 'handleOpenSpotifyArtist', (e) => {
                let { onOpenSpotifyArtist: t } = this.props;
                null == t || t(e);
            });
    }
}
