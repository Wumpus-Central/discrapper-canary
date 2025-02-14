n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    a = n(481060),
    r = n(13245),
    o = n(313201),
    d = n(237997),
    c = n(766032),
    u = n(987650),
    h = n(981631),
    p = n(388032),
    g = n(788278);
let m = Object.values(u.wF).map((e) => 100 * e),
    f = (0, o.hQ)();
class v extends s.PureComponent {
    handleUpdateBackgroundOpacity(e) {
        r.Z.setTextWidgetOpacity((0, c.Z)(e / 100)), r.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        r.Z.setTextWidgetOpacity((0, c.Z)(e / 100));
    }
    render() {
        return (0, i.jsxs)('div', {
            className: g.container,
            children: [
                (0, i.jsx)(a.vwX, {
                    id: f,
                    tag: a.RB0.H5,
                    className: g.title,
                    children: p.intl.string(p.t.OVovCQ)
                }),
                (0, i.jsx)('div', {
                    className: g.sliderContainer,
                    children: (0, i.jsx)(a.iRW, {
                        mini: !0,
                        initialValue: this.initialValue,
                        defaultValue: this.initialValue,
                        minValue: m[0],
                        maxValue: m[m.length - 1],
                        handleSize: 10,
                        onValueChange: this.handleUpdateBackgroundOpacity,
                        asValueChanges: this.handlePreviewBackgroundOpacity,
                        markers: m,
                        onMarkerRender: h.dG4,
                        equidistant: !0,
                        stickToMarkers: !0,
                        'aria-labelledby': f
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
let Z = l.ZP.connectStores([d.Z], () => ({ opacity: d.Z.getTextWidgetOpacity() }))(v);
