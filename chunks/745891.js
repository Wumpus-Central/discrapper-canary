"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(684013),
    o = n(915089),
    d = n(256415),
    c = n(448296),
    u = n(672396),
    h = n(652215),
    p = n(985018),
    A = n(81469);
let f = Object.values(u.Li).map((e) => 100 * e),
    g = (0, o.Ld)();
class _ extends s.PureComponent {
    initialValue = 100 * this.props.opacity;
    handleUpdateBackgroundOpacity(e) {
        r.A.setTextWidgetOpacity((0, c.A)(e / 100)),
            r.A.track(h.HAw.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        r.A.setTextWidgetOpacity((0, c.A)(e / 100));
    }
    render() {
        return (0, i.jsx)("div", {
            className: A.kL,
            children: (0, i.jsx)("div", {
                className: A.xJ,
                children: (0, i.jsx)(a.Apm, {
                    label: p.intl.string(p.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: f[0],
                    maxValue: f[f.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: f,
                    onMarkerRender: h.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": g,
                }),
            }),
        });
    }
}
let m = l.Ay.connectStores([d.default], () => ({ opacity: d.default.getTextWidgetOpacity() }))(_);
