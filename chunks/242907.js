n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    a = n(414798),
    s = n(529200),
    o = n(406704),
    c = n(961350),
    u = n(734057),
    d = n(576705),
    p = n(203982),
    m = n(427262),
    f = n(652215),
    g = n(985018),
    h = n(563111);

function _(e) {
    let t,
        n,
        _,
        { author: b, banned: A, channelId: y } = e,
        v = (0, l.bG)([c.default], () => c.default.getId()),
        x = m.Ay.useName(b),
        O = v === b.id,
        E = (0, l.bG)([u.A, d.A], () => {
            let e = u.A.getChannel(y);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, o.UJ)(e),
                    n = d.A.can(f.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return d.A.can(f.xBc.SEND_MESSAGES, e);
        });
    return (
        O
            ? ((t = g.intl.string(g.t["F/OLvL"])), (_ = g.intl.string(g.t.C89OLE)))
            : ((_ = g.intl.string(g.t.YVub5y)),
              A
                  ? (t = g.intl.string(g.t["57nBty"]))
                  : null != x && E
                    ? ((t = g.intl.formatToPlainString(g.t["9Akp1s"], {
                          username: x,
                      })),
                      (n = (0, r.jsx)(i.$nd, {
                          onClick: function () {
                              let { id: e } = b,
                                  t = "@".concat(
                                      m.Ay.getUserTag(b, {
                                          decoration: "never",
                                      }),
                                  );
                              p._.dispatchToLastSubscribed(f.jej.INSERT_TEXT, {
                                  plainText: t,
                                  rawText: "<@".concat(e, ">"),
                              }),
                                  null != y && a.A.startTyping(y);
                          },
                          text: g.intl.string(g.t.P8tvKG),
                      })))
                    : (t = g.intl.string(g.t["SMJr+a"]))),
        (0, r.jsxs)(s.A, {
            children: [
                (0, r.jsx)(s.A.Header, {
                    text: _,
                }),
                (0, r.jsxs)(s.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: h.iH,
                            children: [
                                (0, r.jsx)(s.A.Icon, {
                                    expired: !0,
                                }),
                                (0, r.jsx)(s.A.Info, {
                                    expired: !0,
                                    title: g.intl.string(g.t["Jhx/ud"]),
                                    children: t,
                                }),
                            ],
                        }),
                        n,
                    ],
                }),
            ],
        })
    );
}
