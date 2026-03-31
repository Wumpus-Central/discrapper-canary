n.d(t, { default: () => A });
var i = n(627968),
    l = n(64700),
    s = n(314116),
    a = n(397927),
    r = n(442433),
    o = n(50268),
    c = n(928658),
    d = n(208882),
    u = n(352123),
    h = n(985018);
function A(e) {
    let { entry: t, onSelect: A, closePopout: _, hideEditButton: m = !1 } = e,
        { isEntryAdmin: g, canEdit: p, canRemove: f } = (0, u.A)(t),
        x = (0, o.A)({ id: t.guildId, label: h.intl.string(h.t["94lLD7"]), onSuccess: _ });
    l.useEffect(() => {
        p || f || null != x || (0, r.Z_)();
    });
    let E = () => {
        d.ZM(t.channelId, t.guildId);
    };
    function I() {
        (0, r.Z_)(), _?.();
    }
    return (0, i.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-entry-context",
        onClose: I,
        "aria-label": h.intl.string(h.t.HpQykc),
        onSelect: A,
        children: [
            (0, i.jsxs)(a.rXV, {
                children: [
                    p && !m
                        ? (0, i.jsx)(a.Drp, {
                              id: "update-entry",
                              label: h.intl.string(h.t.XnuOvN),
                              action: function () {
                                  (0, a.mMO)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => (0, i.jsx)(e, { ...n, entry: t });
                                  }),
                                      I();
                              },
                              leadingAccessory: { type: "icon", icon: a.R2l },
                          })
                        : null,
                    f
                        ? (0, i.jsx)(a.Drp, {
                              id: "remove-from-hub",
                              label: h.intl.string(h.t.KUxYWH),
                              action: function () {
                                  (0, s.A)({
                                      title: h.intl.string(h.t.KUxYWH),
                                      subtitle: h.intl.format(h.t["/5y0uV"], { guildName: t.name }),
                                      confirmText: h.intl.string(h.t.N86XcP),
                                      onConfirm: E,
                                  }),
                                      I();
                              },
                              color: "danger",
                              leadingAccessory: { type: "icon", icon: a.ucK },
                          })
                        : null,
                    g
                        ? null
                        : (0, i.jsx)(a.Drp, {
                              id: "report-server-listing",
                              label: h.intl.string(h.t.Aen9eh),
                              action: function () {
                                  null != t && ((0, c.sJ)(t), I());
                              },
                              icon: a.iFK,
                              leadingAccessory: { type: "icon", icon: a.iFK },
                              color: "danger",
                          }),
                ],
            }),
            (0, i.jsx)(a.rXV, { children: x }),
        ],
    });
}
