r.d(n, {
    E: function () {
        return h;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(653041);
var s = r(200651),
    l = r(192379),
    u = r(658722),
    c = r.n(u),
    d = r(481060),
    f = r(683976);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class h extends l.PureComponent {
    render() {
        let { label: e, value: n, popoutProps: r, renderValue: i, className: a } = this.props;
        return (0, s.jsx)(d.Popout, {
            ...r,
            renderPopout: this.renderPopout,
            children: (r) =>
                (0, s.jsx)(d.Clickable, {
                    ...r,
                    className: a,
                    children: (0, s.jsx)(f.F, {
                        label: e,
                        value: n,
                        renderValue: i
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'renderItems', (e) => {
                let { items: n, renderItem: r } = this.props;
                return n.reduce((n, i, a) => (c()(e.toLowerCase(), i.label.toLowerCase()) && n.push(r(i, a)), n), []);
            }),
            p(this, 'renderPopout', (e) => {
                let { closePopout: n } = e,
                    { placeholder: r, popoutClassName: i, onChange: a, value: o } = this.props;
                return (0, s.jsx)(d.ComboboxPopout, {
                    className: i,
                    placeholder: r,
                    value: new Set([o.value]),
                    onChange: a,
                    onClose: n,
                    showScrollbar: !0,
                    children: (e) => this.renderItems(e)
                });
            });
    }
}
