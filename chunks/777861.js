r.d(n, {
    U: function () {
        return s;
    },
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(388032);
function s(e) {
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
function l(e) {
    let { muteConfig: n, className: r } = e,
        o = s(n);
    return null != o
        ? (0, i.jsx)(a.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: r,
              children: o
          })
        : null;
}
