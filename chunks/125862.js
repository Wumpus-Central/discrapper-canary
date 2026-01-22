n.d(t, { A: () => u });
var l = n(627968),
    a = n(64700),
    r = n(136722),
    i = n(397927),
    s = n(595738),
    c = n(376092),
    o = n(985018),
    d = n(437504);
let u = function (e) {
    var t;
    let { application: n } = e,
        u = a.useMemo(() => {
            var e;
            let t = null == n || null == (e = n.install_params) ? void 0 : e.permissions;
            if (null != t) return c.Q.filter((e) => r.zy(r.iu(t), e));
        }, [null == n || null == (t = n.install_params) ? void 0 : t.permissions]);
    return null != u && u.length > 0
        ? (0, l.jsxs)("div", {
              className: d.A,
              children: [
                  (0, l.jsx)(i.Heading, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: o.intl.string(o.t.runNF8),
                  }),
                  (0, l.jsx)(s.A, {
                      className: d.h,
                      grantedPermissions: u,
                      grantedPermissionsHeader: o.intl.string(o.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
