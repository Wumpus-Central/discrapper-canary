r.d(t, { $x: () => x, Qg: () => p, dy: () => v, he: () => I, x$: () => g });
var n,
    i = r(64700),
    l = r(311907),
    a = r(555337),
    s = r(306846),
    o = r(894222),
    d = r(71393),
    c = r(860689),
    u = r(408213),
    _ = r(60175),
    m = r(513461),
    h = r(709977),
    E = r(890620),
    f = r(985018),
    p =
        (((n = {})[(n.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (n[(n.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (n[(n.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        n);
function x(e, t, r) {
    let [n, a] = i.useState(!1),
        d = (0, l.bG)([_.A], () => _.A.get(e)),
        c = (0, l.bG)([s.A], () => s.A.pendingState);
    return (
        i.useEffect(() => {
            t || u.Ay.fetchVerificationForm(e, r).finally(() => a(!0));
        }, [e, r, t]),
        {
            hasFetched: n,
            verificationForm:
                i.useMemo(() => {
                    let e;
                    if (!t || null == c) return null;
                    if (c.joinType === o.J.APPLY)
                        e = null != c.pendingVerificationFields ? [...c.pendingVerificationFields] : void 0;
                    else if (null != c.termRules) {
                        let t = c.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
                        e = [{ field_type: m.rX.TERMS, label: f.intl.string(f.t["9suSIA"]), values: t, required: !0 }];
                    }
                    return null == e
                        ? null
                        : {
                              version: d?.version ?? "",
                              description: d?.description ?? "",
                              formFields: e,
                              guild: d?.guild,
                          };
                }, [t, c, d]) ?? d,
        }
    );
}
function g(e, t, r) {
    let n = (0, l.bG)([d.A], () => d.A.getGuild(e)),
        s = (0, l.bG)([a.A], () => a.A.getGuild());
    return i.useMemo(() => (r && s?.id === e ? s : null != n ? n : null != t ? (0, c.Yh)(t) : null), [r, s, e, n, t]);
}
function v(e) {
    let t = !e?.isClaimed(),
        r = e?.verified,
        [n, l] = i.useState(2 * !t);
    return (
        i.useEffect(() => {
            null != e && e.isClaimed() && l(2);
        }, [e]),
        i.useEffect(() => {
            1 === n && r && l(2);
        }, [n, r]),
        { currentStep: n, setCurrentStep: l }
    );
}
function I(e) {
    let t = (0, E.YN)((e) => e.hasUnsubmittedChanges);
    i.useEffect(
        () => (
            (0, E.Yb)(!1),
            () => {
                (0, E.Yb)(!1);
            }
        ),
        [],
    ),
        i.useEffect(() => {
            let r = e.some((e) => e.field_type !== m.rX.TERMS && (0, h.Ge)(e));
            r && !t ? (0, E.Yb)(!0) : !r && t && (0, E.Yb)(!1);
        }, [e, t]);
}
