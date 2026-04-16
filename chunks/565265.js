n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(621466),
    o = n(397927),
    d = n(442433),
    c = n(46054),
    u = n(742589),
    h = n(985018),
    A = n(221308),
    _ = n(992595);
function m(e) {
    return (
        e.matches("a") ||
        "highlight" === e.className ||
        e.className.includes("mention") ||
        e.className.includes("roleMention") ||
        e.className.includes("emojiContainer")
    );
}
class p extends l.Component {
    handleOpenTopic = (e) => {
        let t = e.target;
        if ((0, r.vq)(t)) {
            if (m(t)) return;
            let e = t.parentNode;
            if ((0, r.vq)(e) && m(e)) return;
        }
        (0, o.mMO)(async () => {
            let { default: e } = await n.e("8939").then(n.bind(n, 181094));
            return (t) => (0, i.jsx)(e, { ...t, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: t, guild: l } = this.props;
        (0, d.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("17425"), n.e("2200")]).then(n.bind(n, 340968));
            return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l, includeTopic: !0 });
        });
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
                          className: a()(A.At, A.lu, _.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, i.jsx)(o.DUT, {
                                  onClick: this.handleOpenTopic,
                                  "aria-label": h.intl.string(h.t.mKwsSp),
                                  className: A.h8,
                              }),
                              null == e.linkedLobby || t
                                  ? c.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : h.intl.string(h.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
let g = p;
