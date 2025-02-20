n.d(t, { Z: () => m }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(37234),
    u = n(230711),
    d = n(981631),
    f = n(388032),
    p = n(554674);
function _(e, t, n) {
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
class h extends (r = o.Component) {
    render() {
        return (0, i.jsxs)('div', {
            className: p.streamerModeEnabled,
            children: [
                (0, i.jsx)('div', { className: p.streamerModeEnabledImage }),
                (0, i.jsx)(l.P3F, {
                    className: s()(p.streamerModeEnabledBtn, { [p.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.NW.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleClick', () => {
                this.props.disableButton || ((0, c.jN)(d.S9g.USER_SETTINGS), u.Z.setSection(d.oAB.STREAMER_MODE));
            });
    }
}
_(h, 'defaultProps', { disableButton: !1 });
let m = h;
