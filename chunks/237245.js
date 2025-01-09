n.d(t, {
    w: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(881052),
    c = n(863249),
    d = n(246364),
    u = n(983736),
    m = n(571728),
    h = n(434404),
    g = n(999382),
    x = n(658666),
    p = n(384632),
    f = n(386885),
    C = n(981631),
    v = n(128449),
    N = n(388032);
function _(e) {
    var t;
    let { pendingState: l, settingsGuild: g, settingsMetadata: x } = e,
        _ = g.id,
        [I, T] = r.useState(!1),
        [j, b] = r.useState(null),
        E = g.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        S = null !== (t = (0, m.A)({ guildId: g.id })) && void 0 !== t ? t : 0,
        R = r.useCallback(() => {
            b(null), h.Z.init(_, C.pNK.ACCESS);
        }, [_]),
        y = r.useCallback(async (e) => {
            try {
                T(!0), await e(), b(null);
            } finally {
                T(!1);
            }
        }, []),
        A = r.useCallback(async () => {
            if (g.hasFeature(C.oNc.DISCOVERABLE)) {
                let e = new Set(g.features);
                e.delete(C.oNc.DISCOVERABLE);
                try {
                    await h.Z.saveGuild(g.id, { features: e }, { throwErr: !0 });
                } catch (e) {
                    throw ('object' == typeof e && 'message' in e ? b(e.message) : b(N.intl.formatToPlainString(N.t.aTVNen, { statusPageURL: C.yXt.STATUS })), e);
                }
            }
        }, [g]),
        Z = r.useCallback(
            async (e, t) => {
                try {
                    await c.ZP.updateVerificationForm(_, e, t);
                } catch (e) {
                    throw (b(new o.Hx(e).getAnyErrorMessage()), e);
                }
            },
            [_]
        ),
        L = r.useCallback(() => {
            if (l.joinType === p.A.INVITE) {
                let { requireTerms: e, termRules: t = [] } = l,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                if (n.length < 1 && e) {
                    b(N.intl.string(N.t.TCHkcX));
                    return;
                }
                let i =
                    n.length > 0
                        ? [
                              {
                                  field_type: d.QJ.TERMS,
                                  label: N.intl.string(N.t['9suSIC']),
                                  values: n,
                                  required: !0
                              }
                          ]
                        : [];
                y(async () => {
                    await A(), await Z(i, e);
                });
            } else if (l.joinType === p.A.APPLY) {
                let { pendingVerificationFields: e } = l;
                if (null == e) return;
                if (!e.some((e) => (0, u._C)(e))) {
                    b(N.intl.string(N.t.HGVrIy));
                    return;
                }
                y(async () => {
                    await A(), await Z([...e], !0);
                });
            }
        }, [l, y, A, Z]),
        D = r.useCallback(() => {
            let e = (e) => {
                if (l.joinType === p.A.DISCOVERABLE && l.settingsView === f.U.ELIGIBLE_DISABLED) {
                    (0, s.openModalLazy)(async () => {
                        let { default: t } = await n.e('67376').then(n.bind(n, 207252));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                guildId: _,
                                onConfirm: e
                            });
                    });
                    return;
                }
                e();
            };
            return ((e) => {
                if (E && S > 0 && l.joinType !== p.A.APPLY) {
                    (0, s.openModalLazy)(async () => {
                        let { default: t } = await n.e('55009').then(n.bind(n, 826390));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                guildId: _,
                                submittedGuildJoinRequestsCount: S,
                                onConfirm: e
                            });
                    });
                    return;
                }
                e();
            })(() => e(L));
        }, [E, L, l, _, S]),
        O = l.joinType === p.A.DISCOVERABLE && l.settingsView === f.U.ELIGIBLE_DISABLED,
        M = null != g.description && x.primaryCategoryId !== v.o3 && x.keywords.length > 0;
    return (0, i.jsx)(a.Z, {
        message: O ? N.intl.string(N.t.V2G2Ym) : void 0,
        onSaveText: O ? N.intl.string(N.t['qjtt/v']) : void 0,
        submitting: I,
        errorMessage: j,
        onReset: R,
        onSave: D,
        disabled: O && !M
    });
}
function I() {
    let e = (0, l.e7)([x.Z], () => x.Z.pendingState),
        { settingsGuild: t, settingsMetadata: n } = (0, l.cj)([g.Z], () => {
            let { guild: e, guildMetadata: t } = g.Z.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t
            };
        });
    return null == e || null == t
        ? null
        : e.joinType === p.A.DISCOVERABLE && e.settingsView === f.U.INELIGIBLE
          ? (0, i.jsx)(a.Z, {
                message: N.intl.string(N.t.TEXwRk),
                onReset: () => h.Z.init(t.id, C.pNK.ACCESS)
            })
          : (0, i.jsx)(_, {
                pendingState: e,
                settingsGuild: t,
                settingsMetadata: n
            });
}
