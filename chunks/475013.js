n.d(t, {
    Z: () => T,
    _: () => b
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(749210),
    c = n(852860),
    d = n(493773),
    u = n(605436),
    m = n(650774),
    h = n(823379),
    g = n(434404),
    x = n(764260),
    p = n(946724),
    _ = n(999382),
    C = n(130341),
    f = n(853813),
    v = n(163249),
    N = n(150689),
    j = n(203377),
    I = n(981631);
function E(e) {
    g.Z.selectRole(e);
}
let b = () => {
    let { guild: e } = (0, a.cj)([_.Z], () => _.Z.getProps()),
        t = (0, a.e7)([p.Z], () => p.Z.formState),
        n = (0, a.e7)([p.Z], () => p.Z.errorMessage);
    return (0, i.jsx)(c.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = p.Z.editedRoleIds.map((e) => p.Z.getRole(e)).filter(h.lm),
                i = p.Z.getSortDeltas(),
                r = null,
                l = null;
            p.Z.hasRoleConfigurationChanges && ((l = p.Z.editedRoleIdsForConfigurations), (r = p.Z.getEditedRoleConnectionConfigurationsMap())), (0, x.Gf)(t, n, i, l, r);
        },
        submitting: t === I.QZA.SUBMITTING,
        onReset: x.S1
    });
};
function T(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, a.cj)(
            [p.Z],
            () => ({
                guild: p.Z.guild,
                roles: p.Z.roles
            }),
            []
        );
    s()(null != n, 'Guild cannot be null here');
    let c = r.useMemo(() => l.find((e) => (0, u.pM)(n.id, e.id)), [l, n]);
    s()(null != c, 'Guild must have an everyone role');
    let h = r.useMemo(() => l.filter((e) => !(0, u.pM)(n.id, e.id)), [l, n]),
        g = (0, a.e7)([_.Z], () => _.Z.getSelectedRoleId()),
        [x, I] = r.useState(h.length > 0);
    r.useEffect(() => {
        I(x || h.length > 0);
    }, [x, h.length]),
        (0, d.Z)(() => {
            let e = m.Z.getMemberCount(n.id);
            null != e && e <= C.cm && o.Z.requestMembers(n.id, '', 0, !1);
        });
    let [b, T] = r.useState(j.ZI.DISPLAY);
    return (r.useEffect(() => {
        null == g && T(j.ZI.DISPLAY);
    }, [g]),
    null != g)
        ? (0, i.jsx)(f.Z, {
              editRoleId: g,
              setEditRoleId: E,
              selectedSection: b,
              setSelectedSection: T
          })
        : x
          ? (0, i.jsx)(N.Z, {
                setEditRoleId: E,
                guild: n,
                everyoneRole: c,
                otherRoles: h,
                setSelectedSection: T,
                refToScroller: t
            })
          : (0, i.jsx)(v.Z, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: E
            });
}
