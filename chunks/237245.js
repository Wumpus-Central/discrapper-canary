n.d(t, { w: () => E }), n(47120);
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
    _ = n(658666),
    C = n(384632),
    f = n(386885),
    v = n(981631),
    N = n(128449),
    j = n(388032);
function I(e) {
    var t;
    let { pendingState: l, dirtyState: x, originalGuild: _, settingsGuild: I, settingsMetadata: E } = e,
        b = I.id,
        [T, S] = r.useState(!1),
        [R, Z] = r.useState(null),
        y = I.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        A = null !== (t = (0, h.A)({ guildId: I.id })) && void 0 !== t ? t : 0,
        L = r.useCallback(() => {
            Z(null), g.Z.init(b, v.pNK.ACCESS);
        }, [b]),
        D = r.useCallback(async (e) => {
            try {
                S(!0), await e(), Z(null);
            } finally {
                S(!1);
            }
        }, []),
        k = r.useCallback(
            async (e) => {
                try {
                    await g.Z.saveGuild(b, e, { throwErr: !0 });
                } catch (e) {
                    throw ('object' == typeof e && 'message' in e ? Z(e.message) : Z(j.intl.formatToPlainString(j.t.aTVNen, { statusPageURL: v.yXt.STATUS })), e);
                }
            },
            [b]
        ),
        O = r.useCallback(
            async (e, t) => {
                try {
                    await d.ZP.updateVerificationForm(b, e, t);
                } catch (e) {
                    throw (Z(new o.Hx(e).getAnyErrorMessage()), e);
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
                                  label: j.intl.string(j.t['9suSIC']),
                                  values: t,
                                  required: !0
                              }
                          ]
                        : [];
                await O(n, e);
            },
            [O]
        ),
        w = r.useCallback(() => {
            if (l.joinType === C.A.INVITE) {
                let { requireTerms: e, termRules: t = [] } = l,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                D(async () => {
                    if (I.hasFeature(v.oNc.DISCOVERABLE)) {
                        let e = new Set(I.features);
                        e.delete(v.oNc.DISCOVERABLE), await k({ features: e });
                    }
                    x.verificationDirty && (await P(e, n));
                });
            } else if (l.joinType === C.A.APPLY) {
                let { pendingVerificationFields: e } = l;
                if (null == e) return;
                D(async () => {
                    if (I.hasFeature(v.oNc.DISCOVERABLE)) {
                        let e = new Set(I.features);
                        e.delete(v.oNc.DISCOVERABLE), await k({ features: e });
                    }
                    x.verificationDirty && (await O([...e], !0));
                });
            } else if (l.joinType === C.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = l,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                D(async () => {
                    if ((x.verificationDirty && (await P(e, n)), x.guildDirty)) {
                        (0, p.UA)(I, _);
                        let e = new Set(I.features);
                        e.add(v.oNc.DISCOVERABLE),
                            e.delete(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                            await k({
                                features: e,
                                discoverySplash: I.discoverySplash,
                                description: I.description,
                                preferredLocale: I.preferredLocale
                            });
                        try {
                            await (0, c.Vv)({
                                guildId: I.id,
                                ...E
                            });
                        } catch (e) {
                            throw (Z(new o.Hx(e).getAnyErrorMessage()), e);
                        }
                    }
                });
            }
        }, [l, D, I, x, k, P, O, _, E]),
        M = r.useCallback(() => {
            let e = (e) => {
                    if (l.joinType === C.A.DISCOVERABLE && l.settingsView === f.U.ELIGIBLE_DISABLED) {
                        (0, s.ZDy)(async () => {
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
                    if (y && A > 0 && l.joinType !== C.A.APPLY) {
                        (0, s.ZDy)(async () => {
                            let { default: t } = await n.e('55009').then(n.bind(n, 826390));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    ...n,
                                    guildId: b,
                                    submittedGuildJoinRequestsCount: A,
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
                        Z(j.intl.string(j.t.TCHkcX));
                        return;
                    }
                }
                if (l.joinType === C.A.APPLY) {
                    var t;
                    if (!(null === (t = l.pendingVerificationFields) || void 0 === t ? void 0 : t.some((e) => (0, m._C)(e)))) {
                        Z(j.intl.string(j.t.HGVrIy));
                        return;
                    }
                }
                e();
            })(() => t(() => e(w)));
        }, [y, w, l, b, A]),
        U = l.joinType === C.A.DISCOVERABLE && l.settingsView === f.U.ELIGIBLE_DISABLED,
        G = null != I.description && E.primaryCategoryId !== N.o3 && E.keywords.length > 0;
    return (0, i.jsx)(a.Z, {
        message: U ? j.intl.string(j.t.V2G2Ym) : void 0,
        onSaveText: U ? j.intl.string(j.t['qjtt/v']) : void 0,
        submitting: T,
        errorMessage: R,
        onReset: L,
        onSave: M,
        disabled: U && !G
    });
}
function E() {
    let { pendingState: e, dirtyState: t } = (0, l.cj)([_.Z], () => ({
            pendingState: _.Z.pendingState,
            dirtyState: _.Z.dirtyState
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
        : e.joinType === C.A.DISCOVERABLE && e.settingsView === f.U.INELIGIBLE
          ? (0, i.jsx)(a.Z, {
                message: j.intl.string(j.t.TEXwRk),
                onReset: () => g.Z.init(n.id, v.pNK.ACCESS)
            })
          : (0, i.jsx)(I, {
                pendingState: e,
                dirtyState: t,
                originalGuild: s,
                settingsGuild: n,
                settingsMetadata: r
            });
}
