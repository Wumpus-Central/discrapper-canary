t.d(n, { A: () => j });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    a = t(621466),
    c = t(192308),
    o = t(939249),
    d = t(442433),
    u = t(46054),
    h = t(742589),
    x = t(375708),
    m = t(221308),
    A = t(992595);
function g(e) {
    return (
        e.matches("a") ||
        "highlight" === e.className ||
        e.className.includes("mention") ||
        e.className.includes("roleMention") ||
        e.className.includes("emojiContainer")
    );
}
class N extends i.Component {
    handleOpenTopic = (e) => {
        let n = e.target;
        if ((0, a.vq)(n)) {
            if (g(n)) return;
            let t = n.parentNode;
            if (((0, a.vq)(t) && g(t)) || !e.currentTarget.contains(n)) return;
        }
        (0, c.openModalLazy)(async () => {
            let { default: e } = await Promise.all([t.e("45988"), t.e("8939")]).then(t.bind(t, 181094));
            return (n) => (0, l.jsx)(e, { ...n, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: n, guild: i } = this.props;
        (0, d.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("26132"),
                t.e("91763"),
                t.e("35321"),
                t.e("50033"),
                t.e("34971"),
                t.e("43266"),
                t.e("9004"),
                t.e("30997"),
                t.e("12255"),
                t.e("40959"),
                t.e("79995"),
                t.e("44058"),
                t.e("91377"),
                t.e("21106"),
                t.e("40175"),
                t.e("43746"),
                t.e("35723"),
                t.e("90554"),
                t.e("66540"),
                t.e("29542"),
                t.e("59545"),
            ]).then(t.bind(t, 22496));
            return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i, includeTopic: !0 });
        });
    };
    render() {
        let { channel: e } = this.props;
        if (e.isMultiUserDM()) return null;
        let n = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || n
            ? (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsx)(h.A.Divider, {}),
                      (0, l.jsxs)("div", {
                          className: r()(m.At, m.lu, A.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, l.jsx)(o.D, {
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
let j = N;
