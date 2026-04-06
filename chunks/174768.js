"use strict";
let r;
n.d(t, { A: () => ea }), n(321073), n(667532);
var i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(629357),
    c = n(280157),
    d = n(455234),
    _ = n(863005),
    f = n(544028),
    p = n(961350),
    h = n(734057),
    m = n(31717),
    E = n(808728),
    g = n(696451),
    A = n(71393),
    I = n(576705),
    T = n(222823),
    S = n(309010),
    y = n(967198),
    v = n(543465),
    N = n(248465),
    C = n(403362),
    R = n(652215),
    O = n(985018);
let b = "seenQSTutorial",
    D = 5,
    L = 7,
    w = 3,
    M = 100,
    x = [u.rD.USER, u.rD.GROUP_DM, u.rD.TEXT_CHANNEL, u.rD.GUILD, u.rD.APPLICATION, u.rD.LINK, u.rD.IN_APP_NAVIGATION],
    P = 0,
    k = !1,
    U = !1,
    G = null,
    F = [],
    V = null,
    B = 0,
    H = [],
    j = [],
    Y = null;
function W() {
    (U = A.A.getGuildCount() >= 3 || s().size(h.A.getMutablePrivateChannels()) >= 20), (H = []);
}
function K(e) {
    let t = [];
    return (
        m.A.getRecentlyEditedDrafts(m.C.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = $(r);
            if (null != i) {
                let e = { record: i, channelId: r };
                t.push(e);
            }
        }),
        t
    );
}
function $(e) {
    let t = (0, c.A)(e);
    return null == t || (null != G && G !== t.type) ? null : t;
}
function z() {
    let e = y.A.getGuildId() ?? void 0,
        t = S.A.getChannelId() ?? void 0;
    switch (G) {
        case u.rD.USER: {
            let e = p.default.getId();
            return N.Ay.getRecentlyTalked(t, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case u.rD.APPLICATION:
            return N.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
        case u.rD.GUILD:
            return N.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
        case u.rD.TEXT_CHANNEL:
            return N.Ay.queryChannels({
                query: "",
                guildId: y.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0,
            });
        case u.rD.VOICE_CHANNEL:
            return N.Ay.queryChannels({
                query: "",
                guildId: y.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.vM,
                allowEmptyQueries: !0,
            });
    }
    let n = [],
        r = new Set(),
        i = [];
    for (let e = 1; e < j.length; e += 1) {
        let t = $(j[e]);
        null != t &&
            ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                I.A.can(R.xBc.VIEW_CHANNEL, t.record)) &&
            (i.push(t), r.size < w && r.add(j[e]));
    }
    let s = K((e) => e === t || r.has(e));
    if (s.length > 0)
        for (let e of (n.push((0, u.jF)(O.intl.string(O.t["4B63jZ"]))), s)) r.add(e.channelId), n.push(e.record);
    let a = T.Ay.getMentionChannelIds()
        .filter((e) => e !== t && !r.has(e))
        .map((e) => $(e))
        .filter(C.Vq)
        .reverse();
    if (a.length > 0) for (let e of (n.push((0, u.jF)(O.intl.string(O.t["61Df13"]))), a)) r.add(e.record.id), n.push(e);
    if (null != e) {
        let i = E.Ay.getSelectableChannelIds(e)
            .filter((e) => {
                let n = h.A.getChannel(e);
                return (
                    !(
                        null == n ||
                        e === t ||
                        r.has(e) ||
                        v.Ay.isChannelMuted(n.guild_id, e) ||
                        (null != n.parent_id && v.Ay.isChannelMuted(n.guild_id, n.parent_id))
                    ) && (0, d.Y)(n)
                );
            })
            .map((e) => $(e))
            .filter(C.Vq);
        Object.values(_.A.getActiveJoinedUnreadThreadsForGuild(e)).forEach((e) => {
            for (let t in e) {
                let e = $(t);
                null == e || r.has(e.record.id) || i.push(e);
            }
        }),
            i.length > 0 && (n.push((0, u.jF)(O.intl.string(O.t.ieCAhD))), (n = n.concat(i)));
    }
    let o = n.length > 0 ? w : L;
    return i.length > o && i.splice(o), i.length > 0 && (n = [(0, u.jF)(O.intl.string(O.t["80lOZ1"])), ...i, ...n]), n;
}
function q(e, t) {
    switch (G) {
        case u.rD.USER: {
            let t = A.A.getGuild(y.A.getGuildId());
            e.unshift(
                (0, u.jF)(
                    null != t ? O.intl.formatToPlainString(O.t.FREzQs, { name: t.name }) : O.intl.string(O.t.XFYW1o),
                ),
            ),
                (F = e);
            break;
        }
        case u.rD.TEXT_CHANNEL:
            e.unshift((0, u.jF)(O.intl.string(O.t.W26k4V))), (F = e);
            break;
        case u.rD.VOICE_CHANNEL:
            e.unshift((0, u.jF)(O.intl.string(O.t.zUoI5C))), (F = e);
            break;
        case u.rD.GUILD:
            e.unshift((0, u.jF)(O.intl.string(O.t.olADPs))), (F = e);
            break;
        case u.rD.APPLICATION:
            e.unshift((0, u.jF)(O.intl.string(O.t.VwK1ld))), (F = e);
            break;
        default:
            F = e;
    }
    if (t !== V) (V = t), (B = Math.max(t.length, B)), (P = (0, u.Vv)(u.vB.DOWN, -1, F));
    else {
        let e = F[P];
        null != e && e.type === u.rD.HEADER && (P = (0, u.Vv)(u.vB.DOWN, P, F));
    }
    es.emitChange();
}
function Z(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim(),
        s = y.A.getGuildId() ?? void 0,
        a = new Set([`user:${p.default.getId()}`]);
    null != s && a.add(`guild:${s}`),
        (Y = Date.now()),
        (r = r ?? new u.Ay(J, x, null != n ? M : D, { frecencyBoosters: !0, blacklist: a, allowSnowflake: !0 }, M)),
        (V = null),
        (B = i.length),
        (G = n),
        r.search(i);
}
function X(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (j = j.filter((e) => e !== t)).unshift(t), j.length > L + 1 && (j.length = L + 1);
}
function Q(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}
function J(e, t) {
    Q((e = "" === (t = t.trim()).trim() ? z() : e), H) || ((H = e), q(e, t));
}
function ee() {
    (V = null), (B = 0), (H = []), null != r && (r.destroy(), (r = null));
}
function et(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim();
    if (null == r) return !1;
    if (G !== n) {
        r.setResultTypes(null != n ? [n] : x), r.setLimit(null != n ? M : D);
        let e = y.A.getGuildId() ?? void 0;
        n === u.rD.USER && null != e
            ? r.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
            : n === u.rD.VOICE_CHANNEL
              ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
              : r.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
    }
    if ((G = n) === u.rD.USER) {
        let e = y.A.getGuildId() ?? null;
        r.search(i, e);
    } else r.search(i, void 0);
}
function en(e) {
    P = e.selectedIndex;
}
function er() {
    if (k) return !1;
    (k = !0), o.w.set(b, !0);
}
class ei extends a.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(_.A, p.default, h.A, m.A, E.Ay, g.Ay, A.A, I.A, T.Ay, S.A, y.A, f.A, v.Ay),
            this.syncWith([f.A], () => !0),
            (k = o.w.get(b) || !1),
            (j = e?.channelHistory ?? []);
    }
    getState() {
        return { channelHistory: j };
    }
    isOpen() {
        return null != r;
    }
    getResultTotals(e) {
        return null == r
            ? 0
            : null == e
              ? r.results.reduce((e, t) => (t.type !== u.rD.HEADER ? e + 1 : e), 0)
              : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= R.D2K;
        return U && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return j;
    }
    getLastShowTimestamp() {
        return Y;
    }
    getProps() {
        return {
            theme: f.A.theme,
            query: null != r ? r.query : "",
            queryMode: G,
            results: F,
            selectedIndex: P,
            seenTutorial: k,
            maxQueryLength: B,
        };
    }
}
let es = new ei(l.h, {
        CONNECTION_OPEN: W,
        CONNECTION_OPEN_SUPPLEMENTAL: W,
        QUICKSWITCHER_SHOW: Z,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: Z,
        QUICKSWITCHER_HIDE: ee,
        OVERLAY_SET_INPUT_LOCKED: ee,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: ee,
        QUICKSWITCHER_SEARCH: et,
        QUICKSWITCHER_SELECT: en,
        QUICKSWITCHER_SWITCH_TO: er,
        CHANNEL_SELECT: X,
    }),
    ea = es;
