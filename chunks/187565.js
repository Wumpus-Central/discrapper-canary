(n.d(t, {
    KJ: () => g,
    N0: () => v,
    k3: () => j,
    lk: () => C,
    ng: () => b
}),
    n(388685),
    n(457542),
    n(781311),
    n(953529));
var r,
    i = n(73800),
    l = n(442837),
    s = n(999382),
    a = n(658666),
    o = n(384632),
    c = n(430824),
    u = n(411198),
    d = n(863249),
    m = n(944163),
    f = n(246364),
    h = n(983736),
    x = n(266395),
    p = n(388032),
    g = (((r = {})[(r.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (r[(r.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (r[(r.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM'), r);
function b(e, t, n) {
    let [r, s] = i.useState(!1),
        c = (0, l.e7)([m.Z], () => m.Z.get(e)),
        u = (0, l.e7)([a.Z], () => a.Z.pendingState);
    i.useEffect(() => {
        t || d.ZP.fetchVerificationForm(e, n).finally(() => s(!0));
    }, [e, n, t]);
    let h = i.useMemo(() => {
        var e, n;
        let r;
        if (!t || null == u) return null;
        if (u.joinType === o.A.APPLY) r = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : void 0;
        else if (null != u.termRules) {
            let e = u.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            r = [
                {
                    field_type: f.QJ.TERMS,
                    label: p.intl.string(p.t['9suSIC']),
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
function v(e, t, n) {
    let r = (0, l.e7)([c.Z], () => c.Z.getGuild(e)),
        a = (0, l.e7)([s.Z], () => s.Z.getGuild());
    return i.useMemo(() => (n && (null == a ? void 0 : a.id) === e ? a : null != r ? r : null != t ? (0, u.Rj)(t) : null), [n, a, e, r, t]);
}
function j(e) {
    let t = !(null == e ? void 0 : e.isClaimed()),
        n = null == e ? void 0 : e.verified,
        [r, l] = i.useState(2 * !t);
    return (
        i.useEffect(() => {
            null != e && e.isClaimed() && l(2);
        }, [e]),
        i.useEffect(() => {
            1 === r && n && l(2);
        }, [r, n]),
        {
            currentStep: r,
            setCurrentStep: l
        }
    );
}
function C(e) {
    let t = (0, x.rb)((e) => e.hasUnsubmittedChanges);
    (i.useEffect(
        () => (
            (0, x.a5)(!1),
            () => {
                (0, x.a5)(!1);
            }
        ),
        []
    ),
        i.useEffect(() => {
            let n = e.some((e) => e.field_type !== f.QJ.TERMS && (0, h.OA)(e));
            n && !t ? (0, x.a5)(!0) : !n && t && (0, x.a5)(!1);
        }, [e, t]));
}
