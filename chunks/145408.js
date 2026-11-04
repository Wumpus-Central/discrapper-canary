var i = e(477900);
if ((e(582128), 221552 == e.j)) var r = e(834730);
var l = e(792996);
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
e.d(
    t,
    {},
    {
        A: function (n) {
            let { muteConfig: t, className: e } = n,
                l = u(t);
            return null != l
                ? (0, i.jsx)(r.E, { variant: "body-xs/normal", color: "text-muted", className: e, children: l })
                : null;
        },
        M: u,
    },
);
