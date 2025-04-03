r.d(t, {
    KJ: () => y,
    N0: () => v,
    k3: () => h,
    lk: () => P,
    ng: () => m
}),
    r(47120),
    r(773603),
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
    O = r(983736),
    g = r(266395),
    p = r(388032),
    y = (((n = {})[(n.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (n[(n.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (n[(n.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), n);
function m(e, t, r) {
    let [n, l] = i.useState(!1),
        u = (0, b.jS)(e, 'MemberVerificationScreens'),
        a = (0, o.e7)([d.Z], () => d.Z.get(e)),
        O = (0, o.e7)([s.Z], () => s.Z.pendingState);
    i.useEffect(() => {
        t || f.ZP.fetchVerificationForm(e, r).finally(() => l(!0));
    }, [e, r, t]);
    let g = i.useMemo(() => {
        var e, r;
        let n;
        if (!t || !u || null == O) return null;
        if (O.joinType === c.A.APPLY) n = null != O.pendingVerificationFields ? [...O.pendingVerificationFields] : void 0;
        else if (null != O.termRules) {
            let e = O.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            n = [
                {
                    field_type: j.QJ.TERMS,
                    label: p.NW.string(p.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == n
            ? null
            : {
                  version: null != (e = null == a ? void 0 : a.version) ? e : '',
                  description: null != (r = null == a ? void 0 : a.description) ? r : '',
                  formFields: n,
                  guild: null == a ? void 0 : a.guild
              };
    }, [t, u, O, a]);
    return {
        hasFetched: n,
        verificationForm: null != g ? g : a
    };
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
    let t = (0, g.rb)((e) => e.hasUnsubmittedChanges);
    i.useEffect(
        () => (
            (0, g.a5)(!1),
            () => {
                (0, g.a5)(!1);
            }
        ),
        []
    ),
        i.useEffect(() => {
            let r = e.some((e) => e.field_type !== j.QJ.TERMS && (0, O.OA)(e));
            r && !t ? (0, g.a5)(!0) : !r && t && (0, g.a5)(!1);
        }, [e, t]);
}
