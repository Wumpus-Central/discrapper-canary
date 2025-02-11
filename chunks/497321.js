t.d(n, { Z: () => g }), t(47120);
var i,
    l = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    u = t(481060),
    d = t(37234),
    s = t(230711),
    c = t(981631),
    _ = t(388032),
    f = t(892210);
function p(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class E extends (i = a.Component) {
    render() {
        return (0, l.jsxs)('div', {
            className: f.streamerModeEnabled,
            children: [
                (0, l.jsx)('div', { className: f.streamerModeEnabledImage }),
                (0, l.jsx)(u.P3F, {
                    className: o()(f.streamerModeEnabledBtn, { [f.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: _.intl.string(_.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleClick', () => {
                this.props.disableButton || ((0, d.jN)(c.S9g.USER_SETTINGS), s.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
p(E, 'defaultProps', { disableButton: !1 });
let g = E;
