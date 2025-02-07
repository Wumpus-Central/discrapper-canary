n.d(e, { Z: () => h }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(481060),
    s = n(37234),
    d = n(230711),
    c = n(981631),
    f = n(388032),
    _ = n(261121);
function E(t, e, n) {
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
class p extends (i = a.Component) {
    render() {
        return (0, r.jsxs)('div', {
            className: _.streamerModeEnabled,
            children: [
                (0, r.jsx)('div', { className: _.streamerModeEnabledImage }),
                (0, r.jsx)(u.P3F, {
                    className: o()(_.streamerModeEnabledBtn, { [_.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            E(this, 'handleClick', () => {
                this.props.disableButton || ((0, s.jN)(c.S9g.USER_SETTINGS), d.Z.setSection(c.oAB.STREAMER_MODE));
            });
    }
}
E(p, 'defaultProps', { disableButton: !1 });
let h = p;
