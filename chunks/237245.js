n.d(t, { w: () => I }), n(388685), n(781311), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(796027),
    s = n(481060),
    o = n(881052),
    c = n(456268),
    d = n(863249),
    u = n(246364),
    g = n(983736),
    m = n(571728),
    p = n(699553),
    f = n(434404),
    h = n(999382),
    b = n(490597),
    x = n(658666),
    j = n(384632),
    _ = n(386885),
    v = n(981631),
    O = n(128449),
    C = n(388032);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
function E(e) {
    var t;
    let {
            pendingState: l,
            dirtyState: h,
            originalGuild: x,
            settingsGuild: E,
            settingsMetadata: I,
            settingsProfile: S,
        } = e,
        T = E.id,
        [P, w] = i.useState(!1),
        [Z, R] = i.useState(null),
        D = E.features.has(v.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        A = null != (t = (0, m.A)({ guildId: E.id })) ? t : 0,
        L = i.useCallback(() => {
            R(null), f.Z.init(T, v.pNK.ACCESS);
        }, [T]),
        k = i.useCallback(async (e) => {
            try {
                w(!0), await e(), R(null);
            } finally {
                w(!1);
            }
        }, []),
        G = i.useCallback(
            async (e) => {
                try {
                    await f.Z.saveGuild(T, e, { throwErr: !0 });
                } catch (e) {
                    throw (
                        ("object" == typeof e && "message" in e
                            ? R(e.message)
                            : R(C.intl.formatToPlainString(C.t.aTVNes, { statusPageURL: v.yXt.STATUS })),
                        e)
                    );
                }
            },
            [T],
        ),
        M = i.useCallback(
            async (e, t, n) => {
                try {
                    await d.ZP.updateVerificationForm(T, e, t, n);
                } catch (e) {
                    throw (R(new o.Hx(e).getAnyErrorMessage()), e);
                }
            },
            [T],
        ),
        U = i.useCallback(
            async (e, t, n) => {
                let r =
                    t.length > 0
                        ? [
                              {
                                  field_type: u.QJ.TERMS,
                                  label: C.intl.string(C.t["9suSIA"]),
                                  values: t,
                                  required: !0,
                              },
                          ]
                        : [];
                await M(r, e, n);
            },
            [M],
        ),
        B = i.useCallback(
            (e) => {
                if (
                    (l.isAgeRestricted !== (E.ownerConfiguredContentLevel === v.V_K.AGE_RESTRICTED) &&
                        k(async () => {
                            let e = l.isAgeRestricted ? v.V_K.AGE_RESTRICTED : v.V_K.DEFAULT;
                            await G({ ownerConfiguredContentLevel: e });
                        }),
                    l.joinType === j.A.INVITE)
                ) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => "" !== e);
                    k(async () => {
                        if (E.features.has(v.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(E.features);
                            e.delete(v.GuildFeatures.DISCOVERABLE), await G({ features: e });
                        }
                        h.verificationDirty && (await U(t, r, e));
                    });
                } else if (l.joinType === j.A.APPLY) {
                    let { pendingVerificationFields: t } = l;
                    if (null == t) return;
                    k(async () => {
                        if (E.features.has(v.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(E.features);
                            e.delete(v.GuildFeatures.DISCOVERABLE), await G({ features: e });
                        }
                        h.verificationDirty && (await M([...t], !0, e)),
                            h.profileDirty && null != S && (await (0, p.pV)(E.id, { visibility: S.visibility }));
                    });
                } else if (l.joinType === j.A.DISCOVERABLE) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => "" !== e);
                    k(async () => {
                        if ((h.verificationDirty && (await U(t, r, e)), h.guildDirty)) {
                            (0, b.UA)(E, x);
                            let e = new Set(E.features);
                            e.add(v.GuildFeatures.DISCOVERABLE),
                                e.delete(v.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                                await G({
                                    features: e,
                                    discoverySplash: E.discoverySplash,
                                    description: E.description,
                                    preferredLocale: E.preferredLocale,
                                });
                            try {
                                await (0, c.Vv)(y({ guildId: E.id }, I));
                            } catch (e) {
                                throw (R(new o.Hx(e).getAnyErrorMessage()), e);
                            }
                        }
                    });
                }
            },
            [l, k, E, h, G, U, S, M, x, I],
        ),
        F = i.useCallback(() => {
            var e;
            if (l.joinType === j.A.INVITE || l.joinType === j.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = l;
                if (t.map((e) => e.value.trim()).filter((e) => "" !== e).length < 1 && e)
                    return void R(C.intl.string(C.t.TCHkcd));
            }
            if (
                l.joinType === j.A.APPLY &&
                !(null == (e = l.pendingVerificationFields) ? void 0 : e.some((e) => (0, g._C)(e)))
            )
                return void R(C.intl.string(C.t.HGVrI3));
            ((e) => {
                if (D && A > 0 && l.joinType !== j.A.APPLY)
                    return (0, s.ZDy)(async () => {
                        let { default: t } = await n.e("55009").then(n.bind(n, 826390));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                N(y({}, n), {
                                    guildId: T,
                                    submittedGuildJoinRequestsCount: A,
                                    onConfirm: e,
                                }),
                            );
                    });
                e();
            })((e) =>
                ((e) => {
                    if (l.joinType === j.A.DISCOVERABLE && l.settingsView === _.U.ELIGIBLE_DISABLED)
                        return void (0, s.ZDy)(async () => {
                            let { default: t } = await n.e("67376").then(n.bind(n, 207252));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    N(y({}, n), {
                                        guildId: T,
                                        onConfirm: e,
                                    }),
                                );
                        });
                    e();
                })(() => B(e)),
            );
        }, [D, B, l, T, A]),
        H = l.joinType === j.A.DISCOVERABLE && l.settingsView === _.U.ELIGIBLE_DISABLED,
        W = null != E.description && I.primaryCategoryId !== O.o3 && I.keywords.length > 0;
    return (0, r.jsx)(a.Z, {
        message: H ? C.intl.string(C.t.V2G2Yr) : void 0,
        onSaveText: H ? C.intl.string(C.t["qjtt/p"]) : void 0,
        submitting: P,
        errorMessage: Z,
        onReset: L,
        onSave: F,
        disabled: H && !W,
    });
}
function I() {
    let { pendingState: e, dirtyState: t } = (0, l.cj)([x.Z], () => ({
            pendingState: x.Z.pendingState,
            dirtyState: x.Z.dirtyState,
        })),
        {
            settingsGuild: n,
            settingsMetadata: i,
            originalGuild: s,
            guildProfile: o,
        } = (0, l.cj)([h.Z], () => {
            let { guild: e, guildMetadata: t, originalGuild: n, profile: r } = h.Z.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t,
                originalGuild: n,
                guildProfile: r,
            };
        });
    return null == e || null == n
        ? null
        : e.joinType === j.A.DISCOVERABLE && e.settingsView === _.U.INELIGIBLE
          ? (0, r.jsx)(a.Z, {
                message: C.intl.string(C.t.TEXwRt),
                onReset: () => f.Z.init(n.id, v.pNK.ACCESS),
            })
          : (0, r.jsx)(E, {
                pendingState: e,
                dirtyState: t,
                originalGuild: s,
                settingsGuild: n,
                settingsMetadata: i,
                settingsProfile: o,
            });
}
