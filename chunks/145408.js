a.d(t, { A: () => o, M: () => l });
var n = a(627968);
a(64700);
var i = a(397927),
    r = a(985018);
function l(e) {
    return null == e || null == e.end_time
        ? null
        : r.intl.formatToPlainString(r.t.j7h4AJ, {
              endTime: new Date(e.end_time).toLocaleString(r.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
              }),
          });
}
function o(e) {
    let { muteConfig: t, className: a } = e,
        r = l(t);
    return null != r
        ? (0, n.jsx)(i.Text, { variant: "text-xs/normal", color: "text-muted", className: a, children: r })
        : null;
}
