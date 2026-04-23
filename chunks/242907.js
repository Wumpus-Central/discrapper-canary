n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(821609),
    a = n(311907),
    s = n(414798),
    r = n(529200),
    o = n(406704),
    d = n(961350),
    c = n(734057),
    u = n(576705),
    m = n(203982),
    _ = n(427262),
    h = n(652215),
    p = n(985018),
    g = n(344900);
function A(e) {
    let t,
        n,
        A,
        { author: f, banned: x, channelId: C } = e,
        E = (0, a.bG)([d.default], () => d.default.getId()),
        I = _.Ay.useName(f),
        v = E === f.id,
        b = (0, a.bG)([c.A, u.A], () => {
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
        v
            ? ((t = p.intl.string(p.t["F/OLvL"])), (A = p.intl.string(p.t.C89OLE)))
            : ((A = p.intl.string(p.t.YVub5y)),
              x
                  ? (t = p.intl.string(p.t["57nBty"]))
                  : null != I && b
                    ? ((t = p.intl.formatToPlainString(p.t["9Akp1s"], { username: I })),
                      (n = (0, i.jsx)(l.$, {
                          onClick: function () {
                              let { id: e } = f,
                                  t = `@${_.Ay.getUserTag(f, { decoration: "never" })}`,
                                  n = `<@${e}>`;
                              m._.dispatchToLastSubscribed(h.jej.INSERT_TEXT, { plainText: t, rawText: n }),
                                  null != C && s.A.startTyping(C);
                          },
                          text: p.intl.string(p.t.P8tvKG),
                      })))
                    : (t = p.intl.string(p.t["SMJr+a"]))),
        (0, i.jsxs)(r.A, {
            children: [
                (0, i.jsx)(r.A.Header, { text: A }),
                (0, i.jsxs)(r.A.Body, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: g.iH,
                            children: [
                                (0, i.jsx)(r.A.Icon, { expired: !0 }),
                                (0, i.jsx)(r.A.Info, { expired: !0, title: p.intl.string(p.t["Jhx/ud"]), children: t }),
                            ],
                        }),
                        n,
                    ],
                }),
            ],
        })
    );
}
