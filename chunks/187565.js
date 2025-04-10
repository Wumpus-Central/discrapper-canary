r.d(t, {
    KJ: () => b,
    N0: () => N,
    k3: () => O,
    lk: () => v,
    ng: () => x
}),
    r(388685),
    r(457542),
    r(781311),
    r(953529);
var n,
    i = r(192379),
    o = r(442837),
    l = r(999382),
    s = r(658666),
    a = r(384632),
    c = r(601964),
    u = r(430824),
    d = r(863249),
    f = r(944163),
    m = r(63568),
    h = r(246364),
    p = r(983736),
    j = r(266395),
    g = r(388032),
    b = (((n = {})[(n.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (n[(n.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (n[(n.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), n);
function x(e, t, r) {
    let [n, l] = i.useState(!1),
        c = (0, m.jS)(e, 'MemberVerificationScreens'),
        u = (0, o.e7)([f.Z], () => f.Z.get(e)),
        p = (0, o.e7)([s.Z], () => s.Z.pendingState);
    i.useEffect(() => {
        t || d.ZP.fetchVerificationForm(e, r).finally(() => l(!0));
    }, [e, r, t]);
    let j = i.useMemo(() => {
        var e, r;
        let n;
        if (!t || !c || null == p) return null;
        if (p.joinType === a.A.APPLY) n = null != p.pendingVerificationFields ? [...p.pendingVerificationFields] : void 0;
        else if (null != p.termRules) {
            let e = p.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            n = [
                {
                    field_type: h.QJ.TERMS,
                    label: g.NW.string(g.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == n
            ? null
            : {
                  version: null != (e = null == u ? void 0 : u.version) ? e : '',
                  description: null != (r = null == u ? void 0 : u.description) ? r : '',
                  formFields: n,
                  guild: null == u ? void 0 : u.guild
              };
    }, [t, c, p, u]);
    return {
        hasFetched: n,
        verificationForm: null != j ? j : u
    };
}
function N(e, t, r) {
    let n = (0, o.e7)([u.Z], () => u.Z.getGuild(e)),
        s = (0, o.e7)([l.Z], () => l.Z.getGuild());
    return i.useMemo(() => (r && (null == s ? void 0 : s.id) === e ? s : null != n ? n : null != t ? new c.ZP(t) : null), [r, s, e, n, t]);
}
function O(e, t) {
    let r = !(null == e ? void 0 : e.isClaimed()),
        n = null == e ? void 0 : e.verified,
        [o, l] = i.useState(!t && r ? 0 : 2);
    return (
        i.useEffect(() => {
            null != e && e.isClaimed() && l(2);
        }, [e]),
        i.useEffect(() => {
            1 === o && n && l(2);
        }, [o, n]),
        {
            currentStep: o,
            setCurrentStep: l
        }
    );
}
function v(e) {
    let t = (0, j.rb)((e) => e.hasUnsubmittedChanges);
    i.useEffect(
        () => (
            (0, j.a5)(!1),
            () => {
                (0, j.a5)(!1);
            }
        ),
        []
    ),
        i.useEffect(() => {
            let r = e.some((e) => e.field_type !== h.QJ.TERMS && (0, p.OA)(e));
            r && !t ? (0, j.a5)(!0) : !r && t && (0, j.a5)(!1);
        }, [e, t]);
}
