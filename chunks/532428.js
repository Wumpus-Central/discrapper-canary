(n.d(t, {
    Pr: () => $,
    Qe: () => ec,
    WK: () => e_,
    ZP: () => em,
    _m: () => ef,
    co: () => eh,
    nB: () => ep
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282),
    n(781311),
    n(804061),
    n(704826),
    n(539854),
    n(290780),
    n(642613));
var r = n(658722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(212819),
    u = n(933557),
    d = n(592125),
    _ = n(984933),
    f = n(699516),
    p = n(944486),
    h = n(246946),
    m = n(594174),
    g = n(483360),
    E = n(226951),
    b = n(51144),
    y = n(738018),
    O = n(607802),
    v = n(612806),
    I = n(945577),
    T = n(129301),
    S = n(981631),
    A = n(388032);
function N(e, t, n) {
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
                N(e, t, n[t]);
            }));
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function D() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function L() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function x(e, t) {
    return [e, e.clone().add(1, t)];
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return x(l()().startOf(e).add(t, e), e);
}
function k(e, t, n) {
    return x(l()(e, t).local(), n);
}
function j() {
    return {
        [A.intl.string(A.t.HYiVER)]: () => M('day'),
        [A.intl.string(A.t.cu86KC)]: () => M('day', -1),
        [A.intl.string(A.t['FvBj//'])]: () => M('week'),
        [A.intl.string(A.t['20uWCw'])]: () => M('month'),
        [A.intl.string(A.t['dXC/ho'])]: () => M('year')
    };
}
let U = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    G = '\\d{4}',
    B = '([0-9]{4})-([0-9]{1,2})',
    V = '([^\\d\\s]+)',
    F = RegExp('(?:\\s*('.concat(U, '|').concat(B, '|').concat(G, '|').concat(V, '))'), 'i'),
    Z = RegExp('\\s*(true|false)', 'i');
