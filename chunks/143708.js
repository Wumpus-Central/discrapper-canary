n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(144144),
    r = n(955415),
    s = n(314897),
    o = n(944486),
    c = n(585483),
    d = n(51144),
    u = n(981631),
    m = n(388032),
    _ = n(375798);
function h(e) {
    let t,
        n,
        h,
        { author: p, banned: g } = e,
        f = (0, l.e7)([s.default], () => s.default.getId()),
        x = (0, l.e7)([o.Z], () => o.Z.getChannelId()),
        C = d.ZP.useName(p);
    return (
        f === p.id
            ? ((t = m.intl.string(m.t['F/OLvL'])), (h = m.intl.string(m.t.C89OLC)))
            : ((h = m.intl.string(m.t['YVub5+'])),
              g
                  ? (t = m.intl.string(m.t['57nBt7']))
                  : null != C
                    ? ((t = m.intl.formatToPlainString(m.t['9Akp1t'], { username: C })),
                      (n = (0, i.jsx)(r.Z.Button, {
                          onClick: function () {
                              let { id: e } = p,
                                  t = '@'.concat(d.ZP.getUserTag(p, { decoration: 'never' }));
                              c.S.dispatchToLastSubscribed(u.CkL.INSERT_TEXT, {
                                  plainText: t,
                                  rawText: '<@'.concat(e, '>')
                              }),
                                  null != x && a.Z.startTyping(x);
                          },
                          children: m.intl.string(m.t.P8tvKC)
                      })))
                    : (t = m.intl.string(m.t['SMJr+f']))),
        (0, i.jsxs)(r.Z, {
            children: [
                (0, i.jsx)(r.Z.Header, { text: h }),
                (0, i.jsxs)(r.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.headerLine,
                            children: [
                                (0, i.jsx)(r.Z.Icon, { expired: !0 }),
                                (0, i.jsx)(r.Z.Info, {
                                    expired: !0,
                                    title: m.intl.string(m.t['Jhx/ub']),
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
