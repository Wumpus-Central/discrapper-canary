"use strict";
n.d(t, { A: () => a, M: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(985018);
function r(e) {
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
function a(e) {
    let { muteConfig: t, className: n } = e,
        l = r(t);
    return null != l
        ? (0, i.jsx)(s.Text, { variant: "text-xs/normal", color: "text-muted", className: n, children: l })
        : null;
}
