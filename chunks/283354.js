n.d(t, { default: () => f });
var i = n(627968),
    l = n(64700),
    s = n(314116),
    a = n(192308),
    r = n(861672),
    o = n(477782),
    d = n(22231),
    c = n(241326),
    u = n(138134),
    h = n(442433),
    A = n(50268),
    _ = n(928658),
    m = n(208882),
    g = n(352123),
    p = n(985018);
function f(e) {
    let { entry: t, onSelect: f, closePopout: E, hideEditButton: x = !1 } = e,
        { isEntryAdmin: I, canEdit: C, canRemove: b } = (0, g.A)(t),
        N = (0, A.A)({ id: t.guildId, label: p.intl.string(p.t["94lLD7"]), onSuccess: E });
    l.useEffect(() => {
        C || b || null != N || (0, h.Z_)();
    });
    let S = () => {
        m.ZM(t.channelId, t.guildId);
    };
    function v() {
        (0, h.Z_)(), E?.();
    }
    return (0, i.jsxs)(r.W, {
        "data-menu-migrated": !0,
        navId: "guild-entry-context",
        onClose: v,
        "aria-label": p.intl.string(p.t.HpQykc),
        onSelect: f,
        children: [
            (0, i.jsxs)(o.rX, {
                children: [
                    C && !x
                        ? (0, i.jsx)(o.Dr, {
                              id: "update-entry",
                              label: p.intl.string(p.t.XnuOvN),
                              action: function () {
                                  (0, a.openModalLazy)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, i.jsx)(e, { ...n, entry: t });
                                  }),
                                      v();
                              },
                              leadingAccessory: { type: "icon", icon: d.R },
                          })
                        : null,
                    b
                        ? (0, i.jsx)(o.Dr, {
                              id: "remove-from-hub",
                              label: p.intl.string(p.t.KUxYWH),
                              action: function () {
                                  (0, s.A)({
                                      title: p.intl.string(p.t.KUxYWH),
                                      subtitle: p.intl.format(p.t["/5y0uV"], { guildName: t.name }),
                                      confirmText: p.intl.string(p.t.N86XcP),
                                      onConfirm: S,
                                  }),
                                      v();
                              },
                              color: "danger",
                              leadingAccessory: { type: "icon", icon: c.u },
                          })
                        : null,
                    I
                        ? null
                        : (0, i.jsx)(o.Dr, {
                              id: "report-server-listing",
                              label: p.intl.string(p.t.Aen9eh),
                              action: function () {
                                  null != t && ((0, _.sJ)(t), v());
                              },
                              icon: u.i,
                              leadingAccessory: { type: "icon", icon: u.i },
                              color: "danger",
                          }),
                ],
            }),
            (0, i.jsx)(o.rX, { children: N }),
        ],
    });
}
