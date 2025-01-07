n.d(t, {
    w: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(852860),
    o = n(881052),
    c = n(863249),
    d = n(246364),
    u = n(983736),
    m = n(571728),
    h = n(434404),
    g = n(999382),
    x = n(654351),
    p = n(217472),
    f = n(658666),
    C = n(384632),
    v = n(981631),
    _ = n(388032);
function I(e) {
    var t;
    let { pendingState: x } = e,
        [f, I] = r.useState(!1),
        [N, T] = r.useState(null),
        j = (0, l.e7)([g.Z], () => g.Z.getProps().guild),
        b = null == j ? void 0 : j.id,
        S = null == j ? void 0 : j.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        E = null !== (t = (0, m.A)({ guildId: b })) && void 0 !== t ? t : 0,
        R = r.useCallback(() => {
            T(null), p.Z.reset();
        }, []),
        y = r.useCallback(async (e) => {
            try {
                I(!0), await e(), T(null);
            } finally {
                I(!1);
            }
        }, []),
        A = r.useCallback(async () => {
            if (null == j ? void 0 : j.hasFeature(v.oNc.DISCOVERABLE)) {
                let e = new Set(j.features);
                e.delete(v.oNc.DISCOVERABLE);
                try {
                    await h.Z.saveGuild(j.id, { features: e }, { throwErr: !0 });
                } catch (e) {
                    throw ('object' == typeof e && 'message' in e ? T(e.message) : T(_.intl.formatToPlainString(_.t.aTVNen, { statusPageURL: v.yXt.STATUS })), e);
                }
            }
        }, [j]),
        Z = r.useCallback(
            async (e, t) => {
                if (null != b)
                    try {
                        await c.ZP.updateVerificationForm(b, e, t);
                    } catch (e) {
                        throw (T(new o.Hx(e).getAnyErrorMessage()), e);
                    }
            },
            [b]
        ),
        L = r.useCallback(() => {
            if (null != b) {
                if (x.joinType === C.A.INVITE) {
                    let { requireTerms: e, termRules: t = [] } = x,
                        n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                    if (n.length < 1 && e) {
                        T(_.intl.string(_.t.TCHkcX));
                        return;
                    }
                    let i =
                        n.length > 0
                            ? [
                                  {
                                      field_type: d.QJ.TERMS,
                                      label: _.intl.string(_.t['9suSIC']),
                                      values: n,
                                      required: !0
                                  }
                              ]
                            : [];
                    y(async () => {
                        await A(), await Z(i, e);
                    });
                } else if (x.joinType === C.A.APPLY) {
                    let { pendingVerificationFields: e } = x;
                    if (null == e) return;
                    if (!e.some((e) => (0, u._C)(e))) {
                        T(_.intl.string(_.t.HGVrIy));
                        return;
                    }
                    y(async () => {
                        await A(), await Z([...e], !0);
                    });
                }
            }
        }, [b, x, y, A, Z]),
        D = r.useCallback(() => {
            if (null != b && null != x) {
                if (S && E > 0 && (null == x ? void 0 : x.joinType) !== C.A.APPLY) {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e('55009').then(n.bind(n, 826390));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: b,
                                submittedGuildJoinRequestsCount: E,
                                onConfirm: () => L()
                            });
                    });
                    return;
                }
                L();
            }
        }, [b, x, S, E, L]);
    return (0, i.jsx)(s.Z, {
        submitting: f,
        errorMessage: N,
        onReset: R,
        onSave: D
    });
}
function N() {
    let e = (0, l.e7)([f.Z], () => f.Z.pendingState);
    return null == e
        ? null
        : (null == e ? void 0 : e.joinType) === C.A.DISCOVERABLE && e.settingsView === x.d5.INTRO_INELIGIBLE
          ? (0, i.jsx)(s.Z, {
                message: _.intl.string(_.t.TEXwRk),
                onReset: p.Z.reset
            })
          : (0, i.jsx)(I, { pendingState: e });
}
