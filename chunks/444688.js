i.d(t, { default: () => f });
var n = i(200651);
i(192379);
var s = i(442837),
    r = i(481060),
    l = i(600164),
    o = i(418632),
    a = i(594174),
    d = i(388032),
    c = i(973844);
function u(e) {
    let { onClose: t } = e,
        l = (0, s.e7)([a.default], () => a.default.getCurrentUser());
    function c() {
        null == t || t();
    }
    function u() {
        c(),
            (0, r.ZDy)(async () => {
                let { default: e } = await Promise.all([i.e('9343'), i.e('44992')]).then(i.bind(i, 642298));
                return (t) => (0, n.jsx)(e, { ...t });
            });
    }
    return (null == l ? void 0 : l.email) == null
        ? (0, n.jsx)(r.zxk, {
              onClick: u,
              color: r.zxk.Colors.BRAND,
              look: r.zxk.Looks.FILLED,
              children: d.intl.string(d.t.ydw5nZ)
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(r.zxk, {
                      onClick: u,
                      color: r.zxk.Colors.PRIMARY,
                      look: r.zxk.Looks.LINK,
                      children: d.intl.string(d.t.Vm8akJ)
                  }),
                  (0, n.jsx)(o.Z, {
                      color: r.zxk.Colors.BRAND,
                      onClick: c
                  })
              ]
          });
}
let f = function (e) {
    let { onClose: t, transitionState: i } = e;
    return (0, n.jsxs)(r.Y0X, {
        transitionState: i,
        children: [
            (0, n.jsx)(r.xBx, {
                children: (0, n.jsx)(r.vwX, {
                    tag: r.RB0.H4,
                    children: d.intl.string(d.t.UZLrY2)
                })
            }),
            (0, n.jsxs)(r.hzk, {
                children: [
                    (0, n.jsx)('div', { className: c.imageUnverified }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        className: c.message,
                        children: d.intl.string(d.t['0LgOKC'])
                    })
                ]
            }),
            (0, n.jsx)(r.mzw, {
                children: (0, n.jsx)(l.Z, {
                    justify: l.Z.Justify.END,
                    children: (0, n.jsx)(u, { onClose: t })
                })
            })
        ]
    });
};
