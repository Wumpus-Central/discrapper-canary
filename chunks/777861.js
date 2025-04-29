n.d(t, {
    U: () => a,
    Z: () => s
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(388032);
function a(e) {
    return null == e || null == e.end_time
        ? null
        : o.intl.formatToPlainString(o.t.j7h4AA, {
              endTime: new Date(e.end_time).toLocaleString(o.intl.currentLocale, {
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit'
              })
          });
}
function s(e) {
    let { muteConfig: t, className: n } = e,
        o = a(t);
    return null != o
        ? (0, r.jsx)(i.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: n,
              children: o
          })
        : null;
}
