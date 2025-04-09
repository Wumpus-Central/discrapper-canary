n.d(t, {
    Z: () => I,
    _: () => C
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(749210),
    c = n(852860),
    d = n(493773),
    u = n(605436),
    m = n(650774),
    g = n(823379),
    p = n(434404),
    f = n(764260),
    h = n(946724),
    b = n(999382),
    x = n(130341),
    j = n(853813),
    N = n(163249),
    v = n(150689),
    _ = n(203377),
    y = n(981631);
function O(e) {
    p.Z.selectRole(e);
}
let C = () => {
    let { guild: e } = (0, l.cj)([b.Z], () => b.Z.getProps()),
        t = (0, l.e7)([h.Z], () => h.Z.formState),
        n = (0, l.e7)([h.Z], () => h.Z.errorMessage);
    return (0, r.jsx)(c.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = h.Z.editedRoleIds.map((e) => h.Z.getRole(e)).filter(g.lm),
                r = h.Z.getSortDeltas(),
                i = null,
                s = null;
            h.Z.hasRoleConfigurationChanges && ((s = h.Z.editedRoleIdsForConfigurations), (i = h.Z.getEditedRoleConnectionConfigurationsMap())), (0, f.Gf)(t, n, r, s, i);
        },
        submitting: t === y.QZA.SUBMITTING,
        onReset: f.S1
    });
};
function I(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: s } = (0, l.cj)(
            [h.Z],
            () => ({
                guild: h.Z.guild,
                roles: h.Z.roles
            }),
            []
        );
    a()(null != n, 'Guild cannot be null here');
    let c = i.useMemo(() => s.find((e) => (0, u.pM)(n.id, e.id)), [s, n]);
    a()(null != c, 'Guild must have an everyone role');
    let g = i.useMemo(() => s.filter((e) => !(0, u.pM)(n.id, e.id)), [s, n]),
        p = (0, l.e7)([b.Z], () => b.Z.getSelectedRoleId()),
        [f, y] = i.useState(g.length > 0);
    i.useEffect(() => {
        y(f || g.length > 0);
    }, [f, g.length]),
        (0, d.ZP)(() => {
            let e = m.Z.getMemberCount(n.id);
            null != e && e <= x.cm && o.Z.requestMembers(n.id, '', 0, !1);
        });
    let [C, I] = i.useState(_.ZI.DISPLAY);
    return (i.useEffect(() => {
        null == p && I(_.ZI.DISPLAY);
    }, [p]),
    null != p)
        ? (0, r.jsx)(j.Z, {
              editRoleId: p,
              setEditRoleId: O,
              selectedSection: C,
              setSelectedSection: I
          })
        : f
          ? (0, r.jsx)(v.Z, {
                setEditRoleId: O,
                guild: n,
                everyoneRole: c,
                otherRoles: g,
                setSelectedSection: I,
                refToScroller: t
            })
          : (0, r.jsx)(N.Z, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: O
            });
}
