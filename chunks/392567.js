n.d(t, {
    A: () => s,
    M: () => a,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(985018);
function a(e) {
    return null == e || null == e.end_time
        ? null
        : i.intl.formatToPlainString(i.t.j7h4AJ, {
              endTime: new Date(e.end_time).toLocaleString(i.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
              }),
          });
}
function s(e) {
    let { muteConfig: t, className: n } = e,
        i = a(t);
    return null != i
        ? (0, r.jsx)(l.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: i,
          })
        : null;
}
