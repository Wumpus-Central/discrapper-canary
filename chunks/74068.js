"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    s = n(453771),
    a = n(922667);
class o extends i.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: i,
            playable: o,
            volume: l,
            renderLinkComponent: u,
            onVolumeChange: c,
            onVolumeShow: d,
            onVolumeHide: _,
            autoMute: f,
            onMute: p,
            mimeType: h,
            onPlay: E,
        } = this.props;
        return (0, r.jsx)(a.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, s.Hb)(t),
            fileSizeBytes: t,
            type: a.Ay.Types.AUDIO,
            className: i,
            playable: o,
            volume: l,
            onMute: p,
            autoMute: f,
            onVolumeChange: c,
            onVolumeShow: d,
            onVolumeHide: _,
            renderLinkComponent: u,
            mimeType: h,
            onPlay: E,
        });
    }
}
