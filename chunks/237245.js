n.d(t, {
    w: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(852860),
    o = n(881052),
    c = n(863249),
    d = n(246364),
    u = n(983736),
    m = n(571728),
    h = n(999382),
    g = n(654351),
    x = n(217472),
    p = n(658666),
    f = n(384632),
    C = n(981631),
    v = n(388032);
function _(e) {
    var t;
    let { pendingState: g } = e,
        [p, _] = r.useState(!1),
        [I, N] = r.useState(null),
        T = (0, l.e7)([h.Z], () => h.Z.getProps().guild),
        j = null == T ? void 0 : T.id,
        b = null == T ? void 0 : T.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        S = null !== (t = (0, m.A)({ guildId: j })) && void 0 !== t ? t : 0,
        E = r.useCallback(() => {
            N(null), x.Z.reset();
        }, []),
        R = r.useCallback(async (e) => {
            try {
                _(!0), await e(), N(null);
            } catch (e) {
                N(new o.Hx(e).getAnyErrorMessage());
            } finally {
                _(!1);
            }
        }, []),
        y = r.useCallback(() => {
            if (null != j) {
                if (g.joinType === f.A.INVITE) {
                    let { requireTerms: e, termRules: t = [] } = g,
                        n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                    if (n.length < 1 && e) {
                        N(v.intl.string(v.t.TCHkcX));
                        return;
                    }
                    let i =
                        n.length > 0
                            ? [
                                  {
                                      field_type: d.QJ.TERMS,
                                      label: v.intl.string(v.t['9suSIC']),
                                      values: n,
                                      required: !0
                                  }
                              ]
                            : [];
                    R(async () => {
                        await c.ZP.updateVerificationForm(j, i, e);
                    });
                } else if (g.joinType === f.A.APPLY) {
                    let { pendingVerificationFields: e } = g;
                    if (null == e) return;
                    if (!e.some((e) => (0, u._C)(e))) {
                        N(v.intl.string(v.t.HGVrIy));
                        return;
                    }
                    R(async () => {
                        await c.ZP.updateVerificationForm(j, [...e], !0);
                    });
                }
            }
        }, [j, g, R]),
        A = r.useCallback(() => {
            if (null != j && null != g) {
                if (b && S > 0 && (null == g ? void 0 : g.joinType) !== f.A.APPLY) {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e('55009').then(n.bind(n, 826390));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: j,
                                submittedGuildJoinRequestsCount: S,
                                onConfirm: () => y()
                            });
                    });
                    return;
                }
                y();
            }
        }, [j, g, b, S, y]);
    return (0, i.jsx)(s.Z, {
        submitting: p,
        errorMessage: I,
        onReset: E,
        onSave: A
    });
}
function I() {
    let e = (0, l.e7)([p.Z], () => p.Z.pendingState);
    return null == e
        ? null
        : (null == e ? void 0 : e.joinType) === f.A.DISCOVERABLE && e.settingsView === g.d5.INTRO
          ? (0, i.jsx)(s.Z, {
                message: v.intl.string(v.t.TEXwRk),
                onReset: x.Z.reset
            })
          : (0, i.jsx)(_, { pendingState: e });
}
