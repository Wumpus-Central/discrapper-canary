n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(481060),
    l = n(13245),
    a = n(313201),
    c = n(237997),
    u = n(766032),
    d = n(987650),
    h = n(981631),
    p = n(388032),
    f = n(225932);
let g = Object.values(d.wF).map((e) => 100 * e),
    m = (0, a.hQ)();
class y extends r.PureComponent {
    handleUpdateBackgroundOpacity(e) {
        l.Z.setTextWidgetOpacity((0, u.Z)(e / 100)), l.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        l.Z.setTextWidgetOpacity((0, u.Z)(e / 100));
    }
    render() {
        return (0, i.jsxs)('div', {
            className: f.container,
            children: [
                (0, i.jsx)(o.vwX, {
                    id: m,
                    tag: o.RB0.H5,
                    className: f.title,
                    children: p.NW.string(p.t.OVovCQ)
                }),
                (0, i.jsx)('div', {
                    className: f.sliderContainer,
                    children: (0, i.jsx)(o.iRW, {
                        mini: !0,
                        initialValue: this.initialValue,
                        defaultValue: this.initialValue,
                        minValue: g[0],
                        maxValue: g[g.length - 1],
                        handleSize: 10,
                        onValueChange: this.handleUpdateBackgroundOpacity,
                        asValueChanges: this.handlePreviewBackgroundOpacity,
                        markers: g,
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
let O = s.ZP.connectStores([c.default], () => ({ opacity: c.default.getTextWidgetOpacity() }))(y);
