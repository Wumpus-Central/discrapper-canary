a.d(t, { A: () => u });
var n = a(627968),
    i = a(64700),
    l = a(136722),
    s = a(397927),
    r = a(595738),
    o = a(376092),
    c = a(985018),
    d = a(43766);
let u = function (e) {
    let { application: t } = e,
        a = i.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return o.Q.filter((t) => l.zy(l.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != a && a.length > 0
        ? (0, n.jsxs)("div", {
              className: d.A,
              children: [
                  (0, n.jsx)(s.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: c.intl.string(c.t.runNF8),
                  }),
                  (0, n.jsx)(r.A, {
                      className: d.h,
                      grantedPermissions: a,
                      grantedPermissionsHeader: c.intl.string(c.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
