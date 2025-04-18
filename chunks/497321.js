n.d(t, { Z: () => m }), n(388685);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(37234),
    u = n(230711),
    d = n(981631),
    f = n(388032),
    _ = n(184744);
function p(e, t, n) {
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
class h extends (r = a.Component) {
    render() {
        return (0, i.jsxs)('div', {
            className: _.streamerModeEnabled,
            children: [
                (0, i.jsx)('div', { className: _.streamerModeEnabledImage }),
                (0, i.jsx)(l.P3F, {
                    className: s()(_.streamerModeEnabledBtn, { [_.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.NW.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleClick', () => {
                this.props.disableButton || ((0, c.jN)(d.S9g.USER_SETTINGS), u.Z.setSection(d.oAB.STREAMER_MODE));
            });
    }
}
p(h, 'defaultProps', { disableButton: !1 });
let m = h;
