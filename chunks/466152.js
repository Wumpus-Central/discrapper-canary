l.d(e, { A: () => y });
var t = l(477900),
    r = l(192308),
    i = l(66834),
    u = l(443063),
    a = l(16236),
    d = l(5180),
    c = l(734057),
    f = l(71393),
    o = l(576705),
    p = l(488926),
    h = l(97587),
    s = l(652215);
function y(n, e, y, g) {
    if (0 === g.length) return;
    if ((0, d.ai)(n)) return void (0, a.zN)(g);
    let A = f.A.getGuild(n);
    if (null == A) return;
    let _ = (e.parent_id ?? null) !== (y ?? null),
        I = null != y ? c.A.getChannel(y) : null;
    if (_ && (!(0, h.JL)(I) || !(0, h.Ay)(I, A))) return;
    let C = g.filter((n) => {
        let { id: e } = n,
            l = c.A.getChannel(e);
        return null != l && (0, h.Ay)((0, h.Fd)(l), A);
    });
    if (0 === C.length) return;
    let G = _ ? I : null,
        v = C.find((n) => n.id === e.id);
    null != v &&
    null != G &&
    (function (n, e) {
        if (!o.A.can(s.xBc.MANAGE_ROLES, n) || !o.A.can(s.xBc.MANAGE_ROLES, e)) return !1;
        let l = (0, u.GY)(n);
        if (p.r(n, e, l)) return !1;
        let t = p.r(n, c.A.getChannel(n.parent_id), l);
        return null == n.parent_id || t;
    })(e, G)
        ? (0, r.openModalLazy)(async () => {
              let { default: r } = await l.e("687634").then(l.bind(l, 544169));
              return (l) =>
                  (0, t.jsx)(r, {
                      ...l,
                      channel: e,
                      category: G,
                      onConfirm: () => {
                          ((v.lock_permissions = !0), i.A.batchChannelUpdate(n, C));
                      },
                      onCancel: () => i.A.batchChannelUpdate(n, C),
                  });
          })
        : i.A.batchChannelUpdate(n, C);
}
