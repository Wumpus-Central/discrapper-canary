"use strict";
n.d(t, { i: () => f }), n(64700);
var r = n(73153),
    i = n(157559),
    s = n(884384),
    a = n(101392),
    o = n(287809),
    l = n(954571),
    u = n(565579),
    c = n(927578),
    d = n(652215),
    _ = n(985018);
function f(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: f,
            stickers: p,
            uploads: h,
            channel: E,
            restrictMentions: m = !0,
            respectCooldown: g = !0,
        } = e,
        A = c.Ay.canUseIncreasedMessageLength(o.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            let {
                openWarningPopout: t,
                type: n,
                content: o,
                stickers: c,
                uploads: f,
                channel: p,
                restrictMentions: h,
                respectCooldown: E,
                userCanUsePremiumMessageLength: m,
                resolve: g,
            } = e;
            if (
                0 === o.length &&
                !n.submit?.allowEmptyMessage &&
                (null == c || 0 === c.length) &&
                (null == f || 0 === f.length)
            )
                return void g({ valid: !1, failureReason: d.X8x.EMPTY_MESSAGE });
            let A = m ? d.CS1 : d.uvi;
            if (o.length > A) {
                if (m || null == p) {
                    var I;
                    (I = o.length),
                        i.A.show({
                            title: _.intl.string(_.t.l8rYLt),
                            body: _.intl.formatToPlainString(_.t.FfjF15, { currentLength: I, maxLength: A }),
                            confirmText: _.intl.string(_.t.BddRzS),
                        }),
                        l.default.track(d.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: I,
                        });
                } else r.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: p, content: o });
                g({ valid: !1, failureReason: d.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != p) {
                if (null != p.getGuildId() && E && a.A.getSlowmodeCooldownGuess(p.id) > 0)
                    return void g({ valid: !1, failureReason: d.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: r } of u.m) {
                        let i = e(o, p, h);
                        if (!1 !== i)
                            return void t({
                                analyticsType: n,
                                channel: p,
                                onCancel: () => g({ valid: !1, failureReason: d.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => g({ valid: !0 }),
                                popoutText: i,
                                animation: r,
                            });
                    }
            }
            if (s.Ay.isFull()) {
                i.A.show({
                    title: _.intl.string(_.t["7Q4eo2"]),
                    body: _.intl.string(_.t.gi6XHp),
                    confirmText: _.intl.string(_.t["Z4U1g/"]),
                }),
                    g({ valid: !1, failureReason: d.X8x.RATE_LIMITED });
                return;
            }
            g({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: f,
            stickers: p,
            uploads: h,
            channel: E,
            restrictMentions: m,
            respectCooldown: g,
            userCanUsePremiumMessageLength: A,
            resolve: e,
        }),
    );
}
