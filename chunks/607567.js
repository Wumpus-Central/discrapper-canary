"use strict";
n.d(t, { Ay: () => U, RQ: () => L, hz: () => O }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(873298),
    l = n(713402),
    o = n(228366),
    d = n(181079),
    c = n(5180),
    u = n(889227),
    _ = n(280450),
    E = n(734057),
    A = n(696451),
    h = n(287809),
    I = n(977997),
    f = n(935208),
    p = n(427262),
    T = n(652215);
let m = Object.freeze([]),
    g = {},
    S = null;
function N(e) {
    let t = g[e];
    return null == t && ((t = new y(e)), (g[e] = t)), t;
}
function C(e, t) {
    return A.Ay.getMember(e, t.id);
}
function R(e, t, n) {
    let i = t?.nick ?? p.Ay.getName(n);
    return { member: t, comparator: O(e, i) };
}
function O(e, t) {
    return `${e.selfStream ? "\0" : "\x01"}${t.toLowerCase()}\0${e.userId}`;
}
function L(e, t, n, i) {
    var r;
    let a = h.default.getUser(n),
        s = null == a;
    null == a && (a = new u.A({ id: n, username: "...", discriminator: n.slice(-5, -1) }));
    let { member: l, comparator: o } = R(e, C(t, (r = a)), r),
        d = {
            voiceState: e,
            user: a,
            member: l,
            comparator: o,
            nick: l?.nick,
            connectedOn: i?.connectedOn ?? Date.now(),
        };
    return s && (d._isPlaceholder = !0), d;
}
class y {
    guildId;
    _pending = new Set();
    _voiceStates = new l.J(
        (e) => {
            let {
                voiceState: { channelId: t },
            } = e;
            return null != t ? [t] : [];
        },
        (e) => {
            let { comparator: t } = e;
            return t;
        },
    );
    constructor(e) {
        this.guildId = e;
    }
    updateVoiceState(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = I.A.getVoiceState(this.guildId, e),
            n = this._voiceStates.get(e),
            i = h.default.getUser(e);
        if (null != t && null != i) {
            if (null == n) return this._voiceStates.set(e, L(t, this.guildId, e)), !0;
            else if (n.voiceState !== t) {
                let r = C(this.guildId, i),
                    a = r?.nick ?? p.Ay.getName(i);
                return this._voiceStates.set(e, { ...n, member: r, comparator: O(t, a), nick: a, voiceState: t }), !0;
            }
        } else if (null != n) return this._voiceStates.delete(e), !0;
        return !1;
    }
    updateMember(e) {
        if (null != this._pending) return this._pending.add(e), !1;
        let t = this._voiceStates.get(e),
            n = h.default.getUser(e);
        if (null != t && null != n) {
            let i = C(this.guildId, n);
            if (i?.nick !== t.member?.nick || i?.avatar !== t.member?.avatar) {
                let { comparator: r } = R(t.voiceState, i, n);
                return this._voiceStates.set(e, { ...t, member: i, comparator: r, nick: i?.nick }), !0;
            }
        }
        return !1;
    }
    updateUsers() {
        return (
            null == this._pending &&
            this._voiceStates.values().reduce((e, t) => {
                let n = h.default.getUser(t.user.id);
                return null != n && t.user !== n
                    ? (this._voiceStates.set(n.id, L(t.voiceState, this.guildId, n.id, t)), !0)
                    : e;
            }, !1)
        );
    }
    getUserIds() {
        return this.processPending(), this._voiceStates.keys();
    }
    getVoiceStates() {
        return this.processPending(), this._voiceStates.indexes();
    }
    getVoiceStatesForChannel(e) {
        this.processPending();
        let t = this._voiceStates.values(e);
        return 0 === t.length ? m : t;
    }
    countVoiceStatesForChannel(e) {
        return this.processPending(), this._voiceStates.size(e);
    }
    getVersion() {
        return this.processPending(), this._voiceStates.version;
    }
    processPending() {
        if (null != this._pending) {
            let e = this._pending;
            (this._pending = void 0), e.forEach((e) => this.updateVoiceState(e));
        }
    }
}
function D() {
    return r().reduce(g, (e, t) => t.updateUsers() || e, !1);
}
function v() {
    let e = null != S;
    return (S = null), e;
}
function b() {
    let e = S;
    return null != e && !!e.unknownChannels.some((e) => null != E.A.getChannel(e)) && ((S = null), !0);
}
function M() {
    (g = {}), (S = null);
    let e = I.A.getAllVoiceStates();
    f.default.keys(e).forEach((t) => {
        Object.keys(e[t]).forEach((e) => {
            N(t ?? T.ME).updateVoiceState(e);
        });
    });
}
class P extends a.Ay.Store {
    static displayName = "SortedVoiceStateStore";
    initialize() {
        M(),
            this.waitFor(_.default, E.A, d.A, A.Ay, h.default, I.A),
            this.syncWith([h.default], D),
            this.syncWith([d.A], v),
            this.syncWith([E.A], b);
    }
    getVoiceStates(e) {
        return (0, c.ai)(e)
            ? (function () {
                  if (
                      null != S &&
                      (function () {
                          let e = S;
                          if (
                              null == e ||
                              e.favoriteChannels !== d.A.getFavoriteChannels() ||
                              e.unknownChannels.some((e) => null != E.A.getChannel(e))
                          )
                              return !1;
                          for (let [t, n] of e.versions) if (g[t]?.getVersion() !== n) return !1;
                          return !0;
                      })()
                  )
                      return S.result;
                  let e = d.A.getFavoriteChannels(),
                      t = new Map(),
                      n = [],
                      i = {};
                  for (let r of f.default.keys(e)) {
                      if (e[r].type === s.Ip.CATEGORY) continue;
                      let a = E.A.getChannel(r);
                      if (null == a) {
                          n.push(r);
                          continue;
                      }
                      if (!a.isVocal()) continue;
                      let l = a.getGuildId() ?? T.ME,
                          o = N(l);
                      t.set(l, o.getVersion());
                      let d = o.getVoiceStatesForChannel(r);
                      d.length > 0 && (i[r] = d);
                  }
                  return (S = { favoriteChannels: e, versions: t, unknownChannels: n, result: i }), i;
              })()
            : N(e ?? T.ME).getVoiceStates();
    }
    getAllVoiceStates() {
        return g;
    }
    getVoiceStatesForChannel(e) {
        let t = e.getGuildId(),
            n = e.id;
        return N(t ?? T.ME).getVoiceStatesForChannel(n);
    }
    getVoiceStatesForChannelAlt(e, t) {
        return N(t ?? T.ME).getVoiceStatesForChannel(e);
    }
    countVoiceStatesForChannel(e) {
        let t = E.A.getChannel(e);
        return null == t ? 0 : N(t.getGuildId() ?? T.ME).countVoiceStatesForChannel(e);
    }
    getVoiceStateVersion(e) {
        return N(e ?? T.ME).getVersion();
    }
}
let U = new P(o.h, {
    CONNECTION_OPEN: function () {
        (g = {}), (S = null);
    },
    OVERLAY_INITIALIZE: function () {
        M();
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t } = e,
            n = _.default.getId();
        return null != n && N(t ?? T.ME).updateVoiceState(n);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { guildId: n, userId: i } = t;
            return N(n ?? T.ME).updateVoiceState(i) || e;
        }, !1);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return N(t).updateMember(n.id);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        delete g[t.id];
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete g[t.id];
    },
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1,
            n = new Set(g[e.guildId]?.getUserIds()),
            i = new Set(e.voiceStates?.map((e) => e.userId)),
            r = new Set(e.removedVoiceStateUsers);
        for (let r of new Set([...n, ...i])) t = N(e.guildId).updateVoiceState(r) || t;
        for (let i of n) r.has(i) || (t = N(e.guildId).updateMember(i) || t);
        return t;
    },
});
