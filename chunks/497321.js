n.d(e, { Z: () => E }), n(47120);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(481060),
    s = n(37234),
    d = n(230711),
    c = n(981631),
    f = n(388032),
    _ = n(986900);
function p(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class h extends (i = r.Component) {
    render() {
        return (0, a.jsxs)('div', {
            className: _.streamerModeEnabled,
            children: [
                (0, a.jsx)('div', { className: _.streamerModeEnabledImage }),
                (0, a.jsx)(u.P3F, {
                    className: o()(_.streamerModeEnabledBtn, { [_.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            p(this, 'handleClick', () => {
                this.props.disableButton || ((0, s.jN)(c.S9g.USER_SETTINGS), d.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
p(h, 'defaultProps', { disableButton: !1 });
let E = h;
