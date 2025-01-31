n.d(t, {
    KJ: () => g,
    N0: () => C,
    k3: () => T,
    lk: () => p,
    ng: () => v
}),
    n(47120);
var i,
    l = n(192379),
    r = n(442837),
    s = n(658666),
    o = n(384632),
    a = n(601964),
    u = n(430824),
    c = n(863249),
    d = n(944163),
    m = n(63568),
    x = n(246364),
    f = n(983736),
    h = n(266395),
    j = n(388032),
    g = (((i = {})[(i.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (i[(i.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (i[(i.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), i);
function v(e, t, n) {
    let i = (0, m.jS)(e, 'MemberVerificationScreens'),
        a = (0, r.e7)([d.Z], () => d.Z.get(e)),
        u = (0, r.e7)([s.Z], () => s.Z.pendingState);
    l.useEffect(() => {
        !n && c.ZP.fetchVerificationForm(e, t);
    }, [e, t, n]);
    let f = l.useMemo(() => {
        var e, t;
        let l;
        if (!n || !i || null == u) return null;
        if (u.joinType === o.A.APPLY) l = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : void 0;
        else if (null != u.termRules) {
            let e = u.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            l = [
                {
                    field_type: x.QJ.TERMS,
                    label: j.intl.string(j.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == l
            ? null
            : {
                  version: null !== (e = null == a ? void 0 : a.version) && void 0 !== e ? e : '',
                  description: null !== (t = null == a ? void 0 : a.description) && void 0 !== t ? t : '',
                  formFields: l,
                  guild: null == a ? void 0 : a.guild
              };
    }, [n, i, u, a]);
    return null != f ? f : a;
}
function C(e, t) {
    let n = (0, r.e7)([u.Z], () => u.Z.getGuild(e));
    return l.useMemo(() => (null != n ? n : null != t ? new a.ZP(t) : null), [n, t]);
}
function T(e, t) {
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
function p(e) {
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
            let n = e.some((e) => e.field_type !== x.QJ.TERMS && (0, f.OA)(e));
            n && !t ? (0, h.a5)(!0) : !n && t && (0, h.a5)(!1);
        }, [e, t]);
}
