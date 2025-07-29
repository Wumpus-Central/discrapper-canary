n.d(t, { Z: () => s });
var r = n(255367),
    i = n(73800),
    a = n(403182),
    o = n(640108);
class s extends i.PureComponent {
    render() {
        let { src: e, fileSize: t, fileName: n, className: i, playable: s, volume: l, renderLinkComponent: c, onVolumeChange: u, onVolumeShow: d, onVolumeHide: _, autoMute: f, onMute: p, mimeType: h, onPlay: m } = this.props;
        return (0, r.jsx)(o.ZP, {
            src: e,
            fileName: n,
            fileSize: (0, a.Ng)(t),
            fileSizeBytes: t,
            type: o.ZP.Types.AUDIO,
            className: i,
            playable: s,
            volume: l,
            onMute: p,
            autoMute: f,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: _,
            renderLinkComponent: c,
            mimeType: h,
            onPlay: m
        });
    }
}
