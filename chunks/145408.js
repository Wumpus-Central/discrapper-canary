"use strict";
n.d(t, { A: () => o, M: () => a });
var i = n(627968);
n(64700);
var r = n(834730),
    s = n(375708);
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
function o(e) {
    let { muteConfig: t, className: n } = e,
        s = a(t);
    return null != s
        ? (0, i.jsx)(r.E, { variant: "text-xs/normal", color: "text-muted", className: n, children: s })
        : null;
}
