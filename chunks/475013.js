n.d(t, {
    Z: function () {
        return S;
    },
    _: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(749210),
    c = n(852860),
    d = n(493773),
    u = n(605436),
    m = n(650774),
    h = n(823379),
    g = n(434404),
    x = n(764260),
    p = n(946724),
    f = n(999382),
    C = n(130341),
    v = n(853813),
    _ = n(163249),
    N = n(150689),
    I = n(203377),
    T = n(981631);
function j(e) {
    g.Z.selectRole(e);
}
let b = () => {
    let { guild: e } = (0, s.cj)([f.Z], () => f.Z.getProps()),
        t = (0, s.e7)([p.Z], () => p.Z.formState),
        n = (0, s.e7)([p.Z], () => p.Z.errorMessage);
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
        submitting: t === T.QZA.SUBMITTING,
        onReset: x.S1
    });
};
function S(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, s.cj)(
            [p.Z],
            () => ({
                guild: p.Z.guild,
                roles: p.Z.roles
            }),
            []
        );
    a()(null != n, 'Guild cannot be null here');
    let c = r.useMemo(() => l.find((e) => (0, u.pM)(n.id, e.id)), [l, n]);
    a()(null != c, 'Guild must have an everyone role');
    let h = r.useMemo(() => l.filter((e) => !(0, u.pM)(n.id, e.id)), [l, n]),
        g = (0, s.e7)([f.Z], () => f.Z.getSelectedRoleId()),
        [x, T] = r.useState(h.length > 0);
    r.useEffect(() => {
        T(x || h.length > 0);
    }, [x, h.length]),
        (0, d.Z)(() => {
            let e = m.Z.getMemberCount(n.id);
            null != e && e <= C.cm && o.Z.requestMembers(n.id, '', 0, !1);
        });
    let [b, S] = r.useState(I.ZI.DISPLAY);
    return (r.useEffect(() => {
        null == g && S(I.ZI.DISPLAY);
    }, [g]),
    null != g)
        ? (0, i.jsx)(v.Z, {
              editRoleId: g,
              setEditRoleId: j,
              selectedSection: b,
              setSelectedSection: S
          })
        : x
          ? (0, i.jsx)(N.Z, {
                setEditRoleId: j,
                guild: n,
                everyoneRole: c,
                otherRoles: h,
                setSelectedSection: S,
                refToScroller: t
            })
          : (0, i.jsx)(_.Z, {
                guild: n,
                everyoneRole: c,
                setEditRoleId: j
            });
}
