t.d(n, { Z: () => g }), t(47120);
var i,
    l = t(200651),
    a = t(192379),
    r = t(120356),
    d = t.n(r),
    o = t(481060),
    u = t(37234),
    s = t(230711),
    c = t(981631),
    _ = t(388032),
    E = t(261121);
function f(e, n, t) {
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
class h extends (i = a.Component) {
    render() {
        return (0, l.jsxs)('div', {
            className: E.streamerModeEnabled,
            children: [
                (0, l.jsx)('div', { className: E.streamerModeEnabledImage }),
                (0, l.jsx)(o.P3F, {
                    className: d()(E.streamerModeEnabledBtn, { [E.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: _.intl.string(_.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'handleClick', () => {
                this.props.disableButton || ((0, u.jN)(c.S9g.USER_SETTINGS), s.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
f(h, 'defaultProps', { disableButton: !1 });
let g = h;
