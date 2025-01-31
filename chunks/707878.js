n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    o = n(13245),
    a = n(313201),
    d = n(237997),
    c = n(766032),
    u = n(987650),
    h = n(981631),
    p = n(388032),
    g = n(394977);
let f = Object.values(u.wF).map((e) => 100 * e),
    m = (0, a.hQ)();
class x extends s.PureComponent {
    handleUpdateBackgroundOpacity(e) {
        o.Z.setTextWidgetOpacity((0, c.Z)(e / 100)), o.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        o.Z.setTextWidgetOpacity((0, c.Z)(e / 100));
    }
    render() {
        return (0, i.jsxs)('div', {
            className: g.container,
            children: [
                (0, i.jsx)(r.vwX, {
                    id: m,
                    tag: r.RB0.H5,
                    className: g.title,
                    children: p.intl.string(p.t.OVovCQ)
                }),
                (0, i.jsx)('div', {
                    className: g.sliderContainer,
                    children: (0, i.jsx)(r.iRW, {
                        mini: !0,
                        initialValue: this.initialValue,
                        defaultValue: this.initialValue,
                        minValue: f[0],
                        maxValue: f[f.length - 1],
                        handleSize: 10,
                        onValueChange: this.handleUpdateBackgroundOpacity,
                        asValueChanges: this.handlePreviewBackgroundOpacity,
                        markers: f,
                        onMarkerRender: h.dG4,
                        equidistant: !0,
                        stickToMarkers: !0,
                        'aria-labelledby': m
                    })
                })
            ]
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'initialValue'),
            (n = 100 * this.props.opacity),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let v = l.ZP.connectStores([d.Z], () => ({ opacity: d.Z.getTextWidgetOpacity() }))(x);
