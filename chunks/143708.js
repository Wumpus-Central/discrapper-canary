n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(144144),
    o = n(955415),
    s = n(665906),
    l = n(314897),
    c = n(592125),
    u = n(496675),
    d = n(585483),
    f = n(51144),
    _ = n(981631),
    p = n(388032),
    h = n(105341);
function m(e) {
    let t,
        n,
        m,
        { author: g, banned: E, channelId: b } = e,
        y = (0, i.e7)([l.default], () => l.default.getId()),
        O = f.ZP.useName(g),
        v = y === g.id,
        I = (0, i.e7)([c.Z, u.Z], () => {
            let e = c.Z.getChannel(b);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, s.xl)(e),
                    n = u.Z.can(_.Plq.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return u.Z.can(_.Plq.SEND_MESSAGES, e);
        });
    function T() {
        let { id: e } = g,
            t = "@".concat(f.ZP.getUserTag(g, { decoration: "never" })),
            n = "<@".concat(e, ">");
        d.S.dispatchToLastSubscribed(_.CkL.INSERT_TEXT, {
            plainText: t,
            rawText: n,
        }),
            null != b && a.Z.startTyping(b);
    }
    return (
        v
            ? ((t = p.intl.string(p.t["F/OLvL"])), (m = p.intl.string(p.t.C89OLE)))
            : ((m = p.intl.string(p.t.YVub5y)),
              E
                  ? (t = p.intl.string(p.t["57nBty"]))
                  : null != O && I
                    ? ((t = p.intl.formatToPlainString(p.t["9Akp1s"], { username: O })),
                      (n = (0, r.jsx)(o.Z.Button, {
                          onClick: T,
                          children: p.intl.string(p.t.P8tvKG),
                      })))
                    : (t = p.intl.string(p.t["SMJr+a"]))),
        (0, r.jsxs)(o.Z, {
            children: [
                (0, r.jsx)(o.Z.Header, { text: m }),
                (0, r.jsxs)(o.Z.Body, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: h.headerLine,
                            children: [
                                (0, r.jsx)(o.Z.Icon, { expired: !0 }),
                                (0, r.jsx)(o.Z.Info, {
                                    expired: !0,
                                    title: p.intl.string(p.t["Jhx/ud"]),
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
