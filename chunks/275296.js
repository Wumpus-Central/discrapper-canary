n.d(t, { Z: () => u }), n(997841);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(630388),
    s = n(402148),
    a = n(981631),
    o = n(388032),
    c = n(477038);
let u = (e) => {
    let { role: t } = e;
    return (0, l.yE)(t.flags, a.aO5.IN_PROMPT)
        ? (0, s.F)(t)
            ? (0, r.jsxs)('div', {
                  className: c.notice,
                  children: [
                      (0, r.jsx)(i.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: c.noticeIconPowerful
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: 'text-sm/normal',
                          children: o.intl.string(o.t.YRbgX1)
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: c.notice,
                  children: [
                      (0, r.jsx)(i.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: c.noticeIcon
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: 'text-sm/normal',
                          children: o.intl.string(o.t.mqeO2t)
                      })
                  ]
              })
        : null;
};
