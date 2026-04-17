n.d(t, { A: () => o, M: () => a });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(985018);
function a(e) {
    return null == e || null == e.end_time
        ? null
        : l.intl.formatToPlainString(l.t.j7h4AJ, {
              endTime: new Date(e.end_time).toLocaleString(l.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
              }),
          });
}
function o(e) {
    let { muteConfig: t, className: n } = e,
        l = a(t);
    return null != l
        ? (0, r.jsx)(i.Text, { variant: "text-xs/normal", color: "text-muted", className: n, children: l })
        : null;
}
