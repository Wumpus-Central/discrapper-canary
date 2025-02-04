n.d(t, {
    KJ: () => v,
    N0: () => T,
    k3: () => p,
    lk: () => N,
    ng: () => C
}),
    n(47120);
var i,
    l = n(192379),
    r = n(442837),
    s = n(999382),
    o = n(658666),
    a = n(384632),
    u = n(601964),
    c = n(430824),
    d = n(863249),
    m = n(944163),
    x = n(63568),
    f = n(246364),
    h = n(983736),
    g = n(266395),
    j = n(388032),
    v = (((i = {})[(i.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (i[(i.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (i[(i.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), i);
function C(e, t, n) {
    let i = (0, x.jS)(e, 'MemberVerificationScreens'),
        s = (0, r.e7)([m.Z], () => m.Z.get(e)),
        u = (0, r.e7)([o.Z], () => o.Z.pendingState);
    l.useEffect(() => {
        !n && d.ZP.fetchVerificationForm(e, t);
    }, [e, t, n]);
    let c = l.useMemo(() => {
        var e, t;
        let l;
        if (!n || !i || null == u) return null;
        if (u.joinType === a.A.APPLY) l = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : void 0;
        else if (null != u.termRules) {
            let e = u.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            l = [
                {
                    field_type: f.QJ.TERMS,
                    label: j.intl.string(j.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == l
            ? null
            : {
                  version: null !== (e = null == s ? void 0 : s.version) && void 0 !== e ? e : '',
                  description: null !== (t = null == s ? void 0 : s.description) && void 0 !== t ? t : '',
                  formFields: l,
                  guild: null == s ? void 0 : s.guild
              };
    }, [n, i, u, s]);
    return null != c ? c : s;
}
function T(e, t, n) {
    let i = (0, r.e7)([c.Z], () => c.Z.getGuild(e)),
        o = (0, r.e7)([s.Z], () => s.Z.getGuild());
    return l.useMemo(() => (n && (null == o ? void 0 : o.id) === e ? o : null != i ? i : null != t ? new u.ZP(t) : null), [n, o, e, i, t]);
}
function p(e, t) {
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
function N(e) {
    let t = (0, g.rb)((e) => e.hasUnsubmittedChanges);
    l.useEffect(
        () => (
            (0, g.a5)(!1),
            () => {
                (0, g.a5)(!1);
            }
        ),
        []
    ),
        l.useEffect(() => {
            let n = e.some((e) => e.field_type !== f.QJ.TERMS && (0, h.OA)(e));
            n && !t ? (0, g.a5)(!0) : !n && t && (0, g.a5)(!1);
        }, [e, t]);
}
