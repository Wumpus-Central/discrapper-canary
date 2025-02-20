n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(144144),
    o = n(955415),
    l = n(314897),
    s = n(944486),
    c = n(585483),
    d = n(51144),
    u = n(981631),
    p = n(388032),
    m = n(217480);
function f(e) {
    let t,
        n,
        f,
        { author: h, banned: g } = e,
        _ = (0, i.e7)([l.default], () => l.default.getId()),
        b = (0, i.e7)([s.Z], () => s.Z.getChannelId()),
        v = d.ZP.useName(h);
    return (
        _ === h.id
            ? ((t = p.NW.string(p.t['F/OLvL'])), (f = p.NW.string(p.t.C89OLC)))
            : ((f = p.NW.string(p.t['YVub5+'])),
              g
                  ? (t = p.NW.string(p.t['57nBt7']))
                  : null != v
                    ? ((t = p.NW.formatToPlainString(p.t['9Akp1t'], { username: v })),
                      (n = (0, r.jsx)(o.Z.Button, {
                          onClick: function () {
                              let { id: e } = h,
                                  t = '@'.concat(d.ZP.getUserTag(h, { decoration: 'never' }));
                              c.S.dispatchToLastSubscribed(u.CkL.INSERT_TEXT, {
                                  plainText: t,
                                  rawText: '<@'.concat(e, '>')
                              }),
                                  null != b && a.Z.startTyping(b);
                          },
                          children: p.NW.string(p.t.P8tvKC)
                      })))
                    : (t = p.NW.string(p.t['SMJr+f']))),
        (0, r.jsxs)(o.Z, {
            children: [
                (0, r.jsx)(o.Z.Header, { text: f }),
                (0, r.jsxs)(o.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: m.headerLine,
                            children: [
                                (0, r.jsx)(o.Z.Icon, { expired: !0 }),
                                (0, r.jsx)(o.Z.Info, {
                                    expired: !0,
                                    title: p.NW.string(p.t['Jhx/ub']),
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
