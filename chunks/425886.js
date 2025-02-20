n.d(t, { Z: () => s });
var r = n(200651),
    i = n(192379),
    o = n(403182),
    a = n(640108);
class s extends i.PureComponent {
    render() {
        let { src: e, fileSize: t, fileName: n, className: i, playable: s, volume: l, renderLinkComponent: c, onVolumeChange: u, onVolumeShow: d, onVolumeHide: f, autoMute: p, onMute: _, mimeType: h, onPlay: m } = this.props;
        return (0, r.jsx)(a.ZP, {
            src: e,
            fileName: n,
            fileSize: (0, o.Ng)(t),
            fileSizeBytes: t,
            type: a.ZP.Types.AUDIO,
            className: i,
            playable: s,
            volume: l,
            onMute: _,
            autoMute: p,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: f,
            renderLinkComponent: c,
            mimeType: h,
            onPlay: m
        });
    }
}
