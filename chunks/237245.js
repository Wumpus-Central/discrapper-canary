n.d(t, {
    w: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(881052),
    c = n(863249),
    d = n(246364),
    u = n(983736),
    m = n(571728),
    h = n(245762),
    g = n(894376),
    x = n(446495),
    p = n(999382),
    f = n(981631),
    C = n(388032);
function v() {
    var e;
    let [t, v] = r.useState(!1),
        [_, I] = r.useState(null),
        N = (0, l.e7)([p.Z], () => p.Z.getProps().guild),
        T = null == N ? void 0 : N.id,
        b = null == N ? void 0 : N.hasFeature(f.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        j = null !== (e = (0, m.A)({ guildId: T })) && void 0 !== e ? e : 0,
        S = (0, l.e7)([g.Z], () => g.Z.pendingState),
        E = r.useCallback(() => {
            I(null), h.Z.reset();
        }, []),
        R = r.useCallback(async (e) => {
            try {
                v(!0), await e(), I(null);
            } catch (e) {
                I(new o.Hx(e).getAnyErrorMessage());
            } finally {
                v(!1);
            }
        }, []),
        y = r.useCallback(() => {
            if (null != T && null != S) {
                if (S.joinType === x.A.INVITE) {
                    let { requireTerms: e, termRules: t = [] } = S,
                        n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                    if (n.length < 1 && e) {
                        I(C.intl.string(C.t.TCHkcX));
                        return;
                    }
                    let i =
                        n.length > 0
                            ? [
                                  {
                                      field_type: d.QJ.TERMS,
                                      label: C.intl.string(C.t['9suSIC']),
                                      values: n,
                                      required: !0
                                  }
                              ]
                            : [];
                    R(async () => {
                        await c.ZP.updateVerificationForm(T, i, e);
                    });
                } else if (S.joinType === x.A.APPLY) {
                    let { pendingVerificationFields: e } = S;
                    if (null == e) return;
                    if (!e.some((e) => (0, u._C)(e))) {
                        I(C.intl.string(C.t.HGVrIy));
                        return;
                    }
                    R(async () => {
                        await c.ZP.updateVerificationForm(T, [...e], !0);
                    });
                }
            }
        }, [T, S, R]),
        Z = r.useCallback(() => {
            if (null != T && null != S) {
                if (b && j > 0 && (null == S ? void 0 : S.joinType) !== x.A.APPLY) {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('55009').then(n.bind(n, 826390));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: T,
                                submittedGuildJoinRequestsCount: j,
                                onConfirm: () => y()
                            });
                    });
                    return;
                }
                y();
            }
        }, [T, S, b, j, y]);
    return (0, i.jsx)(a.Z, {
        submitting: t,
        errorMessage: _,
        onReset: E,
        onSave: Z
    });
}
