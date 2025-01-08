t.d(n, {
    KJ: function () {
        return i;
    },
    N0: function () {
        return C;
    },
    k3: function () {
        return p;
    },
    lk: function () {
        return T;
    },
    ng: function () {
        return v;
    }
}),
    t(47120);
var i,
    r,
    l = t(192379),
    s = t(442837),
    o = t(658666),
    u = t(384632),
    c = t(601964),
    a = t(430824),
    d = t(863249),
    f = t(944163),
    m = t(63568),
    h = t(246364),
    x = t(983736),
    j = t(266395),
    g = t(388032);
function v(e, n, t) {
    let i = (0, m.jS)(e, 'MemberVerificationScreens'),
        r = (0, s.e7)([f.Z], () => f.Z.get(e)),
        c = (0, s.e7)([o.Z], () => o.Z.pendingState);
    l.useEffect(() => {
        if (!t) d.ZP.fetchVerificationForm(e, n);
    }, [e, n, t]);
    let a = l.useMemo(() => {
        var e, n;
        let l;
        if (!t || !i) return null;
        if ((null == c ? void 0 : c.joinType) === u.A.APPLY && null != c.pendingVerificationFields) l = [...c.pendingVerificationFields];
        else if ((null == c ? void 0 : c.joinType) === u.A.INVITE && null != c.termRules) {
            let e = c.termRules.map((e) => e.value.trim()).filter((e) => '' !== e);
            l = [
                {
                    field_type: h.QJ.TERMS,
                    label: g.intl.string(g.t['9suSIC']),
                    values: e,
                    required: !0
                }
            ];
        }
        return null == l
            ? null
            : {
                  version: null !== (e = null == r ? void 0 : r.version) && void 0 !== e ? e : '',
                  description: null !== (n = null == r ? void 0 : r.description) && void 0 !== n ? n : '',
                  formFields: l,
                  guild: null == r ? void 0 : r.guild
              };
    }, [t, i, c, r]);
    return null != a ? a : r;
}
function C(e, n) {
    let t = (0, s.e7)([a.Z], () => a.Z.getGuild(e));
    return l.useMemo(() => (null != t ? t : null != n ? new c.ZP(n) : null), [t, n]);
}
function p(e, n, t) {
    let i = !(null == n ? void 0 : n.isClaimed()),
        r = null == n ? void 0 : n.verified,
        [s, o] = l.useState(!t && i ? 0 : 2);
    return (
        l.useEffect(() => {
            null != n && n.isClaimed() && o(2);
        }, [n]),
        l.useEffect(() => {
            1 === s && r && o(2);
        }, [s, r]),
        {
            currentStep: s,
            setCurrentStep: o
        }
    );
}
function T(e) {
    let n = (0, j.rb)((e) => e.hasUnsubmittedChanges);
    l.useEffect(
        () => (
            (0, j.a5)(!1),
            () => {
                (0, j.a5)(!1);
            }
        ),
        []
    ),
        l.useEffect(() => {
            let t = e.some((e) => e.field_type !== h.QJ.TERMS && (0, x.OA)(e));
            t && !n ? (0, j.a5)(!0) : !t && n && (0, j.a5)(!1);
        }, [e, n]);
}
((r = i || (i = {}))[(r.CLAIM_ACCOUNT = 0)] = 'CLAIM_ACCOUNT'), (r[(r.EMAIL_CONFIRMATION = 1)] = 'EMAIL_CONFIRMATION'), (r[(r.VERIFICATION_FORM = 2)] = 'VERIFICATION_FORM');
