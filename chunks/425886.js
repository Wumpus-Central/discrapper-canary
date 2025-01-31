n.d(t, { Z: () => o });
var i = n(200651),
    r = n(192379),
    a = n(403182),
    s = n(640108);
class o extends r.PureComponent {
    render() {
        let { src: e, fileSize: t, fileName: n, className: r, playable: o, volume: l, renderLinkComponent: u, onVolumeChange: c, onVolumeShow: d, onVolumeHide: f, autoMute: _, onMute: p, mimeType: h, onPlay: m } = this.props;
        return (0, i.jsx)(s.ZP, {
            src: e,
            fileName: n,
            fileSize: (0, a.Ng)(t),
            fileSizeBytes: t,
            type: s.ZP.Types.AUDIO,
            className: r,
            playable: o,
            volume: l,
            onMute: p,
            autoMute: _,
            onVolumeChange: c,
            onVolumeShow: d,
            onVolumeHide: f,
            renderLinkComponent: u,
            mimeType: h,
            onPlay: m
        });
    }
}
