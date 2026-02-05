"use strict";
let r;
n.d(t, { A: () => es }), n(321073), n(667532);
var i = n(735438),
    a = n.n(i),
    s = n(311907),
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
    g = n(808728),
    E = n(696451),
    A = n(71393),
    I = n(576705),
    T = n(222823),
    y = n(309010),
    S = n(967198),
    v = n(543465),
    C = n(248465),
    b = n(403362),
    N = n(652215),
    R = n(985018);
let O = "seenQSTutorial",
    D = 5,
    L = 7,
    w = 3,
    x = 100,
    P = [u.rD.USER, u.rD.GROUP_DM, u.rD.TEXT_CHANNEL, u.rD.GUILD, u.rD.APPLICATION, u.rD.LINK, u.rD.IN_APP_NAVIGATION],
    M = 0,
    k = !1,
    U = !1,
    G = null,
    V = [],
    F = null,
    B = 0,
    j = [],
    H = [],
    Y = null;
function W() {
    (U = A.A.getGuildCount() >= 3 || a().size(h.A.getMutablePrivateChannels()) >= 20), (j = []);
}
function K(e) {
    let t = [];
    return (
        m.A.getRecentlyEditedDrafts(m.C.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = z(r);
            if (null != i) {
                let e = { record: i, channelId: r };
                t.push(e);
            }
        }),
        t
    );
}
function z(e) {
    let t = (0, c.A)(e);
    return null == t || (null != G && G !== t.type) ? null : t;
}
function $() {
    let e = S.A.getGuildId() ?? void 0,
        t = y.A.getChannelId() ?? void 0;
    switch (G) {
        case u.rD.USER: {
            let e = p.default.getId();
            return C.Ay.getRecentlyTalked(t, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case u.rD.APPLICATION:
            return C.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
        case u.rD.GUILD:
            return C.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
        case u.rD.TEXT_CHANNEL:
            return C.Ay.queryChannels({
                query: "",
                guildId: S.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0,
            });
        case u.rD.VOICE_CHANNEL:
            return C.Ay.queryChannels({
                query: "",
                guildId: S.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: g.vM,
                allowEmptyQueries: !0,
            });
    }
    let n = [],
        r = new Set(),
        i = K((e) => e === t || H.includes(e) || r.has(e));
    if (i.length > 0)
        for (let e of (n.push((0, u.jF)(R.intl.string(R.t["4B63jZ"]))), i)) r.add(e.channelId), n.push(e.record);
    let a = T.Ay.getMentionChannelIds()
        .filter((e) => e !== t && !H.includes(e) && !r.has(e))
        .map((e) => z(e))
        .filter(b.Vq)
        .reverse();
    if (a.length > 0) for (let e of (n.push((0, u.jF)(R.intl.string(R.t["61Df13"]))), a)) r.add(e.record.id), n.push(e);
    if (null != e) {
        let i = g.Ay.getSelectableChannelIds(e)
            .filter((e) => {
                let n = h.A.getChannel(e);
                return (
                    !(
                        null == n ||
                        e === t ||
                        H.includes(e) ||
                        r.has(e) ||
                        v.Ay.isChannelMuted(n.guild_id, e) ||
                        (null != n.parent_id && v.Ay.isChannelMuted(n.guild_id, n.parent_id))
                    ) && (0, d.Y)(n)
                );
            })
            .map((e) => z(e))
            .filter((e) => e);
        Object.values(_.A.getActiveJoinedUnreadThreadsForGuild(e)).forEach((e) => {
            for (let t in e) {
                let e = z(t);
                null == e || r.has(e.record.id) || H.includes(t) || i.push(e);
            }
        }),
            i.length > 0 && (n.push((0, u.jF)(R.intl.string(R.t.ieCAhD))), (n = n.concat(i)));
    }
    let s = Math.min((n.length > 0 ? w : L) + 1, H.length),
        o = [];
    for (let e = 1; e < s; e += 1) {
        let t = z(H[e]);
        null != t &&
            ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                I.A.can(N.xBc.VIEW_CHANNEL, t.record)) &&
            (o.push(t), r.add(t.record.id));
    }
    return o.length > 0 && (n = [(0, u.jF)(R.intl.string(R.t["80lOZ1"])), ...o, ...n]), n;
}
function q(e, t) {
    switch (G) {
        case u.rD.USER: {
            let t = A.A.getGuild(S.A.getGuildId());
            e.unshift(
                (0, u.jF)(
                    null != t ? R.intl.formatToPlainString(R.t.FREzQs, { name: t.name }) : R.intl.string(R.t.XFYW1o),
                ),
            ),
                (V = e);
            break;
        }
        case u.rD.TEXT_CHANNEL:
            e.unshift((0, u.jF)(R.intl.string(R.t.W26k4V))), (V = e);
            break;
        case u.rD.VOICE_CHANNEL:
            e.unshift((0, u.jF)(R.intl.string(R.t.zUoI5C))), (V = e);
            break;
        case u.rD.GUILD:
            e.unshift((0, u.jF)(R.intl.string(R.t.olADPs))), (V = e);
            break;
        case u.rD.APPLICATION:
            e.unshift((0, u.jF)(R.intl.string(R.t.VwK1ld))), (V = e);
            break;
        default:
            V = e;
    }
    if (t !== F) (F = t), (B = Math.max(t.length, B)), (M = (0, u.Vv)(u.vB.DOWN, -1, V));
    else {
        let e = V[M];
        null != e && e.type === u.rD.HEADER && (M = (0, u.Vv)(u.vB.DOWN, M, V));
    }
    ea.emitChange();
}
function Z(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim(),
        a = S.A.getGuildId() ?? void 0,
        s = new Set([`user:${p.default.getId()}`]);
    null != a && s.add(`guild:${a}`),
        (Y = Date.now()),
        (r = r ?? new u.Ay(J, P, null != n ? x : D, { frecencyBoosters: !0, blacklist: s, allowSnowflake: !0 }, x)),
        (F = null),
        (B = i.length),
        (G = n),
        r.search(i);
}
function Q(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (H = H.filter((e) => e !== t)).unshift(t), H.length > L + 1 && (H.length = L + 1);
}
function X(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}
function J(e, t) {
    X((e = "" === (t = t.trim()).trim() ? $() : e), j) || ((j = e), q(e, t));
}
function ee() {
    (F = null), (B = 0), (j = []), null != r && (r.destroy(), (r = null));
}
function et(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim();
    if (null == r) return !1;
    if (G !== n) {
        r.setResultTypes(null != n ? [n] : P), r.setLimit(null != n ? x : D);
        let e = S.A.getGuildId() ?? void 0;
        n === u.rD.USER && null != e
            ? r.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
            : n === u.rD.VOICE_CHANNEL
              ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
              : r.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
    }
    if ((G = n) === u.rD.USER) {
        let e = S.A.getGuildId() ?? null;
        r.search(i, e);
    } else r.search(i, void 0);
}
function en(e) {
    M = e.selectedIndex;
}
function er() {
    if (k) return !1;
    (k = !0), o.w.set(O, !0);
}
class ei extends s.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(_.A, p.default, h.A, m.A, g.Ay, E.Ay, A.A, I.A, T.Ay, y.A, S.A, f.A, v.Ay),
            this.syncWith([f.A], () => !0),
            (k = o.w.get(O) || !1),
            (H = e?.channelHistory ?? []);
    }
    getState() {
        return { channelHistory: H };
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
        let n = Date.now() - t >= N.D2K;
        return U && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return H;
    }
    getLastShowTimestamp() {
        return Y;
    }
    getProps() {
        return {
            theme: f.A.theme,
            query: null != r ? r.query : "",
            queryMode: G,
            results: V,
            selectedIndex: M,
            seenTutorial: k,
            maxQueryLength: B,
        };
    }
}
let ea = new ei(l.h, {
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
        CHANNEL_SELECT: Q,
    }),
    es = ea;
