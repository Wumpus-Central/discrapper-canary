r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(403182),
    s = r(640108);
class l extends a.PureComponent {
    render() {
        let { src: e, fileSize: n, fileName: r, className: a, playable: l, volume: u, renderLinkComponent: c, onVolumeChange: d, onVolumeShow: f, onVolumeHide: p, autoMute: h, onMute: _, mimeType: m, onPlay: g } = this.props;
        return (0, i.jsx)(s.ZP, {
            src: e,
            fileName: r,
            fileSize: (0, o.Ng)(n),
            fileSizeBytes: n,
            type: s.ZP.Types.AUDIO,
            className: a,
            playable: l,
            volume: u,
            onMute: _,
            autoMute: h,
            onVolumeChange: d,
            onVolumeShow: f,
            onVolumeHide: p,
            renderLinkComponent: c,
            mimeType: m,
            onPlay: g
        });
    }
}
