n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(311907),
    s = n(414798),
    o = n(529200),
    l = n(406704),
    c = n(961350),
    u = n(734057),
    d = n(576705),
    f = n(203982),
    p = n(427262),
    _ = n(652215),
    h = n(985018),
    m = n(563111);

function g(e) {
    let t,
        n,
        g,
        { author: E, banned: b, channelId: y } = e,
        O = (0, a.bG)([c.default], () => c.default.getId()),
        A = p.Ay.useName(E),
        v = O === E.id,
        S = (0, a.bG)([u.A, d.A], () => {
            let e = u.A.getChannel(y);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, l.UJ)(e),
                    n = d.A.can(_.xBc.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return d.A.can(_.xBc.SEND_MESSAGES, e);
        });

    function I() {
        let { id: e } = E,
            t = "@".concat(
                p.Ay.getUserTag(E, {
                    decoration: "never",
                }),
            ),
            n = "<@".concat(e, ">");
        f._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, {
            plainText: t,
            rawText: n,
        }),
            null != y && s.A.startTyping(y);
    }
    return (
        v
            ? ((t = h.intl.string(h.t["F/OLvL"])), (g = h.intl.string(h.t.C89OLE)))
            : ((g = h.intl.string(h.t.YVub5y)),
              b
                  ? (t = h.intl.string(h.t["57nBty"]))
                  : null != A && S
                    ? ((t = h.intl.formatToPlainString(h.t["9Akp1s"], {
                          username: A,
                      })),
                      (n = (0, r.jsx)(i.$nd, {
                          onClick: I,
                          text: h.intl.string(h.t.P8tvKG),
                      })))
                    : (t = h.intl.string(h.t["SMJr+a"]))),
        (0, r.jsxs)(o.A, {
            children: [
                (0, r.jsx)(o.A.Header, {
                    text: g,
                }),
                (0, r.jsxs)(o.A.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: m.iH,
                            children: [
                                (0, r.jsx)(o.A.Icon, {
                                    expired: !0,
                                }),
                                (0, r.jsx)(o.A.Info, {
                                    expired: !0,
                                    title: h.intl.string(h.t["Jhx/ud"]),
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
