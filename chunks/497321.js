t(47120);
var i,
    r = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    d = t(481060),
    u = t(37234),
    s = t(230711),
    c = t(981631),
    f = t(388032),
    m = t(261121);
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
class h extends (i = l.Component) {
    render() {
        return (0, r.jsxs)('div', {
            className: m.streamerModeEnabled,
            children: [
                (0, r.jsx)('div', { className: m.streamerModeEnabledImage }),
                (0, r.jsx)(d.Clickable, {
                    className: o()(m.streamerModeEnabledBtn, { [m.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleClick', () => {
                !this.props.disableButton && ((0, u.jN)(c.S9g.USER_SETTINGS), s.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
p(h, 'defaultProps', { disableButton: !1 }), (n.Z = h);
