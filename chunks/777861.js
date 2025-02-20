n.d(t, {
    U: () => a,
    Z: () => s
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(388032);
function a(e) {
    return null == e || null == e.end_time
        ? null
        : o.NW.formatToPlainString(o.t.j7h4AA, {
              endTime: new Date(e.end_time).toLocaleString(o.NW.currentLocale, {
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
