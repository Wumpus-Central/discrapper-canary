l.d(e, { A: () => G });
var t = l(477900),
    r = l(739187),
    i = l(857250),
    u = l(97483),
    a = l(192308),
    d = l(66834),
    c = l(913122),
    f = l(443063),
    o = l(16236),
    p = l(5180),
    h = l(734057),
    s = l(71393),
    y = l(576705),
    g = l(488926),
    A = l(97587),
    _ = l(652215),
    I = l(375708);
function C(n, e) {
    d.A.batchChannelUpdate(n, e).catch((n) => {
        let e = new c.LG(n).getAnyErrorMessage() ?? I.intl.string(I.t.iufib1);
        (0, r.P)((0, i.o)(e, u.Ck.FAILURE));
    });
}
function G(n, e, r, i) {
    if (0 === i.length) return;
    if ((0, p.ai)(n)) return void (0, o.zN)(i);
    let u = s.A.getGuild(n);
    if (null == u) return;
    let d = (e.parent_id ?? null) !== (r ?? null),
        c = null != r ? h.A.getChannel(r) : null;
    if (d && (!(0, A.JL)(c) || !(0, A.Ay)(c, u))) return;
    let I = i.filter((n) => {
        let { id: e } = n,
            l = h.A.getChannel(e);
        return null != l && (0, A.Ay)((0, A.Fd)(l), u);
    });
    if (0 === I.length) return;
    let G = d ? c : null,
        E = I.find((n) => n.id === e.id);
    null != E &&
    null != G &&
    (function (n, e) {
        if (!y.A.can(_.xBc.MANAGE_ROLES, n) || !y.A.can(_.xBc.MANAGE_ROLES, e)) return !1;
        let l = (0, f.GY)(n);
        if (g.r(n, e, l)) return !1;
        let t = g.r(n, h.A.getChannel(n.parent_id), l);
        return null == n.parent_id || t;
    })(e, G)
        ? (0, a.openModalLazy)(async () => {
              let { default: r } = await l.e("687634").then(l.bind(l, 544169));
              return (l) =>
                  (0, t.jsx)(r, {
                      ...l,
                      channel: e,
                      category: G,
                      onConfirm: () => {
                          ((E.lock_permissions = !0), C(n, I));
                      },
                      onCancel: () => C(n, I),
                  });
          })
        : C(n, I);
}
