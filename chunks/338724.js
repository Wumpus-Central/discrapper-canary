"use strict";
r.d(t, { $x: () => b, Qg: () => f, dy: () => v, he: () => E, x$: () => x });
var i,
    a = r(64700),
    n = r(311907),
    s = r(555337),
    l = r(306846),
    o = r(894222),
    c = r(71393),
    d = r(860689),
    _ = r(408213),
    u = r(60175),
    p = r(513461),
    m = r(709977),
    h = r(890620),
    g = r(985018),
    f =
        (((i = {})[(i.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (i[(i.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (i[(i.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        i);
function b(e, t, r) {
    let [i, s] = a.useState(!1),
        c = (0, n.bG)([u.A], () => u.A.get(e)),
        d = (0, n.bG)([l.A], () => l.A.pendingState);
    return (
        a.useEffect(() => {
            t || _.Ay.fetchVerificationForm(e, r).finally(() => s(!0));
        }, [e, r, t]),
        {
            hasFetched: i,
            verificationForm:
                a.useMemo(() => {
                    let e;
                    if (!t || null == d) return null;
                    if (d.joinType === o.J.APPLY)
                        e = null != d.pendingVerificationFields ? [...d.pendingVerificationFields] : void 0;
                    else if (null != d.termRules) {
                        let t = d.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
                        e = [{ field_type: p.rX.TERMS, label: g.intl.string(g.t["9suSIA"]), values: t, required: !0 }];
                    }
                    return null == e
                        ? null
                        : {
                              version: c?.version ?? "",
                              description: c?.description ?? "",
                              formFields: e,
                              guild: c?.guild,
                          };
                }, [t, d, c]) ?? c,
        }
    );
}
function x(e, t, r) {
    let i = (0, n.bG)([c.A], () => c.A.getGuild(e)),
        l = (0, n.bG)([s.A], () => s.A.getGuild());
    return a.useMemo(() => (r && l?.id === e ? l : null != i ? i : null != t ? (0, d.Yh)(t) : null), [r, l, e, i, t]);
}
function v(e) {
    let t = !e?.isClaimed(),
        r = e?.verified,
        [i, n] = a.useState(2 * !t);
    return (
        a.useEffect(() => {
            null != e && e.isClaimed() && n(2);
        }, [e]),
        a.useEffect(() => {
            1 === i && r && n(2);
        }, [i, r]),
        { currentStep: i, setCurrentStep: n }
    );
}
function E(e) {
    let t = (0, h.YN)((e) => e.hasUnsubmittedChanges);
    a.useEffect(
        () => (
            (0, h.Yb)(!1),
            () => {
                (0, h.Yb)(!1);
            }
        ),
        [],
    ),
        a.useEffect(() => {
            let r = e.some((e) => e.field_type !== p.rX.TERMS && (0, m.Ge)(e));
            r && !t ? (0, h.Yb)(!0) : !r && t && (0, h.Yb)(!1);
        }, [e, t]);
}
