n.d(t, {
    KJ: () => g,
    N0: () => v,
    k3: () => j,
    lk: () => C,
    ng: () => p,
}),
    n(388685),
    n(457542),
    n(781311),
    n(953529);
var r,
    l = n(473749),
    i = n(442837),
    a = n(999382),
    s = n(658666),
    o = n(384632),
    c = n(430824),
    u = n(411198),
    d = n(863249),
    m = n(944163),
    f = n(246364),
    b = n(983736),
    x = n(266395),
    h = n(388032),
    g =
        (((r = {})[(r.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (r[(r.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (r[(r.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        r);
function p(e, t, n) {
    let [r, a] = l.useState(!1),
        c = (0, i.e7)([m.Z], () => m.Z.get(e)),
        u = (0, i.e7)([s.Z], () => s.Z.pendingState);
    l.useEffect(() => {
        t || d.ZP.fetchVerificationForm(e, n).finally(() => a(!0));
    }, [e, n, t]);
    let b = l.useMemo(() => {
        var e, n;
        let r;
        if (!t || null == u) return null;
        if (u.joinType === o.A.APPLY)
            r = null != u.pendingVerificationFields ? [...u.pendingVerificationFields] : void 0;
        else if (null != u.termRules) {
            let e = u.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
            r = [
                {
                    field_type: f.QJ.TERMS,
                    label: h.intl.string(h.t["9suSIA"]),
                    values: e,
                    required: !0,
                },
            ];
        }
        return null == r
            ? null
            : {
                  version: null != (e = null == c ? void 0 : c.version) ? e : "",
                  description: null != (n = null == c ? void 0 : c.description) ? n : "",
                  formFields: r,
                  guild: null == c ? void 0 : c.guild,
              };
    }, [t, u, c]);
    return {
        hasFetched: r,
        verificationForm: null != b ? b : c,
    };
}
function v(e, t, n) {
    let r = (0, i.e7)([c.Z], () => c.Z.getGuild(e)),
        s = (0, i.e7)([a.Z], () => a.Z.getGuild());
    return l.useMemo(
        () => (n && (null == s ? void 0 : s.id) === e ? s : null != r ? r : null != t ? (0, u.Rj)(t) : null),
        [n, s, e, r, t],
    );
}
function j(e) {
    let t = !(null == e ? void 0 : e.isClaimed()),
        n = null == e ? void 0 : e.verified,
        [r, i] = l.useState(2 * !t);
    return (
        l.useEffect(() => {
            null != e && e.isClaimed() && i(2);
        }, [e]),
        l.useEffect(() => {
            1 === r && n && i(2);
        }, [r, n]),
        {
            currentStep: r,
            setCurrentStep: i,
        }
    );
}
function C(e) {
    let t = (0, x.rb)((e) => e.hasUnsubmittedChanges);
    l.useEffect(
        () => (
            (0, x.a5)(!1),
            () => {
                (0, x.a5)(!1);
            }
        ),
        [],
    ),
        l.useEffect(() => {
            let n = e.some((e) => e.field_type !== f.QJ.TERMS && (0, b.OA)(e));
            n && !t ? (0, x.a5)(!0) : !n && t && (0, x.a5)(!1);
        }, [e, t]);
}
