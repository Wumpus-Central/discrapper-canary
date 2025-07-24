(n.d(t, { w: () => E }), n(388685), n(781311), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(881052),
    c = n(456268),
    d = n(863249),
    u = n(246364),
    m = n(983736),
    g = n(571728),
    p = n(699553),
    f = n(434404),
    h = n(999382),
    x = n(654351),
    b = n(658666),
    j = n(384632),
    v = n(386885),
    _ = n(981631),
    O = n(128449),
    y = n(388032);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    var t;
    let { pendingState: l, dirtyState: h, originalGuild: b, settingsGuild: I, settingsMetadata: E, settingsProfile: S } = e,
        T = I.id,
        [P, w] = i.useState(!1),
        [R, Z] = i.useState(null),
        D = I.features.has(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        A = null != (t = (0, g.A)({ guildId: I.id })) ? t : 0,
        L = i.useCallback(() => {
            (Z(null), f.Z.init(T, _.pNK.ACCESS));
        }, [T]),
        k = i.useCallback(async (e) => {
            try {
                (w(!0), await e(), Z(null));
            } finally {
                w(!1);
            }
        }, []),
        M = i.useCallback(
            async (e) => {
                try {
                    await f.Z.saveGuild(T, e, { throwErr: !0 });
                } catch (e) {
                    throw ('object' == typeof e && 'message' in e ? Z(e.message) : Z(y.intl.formatToPlainString(y.t.aTVNen, { statusPageURL: _.yXt.STATUS })), e);
                }
            },
            [T]
        ),
        G = i.useCallback(
            async (e, t, n) => {
                try {
                    await d.ZP.updateVerificationForm(T, e, t, n);
                } catch (e) {
                    throw (Z(new o.Hx(e).getAnyErrorMessage()), e);
                }
            },
            [T]
        ),
        U = i.useCallback(
            async (e, t, n) => {
                let r =
                    t.length > 0
                        ? [
                              {
                                  field_type: u.QJ.TERMS,
                                  label: y.intl.string(y.t['9suSIC']),
                                  values: t,
                                  required: !0
                              }
                          ]
                        : [];
                await G(r, e, n);
            },
            [G]
        ),
        B = i.useCallback(
            (e) => {
                if (
                    (l.isAgeRestricted !== (I.ownerConfiguredContentLevel === _.V_K.AGE_RESTRICTED) &&
                        k(async () => {
                            let e = l.isAgeRestricted ? _.V_K.AGE_RESTRICTED : _.V_K.DEFAULT;
                            await M({ ownerConfiguredContentLevel: e });
                        }),
                    l.joinType === j.A.INVITE)
                ) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => '' !== e);
                    k(async () => {
                        if (I.features.has(_.oNc.DISCOVERABLE)) {
                            let e = new Set(I.features);
                            (e.delete(_.oNc.DISCOVERABLE), await M({ features: e }));
                        }
                        h.verificationDirty && (await U(t, r, e));
                    });
                } else if (l.joinType === j.A.APPLY) {
                    let { pendingVerificationFields: t } = l;
                    if (null == t) return;
                    k(async () => {
                        if (I.features.has(_.oNc.DISCOVERABLE)) {
                            let e = new Set(I.features);
                            (e.delete(_.oNc.DISCOVERABLE), await M({ features: e }));
                        }
                        (h.verificationDirty && (await G([...t], !0, e)), h.profileDirty && null != S && (await (0, p.pV)(I.id, { visibility: S.visibility })));
                    });
                } else if (l.joinType === j.A.DISCOVERABLE) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => '' !== e);
                    k(async () => {
                        if ((h.verificationDirty && (await U(t, r, e)), h.guildDirty)) {
                            (0, x.UA)(I, b);
                            let e = new Set(I.features);
                            (e.add(_.oNc.DISCOVERABLE),
                                e.delete(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                                await M({
                                    features: e,
                                    discoverySplash: I.discoverySplash,
                                    description: I.description,
                                    preferredLocale: I.preferredLocale
                                }));
                            try {
                                await (0, c.Vv)(C({ guildId: I.id }, E));
                            } catch (e) {
                                throw (Z(new o.Hx(e).getAnyErrorMessage()), e);
                            }
                        }
                    });
                }
            },
            [l, k, I, h, M, U, S, G, b, E]
        ),
        F = i.useCallback(() => {
            var e;
            let t = (e) => {
                    if (l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED)
                        return void (0, s.ZDy)(async () => {
                            let { default: t } = await n.e('67376').then(n.bind(n, 207252));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    N(C({}, n), {
                                        guildId: T,
                                        onConfirm: e
                                    })
                                );
                        });
                    e();
                },
                i = (e) => {
                    if (D && A > 0 && l.joinType !== j.A.APPLY)
                        return void (0, s.ZDy)(async () => {
                            let { default: t } = await n.e('55009').then(n.bind(n, 185141));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    N(C({}, n), {
                                        guildId: T,
                                        submittedGuildJoinRequestsCount: A,
                                        onConfirm: e
                                    })
                                );
                        });
                    e();
                };
            if (l.joinType === j.A.INVITE || l.joinType === j.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = l;
                if (t.map((e) => e.value.trim()).filter((e) => '' !== e).length < 1 && e) return void Z(y.intl.string(y.t.TCHkcX));
            }
            if (l.joinType === j.A.APPLY && !(null == (e = l.pendingVerificationFields) ? void 0 : e.some((e) => (0, m._C)(e)))) return void Z(y.intl.string(y.t.HGVrIy));
            i((e) => t(() => B(e)));
        }, [D, B, l, T, A]),
        H = l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED,
        z = null != I.description && E.primaryCategoryId !== O.o3 && E.keywords.length > 0;
    return (0, r.jsx)(a.Z, {
        message: H ? y.intl.string(y.t.V2G2Ym) : void 0,
        onSaveText: H ? y.intl.string(y.t['qjtt/v']) : void 0,
        submitting: P,
        errorMessage: R,
        onReset: L,
        onSave: F,
        disabled: H && !z
    });
}
function E() {
    let { pendingState: e, dirtyState: t } = (0, l.cj)([b.Z], () => ({
            pendingState: b.Z.pendingState,
            dirtyState: b.Z.dirtyState
        })),
        {
            settingsGuild: n,
            settingsMetadata: i,
            originalGuild: s,
            guildProfile: o
        } = (0, l.cj)([h.Z], () => {
            let { guild: e, guildMetadata: t, originalGuild: n, profile: r } = h.Z.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t,
                originalGuild: n,
                guildProfile: r
            };
        });
    return null == e || null == n
        ? null
        : e.joinType === j.A.DISCOVERABLE && e.settingsView === v.U.INELIGIBLE
          ? (0, r.jsx)(a.Z, {
                message: y.intl.string(y.t.TEXwRk),
                onReset: () => f.Z.init(n.id, _.pNK.ACCESS)
            })
          : (0, r.jsx)(I, {
                pendingState: e,
                dirtyState: t,
                originalGuild: s,
                settingsGuild: n,
                settingsMetadata: i,
                settingsProfile: o
            });
}
