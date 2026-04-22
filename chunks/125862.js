a.d(t, { A: () => u });
var n = a(627968),
    l = a(64700),
    i = a(136722),
    s = a(534514),
    r = a(595738),
    o = a(376092),
    c = a(985018),
    d = a(925317);
let u = function (e) {
    let { application: t } = e,
        a = l.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return o.Q.filter((t) => i.zy(i.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != a && a.length > 0
        ? (0, n.jsxs)("div", {
              className: d.A,
              children: [
                  (0, n.jsx)(s.D, {
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
