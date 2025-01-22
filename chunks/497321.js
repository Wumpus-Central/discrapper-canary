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
    p = t(261121);
function m(n, e, t) {
    return (
        e in n
            ? Object.defineProperty(n, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (n[e] = t),
        n
    );
}
class h extends (i = l.Component) {
    render() {
        return (0, r.jsxs)('div', {
            className: p.streamerModeEnabled,
            children: [
                (0, r.jsx)('div', { className: p.streamerModeEnabledImage }),
                (0, r.jsx)(d.Clickable, {
                    className: o()(p.streamerModeEnabledBtn, { [p.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...n) {
        super(...n),
            m(this, 'handleClick', () => {
                !this.props.disableButton && ((0, u.jN)(c.S9g.USER_SETTINGS), s.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
m(h, 'defaultProps', { disableButton: !1 }), (e.Z = h);
