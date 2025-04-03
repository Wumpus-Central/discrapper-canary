r.d(t, { Z: () => s }), r(47120), r(301563);
var n = r(200651),
    a = r(192379),
    o = r(481060);
function i(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class l extends a.PureComponent {
    render() {
        let { text: e, lastItem: t, className: r } = this.props;
        return (0, n.jsxs)('span', {
            children: [
                (0, n.jsx)(o.eee, {
                    className: r,
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
class s extends a.PureComponent {
    render() {
        let e = this.props.artists.split(';');
        if (!this.props.canOpen) return e.join(', ');
        let t = e.length - 1;
        return e.map((e, r) =>
            (0, n.jsx)(
                l,
                {
                    text: e,
                    index: r,
                    lastItem: r === t,
                    onClick: this.handleOpenSpotifyArtist,
                    className: this.props.linkClassName
                },
                'spotify-artist-'.concat(r)
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
