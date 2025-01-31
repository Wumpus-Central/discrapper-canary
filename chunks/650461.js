n.d(t, { ZP: () => S }), n(47120), n(192379);
var r,
    l = n(392711),
    i = n.n(l),
    a = n(442837),
    s = n(570140),
    o = n(944163),
    E = n(709054),
    u = n(116175),
    c = n(308083);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Map(),
    A = new Map(),
    T = !1,
    I = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: c.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [c.U6, c.U6, c.U6],
        tag: '',
        verificationForm: { ...o.t },
        badgeKind: u.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: c.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: c.Wy.GAMES,
        furthestStep: c.Wy.GAMES,
        requiredGameId: void 0
    });
function N(e) {
    var t;
    return null !== (t = d.get(e)) && void 0 !== t
        ? t
        : (function () {
              let e = i().cloneDeep(I);
              return (e.badgeKind = (0, u.lP)()), (e.banner = (0, c.i1)()), e;
          })();
}
function g(e, t) {
    let n = N(e);
    d.set(e, {
        ...n,
        ...t
    });
    let r = A.get(e);
    if (null != r) {
        let n = { ...r };
        Object.keys(t).forEach((e) => {
            delete n[e];
        }),
            A.set(e, n);
    }
}
class O extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            E.default.keys(e.progressByGuild).forEach((t) => {
                var n, r, l, i, a;
                d.set(t, {
                    gameApplicationIds: new Set((n = e.progressByGuild[t]).gameApplicationIds),
                    playstyle: n.playstyle,
                    interests: new Set(n.interests),
                    description: n.description,
                    wildcardDescriptors: null !== (r = n.wildcardDescriptors) && void 0 !== r ? r : [c.U6, c.U6, c.U6],
                    tag: n.tag,
                    verificationForm: null !== (l = n.verificationForm) && void 0 !== l ? l : { ...o.t },
                    badgeKind: null !== (i = n.badgeKind) && void 0 !== i ? i : u.ZD.SWORD,
                    badgePrimaryColor: n.badgePrimaryColor,
                    badgeSecondaryColor: n.badgeSecondaryColor,
                    banner: null !== (a = n.banner) && void 0 !== a ? a : c.qC.NIGHT_SKY,
                    brandPrimaryColor: n.brandPrimaryColor,
                    brandSecondaryColor: n.brandSecondaryColor,
                    currentStep: n.currentStep,
                    furthestStep: n.furthestStep,
                    requiredGameId: n.requiredGameId
                });
            });
    }
    getState() {
        let e = {};
        return (
            d.forEach((t, n) => {
                e[n] = {
                    gameApplicationIds: Array.from(t.gameApplicationIds),
                    playstyle: t.playstyle,
                    interests: Array.from(t.interests),
                    description: t.description,
                    wildcardDescriptors: t.wildcardDescriptors,
                    tag: t.tag,
                    verificationForm: t.verificationForm,
                    badgeKind: t.badgeKind,
                    badgePrimaryColor: t.badgePrimaryColor,
                    badgeSecondaryColor: t.badgeSecondaryColor,
                    banner: t.banner,
                    brandPrimaryColor: t.brandPrimaryColor,
                    brandSecondaryColor: t.brandSecondaryColor,
                    currentStep: t.currentStep,
                    furthestStep: t.furthestStep,
                    requiredGameId: t.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: d.get(e),
            errors: A.get(e),
            submitting: T
        };
    }
    getGuildIds() {
        return [...d.keys()];
    }
}
_(O, 'displayName', 'ClanSetupStore'), _(O, 'persistKey', 'ClanSetupStore');
let S = new O(s.Z, {
    CLAN_SETUP_RESET: function () {
        d.clear(), A.clear();
    },
    CLAN_SETUP_UPDATE: function (e) {
        let { guildId: t, updates: n } = e;
        g(t, n);
    },
    CLAN_SETUP_SUBMIT: function (e) {
        let { guildId: t } = e;
        (T = !0), A.delete(t);
    },
    CLAN_SETUP_SUCCESS: function (e) {
        let { guildId: t } = e;
        (T = !1), d.delete(t), A.delete(t);
    },
    CLAN_SETUP_ERROR: function (e) {
        let { guildId: t, error: n } = e;
        (T = !1),
            A.set(t, {
                gameApplicationIds: n.getFirstFieldErrorMessage('game_application_ids'),
                playstyle: n.getFirstFieldErrorMessage('play_style'),
                description: n.getFirstFieldErrorMessage('description'),
                wildcardDescriptors: n.getFirstFieldErrorMessage('wildcard_descriptors'),
                interests: n.getFirstFieldErrorMessage('search_terms'),
                tag: n.getFirstFieldErrorMessage('tag'),
                verificationForm: n.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
            });
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let t;
        let { form: n, guildId: r, isLocalUpdate: l } = e;
        l &&
            ((t =
                null == n
                    ? o.t
                    : {
                          ...N(r).verificationForm,
                          ...n
                      }),
            g(r, { verificationForm: t }));
    }
});
