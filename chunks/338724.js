l.d(t, {
    $x: () => g,
    Qg: () => v,
    dy: () => p,
    he: () => C,
    x$: () => j,
}),
    l(896048),
    l(492834),
    l(733351),
    l(228524);
var n,
    r = l(64700),
    s = l(311907),
    i = l(555337),
    a = l(306846),
    o = l(894222),
    c = l(71393),
    d = l(860689),
    u = l(408213),
    f = l(60175),
    m = l(513461),
    x = l(709977),
    b = l(890620),
    h = l(985018),
    v =
        (((n = {})[(n.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (n[(n.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (n[(n.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        n);
function g(e, t, l) {
    let [n, i] = r.useState(!1),
        c = (0, s.bG)([f.A], () => f.A.get(e)),
        d = (0, s.bG)([a.A], () => a.A.pendingState);
    r.useEffect(() => {
        t || u.Ay.fetchVerificationForm(e, l).finally(() => i(!0));
    }, [e, l, t]);
    let x = r.useMemo(() => {
        var e, l;
        let n;
        if (!t || null == d) return null;
        if (d.joinType === o.J.APPLY)
            n = null != d.pendingVerificationFields ? [...d.pendingVerificationFields] : void 0;
        else if (null != d.termRules) {
            let e = d.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
            n = [
                {
                    field_type: m.rX.TERMS,
                    label: h.intl.string(h.t["9suSIA"]),
                    values: e,
                    required: !0,
                },
            ];
        }
        return null == n
            ? null
            : {
                  version: null != (e = null == c ? void 0 : c.version) ? e : "",
                  description: null != (l = null == c ? void 0 : c.description) ? l : "",
                  formFields: n,
                  guild: null == c ? void 0 : c.guild,
              };
    }, [t, d, c]);
    return {
        hasFetched: n,
        verificationForm: null != x ? x : c,
    };
}
function j(e, t, l) {
    let n = (0, s.bG)([c.A], () => c.A.getGuild(e)),
        a = (0, s.bG)([i.A], () => i.A.getGuild());
    return r.useMemo(
        () => (l && (null == a ? void 0 : a.id) === e ? a : null != n ? n : null != t ? (0, d.Yh)(t) : null),
        [l, a, e, n, t],
    );
}
function p(e) {
    let t = !(null == e ? void 0 : e.isClaimed()),
        l = null == e ? void 0 : e.verified,
        [n, s] = r.useState(2 * !t);
    return (
        r.useEffect(() => {
            null != e && e.isClaimed() && s(2);
        }, [e]),
        r.useEffect(() => {
            1 === n && l && s(2);
        }, [n, l]),
        {
            currentStep: n,
            setCurrentStep: s,
        }
    );
}
function C(e) {
    let t = (0, b.YN)((e) => e.hasUnsubmittedChanges);
    r.useEffect(
        () => (
            (0, b.Yb)(!1),
            () => {
                (0, b.Yb)(!1);
            }
        ),
        [],
    ),
        r.useEffect(() => {
            let l = e.some((e) => e.field_type !== m.rX.TERMS && (0, x.Ge)(e));
            l && !t ? (0, b.Yb)(!0) : !l && t && (0, b.Yb)(!1);
        }, [e, t]);
}
