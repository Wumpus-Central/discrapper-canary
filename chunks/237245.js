n.d(t, {
    w: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(881052),
    c = n(456268),
    d = n(863249),
    u = n(246364),
    m = n(983736),
    h = n(571728),
    g = n(434404),
    x = n(999382),
    p = n(654351),
    f = n(658666),
    C = n(384632),
    v = n(386885),
    I = n(981631),
    N = n(128449),
    _ = n(388032);
function T(e) {
    var t;
    let { pendingState: l, dirtyState: x, originalGuild: f, settingsGuild: T, settingsMetadata: j } = e,
        b = T.id,
        [E, S] = r.useState(!1),
        [R, y] = r.useState(null),
        A = T.hasFeature(I.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        Z = null !== (t = (0, h.A)({ guildId: T.id })) && void 0 !== t ? t : 0,
        L = r.useCallback(() => {
            y(null), g.Z.init(b, I.pNK.ACCESS);
        }, [b]),
        D = r.useCallback(async (e) => {
            try {
                S(!0), await e(), y(null);
            } finally {
                S(!1);
            }
        }, []),
        O = r.useCallback(
            async (e) => {
                try {
                    await g.Z.saveGuild(b, e, { throwErr: !0 });
                } catch (e) {
                    throw ('object' == typeof e && 'message' in e ? y(e.message) : y(_.intl.formatToPlainString(_.t.aTVNen, { statusPageURL: I.yXt.STATUS })), e);
                }
            },
            [b]
        ),
        M = r.useCallback(
            async (e, t) => {
                try {
                    await d.ZP.updateVerificationForm(b, e, t);
                } catch (e) {
                    throw (y(new o.Hx(e).getAnyErrorMessage()), e);
                }
            },
            [b]
        ),
        P = r.useCallback(
            async (e, t) => {
                let n =
                    t.length > 0
                        ? [
                              {
                                  field_type: u.QJ.TERMS,
                                  label: _.intl.string(_.t['9suSIC']),
                                  values: t,
                                  required: !0
                              }
                          ]
                        : [];
                await M(n, e);
            },
            [M]
        ),
        k = r.useCallback(() => {
            if (l.joinType === C.A.INVITE) {
                let { requireTerms: e, termRules: t = [] } = l,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                D(async () => {
                    if (T.hasFeature(I.oNc.DISCOVERABLE)) {
                        let e = new Set(T.features);
                        e.delete(I.oNc.DISCOVERABLE), await O({ features: e });
                    }
                    x.verificationDirty && (await P(e, n));
                });
            } else if (l.joinType === C.A.APPLY) {
                let { pendingVerificationFields: e } = l;
                if (null == e) return;
                D(async () => {
                    if (T.hasFeature(I.oNc.DISCOVERABLE)) {
                        let e = new Set(T.features);
                        e.delete(I.oNc.DISCOVERABLE), await O({ features: e });
                    }
                    x.verificationDirty && (await M([...e], !0));
                });
            } else if (l.joinType === C.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = l,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                D(async () => {
                    if ((x.verificationDirty && (await P(e, n)), x.guildDirty)) {
                        (0, p.UA)(T, f);
                        let e = new Set(T.features);
                        e.add(I.oNc.DISCOVERABLE),
                            e.delete(I.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                            await O({
                                features: e,
                                discoverySplash: T.discoverySplash,
                                description: T.description,
                                preferredLocale: T.preferredLocale
                            });
                        try {
                            await (0, c.Vv)({
                                guildId: T.id,
                                ...j
                            });
                        } catch (e) {
                            throw (y(new o.Hx(e).getAnyErrorMessage()), e);
                        }
                    }
                });
            }
        }, [l, D, T, x, O, P, M, f, j]),
        w = r.useCallback(() => {
            let e = (e) => {
                    if (l.joinType === C.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED) {
                        (0, s.openModalLazy)(async () => {
                            let { default: t } = await n.e('67376').then(n.bind(n, 207252));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    guildId: b,
                                    onConfirm: e
                                });
                        });
                        return;
                    }
                    e();
                },
                t = (e) => {
                    if (A && Z > 0 && l.joinType !== C.A.APPLY) {
                        (0, s.openModalLazy)(async () => {
                            let { default: t } = await n.e('55009').then(n.bind(n, 826390));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    guildId: b,
                                    submittedGuildJoinRequestsCount: Z,
                                    onConfirm: e
                                });
                        });
                        return;
                    }
                    e();
                };
            return ((e) => {
                if (l.joinType === C.A.INVITE || l.joinType === C.A.DISCOVERABLE) {
                    let { requireTerms: e, termRules: t = [] } = l;
                    if (t.map((e) => e.value.trim()).filter((e) => '' !== e).length < 1 && e) {
                        y(_.intl.string(_.t.TCHkcX));
                        return;
                    }
                }
                if (l.joinType === C.A.APPLY) {
                    var t;
                    if (!(null === (t = l.pendingVerificationFields) || void 0 === t ? void 0 : t.some((e) => (0, m._C)(e)))) {
                        y(_.intl.string(_.t.HGVrIy));
                        return;
                    }
                }
                e();
            })(() => t(() => e(k)));
        }, [A, k, l, b, Z]),
        B = l.joinType === C.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED,
        U = null != T.description && j.primaryCategoryId !== N.o3 && j.keywords.length > 0;
    return (0, i.jsx)(a.Z, {
        message: B ? _.intl.string(_.t.V2G2Ym) : void 0,
        onSaveText: B ? _.intl.string(_.t['qjtt/v']) : void 0,
        submitting: E,
        errorMessage: R,
        onReset: L,
        onSave: w,
        disabled: B && !U
    });
}
function j() {
    let { pendingState: e, dirtyState: t } = (0, l.cj)([f.Z], () => ({
            pendingState: f.Z.pendingState,
            dirtyState: f.Z.dirtyState
        })),
        {
            settingsGuild: n,
            settingsMetadata: r,
            originalGuild: s
        } = (0, l.cj)([x.Z], () => {
            let { guild: e, guildMetadata: t, originalGuild: n } = x.Z.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t,
                originalGuild: n
            };
        });
    return null == e || null == n
        ? null
        : e.joinType === C.A.DISCOVERABLE && e.settingsView === v.U.INELIGIBLE
          ? (0, i.jsx)(a.Z, {
                message: _.intl.string(_.t.TEXwRk),
                onReset: () => g.Z.init(n.id, I.pNK.ACCESS)
            })
          : (0, i.jsx)(T, {
                pendingState: e,
                dirtyState: t,
                originalGuild: s,
                settingsGuild: n,
                settingsMetadata: r
            });
}
