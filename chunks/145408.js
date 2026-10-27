e.d(t, { A: () => a, M: () => u });
var i = e(477900);
if ((e(582128), 221552 == e.j)) var r = e(834730);
var l = e(105292);
function u(n) {
    return null == n || null == n.end_time
        ? null
        : l.intl.formatToPlainString(l.t.j7h4AJ, {
              endTime: new Date(n.end_time).toLocaleString(l.intl.currentLocale, {
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
              }),
          });
}
function a(n) {
    let { muteConfig: t, className: e } = n,
        l = u(t);
    return null != l
        ? (0, i.jsx)(r.E, { variant: "text-xs/normal", color: "text-muted", className: e, children: l })
        : null;
}
