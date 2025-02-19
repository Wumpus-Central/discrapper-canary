r.d(t, {
    KJ: () => y,
    N0: () => v,
    k3: () => h,
    lk: () => P,
    ng: () => m
}),
    r(47120),
    r(566702),
    r(266796);
var n,
    i = r(192379),
    o = r(442837),
    l = r(999382),
    s = r(658666),
    c = r(384632),
    u = r(601964),
    a = r(430824),
    f = r(863249),
    d = r(944163),
    b = r(63568),
    j = r(246364),
    g = r(983736),
    O = r(266395),
    p = r(388032),
    y = (((n = {})[(n.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (n[(n.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (n[(n.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), n);
function m(e, t) {
    let r = (0, b.jS)(e, 'MemberVerificationScreens'),
        n = (0, o.e7)([d.Z], () => d.Z.get(e)),
        l = (0, o.e7)([s.Z], () => s.Z.pendingState);
    i.useEffect(() => {
        !t && f.ZP.fetchVerificationForm(e);
    }, [e, t]);
    let u = i.useMemo(() => {
        var e, i;
        let o;
        if (!t || !r || null == l) return null;
        if (l.joinType === c.A.APPLY) o = null != l.pendingVerificationFields ? [...l.pendingVerificationFields] : void 0;
        else if (null != l.termRules) {
            let e = l.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            o = [
                {
                    field_type: j.QJ.TERMS,
                    label: p.NW.string(p.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == o
            ? null
            : {
                  version: null !== (e = null == n ? void 0 : n.version) && void 0 !== e ? e : '',
                  description: null !== (i = null == n ? void 0 : n.description) && void 0 !== i ? i : '',
                  formFields: o,
                  guild: null == n ? void 0 : n.guild
              };
    }, [t, r, l, n]);
    return null != u ? u : n;
}
function v(e, t, r) {
    let n = (0, o.e7)([a.Z], () => a.Z.getGuild(e)),
        s = (0, o.e7)([l.Z], () => l.Z.getGuild());
    return i.useMemo(() => (r && (null == s ? void 0 : s.id) === e ? s : null != n ? n : null != t ? new u.ZP(t) : null), [r, s, e, n, t]);
}
function h(e, t) {
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
function P(e) {
    let t = (0, O.rb)((e) => e.hasUnsubmittedChanges);
    i.useEffect(
        () => (
            (0, O.a5)(!1),
            () => {
                (0, O.a5)(!1);
            }
        ),
        []
    ),
        i.useEffect(() => {
            let r = e.some((e) => e.field_type !== j.QJ.TERMS && (0, g.OA)(e));
            r && !t ? (0, O.a5)(!0) : !r && t && (0, O.a5)(!1);
        }, [e, t]);
}
