n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(158954),
    r = n(311907),
    a = n(414798),
    s = n(529200),
    o = n(406704),
    d = n(961350),
    c = n(734057),
    u = n(576705),
    _ = n(203982),
    m = n(427262),
    h = n(652215),
    p = n(985018),
    g = n(563111);
function A(e) {
    let t,
        n,
        A,
        { author: x, banned: f, channelId: C } = e,
        E = (0, r.bG)([d.default], () => d.default.getId()),
        I = m.Ay.useName(x),
        b = E === x.id,
        T = (0, r.bG)([c.A, u.A], () => {
            let e = c.A.getChannel(C);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, o.UJ)(e),
                    n = u.A.can(h.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return u.A.can(h.xBc.SEND_MESSAGES, e);
        });
    return (
        b
            ? ((t = p.intl.string(p.t["F/OLvL"])), (A = p.intl.string(p.t.C89OLE)))
            : ((A = p.intl.string(p.t.YVub5y)),
              f
                  ? (t = p.intl.string(p.t["57nBty"]))
                  : null != I && T
                    ? ((t = p.intl.formatToPlainString(p.t["9Akp1s"], { username: I })),
                      (n = (0, i.jsx)(l.$nd, {
                          onClick: function () {
                              let { id: e } = x,
                                  t = `@${m.Ay.getUserTag(x, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              _._.dispatchToLastSubscribed(h.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != C && a.A.startTyping(C);
                          },
                          text: p.intl.string(p.t.P8tvKG),
                      })))
                    : (t = p.intl.string(p.t["SMJr+a"]))),
        (0, i.jsxs)(s.A, {
            children: [
                (0, i.jsx)(s.A.Header, { text: A }),
                (0, i.jsxs)(s.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: g.iH,
                            children: [
                                (0, i.jsx)(s.A.Icon, { expired: !0 }),
                                (0, i.jsx)(s.A.Info, { expired: !0, title: p.intl.string(p.t["Jhx/ud"]), children: t }),
                            ],
                        }),
                        n,
                    ],
                }),
            ],
        })
    );
}
