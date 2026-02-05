n.d(t, { $x: () => j, Qg: () => _, dy: () => v, he: () => b, x$: () => p });
var r,
    s = n(64700),
    l = n(311907),
    i = n(555337),
    a = n(306846),
    o = n(894222),
    d = n(71393),
    c = n(860689),
    u = n(408213),
    m = n(60175),
    h = n(513461),
    x = n(709977),
    f = n(890620),
    g = n(985018),
    _ =
        (((r = {})[(r.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (r[(r.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (r[(r.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        r);
function j(e, t, n) {
    let [r, i] = s.useState(!1),
        d = (0, l.bG)([m.A], () => m.A.get(e)),
        c = (0, l.bG)([a.A], () => a.A.pendingState);
    return (
        s.useEffect(() => {
            t || u.Ay.fetchVerificationForm(e, n).finally(() => i(!0));
        }, [e, n, t]),
        {
            hasFetched: r,
            verificationForm:
                s.useMemo(() => {
                    let e;
                    if (!t || null == c) return null;
                    if (c.joinType === o.J.APPLY)
                        e = null != c.pendingVerificationFields ? [...c.pendingVerificationFields] : void 0;
                    else if (null != c.termRules) {
                        let t = c.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
                        e = [{ field_type: h.rX.TERMS, label: g.intl.string(g.t["9suSIA"]), values: t, required: !0 }];
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
function p(e, t, n) {
    let r = (0, l.bG)([d.A], () => d.A.getGuild(e)),
        a = (0, l.bG)([i.A], () => i.A.getGuild());
    return s.useMemo(() => (n && a?.id === e ? a : null != r ? r : null != t ? (0, c.Yh)(t) : null), [n, a, e, r, t]);
}
function v(e) {
    let t = !e?.isClaimed(),
        n = e?.verified,
        [r, l] = s.useState(2 * !t);
    return (
        s.useEffect(() => {
            null != e && e.isClaimed() && l(2);
        }, [e]),
        s.useEffect(() => {
            1 === r && n && l(2);
        }, [r, n]),
        { currentStep: r, setCurrentStep: l }
    );
}
function b(e) {
    let t = (0, f.YN)((e) => e.hasUnsubmittedChanges);
    s.useEffect(
        () => (
            (0, f.Yb)(!1),
            () => {
                (0, f.Yb)(!1);
            }
        ),
        [],
    ),
        s.useEffect(() => {
            let n = e.some((e) => e.field_type !== h.rX.TERMS && (0, x.Ge)(e));
            n && !t ? (0, f.Yb)(!0) : !n && t && (0, f.Yb)(!1);
        }, [e, t]);
}
