n.d(t, {
    Z: () => I,
    _: () => N
}),
    n(388685);
var r = n(200651),
    i = n(192379),
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
    h = n(764260),
    f = n(946724),
    x = n(999382),
    b = n(130341),
    j = n(853813),
    _ = n(163249),
    v = n(150689),
    O = n(203377),
    C = n(981631);
function y(e) {
    p.Z.selectRole(e);
}
let N = () => {
    let { guild: e } = (0, a.cj)([x.Z], () => x.Z.getProps()),
        t = (0, a.e7)([f.Z], () => f.Z.formState),
        n = (0, a.e7)([f.Z], () => f.Z.errorMessage);
    return (0, r.jsx)(c.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = f.Z.editedRoleIds.map((e) => f.Z.getRole(e)).filter(g.lm),
                r = f.Z.getSortDeltas(),
                i = null,
                l = null;
            f.Z.hasRoleConfigurationChanges && ((l = f.Z.editedRoleIdsForConfigurations), (i = f.Z.getEditedRoleConnectionConfigurationsMap())), (0, h.Gf)(t, n, r, l, i);
        },
        submitting: t === C.QZA.SUBMITTING,
        onReset: h.S1
    });
};
function I(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, a.cj)(
            [f.Z],
            () => ({
                guild: f.Z.guild,
                roles: f.Z.roles
            }),
            []
        );
    s()(null != n, 'Guild cannot be null here');
    let c = i.useMemo(() => l.find((e) => (0, u.pM)(n.id, e.id)), [l, n]);
    s()(null != c, 'Guild must have an everyone role');
    let g = i.useMemo(() => l.filter((e) => !(0, u.pM)(n.id, e.id)), [l, n]),
        p = (0, a.e7)([x.Z], () => x.Z.getSelectedRoleId()),
        [h, C] = i.useState(g.length > 0);
    i.useEffect(() => {
        C(h || g.length > 0);
    }, [h, g.length]),
        (0, d.ZP)(() => {
            let e = m.Z.getMemberCount(n.id);
            null != e && e <= b.cm && o.Z.requestMembers(n.id, '', 0, !1);
        });
    let [N, I] = i.useState(O.ZI.DISPLAY);
    return (i.useEffect(() => {
        null == p && I(O.ZI.DISPLAY);
    }, [p]),
    null != p)
        ? (0, r.jsx)(j.Z, {
              editRoleId: p,
              setEditRoleId: y,
              selectedSection: N,
              setSelectedSection: I
          })
        : h
          ? (0, r.jsx)(v.Z, {
                setEditRoleId: y,
                guild: n,
                everyoneRole: c,
                otherRoles: g,
                setSelectedSection: I,
                refToScroller: t
            })
          : (0, r.jsx)(_.Z, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: y
            });
}
