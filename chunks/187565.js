n.d(t, {
    KJ: () => g,
    N0: () => j,
    k3: () => v,
    lk: () => _,
    ng: () => x
}),
    n(388685),
    n(457542),
    n(781311),
    n(953529);
var r,
    i = n(73800),
    l = n(442837),
    o = n(999382),
    s = n(658666),
    a = n(384632),
    c = n(601964),
    u = n(430824),
    d = n(863249),
    m = n(944163),
    f = n(246364),
    h = n(983736),
    p = n(266395),
    b = n(388032),
    g = (((r = {})[(r.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (r[(r.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (r[(r.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), r);
function x(e, t, n) {
    let [r, o] = i.useState(!1),
        c = (0, l.e7)([m.Z], () => m.Z.get(e)),
        u = (0, l.e7)([s.Z], () => s.Z.pendingState);
    i.useEffect(() => {
        t || d.ZP.fetchVerificationForm(e, n).finally(() => o(!0));
    }, [e, n, t]);
    let h = i.useMemo(() => {
        var e, n;
        let r;
        if (!t || null == u) return null;
        if (u.joinType === a.A.APPLY) r = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : void 0;
        else if (null != u.termRules) {
            let e = u.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            r = [
                {
                    field_type: f.QJ.TERMS,
                    label: b.intl.string(b.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == r
            ? null
            : {
                  version: null != (e = null == c ? void 0 : c.version) ? e : '',
                  description: null != (n = null == c ? void 0 : c.description) ? n : '',
                  formFields: r,
                  guild: null == c ? void 0 : c.guild
              };
    }, [t, u, c]);
    return {
        hasFetched: r,
        verificationForm: null != h ? h : c
    };
}
function j(e, t, n) {
    let r = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        s = (0, l.e7)([o.Z], () => o.Z.getGuild());
    return i.useMemo(() => (n && (null == s ? void 0 : s.id) === e ? s : null != r ? r : null != t ? new c.ZP(t) : null), [n, s, e, r, t]);
}
function v(e, t) {
    let n = !(null == e ? void 0 : e.isClaimed()),
        r = null == e ? void 0 : e.verified,
        [l, o] = i.useState(!t && n ? 0 : 2);
    return (
        i.useEffect(() => {
            null != e && e.isClaimed() && o(2);
        }, [e]),
        i.useEffect(() => {
            1 === l && r && o(2);
        }, [l, r]),
        {
            currentStep: l,
            setCurrentStep: o
        }
    );
}
function _(e) {
    let t = (0, p.rb)((e) => e.hasUnsubmittedChanges);
    i.useEffect(
        () => (
            (0, p.a5)(!1),
            () => {
                (0, p.a5)(!1);
            }
        ),
        []
    ),
        i.useEffect(() => {
            let n = e.some((e) => e.field_type !== f.QJ.TERMS && (0, h.OA)(e));
            n && !t ? (0, p.a5)(!0) : !n && t && (0, p.a5)(!1);
        }, [e, t]);
}
