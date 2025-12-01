n.d(t, { Z: () => s });
var r = n(54381),
    i = n(473749),
    a = n(403182),
    o = n(640108);
class s extends i.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: i,
            playable: s,
            volume: l,
            renderLinkComponent: c,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: f,
            autoMute: p,
            onMute: _,
            mimeType: m,
            onPlay: h,
        } = this.props;
        return (0, r.jsx)(o.ZP, {
            src: e,
            fileName: n,
            fileSize: (0, a.Ng)(t),
            fileSizeBytes: t,
            type: o.ZP.Types.AUDIO,
            className: i,
            playable: s,
            volume: l,
            onMute: _,
            autoMute: p,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: f,
            renderLinkComponent: c,
            mimeType: m,
            onPlay: h,
        });
    }
}
