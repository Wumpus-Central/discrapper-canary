n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(621466),
    o = n(192308),
    d = n(939249),
    c = n(442433),
    u = n(46054),
    h = n(742589),
    A = n(985018),
    _ = n(221308),
    m = n(992595);
function g(e) {
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
            if (g(t)) return;
            let e = t.parentNode;
            if ((0, r.vq)(e) && g(e)) return;
        }
        (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e("8939").then(n.bind(n, 181094));
            return (t) => (0, i.jsx)(e, { ...t, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: t, guild: l } = this.props;
        (0, c.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("95834"), n.e("17425"), n.e("43156")]).then(n.bind(n, 340968));
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
                      (0, i.jsx)(h.A.Divider, {}),
                      (0, i.jsxs)("div", {
                          className: a()(_.At, _.lu, m.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, i.jsx)(d.D, {
                                  onClick: this.handleOpenTopic,
                                  "aria-label": A.intl.string(A.t.mKwsSp),
                                  className: _.h8,
                              }),
                              null == e.linkedLobby || t
                                  ? u.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : A.intl.string(A.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
let f = p;
