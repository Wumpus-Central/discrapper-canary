n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    a = n(453771),
    s = n(922667);
class o extends i.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: i,
            playable: o,
            volume: l,
            renderLinkComponent: c,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: f,
            autoMute: p,
            onMute: _,
            mimeType: h,
            onPlay: m,
        } = this.props;
        return (0, r.jsx)(s.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, a.Hb)(t),
            fileSizeBytes: t,
            type: s.Ay.Types.AUDIO,
            className: i,
            playable: o,
            volume: l,
            onMute: _,
            autoMute: p,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: f,
            renderLinkComponent: c,
            mimeType: h,
            onPlay: m,
        });
    }
}
