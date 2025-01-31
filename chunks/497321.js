n.d(t, { Z: () => p }), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(481060),
    d = n(37234),
    u = n(230711),
    c = n(981631),
    h = n(388032),
    g = n(261121);
function C(e, t, n) {
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
class f extends (i = r.Component) {
    render() {
        return (0, l.jsxs)('div', {
            className: g.streamerModeEnabled,
            children: [
                (0, l.jsx)('div', { className: g.streamerModeEnabledImage }),
                (0, l.jsx)(o.P3F, {
                    className: a()(g.streamerModeEnabledBtn, { [g.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: h.intl.string(h.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'handleClick', () => {
                this.props.disableButton || ((0, d.jN)(c.S9g.USER_SETTINGS), u.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
C(f, 'defaultProps', { disableButton: !1 });
let p = f;
