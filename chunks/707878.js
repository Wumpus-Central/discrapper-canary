n.d(t, { Z: () => y }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    s = n(481060),
    o = n(13245),
    l = n(313201),
    c = n(237997),
    d = n(766032),
    u = n(987650),
    f = n(981631),
    h = n(388032),
    p = n(103918);
let g = Object.values(u.wF).map((e) => 100 * e),
    b = (0, l.hQ)();
class m extends r.PureComponent {
    handleUpdateBackgroundOpacity(e) {
        o.Z.setTextWidgetOpacity((0, d.Z)(e / 100)),
            o.Z.track(f.rMx.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        o.Z.setTextWidgetOpacity((0, d.Z)(e / 100));
    }
    render() {
        return (0, i.jsx)("div", {
            className: p.container,
            children: (0, i.jsx)("div", {
                className: p.sliderContainer,
                children: (0, i.jsx)(s.iRW, {
                    label: h.intl.string(h.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: g[0],
                    maxValue: g[g.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: g,
                    onMarkerRender: f.dG4,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": b,
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
let y = a.ZP.connectStores([c.default], () => ({ opacity: c.default.getTextWidgetOpacity() }))(m);
