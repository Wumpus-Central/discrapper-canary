e(47120);
var r,
    i = e(200651),
    u = e(192379),
    l = e(120356),
    a = e.n(l),
    o = e(481060),
    d = e(37234),
    c = e(230711),
    s = e(981631),
    f = e(388032),
    E = e(261121);
function _(n, t, e) {
    return (
        t in n
            ? Object.defineProperty(n, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (n[t] = e),
        n
    );
}
class p extends (r = u.Component) {
    render() {
        return (0, i.jsxs)('div', {
            className: E.streamerModeEnabled,
            children: [
                (0, i.jsx)('div', { className: E.streamerModeEnabledImage }),
                (0, i.jsx)(o.Clickable, {
                    className: a()(E.streamerModeEnabledBtn, { [E.disabled]: this.props.disableButton }),
                    onClick: this.handleClick,
                    children: f.intl.string(f.t.Br1ls7)
                })
            ]
        });
    }
    constructor(...n) {
        super(...n),
            _(this, 'handleClick', () => {
                !this.props.disableButton && ((0, d.jN)(s.S9g.USER_SETTINGS), c.Z.setSection(s.oAB.STREAMER_MODE));
            });
    }
}
_(p, 'defaultProps', { disableButton: !1 }), (t.Z = p);
