n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(955415),
    s = n(846587),
    o = n(409059),
    c = n(58346),
    d = n(388032),
    u = n(239274),
    m = n(658412);
function h(e) {
    var t;
    let { code: h } = e,
        _ = (0, l.e7)([o.Z], () => o.Z.getGuildTemplate(h));
    if (null == _ || _.state === c.Rj.RESOLVING)
        return (0, i.jsxs)(r.Z, {
            children: [(0, i.jsx)(r.Z.Header, { text: d.intl.string(d.t.Xj87YW) }), (0, i.jsx)(r.Z.Body, { resolving: !0 })]
        });
    if (_.state === c.Rj.EXPIRED)
        return (0, i.jsxs)(r.Z, {
            children: [
                (0, i.jsx)(r.Z.Header, { text: d.intl.string(d.t.C7ZRNz) }),
                (0, i.jsxs)(r.Z.Body, {
                    children: [
                        (0, i.jsx)(r.Z.Icon, { expired: !0 }),
                        (0, i.jsx)(r.Z.Info, {
                            expired: !0,
                            title: d.intl.string(d.t.A6MwXF)
                        })
                    ]
                })
            ]
        });
    let p = __OVERLAY__
        ? (0, i.jsx)(r.Z.Button, {
              isDisabled: !0,
              color: r.Z.Button.Colors.PRIMARY,
              children: d.intl.string(d.t.W7NTWl)
          })
        : (0, i.jsx)(r.Z.Button, {
              onClick: () => {
                  (0, a.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('10778'), n.e('22769')]).then(n.bind(n, 766775));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              guildTemplate: _
                          });
                  });
              },
              submitting: _.state === c.Rj.ACCEPTING,
              color: r.Z.Button.Colors.GREEN,
              children: d.intl.string(d.t['a3Gl+f'])
          });
    return (0, i.jsxs)(r.Z, {
        children: [
            (0, i.jsx)(r.Z.Header, { text: d.intl.string(d.t.kAvFkJ) }),
            (0, i.jsxs)(r.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: m.headerLine,
                        children: [
                            (0, i.jsx)(s.Z, { className: u.icon }),
                            (0, i.jsx)(r.Z.Info, {
                                title: _.name,
                                children: d.intl.format(d.t.cGXXHB, { usageCount: String(null !== (t = _.usageCount) && void 0 !== t ? t : 0) })
                            })
                        ]
                    }),
                    p
                ]
            })
        ]
    });
}
