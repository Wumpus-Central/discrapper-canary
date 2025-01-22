n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(144144),
    a = n(955415),
    o = n(314897),
    s = n(944486),
    c = n(585483),
    u = n(51144),
    d = n(981631),
    m = n(388032),
    h = n(658412);
function f(e) {
    let t,
        n,
        f,
        { author: p, banned: _ } = e,
        g = (0, r.e7)([o.default], () => o.default.getId()),
        E = (0, r.e7)([s.Z], () => s.Z.getChannelId()),
        C = u.ZP.useName(p),
        I = g === p.id;
    return (
        I
            ? ((t = m.intl.string(m.t['F/OLvL'])), (f = m.intl.string(m.t.C89OLC)))
            : ((f = m.intl.string(m.t['YVub5+'])),
              _
                  ? (t = m.intl.string(m.t['57nBt7']))
                  : null != C
                    ? ((t = m.intl.formatToPlainString(m.t['9Akp1t'], { username: C })),
                      (n = (0, i.jsx)(a.Z.Button, {
                          onClick: function () {
                              let { id: e } = p,
                                  t = '@'.concat(u.ZP.getUserTag(p, { decoration: 'never' }));
                              c.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                                  plainText: t,
                                  rawText: '<@'.concat(e, '>')
                              }),
                                  null != E && l.Z.startTyping(E);
                          },
                          children: m.intl.string(m.t.P8tvKC)
                      })))
                    : (t = m.intl.string(m.t['SMJr+f']))),
        (0, i.jsxs)(a.Z, {
            children: [
                (0, i.jsx)(a.Z.Header, { text: f }),
                (0, i.jsxs)(a.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.headerLine,
                            children: [
                                (0, i.jsx)(a.Z.Icon, { expired: !0 }),
                                (0, i.jsx)(a.Z.Info, {
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
