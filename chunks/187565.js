r.d(t, {
    KJ: () => g,
    N0: () => x,
    k3: () => y,
    lk: () => v,
    ng: () => O
}),
    r(388685),
    r(457542),
    r(781311),
    r(953529);
var n,
    i = r(192379),
    o = r(442837),
    s = r(999382),
    l = r(658666),
    c = r(384632),
    a = r(601964),
    u = r(430824),
    d = r(863249),
    f = r(944163),
    m = r(63568),
    h = r(246364),
    p = r(983736),
    j = r(266395),
    b = r(388032),
    g = (((n = {})[(n.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (n[(n.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (n[(n.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), n);
function O(e, t, r) {
    let [n, s] = i.useState(!1),
        a = (0, m.jS)(e, 'MemberVerificationScreens'),
        u = (0, o.e7)([f.Z], () => f.Z.get(e)),
        p = (0, o.e7)([l.Z], () => l.Z.pendingState);
    i.useEffect(() => {
        t || d.ZP.fetchVerificationForm(e, r).finally(() => s(!0));
    }, [e, r, t]);
    let j = i.useMemo(() => {
        var e, r;
        let n;
        if (!t || !a || null == p) return null;
        if (p.joinType === c.A.APPLY) n = null != p.pendingVerificationFields ? [...p.pendingVerificationFields] : void 0;
        else if (null != p.termRules) {
            let e = p.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            n = [
                {
                    field_type: h.QJ.TERMS,
                    label: b.NW.string(b.t['9suSIC']),
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
    }, [t, a, p, u]);
    return {
        hasFetched: n,
        verificationForm: null != j ? j : u
    };
}
function x(e, t, r) {
    let n = (0, o.e7)([u.Z], () => u.Z.getGuild(e)),
        l = (0, o.e7)([s.Z], () => s.Z.getGuild());
    return i.useMemo(() => (r && (null == l ? void 0 : l.id) === e ? l : null != n ? n : null != t ? new a.ZP(t) : null), [r, l, e, n, t]);
}
function y(e, t) {
    let r = !(null == e ? void 0 : e.isClaimed()),
        n = null == e ? void 0 : e.verified,
        [o, s] = i.useState(!t && r ? 0 : 2);
    return (
        i.useEffect(() => {
            null != e && e.isClaimed() && s(2);
        }, [e]),
        i.useEffect(() => {
            1 === o && n && s(2);
        }, [o, n]),
        {
            currentStep: o,
            setCurrentStep: s
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
