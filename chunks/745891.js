n.d(t, {
    A: () => A,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    o = n(684013),
    a = n(915089),
    c = n(256415),
    d = n(448296),
    u = n(672396),
    h = n(652215),
    p = n(985018),
    f = n(877911);
let b = Object.values(u.Li).map((e) => 100 * e),
    g = (0, a.Ld)();
class y extends r.PureComponent {
    handleUpdateBackgroundOpacity(e) {
        o.A.setTextWidgetOpacity((0, d.A)(e / 100)),
            o.A.track(h.HAw.OVERLAY_SETTINGS_UPDATED, {
                text_opacity_slider: e,
            });
    }
    handlePreviewBackgroundOpacity(e) {
        o.A.setTextWidgetOpacity((0, d.A)(e / 100));
    }
    render() {
        return (0, i.jsx)("div", {
            className: f.kL,
            children: (0, i.jsx)("div", {
                className: f.xJ,
                children: (0, i.jsx)(l.Apm, {
                    label: p.intl.string(p.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: b[0],
                    maxValue: b[b.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: b,
                    onMarkerRender: h.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": g,
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "initialValue", 100 * this.props.opacity);
    }
}
let A = s.Ay.connectStores([c.default], () => ({
    opacity: c.default.getTextWidgetOpacity(),
}))(y);
