n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(621466),
    o = n(397927),
    d = n(442433),
    c = n(46054),
    u = n(742589),
    h = n(652215),
    A = n(985018),
    g = n(980017),
    m = n(206314);
function p(e) {
    return e.matches("a") || "highlight" === e.className || e.className.includes("mention");
}
class _ extends l.Component {
    _mouseDown = !1;
    _mouseUp = !1;
    handleOpenTopic = (e) => {
        let t = e.target;
        if ((0, r.vq)(t)) {
            if (p(t)) return;
            let e = t.parentNode;
            if ((0, r.vq)(e) && p(e)) return;
        }
        (0, o.mMO)(async () => {
            let { default: e } = await n.e("8939").then(n.bind(n, 181094));
            return (t) => (0, i.jsx)(e, { ...t, ...this.props });
        });
    };
    onMouseDown = () => {
        this._mouseDown = !0;
    };
    onMouseMove = () => {
        this._mouseDown && (this._mouseDown = !1);
    };
    onMouseUp = (e) => {
        this._mouseDown && e.button !== h.hE4.SECONDARY && this.handleOpenTopic(e),
            (this._mouseUp = !0),
            (this._mouseDown = !1);
    };
    handleContextMenu = (e) => {
        let { channel: t, guild: l } = this.props;
        (0, d.L3)(e, async () => {
            let { default: e } = await n.e("17425").then(n.bind(n, 340968));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, includeTopic: !0 });
        });
    };
    handleClick = (e) => {
        if (this._mouseUp) {
            this._mouseUp = !1;
            return;
        }
        this.handleOpenTopic(e);
    };
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(u.A.Divider, {}),
                      (0, i.jsxs)("div", {
                          className: a()(g.At, g.lu, m.PT),
                          onMouseDown: this.onMouseDown,
                          onMouseMove: this.onMouseMove,
                          onMouseUp: this.onMouseUp,
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleClick,
                          children: [
                              (0, i.jsx)(o.DUT, {
                                  onClick: this.handleClick,
                                  "aria-label": A.intl.string(A.t.mKwsSp),
                                  className: g.h8,
                              }),
                              null == e.linkedLobby || t
                                  ? c.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : A.intl.string(A.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
let x = _;
