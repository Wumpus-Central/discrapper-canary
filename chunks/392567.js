n.d(t, { A: () => r, M: () => a });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(985018);
function a(e) {
    return null == e || null == e.end_time
        ? null
        : s.intl.formatToPlainString(s.t.j7h4AJ, {
              endTime: new Date(e.end_time).toLocaleString(s.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
              }),
          });
}
function r(e) {
    let { muteConfig: t, className: n } = e,
        s = a(t);
    return null != s
        ? (0, i.jsx)(l.Text, { variant: "text-xs/normal", color: "text-muted", className: n, children: s })
        : null;
}
