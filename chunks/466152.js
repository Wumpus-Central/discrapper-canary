l.d(e, { A: () => I });
var t = l(477900),
    r = l(376357),
    i = l(192308),
    u = l(66834),
    a = l(913122),
    d = l(443063),
    c = l(16236),
    f = l(5180),
    o = l(734057),
    p = l(71393),
    h = l(576705),
    s = l(488926),
    y = l(97587),
    g = l(652215),
    A = l(660183);
function _(n, e) {
    u.A.batchChannelUpdate(n, e).catch((n) => {
        let e = new a.LG(n).getAnyErrorMessage() ?? A.intl.string(A.t.iufib1);
        (0, r.P0)((0, r.ox)(e, r.Ck.FAILURE));
    });
}
function I(n, e, r, u) {
    if (0 === u.length) return;
    if ((0, f.ai)(n)) return void (0, c.zN)(u);
    let a = p.A.getGuild(n);
    if (null == a) return;
    let A = (e.parent_id ?? null) !== (r ?? null),
        I = null != r ? o.A.getChannel(r) : null;
    if (A && (!(0, y.JL)(I) || !(0, y.Ay)(I, a))) return;
    let C = u.filter((n) => {
        let { id: e } = n,
            l = o.A.getChannel(e);
        return null != l && (0, y.Ay)((0, y.Fd)(l), a);
    });
    if (0 === C.length) return;
    let G = A ? I : null,
        E = C.find((n) => n.id === e.id);
    null != E &&
    null != G &&
    (function (n, e) {
        if (!h.A.can(g.xBc.MANAGE_ROLES, n) || !h.A.can(g.xBc.MANAGE_ROLES, e)) return !1;
        let l = (0, d.GY)(n);
        if (s.r(n, e, l)) return !1;
        let t = s.r(n, o.A.getChannel(n.parent_id), l);
        return null == n.parent_id || t;
    })(e, G)
        ? (0, i.openModalLazy)(async () => {
              let { default: r } = await l.e("687634").then(l.bind(l, 544169));
              return (l) =>
                  (0, t.jsx)(r, {
                      ...l,
                      channel: e,
                      category: G,
                      onConfirm: () => {
                          ((E.lock_permissions = !0), _(n, C));
                      },
                      onCancel: () => _(n, C),
                  });
          })
        : _(n, C);
}
