n.d(e, { default: () => D });
var r = n(627968),
    i = n(64700),
    c = n(314116),
    a = n(192308),
    l = n(550079),
    o = n(477782),
    E = n(22231),
    R = n(241326),
    s = n(138134),
    _ = n(442433),
    d = n(50268),
    h = n(928658),
    u = n(208882),
    C = n(352123),
    I = n(985018);
function D(t) {
    let { entry: e, onSelect: D, closePopout: A, hideEditButton: y = !1 } = t,
        { isEntryAdmin: T, canEdit: p, canRemove: S } = (0, C.A)(e),
        Y = (0, d.A)({ id: e.guildId, label: I.intl.string(I.t["94lLD7"]), onSuccess: A });
    i.useEffect(() => {
        p || S || null != Y || (0, _.Z_)();
    });
    let g = () => {
        u.ZM(e.channelId, e.guildId);
    };
    function N() {
        (0, _.Z_)(), A?.();
    }
    return (0, r.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "guild-entry-context",
        onClose: N,
        "aria-label": I.intl.string(I.t.HpQykc),
        onSelect: D,
        children: [
            (0, r.jsxs)(o.rX, {
                children: [
                    p && !y
                        ? (0, r.jsx)(o.Dr, {
                              id: "update-entry",
                              label: I.intl.string(I.t.XnuOvN),
                              action: function () {
                                  (0, a.openModalLazy)(async () => {
                                      let { default: t } = await Promise.all([n.e("13754"), n.e("88869")]).then(
                                          n.bind(n, 201700),
                                      );
                                      return (n) => (0, r.jsx)(t, { ...n, entry: e });
                                  }),
                                      N();
                              },
                              leadingAccessory: { type: "icon", icon: E.R },
                          })
                        : null,
                    S
                        ? (0, r.jsx)(o.Dr, {
                              id: "remove-from-hub",
                              label: I.intl.string(I.t.KUxYWH),
                              action: function () {
                                  (0, c.A)({
                                      title: I.intl.string(I.t.KUxYWH),
                                      subtitle: I.intl.format(I.t["/5y0uV"], { guildName: e.name }),
                                      confirmText: I.intl.string(I.t.N86XcP),
                                      onConfirm: g,
                                  }),
                                      N();
                              },
                              color: "danger",
                              leadingAccessory: { type: "icon", icon: R.u },
                          })
                        : null,
                    T
                        ? null
                        : (0, r.jsx)(o.Dr, {
                              id: "report-server-listing",
                              label: I.intl.string(I.t.Aen9eh),
                              action: function () {
                                  null != e && ((0, h.sJ)(e), N());
                              },
                              icon: s.i,
                              leadingAccessory: { type: "icon", icon: s.i },
                              color: "danger",
                          }),
                ],
            }),
            (0, r.jsx)(o.rX, { children: Y }),
        ],
    });
}
