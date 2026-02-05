"use strict";
n.d(t, { i: () => h }), n(64700);
var r = n(73153),
    i = n(157559),
    a = n(884384),
    s = n(101392),
    o = n(287809),
    l = n(954571),
    u = n(565579),
    c = n(927578),
    d = n(652215),
    _ = n(985018);
function f(e, t) {
    i.A.show({
        title: _.intl.string(_.t.l8rYLt),
        body: _.intl.formatToPlainString(_.t.FfjF15, { currentLength: e, maxLength: t }),
        confirmText: _.intl.string(_.t.BddRzS),
    }),
        l.default.track(d.HAw.OPEN_MODAL, { type: "Message Too Long Alert", message_content_length: e });
}
function p(e) {
    let {
        openWarningPopout: t,
        type: n,
        content: o,
        stickers: l,
        uploads: c,
        channel: p,
        restrictMentions: h,
        respectCooldown: m,
        userCanUsePremiumMessageLength: g,
        resolve: E,
    } = e;
    if (
        0 === o.length &&
        !n.submit?.allowEmptyMessage &&
        (null == l || 0 === l.length) &&
        (null == c || 0 === c.length)
    )
        return void E({ valid: !1, failureReason: d.X8x.EMPTY_MESSAGE });
    let A = g ? d.CS1 : d.uvi,
        I = !g;
    if (o.length > A) {
        I && null != p ? r.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: p, content: o }) : f(o.length, A),
            E({ valid: !1, failureReason: d.X8x.MESSAGE_TOO_LONG });
        return;
    }
    if (null != p) {
        if (null != p.getGuildId() && m && s.A.getSlowmodeCooldownGuess(p.id) > 0)
            return void E({ valid: !1, failureReason: d.X8x.SLOWMODE_COOLDOWN });
        if (null != t)
            for (let { check: e, analyticsType: n, animation: r } of u.m) {
                let i = e(o, p, h);
                if (!1 !== i)
                    return void t({
                        analyticsType: n,
                        channel: p,
                        onCancel: () => E({ valid: !1, failureReason: d.X8x.SHOUTING_CANCELLED }),
                        onConfirm: () => E({ valid: !0 }),
                        popoutText: i,
                        animation: r,
                    });
            }
    }
    if (a.Ay.isFull()) {
        i.A.show({
            title: _.intl.string(_.t["7Q4eo2"]),
            body: _.intl.string(_.t.gi6XHp),
            confirmText: _.intl.string(_.t["Z4U1g/"]),
        }),
            E({ valid: !1, failureReason: d.X8x.RATE_LIMITED });
        return;
    }
    E({ valid: !0 });
}
function h(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: s,
            restrictMentions: l = !0,
            respectCooldown: u = !0,
        } = e,
        d = c.Ay.canUseIncreasedMessageLength(o.default.getCurrentUser());
    return new Promise((e) =>
        p({
            openWarningPopout: t,
            type: n,
            content: r,
            stickers: i,
            uploads: a,
            channel: s,
            restrictMentions: l,
            respectCooldown: u,
            userCanUsePremiumMessageLength: d,
            resolve: e,
        }),
    );
}
