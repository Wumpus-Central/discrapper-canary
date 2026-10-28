l.d(n, { A: () => E });
var t = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    a = l(621466),
    c = l(192308),
    o = l(939249),
    d = l(834730),
    u = l(442433),
    x = l(46054),
    h = l(742589),
    m = l(105292),
    A = l(267283),
    j = l(165648);
function g(e) {
    return (
        e.matches("a") ||
        "highlight" === e.className ||
        e.className.includes("mention") ||
        e.className.includes("roleMention") ||
        e.className.includes("emojiContainer")
    );
}
class p extends i.Component {
    handleOpenTopic = (e) => {
        let n = e.target;
        if ((0, a.vq)(n)) {
            if (g(n)) return;
            let l = n.parentNode;
            if (((0, a.vq)(l) && g(l)) || !e.currentTarget.contains(n)) return;
        }
        (0, c.openModalLazy)(async () => {
            let { default: e } = await Promise.all([l.e("921903"), l.e("608939")]).then(l.bind(l, 181094));
            return (n) => (0, t.jsx)(e, { ...n, ...this.props });
        });
    };
    handleContextMenu = (e) => {
        let { channel: n, guild: i } = this.props;
        (0, u.L3)(e, async () => {
            let { default: e } = await Promise.all([
                l.e("926132"),
                l.e("391763"),
                l.e("368358"),
                l.e("947502"),
                l.e("550033"),
                l.e("343266"),
                l.e("309004"),
                l.e("412255"),
                l.e("63340"),
                l.e("430997"),
                l.e("379995"),
                l.e("544058"),
                l.e("275289"),
                l.e("591377"),
                l.e("35723"),
                l.e("256372"),
                l.e("29542"),
                l.e("359545"),
            ]).then(l.bind(l, 22496));
            return (l) => (0, t.jsx)(e, { ...l, channel: n, guild: i, includeTopic: !0 });
        });
    };
    render() {
        let { channel: e, leadingDivider: n = "dot" } = this.props;
        if (e.isMultiUserDM()) return null;
        let l = null != e.topic && e.topic.length > 0;
        return null != e.linkedLobby || l
            ? (0, t.jsxs)(i.Fragment, {
                  children: [
                      "bar" === n
                          ? (0, t.jsx)("span", { className: A.U_, "aria-hidden": !0 })
                          : (0, t.jsx)(h.A.Divider, {}),
                      (0, t.jsxs)("div", {
                          className: r()(A.At, A.lu, j.PT),
                          onContextMenu: this.handleContextMenu,
                          onClick: this.handleOpenTopic,
                          children: [
                              (0, t.jsx)(o.D, {
                                  onClick: this.handleOpenTopic,
                                  "aria-label": m.intl.string(m.t.mKwsSp),
                                  className: A.h8,
                              }),
                              null == e.linkedLobby || l
                                  ? (0, t.jsx)(d.E, {
                                        tag: "span",
                                        color: "none",
                                        variant: "text-sm/medium",
                                        children: x.A.parseTruncatedTopic(e.topic, !0, { channelId: e.id }),
                                    })
                                  : m.intl.string(m.t["XJVlf/"]),
                          ],
                      }),
                  ],
              })
            : null;
    }
}
let E = p;
