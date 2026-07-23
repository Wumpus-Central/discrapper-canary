"use strict";
n.d(t, { A: () => l, M: () => s });
var i = n(627968);
n(64700);
var r = n(834730),
    a = n(375708);
function s(e) {
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
function l(e) {
    let { muteConfig: t, className: n } = e,
        a = s(t);
    return null != a
        ? (0, i.jsx)(r.E, { variant: "text-xs/normal", color: "text-muted", className: n, children: a })
        : null;
}
