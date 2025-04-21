n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(144144),
    a = n(955415),
    o = n(314897),
    s = n(944486),
    c = n(585483),
    u = n(51144),
    d = n(981631),
    p = n(388032),
    m = n(273254);
function f(e) {
    let t,
        n,
        f,
        { author: h, banned: g } = e,
        _ = (0, i.e7)([o.default], () => o.default.getId()),
        b = (0, i.e7)([s.Z], () => s.Z.getChannelId()),
        x = u.ZP.useName(h);
    return (
        _ === h.id
            ? ((t = p.intl.string(p.t['F/OLvL'])), (f = p.intl.string(p.t.C89OLC)))
            : ((f = p.intl.string(p.t['YVub5+'])),
              g
                  ? (t = p.intl.string(p.t['57nBt7']))
                  : null != x
                    ? ((t = p.intl.formatToPlainString(p.t['9Akp1t'], { username: x })),
                      (n = (0, r.jsx)(a.Z.Button, {
                          onClick: function () {
                              let { id: e } = h,
                                  t = '@'.concat(u.ZP.getUserTag(h, { decoration: 'never' }));
                              c.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                                  plainText: t,
                                  rawText: '<@'.concat(e, '>')
                              }),
                                  null != b && l.Z.startTyping(b);
                          },
                          children: p.intl.string(p.t.P8tvKC)
                      })))
                    : (t = p.intl.string(p.t['SMJr+f']))),
        (0, r.jsxs)(a.Z, {
            children: [
                (0, r.jsx)(a.Z.Header, { text: f }),
                (0, r.jsxs)(a.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: m.headerLine,
                            children: [
                                (0, r.jsx)(a.Z.Icon, { expired: !0 }),
                                (0, r.jsx)(a.Z.Info, {
                                    expired: !0,
                                    title: p.intl.string(p.t['Jhx/ub']),
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
