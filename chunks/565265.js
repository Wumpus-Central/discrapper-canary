l.d(n, { A: () => E });
var t = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(621466),
    c = l(192308),
    o = l(939249),
    d = l(442433),
    u = l(46054),
    h = l(742589),
    x = l(375708),
    m = l(221308),
    A = l(992595);
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
        let n = e.target;
        if ((0, a.vq)(n)) {
            if (g(n)) return;
            let l = n.parentNode;
            if (((0, a.vq)(l) && g(l)) || !e.currentTarget.contains(n)) return;
        }
        (0, c.openModalLazy)(async () => {
            let { default: e } = await Promise.all([l.e("45988"), l.e("8939")]).then(l.bind(l, 181094));
            return (n) => (0, t.jsx)(e, { ...n, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: n, guild: i } = this.props;
        (0, d.L3)(e, async () => {
            let { default: e } = await Promise.all([
                l.e("26132"),
                l.e("91763"),
                l.e("35321"),
                l.e("50033"),
                l.e("34971"),
                l.e("43266"),
                l.e("9004"),
                l.e("30997"),
                l.e("12255"),
                l.e("40959"),
                l.e("79995"),
                l.e("21106"),
                l.e("44058"),
                l.e("91377"),
                l.e("43746"),
                l.e("90554"),
                l.e("35723"),
                l.e("66540"),
                l.e("29542"),
                l.e("59545"),
            ]).then(l.bind(l, 22496));
            return (l) => (0, t.jsx)(e, { ...l, channel: n, guild: i, includeTopic: !0 });
        });
    };
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let n = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || n
            ? (0, t.jsxs)(i.Fragment, {
                  children: [
                      (0, t.jsx)(h.A.Divider, {}),
                      (0, t.jsxs)("div", {
                          className: r()(m.At, m.lu, A.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, t.jsx)(o.D, {
                                  onClick: this.handleOpenTopic,
                                  "aria-label": x.intl.string(x.t.mKwsSp),
                                  className: m.h8,
                              }),
                              null == e.linkedLobby || n
                                  ? u.A.parseTopic(e.topic, !0, { channelId: e.id })
                                  : x.intl.string(x.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
let E = j;
