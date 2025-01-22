n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060);
function a(e, t, n) {
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
class u extends i.PureComponent {
    render() {
        let { text: e, lastItem: t, className: n } = this.props;
        return (0, r.jsxs)('span', {
            children: [
                (0, r.jsx)(l.Anchor, {
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
            a(this, 'handleClick', () => {
                let { onClick: e, index: t } = this.props;
                null == e || e(t);
            });
    }
}
class o extends i.PureComponent {
    render() {
        let e = this.props.artists.split(';');
        if (!this.props.canOpen) return e.join(', ');
        let t = e.length - 1;
        return e.map((e, n) =>
            (0, r.jsx)(
                u,
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
            a(this, 'handleOpenSpotifyArtist', (e) => {
                let { onOpenSpotifyArtist: t } = this.props;
                null == t || t(e);
            });
    }
}
