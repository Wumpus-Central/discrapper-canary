n.d(t, {
    KJ: () => v,
    N0: () => M,
    k3: () => R,
    lk: () => E,
    ng: () => C
}),
    n(47120);
var i,
    l = n(192379),
    r = n(442837),
    s = n(999382),
    u = n(658666),
    o = n(384632),
    a = n(601964),
    d = n(430824),
    c = n(863249),
    f = n(944163),
    x = n(63568),
    m = n(246364),
    g = n(983736),
    h = n(266395),
    j = n(388032),
    v = (((i = {})[(i.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (i[(i.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (i[(i.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), i);
function C(e, t) {
    let n = (0, x.jS)(e, 'MemberVerificationScreens'),
        i = (0, r.e7)([f.Z], () => f.Z.get(e)),
        s = (0, r.e7)([u.Z], () => u.Z.pendingState);
    l.useEffect(() => {
        !t && c.ZP.fetchVerificationForm(e);
    }, [e, t]);
    let a = l.useMemo(() => {
        var e, l;
        let r;
        if (!t || !n || null == s) return null;
        if (s.joinType === o.A.APPLY) r = null != s.pendingVerificationFields ? [...s.pendingVerificationFields] : void 0;
        else if (null != s.termRules) {
            let e = s.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            r = [
                {
                    field_type: m.QJ.TERMS,
                    label: j.intl.string(j.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == r
            ? null
            : {
                  version: null !== (e = null == i ? void 0 : i.version) && void 0 !== e ? e : '',
                  description: null !== (l = null == i ? void 0 : i.description) && void 0 !== l ? l : '',
                  formFields: r,
                  guild: null == i ? void 0 : i.guild
              };
    }, [t, n, s, i]);
    return null != a ? a : i;
}
function M(e, t, n) {
    let i = (0, r.e7)([d.Z], () => d.Z.getGuild(e)),
        u = (0, r.e7)([s.Z], () => s.Z.getGuild());
    return l.useMemo(() => (n && (null == u ? void 0 : u.id) === e ? u : null != i ? i : null != t ? new a.ZP(t) : null), [n, u, e, i, t]);
}
function R(e, t) {
    let n = !(null == e ? void 0 : e.isClaimed()),
        i = null == e ? void 0 : e.verified,
        [r, s] = l.useState(!t && n ? 0 : 2);
    return (
        l.useEffect(() => {
            null != e && e.isClaimed() && s(2);
        }, [e]),
        l.useEffect(() => {
            1 === r && i && s(2);
        }, [r, i]),
        {
            currentStep: r,
            setCurrentStep: s
        }
    );
}
function E(e) {
    let t = (0, h.rb)((e) => e.hasUnsubmittedChanges);
    l.useEffect(
        () => (
            (0, h.a5)(!1),
            () => {
                (0, h.a5)(!1);
            }
        ),
        []
    ),
        l.useEffect(() => {
            let n = e.some((e) => e.field_type !== m.QJ.TERMS && (0, g.OA)(e));
            n && !t ? (0, h.a5)(!0) : !n && t && (0, h.a5)(!1);
        }, [e, t]);
}
