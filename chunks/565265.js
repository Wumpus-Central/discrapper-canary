n.d(t, { A: () => N });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(621466),
    c = n(192308),
    o = n(939249),
    d = n(442433),
    u = n(46054),
    h = n(742589),
    m = n(375708),
    x = n(221308),
    A = n(992595);
function g(e) {
    return (
        e.matches("a") ||
        "highlight" === e.className ||
        e.className.includes("mention") ||
        e.className.includes("roleMention") ||
        e.className.includes("emojiContainer")
    );
}
class j extends i.Component {
    handleOpenTopic = (e) => {
        let t = e.target;
        if ((0, r.vq)(t)) {
            if (g(t)) return;
            let n = t.parentNode;
            if (((0, r.vq)(n) && g(n)) || !e.currentTarget.contains(t)) return;
        }
        (0, c.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("45988"), n.e("8939")]).then(n.bind(n, 181094));
            return (t) => (0, l.jsx)(e, { ...t, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: t, guild: i } = this.props;
        (0, d.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("26132"),
                n.e("91763"),
                n.e("35321"),
                n.e("50033"),
                n.e("34971"),
                n.e("43266"),
                n.e("9004"),
                n.e("30997"),
                n.e("12255"),
                n.e("40959"),
                n.e("79995"),
                n.e("44058"),
                n.e("91377"),
                n.e("21106"),
                n.e("40175"),
                n.e("43746"),
                n.e("35723"),
                n.e("90554"),
                n.e("66540"),
                n.e("29542"),
                n.e("59545"),
            ]).then(n.bind(n, 22496));
            return (n) => (0, l.jsx)(e, { ...n, channel: t, guild: i, includeTopic: !0 });
        });
    };
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let t = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || t
            ? (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsx)(h.A.Divider, {}),
                      (0, l.jsxs)("div", {
                          className: a()(x.At, x.lu, A.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, l.jsx)(o.D, {
                                  onClick: this.handleOpenTopic,
                                  "aria-label": m.intl.string(m.t.mKwsSp),
                                  className: x.h8,
                              }),
                              null == e.linkedLobby || t
                                  ? u.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : m.intl.string(m.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
let N = j;
