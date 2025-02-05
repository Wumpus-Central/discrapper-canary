n.d(t, { Z: () => m }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    u = n.n(l),
    o = n(481060),
    d = n(37234),
    s = n(230711),
    c = n(981631),
    f = n(388032),
    _ = n(261121);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class p extends (i = a.Component) {
    render() {
        return (0, r.jsxs)('div', {
            className: _.streamerModeEnabled,
            children: [
                (0, r.jsx)('div', { className: _.streamerModeEnabledImage }),
                (0, r.jsx)(o.P3F, {
                    className: u()(_.streamerModeEnabledBtn, { [_.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleClick', () => {
                this.props.disableButton || ((0, d.jN)(c.S9g.USER_SETTINGS), s.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
E(p, 'defaultProps', { disableButton: !1 });
let m = p;
