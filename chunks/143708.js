n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(144144),
    a = n(955415),
    o = n(665906),
    s = n(314897),
    c = n(592125),
    u = n(496675),
    d = n(585483),
    p = n(51144),
    m = n(981631),
    f = n(388032),
    h = n(273254);
function g(e) {
    let t,
        n,
        g,
        { author: _, banned: b, channelId: x } = e,
        E = (0, i.e7)([s.default], () => s.default.getId()),
        y = p.ZP.useName(_),
        v = E === _.id,
        C = (0, i.e7)([c.Z, u.Z], () => {
            let e = c.Z.getChannel(x);
            if (null == e) return !1;
            if (e.isPrivate()) return !0;
            if (e.isThread()) {
                let t = (0, o.xl)(e),
                    n = u.Z.can(m.Plq.SEND_MESSAGES_IN_THREADS, e);
                return !t && n;
            }
            return u.Z.can(m.Plq.SEND_MESSAGES, e);
        });
    return (
        v
            ? ((t = f.intl.string(f.t['F/OLvL'])), (g = f.intl.string(f.t.C89OLC)))
            : ((g = f.intl.string(f.t['YVub5+'])),
              b
                  ? (t = f.intl.string(f.t['57nBt7']))
                  : null != y && C
                    ? ((t = f.intl.formatToPlainString(f.t['9Akp1t'], { username: y })),
                      (n = (0, r.jsx)(a.Z.Button, {
                          onClick: function () {
                              let { id: e } = _,
                                  t = '@'.concat(p.ZP.getUserTag(_, { decoration: 'never' }));
                              d.S.dispatchToLastSubscribed(m.CkL.INSERT_TEXT, {
                                  plainText: t,
                                  rawText: '<@'.concat(e, '>')
                              }),
                                  null != x && l.Z.startTyping(x);
                          },
                          children: f.intl.string(f.t.P8tvKC)
                      })))
                    : (t = f.intl.string(f.t['SMJr+f']))),
        (0, r.jsxs)(a.Z, {
            children: [
                (0, r.jsx)(a.Z.Header, { text: g }),
                (0, r.jsxs)(a.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.headerLine,
                            children: [
                                (0, r.jsx)(a.Z.Icon, { expired: !0 }),
                                (0, r.jsx)(a.Z.Info, {
                                    expired: !0,
                                    title: f.intl.string(f.t['Jhx/ub']),
                                    children: t
                                })
                            ]
                        }),
                        n
                    ]
                })
            ]
        })
    );
}
