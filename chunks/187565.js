r.d(t, {
    KJ: () => j,
    N0: () => m,
    k3: () => E,
    lk: () => P,
    ng: () => y
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
    u = r(384632),
    c = r(601964),
    a = r(430824),
    d = r(863249),
    f = r(944163),
    p = r(63568),
    b = r(246364),
    O = r(983736),
    g = r(266395),
    h = r(388032),
    j = (((n = {})[(n.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (n[(n.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (n[(n.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), n);
function y(e, t, r) {
    let [n, l] = i.useState(!1),
        c = (0, p.jS)(e, 'MemberVerificationScreens'),
        a = (0, o.e7)([f.Z], () => f.Z.get(e)),
        O = (0, o.e7)([s.Z], () => s.Z.pendingState);
    i.useEffect(() => {
        t || d.ZP.fetchVerificationForm(e, r).finally(() => l(!0));
    }, [e, r, t]);
    let g = i.useMemo(() => {
        var e, r;
        let n;
        if (!t || !c || null == O) return null;
        if (O.joinType === u.A.APPLY) n = null != O.pendingVerificationFields ? [...O.pendingVerificationFields] : void 0;
        else if (null != O.termRules) {
            let e = O.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            n = [
                {
                    field_type: b.QJ.TERMS,
                    label: h.NW.string(h.t['9suSIC']),
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
    }, [t, c, O, a]);
    return {
        hasFetched: n,
        verificationForm: null != g ? g : a
    };
}
function m(e, t, r) {
    let n = (0, o.e7)([a.Z], () => a.Z.getGuild(e)),
        s = (0, o.e7)([l.Z], () => l.Z.getGuild());
    return i.useMemo(() => (r && (null == s ? void 0 : s.id) === e ? s : null != n ? n : null != t ? new c.ZP(t) : null), [r, s, e, n, t]);
}
function E(e, t) {
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
            let r = e.some((e) => e.field_type !== b.QJ.TERMS && (0, O.OA)(e));
            r && !t ? (0, g.a5)(!0) : !r && t && (0, g.a5)(!1);
        }, [e, t]);
}
