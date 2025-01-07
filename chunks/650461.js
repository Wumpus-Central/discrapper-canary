n(47120), n(192379);
var r,
    l = n(392711),
    i = n.n(l),
    s = n(442837),
    a = n(570140),
    o = n(944163),
    E = n(709054),
    u = n(116175),
    c = n(308083);
function d(e, t, n) {
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
let _ = new Map(),
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
function g(e) {
    var t;
    return null !== (t = _.get(e)) && void 0 !== t
        ? t
        : (function () {
              let e = i().cloneDeep(I);
              return (e.badgeKind = (0, u.lP)()), (e.banner = (0, c.i1)()), e;
          })();
}
function f(e, t) {
    let n = g(e);
    _.set(e, {
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
class N extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            E.default.keys(e.progressByGuild).forEach((t) => {
                var n, r, l, i, s;
                _.set(t, {
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
                    banner: null !== (s = n.banner) && void 0 !== s ? s : c.qC.NIGHT_SKY,
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
            _.forEach((t, n) => {
                var r;
                e[n] = {
                    gameApplicationIds: Array.from((r = t).gameApplicationIds),
                    playstyle: r.playstyle,
                    interests: Array.from(r.interests),
                    description: r.description,
                    wildcardDescriptors: r.wildcardDescriptors,
                    tag: r.tag,
                    verificationForm: r.verificationForm,
                    badgeKind: r.badgeKind,
                    badgePrimaryColor: r.badgePrimaryColor,
                    badgeSecondaryColor: r.badgeSecondaryColor,
                    banner: r.banner,
                    brandPrimaryColor: r.brandPrimaryColor,
                    brandSecondaryColor: r.brandSecondaryColor,
                    currentStep: r.currentStep,
                    furthestStep: r.furthestStep,
                    requiredGameId: r.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: _.get(e),
            errors: A.get(e),
            submitting: T
        };
    }
    getGuildIds() {
        return [..._.keys()];
    }
}
d(N, 'displayName', 'ClanSetupStore'),
    d(N, 'persistKey', 'ClanSetupStore'),
    (t.ZP = new N(a.Z, {
        CLAN_SETUP_RESET: function () {
            _.clear(), A.clear();
        },
        CLAN_SETUP_UPDATE: function (e) {
            let { guildId: t, updates: n } = e;
            f(t, n);
        },
        CLAN_SETUP_SUBMIT: function (e) {
            let { guildId: t } = e;
            (T = !0), A.delete(t);
        },
        CLAN_SETUP_SUCCESS: function (e) {
            let { guildId: t } = e;
            (T = !1), _.delete(t), A.delete(t);
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
                              ...g(r).verificationForm,
                              ...n
                          }),
                f(r, { verificationForm: t }));
        }
    }));
