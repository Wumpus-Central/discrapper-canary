n.d(t, {
    Z: () => E,
    _: () => N,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(749210),
    c = n(852860),
    d = n(493773),
    u = n(345162),
    g = n(650774),
    m = n(823379),
    p = n(434404),
    f = n(999382),
    h = n(84058),
    x = n(103576),
    b = n(130341),
    j = n(853813),
    _ = n(163249),
    v = n(150689),
    C = n(203377),
    O = n(981631);
function y(e) {
    p.Z.selectRole(e);
}
let N = () => {
    let { guild: e } = (0, a.cj)([f.Z], () => f.Z.getProps()),
        t = (0, a.e7)([x.Z], () => x.Z.formState),
        n = (0, a.e7)([x.Z], () => x.Z.errorMessage);
    return (0, r.jsx)(c.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = x.Z.editedRoleIds.map((e) => x.Z.getRole(e)).filter(m.lm),
                r = x.Z.getSortDeltas(),
                i = null,
                l = null;
            x.Z.hasRoleConfigurationChanges &&
                ((l = x.Z.editedRoleIdsForConfigurations), (i = x.Z.getEditedRoleConnectionConfigurationsMap())),
                (0, h.Gf)(t, n, r, l, i);
        },
        submitting: t === O.QZA.SUBMITTING,
        onReset: h.S1,
    });
};
function E(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, a.cj)(
            [x.Z],
            () => ({
                guild: x.Z.guild,
                roles: x.Z.roles,
            }),
            [],
        );
    s()(null != n, "Guild cannot be null here");
    let c = i.useMemo(() => l.find((e) => (0, u.fI)(e)), [l]);
    s()(null != c, "Guild must have an everyone role");
    let m = i.useMemo(() => l.filter((e) => !(0, u.fI)(e)), [l]),
        p = (0, a.e7)([f.Z], () => f.Z.getSelectedRoleId()),
        [h, O] = i.useState(m.length > 0);
    i.useEffect(() => {
        O(h || m.length > 0);
    }, [h, m.length]),
        (0, d.ZP)(() => {
            let e = g.Z.getMemberCount(n.id);
            null != e && e <= b.cm && o.Z.requestMembers(n.id, "", 0, !1);
        });
    let [N, E] = i.useState(C.ZI.DISPLAY);
    return (i.useEffect(() => {
        null == p && E(C.ZI.DISPLAY);
    }, [p]),
    null != p)
        ? (0, r.jsx)(j.Z, {
              editRoleId: p,
              setEditRoleId: y,
              selectedSection: N,
              setSelectedSection: E,
          })
        : h
          ? (0, r.jsx)(v.Z, {
                setEditRoleId: y,
                guild: n,
                everyoneRole: c,
                otherRoles: m,
                setSelectedSection: E,
                refToScroller: t,
            })
          : (0, r.jsx)(_.Z, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: y,
            });
}
