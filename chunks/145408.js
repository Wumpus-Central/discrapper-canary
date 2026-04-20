"use strict";
n.d(t, { A: () => o, M: () => c });
var a = n(627968);
n(64700);
var i = n(397927),
    r = n(985018);
function c(e) {
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
    let { muteConfig: t, className: n } = e,
        r = c(t);
    return null != r
        ? (0, a.jsx)(i.Text, { variant: "text-xs/normal", color: "text-muted", className: n, children: r })
        : null;
}
