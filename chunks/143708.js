n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(442837),
    o = n(144144),
    s = n(955415),
    l = n(665906),
    c = n(314897),
    u = n(592125),
    d = n(496675),
    f = n(585483),
    _ = n(51144),
    p = n(981631),
    h = n(388032),
    m = n(739236);
function g(e) {
    let t,
        n,
        g,
        { author: E, banned: b, channelId: y } = e,
        O = (0, a.e7)([c.default], () => c.default.getId()),
        v = _.ZP.useName(E),
        I = O === E.id,
        T = (0, a.e7)([u.Z, d.Z], () => {
            let e = u.Z.getChannel(y);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, l.xl)(e),
                    n = d.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return d.Z.can(p.Plq.SEND_MESSAGES, e);
        });
    function S() {
        let { id: e } = E,
            t = "@".concat(_.ZP.getUserTag(E, { decoration: "never" })),
            n = "<@".concat(e, ">");
        f.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT, {
            plainText: t,
            rawText: n,
        }),
            null != y && o.Z.startTyping(y);
    }
    return (
        I
            ? ((t = h.intl.string(h.t["F/OLvL"])), (g = h.intl.string(h.t.C89OLE)))
            : ((g = h.intl.string(h.t.YVub5y)),
              b
                  ? (t = h.intl.string(h.t["57nBty"]))
                  : null != v && T
                    ? ((t = h.intl.formatToPlainString(h.t["9Akp1s"], { username: v })),
                      (n = (0, r.jsx)(i.zxk, {
                          onClick: S,
                          text: h.intl.string(h.t.P8tvKG),
                      })))
                    : (t = h.intl.string(h.t["SMJr+a"]))),
        (0, r.jsxs)(s.Z, {
            children: [
                (0, r.jsx)(s.Z.Header, { text: g }),
                (0, r.jsxs)(s.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: m.headerLine,
                            children: [
                                (0, r.jsx)(s.Z.Icon, { expired: !0 }),
                                (0, r.jsx)(s.Z.Info, {
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