function H(e) {
    return ''.concat(e, ':');
}
function Y(e) {
    return RegExp(H(e), 'i');
}
function W(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = S.Xyh.test(n) ? n : r(n === S.ME ? m.default.getCurrentUser() : null != e.getMatch(4) ? m.default.findByTag(e.getMatch(4)) : m.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function K(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = j()[i];
    return (null != a ? ([n, r] = a()) : w().has(i) ? ([n, r] = k(i, 'MMMM', 'month')) : D().has(i) ? ([n, r] = k(i, 'dddd', 'day')) : L().has(i) ? ([n, r] = k(i, 'YYYY', 'year')) : ([n, r] = k(i, S.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0));
}
function z(e, t, n) {
    let r = _.ZP.getChannels(n)[_.sH].concat(_.ZP.getChannels(n)[_.Zb]),
        i = _.ZP.getTextChannelNameDisambiguations(n),
        a = v.Z.getCurrentConfig({ location: 'guildChannelValidator' }).enabled,
        s = o()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(a && null != n ? d.Z.getAllThreadsForGuild(n) : [])
            .filter((e) => {
                var n, r;
                return t === (null != (r = null == (n = i[e.id]) ? void 0 : n.name) ? r : e.name);
            })
            .value();
    return (null == s ? void 0 : s.length) > 0 && (e.setData('channels', s), !0);
}
function q(e, t) {
    let n = Object.values(d.Z.getMutablePrivateChannels()).filter((e) => {
        if (t === (0, u.F6)(e, m.default, f.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = m.default.getUser(n);
            return null != r && t === b.ZP.getUserTag(r);
        }
    });
    return (null == n ? void 0 : n.length) > 0 && (e.setData('channels', n), !0);
}
function X(e) {
    let t = e.getMatch(1);
    t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t));
    let n = y.Z.getSelectedSearchContext();
    if (null == n) return !1;
    if (n.type === S.aib.GUILD) return z(e, t, n.guildId);
    let r = (0, I.a)({ location: 'channelValidator' });
    return n.type === S.aib.DMS && !!r && q(e, t);
}
function Q(e) {
    let t = {
        [A.intl.string(A.t.ZNR2fn)]: 'link',
        [A.intl.string(A.t['20uQR0'])]: 'embed',
        [A.intl.string(A.t.L4lxyM)]: 'poll',
        [A.intl.string(A.t.nrpA5O)]: 'snapshot',
        [A.intl.string(A.t['AV/v6u'])]: 'file',
        [A.intl.string(A.t.XM9XGB)]: 'video',
        [A.intl.string(A.t.TNLcp6)]: 'image',
        [A.intl.string(A.t.F8Wf0d)]: 'sound',
        [A.intl.string(A.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function J() {
    return [...Array.from(w()), ...Array.from(D()), ...Array.from(L()), ...Object.keys(j())];
}
function $() {
    return o().sample(J());
}
function ee(e, t, n) {
    return et(e, t, J()).map((e) =>
        P(C({}, e), {
            group: n,
            key: ''.concat(n, '-').concat(e.text)
        })
    );
}
function et(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function en(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [];
    e.forEach((e) => {
        let t = e.getData('channels');
        null != t && t.forEach((e) => n.push(e.id));
    });
    let r = (e) => {
            null == e || t.has(e.id) || (i.push(e), t.add(e.id));
        },
        i = [];
    return (
        n.forEach((e) => {
            let t = d.Z.getChannel(e);
            if (null != t)
                if (t.isDM()) {
                    let e = t.getRecipientId();
                    r(m.default.getUser(e));
                } else
                    t.isGroupDM() &&
                        t.recipients.forEach((e) => {
                            r(m.default.getUser(e));
                        });
        }),
        i
    );
}
function er(e) {
    let t,
        { query: n, searchContext: r, maxResults: i = 10, tokens: a } = e,
        o = {
            query: (n = n.split('#')[0]),
            limit: i,
            request: !1
        };
    switch (r.type) {
        case S.aib.GUILD:
            t = g.ZP.queryGuildUsers(P(C({}, o), { guildId: r.guildId }));
            break;
        case S.aib.CHANNEL:
            t = g.ZP.queryChannelUsers(P(C({}, o), { channelId: r.channelId }));
            break;
        case S.aib.DMS:
            let s = en(null != a ? a : []);
            if (null != s && s.length > 0) {
                let e = m.default.getCurrentUser();
                (null != e && s.push(e),
                    (t = g.ZP.queryUsers(
                        P(C({}, o), {
                            users: s,
                            boosters: (0, g.Cq)(c.h8.USER)
                        })
                    )));
            } else t = g.ZP.queryAllUsers(P(C({}, o), { boosters: (0, g.Cq)(c.h8.USER) }));
            break;
        default:
            return [];
    }
    let l = m.default.getCurrentUser(),
        u = n.toLowerCase().replace(/^@/, ''),
        d = null != l && n.length > 0 && (A.intl.string(A.t.Qf3ptr).startsWith(u) || S.ME.substr(1).startsWith(u)),
        _ = t
            .filter((e) => {
                let { record: t } = e;
                return !f.Z.isBlockedOrIgnored(t.id) && (!d || t.id !== (null == l ? void 0 : l.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: b.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        d &&
            _.unshift({
                text: S.ME,
                user: l
            }),
        _
    );
}
function ei() {
    return !h.Z.hidePersonalInformation;
}
function ea(e, t) {
    let n = g.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            boosters: (0, g.Cq)(c.h8.GROUP_DM)
        }),
        r = g.ZP.queryDMChannels({
            query: e,
            limit: t,
            boosters: (0, g.Cq)(c.h8.USER)
        }),
        i = o()(n.concat(r))
            .sort(c.qU)
            .map((e) => {
                let { record: t, comparator: n } = e;
                return {
                    text: n,
                    channel: t,
                    key: null == t ? void 0 : t.id
                };
            })
            .filter((e) => null != e.text && null != e.channel && null != e.key)
            .value();
    if ('' === e.trim()) {
        let e = p.Z.getChannelId(),
            t = d.Z.getChannel(e);
        if (null != t && t.isPrivate()) {
            let n = i.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = i[n];
                (i.splice(n, 1), i.unshift(e));
            } else if (t.isGroupDM()) {
                let e = (0, u.F6)(t, m.default, f.Z);
                i.unshift({
                    text: e,
                    channel: t,
                    key: t.id
                });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = m.default.getUser(e);
                if (null != n) {
                    let e = b.ZP.getUserTag(n);
                    i.unshift({
                        text: e,
                        channel: t,
                        key: t.id
                    });
                }
            }
        }
    }
    return i.slice(0, t);
}
function eo(e, t, n) {
    let r = v.Z.getCurrentConfig({ location: 'getInFilterAutocompletionsForGuild' }).enabled,
        i = g.ZP.queryChannels({
            query: e,
            type: _.sH,
            guildId: t,
            limit: 1 / 0,
            allowEmptyQueries: !0,
            includeAllThreads: r
        })
            .concat(
                g.ZP.queryChannels({
                    query: e,
                    type: _.Zb,
                    guildId: t,
                    limit: 1 / 0,
                    allowEmptyQueries: !0
                })
            )
            .map((e) => {
                let { record: t } = e;
                return t;
            });
    if ((r || (i = i.filter((e) => !e.isThread())), '' === e.trim())) {
        let e = p.Z.getChannelId(t),
            n = i.find((t) => t.id === e);
        null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
    }
    let a = _.ZP.getTextChannelNameDisambiguations(t);
    return o()(i)
        .take(n)
        .map((e) => {
            var t, n;
            return {
                text: ''.concat(null != (n = null == (t = a[e.id]) ? void 0 : t.name) ? n : e.name),
                channel: e,
                key: e.id
            };
        })
        .value();
}
function es(e, t, n) {
    if ((e.startsWith('"') && e.endsWith('"') ? (e = e.substring(1, e.length - 1).replaceAll(/\\(.)/g, (e, t) => t)) : e.startsWith('"') && (e = e.substring(1).replaceAll(/\\(.)/g, (e, t) => t)), '#' === e[0] && (e = e.substring(1)), t.type === S.aib.GUILD)) return eo(e, t.guildId, n);
    let r = (0, I.a)({ location: 'getInFilterAutocompletions' });
    return t.type === S.aib.DMS && r ? ea(e, n) : [];
}
let el = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ec = (function (e) {
    return ((e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e);
})({});
function eu() {
    let e = [A.intl.string(A.t.ZNR2fn), A.intl.string(A.t['20uQR0']), A.intl.string(A.t.L4lxyM), A.intl.string(A.t['AV/v6u']), A.intl.string(A.t.XM9XGB), A.intl.string(A.t.TNLcp6), A.intl.string(A.t.F8Wf0d), A.intl.string(A.t.PJgX2t), A.intl.string(A.t.nrpA5O)];
    return {
        [S.dCx.FILTER_FROM]: {
            regex: Y(A.intl.string(A.t['1TUdFh'])),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t['1TUdFh'])),
            plainText: A.intl.string(A.t['1TUdFh']),
            validator: ei,
            getAutocompletions: er
        },
        [S.dCx.ANSWER_USERNAME_FROM]: {
            follows: [S.dCx.FILTER_FROM],
            regex: el,
            validator: W,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [S.dCx.FILTER_MENTIONS]: {
            regex: Y(A.intl.string(A.t.i96lOz)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.i96lOz)),
            plainText: A.intl.string(A.t.i96lOz),
            validator: ei,
            getAutocompletions: er
        },
        [S.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [S.dCx.FILTER_MENTIONS],
            regex: el,
            validator: W,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [S.dCx.FILTER_HAS]: {
            regex: Y(A.intl.string(A.t.CqCvio)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.CqCvio)),
            plainText: A.intl.string(A.t.CqCvio),
            getAutocompletions(t) {
                let { query: n, maxResults: r } = t;
                return et(n, r, e);
            }
        },
        [S.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(e.map((e) => E.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [S.dCx.FILTER_HAS],
            validator: Q,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [S.dCx.FILTER_FILE_TYPE]: {
            regex: Y(A.intl.string(A.t.TMNjFh)),
            key: H(A.intl.string(A.t.TMNjFh)),
            plainText: A.intl.string(A.t.TMNjFh),
            componentType: 'FILTER'
        },
        [S.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [S.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [S.dCx.FILTER_FILE_NAME]: {
            regex: Y(A.intl.string(A.t['5xtLRE'])),
            key: H(A.intl.string(A.t['5xtLRE'])),
            plainText: A.intl.string(A.t['5xtLRE']),
            componentType: 'FILTER'
        },
        [S.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [S.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [S.dCx.FILTER_BEFORE]: {
            regex: Y(A.intl.string(A.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t['qZ+7BA'])),
            plainText: A.intl.string(A.t['qZ+7BA']),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return ee(t, n, S.dCx.FILTER_BEFORE);
            }
        },
        [S.dCx.FILTER_ON]: {
            regex: Y('('.concat(A.intl.string(A.t.tIxkOj), '|').concat(A.intl.string(A.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.h2NzSU)),
            plainText: A.intl.string(A.t.h2NzSU),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return ee(t, n, S.dCx.FILTER_ON);
            }
        },
        [S.dCx.FILTER_AFTER]: {
            regex: Y(A.intl.string(A.t.KSDx7O)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.KSDx7O)),
            plainText: A.intl.string(A.t.KSDx7O),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return ee(t, n, S.dCx.FILTER_AFTER);
            }
        },
        [S.dCx.ANSWER_BEFORE]: {
            regex: F,
            follows: [S.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => K(e, 'before')
        },
        [S.dCx.ANSWER_ON]: {
            regex: F,
            follows: [S.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => K(e, 'on')
        },
        [S.dCx.ANSWER_AFTER]: {
            regex: F,
            follows: [S.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => K(e, 'after')
        },
        [S.dCx.FILTER_IN]: {
            regex: Y(A.intl.string(A.t.WNpFHR)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.WNpFHR)),
            plainText: A.intl.string(A.t.WNpFHR),
            validator: () => {
                let e = y.Z.getSelectedSearchContext();
                return null != e && (0, O.R6)(e.type);
            },
            getAutocompletions(e) {
                let { query: t, searchContext: n, maxResults: r } = e;
                return es(t, n, r);
            }
        },
        [S.dCx.ANSWER_IN]: {
            regex: T.e,
            mutable: !0,
            follows: [S.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: X,
            queryKey: 'channel_id'
        },
        [S.dCx.FILTER_PINNED]: {
            regex: Y(A.intl.string(A.t['0B74eX'])),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t['0B74eX'])),
            plainText: A.intl.string(A.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [S.dCx.ANSWER_PINNED]: {
            regex: Z,
            componentType: 'ANSWER',
            follows: [S.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let t = e.getMatch(1);
                return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
            }
        }
    };
}
let ed = {};
function e_() {
    Object.assign(ed, eu());
}
function ef(e) {
    return S.TNx.test(e);
}
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(ed).length,
        n = [];
    for (let r of Object.keys(ed)) {
        if (n.length >= t) break;
        let a = ed[r].key;
        ef(r) &&
            null != a &&
            i()(e.toLowerCase(), a) &&
            n.push({
                token: r,
                text: a
            });
    }
    return n;
}
function eh(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, '');
    return A.intl.string(A.t.Qf3ptr).startsWith(t) || S.ME.substring(1).startsWith(t);
}
let em = ed;
