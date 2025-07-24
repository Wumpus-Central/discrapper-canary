(n.d(t, {
    Z: () => I,
    _: () => N
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(749210),
    c = n(852860),
    d = n(493773),
    u = n(605436),
    m = n(650774),
    g = n(823379),
    p = n(434404),
    f = n(764260),
    h = n(946724),
    x = n(999382),
    b = n(130341),
    j = n(853813),
    v = n(163249),
    _ = n(150689),
    O = n(203377),
    y = n(981631);
function C(e) {
    p.Z.selectRole(e);
}
let N = () => {
    let { guild: e } = (0, a.cj)([x.Z], () => x.Z.getProps()),
        t = (0, a.e7)([h.Z], () => h.Z.formState),
        n = (0, a.e7)([h.Z], () => h.Z.errorMessage);
    return (0, r.jsx)(c.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = h.Z.editedRoleIds.map((e) => h.Z.getRole(e)).filter(g.lm),
                r = h.Z.getSortDeltas(),
                i = null,
                l = null;
            (h.Z.hasRoleConfigurationChanges && ((l = h.Z.editedRoleIdsForConfigurations), (i = h.Z.getEditedRoleConnectionConfigurationsMap())), (0, f.Gf)(t, n, r, l, i));
        },
        submitting: t === y.QZA.SUBMITTING,
        onReset: f.S1
    });
};
function I(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, a.cj)(
            [h.Z],
            () => ({
                guild: h.Z.guild,
                roles: h.Z.roles
            }),
            []
        );
    s()(null != n, 'Guild cannot be null here');
    let c = i.useMemo(() => l.find((e) => (0, u.pM)(n.id, e.id)), [l, n]);
    s()(null != c, 'Guild must have an everyone role');
    let g = i.useMemo(() => l.filter((e) => !(0, u.pM)(n.id, e.id)), [l, n]),
        p = (0, a.e7)([x.Z], () => x.Z.getSelectedRoleId()),
        [f, y] = i.useState(g.length > 0);
    (i.useEffect(() => {
        y(f || g.length > 0);
    }, [f, g.length]),
        (0, d.ZP)(() => {
            let e = m.Z.getMemberCount(n.id);
            null != e && e <= b.cm && o.Z.requestMembers(n.id, '', 0, !1);
        }));
    let [N, I] = i.useState(O.ZI.DISPLAY);
    return (i.useEffect(() => {
        null == p && I(O.ZI.DISPLAY);
    }, [p]),
    null != p)
        ? (0, r.jsx)(j.Z, {
              editRoleId: p,
              setEditRoleId: C,
              selectedSection: N,
              setSelectedSection: I
          })
        : f
          ? (0, r.jsx)(_.Z, {
                setEditRoleId: C,
                guild: n,
                everyoneRole: c,
                otherRoles: g,
                setSelectedSection: I,
                refToScroller: t
            })
          : (0, r.jsx)(v.Z, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: C
            });
}
