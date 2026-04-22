n.d(t, { i: () => _ }), n(64700);
var a = n(73153),
    r = n(157559),
    l = n(884384),
    i = n(101392),
    o = n(287809),
    s = n(954571),
    c = n(565579),
    u = n(927578),
    d = n(652215),
    f = n(985018);
function _(e) {
    let {
            openWarningPopout: t,
            type: n,
            content: _,
            stickers: h,
            uploads: A,
            channel: p,
            restrictMentions: m = !0,
            respectCooldown: S = !0,
        } = e,
        g = u.Ay.canUseIncreasedMessageLength(o.default.getCurrentUser());
    return new Promise((e) =>
        (function (e) {
            let {
                openWarningPopout: t,
                type: n,
                content: o,
                stickers: u,
                uploads: _,
                channel: h,
                restrictMentions: A,
                respectCooldown: p,
                userCanUsePremiumMessageLength: m,
                resolve: S,
            } = e;
            if (
                0 === o.length &&
                !n.submit?.allowEmptyMessage &&
                (null == u || 0 === u.length) &&
                (null == _ || 0 === _.length)
            )
                return void S({ valid: !1, failureReason: d.X8x.EMPTY_MESSAGE });
            let g = m ? d.CS1 : d.uvi;
            if (o.length > g) {
                if (m || null == h) {
                    var b;
                    (b = o.length),
                        r.A.show({
                            title: f.intl.string(f.t.l8rYLt),
                            body: f.intl.formatToPlainString(f.t.FfjF15, { currentLength: b, maxLength: g }),
                            confirmText: f.intl.string(f.t.BddRzS),
                        }),
                        s.default.track(d.HAw.OPEN_MODAL, {
                            type: "Message Too Long Alert",
                            message_content_length: b,
                        });
                } else a.h.dispatch({ type: "MESSAGE_LENGTH_UPSELL", channel: h, content: o });
                S({ valid: !1, failureReason: d.X8x.MESSAGE_TOO_LONG });
                return;
            }
            if (null != h) {
                if (null != h.getGuildId() && p && i.A.getSlowmodeCooldownGuess(h.id) > 0)
                    return void S({ valid: !1, failureReason: d.X8x.SLOWMODE_COOLDOWN });
                if (null != t)
                    for (let { check: e, analyticsType: n, animation: a } of c.m) {
                        let r = e(o, h, A);
                        if (!1 !== r)
                            return void t({
                                analyticsType: n,
                                channel: h,
                                onCancel: () => S({ valid: !1, failureReason: d.X8x.SHOUTING_CANCELLED }),
                                onConfirm: () => S({ valid: !0 }),
                                popoutText: r,
                                animation: a,
                            });
                    }
            }
            if (l.Ay.isFull()) {
                r.A.show({
                    title: f.intl.string(f.t["7Q4eo2"]),
                    body: f.intl.string(f.t.gi6XHp),
                    confirmText: f.intl.string(f.t["Z4U1g/"]),
                }),
                    S({ valid: !1, failureReason: d.X8x.RATE_LIMITED });
                return;
            }
            S({ valid: !0 });
        })({
            openWarningPopout: t,
            type: n,
            content: _,
            stickers: h,
            uploads: A,
            channel: p,
            restrictMentions: m,
            respectCooldown: S,
            userCanUsePremiumMessageLength: g,
            resolve: e,
        }),
    );
}
