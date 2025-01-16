n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(13245),
    l = n(313201),
    d = n(237997),
    c = n(766032),
    u = n(987650),
    h = n(981631),
    p = n(388032),
    f = n(394977);
let g = Object.values(u.wF).map((e) => 100 * e),
    m = (0, l.hQ)();
class v extends s.PureComponent {
    handleUpdateBackgroundOpacity(e) {
        o.Z.setTextWidgetOpacity((0, c.Z)(e / 100)), o.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, { text_opacity_slider: e });
    }
    handlePreviewBackgroundOpacity(e) {
        o.Z.setTextWidgetOpacity((0, c.Z)(e / 100));
    }
    render() {
        return (0, i.jsxs)('div', {
            className: f.container,
            children: [
                (0, i.jsx)(a.FormTitle, {
                    id: m,
                    tag: a.FormTitleTags.H5,
                    className: f.title,
                    children: p.intl.string(p.t.OVovCQ)
                }),
                (0, i.jsx)('div', {
                    className: f.sliderContainer,
                    children: (0, i.jsx)(a.Slider, {
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
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'initialValue'),
            (i = 100 * this.props.opacity),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = r.ZP.connectStores([d.Z], () => ({ opacity: d.Z.getTextWidgetOpacity() }))(v);
