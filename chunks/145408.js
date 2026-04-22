"use strict";
n.d(t, { A: () => s, M: () => l });
var i = n(627968);
if ((n(64700), 21552 == n.j)) var r = n(834730);
var a = n(985018);
function l(e) {
    return null == e || null == e.end_time
        ? null
        : a.intl.formatToPlainString(a.t.j7h4AJ, {
              endTime: new Date(e.end_time).toLocaleString(a.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
              }),
          });
}
function s(e) {
    let { muteConfig: t, className: n } = e,
        a = l(t);
    return null != a
        ? (0, i.jsx)(r.E, { variant: "text-xs/normal", color: "text-muted", className: n, children: a })
        : null;
}
