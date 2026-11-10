(t.d(n, { i: () => p }), t(582128));
var l = t(73153),
    i = t(157559),
    r = t(870801),
    a = t(101392),
    s = t(287809),
    o = t(129230),
    u = t(284009),
    c = t.n(u),
    d = t(451909),
    f = t(963307),
    A = t(576705),
    S = t(652215);
let h = new RegExp(/@(:?everyone|here)/);
function T(e, n) {
    let t = 0;
    return n.isThread()
        ? (n.memberCount ?? 0)
        : (f.Ay.getProps(n.getGuildId(), n.id).groups.forEach((n) => {
              ("@everyone" === e || n.id !== S.clD.OFFLINE) && (t += n.count);
          }),
          t);
}
let m = function (e, n) {
        let t = n.getGuildId();
        return (c()(null != t, "isGuildChannel with null guildId"), T(e, n) > 30 && A.A.can(S.xBc.MENTION_EVERYONE, n));
    },
    g = function (e, n) {
        for (let t of d.Ay.parsePreprocessor(n, e)) {
            let e = (function e(n) {
                if ("string" == typeof n.content) {
                    if ("inlineCode" === n.type || "codeBlock" === n.type) return null;
                    let e = n.content?.match(h);
                    if (null != e) {
                        let [n] = e;
                        return n;
                    }
                } else if (Array.isArray(n.content))
                    for (let t of n.content) {
                        let n = e(t);
                        if (null != n) return n;
                    }
                return null;
            })(t);
            if (null != e) return e;
        }
        return null;
    };
var x = t(792996);
let E = [
    {
        check(e, n, t) {
            if (!t || null == n.getGuildId()) return !1;
            let l = g(e, n);
            if (null == l || !m(l, n)) return !1;
            let i = T(l, n),
                r = Math.pow(10, Math.floor(Math.log10(i))),
                a = x.t["47E5Rz"];
            return (
                n.isForumPost() ? (a = x.t.sYW2cy) : n.isThread() && (a = x.t["2YaiQ1"]),
                {
                    body: x.intl.formatToPlainString(a, { role: l, count: (Math.trunc(i / r) * r).toLocaleString() }),
                    footer: x.intl.string(x.t.mVyrtu),
                }
            );
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => t.e(480467).then(t.t.bind(t, 661022, 19)),
            light: () => t.e(892705).then(t.t.bind(t, 111992, 19)),
        },
    },
    { check: (e) => !!S.AKn.test(e) && { body: x.intl.string(x.t.sTwS1a) }, analyticsType: "API Token Warning" },
];
var R = t(448645);
function p(e) {
    let {
            openWarningPopout: n,
            type: t,
            content: u,
            channel: c,
            restrictMentions: d = !0,
            respectCooldown: f = !0,
            hasStickers: A = !1,
            hasAttachments: h = !1,
            hasComponents: T = !1,
        } = e,
        m = R.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            let {
                openWarningPopout: n,
                type: t,
                content: s,
                channel: u,
                restrictMentions: c,
                respectCooldown: d,
                userCanUsePremiumMessageLength: f,
                hasStickers: A,
                hasAttachments: h,
                hasComponents: T,
                resolve: m,
            } = e;
            if (0 === s.length && !t.submit?.allowEmptyMessage && !A && !h && !T)
                return void m({ valid: !1, failureReason: S.X8x.EMPTY_MESSAGE });
            let g = f ? 4e3 : 2e3;
            if (s.length > g) {
                if (f || null == u) {
                    var R;
                    ((R = s.length),
                        i.A.show({
                            title: x.intl.string(x.t.l8rYLt),
                            body: x.intl.formatToPlainString(x.t.FfjF15, { currentLength: R, maxLength: g }),
                            confirmText: x.intl.string(x.t.BddRzS),
                        }),
                        o.default.track(S.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: R,
                        }));
                } else l.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: u, content: s });
                m({ valid: !1, failureReason: S.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != u) {
                if (null != u.getGuildId() && d && a.A.getSlowmodeCooldownGuess(u.id) > 0)
                    return void m({ valid: !1, failureReason: S.X8x.SLOWMODE_COOLDOWN });
                if (null != n)
                    for (let { check: e, analyticsType: t, animation: l } of E) {
                        let i = e(s, u, c);
                        if (!1 !== i)
                            return void n({
                                analyticsType: t,
                                channel: u,
                                onCancel: () => m({ valid: !1, failureReason: S.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => m({ valid: !0 }),
                                popoutText: i,
                                animation: l,
                            });
                    }
            }
            if (r.Ay.isFull()) {
                (i.A.show({
                    title: x.intl.string(x.t["7Q4eo2"]),
                    body: x.intl.string(x.t.gi6XHp),
                    confirmText: x.intl.string(x.t["Z4U1g/"]),
                }),
                    m({ valid: !1, failureReason: S.X8x.RATE_LIMITED }));
                return;
            }
            m({ valid: !0 });
        })({
            openWarningPopout: n,
            type: t,
            content: u,
            channel: c,
            restrictMentions: d,
            respectCooldown: f,
            userCanUsePremiumMessageLength: m,
            hasStickers: A,
            hasAttachments: h,
            hasComponents: T,
            resolve: e,
        }),
    );
}
