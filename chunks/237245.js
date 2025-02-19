n.d(t, { w: () => I }), n(47120), n(566702), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(852860),
    o = n(881052),
    c = n(456268),
    d = n(863249),
    u = n(246364),
    m = n(983736),
    p = n(571728),
    g = n(434404),
    h = n(999382),
    f = n(654351),
    b = n(658666),
    x = n(384632),
    j = n(386885),
    N = n(981631),
    v = n(128449),
    _ = n(388032);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
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
function C(e) {
    var t;
    let { pendingState: s, dirtyState: h, originalGuild: b, settingsGuild: C, settingsMetadata: I } = e,
        E = C.id,
        [S, T] = i.useState(!1),
        [P, w] = i.useState(null),
        R = C.hasFeature(N.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        D = null !== (t = (0, p.A)({ guildId: C.id })) && void 0 !== t ? t : 0,
        Z = i.useCallback(() => {
            w(null), g.Z.init(E, N.pNK.ACCESS);
        }, [E]),
        A = i.useCallback(async (e) => {
            try {
                T(!0), await e(), w(null);
            } finally {
                T(!1);
            }
        }, []),
        k = i.useCallback(
            async (e) => {
                try {
                    await g.Z.saveGuild(E, e, { throwErr: !0 });
                } catch (e) {
                    throw ('object' == typeof e && 'message' in e ? w(e.message) : w(_.NW.formatToPlainString(_.t.aTVNen, { statusPageURL: N.yXt.STATUS })), e);
                }
            },
            [E]
        ),
        W = i.useCallback(
            async (e, t) => {
                try {
                    await d.ZP.updateVerificationForm(E, e, t);
                } catch (e) {
                    throw (w(new o.Hx(e).getAnyErrorMessage()), e);
                }
            },
            [E]
        ),
        L = i.useCallback(
            async (e, t) => {
                let n =
                    t.length > 0
                        ? [
                              {
                                  field_type: u.QJ.TERMS,
                                  label: _.NW.string(_.t['9suSIC']),
                                  values: t,
                                  required: !0
                              }
                          ]
                        : [];
                await W(n, e);
            },
            [W]
        ),
        M = i.useCallback(() => {
            if (s.joinType === x.A.INVITE) {
                let { requireTerms: e, termRules: t = [] } = s,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                A(async () => {
                    if (C.hasFeature(N.oNc.DISCOVERABLE)) {
                        let e = new Set(C.features);
                        e.delete(N.oNc.DISCOVERABLE), await k({ features: e });
                    }
                    h.verificationDirty && (await L(e, n));
                });
            } else if (s.joinType === x.A.APPLY) {
                let { pendingVerificationFields: e } = s;
                if (null == e) return;
                A(async () => {
                    if (C.hasFeature(N.oNc.DISCOVERABLE)) {
                        let e = new Set(C.features);
                        e.delete(N.oNc.DISCOVERABLE), await k({ features: e });
                    }
                    h.verificationDirty && (await W([...e], !0));
                });
            } else if (s.joinType === x.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = s,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                A(async () => {
                    if ((h.verificationDirty && (await L(e, n)), h.guildDirty)) {
                        (0, f.UA)(C, b);
                        let e = new Set(C.features);
                        e.add(N.oNc.DISCOVERABLE),
                            e.delete(N.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                            await k({
                                features: e,
                                discoverySplash: C.discoverySplash,
                                description: C.description,
                                preferredLocale: C.preferredLocale
                            });
                        try {
                            await (0, c.Vv)(O({ guildId: C.id }, I));
                        } catch (e) {
                            throw (w(new o.Hx(e).getAnyErrorMessage()), e);
                        }
                    }
                });
            }
        }, [s, A, C, h, k, L, W, b, I]),
        U = i.useCallback(() => {
            let e = (e) => {
                    if (s.joinType === x.A.DISCOVERABLE && s.settingsView === j.U.ELIGIBLE_DISABLED) {
                        (0, a.ZDy)(async () => {
                            let { default: t } = await n.e('67376').then(n.bind(n, 207252));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    y(O({}, n), {
                                        guildId: E,
                                        onConfirm: e
                                    })
                                );
                        });
                        return;
                    }
                    e();
                },
                t = (e) => {
                    if (R && D > 0 && s.joinType !== x.A.APPLY) {
                        (0, a.ZDy)(async () => {
                            let { default: t } = await n.e('55009').then(n.bind(n, 826390));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    y(O({}, n), {
                                        guildId: E,
                                        submittedGuildJoinRequestsCount: D,
                                        onConfirm: e
                                    })
                                );
                        });
                        return;
                    }
                    e();
                };
            return ((e) => {
                if (s.joinType === x.A.INVITE || s.joinType === x.A.DISCOVERABLE) {
                    let { requireTerms: e, termRules: t = [] } = s;
                    if (t.map((e) => e.value.trim()).filter((e) => '' !== e).length < 1 && e) {
                        w(_.NW.string(_.t.TCHkcX));
                        return;
                    }
                }
                if (s.joinType === x.A.APPLY) {
                    var t;
                    if (!(null === (t = s.pendingVerificationFields) || void 0 === t ? void 0 : t.some((e) => (0, m._C)(e)))) {
                        w(_.NW.string(_.t.HGVrIy));
                        return;
                    }
                }
                e();
            })(() => t(() => e(M)));
        }, [R, M, s, E, D]),
        G = s.joinType === x.A.DISCOVERABLE && s.settingsView === j.U.ELIGIBLE_DISABLED,
        B = null != C.description && I.primaryCategoryId !== v.o3 && I.keywords.length > 0;
    return (0, r.jsx)(l.Z, {
        message: G ? _.NW.string(_.t.V2G2Ym) : void 0,
        onSaveText: G ? _.NW.string(_.t['qjtt/v']) : void 0,
        submitting: S,
        errorMessage: P,
        onReset: Z,
        onSave: U,
        disabled: G && !B
    });
}
function I() {
    let { pendingState: e, dirtyState: t } = (0, s.cj)([b.Z], () => ({
            pendingState: b.Z.pendingState,
            dirtyState: b.Z.dirtyState
        })),
        {
            settingsGuild: n,
            settingsMetadata: i,
            originalGuild: a
        } = (0, s.cj)([h.Z], () => {
            let { guild: e, guildMetadata: t, originalGuild: n } = h.Z.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t,
                originalGuild: n
            };
        });
    return null == e || null == n
        ? null
        : e.joinType === x.A.DISCOVERABLE && e.settingsView === j.U.INELIGIBLE
          ? (0, r.jsx)(l.Z, {
                message: _.NW.string(_.t.TEXwRk),
                onReset: () => g.Z.init(n.id, N.pNK.ACCESS)
            })
          : (0, r.jsx)(C, {
                pendingState: e,
                dirtyState: t,
                originalGuild: a,
                settingsGuild: n,
                settingsMetadata: i
            });
}
