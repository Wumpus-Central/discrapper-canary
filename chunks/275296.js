n(789020);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(630388),
    s = n(402148),
    a = n(981631),
    o = n(388032),
    c = n(54572);
t.Z = (e) => {
    let { role: t } = e;
    return (0, l.yE)(t.flags, a.aO5.IN_PROMPT)
        ? (0, s.F)(t)
            ? (0, i.jsxs)('div', {
                  className: c.notice,
                  children: [
                      (0, i.jsx)(r.CircleWarningIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: c.noticeIconPowerful
                      }),
                      (0, i.jsx)(r.Text, {
                          variant: 'text-sm/normal',
                          children: o.intl.string(o.t.YRbgX1)
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: c.notice,
                  children: [
                      (0, i.jsx)(r.CircleWarningIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: c.noticeIcon
                      }),
                      (0, i.jsx)(r.Text, {
                          variant: 'text-sm/normal',
                          children: o.intl.string(o.t.mqeO2t)
                      })
                  ]
              })
        : null;
};
